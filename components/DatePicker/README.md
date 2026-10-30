# DatePicker (날짜 선택 묶음)

날짜 선택은 한 카드에서 본다 — **버튼형 DatePicker · 기간 DateRangePicker · 글자형 DatePickerInline · 입력창형 DateInput**. 고르는 기준: 하나의 날짜는 버튼형, 기간은 DateRangePicker, 판이 무거운 곳(카드 헤더 · 필터 줄)은 글자형, 입력 폼 안은 입력창형.

날짜 버튼 + 달력 판. 버튼은 Neutral base 버튼과 같은 판(`button-base-neutral-bg` · `-border`)에 state layer, 왼쪽 `calendar` 아이콘.

**Props** — `value`(Date) · `placeholder` · `suffix`("부터" · "까지") · `size` sm 28|md 32|lg 36|xl 40|2xl 48 · `state` · `open` · `onToggle` · `onChange(date)` · `month` · `onMonth` · `today` · `range`[from,to]. 달력만 쓸 때는 `Calendar`. `options`[{value,label}]를 주면 달력 대신 **목록**(Select 목록과 같은 판)에서 고른다(피그마 Basic Date Picker Type=select).
- **기간은 DatePicker 두 개를 따로 쓰지 않고 DateRangePicker `variant="split"`을 쓴다** — 버튼 두 개 + "~" 모양은 같고, 한 판(두 달)에서 시작일 → 종료일 순서로 고른다(예약 사이트 방식).
- 상태(피그마): hover는 state layer, **focus · 열림은 날짜 글자 `text-primary-main` · 달력 아이콘 `icon-primary-main`**, disabled는 hover 없이 판 그대로 + 테두리 `border-disabled` + 글자 · 아이콘 `text-disabled` · `icon-disabled`(빈 값 안내 글자도 disabled 색).
- 크기는 같은 줄의 입력창 · 버튼과 맞춘다(필터 줄 md, 일반 xl, 모바일 2xl).
- 달력 판: `surface-main` + `border-neutral-subtle` + `elevation-3`, 모서리 `rounded-surface-sm`. 날짜 칸 32, hover `state-layers-on-neutral-hover`, 선택 `fill-primary-main` + `text-on-primary`, 기간 사이 `surface-primary-subtlest` 띠 — **칸 사이 여백 없이 시작 ~ 끝이 이어진다**(시작 · 끝 칸은 안쪽 절반까지 띠), 오늘은 회색 판(`state-layers-on-neutral-hover`, 테두리 없음), 일요일 `text-negative-subtle`(빨강) · 토요일 `text-primary-main`(파랑).
- 날짜 글자는 tabular-nums. **버튼 너비 고정**: 날짜 칸을 가장 긴 날짜 폭(sm 106 · md/lg 114 · xl 122 · 2xl 130)으로 고정해 값이 바뀌거나 비어도 너비가 변하지 않는다. 표시 형식 "2026년 2월 3일".
- 달력 제목(“2026년 2월”)을 누르면 **월 보기 → 연도 보기**로 바뀐다(피그마 _Base/Calendar/Base Option=month · year). 4칸 × 3줄, 선택 `fill-primary-main` + 흰 글자.
- **열고 닫기**: 트리거를 누르면 열리고, 열린 상태에서 **판 바깥을 누르거나 Esc**를 누르면 닫힌다. 값을 고르면 닫힌다(기간 선택은 종료일까지 고른 뒤 바깥을 눌러 닫음). `open`을 주지 않으면 컴포넌트가 스스로 열고 닫고, 주면 부모가 `onToggle`(· `onClose`)로 제어한다.
- 목록형 판은 **트리거(날짜 버튼 · 입력창)와 같은 너비**로 아래 4에 뜬다.
- **옵션 항목 기본 크기 = lg**(Menu List lg: 높이 36 · 글자 `text-md`(15/24) · `text-heading-main`, 선택 `text-primary-main` **semibold**, 항목 사이 2).

---

## 기간 — DateRangePicker
시작일 · 종료일을 고르는 기간 선택. 피그마 **DatePicker/ButtonGroup**(버튼 두 개를 붙인 묶음) + **_Base/Calendar/Range Card**(두 달 나란히)와 같은 구성.

**Props** — `value`[from, to] · `onChange` · `size` md|lg|xl(기본)|2xl · `open` · `onToggle` · `month`(왼쪽 달) · `onMonth` · `today` · `startPlaceholder`("시작일") · `endPlaceholder`("종료일"). 달력만 쓸 때는 `RangeCalendar`.
- 버튼: DatePicker 버튼과 같은 판(Neutral base), 두 버튼을 테두리 1 겹쳐 붙이고 바깥쪽 모서리만 둥글게. 열려 있을 때 **날짜가 입력된 칸만** 글자 `text-primary-main` · 아이콘 `icon-primary-main`, 비어 있는 칸은 안내 글자(`text-placeholder`) 그대로.
- 달력: **두 달이 양쪽으로** 나란히(각 274, 여백 16/12), 가운데 `divider-neutral-subtle`. 이전 달 버튼은 왼쪽 달, 다음 달 버튼은 오른쪽 달 제목 줄에(Icon Button sm).
- 판: `bg-main` + `border-neutral-strong` + `elevation-3`, 모서리 `rounded-surface-sm`.
- 기간 표시: 시작 ~ 끝이 **칸 사이 여백 없이 이어진 띠**(`surface-primary-subtlest`), 글자 `text-primary-main`. 시작은 왼쪽만 · 끝은 오른쪽만 둥근 띠 위에, **시작일 · 종료일 칸은 진한 선택 칸**(`fill-primary-main` + `text-on-primary` medium, `rounded-md`)으로 강조.
- **예약 사이트 방식**: 버튼을 누르면 그 칸이 '고르는 중'(파란 테두리 · 파란 글자)이 된다. 시작일을 고르면 종료일은 비워지고 **자동으로 종료일 고르기로 넘어가며**, 종료일을 고르면 판이 닫힌다. 종료일 칸을 바로 눌러 종료일만 다시 고를 수도 있다.
- 시작일만 고른 상태에서 날짜에 마우스를 올리면 **그 날까지 기간을 미리 보여준다**(띠 + 끝 칸).
- `variant`: joined(버튼 두 개를 붙인 묶음, 기본) · split(DatePicker 버튼 두 개 + "~", 접미사 "부터" · "까지" — 폼 안 기간 입력).
- 날짜가 하나뿐인 경우는 DatePicker를 쓴다.
- **열고 닫기**: 트리거를 누르면 열리고, 열린 상태에서 **판 바깥을 누르거나 Esc**를 누르면 닫힌다. 값을 고르면 닫힌다(기간 선택은 종료일까지 고른 뒤 바깥을 눌러 닫음). `open`을 주지 않으면 컴포넌트가 스스로 열고 닫고, 주면 부모가 `onToggle`(· `onClose`)로 제어한다.

## 글자형 — DatePickerInline
테두리 · 판 없는 글자형 날짜 선택(피그마 DatePicker/Inline). 카드 헤더 · 필터 줄 · 표 위처럼 버튼 판이 무거운 곳.

**Props** — `value` · `onChange` · `size` sm|md(기본)|lg|xl|2xl · `placeholder` · `state` · `open` · `onToggle` · `month` · `onMonth` · `today`.
- 구성: 왼쪽 달력 아이콘 + 날짜 글자 + 오른쪽 chevron-down. 판 없이 hover `state-layers-on-neutral-hover`, 열림 `-focus`.
- 크기(피그마): md 32(여백 6/8, 글자 14), xl 40(여백 8/10, 글자 15), 모서리는 높이 규칙.
- 열림(focus)에 날짜가 있으면 글자 `text-primary-main` · 달력 아이콘 `icon-primary-main`. disabled는 `text-disabled`, hover 없음.
- 버튼 판이 있는 날짜 선택은 DatePicker, 입력창 모양은 DateInput.
- **열고 닫기**: 트리거를 누르면 열리고, 열린 상태에서 **판 바깥을 누르거나 Esc**를 누르면 닫힌다. 값을 고르면 닫힌다(기간 선택은 종료일까지 고른 뒤 바깥을 눌러 닫음). `open`을 주지 않으면 컴포넌트가 스스로 열고 닫고, 주면 부모가 `onToggle`(· `onClose`)로 제어한다.

## 입력창형 — DateInput
입력창 모양의 날짜 선택(피그마 Input Date Picker). 입력 폼 안에서 다른 입력창과 나란히 둘 때.

**Props** — `value` · `onChange` · `label` · `helper` · `placeholder` · `size` md|xl(기본)|2xl · `variant` line|soft · `state` · `negative` · `open` · `onToggle` · `options`(목록형) · `format` day|month · `month` · `onMonth` · `today` · `width`.
- 판 · 상태는 Input과 같다(line · soft, 열림 = focus 테두리). 값은 왼쪽 `text-heading-main`, 오른쪽 달력 아이콘(열림 때 `icon-primary-main`).
- 레이블은 InputLabel(xs, 2xl 옆은 sm), 아래 8에 도움말.
- type: **card**(기본) = 달력 판, **select**(`options`) = Select 목록과 같은 목록 판(월 · 분기처럼 정해진 값).
- 같은 줄의 다른 입력창과 같은 Size · 같은 스타일.
- **열고 닫기**: 트리거를 누르면 열리고, 열린 상태에서 **판 바깥을 누르거나 Esc**를 누르면 닫힌다. 값을 고르면 닫힌다(기간 선택은 종료일까지 고른 뒤 바깥을 눌러 닫음). `open`을 주지 않으면 컴포넌트가 스스로 열고 닫고, 주면 부모가 `onToggle`(· `onClose`)로 제어한다.
- **옵션 항목 기본 크기 = lg**(Menu List lg: 높이 36 · 글자 `text-md`(15/24) · `text-heading-main`, 선택 `text-primary-main` **semibold**, 항목 사이 2).
