

    /* ==========================================================================
       PHÂN ĐOẠN 2: KHỞI TẠO BẢN ĐỒ OPENSTREETMAP (TIÊU CHUẨN, SẮC NÉT, MIỄN PHÍ)
       Tích hợp cơ chế CDN dự phòng và tự phục hồi khi mạng yếu
       ========================================================================== */
    let map = null;
    let markersLayer = null;
    const markersMap = new Map(); // Lưu đối tượng marker theo id điểm

    function ensureLeafletLoaded(onReady) {
      if (typeof L !== 'undefined' && typeof L.map === 'function') {
        onReady();
        return;
      }

      console.warn('Leaflet đang được tải từ CDN dự phòng (Cloudflare / jsDelivr)...');
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.js';
      script.onload = () => {
        if (typeof L !== 'undefined') onReady();
      };
      script.onerror = () => {
        const script2 = document.createElement('script');
        script2.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script2.onload = () => {
          if (typeof L !== 'undefined') onReady();
        };
        document.head.appendChild(script2);
      };
      document.head.appendChild(script);
    }

    function initMap() {
      // 1. Luôn kích hoạt danh sách điểm và chú giải ngay lập tức
      renderSidebarList(floodPoints);
      updateFloatingLegend(floodPoints);
      setupFloatingLegendControls();

      // 2. Kiểm tra và tải thư viện Leaflet an toàn
      ensureLeafletLoaded(() => {
        try {
          const mapEl = document.getElementById('map');
          if (!mapEl) return;

          // Nếu bản đồ đã khởi tạo rồi thì không tạo lại
          if (map) {
            map.invalidateSize();
            return;
          }

          // Tọa độ trung tâm: Vùng TPHCM mở rộng bao quát cả Bình Dương và Vũng Tàu
          const defaultCenter = [10.8231, 106.6297];
          const defaultZoom = 11;

          // Khóa khu vực hiển thị trong phạm vi khu vực Miền Nam (Tây Nam Bộ & Đông Nam Bộ)
          // Giới hạn địa lý: từ cực Nam Cà Mau/Kiên Giang đến giáp Tây Nguyên/Duyên Hải Nam Trung Bộ
          const southVietnamBounds = L.latLngBounds(
            [8.4, 104.0],  // Điểm cực Tây Nam (Cà Mau, Phú Quốc, Kiên Giang)
            [12.4, 108.4]  // Điểm cực Đông Bắc (Bình Phước, Đồng Nai, BR-VT, Bình Thuận)
          );

          map = L.map('map', {
            center: defaultCenter,
            zoom: defaultZoom,
            minZoom: 9,                     // Giới hạn thu nhỏ: không cho phép thu nhỏ bản đồ ra khỏi khu vực Miền Nam
            maxZoom: 15,                    // Giới hạn phóng to theo yêu cầu (maxZoom: 15)
            maxBounds: southVietnamBounds,  // Khóa khu vực hiển thị trong phạm vi khu vực Miền Nam
            maxBoundsViscosity: 1.0,        // Giữ chặt 100%, chống kéo hoặc dịch chuyển bản đồ ra ngoài phạm vi Miền Nam
            zoomControl: true,
            scrollWheelZoom: true
          });

          // Layer OpenStreetMap tiêu chuẩn với subdomains đa máy chủ
          const osmTile = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            subdomains: ['a', 'b', 'c'],
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> đóng góp'
          });

          // Tự động chuyển sang tile dự phòng OpenStreetMap (CartoDB) nếu đường truyền OSM chính bị nghẽn
          osmTile.on('tileerror', (error) => {
            if (error.tile && error.coords) {
              const fallbackUrl = `https://a.basemaps.cartocdn.com/rastertiles/voyager/${error.coords.z}/${error.coords.x}/${error.coords.y}.png`;
              if (error.tile.src !== fallbackUrl) {
                error.tile.src = fallbackUrl;
              }
            }
          });

          osmTile.addTo(map);

          // Ẩn spinner khi layer bản đồ sẵn sàng
          const loader = document.getElementById('map-initial-loader');
          osmTile.on('load', () => {
            if (loader) loader.style.display = 'none';
          });
          setTimeout(() => {
            if (loader) loader.style.display = 'none';
          }, 700);

          // Nhóm layer chứa các marker
          markersLayer = L.layerGroup().addTo(map);

          // Render toàn bộ marker điểm ngập lên bản đồ
          renderMarkers(floodPoints);

          // Cập nhật lại kích thước bản đồ sau khi DOM render xong để tránh lỗi xám/đen
          setTimeout(() => { if (map) map.invalidateSize(); }, 150);
          setTimeout(() => { if (map) map.invalidateSize(); }, 500);
          setTimeout(() => { if (map) map.invalidateSize(); }, 1200);

          window.addEventListener('resize', () => {
            if (map) map.invalidateSize();
          });

        } catch (err) {
          console.error('Lỗi khi khởi tạo bản đồ Leaflet:', err);
        }
      });
    }


    /* ==========================================================================
       PHÂN ĐOẠN 2.1: CHÚ GIẢI NỔI ĐỘNG (FLOATING DYNAMIC LEGEND WIDGET)
       Tự động cập nhật chỉ hiển thị các danh mục có điểm đang xuất hiện theo bộ lọc
       ========================================================================== */
    function updateFloatingLegend(currentFilteredPoints) {
      const container = document.getElementById('legend-items-container');
      const totalBadge = document.getElementById('legend-total-badge');
      if (!container) return;

      const total = currentFilteredPoints ? currentFilteredPoints.length : 0;
      if (totalBadge) {
        totalBadge.textContent = `${total}`;
      }

      if (total === 0) {
        container.innerHTML = `
          <div class="py-2.5 text-[11px] text-slate-400 text-center italic">
            Không có điểm nào theo bộ lọc
          </div>
        `;
        return;
      }

      // Định nghĩa các danh mục phân loại với quy tắc kiểm tra (test function)
      const categoryDefs = [
        {
          id: 'severe',
          name: 'Ngập nặng / thường xuyên',
          sublabel: '≥ 30cm (thoát > 120p)',
          colorClass: 'bg-rose-500',
          badgeClass: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
          pulseClass: 'pulse-severe',
          test: p => p.severity === 'severe'
        },
        {
          id: 'moderate',
          name: 'Ngập vừa',
          sublabel: '15cm – 30cm (thoát 30-120p)',
          colorClass: 'bg-amber-500',
          badgeClass: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
          pulseClass: 'pulse-moderate',
          test: p => p.severity === 'moderate'
        },
        {
          id: 'light',
          name: 'Ngập nhẹ',
          sublabel: '< 15cm (thoát < 30p)',
          colorClass: 'bg-yellow-400',
          badgeClass: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
          pulseClass: '',
          test: p => p.severity === 'light'
        },
        {
          id: 'tide',
          name: 'Ngập do triều cường',
          sublabel: 'Triều sông Sài Gòn & ven biển',
          colorClass: 'bg-blue-500',
          badgeClass: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
          pulseClass: '',
          test: p => p.cause === 'tide'
        },
        {
          id: 'rain-tide',
          name: 'Ngập do mưa & triều',
          sublabel: 'Tác động mưa dồn và triều dâng',
          colorClass: 'bg-indigo-500',
          badgeClass: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
          pulseClass: '',
          test: p => p.cause === 'rain-tide'
        }
      ];

      // Lọc CHỈ các danh mục có ít nhất 1 điểm đang hiển thị trên bản đồ
      const activeCategories = categoryDefs.map(cat => {
        const count = currentFilteredPoints.filter(cat.test).length;
        return { ...cat, count };
      }).filter(cat => cat.count > 0);

      if (activeCategories.length === 0) {
        container.innerHTML = `
          <div class="py-2 text-[11px] text-slate-400 text-center italic">
            Không có phân loại tương ứng
          </div>
        `;
        return;
      }

      container.innerHTML = activeCategories.map(cat => {
        return `
          <div class="flex items-center justify-between gap-2 p-1.5 rounded-lg hover:bg-slate-800/60 transition-colors">
            <div class="flex items-center gap-2 min-w-0">
              <div class="relative flex items-center justify-center w-3 h-3 shrink-0">
                ${cat.pulseClass ? `<span class="absolute -inset-1 rounded-full ${cat.colorClass} opacity-70 ${cat.pulseClass}"></span>` : ''}
                <span class="relative w-2.5 h-2.5 rounded-full ${cat.colorClass}"></span>
              </div>
              <div class="min-w-0">
                <div class="text-[11px] font-semibold text-slate-200 truncate leading-tight">${cat.name}</div>
                <div class="text-[10px] text-slate-400 leading-tight">${cat.sublabel}</div>
              </div>
            </div>
            <span class="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded border ${cat.badgeClass} shrink-0 tabular-nums">
              ${cat.count}
            </span>
          </div>
        `;
      }).join('');
    }

    function setupFloatingLegendControls() {
      const legendEl = document.getElementById('floating-map-legend');
      const toggleBtn = document.getElementById('toggle-legend-btn');
      const icon = document.getElementById('legend-toggle-icon');
      const itemsContainer = document.getElementById('legend-items-container');

      if (!legendEl) return;

      // Ngăn chặn sự kiện click và scroll trên widget làm dịch chuyển bản đồ Leaflet
      if (typeof L !== 'undefined' && L.DomEvent) {
        L.DomEvent.disableClickPropagation(legendEl);
        L.DomEvent.disableScrollPropagation(legendEl);
      }

      let isCollapsed = false;
      if (toggleBtn && itemsContainer && icon) {
        toggleBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          isCollapsed = !isCollapsed;
          if (isCollapsed) {
            itemsContainer.classList.add('hidden');
            icon.classList.add('rotate-180');
          } else {
            itemsContainer.classList.remove('hidden');
            icon.classList.remove('rotate-180');
          }
        });
      }
    }

    // Tạo icon SVG đặc trưng theo mức độ ngập
    function createMarkerIcon(point) {
      let color = '#dc2626'; // Đỏ mặc định
      let bgPulse = '';

      if (point.severity === 'severe') {
        color = '#dc2626'; // Đỏ
        bgPulse = '<span class="absolute -inset-1 rounded-full bg-rose-500 opacity-75 pulse-severe"></span>';
      } else if (point.severity === 'moderate') {
        color = '#ea580c'; // Cam
        bgPulse = '<span class="absolute -inset-1 rounded-full bg-amber-500 opacity-60 pulse-moderate"></span>';
      } else if (point.severity === 'light') {
        color = '#ca8a04'; // Vàng
      } else if (point.cause === 'tide') {
        color = '#2563eb'; // Xanh biển do triều
      }

      const html = `
        <div class="relative flex items-center justify-center w-7 h-7 cursor-pointer group">
          ${bgPulse}
          <div class="relative w-6 h-6 rounded-full border-2 border-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-125" style="background-color: ${color}">
            <svg class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547" />
            </svg>
          </div>
        </div>
      `;

      return L.divIcon({
        html: html,
        className: 'custom-flood-marker',
        iconSize: [28, 28],
        iconAnchor: [14, 14],
        popupAnchor: [0, -14]
      });
    }

    // Hiển thị các điểm lên bản đồ
    function renderMarkers(points) {
      if (!markersLayer || typeof L === 'undefined') return;
      markersLayer.clearLayers();
      markersMap.clear();

      points.forEach(point => {
        const marker = L.marker([point.lat, point.lng], {
          icon: createMarkerIcon(point),
          title: point.street
        });

        // Nội dung popup chi tiết, sắc nét
        const popupContent = `
          <div class="p-1">
            <div class="flex items-center justify-between gap-2 border-b border-slate-700/80 pb-2 mb-2">
              <span class="text-[11px] font-bold uppercase tracking-wider text-sky-400">#${point.id} · ${point.regionName}</span>
              <span class="text-[11px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">${point.causeName}</span>
            </div>
            <h4 class="text-sm font-bold text-white mb-1">${point.street}</h4>
            <p class="text-xs text-slate-300 mb-1.5"><strong>Địa bàn:</strong> ${point.ward}</p>
            <div class="p-2 rounded bg-slate-950/80 border border-slate-800 text-[11px] text-slate-400 leading-normal">
              <span class="font-semibold text-slate-200">Phân loại:</span> ${point.severityName}<br/>
              <span class="font-semibold text-slate-200">Chi tiết:</span> ${point.note}
            </div>
          </div>
        `;

        marker.bindPopup(popupContent);
        marker.addTo(markersLayer);
        markersMap.set(point.id, marker);
      });
    }

    // Hiển thị danh sách điểm ở cột bên phải
    function renderSidebarList(points) {
      const container = document.getElementById('map-point-list');
      const countLabel = document.getElementById('filtered-count-label');
      const badge = document.getElementById('filtered-badge');

      countLabel.textContent = `Hiển thị ${points.length} / 159 vị trí`;
      badge.textContent = points.length;

      if (points.length === 0) {
        container.innerHTML = `
          <div class="p-8 text-center text-xs text-slate-500">
            Không tìm thấy điểm ngập phù hợp với điều kiện lọc.
          </div>
        `;
        return;
      }

      container.innerHTML = points.map(p => {
        let severityColor = 'text-rose-400 border-rose-500/30 bg-rose-500/10';
        if (p.severity === 'moderate') severityColor = 'text-amber-400 border-amber-500/30 bg-amber-500/10';
        if (p.severity === 'light') severityColor = 'text-yellow-400 border-yellow-500/30 bg-yellow-500/10';
        if (p.cause === 'tide') severityColor = 'text-blue-400 border-blue-500/30 bg-blue-500/10';

        return `
          <div 
            onclick="focusPoint(${p.id})"
            class="p-2.5 rounded-lg hover:bg-slate-800/80 cursor-pointer transition-colors border border-transparent hover:border-slate-700/60 group"
          >
            <div class="flex items-center justify-between gap-1 mb-1">
              <span class="text-[11px] font-bold text-slate-400 group-hover:text-sky-300 transition-colors">#${p.id} · ${p.regionName}</span>
              <span class="text-[10px] px-1.5 py-0.5 rounded border ${severityColor} font-medium">${p.severityName}</span>
            </div>
            <div class="text-xs font-semibold text-slate-200 group-hover:text-white line-clamp-1">${p.street}</div>
            <div class="text-[11px] text-slate-500 mt-0.5 truncate">${p.ward}</div>
          </div>
        `;
      }).join('');
    }

    // Zoom và mở popup của một điểm cụ thể khi người dùng nhấp chọn
    function focusPoint(id) {
      const point = floodPoints.find(p => p.id === id);
      const marker = markersMap.get(id);
      if (point && map) {
        map.flyTo([point.lat, point.lng], 15, {
          duration: 1.2,
          easeLinearity: 0.25
        });
        if (marker) {
          setTimeout(() => {
            marker.openPopup();
          }, 600);
        }
      }
    }

    // Chuyển tầm nhìn bản đồ tới khu vực định sẵn
    function focusRegion(regionKey) {
      if (!map) return;
      if (regionKey === 'hcm') {
        map.flyTo([10.7769, 106.6909], 13);
      } else if (regionKey === 'thuduc') {
        map.flyTo([10.8400, 106.7600], 13);
      } else if (regionKey === 'binhduong') {
        map.flyTo([11.0200, 106.6700], 12);
      } else if (regionKey === 'vungtau') {
        map.flyTo([10.4200, 107.1200], 11);
      }
    }

    // Tìm kiếm và phóng to điểm ngập khi người dùng nhấp từ danh sách văn bản
    window.locatePointByName = function(streetQuery) {
      const q = streetQuery.toLowerCase().trim();
      const found = floodPoints.find(p => p.street.toLowerCase().includes(q) || q.includes(p.street.toLowerCase()));
      if (found) {
        const mapSection = document.getElementById('ban-do');
        if (mapSection) {
          mapSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setTimeout(() => {
          focusPoint(found.id);
        }, 500);
      }
    };

    /* ==========================================================================
       PHÂN ĐOẠN 3: XỬ LÝ SỰ KIỆN TƯƠNG TÁC, LỌC VÀ TÌM KIẾM
       ========================================================================== */
    function applyFilters() {
      const searchVal = document.getElementById('map-search-input').value.toLowerCase().trim();
      const regionVal = document.getElementById('filter-region').value;
      const causeVal = document.getElementById('filter-cause').value;

      const filtered = floodPoints.filter(p => {
        // Lọc địa bàn
        if (regionVal !== 'all' && p.region !== regionVal) return false;

        // Lọc nguyên nhân
        if (causeVal !== 'all' && p.cause !== causeVal) return false;

        // Lọc tìm kiếm
        if (searchVal) {
          const matchStreet = p.street.toLowerCase().includes(searchVal);
          const matchWard = p.ward.toLowerCase().includes(searchVal);
          const matchRegion = p.regionName.toLowerCase().includes(searchVal);
          const matchNote = p.note.toLowerCase().includes(searchVal);
          if (!matchStreet && !matchWard && !matchRegion && !matchNote) return false;
        }

        return true;
      });

      renderMarkers(filtered);
      renderSidebarList(filtered);
      updateFloatingLegend(filtered);

      // Nếu có kết quả và người dùng tìm kiếm, tự động căn chỉnh vùng bao (bounds)
      if (filtered.length > 0 && searchVal && map) {
        const group = L.featureGroup(filtered.map(p => markersMap.get(p.id)).filter(Boolean));
        if (group.getLayers().length > 0) {
          map.fitBounds(group.getBounds().pad(0.2));
        }
      }
    }

    // Lắng nghe sự kiện người dùng
    document.getElementById('map-search-input').addEventListener('input', applyFilters);
    document.getElementById('filter-region').addEventListener('change', applyFilters);
    document.getElementById('filter-cause').addEventListener('change', applyFilters);

    document.getElementById('reset-map-filter').addEventListener('click', () => {
      document.getElementById('map-search-input').value = '';
      document.getElementById('filter-region').value = 'all';
      document.getElementById('filter-cause').value = 'all';
      applyFilters();
      if (map) {
        map.flyTo([10.8231, 106.6297], 11);
      }
    });

    /* ==========================================================================
       PHÂN ĐOẠN 4: CANVAS HIỆU ỨNG MƯA & DÒNG CHẢY (LIGHTWEIGHT MOTION GRAPHIC)
       Tối ưu hóa hiệu năng, tự động dừng khi khuất màn hình
       ========================================================================== */
    function initRainCanvas() {
      const canvas = document.getElementById('rain-canvas');
      const ctx = canvas.getContext('2d');
      let width = (canvas.width = window.innerWidth);
      let height = (canvas.height = window.innerHeight);

      window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      });

      // Tạo các giọt mưa nhẹ nhàng
      const drops = [];
      const dropCount = Math.min(width > 768 ? 60 : 30, 80);

      for (let i = 0; i < dropCount; i++) {
        drops.push({
          x: Math.random() * width,
          y: Math.random() * height,
          length: Math.random() * 14 + 10,
          speed: Math.random() * 4 + 4,
          opacity: Math.random() * 0.4 + 0.1
        });
      }

      function draw() {
        ctx.clearRect(0, 0, width, height);
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 1;

        for (let i = 0; i < drops.length; i++) {
          const d = drops[i];
          ctx.beginPath();
          ctx.globalAlpha = d.opacity;
          ctx.moveTo(d.x, d.y);
          ctx.lineTo(d.x - 2, d.y + d.length);
          ctx.stroke();

          d.y += d.speed;
          d.x -= 0.5;

          if (d.y > height) {
            d.y = -d.length;
            d.x = Math.random() * width;
          }
        }
        requestAnimationFrame(draw);
      }

      draw();
    }

    /* ==========================================================================
       PHÂN ĐOẠN 5: HIỆU ỨNG SỐ NHẢY (COUNT-UP ANIMATION) & SCROLL REVEAL
       ========================================================================== */
    function initScrollAnimations() {
      // Intersection Observer để kích hoạt animation khi cuộn tới
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    }

    // Khởi chạy khi DOM sẵn sàng
    window.addEventListener('DOMContentLoaded', () => {
      initMap();
      initRainCanvas();
      initScrollAnimations();
    });

  