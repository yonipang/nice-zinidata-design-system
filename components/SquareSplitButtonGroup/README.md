# SquareSplitButtonGroup

정사각 아이콘 버튼을 붙인 묶음 — 지도 위 도구(그리기 · 측정), 툴바.

**Props** — `items`[{value,icon,label,disabled}] · `value`(선택) · `onChange` · `toggle`(기본 true — 선택된 도구를 다시 누르면 꺼짐, `onChange(null)`) · `size` sm 28|md 32|lg 36|xl 40|2xl 48 · `align` vertical(기본)|horizontal · `showLabel`.
- 바깥 `bg-main` + `border-neutral-strong`, 모서리 **모든 크기 `rounded-xl` 고정**(높이 규칙의 예외, 확정). 항목 사이 `divider-neutral-subtle`.
- 아이콘 16 · 18 · 20 · 20 · 24(레이블 있으면 14 · 14 · 16 · 18 · 20), 색 `icon-heading-main`, 선택 `icon-primary-main`.
- 레이블: sm · md `component-icon-label-sm`(9), lg · xl `component-icon-label`(10), 2xl `text-2xs`. 최대 글자 수는 Square Button과 같다(넘으면 묶음 전체를 바꾼다).
- 지도 위에 띄울 때는 `elevation-2`를 바깥 판에 준다.
