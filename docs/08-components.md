# 8. 컴포넌트 고르기

있는 UI는 반드시 컴포넌트로 쓴다. 이 페이지는 **무엇을 언제 쓰나**를, 각 컴포넌트 카드는 속성과 세부 규칙을 담는다. 피그마 라이브러리 전체 목록은 [부록 A](appendix-a-components.md).

## 버튼

**세트 = 색 역할**

| 세트 | 쓰는 곳 |
|---|---|
| Primary | 화면의 주요 행동 |
| Neutral | 보조 행동, 취소 |
| Negative | 삭제 · 위험한 행동(위험한 주요 행동은 Negative solid) |
| Inverse | 어두운 바탕 위 |

**Style = 중요도**

| 중요도 | Style | 예 | 한 영역에 |
|---|---|---|---|
| 1순위 | solid | 저장 · 다음 · 조회 · 확인 | **1개만** |
| 2순위 | soft 또는 outline(프로젝트 설정의 하나만) | 취소 · 이전 · 다운로드 · 필터 적용 | 1~2개 |
| 회색 바탕 위 보조 | base | 회색 판 · 툴바 안 | 제한 없음 |
| 3순위 | ghost | 표 안 · 카드 헤더 · 툴바의 작은 행동, 더보기 | 제한 없음 |

- 영역 = 페이지 하단 · 모달 · 폼 · 카드 하나. **표 안 줄마다 반복되는 버튼은 solid 금지** → Neutral base sm.

**Size = 놓이는 곳**

| Size | 높이 | 쓰는 곳 |
|---|---|---|
| sm | 28 | 표 안 · 필터 바 · 카드 헤더 오른쪽 |
| md | 32 | 기본 — 페이지 · 카드 안 |
| lg | 36 | 폼 하단 · 모달 하단 |
| xl | 40 | 입력창(xl)과 나란히, 모바일 하단 고정 |
| 2xl | 48 | 랜딩 · 로그인 큰 CTA |

- 입력창 옆 버튼은 입력창과 **같은 높이**, 한 줄의 버튼은 같은 Size.
- 버튼 묶음은 오른쪽 정렬, 주요 행동이 가장 오른쪽(취소 · 저장 순). 모달 · 시트 하단은 Button Set.
- Shape는 프로젝트의 하나만(현재 rounded). Social 버튼 · 배지의 브랜드 색은 토큰 없이 쓰는 예외, 상태 · 테두리 · disabled는 다른 버튼과 같다.
- Icon Button 색은 주변 글자 위계를 따른다(제목 옆 neutral, 보조 옆 neutral-subtle).

## 입력

- 레이블 · 도움말이 있으면 **FormField**로 감싼다(레이블 → 입력창 → 도움말 · 오류, 세로 간격 8). 필수 `*`(`text-primary-main`), 선택 `(optional)`(`text-body-subtle`). 오류 문구는 바로 아래 `text-xs-normal` + `text-negative-main`. 글자 수 표시는 Text Area에만.
- read-only 제공: Input · Input Quantity · Text Area(값이 있을 때) / 미제공: Password · Select.
- hover는 회색 테두리가 한 단계 진하게, focus는 테두리만 primary.
- 아이콘: 빈 값 `icon-body-subtle`, focus · 값 있음은 입력 글자와 같은 색.

**스타일 = 입력창 바로 뒤의 배경**

| 스타일 | 쓰는 곳 |
|---|---|
| line | 입력 폼(카드 · 모달 · 등록/수정), **회색 바탕 위의 모든 입력 · 검색** |
| soft | **흰 바탕 위 검색창(기본)**, 흰 바탕 위 필터 · 검색 조건 |
| ghost(Select만) | 표 · 툴바 안 선택(정렬 · 상태 변경) |
| inverse | 어두운 바탕 위 |

- 흰 바탕 = `surface-main` · `bg-main`, 회색 바탕 = `bg-subtler` · `bg-subtlest` · `surface-subtle` · `-subtler` · `-subtlest`, 어두운 바탕 = `bg-inverse-main` · `surface-inverse-main`.
- 같은 줄의 Select · DatePicker는 검색창과 같은 스타일. 한 폼 안은 같은 스타일 · 같은 Size.
- **크기**: 기본 xl(40) — 페이지 · 모달 폼, md(32) — 필터 바 · 표 위 검색, 2xl(48) — 로그인 · 랜딩 · 모바일.

## 검색 · 날짜

- **SearchField**(Search Form): 일반 · 주소 검색. 레이블은 필요할 때만. 옆 검색 버튼은 같은 높이.
- **Map Search**: 지도 화면 전용, 레이블 없음. 아래에 판이 있으면 basic · soft, 지도 위에 떠 있으면 floating. focus + 빈 값 → Location selector, 입력값 있음 → 검색어 목록.
- **DatePicker**: 날짜 · 기간. 기간은 두 개 + 가운데 "~"("부터" · "까지").

## 선택

여러 개 → Checkbox, 하나 → Radio, 즉시 켜고 끄기 → Switch, 2~5개 전환 → Segment. 목록 안에서는 Checkbox · Radio · Switch Menu List.

## 탭 · 내비게이션

- 페이지 맨 위 **GlobalNav**(폭 = 콘텐츠 폭), 페이지 제목 **PageHeader**(주요 행동 1개만 solid).
- 탭 종류(임시 규칙): 페이지 상단 Underline, 카드 · 패널 안 Box, 필터성 전환 Segment.
- 사이드 메뉴 **SideNav**, 페이지 이동 **Pagination**.

## 카드 · 데이터

숫자 + 증감 → **StatisticCard**, 본문 3줄 이하 → Text Card, 차트 · 표 · 목록 → **Card**. 크기 · 그리드는 [레이아웃](06-layout.md).

## 배지

| 배지 | 쓰는 곳 | 색 |
|---|---|---|
| **StatusBadge** | 상태 전달(대기 · 진행중 · 완료 · 확인 필요 · 취소) | neutral(zinc) · accent(진행중, **항상 파랑**) · positive(green) · warning(amber) · negative(red) — soft `{색}-100` 배경 + `{색}-600~700` 글자, solid `{색}-600`(negative `red-700`) + 흰 글자. 분류색이라 Primitive 사용 |
| **CategoryBadge** | 분류 · 카테고리 | 19색 Primitive |
| **ChangeBadge** | 수치 증감 | increase(빨강) · decrease(파랑) |

## 피드백 · 오버레이

- 화면에 남아야 하면 **InlineAlert**, 작업 결과 알림은 **Toast**, 확인 · 삭제 확인은 **ConfirmModal**(위험하면 Negative solid). (Alert · Toast 선택 기준은 임시 규칙)
- 용어 · 숫자 설명은 **Tooltip**(두 문장 이내, 조작 요소 금지).
