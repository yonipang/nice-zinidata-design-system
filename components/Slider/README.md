# Slider · SliderField

값 하나 또는 범위를 끌어서 고르는 막대(피그마 SliderBar · SliderRange · SliderPoints · Slider/Circle · Slider/Range).

**Slider Props** — `value` · `defaultValue` · `range`(범위: [시작, 끝]) · `min` · `max` · `step` · `points`(눈금 수 또는 [이름]) · `disabled` · `showValue` focus(기본)|always|none · `format(v)` · `label`(화면 읽기 이름) · `onChange`.
- 막대 4 · `surface-subtler` · 끝 둥글게, 채움 `fill-primary-main`.
- 손잡이 20: 흰 원(`icon-on-primary`) + `border-neutral-strong` + `elevation-2`. 잡거나 초점이면 `border-neutral-stronger`.
- 값 상자: 손잡이 위 6, `surface-main` + `border-neutral-strong` + `rounded-md`, 여백 2/4, `text-xs` `text-body-subtle`. 기본은 잡거나 초점일 때만.
- 눈금: 선 1×4 `divider-neutral-stronger` + 이름 `text-xs` `text-body-subtle`(사이 4), 막대 아래 8.
- 범위: 두 손잡이가 서로를 넘지 않음. 막대를 누르면 가까운 손잡이가 그 자리로.
- 비활성: 채움 `fill-disabled`, 손잡이 테두리 `border-neutral-main`.
- 키보드: ← → ↑ ↓ 한 단계, Page Up/Down 10%, Home/End 처음 · 끝. `role="slider"` · `aria-valuenow` · `aria-valuetext`(format 적용).

**SliderField** — 이름(Input Label sm) + 설명 `text-sm` `text-body-subtle` · 오른쪽 현재 값 `text-base` medium `text-primary-main`(범위는 "시작 - 끝"), 아래 Slider(사이 16). 상권 반경 · 매출 범위 필터에.
