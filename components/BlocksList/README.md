# Block / List — 목록

블록(내용) — 데이터만 받고 어디에 놓일지 모른다. 레이아웃(Layout/Report · Layout/Panel …) 어느 것에나 넣는다. 피그마: Component v2.3 "Blocks & Layouts" 페이지 `Block/List/…`.

| type | 컴포넌트 | 내용 |
|---|---|---|
| `keyValue` | `BlockKeyValue` | 값 목록 — 색 점 · 합계 · 비고 |
| `threeColumn` | `BlockThreeColumn` | 3열 목록 |
| `infoChip` | `BlockInfoChip` | 정보 칩(지하철 노선 색 = 예외) |
| `placeList` | `BlockPlaceList` | 장소 목록(Map List) |

자세한 props는 `components/index.d.ts`와 Layouts README의 블록 목록 참고. 예전 이름(ReportRanking · PanelTop3 등)도 그대로 쓸 수 있다.
