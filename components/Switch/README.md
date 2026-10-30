# Switch

즉시 켜고 끄는 설정.

**Props** — `checked` · `onChange(next)` · `label` · `description` · `variant` primary|green · `size` md 56×32|sm 48×28|xs 42×24|2xs 36×20|3xs 28×16 · `align` left(기본)|right(레이블 왼쪽 · 스위치 오른쪽 끝, 설정 목록) · `disabled` · `state`.
- 레이블 · 설명은 Checkbox와 같다(간격 12, 레이블 medium heading, 설명 `text-sm` body-subtle).
- 꺼짐 트랙 `control-track-off`, 켜짐 `control-on`(green `control-on-green`), 핸들 `control-handle` + `elevation-1`.
- disabled: 트랙 `fill-neutral-subtlest` + 핸들 `control-handle-disabled`, 그림자 없음 — 꺼진 스위치와 구분하기 위한 예외.
