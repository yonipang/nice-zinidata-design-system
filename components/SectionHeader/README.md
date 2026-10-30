# SectionHeader

페이지 안 큰 섹션의 제목(피그마 Section Header Wide · Narrow).

**Props** — `type` simple|supporting-box · `titleSize` md · base · lg · xl(기본) · 2xl · 3xl(narrow는 sm · base) · `narrow` · `background` light|dark · `smallTitle` · `title` · `meta`(기준일 등) · `tooltip` · `action`(제목 옆 버튼, Text Button primary) · `right`(오른쪽 슬롯) · `description` · `divider`.
- 부제목 `text-sm` semibold `text-body-subtle`(dark `text-inverse-body-subtle`) → 제목 4. 제목 **semibold** `text-heading-main`, 제목 줄 안 사이 16(기준일 `text-sm` `text-body-subtle`).
- 설명 `text-sm` `text-body-main`(사이 4). **supporting-box**: 설명이 `surface-neutral-subtlest` 박스(여백 위아래 16 · 좌우 20 = 모서리 `rounded-4xl` 20) 안, 사이 8.
- 구분선 `divider-neutral-subtle`, 위 32(narrow 24).
- PageHeader(bold)보다 한 단계 가벼운 semibold — 한 페이지에 PageHeader 1개, SectionHeader 여러 개.
