# NICE지니데이타 디자인시스템

데이터 리포트 · 대시보드 · 지도 서비스를 만드는 NICE지니데이타의 디자인시스템입니다. 피그마 **🗃️ Component v2.3 · 🗃️ Table v1.0 · 📊 charts v1.0** 라이브러리와 같은 토큰 · 규칙 · 컴포넌트를 담고 있습니다.

> **만들 때 지키는 세 가지**
> 1. **컴포넌트 우선** — 있는 UI는 컴포넌트로 쓰고, 비슷한 모양을 새로 그리지 않는다.
> 2. **토큰만 사용** — 색 · 간격 · 모서리 · 그림자 · 글자는 토큰으로만. hex · 임의 숫자 금지.
> 3. **맞는 토큰이 없으면** — 새로 만들지 말고 가장 가까운 토큰을 쓴 뒤, 무엇을 대신 썼는지 알린다.

> **고치는 사람은 먼저 `MAINTAINING.md`(수정 가이드)를 읽으세요** — 규칙 · 작업 방식 · 확인 도구(`tools/`) · 배포 방법 · 변경 이력(`CHANGELOG.md`).

## 포함된 것

| | |
|---|---|
| **토큰** | 색(Primitive 201 · project 4개 테마 · semantic 175 · component 54), 글자(Pretendard Variable, 2xs 12 ~ 9xl 128), 간격(4px 단위), 모서리(control · surface 단계), 그림자(elevation 0~5), 레이아웃(콘텐츠 폭 1180 · 1440) |
| **컴포넌트** | 버튼 · 입력 · 선택 · 탭/내비게이션 · 카드 · 배지 · 알림 · 모달 · 표 · 차트 · 화면 틀(GNB · Page Header) — 각 컴포넌트 카드에 사용 규칙과 미리보기 |
| **프로젝트 테마** | Default(파랑) · Orange · Momstouch · AT(초록) — primary 색만 바뀐다 |
| **자산** | 회사 Icon Set(line, 24px), NICE ZINIDATA 로고 |

## 바로 쓰기

1. **토큰 불러오기** — `source/tokens.css`를 먼저 불러온다(Tailwind는 `source/tailwind.config.js`). → 시작하기 (`docs/01-getting-started.md`)
2. **화면에는 semantic 토큰만** — `bg` · `surface` · `fill` · `text` · `icon` · `border` · `divider` · `table`. → 색 (`docs/02-colors.md`)
3. **컴포넌트를 고르고 규칙대로 배치** — 버튼은 중요도로 Style, 놓이는 곳으로 Size. → 컴포넌트 고르기 (`docs/08-components.md`) · 레이아웃 (`docs/06-layout.md`)
4. **프로젝트 색은 `<html data-project>`로** — 화면에 primary를 직접 칠하지 않는다. → 프로젝트 테마 (`docs/03-theming.md`)

## Handbook

| 문서 | 내용 |
|---|---|
| 1. 시작하기 (`docs/01-getting-started.md`) | 파일 구성, 코드에서 쓰기, Tailwind 클래스 |
| 2. 색 (`docs/02-colors.md`) | 토큰 층, 그룹, 이름 읽는 법, 글자 · 아이콘 위계, 상태색 |
| 3. 프로젝트 테마 (`docs/03-theming.md`) | 4개 테마, 전환 방법, 프로젝트 설정(2순위 버튼 · Shape) |
| 4. 글자 (`docs/04-typography.md`) | 크기 · 굵기, 용도별 스타일, 전용 스타일, 작은 레이블 최대 글자 수 |
| 5. 간격 · 모서리 · 그림자 (`docs/05-spacing-radius-elevation.md`) | spacing, control · surface 모서리, 중첩 모서리, 모서리와 여백, elevation |
| 6. 레이아웃 (`docs/06-layout.md`) | 콘텐츠 폭, 페이지 간격, 카드 그리드 · 크기, 모바일 |
| 7. 상태 (`docs/07-states.md`) | state layer, selected, disabled, read-only, focus |
| 8. 컴포넌트 고르기 (`docs/08-components.md`) | 버튼 · 입력 · 검색 · 선택 · 카드 · 배지 · 피드백 · 화면 틀 |
| 9. 표 (`docs/09-tables.md`) | Table / Minimal Table, 행 · 헤더 배경 · 정렬, 차트 아래 표, 교차표 |
| 10. 차트 (`docs/10-charts.md`) | 시리즈 색, 축 · 격자, 차트와 표 |
| 11. 아이콘 · 로고 (`docs/11-icons-logos.md`) | Icon Set, 로고 |
| 12. Claude로 만들 때 (`docs/12-building-with-ai.md`) | 판단 순서, 금지 사항 체크리스트 |
| 부록 A. 컴포넌트 전체 목록 (`docs/component-guide.md`) | 피그마 라이브러리의 모든 컴포넌트와 속성 |

## 기준 문서

이 Handbook은 아래 원문을 주제별로 정리한 것입니다. 내용이 다르거나 더 자세한 근거가 필요하면 원문을 읽습니다. **원문끼리 다르면 작업요약이 우선**입니다.

| 원문 | 위치 |
|---|---|
| 디자인시스템 작업요약 (토큰 전체 목록 · 이름 규칙 · 변경 이력, **최우선**) | `archived/reference/work-summary.md` |
| 적용규칙 v0.4 | `archived/reference/rules.md` |
| 컴포넌트가이드 v0.3 | `archived/reference/component-guide.md` |
| 작업기록 상세 (결정 이유 · 교훈) | `archived/reference/work-log.md` |

## Consuming this system (Claude Design · 코드)

- **namespace**: `DS` — 번들이 `window.DS`에 컴포넌트를 담는다(예: `DS.Button`, `DS.StatisticCard`, `DS.MapLayout`). React 18이 이미 있는 화면에서 쓴다(번들에 React 없음).
- **불러오는 순서**: `source/tokens.css` → `components/bundle.css` → `components/bundle.js`(같은 폴더에 `components/echarts.min.js` — 차트용, 직접 불러올 필요 없음).
- **바탕 클래스**: 컴포넌트를 담는 맨 바깥 요소에 `class="ds-root"`(글꼴 · 기본 글자색 · 상자 크기 규칙). 프로젝트 색은 `<html data-project="default|orange|momstouch|at">`.
- **글꼴**: `fonts/PretendardVariable.woff2`를 `@font-face { font-family: "Pretendard Variable"; }`로 등록한다(토큰 `--font-sans`가 이 이름을 먼저 쓴다).
- **컴포넌트 설명**: `components/<이름>/README.md`(props · 규칙), 미리보기 `components/<이름>/preview.html`. 전체 목록 · 타입은 `components/index.d.ts`.
- **차트**(BarChart · LineChart · DonutChart · ComboChart · HeatmapChart)는 ECharts 5.5를 쓴다 — **`components/echarts.min.js`를 bundle.js와 같은 폴더에 함께 두면** 그 파일을 먼저 불러오고(외부 스크립트를 막는 Design 캔버스에서도 차트가 그려짐), 없을 때만 cdnjs에서 불러온다. Claude Design 캔버스에 설치할 때는 `echarts.min.js`도 함께 복사한다.
- 토큰 원본: `tokens.json`(W3C 형식은 `tokens.w3c.json`).
