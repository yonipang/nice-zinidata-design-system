# Checkbox

여러 개 선택은 Checkbox, 하나만 선택은 Radio(`DS.Radio`, 같은 props).

**Props** — `checked` · `onChange(next)` · `label` · `description` · `size` sm 20|xs 16 · `negative` · `disabled` · `indeterminate`(Checkbox) · `state`.
- 켜짐 `control-on`, 박스 `control-bg`, 오류 켜짐 `control-on-negative`. hover는 박스 배경 기준 state layer(꺼짐 `on-neutral`, 켜짐 `on-brand`, 오류 `on-negative`).
- disabled는 `fill-disabled` · `border-disabled` · `icon-disabled`.
- 목록 안에서는 Checkbox · Radio Menu List를 쓴다.
