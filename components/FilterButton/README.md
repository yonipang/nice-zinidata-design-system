# FilterButton

필터 조건을 여는 버튼. 조건이 골라지면 active로 값을 보여준다.

**Props** — `variant` soft(기본)|neutral|dashed · `size` sm|md|lg|xl|2xl · `active` · `label`(기본 "필터") · `value` · `iconLeft`(기본 filter-3) · `iconRight`(기본 chevron-down) · `state`.
- soft: 꺼짐 `button-soft-neutral-bg` / 켜짐 `button-soft-primary-bg` + "이름 ・ 값" 글자 `text-primary-main`, 아이콘 `icon-primary-subtle`.
- neutral · dashed: 테두리 `border-neutral-strong`(dashed는 점선, 켜지면 실선 + 흰 판). 켜지면 왼쪽 아이콘이 **지우기(close)**, 이름 | 값(값은 `text-primary-main`).
- 모서리는 높이 규칙: sm · md `control-sm`, lg · xl `control-md`, 2xl `control-lg`.
- 스타일은 같은 줄의 검색창 · Select와 맞춘다(흰 바탕 soft, 회색 바탕 neutral).

## FilterMenu — 필터 목록

FilterButton을 누르면 아래에 여는 목록 판. 피그마 Component v2.3 · Filter 페이지의 **Filter Menu**와 같은 구성이다.

**Props** — `sections` [{title, multiple(기본 true → 체크박스, false → 라디오), options}] · `value` {섹션 번호: [고른 값]} · `onChange` · `title`(기본 "필터") · `tooltip` · `showTitle`(기본 true) · `showFooter`(기본 true) · `onClose` · `onApply` · `resetLabel`(기본 "초기화") · `applyLabel`(기본 "적용").
- 판: 폭 240, `surface-main` + `border-neutral-subtle` + `elevation-3`, 모서리 `rounded-surface-sm`(16). 목록 영역은 위아래 12, 섹션 사이 12.
- 제목줄(showTitle): 제목 `text-base-bold` + 도움말(Tooltip, `tooltip`을 줄 때만) + 오른쪽 닫기(IconButton sm). 여백 위 16 · 오른쪽 12 · 아래 0 · 왼쪽 16.
- 섹션: 좌우 8 안에 Menu Caption(md, `text-xs-normal` · `text-body-subtle`) + Checkbox / Radio Menu List(md, 높이 32). 제목 글자와 체크 · 라디오가 같은 시작선. 섹션 사이 `divider-neutral-subtle` 1px, 간격 12.
- 하단(showFooter): 위 구분선 + Menu Button Set — 초기화(Primary base) · 적용(Primary solid), 양 끝 배치.
- 열고 닫는 세부 동작(바깥 클릭 닫기 등)은 동작 검토 때 확정한다.

## FilterDropdown — 버튼 + 목록 한 번에

`FilterButton`과 `FilterMenu`를 묶은 컴포넌트. 목록은 **떠 있는 판**(버튼 아래 4, `elevation-3`, 아래 내용을 밀지 않음)이고 **바깥 클릭 · Esc · 닫기 · 적용**으로 닫힌다. 고른 값은 버튼에 "이름 ・ 값"으로 표시된다. Props: `sections` · `value`/`defaultValue` · `onChange` · `onApply(값)` · `label` · `variant` · `size` · `title` · `tooltip` · `showTitle` · `showFooter` · `open`/`onToggle`(직접 제어할 때).
