# ToggleButton

누를 때마다 켜고 끄는 버튼 — 보기 전환 · 조건 켜기. 여러 개 중 하나만 고르는 전환은 Segment를 쓴다.

**Props** — `variant` outline|base · `color` neutral|primary · `size` sm|md|lg|xl|2xl · `active` · `iconLeft` · `iconRight` · `state` hover|focus|disabled · `onClick`.
- 꺼짐: outline은 `button-outline-*` 판, base는 `button-base-*` 판.
- 켜짐: **outline은 solid 판**(`button-solid-*-bg`, 흰 글자), **base는 판 그대로 + 진한 테두리**(neutral `border-neutral-accent` · primary `border-primary-subtle`, 글자 `text-primary-main`).
- 크기: sm 28 · md 32 · lg 36 · xl 40 · 2xl 48(다른 버튼과 같은 높이). 모서리는 높이 규칙(control-sm · md · lg).
- disabled: 꺼짐은 `border-disabled` + `text-disabled`, 켜짐은 `fill-disabled`.
