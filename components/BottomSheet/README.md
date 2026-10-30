# BottomSheet

모바일에서 화면 아래에서 올라오는 판(피그마 Dialog/Bottom Sheet). 정렬 · 필터 · 간단한 확인에 쓴다.

**Props** — `size` sm(제목 base 16)|md(제목 lg 18) · `title` · `description` · `tooltip` · `children` · `actions`(직접 버튼) · `onCancel` · `onConfirm` · `confirmLabel` · `onClose` · `align` · `inline`.
- 화면 아래에 붙고 **위 모서리만** `rounded-surface-lg` 24, 여백 24, 맨 위 손잡이(36×4, `fill-neutral-subtle`). 뒤는 `surface-scrim`, 바깥을 누르면 닫힘.
- 제목 **bold**, 설명 `text-sm` `text-body-subtle`(사이 2), 버튼은 **꽉 채움 xl**(위 20). 모바일 규칙대로 hover 없음.
