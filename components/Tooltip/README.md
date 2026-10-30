# Tooltip

용어 · 숫자의 짧은 설명. 기본 트리거는 16px `question` 아이콘(`icon-body-subtle`), hover · focus에서 말풍선이 열린다.

**Props** — `content` · `title` · `position` top|bottom|left|right · `open`(고정 표시) · `label`(트리거 이름) · `children`(아이콘 대신 다른 트리거).
- 말풍선은 화면 맨 위(body)에 띄워서, 메뉴 · 카드 · 모달처럼 모서리가 잘리는 판 안에 있어도 **판 밖으로 나와 보인다**(잘리지 않는다). 스크롤 · 창 크기 변경에도 아이콘을 따라간다.
- 말풍선: 흰 판 `bg-main` + `border-neutral-main` + `elevation-3`, 모서리 `rounded-surface-sm` 16, 안쪽 여백 16, 최대 폭 240, 꼬리 있음.
- 제목 `text-xs-medium` + `text-heading-main`, 본문 `text-xs-normal` + `text-body-main`. 두 문장 이내로.
- 버튼 · 링크 같은 조작 요소를 넣지 않는다(필요하면 Pop Confirm · 모달). 모바일은 탭해서 연다.

## 피그마와 맞춘 값 (Border Tooltip · Solid Tooltip)
- `variant` border(기본: `surface-main` + `border-neutral-main`) | solid(`surface-inverse-main` + 흰 글자). 여백 16 = 모서리 `rounded-3xl` 16, `elevation-3`, 꼬리 12×6, 제목 semibold · 본문(사이 4), 닫기 Icon Button 3xs.
- **TooltipBubble** — 말풍선 판만 따로. 마우스를 올리지 않아도 늘 떠 있어야 하는 안내(코치마크 · 새 기능 안내)에 쓴다. `position` top|bottom|left|right|none(꼬리 없음) · `title` · `onClose`.
