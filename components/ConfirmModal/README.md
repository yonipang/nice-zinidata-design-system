# ConfirmModal

확인 · 삭제 확인 모달.

**Props** — `type` basic|negative · `title` · `children`(설명) · `confirmLabel` · `cancelLabel` · `onConfirm` · `onCancel` · `onClose` · `buttonWidth` fit|fill · `secondaryVariant`(프로젝트의 2순위 Style, 기본 soft) · `inline`(문서용, 고정 위치 없이).
- 판 `surface-main` · 모서리 `rounded-surface-lg` 24 · 여백 24 · `elevation-4`, 뒤 덮개 `surface-scrim`. 폭 400(모바일은 화면 − 32, 최대 400).
- 하단 버튼 lg, 주요 행동이 가장 오른쪽. 삭제 확인은 `type="negative"` + Negative solid.
- 모바일 · 내용이 많으면 Bottom Sheet(모서리 `rounded-surface-md` 20 · 여백 20).
