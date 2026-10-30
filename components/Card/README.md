# Card

카드 틀(Card Layout) + 카드 제목(Contents Header). Size 이름 = 모서리 토큰 단계.

**Props** — `size` lg|sm|xl · `title` · `description` · `action`(오른쪽 버튼 · Select · Segment) · `variant` card|ghost · `children`.
- PC는 lg(모서리 `rounded-surface-lg` 24 · 여백 24), 모바일 · 좁은 칸(2열 등)은 sm(16 · 16), xl(32)은 큰 판에만. 그림자 `elevation-1`.
- 4칸 그리드(카드 사이 `spacing-4`): 1/4 283 수치 요약, 1/3 382 짧은 텍스트 · 작은 차트, 1/2 582 차트 · 짧은 목록, 전체 1180 표 · 큰 차트. 최소 폭 320. 차트 카드 최소 높이 작은 차트 240, 큰 차트 320.
- 내용에 따른 선택: 숫자 하나 + 증감 → StatisticCard / 본문 3줄 이하 → Text Card / 4줄 이상 · 목록 · 차트 · 표 → Card.
- 카드 안 박스 · 이미지는 중첩 모서리(24 − 16 = `rounded-md` 8).

## 피그마 Card Layout과 맞춘 값
- sm 여백 16 · `rounded-surface-sm` 16 / lg 24 · `rounded-surface-lg` 24 / xl 32 · `rounded-surface-xl` 32 — **여백 = 모서리**, 내용 사이 16.
- 판 `surface-main` + `border-neutral-main` + `elevation-1`. ghost는 판 · 테두리 · 그림자 없이 여백만(lg 20/16 · sm 16/12 · xl 24/20).
- 숫자 하나는 StatisticCard, 한 줄 결론은 TextCard를 쓴다.
