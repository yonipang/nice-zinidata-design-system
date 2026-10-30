# MapLayout

지도 화면 전체 배치 — **Templates v2.1 "지도 레이아웃"**(Floating type · Side pannel type · 보고서 펼친 상태 · 접힌 상태)을 그대로 옮김. 실제 지도는 지도 라이브러리가 `map`에 들어가고(없으면 자리 표시 바탕), 디자인시스템은 그 위의 검색 · 필터 · 패널 · 보고서 · 도구 배치를 맡는다.

**Props** — `type` panel|floating · `map` · `search`(MapSearch) · `filters`[{label, active, icon, onClick}] · `list`(목록, 함수면 `openReport` 받음) · `report`{title, content, onClose} · `defaultReportOpen` · `defaultPanelOpen` · `topTools` · `bottomTools`(PC) · `mobileTools` · `onLocate` · `profile`(모바일) · `onSearchHere` · `height` · `children`(지도 위 표시).

## 배치 (PC, 1024 이상)
- **지도는 늘 화면 100%.**
- 사이드 패널(type=panel): 왼쪽 375, `bg-main`, 위에 검색(여백 16/20, 입력 48) + 목록(위 12, MapListItem — 동그란 사진 24 · 이름 · 주소 · 정보). 오른쪽 가장자리에 접기 손잡이 32×60.
- 필터: 검색 오른쪽, 여백 20/24 · 사이 12, Toggle Button base · xl · primary · pill. **필터는 검색창과 함께 움직인다**(패널을 접으면 왼쪽으로).
- 필터를 누르면 버튼 아래 4에 **선택 판**(폭 220 · `rounded-3xl` · `elevation-3` · 여백 20/8/12): 제목(필터 이름, `text-base` semibold) + 항목 줄 40(`text-sm` medium), 고른 항목은 primary semibold + chevron-right. 고르면 닫히고 **버튼에 고른 값**(예: 시장규모 → "총 매출액")이 보이며 primary 테두리 상태가 된다. 바깥 누르기 · Esc로 닫힘. `filters[{label, title, options, defaultValue, onChange, icon}]`.
- **하위 항목**: 항목을 `{ label, children: [...] }`로 주면 오른쪽에 ›가 붙고, 마우스를 올리거나 누르면 **오른쪽에 하위 판**(폭 180, 그 줄 높이에 맞춤)이 펼쳐짐. 모바일은 판 안에서 **아래로 들여 펼침**(⌄). 하위를 고르면 값 = "총 매출액 · 월별". ›는 '고른 표시'가 아니라 '펼칠 수 있음' 표시.
- **아이콘**: 필터마다 `icon`(Icon Set 이름)을 주면 버튼 왼쪽에 붙는다. 기본은 아이콘 없이.
- 보고서: 패널 옆에 390으로 붙고 **필터 위를 덮으며** 열림. 머리(Contents Header card: 제목 + 닫기) + 보고서 영역(여백 10). 보고서가 열린 채로 손잡이를 누르면 **패널까지 한 번에 접힘**.
- 패널을 접으면 지도 위에 **"현 지도에서 검색"**(Primary outline sm pill) 버튼이 나옴. 펼치면 사라짐(패널 안에 검색이 있으므로).
- 오른쪽 위 도구: 내 정보 · 측정(거리 · 면적 · 반경) · 커스텀 / 오른쪽 아래: 내 위치 · 확대 · 축소(MapTool 48 · MapMenu). 여백 16 · 사이 12.
- type=floating: 패널 없이 검색(375 칸) + 필터만 지도 위에 떠 있음.

## 반응형
| 판 폭 | 바뀌는 점 |
|---|---|
| 768 ~ 1023 | 패널 320, 보고서는 패널 **위에 겹쳐** 열림(지도를 덜 가림) |
| 768 미만 | 위: 검색 막대(56) + 필터 가로 스크롤(md), 목록: **아래 시트**(40% ↔ 85%), 보고서: **전체 화면**(뒤로 버튼) |

### 모바일 도구
- **확대 · 축소 버튼은 없앤다** — 두 손가락 확대 · 축소가 기본.
- **내 정보**(`profile`)는 검색 막대 오른쪽.
- 거리 · 면적 · 반경 · 커스텀은 오른쪽 위 **더보기(⋮) 버튼 하나**로 접고(`mobileTools`), 누르면 아래로 목록이 펼쳐짐(줄 44 · 아이콘 18 + `text-sm`, 바깥 누르기 · Esc로 닫힘).
- **내 위치**(`onLocate`)만 오른쪽 아래 — 목록 시트가 있으면 시트 바로 위, 없으면(Floating형) 화면 아래 16. 시트를 펼치면 숨김.
→ 지도 위 버튼이 2개뿐이라 높이가 작아도 겹치지 않는다.
- 지도 위에 떠 있는 버튼은 hover · pressed 때 **흰 판 위에 state layer를 겹친다**(판이 반투명해져 지도가 비치지 않게). 모바일은 hover 없이 누르는 동안만 pressed.
