# 4. 글자

- 글꼴 **Pretendard Variable**(`--font-sans`). 숫자는 `tabular-nums`.
- 글자는 반드시 스타일(`text-{크기}-{굵기}`)을 쓴다.
- 크기 단계: 2xs 12 · **xs 13** · sm 14 · md 15 · base 16 · lg 18 · xl 20 · 2xl 24 · 3xl 30 · 4xl 36 · 5xl 48 · 6xl 60 · 7xl 72 · 8xl 96 · 9xl 128
- 굵기는 **normal · medium · semibold · bold만**(thin · light · extrabold · black 사용 안 함).

## 용도별 스타일 (PC)

| 용도 | 스타일 | 크기/줄높이 | 컴포넌트 |
|---|---|---|---|
| 페이지 제목 | `text-2xl-bold` (모바일 `text-xl-bold`) | 24/32 | PageHeader (2xl) |
| 섹션 제목 | `text-lg-semibold` (모바일 `text-base-semibold`) | 18/28 | Section Header (lg) |
| 카드 · 블록 제목 | `text-md-semibold` | 15/24 | Contents Header (md) |
| 본문 | `text-sm-normal` | 14/20 | |
| 본문 강조 · 표 숫자 | `text-sm-medium` | 14/20 | |
| 긴 글 본문 | `text-md-normal` | 15/24 | 공지 · 설명 |
| 입력 레이블 | `text-sm-medium` (2xl 입력 옆은 `text-md-medium`) | 14/20 (15/24) | FormField · InputLabel |
| 보조 · 캡션 · 도움말 | `text-xs-normal` | 13/16 | |

## 굵기 규칙

- **semibold · bold는 제목과 핵심 숫자에만.** 메뉴 · 목록 · 탭 · 배지 · 칩 · 사이드바 등 컴포넌트 안 레이블은 normal · medium, **선택 상태는 한 단계 위(medium)**. 예외: **메뉴 · 목록 판의 선택 항목(Select 옵션 · Menu List · Cascader · 필터 목록 · 날짜 목록)은 semibold** — 판 안에서 고른 항목이 확실히 보이도록.
- 예외: 핵심 숫자(Statistic Number · Quantity · 지도 Cluster · Chip 개수)는 bold, Text Card 본문은 semibold.
- 제목: 페이지 제목 bold, 섹션 · 카드 제목 semibold.
- `text-2xs`(12)는 배지 · 차트 레이블 등 **컴포넌트 안에서만**.
- 버튼 · 입력창 · 탭 등 컴포넌트 안의 글자는 컴포넌트 기본값을 그대로 쓴다.

## 전용 스타일 (다른 곳에 쓰지 않는다)

| 스타일 | 크기 | 쓰는 곳 |
|---|---|---|
| `component-gnb-menu` | 17 · medium | GlobalNav 메뉴 |
| `component-icon-label` | 10 · medium | 아이콘 아래 레이블(Square Button xl, IconText) |
| `component-icon-label-sm` | 9 · medium | 아이콘 아래 레이블(Square Button md · lg, Map Menu) |

## 작은 레이블의 최대 글자 수

레이블이 컴포넌트 안쪽 폭을 넘으면 **그 컴포넌트를 쓰지 않는다**(줄이거나 자르거나 줄바꿈하지 않음).

| 컴포넌트 | 크기 | 최대(한글) | 넘으면 대신 쓸 것 |
|---|---|---|---|
| Square Button | md · lg · xl | 2자 | 더 큰 Size(2xl 3자 · 3xl 4자) → 아이콘 + 글자 버튼(`Type=icon-text`) |
| Square Button | 2xl · 3xl | 3자 · 4자 | 아이콘 + 글자 버튼 |
| IconText(아이콘 레일) | 폭 28 · 32 · 36 · 40 · 48 | 3 · 4 · 4 · 5 · 6자 | 더 넓은 크기 → Side Navigation Item(가로형) |
| Map Menu | 36 | 5자 | 짧은 이름 → Map List · 툴팁 |

- 묶음(아이콘 레일 · 지도 메뉴 묶음)은 하나라도 넘으면 **묶음 전체를** 대체 컴포넌트로 바꾼다. 한 묶음 안에서 섞지 않는다.

## 줄바꿈

- 한글은 **어절 단위로 줄을 바꾼다**(`word-break: keep-all`) — "연락드 / 려요"처럼 단어 중간에서 끊지 않는다. 긴 영문 · URL은 넘칠 때만 끊는다(`overflow-wrap: anywhere`).
- 문단 끝에 한 글자만 남는 줄을 피한다(`text-wrap: pretty`).
