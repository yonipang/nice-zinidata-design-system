# TextButton

배경 판이 없는 글자형 버튼 — 문장 안 링크, 더보기, 도움말. 모서리 0, hover에 밑줄.

**Props** — `color` neutral|neutral-subtle|primary|inverse · `size` 3xs 16(text-xs)|2xs 20(text-sm, 기본)|xs 24(text-md) · `iconLeft` · `iconRight` · `underline` · `state` hover|focus|disabled.
- 글자는 medium. 아이콘 3xs 14 · 2xs/xs 16, 색은 neutral `icon-body-main` · neutral-subtle `icon-body-subtle` · primary `icon-primary-main` · inverse `icon-inverse-body-subtle`.
- 판이 있는 버튼이 필요하면 Button ghost를 쓴다.
- hover: 모든 색에서 **밑줄**이 생긴다. primary · neutral · inverse는 색이 그대로(밑줄만), neutral-subtle(muted)만 `text-body-main`으로 한 단계 진해진다.
- 로그아웃처럼 덜 강조할 보조 동작은 neutral-subtle(muted).
