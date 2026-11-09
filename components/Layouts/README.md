# Layouts — 레이아웃(틀)

**레이아웃은 "어디에 · 어떻게 쌓을지"만, 블록은 "무엇을 보여줄지"만 맡는다.** 블록은 어느 레이아웃에나 넣는다(섞어 써도 됨).

| 컴포넌트 | 피그마 | 하는 일 |
|---|---|---|
| `LayoutReport` | Layout/Report | 보고서 — 블록 사이 24 · 섹션 사이 구분선(divider-neutral-subtle) + 40, 폭 FILL |
| `LayoutSection` | Layout/Section | 섹션 — 제목(번호 없음) + 회색 설명 + 블록 |
| `LayoutPanel` | Layout/Panel | 상세 패널 — 블록마다 흰 판(surface-main · 여백 20), 사이 회색 띠 8(bg-subtler) |
| `LayoutStack` | — | 블록 목록 → 그림. `blocks`[{ type, …props }] · `layout` report|panel · `width`. `type: "section"`은 title · description · blocks. 쓸 수 있는 type = `DS.LayoutStack.types`, 분류 = `DS.LayoutStack.groups` |

## 블록 (25종, 분류 7)
| 분류 | type |
|---|---|
| Header — 머리 | header(점포 · 건물 · 공유형 하나로 합침) · section |
| Text — 글 | summary · callout · memo · conclusion |
| Number — 숫자 | stats(card · soft 하나로 합침) · bigValue · summaryStrip · top3 · ringCard |
| List — 목록 | keyValue · threeColumn · infoChip · placeList |
| Chart — 차트 | chart(bar · line · combo · donut + 단위 · 데이터 표, 하나로 합침) · donut · ranking · compare · tabbedChart · hbarTable · chartMonthly · compareBars |
| Table — 표 | table |
| Input — 입력 · 전환 | calculator · datasetSwitch |

- 예전 이름도 그대로 쓸 수 있다: ReportBody · ReportSection · DetailPanel · ReportBlocks, ReportRanking · PanelTop3 …, type `chartTable` · `statPair` · `reportHeader` · `list`.
- 블록은 놓인 자리 폭을 기준으로 모양을 바꾼다(도넛 440 미만이면 위아래, 표는 가로 넘기기). 300보다 좁은 자리는 권하지 않는다(순위 이름 140 · 입력칸 130 고정).
- 지도에서: `MapLayout reportFor={(it) => ({ title, content: h(DS.LayoutStack, { layout: "panel", blocks }) })}`.
