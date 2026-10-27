# SearchField

검색어 입력창. 왼쪽 `search` 아이콘, 값이 있으면 지우기 버튼. Input과 같은 판 · 상태 규칙을 쓴다.

**Props** — `value` · `placeholder`(기본 "검색어를 입력해주세요") · `onChange` · `onClear` · `onSearch(q)`(Enter) · `variant` line|soft|inverse · `size` md 32|lg 36|xl 40|2xl 48 · `button`(true 또는 버튼 글자) · `width`.
- 스타일은 뒤 배경으로: 흰 바탕 화면의 검색창 soft, 폼 · 회색 바탕 line, 어두운 바탕 inverse.
- 크기: 표 · 필터 줄 md, 일반 lg, 큰 검색 xl · 2xl. 모서리는 높이 규칙(32 → `rounded-control-sm`, 36 · 40 → `control-md`, 48 → `control-lg`).
- 옆에 검색 버튼을 두면 **입력창과 같은 높이**(lg 36 → 버튼 md). 버튼은 Neutral base.
- 같은 줄의 Select · DatePicker는 검색창과 같은 스타일 · 높이.
