# InputQuantity · InputQuantityGroup

수량 입력(− 값 +).

**InputQuantity** — 입력창 양옆에 **Neutral base 아이콘 버튼**(입력창과 같은 Size), 사이 6(`spacing-1-5`), **전체 폭 188 고정**(입력창이 남는 폭: md 112 · xl 96 · 2xl 80) · 값 가운데. Props: `value` · `onChange(number)` · `size` md|xl|2xl · `variant` · `min` · `max` · `step` · `suffix` · `state` · `negative`. 최소 · 최대에 닿으면 해당 버튼 disabled.

**InputQuantityGroup** — 한 판(`input-bg` + `input-border`, 높이 규칙 모서리, 폭 160) 안에 **ghost 아이콘 버튼 − 값 +**. Props: `buttons` outside(값 양옆 구분선 `border-neutral-main`, 버튼은 판 높이)|inside(버튼 한 단계 작게, 판 안쪽 여백 4) · 나머지는 같음. 값이 0이면 `text-body-subtle`, 있으면 `text-heading-main`(`text-sm`).
- 장바구니 · 인원처럼 작은 숫자를 바꿀 때 Group, 폼 안에서 직접 입력도 할 때 InputQuantity.
