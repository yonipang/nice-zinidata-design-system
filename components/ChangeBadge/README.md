# ChangeBadge

증감 표시 — increase(빨강) · decrease(파랑) 전용.

**Props** — `type` increase|decrease|neutral · `size` md|sm · `background`(연한 판) · `children`(부호 포함 값, 예 "+3.2%", "−1.4%p").
- 글자 `text-increase-main` · `text-decrease-main`, 배경 `surface-increase-main` · `surface-decrease-main`.
- 증감 화살표 아이콘은 Icon Set에서 아직 받지 못해 부호(+ · −)로만 표시한다.

## 피그마와 맞춘 값
- `label`(앞 글 "이전 기간 대비" · "전월대비") `text-xs` normal `text-body-subtle` + 값 `text-xs` **medium** — 증가 `text-increase-main` ▲ · 감소 `text-decrease-main` ▼ · 변화 없음 `text-body-subtle`(배경형은 `text-body-main`). 사이 4.
- `background`: 값에 여백 2/4 · `rounded-xs`(4, 좌우 여백과 같게) 판(증가 `surface-increase-main` · 감소 `surface-decrease-main` · 없음 `fill-neutral-subtlest`).
- `type`은 increase · decrease · neutral(up · down도 받음). 숫자 카드의 변화는 StatisticNumber를 쓴다.
