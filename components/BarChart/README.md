# BarChart

막대 기본형(세로 묶음 막대).

**Props** — `categories` · `series` [{name,data,color?}] · `height` · `width`(viewBox 폭) · `legend` · `label`(접근성 이름).
- 시리즈 색은 Primitive 팔레트를 직접 쓰는 예외. **임시 순서**(확정 전): `color-blue-600` · `color-cyan-500` · `color-violet-500` · `color-amber-400` · `color-emerald-500` · `color-rose-400` (`DS.chartSeries`).
- 축 · 격자 `divider-neutral-strong` · `divider-neutral-main`, 축 글자 12px `text-body-subtle`.
- 카드에 넣을 때 최소 높이 작은 차트 240 · 큰 차트 320. 표를 붙일 때는 Table의 "차트 아래 표" 규칙. 범례(`DS.ChartLegend`)는 시리즈가 2개 이상일 때.
