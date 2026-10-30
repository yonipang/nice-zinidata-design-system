# ControlBox

선택지를 카드로 보여주고 고르는 컴포넌트(피그마 Control Box) — 요금제 · 분석 항목처럼 선택지마다 설명이 필요할 때.

**Props** — `indicator` radio(기본)|check|none · `selected` · `title` · `badge` · `description` · `body` · `state` · `onClick`.
- 판: 여백 20, 내용과 표시 사이 16, 모서리 `rounded-surface-md`(20), `surface-main`.
- 테두리: 기본 `border-neutral-main` 1 → hover `border-primary-subtle` 1 → **선택 `border-primary-accent` 2 + 배경 `surface-primary-subtlest`**. 테두리는 안쪽으로 그려 선택해도 크기가 변하지 않는다.
- 내용: 제목 `text-md-medium` + CategoryBadge(white + 테두리), 설명 `text-xs` `text-body-subtle`(사이 2), 아래 24 띄워 본문 `text-md-medium`. 오른쪽 위에 Radio · Checkbox(카드 전체를 누르면 선택).
- radio는 묶음에서 하나만, check는 여러 개.
