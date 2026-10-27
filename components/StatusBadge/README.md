# StatusBadge

상태 전달(대기 · 진행중 · 완료 · 확인 필요 · 취소).

**Props** — `color` neutral|positive|accent|warning|negative · `variant` soft|solid · `size` xs 20|sm 24 · `shape` rounded|pill · `dot` · `border`.
- **accent = 진행중, 항상 파랑** — 프로젝트 색을 따르지 않는다.
- 색은 배지 분류색이라 Primitive를 쓴다(원본 Component v2.3 Status Badge와 같음). 상태 전달에만 쓰고 장식으로 쓰지 않는다.

| color | soft 배경 / 글자 | solid 배경 / 글자 | 테두리(border) |
|---|---|---|---|
| neutral | `color-zinc-100` / `text-body-subtle` | `color-zinc-600` / 흰 글자 | `border-neutral-strong` |
| accent | `color-blue-100` / `color-blue-600` | `color-blue-600` / 흰 글자 | `border-informative-main` |
| positive | `color-green-100` / `color-green-700` | `color-green-600` / 흰 글자 | `border-positive-main` |
| warning | `color-amber-100` / `color-amber-700` | `color-amber-600` / 흰 글자 | `border-warning-main` |
| negative | `color-red-100` / `color-red-700` | `color-red-700` / 흰 글자 | `border-negative-subtle` |
- 글자는 medium, 배지 안 글자는 컴포넌트 기본값 그대로.
