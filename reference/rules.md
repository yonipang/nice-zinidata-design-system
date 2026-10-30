# 디자인시스템 적용 규칙 (Claude Design용)

버전: v0.4 · 기준일: 2026-10-27
기준 문서: `디자인시스템_작업요약.md` · 함께 읽을 문서: `디자인시스템_컴포넌트가이드_ClaudeDesign.md`
`[미정]` 표시는 아직 정하지 않은 항목이다. 정해지기 전까지는 표시된 임시 규칙을 따른다.

---

## 0. 기본 원칙

1. **컴포넌트 우선**: 라이브러리에 있는 UI는 반드시 컴포넌트 인스턴스로 쓴다. 비슷한 모양을 프레임으로 새로 그리지 않는다.
2. **토큰만 사용**: 색 · 간격 · 모서리 · 글자는 모두 변수나 스타일에 연결한다. hex 값, 임의 숫자를 직접 넣지 않는다.
3. **맞는 토큰이 없을 때**: 새로 만들지 말고 가장 가까운 토큰을 쓴 뒤, 어떤 값을 대신 썼는지 알려준다.
4. **이 문서와 작업요약이 다르면** 작업요약(`디자인시스템_작업요약.md`)이 우선이다.

---

## 프로젝트 설정 (프로젝트마다 채운다)

| 항목 | 값 |
|---|---|
| 2순위 버튼 Style | soft / outline 중 하나 — **AT 프로젝트: soft** |
| Shape | rounded / pill 중 하나 — 모든 컴포넌트에 같은 값. **현재는 rounded만 지원** (입력창에 Shape 속성이 없어 pill 프로젝트는 입력창 Shape 추가 후 사용) |
| project 컬렉션 mode | Default / Orange / Momstouch / AT 중 하나 — Component v2.3 파일 기본은 Default, **AT 프로젝트 화면은 AT** |

---

## 1. 라이브러리

| 라이브러리 | 내용 |
|---|---|
| 🗃️ Component v2.3 | 컴포넌트, 색 변수(project · semantic · component) |
| 🗃️ Table v1.0 | 표 컴포넌트 (Table · Minimal Table, 칸 안 컨트롤 · 차트 · 배지) |
| 📊 charts v1.0 | 차트 컴포넌트 (막대 · 선 · 도넛 · 파이, 축 · 범례) |
| Primitive | 간격(spacing) · 모서리(rounded) · 글자(text style) · 원천 색 |

- project 컬렉션 mode(Default / Orange / Momstouch / AT)를 바꾸면 primary 색이 프로젝트별로 바뀐다. 화면에 primary 색을 직접 칠하지 말고 반드시 토큰을 써야 mode 전환이 적용된다.

---

## 2. 색

### 2-1. 어떤 층의 토큰을 쓰나
| 상황 | 사용할 토큰 |
|---|---|
| 직접 만든 프레임 · 텍스트 · 아이콘 | **semantic** (`bg/*`, `surface/*`, `fill/*`, `text/*`, `icon/*`, `border/*`, `divider/*`) |
| 표의 헤더 줄 · 본문 줄 배경 | **semantic `table/*`** (6장 표) |
| 컴포넌트 내부 | 컴포넌트가 이미 연결해 둔 토큰 (`button/*`, `control/*`, `input/*`) — 화면 작업에서 직접 고르지 않는다 |
| 사용 금지 | Primitive 색(`zinc/500` 등), hex 값 — 예외: 차트 시리즈 색, Category · Status Badge 분류색, Social 버튼 · 배지의 브랜드 색 |

### 2-2. 그룹 — 어디에 칠하나
| 그룹 | 용도 | 예 |
|---|---|---|
| bg | 페이지 전체 바탕 | `bg/main`, `bg/subtler` |
| surface | 바탕 위에 놓이는 판 (카드, 패널, 모달, 시트) | `surface/main`, `surface/subtle` |
| fill | 판 위의 작은 면 (배지, 칩, 진행바, 구분 막대). 투명은 `fill/none` | `fill/primary-main`, `fill/neutral-subtlest` |
| text | 글자 | `text/body-main` |
| icon | 아이콘 · 모양 색 (fill을 아이콘에 쓰지 않는다) | `icon/body-subtle` |
| border | 요소의 테두리 | `border/neutral-main` |
| divider | 영역을 나누는 선 | `divider/neutral-main` |
| table | 표의 헤더 줄 · 본문 줄 배경 (표 전용) | `table/header-main`, `table/row-main` |

### 2-3. 이름 읽는 법
`{그룹}/{역할}-{단계}` — 예: `surface/primary-subtler`
- **역할**: neutral(회색) · primary(브랜드) · inverse(어두운 배경 위) · negative(오류 · 삭제) · positive(성공) · warning · informative · increase · decrease(수치 증감 전용)
- **단계**: subtlest < subtler < subtle < **main** < strong < stronger, accent(투명도 없는 최고 강조)
- text · icon은 역할 대신 용도: heading · body · placeholder · disabled

### 2-4. 글자 · 아이콘 위계
| 용도 | 텍스트 | 아이콘 |
|---|---|---|
| 제목 | `text/heading-main` | `icon/heading-main` |
| 본문 · 입력값 | `text/body-main` | `icon/body-main` |
| 보조 설명 · 캡션 | `text/body-subtle` | `icon/body-subtle` |
| 입력창 빈 값 안내 | `text/placeholder` | `icon/placeholder` |
| 비활성 | `text/disabled` | `icon/disabled` |
| 강조 링크 · 키워드 | `text/primary-main` | `icon/primary-main` |
| 오류 문구 | `text/negative-main` | `icon/negative-main` |

- 아이콘은 **옆에 있는 텍스트와 같은 단계**를 쓴다.
- 어두운 배경(`bg/inverse-main`, `surface/inverse-main`) 위에서는 `text/inverse-*` · `icon/inverse-*`를 쓴다.

### 2-5. 상태색
- positive · negative · warning · informative는 상태 전달에만 쓴다 (장식용 금지).
- increase(빨강) · decrease(파랑)는 수치 증감 표시에만 쓴다. positive · negative와 섞지 않는다.

---

## 3. 상태 표현

**핵심**: 마우스를 올리면(hover) 배경 위에 얇은 판(state layer)만 덮는다. 글자 색과 배경 색은 바꾸지 않는다. 상태는 컴포넌트의 State 속성으로 고르고, 화면에서 색을 직접 칠하지 않는다.

### 3-1. 상태마다 바뀌는 것
- hover · pressed · focus → state layer만 (컴포넌트에 들어 있음)
- loading → 기본 모양 그대로, 스피너만
- selected → 글자 색 또는 배경 토큰으로 표시. **hover와 다르게 보여야 한다**
- disabled → 색 역할과 상관없이 같은 회색. 꽉 찬 것(solid · soft) `fill/disabled` · 테두리 없음, 테두리형(outline · base · dashed) 배경 그대로 + `border/disabled`, 글자 `text/disabled` · 아이콘 `icon/disabled` (어두운 배경은 `*/inverse-disabled`)
- read-only (입력창) → State=read-only. 값은 또렷하게, 배경만 연한 회색
- 오류 (입력창) → Negative 속성 + 아래 오류 문구 `text/negative-main`
- solid 버튼은 모든 상태에서 테두리 없음. disabled · read-only · 버튼 · 입력창에는 그림자 없음
- **키보드 focus**: 버튼 · Icon · Toggle · Square · Text Button · 탭 · Segment는 `+ Focus` 속성을 켜서 표시한다(바깥 2px 간격 + 2px 링, 색은 버튼 색을 따름 — primary `border/primary-subtle` · neutral `border/neutral-stronger` · negative `border/negative-subtle` · inverse `border/inverse-subtle`). 입력창 · Filter는 기존 focus State 사용

### 3-2. state layer 색 (컴포넌트에 반영되어 있음 — 새 컴포넌트를 만들 때만 참고)
- 기본: 글자(없으면 아이콘) 색을 따른다 — 검정 · 회색 `on neutral`, 파랑 `brand`, 빨강 `negative`, 흰 글자 + 파랑 배경 `on brand`, 흰 글자 + 어두운 배경 `inverse`
- 선택으로 글자 · 테두리만 바뀌면 → 선택 안 된 상태와 같은 판 / 배경이 연한 색이 되면 → 글자 색 / 배경이 꽉 찬 색이 되면 → 흰 글자 기준
- 체크박스 · 라디오 · 스위치 → 박스 · 트랙 색 기준 (흰색 · 회색 `on neutral`, 파랑 `on brand`, 빨강 `on negative`)
- 사이드바 · 목차 메뉴 → 메뉴의 Color 기준 (밝은 basic `on neutral` · brand `brand`, 어두운 basic `inverse` · brand `nav-brand-inverse`), hover 때 글자 한 단계 진하게

### 3-3. selected 표시
| 컴포넌트 | 선택 표시 |
|---|---|
| Ghost 탭 | 배경 `surface/neutral-subtlest` |
| Segment | neutral `surface/subtlest`, primary `surface/primary-subtlest` |
| Split Button Group | 파란 글자 |
| Control Box (카드형 선택지) | 연한 파랑 배경 `surface/primary-subtlest` + 테두리 `border/primary-accent` |
| Pagination | 현재 페이지 검정 `text/heading-main`, 나머지 `text/body-subtle` |
| 사이드바 메뉴 | 밝은 basic `surface/neutral-subtler` · brand `surface/primary-subtler`, 어두운 basic `surface/inverse-subtler` · brand `fill/primary-subtle` |

---

### 3-4. 모바일 · 지도 위 버튼 (2026-10-28 ~ 30)
- **모바일은 hover 없음** — 모바일 화면 · 모바일 컴포넌트(MobileNav · TitleBar · NavDrawer · BottomSheet · 지도 모바일)는 누르는 동안만 pressed. 터치 기기(`hover: none`)에서는 모든 hover를 끈다.
- **지도 위에 떠 있는 버튼**의 hover · pressed는 판 색을 바꾸지 말고 **흰 판 위에 state layer를 겹친다** — 판이 반투명해지면 지도가 비친다.
- 모바일 메뉴 항목(NavDrawer)은 모서리 없이 꽉 찬 줄 — pressed 판도 각지게.

## 4. 글자 (Typography)

- 글꼴: Pretendard (`font-sans`)
- 글자는 반드시 text style(`text-{크기}/{굵기}`)을 연결한다.
- 크기 단계: 6xs(8px) ~ 9xl(128px), **xs = 13px**
- 용도별 스타일 (PC 기준, 2026-10-21 확정)
  | 용도 | 스타일 | 크기/줄높이 | 컴포넌트 |
  |---|---|---|---|
  | 페이지 제목 | text-2xl/bold | 24/32 | Page Header (TitleSize 2xl) |
  | 섹션 제목 | text-lg/semibold | 18/28 | Section Header (lg) |
  | 카드 · 블록 제목 | text-md/semibold | 15/24 | Contents Header (md) |
  | 본문 | text-sm/normal | 14/20 | |
  | 본문 강조 · 표 숫자 | text-sm/medium | 14/20 | |
  | 긴 글 본문 | text-md/normal | 15/24 | 공지 · 설명 페이지 |
  | 입력 레이블 | text-sm/medium (2xl 입력 옆은 text-md/medium) | 14/20 (15/24) | Form Field · Input Label |
  | 보조 · 캡션 · 도움말 | text-xs/normal | 13/16 | |
- 굵기는 normal · medium · semibold · bold만 쓴다 (thin · light · extrabold · black 사용 안 함)
- **semibold · bold는 제목과 핵심 숫자에만** 쓴다. 메뉴 · 목록 · 탭 · 배지 · 칩 · 사이드바 등 컴포넌트 안의 레이블은 normal · medium, 선택 상태는 한 단계 위(medium) — 단, 메뉴 · 목록 판의 선택 항목(Select 옵션 · Menu List · Cascader · 필터 · 날짜 목록)은 semibold로 표시
  - 예외: 핵심 숫자(Statistic Number · Quantity · 지도 Cluster · Chip 개수)는 bold, Text Card 본문은 semibold
- 제목 굵기: 페이지 제목 bold, 섹션 · 카드 제목 semibold
- text-2xs(12px)는 배지 · 차트 레이블 등 컴포넌트 안에서만
- 버튼 · 입력창 · 탭 등 컴포넌트 안의 글자는 컴포넌트 기본값을 그대로 쓴다
- `component/gnb-menu`(17px)는 Global Navigation 메뉴 전용 글자 스타일이라 다른 곳에 쓰지 않는다
- 아이콘 아래 작은 레이블은 전용 스타일 `component/icon-label`(10px) · `icon-label-sm`(9px)을 쓴다 (컴포넌트에 반영됨, 다른 곳에 쓰지 않음)
- **작은 레이블의 최대 글자 수** — 레이블이 컴포넌트 안쪽 폭을 넘으면 그 컴포넌트를 쓰지 않는다 (줄이지 · 자르지 · 줄바꿈하지 않음)
  | 컴포넌트 | 크기 | 최대 (한글 기준) | 넘으면 대신 쓸 것 |
  |---|---|---|---|
  | Square Button | md · lg · xl | 2자 | 더 큰 Size(2xl 3자 · 3xl 4자), 그래도 넘으면 아이콘 + 글자 버튼(Neutral · Primary Button `Type=icon-text`) |
  | Square Button | 2xl · 3xl | 3자 · 4자 | 아이콘 + 글자 버튼 |
  | IconText (아이콘 레일 등) | 폭 28 · 32 · 36 · 40 · 48 | 3 · 4 · 4 · 5 · 6자 | 더 넓은 크기, 그래도 넘으면 Side Navigation Item(가로형) |
  | Map Menu | 36 | 5자 | 레이블을 줄인 다른 이름, 안 되면 Map List · 툴팁 |
  - 세트로 묶여 쓰는 경우(아이콘 레일 · 지도 메뉴 묶음 등) 레이블 하나라도 넘으면 **세트 전체를** 대체 컴포넌트로 바꾼다. 한 묶음 안에서 섞지 않는다

---

### 줄바꿈
- 한글은 **어절 단위로만 줄을 바꾼다**(`word-break: keep-all`) — "연락드 / 려요"처럼 단어 중간에서 끊지 않는다. 긴 영문 · URL은 넘칠 때만 끊는다.
- 문단 끝에 한 글자만 남는 줄을 피한다(`text-wrap: pretty`).

## 5. 간격 · 모서리

- 간격: Primitive `spacing/*` (4px 배수, 0.5 단위는 `0-5`). gap · padding 모두 변수 연결
- 모서리: `rounded/*` — none 0 · xs 4 · sm 6 · md 8 · lg 10 · xl 12 · 2xl 14 · 3xl 16 · 4xl 20 · 5xl 24 · full
- 임의 숫자(예: 13px, 18px 간격)를 쓰지 않는다.
- **중첩 모서리 (Nested radius)**: 둥근 판 안에 둥근 요소가 들어가면, **안쪽 모서리 = 바깥 모서리 − 사이 여백**으로 한다. 두 곡선이 같은 중심을 공유해야 간격이 일정해 보인다
  - 결과가 0 이하이면 0(직각), 모서리 단계에 없으면 가까운 작은 단계를 쓴다. 여러 겹이면 겹마다 같은 방식으로 계산
  - 적용 대상: 판 안의 판 — Segment 트랙 안 선택 항목, 드롭다운 판 안 항목, 모달 · 카드 안 박스 · 이미지 등. 버튼 · 입력창 · 배지 · 메뉴 항목(Page Index Item 등)처럼 자체 모서리 기준이 있는 컴포넌트는 예외
  | 바깥 | 여백 | 안쪽 |
  |---|---|---|
  | 8 (`md`) | 4 | 4 (`xs`) |
  | 12 (`xl`) | 4 | 8 (`md`) |
  | 16 (`3xl`) | 4 | 12 (`xl`) |
  | 16 (`3xl`) | 8 | 8 (`md`) |
  | 20 (`4xl`) | 12 | 8 (`md`) |
  | 24 (`5xl`) | 16 | 8 (`md`) |
  | 24 (`5xl`) | 24 | 0 (`none`) |
- **버튼 · 입력창 모서리는 높이로 정한다** (컴포넌트에 반영됨)
  | 높이 | 28 (sm) | 32 (md) | 36 (lg) | 40 (xl) | 48 (2xl) |
  |---|---|---|---|---|---|
  | 모서리 | `rounded/control-sm` 8 | `rounded/control-sm` 8 | `rounded/control-md` 12 | `rounded/control-md` 12 | `rounded/control-lg` 16 |
- 판(카드 · 알럿 · 모달)의 모서리는 `rounded/surface-xs`(12, 작은 팝오버) · `surface-sm`(16, 카드 sm · Alert · Toast) · `surface-md`(20, 모바일 모달 · Bottom Sheet) · `surface-lg`(24, 카드 lg · 모달) · `surface-xl`(32, Card Layout xl)을 쓴다. pill · 원형은 `rounded/full`, 중첩 모서리 계산값만 Primitive `rounded/*`를 직접 쓴다
  - 예외: Text Button처럼 배경 판이 없는 글자형 버튼은 모서리 0
- **메뉴 · 목록 판 안의 제목과 항목은 같은 왼쪽 시작선**: Menu Caption은 메뉴와 같은 Size를 고른다(줄 내용 시작 sm · md · lg 8, xl 10, 2xl 12). 제목 글자 = 체크 · 라디오 · 아이콘 왼쪽 끝. 목록을 따로 감싸서 여백을 더하지 않는다
- **모서리와 여백 규칙**: 모서리가 둥근 판(카드 · 패널 · 모달 등)의 안쪽 여백은 모서리 값과 같거나 spacing 한 단계 더 커야 한다. 상하 · 좌우 여백이 다르면 **큰 쪽** 기준 (예: 모서리 16 · 여백 상하 12 / 좌우 20 → 좌우 20 ≥ 16이므로 맞음). 판 자체에는 여백이 없고 안쪽 영역에 여백이 있는 구조(모달 등)는 안쪽 영역 여백으로 본다. 배경 · 모서리가 없는 영역(ghost)과 알약 · 원형(pill, full, 아이콘 원)은 해당 없음
  | 모서리 | 허용 여백 |
  |---|---|
  | rounded/md 8 | spacing/2 · 3 |
  | rounded/xl 12 | spacing/3 · 4 |
  | rounded/3xl 16 | spacing/4 · 5 |
  | rounded/4xl 20 | spacing/5 · 6 |
  | rounded/5xl 24 | spacing/6 · 7 |
  | rounded/6xl 32 | spacing/8 · 9 |
- 페이지 간격 (PC, 2026-10-21 확정)
  | 항목 | 값 |
  |---|---|
  | 페이지 상단 (GNB 아래 ~ 페이지 제목) | `spacing/10` 40 |
  | 페이지 제목 ~ 첫 섹션 | `spacing/8` 32 |
  | 섹션 사이 | `spacing/12` 48 |
  | 섹션 제목 ~ 내용 | `spacing/4` 16 |
  | 카드 사이 | `spacing/4` 16 |
  | 페이지 좌우 최소 여백 | `spacing/12` 48 |
  | 페이지 하단 | `spacing/12` 48 |
- 카드 모서리는 `rounded/5xl`(24), 안쪽 여백은 모서리와 여백 규칙을 따른다. 카드는 Card Layout · Statistic Card · Text Card 컴포넌트를 우선 사용

---

### 콘텐츠 폭 (PC)
  | 이름 | 폭 | 쓰는 화면 | GNB Width |
  |---|---|---|---|
  | default | 1180 (가운데) | 목록 · 상세 · 입력 폼 · 일반 대시보드 | fixed(1180px) |
  | wide | 1440 (가운데) | 차트가 많은 대시보드 · 넓은 표 · 리포트 | wide(1440px) |
  | full | 화면 전체, 좌우 48 | 지도 화면 | fill |
- 기본은 default. 표 · 차트를 4칸 이상 나란히 둬야 하면 wide, 지도는 full
- 화면이 콘텐츠 폭보다 좁으면 좌우 최소 여백 48(`spacing/12`)을 지키며 줄어든다
- 카드 그리드는 폭과 상관없이 4칸 (default 1칸 283, wide 1칸 348)

### 카드 크기 (PC)
- 폭은 4칸 그리드로 정한다 (카드 사이 `spacing/4` 16). 카드 인스턴스는 줄(가로 오토 레이아웃) 안에 넣고 **Fill container**로 칸을 채운다
  | 칸 | 폭 | 쓰는 곳 |
  |---|---|---|
  | 1/4 | 283 | 수치 요약 (Statistic Card) |
  | 1/3 | 382 | 짧은 텍스트 요약 (Text Card), 작은 차트 |
  | 1/2 | 582 | 차트 · 짧은 목록 |
  | 전체 | 1180 | 표 · 긴 목록 · 큰 차트 |
- 최소 폭: Statistic · Text Card lg 240 · sm 150, Card Layout 320 (컴포넌트에 설정됨). 칸이 최소 폭보다 좁아지면 칸 수를 줄여 다음 줄로 (예: 360 미만 모바일은 Statistic도 1열)
- 카드 Size: **Size 이름 = 모서리 토큰 단계** (`Size=lg` → `rounded/surface-lg`). PC는 lg(여백 · 모서리 24), 모바일 · 좁은 칸(2열 등)은 sm(16). Card Layout의 xl(32)은 큰 판에만
- Statistic Card를 좁은 칸(모바일 2열 등)에 쓰면 숫자 영역 `Statistic Number`를 `hAlign=vertical`(증감 배지를 숫자 아래)로
- 높이는 내용에 맞추고, 같은 줄의 카드는 높이를 맞춘다. 차트 카드 최소 높이: 작은 차트 240, 큰 차트 320. 표 · 목록이 길면 페이지네이션 · 더보기
- 내용에 따른 카드 선택: 숫자 하나 + 증감 → Statistic Card / 본문 3줄 이하 → Text Card / 4줄 이상 · 목록 · 차트 · 표 → Card Layout (+ Contents Header)
- 넘침: Statistic 설명 최대 2줄, Text Card 본문 최대 3줄 (말줄임, 컴포넌트에 설정됨). 숫자는 줄바꿈하지 않는다

### 그림자 · 깊이 (elevation)
- 그림자는 **`elevation/0 ~ 5` 효과 스타일만** 쓴다. `shadow/*`(Primitive)나 직접 값은 쓰지 않는다
  | elevation | 쓰는 곳 |
  |---|---|
  | 없음 | 버튼 · 입력창 · 평면 패널 (버튼 · 입력창은 상태와 상관없이 그림자 없음) |
  | 1 | 카드, 붙어 있는 요소 — 선택된 세그먼트, 스위치 핸들, Box · BorderBox 탭 |
  | 2 | 떠 있는 컨트롤 — 지도 위 검색창 · 마커, 슬라이더 핸들 |
  | 3 | 덮는 레이어 — 드롭다운 · 툴팁 · 팝오버 · 달력 |
  | 4 | 모달 |
  | 5 | Toast |
- disabled · read-only에는 그림자 없음

### 모바일 기준 (2026-10-21 확정)
- 화면 구간 (Tailwind breakpoint): 모바일 ~767 · 태블릿 768~1023(모바일 레이아웃 + 좌우 여백 32) · PC 1024~
  | 항목 | PC | 모바일 |
  |---|---|---|
  | 좌우 여백 | `spacing/12` 48 | **`spacing/5` 20** |
  | 페이지 상단 | `spacing/10` 40 | `spacing/6` 24 |
  | 제목 ~ 첫 섹션 | `spacing/8` 32 | `spacing/6` 24 |
  | 섹션 사이 | `spacing/12` 48 | `spacing/8` 32 |
  | 섹션 제목 ~ 내용 · 카드 사이 | `spacing/4` 16 | `spacing/3` 12 |
  | 페이지 제목 | text-2xl/bold | text-xl/bold |
  | 섹션 제목 | text-lg/semibold | text-base/semibold |
- 카드: Size=sm. 기본 1열, Statistic Card만 2열(칸 150 이상일 때, 360 미만 화면은 1열). sm Statistic은 숫자 · 증감이 세로 배치
- 입력창은 2xl(글자 16px) — iOS에서 16px 미만이면 화면이 확대됨
- 버튼 · 입력창 기본 xl(40), 하단 고정 주요 버튼은 2xl(48) + 화면 폭 꽉 채움
- 헤더는 GNB 대신 Mobile/NavLogo · Title bar
- 모달: 확인형(Confirm · Icon)은 폭 = 화면 − 32(최대 400), 내용이 많으면 Bottom Sheet 또는 전체 화면. Report Modal 모바일형은 폭 Fill(최소 320 · 최대 560), 높이는 내용에 맞추고 최대 640(화면이 낮으면 화면 높이 − 40), 내용 영역만 스크롤. 모바일 모달 · Bottom Sheet는 모서리 `surface-md` 20 · 여백 20
- 표는 가로 스크롤 또는 카드 목록으로 전환
- hover 없음 — hover variant는 누르는 동안(pressed) 표시로 사용

### 여백 = 모서리 (2026-10-28 ~ 30 확정)
- **둥근 판 · 버튼의 좌우 여백은 모서리 값과 같게.** 글자 묶음에 따로 좌우 여백이 있으면 합친 값으로 본다(판 여백 + 글자 묶음 = 모서리).
  - Tabs rounded(Ghost · Box · BorderBox): 판 10 + 글자 2 = `rounded-xl` 12, 탭 사이 4
  - 배지(Status · Category): 판 4 + 글자 2 = 6 = `rounded-sm` 6 · pill은 좌우 10
  - Chip: 판 4 + 글자 4 = `rounded-md` 8
  - Section Header 설명 박스: 좌우 20 = `rounded-4xl` 20 · Inline Alert line: 좌우 20 = `rounded-4xl` 20
  - 대화상자: 여백 24 = `rounded-surface-lg` 24 · Pop Confirm: 14 = `rounded-2xl` 14 · Box Accordion: 16 = `rounded-surface-sm` 16 · 카드: sm 16 · lg 24 · xl 32
  - pill은 예외(모서리가 높이의 절반).
- **마지막 줄 구분선 지우기** — 목록 · 격자 · 표 · 메뉴처럼 줄마다 아래 구분선이 있는 묶음은 마지막 줄의 아래 구분선을 항상 지운다(판 테두리 · 다음 영역 구분선과 겹치지 않게).

## 6. 컴포넌트 사용 규칙

> 컴포넌트별 용도 · 속성 · 규칙은 `디자인시스템_컴포넌트가이드_ClaudeDesign.md`를 함께 읽는다. 아래는 핵심 요약이다.

### 버튼
- 세트는 색 역할로 고른다
  | 세트 | 쓰는 곳 |
  |---|---|
  | Primary Button | 화면의 주요 행동 |
  | Neutral Button | 보조 행동, 취소 |
  | Negative Button | 삭제 · 위험한 행동 |
  | Inverse Button | 어두운 배경 위 |
- Style은 **중요도**로 고른다 (2026-10-21 확정)
  | 중요도 | Style | 예 | 한 영역에 |
  |---|---|---|---|
  | 1순위 (주요 행동) | solid | 저장 · 다음 · 조회 · 확인 | 1개만 |
  | 2순위 (보조) | soft 또는 outline — **프로젝트 설정에서 정한 하나만** | 취소 · 이전 · 다운로드 · 필터 적용 | 1~2개 |
  | 회색 배경 위 보조 | base | 회색 판 · 툴바 안 버튼 | 제한 없음 |
  | 3순위 (가벼운 행동) | ghost | 표 안 · 카드 헤더 · 툴바의 작은 행동, 더보기 | 제한 없음 |
  - 영역 = 페이지 하단 · 모달 · 폼 · 카드 하나
  - 위험한 주요 행동(삭제 확인 등)은 Negative solid
- Size는 **놓이는 곳**으로 고른다
  | Size | 높이 | 쓰는 곳 |
  |---|---|---|
  | sm | 28 | 표 안 · 필터 바 · 카드 헤더 오른쪽 |
  | md | 32 | 기본 — 페이지 · 카드 안 |
  | lg | 36 | 폼 하단 · 모달 하단 |
  | xl | 40 | 입력창(xl)과 나란히, 모바일 하단 고정 |
  | 2xl | 48 | 랜딩 · 로그인 같은 큰 CTA |
  - 입력창 옆 버튼은 입력창과 같은 높이, 한 줄의 버튼은 같은 Size
- Shape: **프로젝트 설정에서 정한 하나(rounded 또는 pill)만** 쓴다. 한 프로젝트 안에서 rounded와 pill을 섞지 않는다 — Shape 속성이 있는 모든 컴포넌트(버튼 · Toggle · Square · Chip · Select · Search Form · 배지 · BorderBox 탭 등)에 같은 값
  - 현재는 rounded 프로젝트만 지원: Input · Password · Input Quantity · DatePicker Input에 Shape가 없어서 pill이면 입력창과 모양이 섞임. pill 프로젝트가 생기면 입력창에 Shape를 추가한 뒤 사용 (Text Area는 여러 줄이라 항상 rounded)
- Social Button · Social Badge의 **브랜드 색(카카오 노랑 등)은 토큰 없이 그대로 쓰는 예외** — 로고와 같은 취급. 상태 · 테두리 · disabled는 다른 버튼 규칙과 같다
- 버튼 묶음은 오른쪽 정렬, 주요 행동이 가장 오른쪽 (취소 · 저장 순). 모달 · 시트 하단은 Button Set 컴포넌트 사용

### 입력창 (Input · Password · Input Quantity · Text Area · Select · DatePicker Input)
- 레이블 · 도움말이 있으면 **Form Field** 컴포넌트로 감싼다 (레이블 → 입력창 → 도움말 · 오류 문구, 세로 간격 8)
- 필수 표시는 `*`(`text/primary-main`), 선택 항목은 `(optional)`(`text/body-subtle`)
- 오류 문구는 입력창 바로 아래, text-xs/normal, `text/negative-main`
- 글자 수 표시는 Text Area에만
- 수정할 수 없는 값을 보여줄 때는 disabled가 아니라 **read-only**를 쓴다 (회원 아이디, 주문번호, 자동 계산 값 등)
  - read-only 제공: Input · Input Quantity · Text Area (값이 있는 상태만) / 미제공: Password · Select
- 상태 표현: hover는 회색 테두리가 한 단계 진해지고, focus는 테두리만 primary로 바뀐다 (바깥 링 없음)
- 아이콘: 값이 없을 때 `icon/body-subtle`, focus · 값 있음일 때 입력 텍스트와 같은 색
- **스타일은 입력창 바로 뒤의 배경으로 고른다**
  | 스타일 | 쓰는 곳 |
  |---|---|
  | line | 입력 폼(카드 · 모달 · 등록/수정), **회색 바탕 위의 모든 입력 · 검색창** |
  | soft | **흰 바탕 위의 검색창(기본)**, 흰 바탕 위 필터 · 검색 조건 영역 |
  | ghost (Select만) | 표 · 툴바 안 선택 (정렬, 상태 변경 등) |
  | inverse | 어두운 바탕 위 입력 · 검색창 |
  - soft는 흰 바탕에서만 쓴다. 흰 바탕 = `surface/main` · `bg/main`, 회색 바탕 = `bg/subtler` · `bg/subtlest` · `surface/subtle` · `surface/subtler` · `surface/subtlest` (회색 바탕이면 line), 어두운 바탕 = `bg/inverse-main` · `surface/inverse-main`
  - 검색창(Search Form)은 soft가 기본, 회색 바탕이면 basic(line). 검색창과 같은 줄의 Select · DatePicker는 검색창과 같은 스타일
  - 한 폼 안에서는 같은 스타일만
- **크기는 놓이는 곳으로 고른다**: 기본 xl(40) — 페이지 · 모달 폼, md(32) — 필터 바 · 표 위 검색 · 조밀한 화면, 2xl(48) — 로그인 · 랜딩. 입력창 옆 버튼은 같은 높이, 한 폼은 같은 Size

### 검색
- **Search Form**: 일반 검색 · 주소 검색. 레이블은 필요할 때만(`Show Label`), 검색어 목록은 필요할 때만 노출
- **Map Search**: 지도 화면 전용, 레이블 없음
  - 아래에 판(사이드바 등)이 있으면 basic · soft, 지도 위에 떠 있으면 floating
  - focus + 빈 값 → Location selector, focus + 입력값 있음 → 검색어 목록

### 선택 컨트롤 (Checkbox · Radio · Switch)
- 여러 개 선택 → Checkbox, 하나만 선택 → Radio, 즉시 켜고 끄는 설정 → Switch
- 목록 안에서 쓸 때는 Checkbox Menu List · Radio Menu List · Switch Menu List를 쓴다

### 표 (Table · Minimal Table) — 자세한 컴포넌트는 컴포넌트가이드 11장
- 행 높이: 일반 표 **36px**. 본문 줄 아래 1px `divider/neutral-subtle`
- **PC는 일반 Table**(Header Text · Table Text, 행 높이 36 · 구분선), **모바일은 Minimal Table**(Header Top · Minimal Cell, 구분선 없음)을 쓴다. 차트 아래 표도 같은 기준
- 헤더 컴포넌트(Header Text · Header Top · Header Left)는 **헤더 줄에만** 쓴다. 본문은 PC `Table Text`, 모바일 `Minimal Cell`. 범례 색 네모는 헤더 시리즈 칸에만(차트 색과 같게), 본문 값 칸에는 넣지 않는다
- **헤더 셀(Header Text · Header Top)은 배경이 없다**(고정 열 Fixed=right · bottom만 스크롤 내용을 가리려고 배경 유지). 표를 만들 때 헤더 줄(행 프레임)에 배경을 직접 정한다: 흰 헤더 `table/header-main`, 회색 헤더 `table/header-subtle`. **Minimal Table(모바일) 헤더는 항상 흰색**(`table/header-main`). 한 화면 안의 표는 같은 헤더 배경을 쓴다
- 본문 줄은 `table/row-main`, 줄무늬 `table/row-subtle`, 선택 줄 `table/row-selected`(강조 `-primary` · 오류 `-negative`). 표 배경은 surface 토큰을 직접 쓰지 않고 `table/*`를 쓴다
- **숫자 데이터는 오른쪽 정렬**(%, %p, 원, 건 등 단위 포함), 그 열의 헤더도 오른쪽 정렬. 글자 데이터는 왼쪽. 여러 열을 묶는 상위 헤더(예: 연령대 아래 여성 · 남성)는 가운데
- **표 안 줄마다 반복되는 버튼은 solid 금지** — Table Button 기본 `Neutral · base · sm`. 증감 없는 숫자 칸은 Table Text `Type=text`
- 차트 아래 표: 본문 첫 칸 = 차트 카테고리(같은 순서), 헤더 시리즈 칸 = 시리즈 이름 + 차트와 같은 색 네모. 시리즈가 아닌 열 · 도넛/파이 표에는 네모 없음. 카테고리가 열인 교차표는 상위 · 하위 2줄 헤더로 만든다

---

### 2026-10-28 ~ 30에 정한 사용 규칙
- **헤더**: 한 페이지에 PageHeader(bold) 1개 + SectionHeader(semibold) 여러 개 + 카드 · 블록 제목은 ContentsHeader. 부제목 `text-body-subtle`.
- **카드**: 숫자 하나는 StatisticCard(StatisticNumber — 증가 빨강 ▲ · 감소 파랑 ▼), 한 줄 결론은 TextCard, 그 밖의 내용은 Card(sm 16 · lg 24 · xl 32).
- **배지**: Status Badge는 의미 토큰만. warning solid는 `fill/warning-strong`(흰 글자 대비 낮음 — 짧은 상태 이름에만). 메뉴 · 카드 · 헤더 안 배지는 Category white + 테두리.
- **칩**: 고른 조건 표시 · 지우기용. 눌러서 고르는 칩은 `selectable`(켜짐 = primary · brand + ✓). 피그마에서는 선택된 칩을 Style=primary · Color=brand · check 아이콘으로 그린다.
- **알림**: 한 줄은 InlineAlert(soft = 모서리 없는 띠 · line = 테두리), 여러 줄 · 버튼은 ExpandedAlert, 잠깐 떴다 사라지는 결과는 Toast.
- **대화상자**: 확인은 ConfirmModal(가운데 정렬이면 제목도 가운데), 내용은 Modal, 결과 알림은 IconModal, 버튼 옆 작은 확인은 PopConfirm, 모바일 아래 판은 BottomSheet, 리포트 상세는 ReportModal(항상 메뉴와 함께 · 반응형: 600 미만 풀페이지 + 머리 · 탭 고정).
- **표**: 목록 표는 한 줄에 색 있는 요소 2~3가지까지(순위 · 증감 · 막대), 상태는 StatusBadge, 막대가 여러 열이면 `quiet`. 머리 기본 회색(`table/header-subtle`), 흰 머리면 머리 글자 `text-body-subtle`. 가로 스크롤 시 고정 열 그림자 `table/fixed-overlay`.
- **차트**: ECharts + 토큰 테마(계열 `chart/series-1~6`, 축 `text-xs` body-subtle, 툴팁은 Tooltip 판). 판 폭에 맞춰 다시 그림 — 도넛은 좁으면 도넛을 먼저 줄이고 그래도 좁으면 위아래 배치, 가운데 글은 값 + 설명 묶음의 가운데가 고리 중심.
- **지도**: Templates v2.1 지도 레이아웃 그대로 — 지도 100%, 목록 패널 375, 필터는 검색과 함께 이동(누르면 선택 판 · 하위 항목은 › 로 펼침), 보고서 390이 필터 위를 덮음, 접으면 "현 지도에서 검색". 모바일: 검색 막대(누르면 검색 화면 → 최근 검색 · 결과 → 지도로), 필터 가로 스크롤, 목록 아래 시트, 보고서 전체 화면, 도구는 더보기(⋮) · 내 위치만(확대 · 축소 없음).
- **아코디언**: 열고 닫을 때 0.24s 애니메이션, 열려 있으면 판 전체를 눌러도 닫힘.
- **Text Area** 버튼 영역은 오른쪽 Primary 하나(Text Button 없음, "지우기" 같은 버튼 금지).

## 7. 금지 사항

- hex · Primitive 색 직접 사용
- 회색에 zinc 외의 색(gray, slate, neutral, stone) 사용
- 컴포넌트와 비슷한 모양을 프레임으로 새로 그리기
- 아이콘에 `fill/*` 토큰 사용
- 상태(hover 등)를 화면에서 직접 색으로 표현
- 임의 간격 · 모서리 · 글자 크기
- 쓰지 않는 단어로 새 이름 만들기: bold · default(단계) · base(단계) · white · hint

- `shadow/*`나 직접 값으로 그림자 넣기 (elevation만 사용)
- 한 프로젝트에서 rounded · pill 섞기
- 버튼 · 입력창에 그림자 넣기, solid 버튼에 테두리 넣기
- hover · selected를 같은 모양으로 표시하기
- 표: 헤더 셀을 본문 줄에 쓰기, 본문 값 칸에 색 네모 넣기, 표 배경에 surface 토큰을 직접 쓰기, 칸 높이를 늘려 행을 36px보다 크게 만들기
---

- Status Badge · 지도 말풍선 · 차트 막대에 Primitive 색 직접 사용(예외: Category Badge 분류색, 소셜 로고 브랜드 색)
- 판 여백과 모서리가 다른 둥근 판(위 "여백 = 모서리")
- 마지막 줄 아래 구분선
- 모바일 컴포넌트의 hover 상태
- 단어 중간에서 끊기는 한글 줄바꿈

## 8. 미정 항목 (함께 정할 것)

| # | 항목 | 임시 규칙 |
|---|---|---|
| 1 | ~~용도별 글자 스타일 매핑~~ | 확정 (4장) |
| 2 | ~~페이지 레이아웃 기준~~ | 확정 (5장) |
| 3 | ~~버튼 Style 선택 기준~~ | 확정 (6장) |
| 4 | ~~버튼 Size 선택 기준~~ | 확정 (6장) |
| 5 | ~~버튼 pill 사용처~~ | 확정 — 프로젝트별 rounded/pill 택1, 혼용 금지 (6장) |
| 6 | ~~입력창 스타일 선택 기준~~ | 확정 (6장) |
| 7 | ~~PC · Mobile 기준~~ | 확정 (5장 모바일 기준) |
| 8 | ~~그림자 · 깊이~~ | 확정 (5장 elevation) |
