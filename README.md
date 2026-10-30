# NICE지니데이타 디자인시스템

> **Claude가 읽는 순서**: `README.md` → `docs/`(Handbook) → `components/<이름>/README.md` → 근거가 더 필요하면 `reference/`(**작업요약이 최우선**). 정확한 값은 `tokens/`.

데이터 리포트 · 대시보드 · 지도 서비스를 만드는 NICE지니데이타의 디자인시스템입니다. 피그마 **🗃️ Component v2.3 · 🗃️ Table v1.0 · 📊 charts v1.0** 라이브러리와 같은 토큰 · 규칙 · 컴포넌트를 담고 있습니다.

> **만들 때 지키는 세 가지**
> 1. **컴포넌트 우선** — 있는 UI는 컴포넌트로 쓰고, 비슷한 모양을 새로 그리지 않는다.
> 2. **토큰만 사용** — 색 · 간격 · 모서리 · 그림자 · 글자는 토큰으로만. hex · 임의 숫자 금지.
> 3. **맞는 토큰이 없으면** — 새로 만들지 말고 가장 가까운 토큰을 쓴 뒤, 무엇을 대신 썼는지 알린다.

## 현재 상태 (v0.x)

| 부분 | 상태 | Claude가 할 일 |
|---|---|---|
| 토큰(`tokens/`) · 이름 규칙 | **확정** | 그대로 믿고 쓴다 |
| 규칙(`docs/` Handbook) | **확정**(일부 임시 규칙은 문서에 표시) | 그대로 따른다 |
| 컴포넌트(`components/`, 피그마 컴포넌트) | **전체 검토 전** — 모양 · 구조는 쓸 수 있는 상태지만, 세부와 동작 · 기능은 검토하면서 바뀌거나 추가될 수 있다 | 모양 · 속성은 그대로 쓰되 규칙과 다르면 Handbook 규칙을 우선하고 알린다. [동작 · 인터랙션](docs/13-interactions.md)에 없는 동작은 **임의로 만들지 말고 묻는다** |

## 포함된 것

| | |
|---|---|
| **토큰** | 색(Primitive 201 · project 4개 테마 · semantic 175 · component 54), 글자(Pretendard Variable, 2xs 12 ~ 9xl 128), 간격(4px 단위), 모서리(control · surface 단계), 그림자(elevation 0~5), 레이아웃(콘텐츠 폭 1180 · 1440) |
| **컴포넌트** | 버튼 · 입력 · 선택 · 탭/내비게이션 · 카드 · 배지 · 알림 · 모달 · 표 · 차트 · 화면 틀(GNB · Page Header) — 각 컴포넌트 카드에 사용 규칙과 미리보기 |
| **프로젝트 테마** | Default(파랑) · Orange · Momstouch · AT(초록) — primary 색만 바뀐다 |
| **자산** | 회사 Icon Set(line, 24px), NICE ZINIDATA 로고 |

## 바로 쓰기

1. **토큰 불러오기** — `tokens/tokens.css`를 먼저 불러온다(Tailwind는 `tokens/tailwind.config.js`). → [시작하기](docs/01-getting-started.md)
2. **화면에는 semantic 토큰만** — `bg` · `surface` · `fill` · `text` · `icon` · `border` · `divider` · `table`. → [색](docs/02-colors.md)
3. **컴포넌트를 고르고 규칙대로 배치** — 버튼은 중요도로 Style, 놓이는 곳으로 Size. → [컴포넌트 고르기](docs/08-components.md) · [레이아웃](docs/06-layout.md)
4. **프로젝트 색은 `<html data-project>`로** — 화면에 primary를 직접 칠하지 않는다. → [프로젝트 테마](docs/03-theming.md)

## Handbook

| 문서 | 내용 |
|---|---|
| [1. 시작하기](docs/01-getting-started.md) | 파일 구성, 코드에서 쓰기, Tailwind 클래스 |
| [2. 색](docs/02-colors.md) | 토큰 층, 그룹, 이름 읽는 법, 글자 · 아이콘 위계, 상태색 |
| [3. 프로젝트 테마](docs/03-theming.md) | 4개 테마, 전환 방법, 프로젝트 설정(2순위 버튼 · Shape) |
| [4. 글자](docs/04-typography.md) | 크기 · 굵기, 용도별 스타일, 전용 스타일, 작은 레이블 최대 글자 수 |
| [5. 간격 · 모서리 · 그림자](docs/05-spacing-radius-elevation.md) | spacing, control · surface 모서리, 중첩 모서리, 모서리와 여백, elevation |
| [6. 레이아웃](docs/06-layout.md) | 콘텐츠 폭, 페이지 간격, 카드 그리드 · 크기, 모바일 |
| [7. 상태](docs/07-states.md) | state layer, selected, disabled, read-only, focus |
| [8. 컴포넌트 고르기](docs/08-components.md) | 버튼 · 입력 · 검색 · 선택 · 카드 · 배지 · 피드백 · 화면 틀 |
| [9. 표](docs/09-tables.md) | Table / Minimal Table, 행 · 헤더 배경 · 정렬, 차트 아래 표, 교차표 |
| [10. 차트](docs/10-charts.md) | 시리즈 색, 축 · 격자, 차트와 표 |
| [11. 아이콘 · 로고](docs/11-icons-logos.md) | Icon Set, 로고 |
| [12. Claude로 만들 때](docs/12-building-with-ai.md) | 판단 순서, 금지 사항 체크리스트 |
| [13. 동작 · 인터랙션](docs/13-interactions.md) | 정해진 동작(검토 후 추가) |
| [부록 A. 컴포넌트 전체 목록](docs/appendix-a-components.md) | 피그마 라이브러리의 모든 컴포넌트와 속성 |

## 기준 문서

이 Handbook은 아래 원문을 주제별로 정리한 것입니다. 내용이 다르거나 더 자세한 근거가 필요하면 원문을 읽습니다. **원문끼리 다르면 작업요약이 우선**입니다.

| 원문 | 위치 |
|---|---|
| 디자인시스템 작업요약 (토큰 전체 목록 · 이름 규칙 · 변경 이력, **최우선**) | `reference/work-summary.md` |
| 적용규칙 v0.4 | `reference/rules.md` |
| 컴포넌트가이드 v0.3 | `reference/component-guide.md` |
| 작업기록 상세 (결정 이유 · 교훈) | `reference/work-log.md` |

## 피그마 원본

피그마 파일은 이 저장소에 넣지 않는다(원본은 늘 피그마). 디자인 확인 · 수정은 아래 파일에서 한다.

| 파일 | 내용 | 링크 |
|---|---|---|
| 🗃️ Component v2.3 | 컴포넌트, 색 변수(project · semantic · component), 글자 · 그림자 스타일 | https://www.figma.com/design/3C2TB2p12Nxep7smiGvPgN |
| 🗃️ Table v1.0 | 표 컴포넌트(Table · Minimal Table, 칸 안 컨트롤 · 차트 · 배지) | https://www.figma.com/design/DC6WYqBo5ayo20KU8dxJJd |
| 📊 charts v1.0 | 차트 컴포넌트(막대 · 선 · 도넛 · 파이, 축 · 범례) | https://www.figma.com/design/5YPSJMUzst1KRIXCJ51eFj |
| 📑 Templates v2.1 | 화면 템플릿(대시보드 · 보고서 · 관리자 · 회원 · 지도) | https://www.figma.com/design/8b0P5vfaIyISTvU4xU8EvR |

- 피그마에서 토큰 · 규칙이 바뀌면 `tokens/`(변수에서 다시 추출)와 `docs/`를 고치고 `CHANGELOG.md`에 기록한다.
- Claude Design에 등록할 때는 .fig를 설정 화면의 "Upload a .fig file"로 따로 올린다(Component v2.3 · Table v1.0).

## 저장소 구성

| 폴더 | 내용 |
|---|---|
| `tokens/` | `tokens.css`(CSS 변수, 테마 전환 포함) · `tailwind.config.js`(Tailwind v3.4) · `tokens.json`(W3C 형식) — 피그마 변수에서 자동 추출 |
| `docs/` | Handbook 12편 + 부록 A(피그마 컴포넌트 전체 목록) |
| `components/` | React 컴포넌트(`bundle.js`, 전역 `window.DS`) · 스타일 · 타입, 컴포넌트별 `README.md`(규칙) · `preview.html`(예시) |
| `reference/` | 원문 — 작업요약(최우선) · 적용규칙 · 컴포넌트가이드 · 작업기록 상세 |
| `assets/logos/` | NICE ZINIDATA 로고 SVG(Black · White · Transparent) |

- 아이콘은 `components/bundle.js`의 `ICONS`(회사 Icon Set 원본 벡터)에 들어 있다.
- 글꼴 Pretendard Variable 파일은 이 저장소에 없다 — 사용처에서 웹폰트로 불러온다.
- 원본: 피그마 🗃️ Component v2.3 · 🗃️ Table v1.0 · 📊 charts v1.0. 토큰이 바뀌면 `tokens/`를 다시 추출하고 `CHANGELOG.md`에 기록한다.

## 컴포넌트 (84종, 2026-10-30)

- `Accordion`
- `BarChart`
- `BottomSheet`
- `Breadcrumb`
- `Button`
- `ButtonSet`
- `Card`
- `Cascader`
- `CategoryBadge`
- `ChangeBadge`
- `Checkbox`
- `Chip`
- `ComboChart`
- `ConfirmModal`
- `ContentsHeader`
- `ControlBox`
- `Cover`
- `DatePicker`
- `DonutChart`
- `ExpandedAlert`
- `FilterButton`
- `FormField`
- `GlobalNav`
- `HeatmapChart`
- `IconButton`
- `InlineAlert`
- `Input`
- `InputLabel`
- `InputQuantity`
- `LineChart`
- `LocationSelector`
- `MapLayout`
- `MapListItem`
- `MapMarkers`
- `MapMenu`
- `MapSearch`
- `MenuCaption`
- `MenuList`
- `MinimalTable`
- `MinimalTableCell`
- `MobileNav`
- `Modal`
- `PageHeader`
- `PageIndex`
- `Pagination`
- `Password`
- `PhoneVerification`
- `Profile`
- `Quantity`
- `ReportModal`
- `ReportNav`
- `SearchField`
- `SectionHeader`
- `Segment`
- `SegmentNeutral`
- `SegmentPadded`
- `SegmentPrimary`
- `Select`
- `SelectWithLabel`
- `SideNav`
- `Slider`
- `SocialBadge`
- `SocialButton`
- `SplitButtonGroup`
- `SquareButton`
- `SquareSplitButtonGroup`
- `StatisticCard`
- `StatusBadge`
- `Switch`
- `Table`
- `TableControlCell`
- `TableDataCell`
- `TableHeaderCell`
- `TableIndicatorCell`
- `TableTextCell`
- `Tabs`
- `TextArea`
- `TextButton`
- `TextButtonGroup`
- `TextCard`
- `TitleBar`
- `Toast`
- `ToggleButton`
- `Tooltip`

- 차트는 **ECharts 5.5**(cdnjs, 처음 그릴 때 한 번 불러옴) + 토큰 테마.
