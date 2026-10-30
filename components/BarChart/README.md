# BarChart

막대 차트 — **ECharts 5.5** 위에 토큰 테마를 입힌 컴포넌트(엔진은 cdnjs에서 한 번만 불러옴).

**Props** — `categories` · `series`[{name,data,color}] · `stacked`(누적) · `horizontal`(가로) · `showValues`(막대 끝 값) · `unit`(툴팁 단위) · `height`(기본 240) · `legend`(계열 2개 이상이면 자동) · `label`(화면 읽기 이름).
- 색: 계열 순서대로 **`chart-series-1~6`**(Primitive 직접 사용 금지).
- 축: 글자 `text-xs` `text-body-subtle`, 축선 `divider-neutral-main`, 격자 `divider-neutral-subtle`, 눈금 없음. 막대 최대 폭 24, 끝 모서리 4(누적은 맨 위만).
- 툴팁: Tooltip 판과 같게(`surface-main` · `border-neutral-main` · 모서리 12 · `elevation-3`) — 범주 semibold + 계열마다 점 · 이름 · 값. 막대 위 마우스 = 회색 띠(`state-layers-on-neutral-hover`).
- 범례: 위 왼쪽, `text-xs` 13 `text-body-main`, 네모 10, 사이 16, 누르면 계열 켜고 끄기.
- 판 크기가 바뀌면 다시 그리고, '동작 줄이기' 설정이면 애니메이션을 끈다.
- 더 복잡한 차트는 `DS.Chart`(option 또는 build(base))로 같은 테마를 쓴다.
- **반응형**: 판 폭을 재서 다시 그린다. 폭 480 미만이면 범례가 한 줄 넘길 때 좌우로 넘기는 형태(scroll), 축 글자 11 · 겹치는 글자 자동 숨김, 막대 최대 폭 16. 선 · 혼합 · 히트맵도 같은 규칙.
