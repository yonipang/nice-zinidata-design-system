# 5. 간격 · 모서리 · 그림자

## 간격

- `spacing-*`만 쓴다 — 4px 배수(`spacing-1` 4, `spacing-2` 8, `spacing-3` 12, `spacing-4` 16 …), 0.5 단위는 `spacing-0-5` 2 · `spacing-1-5` 6 · `spacing-2-5` 10 · `spacing-3-5` 14.
- gap · padding 모두 토큰. 임의 숫자(13px, 18px 등) 금지.

## 모서리

Primitive: none 0 · xs 4 · sm 6 · md 8 · lg 10 · xl 12 · 2xl 14 · 3xl 16 · 4xl 20 · 5xl 24 · 6xl 32 · 7xl 40 · full

### 버튼 · 입력창 — 높이로 정한다 (`rounded-control-*`)

| 높이 | 28 (sm) | 32 (md) | 36 (lg) | 40 (xl) | 48 (2xl) |
|---|---|---|---|---|---|
| 모서리 | `control-sm` 8 | `control-sm` 8 | `control-md` 12 | `control-md` 12 | `control-lg` 16 |

- 예외: Text Button처럼 판이 없는 글자형 버튼은 모서리 0. pill · 원형은 `rounded-full`.

### 판 — 크기로 정한다 (`rounded-surface-*`)

| 토큰 | 값 | 쓰는 곳 |
|---|---|---|
| `surface-xs` | 12 | 작은 팝오버(Pop Confirm), 드롭다운 판 |
| `surface-sm` | 16 | 카드 sm, Alert, Toast, Tooltip, 달력 |
| `surface-md` | 20 | 모바일 모달 · Bottom Sheet |
| `surface-lg` | 24 | 카드 lg(PC 기본), 모달 |
| `surface-xl` | 32 | Card Layout xl(큰 판) |

### 중첩 모서리

둥근 판 안에 둥근 요소가 들어가면 **안쪽 모서리 = 바깥 모서리 − 사이 여백**(같은 중심을 공유해야 간격이 일정해 보인다). 0 이하면 0, 단계에 없으면 가까운 작은 단계. 여러 겹이면 겹마다 계산.

| 바깥 | 여백 | 안쪽 |
|---|---|---|
| 8 | 4 | 4 (`xs`) |
| 12 | 4 | 8 (`md`) |
| 16 | 4 | 12 (`xl`) |
| 16 | 8 | 8 (`md`) |
| 20 | 12 | 8 (`md`) |
| 24 | 16 | 8 (`md`) |
| 24 | 24 | 0 (`none`) |

- 적용: Segment 트랙 안 선택 항목, 드롭다운 판 안 항목, 모달 · 카드 안 박스 · 이미지. 버튼 · 입력창 · 배지 · 메뉴 항목처럼 자체 기준이 있는 컴포넌트는 예외. 중첩 계산값만 Primitive `rounded-*`를 직접 쓴다.

### 모서리와 여백

둥근 판의 안쪽 여백은 **모서리 값과 같거나 spacing 한 단계 크게**. 상하 · 좌우가 다르면 큰 쪽 기준(모서리 16 · 여백 12/20 → 20 ≥ 16 OK). 판 자체에 여백이 없고 안쪽 영역에 있으면 안쪽 영역 기준. ghost(배경 · 모서리 없음) · pill · 원형은 해당 없음.

| 모서리 | 허용 여백 |
|---|---|
| 8 | `spacing-2` · `3` |
| 12 | `spacing-3` · `4` |
| 16 | `spacing-4` · `5` |
| 20 | `spacing-5` · `6` |
| 24 | `spacing-6` · `7` |
| 32 | `spacing-8` · `9` |

## 그림자 (elevation)

`elevation-0 ~ 5`만 쓴다(`shadow-*`나 직접 값 금지).

| elevation | 쓰는 곳 |
|---|---|
| 없음 | 버튼 · 입력창(모든 상태) · 평면 패널 · disabled · read-only |
| 1 | 카드, 붙어 있는 요소 — 선택된 세그먼트, 스위치 핸들, Box · BorderBox 탭 |
| 2 | 떠 있는 컨트롤 — 지도 위 검색창 · 마커 · 패널, 슬라이더 핸들 |
| 3 | 덮는 레이어 — 드롭다운 · 툴팁 · 팝오버 · 달력 |
| 4 | 모달 |
| 5 | Toast |
