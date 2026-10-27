# IconButton

아이콘만 있는 버튼(표 안 작업, 툴바, 입력창 지우기)과 문장 안 링크형 Text Button.

**IconButton props** — `icon` · `label`(필수, 스크린리더용) · `color` neutral|neutral-subtle|primary|negative|inverse · `size` 3xs 16 · 2xs 20 · xs 24 · sm 28 · md 32 · lg 36 · xl 40 · 2xl 48 · `loading` · `state`.
- 색은 주변 텍스트 위계를 따른다: 입력창 · 검색창 안 지우기(×)는 `neutral-subtle`, 뒤로 · 메뉴 등 주요 동작은 `neutral`.
- 배경 판 없이 state layer로만 hover를 보인다. disabled는 배경 없이 `icon-disabled`.
- 인스턴스에서 아이콘 색을 덮어쓰지 않는다.

**TextButton props** (`DS.TextButton`) — `color` neutral|neutral-subtle|primary|inverse · `size` xs|sm · `underline` · `iconRight`. 판이 없어 모서리 0. hover는 밑줄 + 글자 한 단계 진하게(primary → `text-primary-strong`).
