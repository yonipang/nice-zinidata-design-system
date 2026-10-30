# Chip

고른 조건 · 태그 · 빠른 선택(피그마 Chip).

**Props** — `variant` neutral(흰 판)|soft(회색 판)|ghost(판 없음)|primary(채움) · `color` gray|brand · `size` md(32)|sm(26)|xs(24)|2xs(18) · `shape` rounded|pill · `border` · `icon` · `value`(이름 뒤 굵은 값) · `onRemove`(✕) · `onClick` · `selected`.
- 여백: 판 4 + 글자 묶음 4 = 8 = 모서리 `rounded-md`(sm 3/4, 2xs 2/2 · `rounded-sm`). pill은 좌우 8 + 4.
- 글자 medium(md 15 · sm 14 · xs 13 · 2xs 12), 아이콘 16(md) · 14.
- 색: gray = `text-body-main`(neutral `surface-main` · soft `surface-subtler`), brand = `text-primary-main`(soft `surface-primary-subtler`, primary `fill-primary-main` + `text-on-primary`). primary · gray는 `fill-neutral-main` + `text-inverse-heading-main`. 테두리 gray `border-neutral-main` · brand `border-primary-strong`.
- 고른 필터 표시는 border + 지우기(✕).
- **선택 옵션** `selectable` · `selected` · `defaultSelected` · `onChange` — 새 모양 없이 기존 모양을 그대로 쓴다: 꺼짐 = 지정한 `variant` · `color`, **켜짐 = primary · brand + 왼쪽 ✓**. 누르면 켜고 끄고 `aria-pressed`로 상태를 알린다. 피그마에서는 선택된 칩을 Style=primary · Color=brand · ShowLeftIcon(check)으로 바꿔 그린다.
