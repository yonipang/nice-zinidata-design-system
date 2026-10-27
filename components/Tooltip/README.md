# Tooltip

용어 · 숫자의 짧은 설명. 기본 트리거는 16px `question` 아이콘(`icon-body-subtle`), hover · focus에서 말풍선이 열린다.

**Props** — `content` · `title` · `position` top|bottom|left|right · `open`(고정 표시) · `label`(트리거 이름) · `children`(아이콘 대신 다른 트리거).
- 말풍선: 흰 판 `bg-main` + `border-neutral-main` + `elevation-3`, 모서리 `rounded-surface-sm` 16, 안쪽 여백 16, 최대 폭 240, 꼬리 있음.
- 제목 `text-xs-medium` + `text-heading-main`, 본문 `text-xs-normal` + `text-body-main`. 두 문장 이내로.
- 버튼 · 링크 같은 조작 요소를 넣지 않는다(필요하면 Pop Confirm · 모달). 모바일은 탭해서 연다.
