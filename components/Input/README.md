# Input

한 줄 입력. 스타일은 입력창 바로 뒤의 배경으로, 크기는 놓이는 곳으로 고른다.

**Props** — `textButton` {label, onClick}(입력창 안 오른쪽 TextButton 2xs primary — 중복 확인 · 주소 찾기 등. **본인인증(인증번호 요청)은 이 방식이 아니라 PhoneVerification**) · `variant` line|soft|inverse · `size` md 32|xl 40(기본)|2xl 48 · `negative` · `state` default|hover|focus|read-only|disabled · `iconLeft` `iconRight` · `suffix`(단위) · 나머지는 `<input>` 속성 그대로.

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
- `shape` rounded(기본)|pill — **pill은 검색 · 필터 줄처럼 늘어선 조건에만**, 폼 안 입력창은 rounded. 피그마 Input에는 아직 Shape=pill이 없다(필요한 화면이 생기면 피그마에 추가). Password · DateInput · InputQuantity도 같은 `shape`를 받는다.
