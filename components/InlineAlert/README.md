# InlineAlert

영역 안에 남아 있어야 하는 안내 · 경고.

**Props** — `type` basic|information|warning|negative|positive · `variant` soft|line · `title` · `children`(설명) · `action`(버튼) · `onClose`.
- soft 배경 `surface-{informative|warning|negative|positive}-main`(basic `surface-subtler`), line은 `surface-main` + `border-{상태}-main`. 모서리 `rounded-surface-sm` 16 · 여백 16.
- 상태어(안내 · 주의 · 오류 · 완료)를 글자로 함께 쓴다 — 색만으로 구분하지 않는다.
- Alert와 Toast 기준은 `[미정]` — 임시: 화면에 남아야 하면 Inline Alert, 작업 결과 알림은 Toast.
