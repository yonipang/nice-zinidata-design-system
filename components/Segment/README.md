# Segment

2~5개 중 하나를 고르는 전환(그래프/표, 기간).

**Props** — `items`(문자열 또는 {value,label,icon}) · `value` · `onChange` · `color` neutral|primary · `size` sm|md|lg · `fill`(폭 꽉 채움).
- 선택: neutral `surface-subtlest`, primary `surface-primary-subtlest` + `text-primary-main`, 선택 항목에 `elevation-1`. 선택 글자는 medium, 나머지 normal.
- hover는 state layer만(`on-neutral`, primary 선택 `brand`) — selected와 다르게 보여야 한다.
- 필터성 전환은 Segment, 페이지 · 섹션 전환은 Tabs.
