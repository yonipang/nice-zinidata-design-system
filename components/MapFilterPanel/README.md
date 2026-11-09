# MapFilterPanel · MapFilterOption

지도 필터 선택 판(피그마 Component v2.3 Map Item 페이지 `Map Filter Panel` · `Map Filter Sub Panel` · `_Base/Filter Option`). MapLayout의 필터를 누르면 열리는 판과 같은 모양이고, 따로 놓아 쓸 때 이 컴포넌트를 쓴다.

**MapFilterPanel** — `title`(없으면 하위 판 모양) · `options`[문자열 | {label, children}] · `value` · `defaultValue` · `onChange`. 실제로 동작: 줄 hover, ›가 있는 줄에 마우스를 올리거나 누르면 오른쪽(사이 4)에 그 줄 높이로 하위 판, 하위를 고르면 값 "상위 · 하위", 바깥 누르기 · Esc · 판에서 마우스가 나가면 하위 판 닫힘.
**MapFilterOption** — `label` · `state` default|hover|selected · `submenu` · `onClick`.
- 판: 폭 220 · 여백 20/8/12 · `surface-main` · `border-neutral-main` · `rounded-3xl`(20) · `elevation-3`. 제목 `text-base` semibold `text-heading-main`(아래 12).
- 하위 판: 폭 180 · 여백 8, 상위 줄 높이에 맞춰 오른쪽(사이 4)에 열림.
- 항목 줄: 높이 40 · 좌우 12 · `rounded-md`, hover `state-layers-on-neutral-hover`, 고른 항목 `text-primary-main` semibold. 하위 항목이 있으면 오른쪽 › 16(`icon-body-subtle`, 고르면 `icon-primary-main`) — ›는 '펼칠 수 있음' 표시.
- **움직임**: 하위 판은 마우스가 다른 줄을 스쳐 지나가도 0.14초 기다렸다 바뀌고(상위 줄 → 하위 판 대각선 이동), 두 판 사이 4px 틈은 투명한 다리로 이어져 지나가도 닫히지 않는다. 판은 0.12초 동안 살짝 나타난다(동작 줄이기면 끔). MapLayout의 필터 판도 같다.
