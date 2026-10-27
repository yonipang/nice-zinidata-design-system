# Input

한 줄 입력. 스타일은 입력창 바로 뒤의 배경으로, 크기는 놓이는 곳으로 고른다.

**Props** — `variant` line|soft|inverse · `size` md 32|xl 40(기본)|2xl 48 · `negative` · `state` default|hover|focus|read-only|disabled · `iconLeft` `iconRight` · `suffix`(단위) · 나머지는 `<input>` 속성 그대로.

| 스타일 | 쓰는 곳 |
|---|---|
| `line` | 입력 폼(카드 · 모달 · 등록/수정), 회색 바탕(`bg-subtler` 등) 위의 모든 입력 · 검색 |
| `soft` | 흰 바탕(`surface-main` · `bg-main`) 위 검색창 · 필터 |
| `inverse` | 어두운 바탕(`bg-inverse-main` · `surface-inverse-main`) 위 |

- 크기: 페이지 · 모달 폼 xl, 필터 바 · 표 위 검색 md, 로그인 · 랜딩 2xl(모바일도 2xl — iOS 확대 방지). 한 폼은 같은 스타일 · 같은 Size.
- 상태 우선순위: disabled > read-only > negative > focus > hover > default. line은 테두리로(hover `input-border-hover` 2px, focus `input-border-focus` 2px, 바깥 링 없음), soft는 state layer로 표현한다.
- 수정할 수 없는 값(회원 아이디 · 주문번호 · 자동 계산 값)은 disabled가 아니라 read-only.
- 아이콘은 값이 없을 때 `icon-body-subtle`, focus · 값 있음일 때 입력 텍스트와 같은 색. 입력창에 그림자를 넣지 않는다.
- 레이블 · 도움말이 있으면 FormField로 감싼다.
