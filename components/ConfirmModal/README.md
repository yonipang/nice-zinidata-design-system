# ConfirmModal · PopConfirm

**ConfirmModal**(피그마 Dialog/Confirm Modal) — 한 번 더 확인받는 대화상자.
**Props** — `type` basic|negative · `title` · `children`(본문) · `align` left|center · `buttonWidth` fit|fill · `cancelLabel` · `confirmLabel` · `onCancel` · `onConfirm` · `onClose`(닫기 Icon Button lg) · `inline`(문서 안에 그대로) · `bare`(scrim 없이 판만).
- 판: 폭 320 · `surface-main` · `border-neutral-strong` · `rounded-surface-lg` 24 · **여백 24(= 모서리)** · `elevation-4`, 뒤는 `surface-scrim`(바깥 누르면 닫힘).
- 제목 `text-base` **bold** `text-heading-main`, 본문 `text-base` medium `text-body-main`(사이 8). 버튼 xl(위 20): 취소 Neutral soft + 확인 Primary solid / negative는 Negative solid.

**PopConfirm**(피그마 Dialog/Pop Confirm) — 버튼 옆에 뜨는 작은 확인. 폭 248 · **여백 14 = 모서리 `rounded-2xl` 14** · `elevation-4`, 제목 `text-sm` bold → 본문 `text-sm`(사이 4) → 버튼(위 12), 버튼 md(basic: 취소 Primary ghost + 확인 Primary solid / negative: Neutral soft + Negative solid).
