# 부록 A. 컴포넌트 전체 목록 (피그마 라이브러리)

버전: v0.3 · 기준일: 2026-10-27
기준 파일: 🗃️ Component v2.3 · 🗃️ Table v1.0 · 📊 charts v1.0 · 함께 읽을 문서: `디자인시스템_적용규칙_ClaudeDesign.md`, `디자인시스템_작업요약.md`
속성 표기: `Style=a/b` 변형 속성, `(B)` 켜고 끄는 속성, `(I)` 아이콘 교체, `(S)` 슬롯, `(T)` 텍스트
`[미정]`은 아직 정하지 않은 규칙이며, 정해지기 전까지 적힌 임시 규칙을 따른다.

---

## 공통 규칙
- 화면을 만들 때 아래 컴포넌트를 인스턴스로 쓴다. `_Base/…`, `.` 으로 시작하는 컴포넌트는 내부 부품이라 직접 쓰지 않는다.
- 상태(State)는 화면의 맥락에 맞게 고른다. 시안의 기본은 `default`.
- disabled는 공통 회색, 수정 불가 값은 read-only(입력창), 그림자 없음.
- 아이콘 교체(`↳ Icon`)는 아이콘 라이브러리의 인스턴스로만 바꾼다.
- 키보드 focus 표시: 버튼 · Icon · Toggle · Square · Text · Social Button, 탭 · Segment 항목은 `+ Focus`(B)를 켠다(링 색은 버튼 색을 따름). 입력창 · Select · Filter는 `State=focus`를 쓴다.

---

## 1. 버튼

| 컴포넌트 | 용도 | 주요 속성 |
|---|---|---|
| Primary Button | 화면의 주요 행동 (저장, 다음, 확인) | Style=solid/soft/outline/base/ghost · Type=text/icon · Size=sm~2xl · Shape=rounded/pill · State=default/hover/loading/disabled · 좌우 아이콘(B) |
| Neutral Button | 보조 행동, 취소, 닫기 | 〃 |
| Negative Button | 삭제 · 위험한 행동 | 〃 |
| Inverse Button | 어두운 배경 위 버튼 | Style=solid/soft/outline/ghost (base 없음) · 나머지 〃 |
| Icon Button | 아이콘만 있는 버튼 (표 안 작업, 툴바, 입력창 지우기) | Size=3xs~3xl · Color=primary/neutral/neutral-subtle/negative/inverse · State |
| Toggle Button | 켜고 끄는 선택 버튼 (필터 칩형) | Style=outline/base · Color=primary/neutral · Active=true/false · Size · Shape · State |
| Square Button | 아이콘 + 짧은 글자의 정사각 버튼 | Style=solid/outline/base · Color=primary/neutral · Size=md~3xl · Shape · State=default/hover/loading/disabled — 레이블 최대 md · lg · xl 2자, 2xl 3자, 3xl 4자 (넘으면 더 큰 Size → 아이콘 + 글자 버튼) |
| Text Button | 문장 안 링크형 버튼, 더보기 | Size=3xs/2xs/xs · Color=neutral/neutral-subtle/primary/inverse · Underline(B) · State |
| Social Button | 소셜 로그인 | Style=brand/secondary · Type · Size · Shape · State=default/hover/loading/disabled — brand 배경은 브랜드 색(예외, 토큰 없음) · 테두리 없음, secondary는 Neutral base 버튼과 같은 색 |

**규칙**
- 색 역할로 세트를 고른다: 주요=Primary, 보조=Neutral, 삭제=Negative, 어두운 배경=Inverse
- solid는 테두리 없음, 모든 버튼은 그림자 없음. hover · loading은 컴포넌트 State로 고른다
- Toggle: 선택 안 됨은 테두리 버튼, outline 선택됨은 꽉 찬 버튼(solid), base 선택됨은 흰 배경 + 색 테두리
- loading은 처리 중일 때만, 레이블 색은 default와 같다
- Style 선택: 1순위 solid(영역당 1개), 2순위 soft 또는 outline(프로젝트 설정의 하나만, 1~2개), 회색 배경 위 base, 가벼운 행동 ghost
- Size 선택: 기본 md, 표 · 필터 · 카드 헤더 sm, 폼 · 모달 하단 lg, 입력창 옆은 입력창과 같은 높이
- Shape는 프로젝트 설정의 하나(rounded 또는 pill)만, Shape 속성이 있는 모든 컴포넌트에 같은 값 (혼용 금지)
- 버튼 묶음은 2장 버튼 그룹 컴포넌트를 쓴다
- 모든 버튼 공통 속성: `+ Focus`(B) — 키보드 focus 링
- Icon Button 색은 주변 텍스트 위계를 따른다: 입력창 · 검색창 안 지우기(×)는 `neutral-subtle`, 뒤로 · 메뉴 등 주요 동작은 `neutral`

## 2. 버튼 그룹 · 세그먼트

| 컴포넌트 | 용도 | 주요 속성 |
|---|---|---|
| Segment Primary · Neutral · Padded Button | 2~5개 중 하나를 고르는 전환 (그래프/표, 기간) | Size · Button Count=2~5 · Width=fill/fit (항목 State=default/hover) |
| Split Button Group | 붙어 있는 버튼 묶음 | Type=text/icon · Size · Align · Button Count=1~5 |
| Square Split Button Group | 정사각 버튼 묶음 | Size · Align · Count · Show Text Label |
| Button Set / Fill Button Set | 모달 · 시트 하단 꽉 찬 버튼 1~3개 | Size=md/lg/xl · Align · Button Count · Show Indicator(B) |
| Button Set / Fit Button Set | 내용 폭 버튼 묶음 | Size · Button Slot(S) · Left Button(B) |
| Button Set / Menu Button Set | 메뉴 하단 CTA · 텍스트 버튼 | Button Type=CTA/Text · Button Count · Align |
| Text Button Group | 텍스트 버튼 나열 (구분자 포함) | Style=default/primary · Font Size · Button Count |

## 3. 입력 · 선택

| 컴포넌트 | 용도 | 주요 속성 |
|---|---|---|
| Form Field | 레이블 + 입력창 + 도움말 묶음 | Size=md/xl/2xl · Align=vertical/horizontal · Count=1~3 · Type=Input/Select · Label · Helper Text · Button(B) |
| Input | 한 줄 입력 | Style=line/soft · Size=md/xl/2xl · State=default/hover/focus/disabled/read-only · TextFill · Negative · 아이콘 · Suffix · Text Button(B) |
| Password | 비밀번호 | 〃 (read-only 없음) · Validity Card(B) |
| Input Quantity | 숫자 증감 입력 | 〃 · read-only에서 +/− 버튼은 disabled |
| Input Quantity Group | 수량 입력 + 버튼 배치 변형 | Size · State · Negative · Button=Outside/Inside · Filled |
| Text Area | 여러 줄 입력, 글자 수 표시 | Style=line/soft · State(read-only 포함) · TextFill · Negative · Helper Text · Button Area(B) |
| Select | 목록에서 하나 고르기 | Style=line/soft/ghost · Size=sm~2xl · Shape · State(read-only 없음) · Text Fill · Negative |
| Select With Label | 레이블이 붙은 Select 1~3개 | Size · Select Count · Align |
| Input Label sm · xs | 단독 레이블 | Color=gray/white · Width · Required · Optional · Tooltip(B) |
| Checkbox | 여러 개 선택 | Style=primary/secondary/ghost · Size=xs/sm · State · Active · Negative · Label · Description(B) |
| Radio | 하나만 선택 | Style=primary/secondary · Size · States · Active · Negative |
| Switch | 즉시 켜고 끄는 설정 | Style=primary/green · Size=3xs~md · State · Active · Align=left/right |
| Control Box | 카드형 선택지 (라디오 · 체크 포함) | Indicator Type=none/radio/check · State=default/hover/selected |
| Quantity | 수량 조절 단독 | Size=xs~2xl |
| Slider (SliderBar · SliderRange · SliderPoints) | 값 · 범위 선택 | State · Position · Number |
| DatePicker / Button · Inline | 날짜 선택 트리거 | Size · State · 아이콘 · Suffix · Arrow |
| Basic Date Picker · Input Date Picker | 달력 포함 날짜 선택 | Type=card/select · Size · Style · Active · Selected · Label |

**규칙 (Input 규칙 요약)**
- 상태 우선순위: disabled > read-only > negative > focus > hover > default
- hover는 회색 테두리 한 단계 진하게, focus는 테두리만 primary
- 아이콘: 값 없음 `icon/body-subtle`, focus · 값 있음은 입력 텍스트와 같은 색
- 오류: 테두리 negative + 입력창 아래 오류 문구(`text/negative-main`, text-xs)
- read-only: 수정 불가 값 표시용, 값이 있을 때만, Password · Select에는 없음
- 글자 수는 Text Area에만
- 레이블 · 도움말이 있으면 Form Field로 감싼다 (세로 간격 8)
- 스타일 선택: 입력창 뒤 배경 기준 — 흰 바탕 폼 line, 흰 바탕 검색창 · 필터 soft(검색창 기본), 회색 바탕이면 line, 표 · 툴바 Select ghost, 어두운 바탕 inverse. 크기: 기본 xl, 필터 · 조밀한 화면 md, 큰 입력 2xl

## 4. 검색

| 컴포넌트 | 용도 | 주요 속성 |
|---|---|---|
| Search Form / Basic | 일반 검색 · 주소 검색 | Style=basic/soft/inverted · State=default/focus · Size=md~2xl · Shape · TextFill · Show Label(B) · Right Icon(B) |
| Map Search / Basic | 지도 화면 주소 검색 | Style=basic/soft/floating · State · TextFill · Location Selector(B) · Keyword(B) |
| SearchMap / Logo | 로고가 붙은 지도 검색 | State · TextFill · Location Selector · Keyword · Logo Slot(S) |
| Mobile / Map Search · Map Search Screen | 모바일 지도 검색 | Type=back-button/basic · State=default/filled/focus/search |
| Location selector / Select Item | 시도 · 시군구 · 읍면동 선택 | Type · Navigation · Button(B) |

**규칙**
- Search Form: 스타일 soft 기본(회색 바탕이면 basic). 레이블은 필요할 때만, 검색어 목록은 필요할 때만 노출. focus + 입력값 → 키워드 목록 (일치 키워드 `text/primary-main`, 보조 주소 `text/body-subtle`)
- Map Search: 레이블 없음. 아래에 판이 있으면 basic · soft, 지도 위에 떠 있으면 floating. focus + 빈 값 → Location selector, focus + 입력값 → 키워드 목록 (동시 노출 아님)

## 5. 목록 · 메뉴

| 컴포넌트 | 용도 | 주요 속성 |
|---|---|---|
| Menu / Basic Menu List | 기본 메뉴 항목 | Size=sm~2xl · State=default/hover/disabled · Active · 아이콘 · Badge · Divider · Description · Suffix(B) |
| Menu / Checkbox · Radio · Switch Menu List | 선택 컨트롤이 들어간 항목 | 〃 |
| Menu / Quantity Menu List | 수량 조절 항목 | State · Active · Badge · Divider · Description |
| Menu / Profile Menu List | 프로필 항목 | State · Active · 아이콘 · Badge · Description |
| Cascader 1depth · 2depth+ | 단계형 선택 메뉴 | Size · State · Active · Badge |
| Item / Menu Caption | 메뉴 제목 · 캡션 | Type=Menu heading/Caption |
| Accordion (Box · Text) | 접고 펼치는 영역 | State=default/hover/selected · Size=sm/md |
| Map List | 지도 옆 결과 목록 항목 | State · Thumbnail · Badge · Separator(B) |

- 항목 hover는 state layer(`on neutral/hover`)로 표현돼 있다.
- `[정리 예정]` 목록 항목의 disabled는 아직 이전 방식 (공통 세트 적용 예정)

## 6. 탭 · 내비게이션

| 컴포넌트 | 용도 | 주요 속성 |
|---|---|---|
| Tabs / Underline | 페이지 · 섹션 전환 (기본) | Style=primary/dark · Size=sm~2xl · Tab Count=2~7 · FullWidth |
| Tabs / Box · Ghost | 작은 영역 안 전환 | Style=pill/rounded · Size · Tab Count |
| Tabs / BorderBox | 테두리형 전환 | Size · Style=outline/solid · Color=brand/black · Shape · Tab Count |
| Navigation / Global Navigation | PC 상단 GNB | Tab Style=ghost/underline · Align · Width=fill/fixed(1180)/wide(1440) — 페이지 콘텐츠 폭과 같은 값 · Show Tab · Left Slot |
| Navigation / Report Navigation | 리포트 화면 상단 | Align · Width · Title · Left Slot |
| Navigation / Breadcrumb | 경로 표시 | Background=dark/light · Home Icon |
| Navigation / SubMenu Group | 하위 메뉴 묶음 | Menu Count=1~5 |
| Title bar · Mobile / NavLogo | 모바일 상단 바 | Align · Scroll · Left Button · Menu · Close |
| Mobile / NavDrawer | 모바일 메뉴 서랍 | Show Profile |
| Nav Item / Side Navigation Item | 사이드바 메뉴 (hover · selected 색을 직접 칠하지 않고 State로 고른다) | Color=basic/brand · Background=light/dark · State=default/hover/selected · Depth=1/2 |
| Nav Item / Page Index Item | 페이지 목차 | Background · State · Depth |
| Pagination / Advanced · Simple · Dot | 페이지 이동, 슬라이드 위치 (현재 페이지는 검정 글자, 나머지 회색) | Size · State · Max Page=5/10 · Color |

- `[미정]` 탭 종류 선택 기준: 임시 — 페이지 상단 Underline, 카드 · 패널 안 Box, 필터성 전환 Segment

## 7. 헤더

| 컴포넌트 | 용도 | 주요 속성 |
|---|---|---|
| Page Header Wide · Narrow · Centered | 페이지 제목 영역 | Type=simple/background · Background · TitleSize · Description · Breadcrumb · Small Title · Content · Right Slot · Tooltip · Divider |
| Section Header Wide · Narrow | 섹션 제목 | Type=simple/supporting-box · Background · Title Size · Description · Right Slot · Divider · Button |
| Contents Header · Contents Header Bullet | 카드 · 콘텐츠 블록 제목 | Type=contents/card · Right Item=simple/button/select/text button/segment · Title Size |

- 계층: 페이지 제목 = Page Header, 페이지 안 큰 구역 = Section Header, 카드 · 블록 제목 = Contents Header

## 8. 카드 · 데이터 표시

| 컴포넌트 | 용도 | 주요 속성 |
|---|---|---|
| Statistic Card | 숫자 하나 + 증감 요약 | Style=card/ghost · Size=lg/sm (sm은 숫자 · 증감 세로 배치) · 제목 · 설명 · 배지 · 툴팁 · 아이콘 토글 · Metric(value · 단위 · 증감) · Change Type |
| Text Card | 짧은 설명 카드 (본문 3줄 이하) | Style=card/ghost · Size=lg/sm · 제목 · 본문 · 설명 · 배지 · 툴팁 · 아이콘 토글 · 하단 버튼 |
| Card Layout | 카드 틀 | Size=xl/lg/sm (모서리 32/24/16) · Slot(S) |
| Statistic Number | 숫자 + 단위 + 증감 | Align=left/justify/right · Direction=horizontal/vertical · Size=base/lg/xl/2xl · value · ShowUnit · ShowChange |
| Change Badge | 증감 표시 | Type=up/down/neutral · Background |
| Status Badge | 상태 표시 | Style=soft/solid · Size=xs/sm · Color=neutral/positive/accent/warning/negative · Shape · Border |
| Category Badge | 분류 표시 (색상 팔레트) | Style · Size · Color=19색 · Shape · Border |
| Chip | 선택된 조건 · 태그 | Style=primary/neutral/soft/ghost · Color=gray/brand · Size=2xs~md · Shape · Border · Control(삭제)(B) |
| Avatar · Profile (Vertical · Horizontal · Button) | 사용자 표시 | Style=character/logo/photo · Size |

- 상태 전달은 Status Badge, 분류 · 카테고리는 Category Badge, 증감은 Change Badge
- Status Badge 색 (배지 분류색이라 Primitive 사용):
  | Color | soft 배경 / 글자 | solid 배경 / 글자 | 테두리(Show Border) |
  |---|---|---|---|
  | neutral | `zinc/100` / `text/body-subtle` | `zinc/600` / `text/inverse-heading-main` | `border/neutral-strong` |
  | accent | `blue/100` / `blue/600` | `blue/600` / 흰 글자 | `border/informative-main` |
  | positive | `green/100` / `green/700` | `green/600` / 흰 글자 | `border/positive-main` |
  | warning | `amber/100` / `amber/700` | `amber/600` / 흰 글자 | `border/warning-main` |
  | negative | `red/100` / `red/700` | `red/700` / 흰 글자 | `border/negative-subtle` |
  - accent는 프로젝트 primary와 상관없이 항상 파랑
- 증감(increase · decrease) 색을 positive · negative와 섞지 않는다

## 9. 피드백 · 오버레이

| 컴포넌트 | 용도 | 주요 속성 |
|---|---|---|
| Inline Alert | 영역 안 안내 · 경고 | Type=basic/information/warning/negative/positive · Style=soft/line · 아이콘 · Description · Button · Close(B) |
| Expanded Alert | 설명 · 버튼이 있는 큰 안내 | Type=info/highlight/warning/negative/positive · Style · Slot |
| Toast | 잠깐 뜨는 알림 | Type=dark/information/warning/basic/negative/positive · Button · Close(B) |
| Dialog / Confirm Modal | 확인 · 삭제 확인 | Type=basic/negative · Align · Button Width · Close · Tooltip |
| Dialog / Contents Modal | 내용이 있는 모달 | Align · Title Size · Button Width · Slots |
| Dialog / Icon Modal | 아이콘 강조 모달 | Align · Button Width |
| Dialog / Pop Confirm | 버튼 옆 작은 확인 | Type=basic/negative |
| Dialog / Bottom Sheet | 모바일 하단 시트 | Size=sm/md · Align · Title · Button · Slots |
| Report Modal | 리포트 전체 화면 모달 | Style=clear/section · Menu Position · Menu Slot |
| Tooltip · Solid Tooltip · Border Tooltip | 보충 설명 | Position · Title · Close Button |

- 삭제 확인은 Confirm Modal `Type=negative` + Negative Button
- `[미정]` Alert와 Toast 선택 기준: 임시 — 화면에 남아야 하면 Inline Alert, 작업 결과 알림은 Toast

## 10. 지도

| 컴포넌트 | 용도 | 주요 속성 |
|---|---|---|
| Indicator / Circle · Rectangle Cluster | 지도 위 묶음 표시 | Size · Active · Color Scale · Style · Text · Badge |
| Indicator / Minimal · Callout Marker | 지도 위 위치 표시 | Style · Active · Name · Badge · Tooltip |
| Map Area | 지도 배경 종류 | Type=일반/위성/거리뷰/교통량/지형/지적편집도 |
| Zoom Level | 축척 표시 | level=10m~50km |
| Report | 지도 위 리포트 패널 | Top=title/search · Expand · Slots |
| Map Menu (지도 메뉴 묶음) | 지도 위 아이콘 + 짧은 레이블 메뉴 | 레이블 최대 5자 (넘으면 짧은 이름 → Map List · 툴팁) |

## 11. 표 (🗃️ Table v1.0)

PC는 **Table**(일반 표), 모바일은 **Minimal Table**을 쓴다. 헤더 셀은 헤더 줄에만, 본문 셀은 본문 줄에만 넣는다.

| 컴포넌트 | 용도 | 주요 속성 |
|---|---|---|
| Header/ Header Text | PC 헤더 칸 | Align=left/center/right · Fixed=none/right/bottom · ShowLeftIcon(범례 색 네모) · ShowSort · ShowTooltip · ShowDescription(B) |
| Header/Heder Checkbox · Header Empty | 헤더 체크박스 · 빈 칸 | Fixed(B) |
| Cell/Text/Table Text | PC 본문 칸 — **증감이 없는 숫자(순번 · 금액 · 개수)도 `Type=text`**, `number`는 숫자 아래 증감(+00.0)이 함께 나오는 칸 | Type=text/number/trend/rank · Style=data/title · Align=Left/Center/Right · Badge · Icon · Fixed · Description(B) |
| Cell/Text/Table Contents · Edit Title | 글자 + 배지 · 아이콘 칸, 편집 제목 칸 | Badge · Icon(B) |
| Cell/Data/BarChart | 칸 안 막대 | Type=basic(값 + 이름 세로)/composition(양 끝 비율, 예: 개인 14% · 법인 86%) · ShowName |
| Cell/Data/LineChart | 칸 안 추세선 | Value=up/down |
| Cell/Control/Table Button · Table Actions | 칸 안 버튼 · 작업 아이콘 1~3개 | Type=CTA/Icon · FullWidth · Number · Overflow |
| Cell/Control/Table Switch · Checkbox · Radio | 칸 안 선택 컨트롤 | Type=Switch/Segment · Number |
| Cell/Indicator/Table Status · Badge · Icon · Avatar | 상태 · 배지 · 아이콘 · 아바타 칸 | Style=Badge/Dot · Status · Numbers |
| Minimal Table/ Header Top · Header Left | 모바일 헤더 칸 (위 · 왼쪽) | Align · Fixed · ShowIcon · ShowTooltip |
| Minimal Table/Minimal Cell · Minimal Metric · Minimal Delta | 모바일 본문 칸 (글자 · 숫자 + 증감 · 증감) | Align=left/right · ShowDelta · ShowFixed |
| Scroll/basic · mini | 표 가로 스크롤바 | default/hover |

**규칙**
- 행 높이: 일반 표 **36px**(헤더 · 본문 모두). 칸 높이를 늘리지 않는다
- 배경: 헤더 · 본문 셀 컴포넌트에는 배경이 없다(고정 열 Fixed=right · bottom만 유지). 표를 만들 때 **줄 프레임**에 넣는다 — 헤더 `table/header-main`(흰) · `table/header-subtle`(회색), 본문 `table/row-main`, 줄무늬 `table/row-subtle`, 선택 `table/row-selected` · `-primary` · `-negative`. **Minimal Table 헤더는 항상 흰색**
- 구분선: 본문 줄 아래 1px `divider/neutral-subtle`. Minimal Table은 구분선 없음
- 정렬: **숫자 데이터와 그 열 헤더는 오른쪽**, 글자는 왼쪽, 여러 열을 묶는 상위 헤더는 가운데
- 차트 아래 표: 본문 첫 칸 = 차트 카테고리(순서 같게), 헤더 시리즈 칸 = 차트 시리즈 이름 + **차트와 같은 색 네모**(ShowLeftIcon · ShowIcon). 본문 값 칸에는 색 네모를 넣지 않는다. 시리즈가 아닌 열(예: 점포 표본수)과 도넛 · 파이 표에는 네모 없음
- 연령대가 열인 교차표처럼 차트 카테고리가 행이 아닌 표는 위 규칙을 그대로 적용하지 않는다(상위 헤더 + 하위 헤더 2줄 구성)

## 12. 차트 (📊 charts v1.0)
- 막대 · 선 · 도넛 · 파이 · 축(Category · Value) · 범례(legend) 컴포넌트를 쓴다. 차트 시리즈 색은 Primitive 팔레트(차트 · 배지 색은 Primitive 규칙)
- 차트에 표를 붙일 때는 11장 "차트 아래 표" 규칙을 따른다
- PC와 모바일 차트는 같은 데이터를 쓰고, 모바일 축 라벨은 듬성듬성 표시할 수 있다(표는 모든 행을 보여준다)

## 13. 기타

| 컴포넌트 | 용도 |
|---|---|
| Divider | 구분선 (horizontal/vertical) |
| Social Badge · Mini Social Badge | 소셜 계정 표시 |
| NICE지니데이타 Logo (Blue · Black · White) | 로고 — 토큰 연결 대상 아님 |
| keypad_system | 시스템 키패드 목업 — 디자인시스템 대상 아님 |

---

## 정리가 필요한 컴포넌트 (참고)

| 컴포넌트 | 내용 |
|---|---|
| NICE지니데이타 Logo | 로고 세트 중복 |
| Input · Password · Input Quantity · DatePicker Input | Shape 속성 없음 (현재 rounded만) |
