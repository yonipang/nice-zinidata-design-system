# SquareButton

정사각 버튼 — 아이콘 위, 짧은 레이블 아래. 툴바 · 지도 위 도구 · 아이콘 레일.

**Props** — `variant` solid|outline(기본)|base · `color` neutral|primary · `size` md 32|lg 36|xl 40|2xl 48|3xl 56 · `icon` · `loading` · `state` · `children`(레이블).
- 레이블 글자: md · lg `component-icon-label-sm`(9), xl `component-icon-label`(10), 2xl · 3xl `text-2xs`(12). 아이콘 12 · 14 · 16 · 18 · 20.
- **최대 글자 수**: md · lg · xl 2자, 2xl 3자, 3xl 4자(한글). 넘으면 더 큰 Size → 아이콘 + 글자 버튼(Button `iconLeft`). 줄이거나 자르지 않는다. 묶음은 하나라도 넘으면 묶음 전체를 바꾼다.
- 색은 Button과 같은 component 토큰(`button-solid/outline/base-*`).
