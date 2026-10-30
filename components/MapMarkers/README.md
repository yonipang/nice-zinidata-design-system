# 지도 위 표시 — MapCluster · MapRectCluster · MapBadge · MapMarker · MapCallout · MapTip

지도 라이브러리의 사용자 오버레이(CustomOverlay 등)에 넣어 쓰는 표시들(피그마 Map Item/Indicator/*).

| 컴포넌트 | 피그마 | 모양 |
|---|---|---|
| `MapCluster` | Circle Cluster | 76 · 96 · 120 · 150 · 180 원, `map-cluster-strong` + 흰 글자(이름 `text-xs` medium · 값 md/xl bold). 고른 것 = `bg-main` + `border-primary-subtle` 2 + primary 글자. `scale`(색 단계)이면 파랑 위에 `map-cluster-ring-strong`(흰 60%)을 겹쳐 연하게 + 테두리 `fill-primary-subtlest` · 글자 primary |
| `MapRectCluster` | Rectangle Cluster | 여백 12/16/8/16 · `rounded-3xl`, outline(`bg-main` + `border-primary-accent` + primary 값 `text-lg` bold) · solid(`fill-primary-main` + 흰). 아래 배지 · 위 말풍선 |
| `MapBadge` | _Base/Badge | pill · `text-xs` bold, basic(primary) · up(increase) · down(decrease) × outline · solid |
| `MapMarker` | Minimal Marker | 핀 34×42 — 기본 `fill-primary-main` + 흰 점 / 고른 것 흰 판 + `border-primary-accent` + 파란 점, 아래 그림자, 이름 `text-xs` semibold(흰 테두리 글씨), 가운데 아이콘 가능 |
| `MapCallout` | Callout Marker | `bg-main` + `border-primary-accent` · `rounded-xl` · 아래 꼬리, 이름 `text-xs` body-subtle + 값 `text-sm` bold, 제목 있으면 파란 머리, 오른쪽 위 배지 |
| `MapTip` | Top Badge | `surface-inverse-main`(피그마도 Primitive `zinc/800`에서 교체) + 흰 `text-sm` semibold, 아래 꼬리 — 핀 · 묶음 위 말풍선 |
모두 누를 수 있는 버튼(`aria-pressed`로 고른 상태). 지도 확대 단계에 따라 원형 → 네모 묶음 → 핀 순으로 바꿔 쓴다.
