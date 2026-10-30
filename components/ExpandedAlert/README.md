# ExpandedAlert

설명이 여러 줄이거나 목록 · 버튼이 함께 있는 **안내 블록**(피그마 Expanded Alert).

**Props** — `type` info|highlight|warning|negative|positive · `variant` soft|line · `title` · `children`(설명) · `icon` · `slot`(목록 등) · `actions`(버튼들).
- 여백 20 · 묶음 사이 16 · `rounded-surface-sm`. 제목 줄: 아이콘 20 + `text-sm` **medium**(사이 6), 설명 `text-sm` normal(제목과 8). 버튼은 오른쪽 정렬, 사이 8(닫기 = Neutral ghost, 주 동작 = Neutral base).
- **soft**: info = `surface-subtler` + `text-heading-main` / highlight · warning · negative · positive = `surface-*-main` + `text-*-main`(아이콘 `icon-*-main`).
- **line**: `surface-main` + `border-neutral-main`, 글자는 soft와 같은 색.
