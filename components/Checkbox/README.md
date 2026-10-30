# Checkbox

여러 개 선택은 Checkbox, 하나만 선택은 Radio(`DS.Radio`, 같은 props). **Radio는 눌러서 끌 수 없다** — 켜진 Radio를 다시 눌러도 그대로이고, 같은 묶음의 다른 항목을 골라야 바뀐다.

**Props** — `checked` · `onChange(next)` · `label` · `description` · `variant` primary(기본)|secondary|ghost(Radio는 primary|secondary) · `size` sm 20|xs 16 · `negative` · `disabled` · `indeterminate`(Checkbox) · `state`.
- 스타일: primary = 파란 상자 + 흰 체크, secondary = 흰 상자(`border-neutral-strong`) + 파란 체크, ghost = 상자 없이 파란 체크(목록 · 표 안).
- 꺼진 상자 테두리 `border-neutral-strong`, 모서리 `rounded-xs`.
- 레이블: 컨트롤과 **12** 간격, 레이블 medium `text-heading-main` — sm 16/24 · xs 14/20, 설명 `text-sm-normal` `text-body-subtle`(사이 2), disabled는 둘 다 `text-disabled`.
- 켜짐 `control-on`, 박스 `control-bg`, 오류 켜짐 `control-on-negative`. hover는 박스 배경 기준 state layer(꺼짐 `on-neutral`, 켜짐 `on-brand`, 오류 `on-negative`).
- disabled는 `fill-disabled` · `border-disabled` · `icon-disabled`.
- 목록 안에서는 Checkbox · Radio Menu List를 쓴다.
