# StatisticCard

숫자 하나 + 증감 요약.

**Props** — `title` · `value`(문자열, 천 단위 쉼표 포함) · `unit` · `change` · `changeType` increase|decrease|neutral · `description`(최대 2줄) · `size` lg|sm · `variant` card|ghost.
- 핵심 숫자는 bold(`text-heading-main`), 숫자는 줄바꿈하지 않는다. sm(모바일 2열)은 숫자 · 증감을 세로로.
- 증감 색은 increase(빨강) · decrease(파랑) — positive · negative와 섞지 않는다.
- 최소 폭 lg 240 · sm 150.
