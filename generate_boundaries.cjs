const https = require('https');
const fs = require('fs');
const turf = require('@turf/turf');

function getRel(id) {
  return new Promise((resolve, reject) => {
    https.get(`https://nominatim.openstreetmap.org/details.php?osmtype=R&osmid=${id}&polygon_geojson=1&format=json`, {
      headers: { 'User-Agent': 'AIStudioMapApp/2.0' }
    }, res => {
      let d = '';
      res.on('data', chunk => d += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(d).geometry);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function delay(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function toLeafletRing(coords) {
  return coords.map(p => [Number(p[1].toFixed(5)), Number(p[0].toFixed(5))]);
}

function extractLeafletRings(geom) {
  const rings = [];
  if (!geom) return rings;
  if (geom.type === 'Polygon') {
    rings.push(toLeafletRing(geom.coordinates[0]));
  } else if (geom.type === 'MultiPolygon') {
    geom.coordinates.forEach(poly => {
      rings.push(toLeafletRing(poly[0]));
    });
  }
  return rings;
}

async function run() {
  console.log('Fetching OSM boundaries for TPHCM, Bình Dương, Bà Rịa - Vũng Tàu...');
  const hcm = await getRel(1973756);
  await delay(1000);
  const bd = await getRel(1906037);
  await delay(1000);
  const brvt = await getRel(1904296);

  // 1. Clean HCM land & coastal borders (exclude deep sea / outer continental shelf)
  const hcmBox = turf.polygon([[
    [106.30, 10.35], [107.08, 10.35], [107.08, 11.25], [106.30, 11.25], [106.30, 10.35]
  ]]);
  const hcmClean = turf.intersect(turf.featureCollection([turf.feature(hcm), hcmBox]));

  // 2. Clean BR-VT mainland & coastal borders (exclude distant Côn Đảo archipelago at 8.6°N)
  const brvtBox = turf.polygon([[
    [106.98, 10.32], [107.62, 10.32], [107.62, 10.85], [106.98, 10.85], [106.98, 10.32]
  ]]);
  const brvtClean = turf.intersect(turf.featureCollection([turf.feature(brvt), brvtBox]));

  // 3. BD is already completely inland
  const bdFeature = turf.feature(bd);

  // Simplify each for smooth and high-performance SVG rendering in Leaflet
  const hcmSimp = turf.simplify(hcmClean, { tolerance: 0.0008, highQuality: true });
  const bdSimp = turf.simplify(bdFeature, { tolerance: 0.0008, highQuality: true });
  const brvtSimp = turf.simplify(brvtClean, { tolerance: 0.0008, highQuality: true });

  // 4. Combined perimeter (union of TPHCM, BD, BRVT)
  const unionHCM_BD = turf.union(turf.featureCollection([hcmSimp, bdSimp]));
  const combinedAll = turf.union(turf.featureCollection([unionHCM_BD, brvtSimp]));
  const combinedSimp = turf.simplify(combinedAll, { tolerance: 0.0008, highQuality: true });

  // Extract rings
  const hcmRings = extractLeafletRings(hcmSimp.geometry);
  const bdRings = extractLeafletRings(bdSimp.geometry);
  const brvtRings = extractLeafletRings(brvtSimp.geometry);
  const combinedRings = extractLeafletRings(combinedSimp.geometry);

  // World bounds for inverted mask (-85 to 85 lat, -180 to 180 lng)
  const worldRing = [
    [-85, -180],
    [-85, 180],
    [85, 180],
    [85, -180],
    [-85, -180]
  ];

  // Mask holes are the rings of the combined area (and TPHCM)
  const maskLatlngs = [worldRing, ...combinedRings];

  const result = {
    maskLatlngs: maskLatlngs,
    // Outer perimeter outline
    perimeterRings: combinedRings,
    // Distinct administrative outlines
    hcmRings: hcmRings,
    bdRings: bdRings,
    brvtRings: brvtRings,
    // Flat array of all outline rings for backward compatibility
    outlineLatlngs: [
      ...combinedRings,
      ...hcmRings,
      ...bdRings,
      ...brvtRings
    ]
  };

  fs.writeFileSync('public/map_boundaries.json', JSON.stringify(result));
  fs.writeFileSync('public/map_boundaries.js', 'window.MAP_BOUNDARIES = ' + JSON.stringify(result) + ';\n');

  console.log('Successfully generated public/map_boundaries.js & json!');
  console.log('Perimeter rings:', combinedRings.length);
  console.log('HCM rings:', hcmRings.length);
  console.log('BD rings:', bdRings.length);
  console.log('BRVT rings:', brvtRings.length);
}

run().catch(console.error);
