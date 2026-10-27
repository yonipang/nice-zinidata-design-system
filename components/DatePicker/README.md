# DatePicker

날짜 버튼 + 달력 판. 버튼은 Neutral base 버튼과 같은 판(`button-base-neutral-bg` · `-border`)에 state layer, 왼쪽 `calendar` 아이콘.

**Props** — `value`(Date) · `placeholder` · `suffix`("부터" · "까지") · `size` sm 28|md 32|lg 36|xl 40|2xl 48 · `state` · `open` · `onToggle` · `onChange(date)` · `month` · `onMonth` · `today` · `range`[from,to]. 달력만 쓸 때는 `Calendar`.
- 기간은 버튼 두 개 + 가운데 "~"(`text-body-subtle`), 각 버튼 suffix "부터" · "까지".
- 크기는 같은 줄의 입력창 · 버튼과 맞춘다(필터 줄 md, 일반 xl, 모바일 2xl).
- 달력 판: `surface-main` + `border-neutral-subtle` + `elevation-3`, 모서리 `rounded-surface-sm`. 날짜 칸 32, hover `state-layers-on-neutral-hover`, 선택 `fill-primary-main` + `text-on-primary`, 기간 사이 `fill-primary-subtlest`, 오늘은 1px 테두리, 일요일 `text-negative-main`.
- 날짜 글자는 tabular-nums. 표시 형식 "2026년 2월 3일".
