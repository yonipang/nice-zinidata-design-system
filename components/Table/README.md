# Table

데이터 표(피그마 **🏁 Table v1.0** 라이브러리 — Header · Cell/Text · Cell/Indicator · Cell/Control · Cell/Data).

**Props** — `columns`[{key,label,align,numeric,width,icon,tooltip,legendColor,fixed,render}] · `rows` · `selectable`(왼쪽 체크박스 열 + 머리 전체 선택) · `selected` · `onSelect` · `fixedFirst`(첫 열 고정, 가로 스크롤) · `header` subtle(기본, 회색)|main(흰색) · `striped` · `groups`(묶음 머리).
- 셀: 여백 8/12, 최소 높이 36. 머리 `text-sm` **medium**, 판은 기본 **`table-header-subtle`(회색) + `text-body-main`** — 흰 머리(`header="main"`, `table-header-main`)일 때는 글자를 **`text-body-subtle`**로 옅게 해서 본문과 구분. 본문 `text-sm` normal `text-body-main`, 줄 사이 `divider-neutral-subtle`, hover state layer, 선택된 줄 `table-row-selected-primary`.
- 고정 열: 열마다 `fixed`(또는 `fixedFirst`로 첫 열) — 가로로 넘칠 때 체크박스 열과 고정 열들이 왼쪽에 붙고(각 열 `width`로 위치 계산), 마지막 고정 열 오른쪽에 옅은 그림자.

## 셀 도우미 (피그마 Cell/*)
| 도우미 | 피그마 | 모양 |
|---|---|---|
| `TableTitle` | Table Text · Style=title | 보조 글 `text-sm` + 제목 `text-md` **semibold** `text-heading-main`, 왼쪽 아이콘 16 |
| `TableNumber` | Table Text · Type=number · trend | 숫자(tabular, 오른쪽) + ChangeBadge(증감), `strong`이면 `text-md` semibold |
| `TableRank` | Table Text · Type=rank | 20 원 · 1~3위 `fill-primary-main` + 흰 숫자, 나머지 `surface-subtler` |
| `TableBar` | Cell/Data/BarChart | basic: 막대 8 + % `text-2xs` semibold primary + 항목 이름 / composition: 막대 10 두 칸 + 양쪽 % |
| `TableActions` | Table Actions | Icon Button sm neutral-subtle 묶음 |
| StatusBadge · CategoryBadge | Table Status · Table Badge | 배지 그대로(사이 4) |
| Checkbox · Radio · Switch · Button | Table Checkbox · Radio · Switch · Button | 컨트롤 그대로 |

## 표를 덜 복잡하게 — 강조 요소는 2~3가지만
- 한 줄에 **색이 있는 요소(메달 · 증감 · 색 배지 · 색 막대)를 2~3가지 이하**로. 상태는 색 배지 대신 **dot**(점 + 글자)을 먼저 고려한다.
- 같은 정보를 두 번 보여주지 않는다(예: 상태 배지 + 증감 + 색 막대가 모두 '좋아짐'을 말하면 하나만).
- 막대가 여러 열이면 `TableBar quiet`(막대 6 · % `text-body-subtle` · 비율 막대 두 칸 사이 2 틈)로 색을 덜어낸다. 아주 단순한 목록은 한 줄 변형(`TableNumber inline` · `TableBar inline`).
- 분류 배지 여러 개(TableBadges)는 필터 · 상세 화면으로 보내고 목록 표에서는 1개까지.
- 막대는 한 열만, 비율 비교(composition)는 별도 차트로.
- 표 **마지막 줄은 아래 구분선 없음**(카드 · 판 테두리와 겹치지 않게).
