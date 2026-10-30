# GlobalNav

페이지 맨 위 전역 내비게이션(GNB). 높이 56, 배경 `surface-main`, 아래 1px `divider-neutral-subtle`, 좌우 여백 `spacing-12` 48.

**Props** — `items` [{value,label,hasMenu}] · `value` · `onChange` · `logo`(왼쪽 슬롯, 회사 로고 그대로) · `right`(오른쪽 슬롯: 버튼 · 프로필) · `tabStyle` ghost|underline · `align` left|center · `width` fill|default(1180)|wide(1440).
- `width`는 아래 콘텐츠 폭과 같게 맞춘다(콘텐츠 1180이면 default, 1440이면 wide). 지도처럼 화면 전체를 쓰면 fill.
- 메뉴 글자는 `component-gnb-menu`(17 · medium) 전용 스타일. 선택 메뉴는 `text-heading-main` + semibold, 그 외 `text-body-main`.
- ghost는 hover에 `state-layers-on-neutral-hover` 판, underline은 선택 메뉴 아래 2px `fill-neutral-strong` 선.
- 하위 메뉴가 있으면 `hasMenu`(chevron-down). 드롭다운 판은 Select 목록과 같은 모양(`surface-main` + `elevation-3`).

## 2depth 메뉴

`items[].menu`: [{heading, items:[{value,label,description,disabled}]}] (묶음 여러 개면 가로로 나란히). 하위 메뉴가 있는 메뉴는 오른쪽에 chevron-down.
- **열기**: 메뉴에 마우스를 올리면 열리고, 벗어나면 닫힘. **누르면 고정**(마우스를 떼도 유지), 다시 누르거나 **바깥 클릭 · Esc**로 닫힘. 하위 항목을 고르면 `onChange(하위 값)` 후 닫힘.
- 하위 항목이 현재 페이지면 상위 메뉴도 선택 표시, 하위 항목 이름은 `text-primary-main` semibold.
- 판(피그마 Navigation/SubMenu Group): `surface-main` + `border-neutral-strong` + `rounded-surface-sm` + `elevation-3`, 여백 8, 묶음 사이 24, 묶음 폭 180 이상. 묶음 제목 `text-xs` `text-body-subtle`. 항목: 이름 `text-base` medium heading + 설명 `text-xs` body-subtle, hover state layer, 모서리 `rounded-control-md`.

## 내 정보 메뉴 — UserMenu

오른쪽 사용자 아이콘(또는 ReportNav의 프로필 버튼)을 누르면 **떠 있는 메뉴**가 열린다: 맨 위 이름(Avatar 40 + 이름 · 이메일) → 구분선 → 마이페이지 · 설정 · (구분선) · 로그아웃(MenuList lg). 바깥 클릭 · Esc · 항목 선택으로 닫힘. 판은 오른쪽 맞춤 · 폭 220.
`DS.UserMenu` — `trigger` icon|profile · `user`{name,sub} · `items` · `onSelect(value)`.
