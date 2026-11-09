# Block / Number — 숫자

블록(내용) — 데이터만 받고 어디에 놓일지 모른다. 레이아웃(Layout/Report · Layout/Panel …) 어느 것에나 넣는다. 피그마: Component v2.3 "Blocks & Layouts" 페이지 `Block/Number/…`.

| type | 컴포넌트 | 내용 |
|---|---|---|
| `stats` | `BlockStats` | 숫자 카드 — card(StatisticCard) · soft(회색 판) |
| `bigValue` | `BlockBigValue` | 큰 값 한 줄 |
| `summaryStrip` | `BlockSummaryStrip` | 3칸 요약 |
| `top3` | `BlockTop3` | TOP3 카드 |
| `ringCard` | `BlockRingCard` | 링 지표 카드 |

자세한 props는 `components/index.d.ts`와 Layouts README의 블록 목록 참고. 예전 이름(ReportRanking · PanelTop3 등)도 그대로 쓸 수 있다.
