# SegmentPrimary

2~5개 중 하나를 고르는 전환(그래프/표, 기간). 피그마 **Segment Primary Button**과 같은 컴포넌트다. Neutral · Primary · Padded는 서로 다른 컴포넌트이며 공통 컴포넌트에 색만 바꿔 쓰지 않는다.

**Props** — `items`(문자열 또는 {value,label,icon}) · `value` · `onChange` · `size` sm 28|md 32|lg 36|xl 40|2xl 48 · `fill`(폭 꽉 채움).
- 바깥 `bg-main` + `border-neutral-strong`. **항목 · 선택 판 모서리 = 바깥 판과 같은 단계**(sm · md `control-sm` 8, lg · xl `control-md` 12, 2xl `control-lg` 16). 항목 사이 구분선 16 높이 `border-neutral-main` — **선택 항목 양쪽은 숨김**. 선택: `surface-primary-subtlest` + 테두리 `border-primary-subtle` + `elevation-1`, 글자 `text-primary-main` medium, hover `state-layers-brand-hover`.
- 선택 안 됨: 글자 `text-body-main` normal. hover는 state layer만 — selected와 다르게 보인다.
- 모서리는 높이 규칙(control-sm · md · lg). 글자: sm 13 · md 14 · lg 15 · xl · 2xl 16.
- **선택 이동 애니메이션**: 선택 판이 새 항목으로 미끄러져 이동 · 폭 맞춤(220ms, `cubic-bezier(0.2, 0, 0, 1)`), 첫 표시와 "동작 줄이기" 설정에서는 정지.
- 고르는 기준: 흰 바탕 화면의 기본 전환 Neutral, 선택을 강하게 보여야 하면 Primary, 회색 판 · 툴바 안이나 카드 헤더처럼 가벼운 전환은 Padded. 필터성 전환은 Segment, 페이지 · 섹션 전환은 Tabs.
