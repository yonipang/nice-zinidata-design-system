# TextArea

여러 줄 입력. Input과 같은 판 · 상태 규칙, 여백 12, 모서리 `rounded-control-md`, 글자 `text-md-normal`. Shape는 항상 rounded.

**Props** — `value` · `onChange` · `placeholder` · `variant` line|soft · `state` hover|focus|disabled|read-only · `negative` · `maxLength`(글자 수 `0/200` 표시) · `helper` · `actions`(아래 버튼 영역: 주요 행동 Button md, 오른쪽 정렬, 버튼이 여럿이면 사이 12) · `rows`.
- 글자 수 표시는 TextArea에만. 도움말 · 글자 수는 `text-xs` + `text-body-subtle`(오류면 도움말 `text-negative-main`).
- read-only는 값이 있을 때만.
- 아래 버튼 영역에 **"지우기"처럼 입력한 내용을 한 번에 없애는 버튼은 두지 않는다** — 실수로 누르기 쉽고 되돌릴 수 없다.
- 버튼 영역은 **오른쪽 정렬 Primary 버튼 하나**(저장 · 등록 등). 피그마 Text Area의 Button Area에서도 Text Button을 없애고 Primary Button만 남겼다(Text Button 없이).
