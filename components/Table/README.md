# Table

PC 표. 모바일은 MinimalTable.

**Props** — `columns` [{key,label,align,numeric,legendColor,render,width,hideHeader}] · `rows`(행 객체, `_selected: true|'primary'|'negative'`) · `header` main|subtle · `striped` · `groups`(상위 헤더 [{label,span,rowSpan}]) · `caption`.
- 행 높이 36(헤더 · 본문 모두), 칸 높이를 늘리지 않는다. 본문 줄 아래 1px `divider-neutral-subtle`.
- 헤더 셀에는 배경이 없다 — 헤더 줄 프레임에 `table-header-main`(흰) 또는 `table-header-subtle`(회색). 한 화면의 표는 같은 헤더 배경. 본문 `table-row-main`, 줄무늬 `table-row-subtle`, 선택 `table-row-selected(-primary|-negative)`. 표 배경에 surface 토큰을 직접 쓰지 않는다.
- 헤더 글자 text-sm-medium, 본문 text-sm-normal, 둘 다 `text-body-main`.
- **숫자 데이터와 그 열 헤더는 오른쪽 정렬**(%, 원, 건 포함 — `numeric: true`), 글자는 왼쪽, 여러 열을 묶는 상위 헤더는 가운데.
- 줄마다 반복되는 버튼은 Neutral base sm(solid 금지). 증감 없는 숫자(순번 · 금액 · 개수)도 일반 글자 칸.
- 차트 아래 표: 본문 첫 칸 = 차트 카테고리(같은 순서), 시리즈 열 헤더에 이름 + 차트와 같은 색 네모(`legendColor`). 본문 값 칸 · 시리즈가 아닌 열 · 도넛/파이 표에는 네모 없음. 카테고리가 열인 교차표는 상위 · 하위 2줄 헤더.
