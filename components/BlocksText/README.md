# Block / Text — 글

블록(내용) — 데이터만 받고 어디에 놓일지 모른다. 레이아웃(Layout/Report · Layout/Panel …) 어느 것에나 넣는다. 피그마: Component v2.3 "Blocks & Layouts" 페이지 `Block/Text/…`.

| type | 컴포넌트 | 내용 |
|---|---|---|
| `summary` | `BlockSummary` | 소제목 · 강조 문장 |
| `callout` | `BlockCallout` | 안내 박스 |
| `memo` | `BlockMemo` | 메모 |
| `conclusion` | `BlockConclusion` | 한 줄 결론 — 카드 · 알림 |

자세한 props는 `components/index.d.ts`와 Layouts README의 블록 목록 참고. 예전 이름(ReportRanking · PanelTop3 등)도 그대로 쓸 수 있다.
