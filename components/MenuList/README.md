# MenuList

메뉴 · 드롭다운 · 필터 판 안의 목록(피그마 Menu/Basic · Checkbox · Radio · Switch · Profile · Quantity Menu List). 판(surface-main · elevation-3 · rounded-surface-xs)은 쓰는 곳에서 그린다.

**Props** — `type` basic|checkbox|radio|switch|profile|quantity · `size` sm 28|md 32|**lg 36(기본)**|xl 40|2xl 48(profile 48 · quantity 52 고정) · `items`[{value,label,description,icon,rightIcon,badge,suffix,disabled,divider,heading,caption,avatar}] · `value`/`defaultValue`(basic · radio: 값, checkbox · switch: 값 배열, quantity: {값: 수}) · `onChange` · `onPick`.

- 항목: 여백 sm~lg 6/8 · xl 8/10 · 2xl 12, 모서리 `rounded-md`, 항목 사이 2. 글자 sm 13 · md 14 · lg · xl 15 · 2xl 16.
- 기본 `text-heading-main` normal → **선택 `text-primary-main` semibold, 설명도 `text-primary-main`(설명은 normal)**(아이콘 `icon-primary-main`). hover `state-layers-on-neutral-hover`, disabled는 레이블 · 설명 모두 `text-disabled`(켜진 체크박스는 회색 체크).
- 컨트롤(체크 · 라디오 · 아이콘)과 글자 사이 6 + 글자 안쪽 4, 컨트롤은 **레이블 첫 줄 높이 가운데**(설명이 있어도 위로 맞춤). 설명은 lg 이상 `text-sm`(14), sm · md `text-xs`(13).
- checkbox는 Checkbox primary, radio는 Radio **secondary**(흰 원 + 파란 점, 다시 눌러도 꺼지지 않음), switch는 오른쪽 Switch 2xs.
- 부가: 왼쪽 아이콘 · 오른쪽 아이콘 · 배지(CategoryBadge white + 테두리 `border-neutral-main`) · 숫자(suffix) · 설명(`text-xs` body-subtle) · 아래 구분선(`divider-neutral-main`) · 제목(`{heading}` → MenuCaption).
- profile: 아바타 24 + 이름 `text-md`. quantity: 이름 + Quantity sm(− 수 +), 줄 자체는 눌러도 선택되지 않음.
