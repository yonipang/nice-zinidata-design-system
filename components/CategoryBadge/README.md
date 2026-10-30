# CategoryBadge

분류 · 카테고리 표시. 19색 팔레트 — 분류색은 Primitive를 직접 쓰는 예외.

**Props** — `color` rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|white · `size` xs|sm · `shape` rounded|pill · `border`.
- soft: 배경 `color-{c}-100`, 글자 `color-{c}-700`(blue만 600), 테두리 `color-{c}-500`. gray는 zinc-100 · zinc-800.
- 상태(완료 · 오류)를 나타낼 때는 StatusBadge를 쓴다.

## 피그마와 맞춘 값
- 크기 · 여백 · 모서리는 StatusBadge와 같다(xs 20 · sm 24, 위아래 2 · 좌우 6 = 모서리 `rounded-sm` 6, pill 좌우 10).
- soft: 색-100 판 + 색-700(blue 600) 글자, gray는 `zinc-100` + `text-body-main`, white는 `surface-main` + `text-body-main`. solid(`variant="solid"`): 색-600(red 700) 판 + 흰 글자. 테두리: 색-500(white는 `border-neutral-main`).
- 메뉴 · 카드 · 헤더 안에 넣는 배지는 white + 테두리.
