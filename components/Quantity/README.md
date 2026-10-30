# Quantity

큰 숫자로 수량을 바꾸는 조절기(피그마 Quantity) — 인원 · 개수처럼 숫자 자체가 주인공일 때. 폼 안에서 직접 입력도 해야 하면 InputQuantity.

**Props** — `value` · `defaultValue` · `onChange(number)` · `size` xs|sm|md(기본)|lg|xl|2xl · `min` · `max` · `step` · `state`.
- 구성: Neutral base 아이콘 버튼(−) + 숫자 + (+). 버튼 크기 xs · sm 28, md 32, lg 36, xl 40, 2xl 48.
- 숫자 semibold `text-heading-main`, tabular-nums: xs · sm 15 · md 16 · lg 18 · xl 24 · 2xl 30. 숫자 칸 최소 폭 56 · 64 · 72 · 80 · 96 · 112(자릿수가 바뀌어도 들썩이지 않게).
- 최소 · 최대에 닿으면 해당 버튼 disabled.
