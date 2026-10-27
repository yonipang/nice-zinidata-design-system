# Select

목록에서 하나 고르기. 트리거와(열렸을 때) 목록 판을 그린다.

**Props** — `options` [{value,label,disabled}] 또는 문자열 배열 · `value` · `placeholder` · `variant` line|soft|ghost · `size` md|xl|2xl · `negative` · `state` · `open` · `onToggle` · `onChange(value)` · `width`.
- ghost는 표 · 툴바 안 선택(정렬, 상태 변경)에만. 검색창과 같은 줄의 Select는 검색창과 같은 스타일.
- 목록 판은 `surface-main` + `elevation-3`, 모서리 `rounded-surface-xs`, 안쪽 항목은 중첩 모서리(12 − 4 = `rounded-md`). 선택 항목 `text-primary-main` + 체크.
- read-only를 제공하지 않는다.
