# Accordion

펼침 목록(피그마 Box Accordion · Text Accordion) — 자주 묻는 질문 · 설명 접기.

**Props** — `variant` box|text · `size` md|sm · `title` · `children`(내용) · `open` · `defaultOpen` · `onToggle`.
- **box**: 여백 20/16(sm 18/16), 모서리 `rounded-surface-sm` 16(= 좌우 여백), `surface-main`, hover state layer. 펼치면 판 `surface-subtler` + 제목 `text-heading-main`, 내용은 제목 아래 8.
- **text**: 판 없이 제목만. hover하면 제목 · 아이콘 `text-primary-main`.
- 제목 semibold `text-body-main`(md 15 · sm 14), 오른쪽 chevron(20 · sm 16) 펼치면 위로. 내용 `text-sm` `text-body-main`.
- 키보드: 제목 버튼 Enter · Space로 열고 닫음, `aria-expanded` · `aria-controls`.
- **애니메이션**: 열고 닫을 때 높이가 0 ↔ 내용 높이로 0.24s(감속 곡선) 부드럽게 바뀌고, 내용은 살짝 아래로 내려오며 나타남. chevron 회전 · box 판 색도 같은 시간. 동작 줄이기 설정이면 모두 끔. 닫힌 내용은 `inert`로 초점 · 화면 읽기에서 빠짐.
- **열려 있을 때는 판 전체(내용 포함)를 눌러도 닫힘** — 커서 · hover도 판 전체에(box: 판 전체 state layer, text: 제목 · 아이콘 primary). 내용 안의 링크 · 버튼 · 입력을 누르거나 글을 드래그해 고른 경우는 닫지 않음. 키보드는 제목 버튼으로 열고 닫음.
