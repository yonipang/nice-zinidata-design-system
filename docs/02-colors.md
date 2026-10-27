# 2. 색

## 토큰 층

`Primitive → project → semantic → component` 순서로만 참조한다.

| 층 | 예 | 화면에서 |
|---|---|---|
| Primitive | `color-zinc-500`, `color-blue-600` | **직접 쓰지 않는다.** 예외: 차트 시리즈 색 · Category/Status Badge 분류색 · Social 버튼/배지 브랜드 색 |
| project | `primary-main`, `palette-600` | 직접 쓰지 않는다 — 프로젝트마다 바뀌는 primary와 그 위 글자색만 있다 |
| semantic | `surface-main`, `text-body-main`, `table-header-main` | **화면에는 이것만 쓴다** |
| component | `button-solid-primary-bg`, `input-border-focus`, `control-on`, `map-region` | 컴포넌트 안에 이미 연결돼 있다 — 화면 작업에서 고르지 않는다 |

- 한 컴포넌트에서만 쓰는 색만 component 토큰이고, 여러 곳이 함께 쓰면 semantic이다.

## 그룹 — 어디에 칠하나

| 그룹 | 용도 | 예 |
|---|---|---|
| `bg` | 페이지 전체 바탕 | `bg-main`, `bg-subtler` |
| `surface` | 바탕 위에 놓이는 판(카드 · 패널 · 모달 · 시트) | `surface-main`, `surface-subtle` |
| `fill` | 판 위의 작은 면(배지 · 칩 · 진행바 · 구분 막대). 투명은 `fill-none` | `fill-primary-main`, `fill-neutral-subtlest` |
| `text` | 글자 | `text-body-main` |
| `icon` | 아이콘 · 모양 색 — **아이콘에 `fill-*`을 쓰지 않는다** | `icon-body-subtle` |
| `border` | 요소의 테두리 | `border-neutral-main` |
| `divider` | 영역을 나누는 선 | `divider-neutral-main` |
| `table` | 표의 헤더 줄 · 본문 줄 배경(표 전용) | `table-header-main`, `table-row-main` |
| `state layers` | hover · pressed 판(컴포넌트 안) | `state-layers-on-neutral-hover` |

## 이름 읽는 법

`{그룹}-{역할}-{단계}` — 예: `surface-primary-subtler`, `border-neutral-strong`

- **역할**: neutral(회색) · primary(브랜드) · inverse(어두운 바탕 위) · negative(오류 · 삭제) · positive(성공) · warning · informative · increase · decrease(수치 증감 전용)
- **단계**(그룹 안에서의 상대적 진하기): subtlest < subtler < subtle < **main** < strong < stronger, accent(투명도 없는 최고 강조). 기준 단계에도 항상 `main`을 붙인다.
- `text` · `icon`은 역할 대신 **용도**를 쓴다: heading · body · placeholder · disabled
- 이름에 쓰지 않는 단어: bold, default(상태 이름과 헷갈림), base(단계), white(→ inverse), hint(→ placeholder)

## 글자 · 아이콘 위계

| 용도 | 텍스트 | 아이콘 |
|---|---|---|
| 제목 | `text-heading-main` | `icon-heading-main` |
| 본문 · 입력값 | `text-body-main` | `icon-body-main` |
| 보조 설명 · 캡션 | `text-body-subtle` | `icon-body-subtle` |
| 입력창 빈 값 안내 | `text-placeholder` | `icon-placeholder` |
| 비활성 | `text-disabled` | `icon-disabled` |
| 강조 링크 · 키워드 | `text-primary-main` | `icon-primary-main` |
| 오류 문구 | `text-negative-main` | `icon-negative-main` |
| primary 바탕 위 글자 | `text-on-primary` | `icon-on-primary` |

- 아이콘은 **옆 텍스트와 같은 단계**를 쓴다.
- 어두운 바탕(`bg-inverse-main` · `surface-inverse-main`) 위에서는 `text-inverse-*` · `icon-inverse-*`.

## 상태색

- positive · negative · warning · informative는 **상태 전달에만**(장식 금지).
- increase(빨강) · decrease(파랑)는 **수치 증감에만**. positive · negative와 섞지 않는다.
- 회색은 **zinc만** 쓴다(gray · slate · neutral · stone 금지).

## 대비 주의

`text-placeholder`, `text-primary-subtle`, `text-negative-subtle(r)`, `text-warning-main`, `text-informative-main`, `text-increase-main`, `text-decrease-main`은 흰 바탕에서 4.5:1에 못 미친다(원본 값 그대로). 본문 크기 글자에 이 색만으로 의미를 싣지 말고 부호 · 상태어를 함께 쓴다.
