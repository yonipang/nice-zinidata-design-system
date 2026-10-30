# IconButton

아이콘만 있는 버튼 — 표 안 작업, 툴바, 입력창 지우기, 헤더의 뒤로 · 메뉴.

**Props** — `icon` · `label`(필수, 스크린리더용) · `color` neutral|neutral-subtle|primary|negative|inverse · `size` 3xs 16 · 2xs 20 · xs 24 · sm 28 · md 32 · lg 36 · xl 40 · 2xl 48 · 3xl 56 · `loading` · `state`.
- 아이콘 크기(피그마 실측): 3xs 16 · 2xs/xs/sm 18 · md 20 · lg 24 · xl 28 · 2xl 32 · 3xl 40.
- 모서리는 높이 규칙: 32 이하 `rounded-control-sm`, 36 · 40 `control-md`, 48 · 56 `control-lg`.
- 색은 주변 텍스트 위계를 따른다: 입력창 · 검색창 안 지우기(×)는 `neutral-subtle`, 뒤로 · 메뉴 등 주요 동작은 `neutral`. 아이콘 색 neutral `icon-body-main` · neutral-subtle `icon-body-subtle` · primary `icon-primary-main` · negative `icon-negative-main` · inverse `icon-inverse-heading-main`.
- 배경 판 없이 state layer로만 hover를 보인다. disabled는 배경 없이 `icon-disabled`.
- 인스턴스에서 아이콘 색을 덮어쓰지 않는다. 글자형 버튼은 TextButton.
