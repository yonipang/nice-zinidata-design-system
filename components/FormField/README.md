# FormField

레이블 → 입력 → 도움말 · 오류 묶음(피그마 Form Field · Form Field (Slot)). 입력 자리는 `children`(슬롯)으로 Input · Select · DatePicker 등 무엇이든 넣는다(여러 개면 가로로 8 간격).

**Props** — `label` · `required` · `optional` · `tooltip` · `helper` · `error` · `size` md|xl(기본)|2xl · `align` vertical(기본)|horizontal · `labelWidth`(가로, 기본 120) · `action`(입력 옆 버튼 — Neutral base, 입력창과 같은 Size) · `htmlFor`.
- 레이블은 **InputLabel**: md · xl은 xs(`text-sm-medium` 14), 2xl은 sm(`text-md-medium` 15), 색 `text-body-main`. 필수 `*` `text-primary-main`, 선택 `(optional)` `text-body-subtle`, 도움말 아이콘(Tooltip).
- 세로: 레이블 · 입력 · 도움말 사이 8. 가로: 레이블 칸 고정 폭 + 입력, 레이블은 입력창 높이 가운데.
- 도움말 `text-xs-normal` + `text-body-subtle`, 오류는 같은 자리에 `text-negative-main`(입력창은 `negative`).
- 한 폼은 같은 Size · 같은 스타일.
