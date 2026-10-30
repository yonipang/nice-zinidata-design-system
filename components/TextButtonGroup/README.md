# TextButtonGroup

판 없이 글자와 세로 구분선으로 나눈 전환 — 정렬 기준, 단위 전환.

**Props** — `items` · `value` · `onChange` · `style` default|primary · `fontSize` xs 13|sm 14|md 15(기본)|base 16.
- 선택 안 됨 `text-body-subtle` normal, 선택 medium — default `text-heading-main`, primary `text-primary-main`. 아이콘은 같은 색 단계.
- 구분선 `border-neutral-strong` 1px(높이 = 글자 크기), 간격 xs 6 · sm 8 · md 10 · base 12.
- 판이 있는 전환이 필요하면 Segment.
