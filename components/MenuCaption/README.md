# MenuCaption

메뉴 · 목록 판 안의 제목(피그마 Item/Menu Caption).

**Props** — `type` heading(기본)|caption · `size` sm~2xl(메뉴와 같은 Size) · `description` · `children`(제목).
- heading: 작은 회색 제목(`text-xs` `text-body-subtle`). caption: `surface-subtler` 띠 + 제목 `text-sm-medium` + 설명 `text-sm`.
- **제목 글자 = 메뉴 항목 내용 시작선**(sm · md · lg 8, xl 10, 2xl 12) — 체크 · 라디오 · 아이콘 왼쪽 끝과 맞는다. MenuList의 `{heading}` 항목도 이걸로 그린다.
