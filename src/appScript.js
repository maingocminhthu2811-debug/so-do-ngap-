const floodPoints = [
  {
    "id": 1,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Đông Hưng Thuận",
    "street": "đường Nguyễn Văn Quá",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Ngập thường xuyên",
    "lat": 10.8441,
    "lng": 106.6235,
    "note": "Lượng mưa 30mm - 50mm, mực triều < 1m"
  },
  {
    "id": 2,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Đông Hưng Thuận",
    "street": "đường Phan Văn Hớn",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Ngập thường xuyên",
    "lat": 10.8415,
    "lng": 106.619,
    "note": "Lượng mưa 30mm - 50mm, mực triều < 1m"
  },
  {
    "id": 3,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Thạnh Mỹ Tây",
    "street": "đường Bạch Đằng",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Ngập thường xuyên",
    "lat": 10.8038,
    "lng": 106.7021,
    "note": "Lượng mưa 30mm - 50mm, mực triều < 1m"
  },
  {
    "id": 4,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Thạnh Mỹ Tây",
    "street": "đường Ung Văn Khiêm",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Ngập thường xuyên",
    "lat": 10.8082,
    "lng": 106.7163,
    "note": "Lượng mưa 30mm - 50mm, mực triều < 1m"
  },
  {
    "id": 5,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Thạnh Mỹ Tây",
    "street": "đường Đinh Bộ Lĩnh",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Ngập thường xuyên",
    "lat": 10.812,
    "lng": 106.71,
    "note": "Lượng mưa 30mm - 50mm, mực triều < 1m"
  },
  {
    "id": 6,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường An Lạc",
    "street": "đường Hồ Học Lãm",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Ngập thường xuyên",
    "lat": 10.7235,
    "lng": 106.612,
    "note": "Lượng mưa 30mm - 50mm, mực triều < 1m"
  },
  {
    "id": 7,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Phú Lâm",
    "street": "đường An Dương Vương",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Ngập thường xuyên",
    "lat": 10.751,
    "lng": 106.6295,
    "note": "Lượng mưa 30mm - 50mm, mực triều < 1m"
  },
  {
    "id": 8,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Thông Tây Hội, An Hội Đông",
    "street": "đường Lê Văn Thọ",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Ngập thường xuyên",
    "lat": 10.8465,
    "lng": 106.657,
    "note": "Lượng mưa 30mm - 50mm, mực triều < 1m"
  },
  {
    "id": 9,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Thông Tây Hội, An Hội Đông",
    "street": "đường Lê Đức Thọ",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Ngập thường xuyên",
    "lat": 10.849,
    "lng": 106.671,
    "note": "Lượng mưa 30mm - 50mm, mực triều < 1m"
  },
  {
    "id": 10,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Thông Tây Hội, An Hội Đông",
    "street": "đường Nguyễn Văn Khối",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Ngập thường xuyên",
    "lat": 10.842,
    "lng": 106.652,
    "note": "Lượng mưa 30mm - 50mm, mực triều < 1m"
  },
  {
    "id": 11,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Thông Tây Hội, An Hội Đông",
    "street": "đường Phan Huy Ích",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Ngập thường xuyên",
    "lat": 10.8285,
    "lng": 106.638,
    "note": "Lượng mưa 30mm - 50mm, mực triều < 1m"
  },
  {
    "id": 12,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Thông Tây Hội, An Hội Đông",
    "street": "đường Phạm Văn Chiêu",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Ngập thường xuyên",
    "lat": 10.851,
    "lng": 106.645,
    "note": "Lượng mưa 30mm - 50mm, mực triều < 1m"
  },
  {
    "id": 13,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Đông Hưng Thuận",
    "street": "đường Phan Văn Hớn (đoạn 2)",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Ngập thường xuyên",
    "lat": 10.843,
    "lng": 106.615,
    "note": "Lượng mưa 30mm - 50mm, mực triều < 1m"
  },
  {
    "id": 14,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Đông Hưng Thuận",
    "street": "đường Song hành Quốc lộ 22",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Ngập thường xuyên",
    "lat": 10.8495,
    "lng": 106.6185,
    "note": "Lượng mưa 30mm - 50mm, mực triều < 1m"
  },
  {
    "id": 15,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Bình Trị Đông",
    "street": "đường Phan Anh",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Ngập thường xuyên",
    "lat": 10.768,
    "lng": 106.618,
    "note": "Lượng mưa 30mm - 50mm, mực triều < 1m"
  },
  {
    "id": 16,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Bến Nghé",
    "street": "đường Calmette",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "moderate",
    "severityName": "Ngập vừa",
    "lat": 10.7685,
    "lng": 106.6995,
    "note": "Độ sâu 10cm - 15cm, nước rút < 30 phút"
  },
  {
    "id": 17,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Bến Nghé",
    "street": "đường Phạm Viết Chánh",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "moderate",
    "severityName": "Ngập vừa",
    "lat": 10.766,
    "lng": 106.685,
    "note": "Độ sâu 10cm - 15cm, nước rút < 30 phút"
  },
  {
    "id": 18,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Đông Hưng Thuận",
    "street": "đường Nguyễn Văn Quá (đoạn 2)",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "moderate",
    "severityName": "Ngập vừa",
    "lat": 10.847,
    "lng": 106.626,
    "note": "Độ sâu 10cm - 15cm, nước rút < 30 phút"
  },
  {
    "id": 19,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Đông Hưng Thuận",
    "street": "đường Song hành Quốc lộ 22 (đoạn 2)",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "moderate",
    "severityName": "Ngập vừa",
    "lat": 10.853,
    "lng": 106.616,
    "note": "Độ sâu 10cm - 15cm, nước rút < 30 phút"
  },
  {
    "id": 20,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Bình Hưng",
    "street": "đường Phạm Hùng",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "moderate",
    "severityName": "Ngập vừa",
    "lat": 10.738,
    "lng": 106.673,
    "note": "Độ sâu 10cm - 15cm, nước rút < 30 phút"
  },
  {
    "id": 21,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Bình Hưng",
    "street": "Quốc lộ 50",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "moderate",
    "severityName": "Ngập vừa",
    "lat": 10.725,
    "lng": 106.661,
    "note": "Độ sâu 10cm - 15cm, nước rút < 30 phút"
  },
  {
    "id": 22,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Thạnh Mỹ Tây, Bình Quới",
    "street": "đường Bình Quới",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "moderate",
    "severityName": "Ngập vừa",
    "lat": 10.82,
    "lng": 106.728,
    "note": "Độ sâu 10cm - 15cm, nước rút < 30 phút"
  },
  {
    "id": 23,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Thạnh Mỹ Tây, Bình Quới",
    "street": "đường D5",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "moderate",
    "severityName": "Ngập vừa",
    "lat": 10.806,
    "lng": 106.714,
    "note": "Độ sâu 10cm - 15cm, nước rút < 30 phút"
  },
  {
    "id": 24,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Thạnh Mỹ Tây, Bình Quới",
    "street": "đường Nguyễn Gia Trí",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "moderate",
    "severityName": "Ngập vừa",
    "lat": 10.8035,
    "lng": 106.7155,
    "note": "Độ sâu 10cm - 15cm, nước rút < 30 phút"
  },
  {
    "id": 25,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Bình Trị Đông, Bình Hưng",
    "street": "đường Tân Hòa Đông",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "moderate",
    "severityName": "Ngập vừa",
    "lat": 10.762,
    "lng": 106.624,
    "note": "Độ sâu 10cm - 15cm, nước rút < 30 phút"
  },
  {
    "id": 26,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Bình Trị Đông, Bình Hưng",
    "street": "đường Tỉnh lộ 10",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "moderate",
    "severityName": "Ngập vừa",
    "lat": 10.758,
    "lng": 106.612,
    "note": "Độ sâu 10cm - 15cm, nước rút < 30 phút"
  },
  {
    "id": 27,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Bình Trị Đông, Bình Hưng",
    "street": "đường Võ Văn Kiệt",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "moderate",
    "severityName": "Ngập vừa",
    "lat": 10.742,
    "lng": 106.645,
    "note": "Độ sâu 10cm - 15cm, nước rút < 30 phút"
  },
  {
    "id": 28,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Tân Sơn Nhất",
    "street": "đường Trường Sơn",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "moderate",
    "severityName": "Ngập vừa",
    "lat": 10.8145,
    "lng": 106.6625,
    "note": "Độ sâu 10cm - 15cm, nước rút < 30 phút"
  },
  {
    "id": 29,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Bến Nghé",
    "street": "đường Cống Quỳnh",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "light",
    "severityName": "Ngập nhẹ",
    "lat": 10.767,
    "lng": 106.688,
    "note": "Độ sâu < 10cm, nước rút < 30 phút"
  },
  {
    "id": 30,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Bến Nghé",
    "street": "đường Lê Lợi",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "light",
    "severityName": "Ngập nhẹ",
    "lat": 10.7745,
    "lng": 106.701,
    "note": "Độ sâu < 10cm, nước rút < 30 phút"
  },
  {
    "id": 31,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Bến Nghé",
    "street": "đường Lê Thánh Tôn",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "light",
    "severityName": "Ngập nhẹ",
    "lat": 10.777,
    "lng": 106.702,
    "note": "Độ sâu < 10cm, nước rút < 30 phút"
  },
  {
    "id": 32,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Bến Nghé",
    "street": "đường Lê Thị Riêng",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "light",
    "severityName": "Ngập nhẹ",
    "lat": 10.771,
    "lng": 106.691,
    "note": "Độ sâu < 10cm, nước rút < 30 phút"
  },
  {
    "id": 33,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Bến Nghé",
    "street": "đường Nguyễn Cư Trinh",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "light",
    "severityName": "Ngập nhẹ",
    "lat": 10.7635,
    "lng": 106.6895,
    "note": "Độ sâu < 10cm, nước rút < 30 phút"
  },
  {
    "id": 34,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Bến Nghé",
    "street": "đường Nguyễn Trãi",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "light",
    "severityName": "Ngập nhẹ",
    "lat": 10.769,
    "lng": 106.6915,
    "note": "Độ sâu < 10cm, nước rút < 30 phút"
  },
  {
    "id": 35,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Bến Nghé",
    "street": "đường Phạm Ngũ Lão",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "light",
    "severityName": "Ngập nhẹ",
    "lat": 10.768,
    "lng": 106.694,
    "note": "Độ sâu < 10cm, nước rút < 30 phút"
  },
  {
    "id": 36,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Bến Nghé",
    "street": "đường Trương Định",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "light",
    "severityName": "Ngập nhẹ",
    "lat": 10.7755,
    "lng": 106.6935,
    "note": "Độ sâu < 10cm, nước rút < 30 phút"
  },
  {
    "id": 37,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Bàn Cờ",
    "street": "đường Nguyễn Thiện Thuật",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "light",
    "severityName": "Ngập nhẹ",
    "lat": 10.7695,
    "lng": 106.6815,
    "note": "Độ sâu < 10cm, nước rút < 30 phút"
  },
  {
    "id": 38,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Khánh Hội",
    "street": "đường Hoàng Diệu",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "light",
    "severityName": "Ngập nhẹ",
    "lat": 10.7625,
    "lng": 106.704,
    "note": "Độ sâu < 10cm, nước rút < 30 phút"
  },
  {
    "id": 39,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Khánh Hội",
    "street": "đường Tân Vĩnh",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "light",
    "severityName": "Ngập nhẹ",
    "lat": 10.7595,
    "lng": 106.703,
    "note": "Độ sâu < 10cm, nước rút < 30 phút"
  },
  {
    "id": 40,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Khánh Hội",
    "street": "đường Tôn Thất Thuyết",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "light",
    "severityName": "Ngập nhẹ",
    "lat": 10.7565,
    "lng": 106.7085,
    "note": "Độ sâu < 10cm, nước rút < 30 phút"
  },
  {
    "id": 41,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Khánh Hội",
    "street": "đường Vĩnh Hội",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "light",
    "severityName": "Ngập nhẹ",
    "lat": 10.7585,
    "lng": 106.705,
    "note": "Độ sâu < 10cm, nước rút < 30 phút"
  },
  {
    "id": 42,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Khánh Hội",
    "street": "đường Xóm Chiếu",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "light",
    "severityName": "Ngập nhẹ",
    "lat": 10.7615,
    "lng": 106.708,
    "note": "Độ sâu < 10cm, nước rút < 30 phút"
  },
  {
    "id": 43,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Khánh Hội",
    "street": "đường Đoàn Văn Bơ",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "light",
    "severityName": "Ngập nhẹ",
    "lat": 10.761,
    "lng": 106.706,
    "note": "Độ sâu < 10cm, nước rút < 30 phút"
  },
  {
    "id": 44,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Chợ Quán",
    "street": "đường Nguyễn Biểu",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "light",
    "severityName": "Ngập nhẹ",
    "lat": 10.7525,
    "lng": 106.682,
    "note": "Độ sâu < 10cm, nước rút < 30 phút"
  },
  {
    "id": 45,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Chợ Quán",
    "street": "đường Nguyễn Văn Cừ",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "light",
    "severityName": "Ngập nhẹ",
    "lat": 10.756,
    "lng": 106.683,
    "note": "Độ sâu < 10cm, nước rút < 30 phút"
  },
  {
    "id": 46,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Chợ Quán",
    "street": "đường Trần Hưng Đạo",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "light",
    "severityName": "Ngập nhẹ",
    "lat": 10.754,
    "lng": 106.679,
    "note": "Độ sâu < 10cm, nước rút < 30 phút"
  },
  {
    "id": 47,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Diên Hồng",
    "street": "đường Lê Hồng Phong",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "light",
    "severityName": "Ngập nhẹ",
    "lat": 10.769,
    "lng": 106.673,
    "note": "Độ sâu < 10cm, nước rút < 30 phút"
  },
  {
    "id": 48,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Diên Hồng",
    "street": "đường 3/2",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "light",
    "severityName": "Ngập nhẹ",
    "lat": 10.7715,
    "lng": 106.6745,
    "note": "Độ sâu < 10cm, nước rút < 30 phút"
  },
  {
    "id": 49,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Bến Nghé (1 tuyến)",
    "street": "đường Calmette",
    "cause": "tide",
    "causeName": "Ngập do triều",
    "severity": "tide",
    "severityName": "Ngập do triều",
    "lat": 10.7675,
    "lng": 106.699,
    "note": "Tuyến chịu ảnh hưởng triều cường"
  },
  {
    "id": 50,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Bình Quới (1 tuyến)",
    "street": "đường Bình Quới",
    "cause": "tide",
    "causeName": "Ngập do triều",
    "severity": "tide",
    "severityName": "Ngập do triều",
    "lat": 10.825,
    "lng": 106.732,
    "note": "Tuyến chịu ảnh hưởng triều cường"
  },
  {
    "id": 51,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Tân Thuận, Phú Thuận (2 tuyến)",
    "street": "đường Trần Xuân Soạn",
    "cause": "tide",
    "causeName": "Ngập do triều",
    "severity": "tide",
    "severityName": "Ngập do triều",
    "lat": 10.7485,
    "lng": 106.711,
    "note": "Tuyến bờ kênh Tẻ, ảnh hưởng triều cường"
  },
  {
    "id": 52,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Tân Thuận, Phú Thuận (2 tuyến)",
    "street": "đường Huỳnh Tấn Phát",
    "cause": "tide",
    "causeName": "Ngập do triều",
    "severity": "tide",
    "severityName": "Ngập do triều",
    "lat": 10.743,
    "lng": 106.734,
    "note": "Tuyến chịu ảnh hưởng triều cường"
  },
  {
    "id": 53,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Tân Thuận, Tân Mỹ, Nhà Bè (4 tuyến)",
    "street": "đường Lê Văn Lương",
    "cause": "tide",
    "causeName": "Ngập do triều",
    "severity": "tide",
    "severityName": "Ngập do triều",
    "lat": 10.731,
    "lng": 106.705,
    "note": "Tuyến chịu ảnh hưởng triều cường"
  },
  {
    "id": 54,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Tân Thuận, Tân Mỹ, Nhà Bè (4 tuyến)",
    "street": "đường Đào Sư Tích",
    "cause": "tide",
    "causeName": "Ngập do triều",
    "severity": "tide",
    "severityName": "Ngập do triều",
    "lat": 10.702,
    "lng": 106.712,
    "note": "Tuyến chịu ảnh hưởng triều cường"
  },
  {
    "id": 55,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Tân Thuận, Tân Mỹ, Nhà Bè (4 tuyến)",
    "street": "đường Phạm Hữu Lầu",
    "cause": "tide",
    "causeName": "Ngập do triều",
    "severity": "tide",
    "severityName": "Ngập do triều",
    "lat": 10.713,
    "lng": 106.726,
    "note": "Tuyến chịu ảnh hưởng triều cường"
  },
  {
    "id": 56,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Tân Thuận, Tân Mỹ, Nhà Bè (4 tuyến)",
    "street": "đường Nguyễn Bình",
    "cause": "tide",
    "causeName": "Ngập do triều",
    "severity": "tide",
    "severityName": "Ngập do triều",
    "lat": 10.686,
    "lng": 106.724,
    "note": "Tuyến chịu ảnh hưởng triều cường"
  },
  {
    "id": 57,
    "region": "hcm-old",
    "regionName": "TPHCM trước đây",
    "ward": "Phường Bình Hưng (1 tuyến)",
    "street": "Quốc lộ 50",
    "cause": "tide",
    "causeName": "Ngập do triều",
    "severity": "tide",
    "severityName": "Ngập do triều",
    "lat": 10.722,
    "lng": 106.66,
    "note": "Tuyến chịu ảnh hưởng triều cường"
  },
  {
    "id": 58,
    "region": "thu-duc",
    "regionName": "TP Thủ Đức",
    "ward": "Phường An Khánh",
    "street": "đường Nguyễn Văn Hưởng",
    "cause": "rain-tide",
    "causeName": "Ngập do mưa và triều",
    "severity": "severe",
    "severityName": "Ngập thường xuyên",
    "lat": 10.812,
    "lng": 106.734,
    "note": "Ngập thường xuyên do mưa và triều"
  },
  {
    "id": 59,
    "region": "thu-duc",
    "regionName": "TP Thủ Đức",
    "ward": "Phường An Khánh",
    "street": "đường Quốc Hương",
    "cause": "rain-tide",
    "causeName": "Ngập do mưa và triều",
    "severity": "severe",
    "severityName": "Ngập thường xuyên",
    "lat": 10.804,
    "lng": 106.735,
    "note": "Ngập thường xuyên do mưa và triều"
  },
  {
    "id": 60,
    "region": "thu-duc",
    "regionName": "TP Thủ Đức",
    "ward": "Phường An Khánh",
    "street": "đường Thảo Điền",
    "cause": "rain-tide",
    "causeName": "Ngập do mưa và triều",
    "severity": "severe",
    "severityName": "Ngập thường xuyên",
    "lat": 10.806,
    "lng": 106.732,
    "note": "Ngập thường xuyên do mưa và triều"
  },
  {
    "id": 61,
    "region": "thu-duc",
    "regionName": "TP Thủ Đức",
    "ward": "Phường Tam Bình",
    "street": "đường Lê Thị Hoa",
    "cause": "rain-tide",
    "causeName": "Ngập do mưa và triều",
    "severity": "severe",
    "severityName": "Ngập thường xuyên",
    "lat": 10.875,
    "lng": 106.741,
    "note": "Ngập thường xuyên do mưa và triều"
  },
  {
    "id": 62,
    "region": "thu-duc",
    "regionName": "TP Thủ Đức",
    "ward": "Phường Tam Bình",
    "street": "đường Tỉnh lộ 43",
    "cause": "rain-tide",
    "causeName": "Ngập do mưa và triều",
    "severity": "severe",
    "severityName": "Ngập thường xuyên",
    "lat": 10.879,
    "lng": 106.743,
    "note": "Ngập thường xuyên do mưa và triều"
  },
  {
    "id": 63,
    "region": "thu-duc",
    "regionName": "TP Thủ Đức",
    "ward": "Phường Thủ Đức",
    "street": "đường Dương Văn Cam",
    "cause": "rain-tide",
    "causeName": "Ngập do mưa và triều",
    "severity": "severe",
    "severityName": "Ngập thường xuyên",
    "lat": 10.852,
    "lng": 106.76,
    "note": "Ngập thường xuyên do mưa và triều"
  },
  {
    "id": 64,
    "region": "thu-duc",
    "regionName": "TP Thủ Đức",
    "ward": "Phường Thủ Đức",
    "street": "đường Kha Vạn Cân",
    "cause": "rain-tide",
    "causeName": "Ngập do mưa và triều",
    "severity": "severe",
    "severityName": "Ngập thường xuyên",
    "lat": 10.854,
    "lng": 106.762,
    "note": "Ngập thường xuyên do mưa và triều"
  },
  {
    "id": 65,
    "region": "thu-duc",
    "regionName": "TP Thủ Đức",
    "ward": "Phường Thủ Đức",
    "street": "đường Tam Tam Xã",
    "cause": "rain-tide",
    "causeName": "Ngập do mưa và triều",
    "severity": "severe",
    "severityName": "Ngập thường xuyên",
    "lat": 10.851,
    "lng": 106.758,
    "note": "Ngập thường xuyên do mưa và triều"
  },
  {
    "id": 66,
    "region": "thu-duc",
    "regionName": "TP Thủ Đức",
    "ward": "Phường Thủ Đức",
    "street": "đường Tô Ngọc Vân",
    "cause": "rain-tide",
    "causeName": "Ngập do mưa và triều",
    "severity": "severe",
    "severityName": "Ngập thường xuyên",
    "lat": 10.857,
    "lng": 106.759,
    "note": "Ngập thường xuyên do mưa và triều"
  },
  {
    "id": 67,
    "region": "thu-duc",
    "regionName": "TP Thủ Đức",
    "ward": "Phường Thủ Đức",
    "street": "đường Đặng Thị Rành",
    "cause": "rain-tide",
    "causeName": "Ngập do mưa và triều",
    "severity": "severe",
    "severityName": "Ngập thường xuyên",
    "lat": 10.853,
    "lng": 106.7595,
    "note": "Ngập thường xuyên do mưa và triều"
  },
  {
    "id": 68,
    "region": "thu-duc",
    "regionName": "TP Thủ Đức",
    "ward": "Phường Bình Trưng",
    "street": "đường Nguyễn Duy Trinh",
    "cause": "rain-tide",
    "causeName": "Ngập do mưa và triều",
    "severity": "moderate",
    "severityName": "Ngập vừa",
    "lat": 10.792,
    "lng": 106.776,
    "note": "Ngập vừa do mưa và triều"
  },
  {
    "id": 69,
    "region": "thu-duc",
    "regionName": "TP Thủ Đức",
    "ward": "Phường Hiệp Bình",
    "street": "đường Hiệp Bình",
    "cause": "rain-tide",
    "causeName": "Ngập do mưa và triều",
    "severity": "moderate",
    "severityName": "Ngập vừa",
    "lat": 10.838,
    "lng": 106.725,
    "note": "Ngập vừa do mưa và triều"
  },
  {
    "id": 70,
    "region": "thu-duc",
    "regionName": "TP Thủ Đức",
    "ward": "Phường Hiệp Bình",
    "street": "Quốc lộ 13",
    "cause": "rain-tide",
    "causeName": "Ngập do mưa và triều",
    "severity": "moderate",
    "severityName": "Ngập vừa",
    "lat": 10.835,
    "lng": 106.721,
    "note": "Ngập vừa do mưa và triều"
  },
  {
    "id": 71,
    "region": "thu-duc",
    "regionName": "TP Thủ Đức",
    "ward": "Phường Phước Long",
    "street": "đường Dương Đình Hội",
    "cause": "rain-tide",
    "causeName": "Ngập do mưa và triều",
    "severity": "moderate",
    "severityName": "Ngập vừa",
    "lat": 10.824,
    "lng": 106.772,
    "note": "Ngập vừa do mưa và triều"
  },
  {
    "id": 72,
    "region": "thu-duc",
    "regionName": "TP Thủ Đức",
    "ward": "Phường Phước Long",
    "street": "đường Đỗ Xuân Hợp",
    "cause": "rain-tide",
    "causeName": "Ngập do mưa và triều",
    "severity": "moderate",
    "severityName": "Ngập vừa",
    "lat": 10.821,
    "lng": 106.776,
    "note": "Ngập vừa do mưa và triều"
  },
  {
    "id": 73,
    "region": "thu-duc",
    "regionName": "TP Thủ Đức",
    "ward": "Phường Tam Bình",
    "street": "đường Đỗ Mười (Quốc lộ 1)",
    "cause": "rain-tide",
    "causeName": "Ngập do mưa và triều",
    "severity": "moderate",
    "severityName": "Ngập vừa",
    "lat": 10.868,
    "lng": 106.735,
    "note": "Ngập vừa do mưa và triều"
  },
  {
    "id": 74,
    "region": "thu-duc",
    "regionName": "TP Thủ Đức",
    "ward": "Phường Thủ Đức",
    "street": "đường Hồ Văn Tư",
    "cause": "rain-tide",
    "causeName": "Ngập do mưa và triều",
    "severity": "moderate",
    "severityName": "Ngập vừa",
    "lat": 10.855,
    "lng": 106.764,
    "note": "Ngập vừa do mưa và triều"
  },
  {
    "id": 75,
    "region": "thu-duc",
    "regionName": "TP Thủ Đức",
    "ward": "Phường Tăng Nhơn Phú",
    "street": "đường Lã Xuân Oai",
    "cause": "rain-tide",
    "causeName": "Ngập do mưa và triều",
    "severity": "moderate",
    "severityName": "Ngập vừa",
    "lat": 10.839,
    "lng": 106.788,
    "note": "Ngập vừa do mưa và triều"
  },
  {
    "id": 76,
    "region": "thu-duc",
    "regionName": "TP Thủ Đức",
    "ward": "Phường Tăng Nhơn Phú",
    "street": "đường Lê Văn Việt",
    "cause": "rain-tide",
    "causeName": "Ngập do mưa và triều",
    "severity": "light",
    "severityName": "Ngập nhẹ",
    "lat": 10.846,
    "lng": 106.782,
    "note": "Ngập nhẹ do mưa và triều"
  },
  {
    "id": 77,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Thủ Dầu Một",
    "street": "đại lộ Bình Dương, đoạn trước Trường Đại học Bình Dương",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập",
    "lat": 10.981,
    "lng": 106.671,
    "note": "Khu vực Thủ Dầu Một (5 điểm)"
  },
  {
    "id": 78,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Thủ Dầu Một",
    "street": "đường Nguyễn Văn Thành (ĐT 741)",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập",
    "lat": 11.025,
    "lng": 106.698,
    "note": "Khu vực Thủ Dầu Một (5 điểm)"
  },
  {
    "id": 79,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Thủ Dầu Một",
    "street": "ngã ba đường Đoàn Trần Nghiệp - đường Hai Bà Trưng",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập",
    "lat": 10.978,
    "lng": 106.657,
    "note": "Khu vực Thủ Dầu Một (5 điểm)"
  },
  {
    "id": 80,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Thủ Dầu Một",
    "street": "đường Nguyễn Tri Phương",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập",
    "lat": 10.971,
    "lng": 106.662,
    "note": "Khu vực Thủ Dầu Một (5 điểm)"
  },
  {
    "id": 81,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Thủ Dầu Một",
    "street": "đường Nguyễn Đức Thuận",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập",
    "lat": 10.992,
    "lng": 106.668,
    "note": "Khu vực Thủ Dầu Một (5 điểm)"
  },
  {
    "id": 82,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Dĩ An",
    "street": "đường số 5 tại khu dân cư Nhị Đồng 1 (chợ Bà Diệp)",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập",
    "lat": 10.902,
    "lng": 106.762,
    "note": "Khu vực Dĩ An (10 điểm)"
  },
  {
    "id": 83,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Dĩ An",
    "street": "đường số 7 tại khu dân cư Nhị Đồng 1 (chợ Bà Diệp)",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập",
    "lat": 10.904,
    "lng": 106.764,
    "note": "Khu vực Dĩ An (10 điểm)"
  },
  {
    "id": 84,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Dĩ An",
    "street": "đường Phạm Ngũ Lão - Phan Huy Ích",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập",
    "lat": 10.898,
    "lng": 106.769,
    "note": "Khu vực Dĩ An (10 điểm)"
  },
  {
    "id": 85,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Dĩ An",
    "street": "đường An Bình tại phường An Bình",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập",
    "lat": 10.887,
    "lng": 106.758,
    "note": "Khu vực Dĩ An (10 điểm)"
  },
  {
    "id": 86,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Dĩ An",
    "street": "đường Bế Văn Đàn tại phường An Bình",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập",
    "lat": 10.889,
    "lng": 106.7595,
    "note": "Khu vực Dĩ An (10 điểm)"
  },
  {
    "id": 87,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Dĩ An",
    "street": "khu vực tổ 11 tại phường Hiệp Thắng",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập",
    "lat": 10.895,
    "lng": 106.792,
    "note": "Khu vực Dĩ An (10 điểm)"
  },
  {
    "id": 88,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Dĩ An",
    "street": "khu dân cư Tràng An",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập",
    "lat": 10.912,
    "lng": 106.778,
    "note": "Khu vực Dĩ An (10 điểm)"
  },
  {
    "id": 89,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Dĩ An",
    "street": "đường ĐT 743B",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập",
    "lat": 10.915,
    "lng": 106.765,
    "note": "Khu vực Dĩ An (10 điểm)"
  },
  {
    "id": 90,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Dĩ An",
    "street": "đường ĐT 747B",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập",
    "lat": 10.932,
    "lng": 106.781,
    "note": "Khu vực Dĩ An (10 điểm)"
  },
  {
    "id": 91,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Dĩ An",
    "street": "mương dọc đường sắt Bắc - Nam, khu dân cư Đông Hòa",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập",
    "lat": 10.893,
    "lng": 106.775,
    "note": "Khu vực Dĩ An (10 điểm)"
  },
  {
    "id": 92,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Thuận An",
    "street": "đường Bùi Hữu Nghĩa",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập",
    "lat": 10.923,
    "lng": 106.702,
    "note": "Khu vực Thuận An (9 điểm)"
  },
  {
    "id": 93,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Thuận An",
    "street": "đại lộ Bình Dương (Quốc lộ 13) đoạn giáp suối Cát",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập",
    "lat": 10.942,
    "lng": 106.685,
    "note": "Khu vực Thuận An (9 điểm)"
  },
  {
    "id": 94,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Thuận An",
    "street": "đại lộ Bình Dương (Quốc lộ 13) đoạn trước Trường Dạy nghề Việt Nam - Singapore",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập",
    "lat": 10.931,
    "lng": 106.698,
    "note": "Khu vực Thuận An (9 điểm)"
  },
  {
    "id": 95,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Thuận An",
    "street": "đại lộ Bình Dương (Quốc lộ 13) đoạn trước siêu thị Lotte Thuận An",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập",
    "lat": 10.926,
    "lng": 106.703,
    "note": "Khu vực Thuận An (9 điểm)"
  },
  {
    "id": 96,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Thuận An",
    "street": "đường ĐT 743A",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập",
    "lat": 10.918,
    "lng": 106.721,
    "note": "Khu vực Thuận An (9 điểm)"
  },
  {
    "id": 97,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Thuận An",
    "street": "đường Bùi Thị Xuân",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập",
    "lat": 10.945,
    "lng": 106.732,
    "note": "Khu vực Thuận An (9 điểm)"
  },
  {
    "id": 98,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Thuận An",
    "street": "đường Lê Thị Trung",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập",
    "lat": 10.951,
    "lng": 106.715,
    "note": "Khu vực Thuận An (9 điểm)"
  },
  {
    "id": 99,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Thuận An",
    "street": "đường Thuận An Hòa",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập",
    "lat": 10.938,
    "lng": 106.71,
    "note": "Khu vực Thuận An (9 điểm)"
  },
  {
    "id": 100,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Thuận An",
    "street": "đường Thuận Giao 19",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập",
    "lat": 10.952,
    "lng": 106.708,
    "note": "Khu vực Thuận An (9 điểm)"
  },
  {
    "id": 101,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Tân Uyên",
    "street": "đường ĐT 747B",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "moderate",
    "severityName": "Ngập cục bộ",
    "lat": 11.045,
    "lng": 106.782,
    "note": "Khu vực Tân Uyên (1 điểm ngập cục bộ)"
  },
  {
    "id": 102,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Bến Cát",
    "street": "1 đoạn trên đường ĐT 741",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập",
    "lat": 11.142,
    "lng": 106.645,
    "note": "Bến Cát (19 điểm ngập)"
  },
  {
    "id": 103,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Bến Cát",
    "street": "1 đoạn trên đường ĐT 741 (đoạn 2)",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập",
    "lat": 11.146,
    "lng": 106.649,
    "note": "Bến Cát (19 điểm ngập)"
  },
  {
    "id": 104,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Bến Cát",
    "street": "Đường 2-8-9",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập",
    "lat": 11.129,
    "lng": 106.608,
    "note": "Bến Cát (19 điểm ngập)"
  },
  {
    "id": 105,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Bến Cát",
    "street": "Quốc lộ 13, đoạn cổng Khu công nghiệp Hoàng Gia Tân Định",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập",
    "lat": 11.082,
    "lng": 106.634,
    "note": "Bến Cát (19 điểm ngập)"
  },
  {
    "id": 106,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Bến Cát",
    "street": "Quốc lộ 13, đoạn trước Trường Tiểu học Tân Định",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập",
    "lat": 11.087,
    "lng": 106.632,
    "note": "Bến Cát (19 điểm ngập)"
  },
  {
    "id": 107,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Bến Cát",
    "street": "Quốc lộ 13: trước UBND phường Mỹ Phước",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập cục bộ",
    "lat": 11.134,
    "lng": 106.612,
    "note": "7 điểm ngập cục bộ trên QL13"
  },
  {
    "id": 108,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Bến Cát",
    "street": "Quốc lộ 13: trước chợ Mỹ Hạnh",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập cục bộ",
    "lat": 11.139,
    "lng": 106.61,
    "note": "7 điểm ngập cục bộ trên QL13"
  },
  {
    "id": 109,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Bến Cát",
    "street": "Quốc lộ 13: trước khu dân cư Mỹ Phước 4",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập cục bộ",
    "lat": 11.125,
    "lng": 106.618,
    "note": "7 điểm ngập cục bộ trên QL13"
  },
  {
    "id": 110,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Bến Cát",
    "street": "Quốc lộ 13: khu vực gần bến Chà Vi",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập cục bộ",
    "lat": 11.145,
    "lng": 106.605,
    "note": "7 điểm ngập cục bộ trên QL13"
  },
  {
    "id": 111,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Bến Cát",
    "street": "Quốc lộ 13: trước Nghĩa trang Liệt sĩ Bến Cát",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập cục bộ",
    "lat": 11.118,
    "lng": 106.622,
    "note": "7 điểm ngập cục bộ trên QL13"
  },
  {
    "id": 112,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Bến Cát",
    "street": "Quốc lộ 13: ngã ba cầu Suối Tre",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập cục bộ",
    "lat": 11.152,
    "lng": 106.602,
    "note": "7 điểm ngập cục bộ trên QL13"
  },
  {
    "id": 113,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Bến Cát",
    "street": "Quốc lộ 13: trước Công an thị xã Bến Cát",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập cục bộ",
    "lat": 11.131,
    "lng": 106.614,
    "note": "7 điểm ngập cục bộ trên QL13"
  },
  {
    "id": 114,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Bến Cát",
    "street": "Đường ĐT 748",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập",
    "lat": 11.155,
    "lng": 106.575,
    "note": "Bến Cát (19 điểm ngập)"
  },
  {
    "id": 115,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Bến Cát",
    "street": "Đường ĐT 744: trước xã Phú An",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập cục bộ",
    "lat": 11.112,
    "lng": 106.545,
    "note": "6 điểm ngập cục bộ trên ĐT 744"
  },
  {
    "id": 116,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Bến Cát",
    "street": "Đường ĐT 744: tiệm rửa xe Minh Tâm",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập cục bộ",
    "lat": 11.115,
    "lng": 106.542,
    "note": "6 điểm ngập cục bộ trên ĐT 744"
  },
  {
    "id": 117,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Bến Cát",
    "street": "Đường ĐT 744: trước Công ty CP Greentech",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập cục bộ",
    "lat": 11.119,
    "lng": 106.538,
    "note": "6 điểm ngập cục bộ trên ĐT 744"
  },
  {
    "id": 118,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Bến Cát",
    "street": "Đường ĐT 744: trước Công ty TNHH Nhạc cụ Quang Hợp",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập cục bộ",
    "lat": 11.122,
    "lng": 106.535,
    "note": "6 điểm ngập cục bộ trên ĐT 744"
  },
  {
    "id": 119,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Bến Cát",
    "street": "Đường ĐT 744: trước cửa hàng xăng dầu Hồ Bửu",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập cục bộ",
    "lat": 11.126,
    "lng": 106.531,
    "note": "6 điểm ngập cục bộ trên ĐT 744"
  },
  {
    "id": 120,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Bến Cát",
    "street": "Đường ĐT 744: trước Công ty CP Bê tông Thủ Đức",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Điểm ngập cục bộ",
    "lat": 11.13,
    "lng": 106.527,
    "note": "6 điểm ngập cục bộ trên ĐT 744"
  },
  {
    "id": 121,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Thủ Dầu Một",
    "street": "ngã ba Cống, đường Thích Quảng Đức",
    "cause": "rain-tide",
    "causeName": "Ngập do mưa và triều",
    "severity": "severe",
    "severityName": "Mưa & triều",
    "lat": 10.975,
    "lng": 106.666,
    "note": "Ngập do mưa và triều (Thủ Dầu Một)"
  },
  {
    "id": 122,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Thủ Dầu Một",
    "street": "đường ven rạch Bưng Cải",
    "cause": "rain-tide",
    "causeName": "Ngập do mưa và triều",
    "severity": "severe",
    "severityName": "Mưa & triều",
    "lat": 10.972,
    "lng": 106.658,
    "note": "Ngập do mưa và triều (Thủ Dầu Một)"
  },
  {
    "id": 123,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Thủ Dầu Một",
    "street": "đường Hồ Văn Cống",
    "cause": "rain-tide",
    "causeName": "Ngập do mưa và triều",
    "severity": "severe",
    "severityName": "Mưa & triều",
    "lat": 10.963,
    "lng": 106.651,
    "note": "Ngập do mưa và triều (Thủ Dầu Một)"
  },
  {
    "id": 124,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Dĩ An",
    "street": "khu vực suối Bình Thắng",
    "cause": "rain-tide",
    "causeName": "Ngập do mưa và triều",
    "severity": "severe",
    "severityName": "Mưa & triều",
    "lat": 10.884,
    "lng": 106.786,
    "note": "Ngập do mưa và triều (Dĩ An)"
  },
  {
    "id": 125,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Dĩ An",
    "street": "Quốc lộ 1K đoạn từ khu vực dốc Chú Hỏa đến rạch Cái Cầu",
    "cause": "rain-tide",
    "causeName": "Ngập do mưa và triều",
    "severity": "severe",
    "severityName": "Mưa & triều",
    "lat": 10.882,
    "lng": 106.793,
    "note": "Ngập do mưa và triều (Dĩ An)"
  },
  {
    "id": 126,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Thuận An",
    "street": "đại lộ Bình Dương (Quốc lộ 13) đoạn trước Công ty TNHH Dịch vụ Thương mại Tân Hiệp Phát",
    "cause": "rain-tide",
    "causeName": "Ngập do mưa và triều",
    "severity": "severe",
    "severityName": "Mưa & triều",
    "lat": 10.912,
    "lng": 106.713,
    "note": "Ngập do mưa và triều (Thuận An)"
  },
  {
    "id": 127,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Thuận An",
    "street": "đại lộ Bình Dương (Quốc lộ 13) đoạn trước Công ty Fito",
    "cause": "rain-tide",
    "causeName": "Ngập do mưa và triều",
    "severity": "severe",
    "severityName": "Mưa & triều",
    "lat": 10.908,
    "lng": 106.716,
    "note": "Ngập do mưa và triều (Thuận An)"
  },
  {
    "id": 128,
    "region": "binh-duong",
    "regionName": "Bình Dương",
    "ward": "Thành phố Thuận An",
    "street": "đường Cách Mạng Tháng 8 đoạn cống ngang Cầu Nhỏ",
    "cause": "rain-tide",
    "causeName": "Ngập do mưa và triều",
    "severity": "severe",
    "severityName": "Mưa & triều",
    "lat": 10.916,
    "lng": 106.697,
    "note": "Ngập do mưa và triều (Thuận An)"
  },
  {
    "id": 129,
    "region": "vung-tau",
    "regionName": "Bà Rịa - Vũng Tàu",
    "ward": "Phường Tam Thắng",
    "street": "đường Thi Sách",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Ngập nặng, thường xuyên",
    "lat": 10.354,
    "lng": 107.086,
    "note": "Ngập nặng, thường xuyên"
  },
  {
    "id": 130,
    "region": "vung-tau",
    "regionName": "Bà Rịa - Vũng Tàu",
    "ward": "Phường Tam Thắng",
    "street": "đường Nguyễn Đình Thi",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Ngập nặng, thường xuyên",
    "lat": 10.356,
    "lng": 107.088,
    "note": "Ngập nặng, thường xuyên"
  },
  {
    "id": 131,
    "region": "vung-tau",
    "regionName": "Bà Rịa - Vũng Tàu",
    "ward": "Phường Tam Thắng",
    "street": "ngã ba Quang Trung - Hạ Long",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Ngập nặng, thường xuyên",
    "lat": 10.347,
    "lng": 107.072,
    "note": "Ngập nặng, thường xuyên"
  },
  {
    "id": 132,
    "region": "vung-tau",
    "regionName": "Bà Rịa - Vũng Tàu",
    "ward": "Phường Vũng Tàu",
    "street": "đường Nguyễn Du",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Ngập nặng, thường xuyên",
    "lat": 10.349,
    "lng": 107.076,
    "note": "Ngập nặng, thường xuyên"
  },
  {
    "id": 133,
    "region": "vung-tau",
    "regionName": "Bà Rịa - Vũng Tàu",
    "ward": "Phường Vũng Tàu",
    "street": "đường Trưng Trắc - Trưng Nhị",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Ngập nặng, thường xuyên",
    "lat": 10.348,
    "lng": 107.074,
    "note": "Ngập nặng, thường xuyên"
  },
  {
    "id": 134,
    "region": "vung-tau",
    "regionName": "Bà Rịa - Vũng Tàu",
    "ward": "Phường Vũng Tàu",
    "street": "đường Lê Lợi tại ngã ba Lê Hồng Phong",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Ngập nặng, thường xuyên",
    "lat": 10.358,
    "lng": 107.078,
    "note": "Ngập nặng, thường xuyên"
  },
  {
    "id": 135,
    "region": "vung-tau",
    "regionName": "Bà Rịa - Vũng Tàu",
    "ward": "Phường Phú Mỹ",
    "street": "đường Nguyễn Tất Thành",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Ngập nặng, thường xuyên",
    "lat": 10.592,
    "lng": 107.048,
    "note": "Ngập nặng, thường xuyên"
  },
  {
    "id": 136,
    "region": "vung-tau",
    "regionName": "Bà Rịa - Vũng Tàu",
    "ward": "Phường Phú Mỹ",
    "street": "đường Lê Lợi",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Ngập nặng, thường xuyên",
    "lat": 10.595,
    "lng": 107.051,
    "note": "Ngập nặng, thường xuyên"
  },
  {
    "id": 137,
    "region": "vung-tau",
    "regionName": "Bà Rịa - Vũng Tàu",
    "ward": "Phường Phú Mỹ",
    "street": "đường Nguyễn Trãi",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Ngập nặng, thường xuyên",
    "lat": 10.59,
    "lng": 107.046,
    "note": "Ngập nặng, thường xuyên"
  },
  {
    "id": 138,
    "region": "vung-tau",
    "regionName": "Bà Rịa - Vũng Tàu",
    "ward": "Phường Phú Mỹ",
    "street": "Quốc lộ 51 giao với đường Huỳnh Thúc Kháng",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Ngập nặng, thường xuyên",
    "lat": 10.598,
    "lng": 107.044,
    "note": "Ngập nặng, thường xuyên"
  },
  {
    "id": 139,
    "region": "vung-tau",
    "regionName": "Bà Rịa - Vũng Tàu",
    "ward": "Phường Phú Mỹ",
    "street": "Quốc lộ 51 giao với đường Lê Duẩn",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Ngập nặng, thường xuyên",
    "lat": 10.601,
    "lng": 107.042,
    "note": "Ngập nặng, thường xuyên"
  },
  {
    "id": 140,
    "region": "vung-tau",
    "regionName": "Bà Rịa - Vũng Tàu",
    "ward": "Phường Phú Mỹ",
    "street": "Quốc lộ 51 giao với đường Phạm Văn Đồng",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Ngập nặng, thường xuyên",
    "lat": 10.604,
    "lng": 107.04,
    "note": "Ngập nặng, thường xuyên"
  },
  {
    "id": 141,
    "region": "vung-tau",
    "regionName": "Bà Rịa - Vũng Tàu",
    "ward": "Phường Phú Mỹ",
    "street": "Quốc lộ 51 đoạn trước chung cư Hodeco - khu vực Miếu Cô Mai và từ ngã ba Mỹ Xuân đến ngã tư Mỹ Xuân B1",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Ngập nặng, thường xuyên",
    "lat": 10.612,
    "lng": 107.035,
    "note": "Ngập nặng, thường xuyên trên QL51"
  },
  {
    "id": 142,
    "region": "vung-tau",
    "regionName": "Bà Rịa - Vũng Tàu",
    "ward": "Phường Phước Thắng",
    "street": "đường Võ Nguyên Giáp",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "severe",
    "severityName": "Ngập nặng, thường xuyên",
    "lat": 10.402,
    "lng": 107.124,
    "note": "Ngập nặng, thường xuyên"
  },
  {
    "id": 143,
    "region": "vung-tau",
    "regionName": "Bà Rịa - Vũng Tàu",
    "ward": "Phường Tam Thắng",
    "street": "đường Nguyễn Quyền",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "moderate",
    "severityName": "Ngập vừa",
    "lat": 10.357,
    "lng": 107.084,
    "note": "Ngập vừa"
  },
  {
    "id": 144,
    "region": "vung-tau",
    "regionName": "Bà Rịa - Vũng Tàu",
    "ward": "Phường Vũng Tàu",
    "street": "hẻm 99 đường Trương Công Định",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "moderate",
    "severityName": "Ngập vừa",
    "lat": 10.354,
    "lng": 107.079,
    "note": "Ngập vừa"
  },
  {
    "id": 145,
    "region": "vung-tau",
    "regionName": "Bà Rịa - Vũng Tàu",
    "ward": "Phường Phú Mỹ",
    "street": "đường Mỹ Xuân B1",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "moderate",
    "severityName": "Ngập vừa",
    "lat": 10.618,
    "lng": 107.041,
    "note": "Ngập vừa"
  },
  {
    "id": 146,
    "region": "vung-tau",
    "regionName": "Bà Rịa - Vũng Tàu",
    "ward": "Phường Tân Thành",
    "street": "đường Nguyễn Hữu Tiến",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "moderate",
    "severityName": "Ngập vừa",
    "lat": 10.584,
    "lng": 107.056,
    "note": "Ngập vừa"
  },
  {
    "id": 147,
    "region": "vung-tau",
    "regionName": "Bà Rịa - Vũng Tàu",
    "ward": "Xã Long Hải",
    "street": "đường Nguyễn Lương Bằng",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "moderate",
    "severityName": "Ngập vừa",
    "lat": 10.379,
    "lng": 107.242,
    "note": "Ngập vừa"
  },
  {
    "id": 148,
    "region": "vung-tau",
    "regionName": "Bà Rịa - Vũng Tàu",
    "ward": "Phường Phước Thắng",
    "street": "hẻm 1 Trần Xuân Độ - 115 Lê Lợi",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "moderate",
    "severityName": "Ngập vừa",
    "lat": 10.395,
    "lng": 107.112,
    "note": "Ngập vừa"
  },
  {
    "id": 149,
    "region": "vung-tau",
    "regionName": "Bà Rịa - Vũng Tàu",
    "ward": "Phường Rạch Dừa",
    "street": "đường 30/4 đoạn từ đường Lê Quang Định đến đường Nguyễn Hữu Cảnh",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "moderate",
    "severityName": "Ngập vừa",
    "lat": 10.384,
    "lng": 107.108,
    "note": "Ngập vừa"
  },
  {
    "id": 150,
    "region": "vung-tau",
    "regionName": "Bà Rịa - Vũng Tàu",
    "ward": "Phường Rạch Dừa",
    "street": "đường 2/9 đoạn từ đường Lê Quang Định đến số 442 Bình Giã",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "moderate",
    "severityName": "Ngập vừa",
    "lat": 10.387,
    "lng": 107.112,
    "note": "Ngập vừa"
  },
  {
    "id": 151,
    "region": "vung-tau",
    "regionName": "Bà Rịa - Vũng Tàu",
    "ward": "Phường Bà Rịa",
    "street": "đường Cách Mạng Tháng 8: từ ngã tư Tôn Đức Thắng đến ngã tư Nguyễn Tất Thành",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "moderate",
    "severityName": "Ngập vừa",
    "lat": 10.498,
    "lng": 107.168,
    "note": "CMT8 gồm 3 đoạn"
  },
  {
    "id": 152,
    "region": "vung-tau",
    "regionName": "Bà Rịa - Vũng Tàu",
    "ward": "Phường Bà Rịa",
    "street": "đường Cách Mạng Tháng 8: ngã tư Cách Mạng Tháng 8 - Phạm Văn Đồng",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "moderate",
    "severityName": "Ngập vừa",
    "lat": 10.495,
    "lng": 107.171,
    "note": "CMT8 gồm 3 đoạn"
  },
  {
    "id": 153,
    "region": "vung-tau",
    "regionName": "Bà Rịa - Vũng Tàu",
    "ward": "Phường Bà Rịa",
    "street": "đường Cách Mạng Tháng 8: ngã tư Trần Phú - Võ Văn Kiệt",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "moderate",
    "severityName": "Ngập vừa",
    "lat": 10.492,
    "lng": 107.175,
    "note": "CMT8 gồm 3 đoạn"
  },
  {
    "id": 154,
    "region": "vung-tau",
    "regionName": "Bà Rịa - Vũng Tàu",
    "ward": "Phường Hắc Dịch",
    "street": "khu tái định cư",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "moderate",
    "severityName": "Ngập vừa",
    "lat": 10.638,
    "lng": 107.128,
    "note": "Khu tái định cư Hắc Dịch (Ngập vừa)"
  },
  {
    "id": 155,
    "region": "vung-tau",
    "regionName": "Bà Rịa - Vũng Tàu",
    "ward": "Xã Long Điền",
    "street": "đường Nguyễn Tất Thành, đoạn giao với đường Hùng Vương",
    "cause": "rain",
    "causeName": "Ngập do mưa",
    "severity": "light",
    "severityName": "Ngập nhẹ",
    "lat": 10.428,
    "lng": 107.198,
    "note": "Ngập nhẹ"
  },
  {
    "id": 156,
    "region": "vung-tau",
    "regionName": "Bà Rịa - Vũng Tàu",
    "ward": "Thành phố Vũng Tàu",
    "street": "khu Decoimex mở rộng",
    "cause": "tide",
    "causeName": "Ngập do triều",
    "severity": "tide",
    "severityName": "Ngập do triều",
    "lat": 10.372,
    "lng": 107.098,
    "note": "1 vị trí tại khu Decoimex mở rộng"
  },
  {
    "id": 157,
    "region": "vung-tau",
    "regionName": "Bà Rịa - Vũng Tàu",
    "ward": "Thành phố Vũng Tàu",
    "street": "khu Decoimex mở rộng (phường 9)",
    "cause": "rain-tide",
    "causeName": "Ngập do mưa và triều",
    "severity": "severe",
    "severityName": "Mưa & triều",
    "lat": 10.374,
    "lng": 107.096,
    "note": "Khu Decoimex mở rộng thuộc phường 9"
  },
  {
    "id": 158,
    "region": "vung-tau",
    "regionName": "Bà Rịa - Vũng Tàu",
    "ward": "Thành phố Vũng Tàu",
    "street": "hẻm 646 đường 30/4",
    "cause": "rain-tide",
    "causeName": "Ngập do mưa và triều",
    "severity": "severe",
    "severityName": "Mưa & triều",
    "lat": 10.381,
    "lng": 107.104,
    "note": "Hẻm 646 đường 30/4"
  },
  {
    "id": 159,
    "region": "vung-tau",
    "regionName": "Bà Rịa - Vũng Tàu",
    "ward": "Thành phố Vũng Tàu",
    "street": "cuối hẻm 842 đường Bình Giã",
    "cause": "rain-tide",
    "causeName": "Ngập do mưa và triều",
    "severity": "severe",
    "severityName": "Mưa & triều",
    "lat": 10.384,
    "lng": 107.107,
    "note": "Cuối hẻm 842 đường Bình Giã"
  }
];


function quickFilterRegion(regionVal) {
  const select = document.getElementById("filter-region");
  if (select) {
    select.value = regionVal;
    applyFilters();
  }
  if (typeof scrollToSection === 'function') {
    scrollToSection("ban-do", 14);
  } else {
    const mapEl = document.getElementById("ban-do");
    if (mapEl) mapEl.scrollIntoView({ behavior: "smooth" });
  }
  if (regionVal === "hcm-old") focusRegion("hcm");
  else if (regionVal === "thu-duc") focusRegion("thuduc");
  else if (regionVal === "binh-duong") focusRegion("binhduong");
  else if (regionVal === "vung-tau") focusRegion("vungtau");
}
window.quickFilterRegion = quickFilterRegion;




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

      const script = document.createElement('script');
      script.src = '/leaflet/leaflet.js';
      script.onload = () => {
        if (typeof L !== 'undefined') onReady();
      };
      script.onerror = () => {
        const script2 = document.createElement('script');
        script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
        script2.onload = () => {
          if (typeof L !== 'undefined') onReady();
        };
        document.head.appendChild(script2);
      };
      document.head.appendChild(script);
    }

    function initMap() {
      // 1. Luôn kích hoạt danh sách điểm và chú giải ngay lập tức (0ms delay)
      renderSidebarList(floodPoints);
      updateFloatingLegend(floodPoints);
      setupFloatingLegendControls();

      // 2. Khởi tạo bản đồ Leaflet tức thì
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
          const southVietnamBounds = L.latLngBounds(
            [8.4, 104.0],  // Điểm cực Tây Nam (Cà Mau, Phú Quốc, Kiên Giang)
            [12.4, 108.4]  // Điểm cực Đông Bắc (Bình Phước, Đồng Nai, BR-VT, Bình Thuận)
          );

          map = L.map('map', {
            center: defaultCenter,
            zoom: defaultZoom,
            minZoom: 9,                     // Giới hạn thu nhỏ trong phạm vi Miền Nam
            maxZoom: 18,                    // Phóng to chi tiết ngõ phố
            maxBounds: southVietnamBounds,  // Khóa phạm vi hiển thị
            maxBoundsViscosity: 1.0,
            zoomControl: true,
            scrollWheelZoom: true,
            preferCanvas: true              // Dùng Canvas renderer để tăng tốc độ vẽ hàng trăm marker
          });

          // Biến quản lý layer bản đồ OpenStreetMap hiện tại
          currentTileLayer = null;

          // Hàm chuyển đổi các kiểu bản đồ OpenStreetMap (100% miễn phí, không cần API key)
          window.switchMapStyle = function(styleKey) {
            if (!map) return;
            if (currentTileLayer) {
              map.removeLayer(currentTileLayer);
            }

            const btnStd = document.getElementById('btn-layer-osm-std');
            const btnFast = document.getElementById('btn-layer-osm-fast');
            const btnHot = document.getElementById('btn-layer-osm-hot');

            [btnStd, btnFast, btnHot].forEach(btn => {
              if (btn) btn.className = 'px-2.5 py-1 rounded-lg transition-all text-slate-600 hover:text-slate-900 cursor-pointer';
            });

            if (styleKey === 'fast') {
              if (btnFast) btnFast.className = 'px-2.5 py-1 rounded-lg transition-all bg-white text-sky-700 font-bold shadow-xs cursor-pointer';
              // OpenStreetMap Siêu tốc qua CDN toàn cầu
              currentTileLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
                subdomains: ['a', 'b', 'c', 'd'],
                maxZoom: 19,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> đóng góp',
                crossOrigin: true,
                updateWhenIdle: false,
                updateWhenZooming: true,
                keepBuffer: 16
              });
            } else if (styleKey === 'hot') {
              if (btnHot) btnHot.className = 'px-2.5 py-1 rounded-lg transition-all bg-white text-sky-700 font-bold shadow-xs cursor-pointer';
              // OpenStreetMap Nhân đạo (Humanitarian HOT) - màu sắc tương phản cao
              currentTileLayer = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
                subdomains: ['a', 'b', 'c'],
                maxZoom: 19,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> đóng góp',
                crossOrigin: true,
                keepBuffer: 12
              });
            } else {
              // Mặc định: OpenStreetMap tiêu chuẩn (Sắc nét, 100% miễn phí, không cần API key)
              if (btnStd) btnStd.className = 'px-2.5 py-1 rounded-lg transition-all bg-white text-sky-700 font-bold shadow-xs cursor-pointer';
              currentTileLayer = L.tileLayer('https://tile.openstreetmap.de/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> đóng góp',
                crossOrigin: true,
                keepBuffer: 12
              });

              // Tự động chuyển qua mirror OpenStreetMap dự phòng nếu mạng gặp trục trặc
              currentTileLayer.on('tileerror', (error) => {
                if (error.tile && error.coords && !error.tile.dataset.hasFallback) {
                  error.tile.dataset.hasFallback = 'true';
                  const { z, x, y } = error.coords;
                  error.tile.src = `https://a.tile.openstreetmap.fr/osmfr/${z}/${x}/${y}.png`;
                }
              });
            }

            currentTileLayer.addTo(map);
            if (markersLayer) markersLayer.bringToFront();
          };

          // Khởi động với OpenStreetMap tiêu chuẩn
          window.switchMapStyle('standard');

          // Nhóm layer chứa các marker
          markersLayer = L.layerGroup().addTo(map);

          // Render toàn bộ marker điểm ngập lên bản đồ
          renderMarkers(floodPoints);

          // Ngay lập tức tính toán kích cỡ bản đồ
          map.whenReady(() => {
            map.invalidateSize();
          });
          requestAnimationFrame(() => { if (map) map.invalidateSize(); });
          setTimeout(() => { if (map) map.invalidateSize(); }, 150);
          setTimeout(() => { if (map) map.invalidateSize(); }, 600);

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
          badgeClass: 'text-rose-700 bg-rose-50 border-rose-200',
          pulseClass: 'pulse-severe',
          test: p => p.severity === 'severe'
        },
        {
          id: 'moderate',
          name: 'Ngập vừa',
          sublabel: '15cm – 30cm (thoát 30-120p)',
          colorClass: 'bg-amber-500',
          badgeClass: 'text-amber-700 bg-amber-50 border-amber-200',
          pulseClass: 'pulse-moderate',
          test: p => p.severity === 'moderate'
        },
        {
          id: 'light',
          name: 'Ngập nhẹ',
          sublabel: '< 15cm (thoát < 30p)',
          colorClass: 'bg-emerald-500',
          badgeClass: 'text-emerald-700 bg-emerald-50 border-emerald-200',
          pulseClass: '',
          test: p => p.severity === 'light'
        },
        {
          id: 'tide',
          name: 'Ngập do triều cường',
          sublabel: 'Triều sông Sài Gòn & ven biển',
          colorClass: 'bg-blue-500',
          badgeClass: 'text-blue-700 bg-blue-50 border-blue-200',
          pulseClass: '',
          test: p => p.cause === 'tide'
        },
        {
          id: 'rain-tide',
          name: 'Ngập do mưa & triều',
          sublabel: 'Tác động mưa dồn và triều dâng',
          colorClass: 'bg-indigo-500',
          badgeClass: 'text-indigo-700 bg-indigo-50 border-indigo-200',
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
          <div class="flex items-center justify-between gap-2 p-1.5 rounded-lg hover:bg-slate-50 transition-colors">
            <div class="flex items-center gap-2 min-w-0">
              <div class="relative flex items-center justify-center w-3 h-3 shrink-0">
                ${cat.pulseClass ? `<span class="absolute -inset-1 rounded-full ${cat.colorClass} opacity-60 ${cat.pulseClass}"></span>` : ''}
                <span class="relative w-2.5 h-2.5 rounded-full ${cat.colorClass}"></span>
              </div>
              <div class="min-w-0">
                <div class="text-[11px] font-semibold text-slate-800 truncate leading-tight">${cat.name}</div>
                <div class="text-[10px] text-slate-500 leading-tight">${cat.sublabel}</div>
              </div>
            </div>
            <span class="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-full border ${cat.badgeClass} shrink-0 tabular-nums">
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
      let color = '#ef4444'; // Đỏ tươi
      if (point.severity === 'severe') {
        color = '#ef4444'; // Đỏ tươi
      } else if (point.severity === 'moderate') {
        color = '#f59e0b'; // Cam nắng ấm
      } else if (point.severity === 'light') {
        color = '#10b981'; // Xanh ngọc
      } else if (point.cause === 'tide') {
        color = '#0284c7'; // Xanh biển
      }

      const html = `
        <div class="relative flex items-center justify-center w-6 h-6 cursor-pointer group">
          <div class="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center shadow-md transition-transform group-hover:scale-125" style="background-color: ${color}">
            <svg class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547" />
            </svg>
          </div>
        </div>
      `;

      return L.divIcon({
        html: html,
        className: 'custom-flood-marker',
        iconSize: [24, 24],
        iconAnchor: [12, 12],
        popupAnchor: [0, -12]
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

        // Nội dung popup chi tiết, sắc nét phong cách sáng hiện đại
        const popupContent = `
          <div class="p-1">
            <div class="flex items-center justify-between gap-2 border-b border-slate-100 pb-2 mb-2">
              <span class="text-[11px] font-bold uppercase tracking-wider text-sky-600">#${point.id} · ${point.regionName}</span>
              <span class="text-[10px] px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 font-semibold border border-sky-100">${point.causeName}</span>
            </div>
            <h4 class="text-sm font-bold text-slate-900 mb-1 leading-snug">${point.street}</h4>
            <p class="text-xs text-slate-600 mb-2"><strong>Địa bàn:</strong> ${point.ward}</p>
            <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-600 leading-relaxed">
              <div><span class="font-semibold text-slate-800">Phân loại:</span> ${point.severityName}</div>
              <div class="mt-0.5"><span class="font-semibold text-slate-800">Chi tiết:</span> ${point.note}</div>
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
          <div class="p-8 text-center text-xs text-slate-400">
            Không tìm thấy điểm ngập phù hợp với điều kiện lọc.
          </div>
        `;
        return;
      }

      container.innerHTML = points.map(p => {
        let badgeColor = 'text-rose-700 bg-rose-50 border-rose-200';
        if (p.severity === 'moderate') badgeColor = 'text-amber-700 bg-amber-50 border-amber-200';
        if (p.severity === 'light') badgeColor = 'text-emerald-700 bg-emerald-50 border-emerald-200';
        if (p.cause === 'tide') badgeColor = 'text-blue-700 bg-blue-50 border-blue-200';

        return `
          <div 
            onclick="focusPoint(${p.id})"
            class="p-2.5 rounded-xl bg-white hover:bg-sky-50/80 cursor-pointer transition-all border border-slate-100/90 hover:border-sky-200 shadow-sm hover:shadow group"
          >
            <div class="flex items-center justify-between gap-1 mb-1">
              <span class="text-[11px] font-bold text-sky-600 group-hover:text-sky-700 transition-colors">#${p.id} · ${p.regionName}</span>
              <span class="text-[10px] px-2 py-0.5 rounded-full border ${badgeColor} font-semibold">${p.severityName}</span>
            </div>
            <div class="text-xs font-bold text-slate-800 group-hover:text-sky-950 line-clamp-1">${p.street}</div>
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
        map.flyTo([point.lat, point.lng], 16, {
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
    window.focusPoint = focusPoint;
    window.focusRegion = focusRegion;

    // Tìm kiếm và phóng to điểm ngập khi người dùng nhấp từ danh sách văn bản
    window.locatePointByName = function(streetQuery) {
      const q = streetQuery.toLowerCase().trim();
      const found = floodPoints.find(p => p.street.toLowerCase().includes(q) || q.includes(p.street.toLowerCase()));
      if (found) {
        if (typeof scrollToSection === 'function') {
          scrollToSection('ban-do', 14);
        } else {
          const mapSection = document.getElementById('ban-do');
          if (mapSection) {
            mapSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
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
      if (!canvas) return;
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

    /* ==========================================================================
       PHÂN ĐOẠN 6: ĐIỀU HƯỚNG CUỘN MƯỢT VỚI OFFSET CHO THANH STICKY HEADER
       (Smooth Scroll for Anchor Links & Offset Adjustment for Sticky Header)
       ========================================================================== */
    function getStickyHeaderHeight() {
      const header = document.querySelector('header');
      if (header) {
        const rect = header.getBoundingClientRect();
        return rect.height > 0 ? rect.height : 64;
      }
      return 0;
    }

    function scrollToElementWithOffset(targetElement, extraOffset = 14) {
      if (!targetElement) return;
      const headerHeight = getStickyHeaderHeight();
      const totalOffset = headerHeight + extraOffset;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - totalOffset;

      window.scrollTo({
        top: Math.max(0, Math.round(offsetPosition)),
        behavior: 'smooth'
      });
    }

    function scrollToSection(targetId, extraOffset = 14) {
      const cleanId = typeof targetId === 'string' ? targetId.replace(/^#/, '') : '';
      if (!cleanId) return;
      const targetElement = document.getElementById(cleanId);
      if (targetElement) {
        scrollToElementWithOffset(targetElement, extraOffset);
      }
    }
    window.scrollToSection = scrollToSection;
    window.scrollToElementWithOffset = scrollToElementWithOffset;

    function initSmoothScrollWithStickyHeaderOffset() {
      // Bắt sự kiện click trên tất cả liên kết nội bộ (anchor links) trong navigation bar và section links
      document.addEventListener('click', (event) => {
        const anchor = event.target.closest('a[href^="#"]');
        if (!anchor) return;

        const href = anchor.getAttribute('href');
        if (!href || href === '#' || href === '#!') return;

        const targetId = href.slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          event.preventDefault();

          scrollToElementWithOffset(targetElement, 14);

          // Cập nhật URL hash qua History API mà không gây giật trình duyệt
          if (window.history && window.history.pushState) {
            window.history.pushState(null, '', href);
          } else {
            window.location.hash = href;
          }
        }
      });

      // Tự động căn chỉnh offset nếu trang được truy cập trực tiếp với hash trên URL (e.g. #ban-do, #dia-ban)
      if (window.location.hash) {
        const initialTargetId = window.location.hash.slice(1);
        const initialTarget = document.getElementById(initialTargetId);
        if (initialTarget) {
          // Delay nhỏ để đảm bảo layout và DOM render hoàn tất
          setTimeout(() => {
            scrollToElementWithOffset(initialTarget, 14);
          }, 150);
        }
      }

      // ScrollSpy: Cập nhật chỉ báo liên kết điều hướng active khi người dùng cuộn trang
      const sectionIds = ['hero', 'dia-ban', 'tieu-chi', 'ban-do'];
      const navLinks = Array.from(document.querySelectorAll('header nav a[href^="#"]'));

      if (navLinks.length > 0) {
        let isTicking = false;
        window.addEventListener('scroll', () => {
          if (!isTicking) {
            window.requestAnimationFrame(() => {
              const headerHeight = getStickyHeaderHeight();
              const scrollPos = window.pageYOffset + headerHeight + 80;

              let activeId = '';
              for (let i = sectionIds.length - 1; i >= 0; i--) {
                const el = document.getElementById(sectionIds[i]);
                if (el && el.offsetTop <= scrollPos) {
                  activeId = sectionIds[i];
                  break;
                }
              }

              if (activeId) {
                navLinks.forEach(link => {
                  const target = link.getAttribute('href').replace(/^#/, '');
                  if (target === activeId) {
                    link.classList.add('text-cyan-400');
                    link.classList.remove('text-slate-300');
                  } else {
                    link.classList.remove('text-cyan-400');
                    link.classList.add('text-slate-300');
                  }
                });
              }

              isTicking = false;
            });
            isTicking = true;
          }
        }, { passive: true });
      }
    }

    // Khởi chạy ngay lập tức, không chờ đợi nếu DOM đã sẵn sàng
    function startApp() {
      initMap();
      initRainCanvas();
      initScrollAnimations();
      initSmoothScrollWithStickyHeaderOffset();
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', startApp);
    } else {
      startApp();
    }

  