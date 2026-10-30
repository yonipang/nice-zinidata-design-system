# Modal · IconModal

**Modal**(피그마 Dialog/Contents Modal) — 입력 · 선택 등 **내용을 담는** 대화상자.
**Props** — `title` · `titleSize` base|xl · `description` · `tooltip` · `leftItem` · `rightItem` · `children`(콘텐츠) · `actions`(직접 버튼, null이면 버튼 없음) · `buttonWidth` fit|fill · `onCancel` · `onConfirm` · `cancelLabel` · `confirmLabel` · `onClose` · `width`(기본 400) · `inline` · `bare`.
- 판은 ConfirmModal과 같다(여백 24 = 모서리 24). 제목 줄 높이 36(닫기 Icon Button lg), 제목 **bold**(base 16 · xl 20), 설명 `text-sm` `text-body-subtle`, 제목 묶음 ↔ 콘텐츠 8, 버튼 lg(위 20).

**IconModal**(피그마 Dialog/Icon Modal) — 완료 · 실패 같은 **결과 알림**. `icon` success|info|warning|negative · `title` · `children` · `confirmLabel` · `onConfirm` · `onClose` · `align`(기본 가운데) · `buttonWidth`(기본 fill).
- 아이콘 원 48(`surface-*-main` + `icon-*-main`, 아이콘 24) → 제목 `text-base` bold → 본문 `text-md` medium(사이 16 · 8). 버튼 Neutral soft lg 꽉 채움.
