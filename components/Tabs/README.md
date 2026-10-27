# Tabs

페이지 · 섹션 전환은 Underline, 카드 · 패널 안 작은 전환은 Ghost.

**Props** — `items` · `value` · `onChange` · `variant` underline|ghost · `color` dark(기본)|primary(underline).
- Underline: 선택 글자 `text-heading-main`(primary `text-primary-main`) medium + 2px 밑줄, 나머지 `text-body-subtle` normal. hover는 둥근 판(`rounded-md`)이 밑줄 위 4px까지.
- Ghost: 선택 배경 `surface-neutral-subtlest`.
- 탭 종류 기준은 `[미정]` — 임시: 페이지 상단 Underline, 카드 · 패널 안 Box/Ghost, 필터성 전환 Segment.
