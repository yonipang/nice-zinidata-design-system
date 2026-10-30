# Password

비밀번호 입력. Input과 같은 판 · 상태 규칙에 오른쪽 **보기 버튼**(eye, `icon-body-subtle` → 켜면 `icon-body-main`)과 **조건 카드**를 더한다.

**Props** — `value` · `onChange` · `placeholder` · `variant` line|soft · `size` md|xl|2xl · `state` · `negative` · `rules`[{label, ok}] · `rulesTitle` · `showRules`(기본: focus일 때만).
- 조건 카드: **떠 있는 판**(아래 내용을 밀지 않음), 입력창 아래 4(`spacing-1`), 입력창과 같은 폭, `surface-main` + `border-neutral-main` + **`elevation-3`**(덮는 레이어), 모서리 `rounded-xl`, 여백 12, 줄 사이 10. 제목 `text-xs-medium` + `text-heading-main`, 구분선, 조건 줄 `text-xs-normal` — 만족 `text-positive-main` + check, 미충족 `text-negative-main` + close.
- read-only를 제공하지 않는다.
