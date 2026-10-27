# GlobalNav

페이지 맨 위 전역 내비게이션(GNB). 높이 56, 배경 `surface-main`, 아래 1px `divider-neutral-subtle`, 좌우 여백 `spacing-12` 48.

**Props** — `items` [{value,label,hasMenu}] · `value` · `onChange` · `logo`(왼쪽 슬롯, 회사 로고 그대로) · `right`(오른쪽 슬롯: 버튼 · 프로필) · `tabStyle` ghost|underline · `align` left|center · `width` fill|default(1180)|wide(1440).
- `width`는 아래 콘텐츠 폭과 같게 맞춘다(콘텐츠 1180이면 default, 1440이면 wide). 지도처럼 화면 전체를 쓰면 fill.
- 메뉴 글자는 `component-gnb-menu`(17 · medium) 전용 스타일. 선택 메뉴는 `text-heading-main` + semibold, 그 외 `text-body-main`.
- ghost는 hover에 `state-layers-on-neutral-hover` 판, underline은 선택 메뉴 아래 2px `fill-neutral-strong` 선.
- 하위 메뉴가 있으면 `hasMenu`(chevron-down). 드롭다운 판은 Select 목록과 같은 모양(`surface-main` + `elevation-3`).
