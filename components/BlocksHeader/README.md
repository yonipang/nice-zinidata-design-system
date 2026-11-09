# Block / Header — 머리

블록(내용) — 데이터만 받고 어디에 놓일지 모른다. 레이아웃(Layout/Report · Layout/Panel …) 어느 것에나 넣는다. 피그마: Component v2.3 "Blocks & Layouts" 페이지 `Block/Header/…`.

| type | 컴포넌트 | 내용 |
|---|---|---|
| `header` | `BlockHeader` | 머리 — 점포(등급 · 버튼 · 선택) · 건물(분류 글자) · 공유형(분류 배지 · 공유) |
| `section` | `BlockSection` | 섹션 제목 + 회색 설명 |

자세한 props는 `components/index.d.ts`와 Layouts README의 블록 목록 참고. 예전 이름(ReportRanking · PanelTop3 등)도 그대로 쓸 수 있다.
