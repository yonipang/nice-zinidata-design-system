# StatisticCard · StatisticNumber

**StatisticCard**(피그마 Statistic Card) — 핵심 숫자 하나를 보여주는 카드.
**Props** — `size` lg|sm · `variant` card|ghost · `icon` · `title` · `badge` · `tooltip` · `description` · `rightIcon` · `value` · `unit` · `change`{label('전월대비'), value, type increase|decrease|neutral} · `numberSize` · `vertical` · `align`.
- 판: lg 여백 24 · 사이 24 · `rounded-surface-lg`(24) / sm 16 · 16 · `rounded-surface-sm`(16) — **여백 = 모서리**. `surface-main` + `border-neutral-main` + `elevation-1`. ghost는 판 없이 여백 lg 20/16 · sm 16/12.
- 제목 묶음: 왼쪽 아이콘(lg 20 · sm 18) + 제목 medium `text-body-main`(lg `text-sm` · sm `text-xs`) + 배지(white · 테두리) + 도움말 / 설명 `text-body-subtle`(사이 2). 오른쪽 위 아이콘 24.
- 숫자: lg는 가로 · 양끝 정렬(숫자 xl), sm은 세로(숫자 lg).

**StatisticNumber**(피그마 Statistic Number) — `value` · `unit` · `change` · `size` base|lg|xl|2xl · `direction` horizontal|vertical · `align` left|right|justify.
- 숫자 **bold** `text-heading-main`(16 · 18 · 20 · 24) + 단위 `text-body-subtle`(base · lg `text-xs`, xl · 2xl `text-sm`).
- 변화: "전월대비" `text-xs` `text-body-subtle` + 값 `text-xs` — 증가 `text-increase-main`(빨강) + ▲ / 감소 `text-decrease-main`(파랑) + ▼ / 변화 없음 `text-body-main`.
- 가로 사이 8, 세로 사이 2.
