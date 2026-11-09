# Block / Chart — 차트

블록(내용) — 데이터만 받고 어디에 놓일지 모른다. 레이아웃(Layout/Report · Layout/Panel …) 어느 것에나 넣는다. 피그마: Component v2.3 "Blocks & Layouts" 페이지 `Block/Chart/…`.

| type | 컴포넌트 | 내용 |
|---|---|---|
| `chart` | `BlockChart` | 차트 — bar · line · combo · donut, 단위 · 데이터 표(table) 선택 |
| `donut` | `BlockDonut` | 도넛 + 범례표 |
| `ranking` | `BlockRanking` | 순위 막대(TOP 5) |
| `compare` | `BlockCompare` | 비교 막대 + 표 + 차이 |
| `tabbedChart` | `BlockTabbedChart` | 탭 + 누적 막대 + 표 |
| `hbarTable` | `BlockHbarTable` | 가로 막대 + 표 |
| `chartMonthly` | `BlockChartMonthly` | 막대 + 월별 표 |
| `compareBars` | `BlockCompareBars` | 같은 축 비교 막대 |

자세한 props는 `components/index.d.ts`와 Layouts README의 블록 목록 참고. 예전 이름(ReportRanking · PanelTop3 등)도 그대로 쓸 수 있다.
