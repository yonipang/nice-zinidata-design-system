# SegmentPadded

2~5개 중 하나를 고르는 전환(그래프/표, 기간). 피그마 **Segment Padded Button**과 같은 컴포넌트다. Neutral · Primary · Padded는 서로 다른 컴포넌트이며 공통 컴포넌트에 색만 바꿔 쓰지 않는다.

**Props** — `items`(문자열 또는 {value,label,icon}) · `value` · `onChange` · `size` sm 28|md 32|lg 36|xl 40|2xl 48 · `fill`(폭 꽉 채움).
- 바깥 `surface-subtler` + 여백 2(테두리 없음), 항목 · 선택 판 모서리는 중첩 모서리(바깥 − 2): sm · md 6(`rounded-sm`), lg · xl 10(`rounded-lg`), 2xl 14(`rounded-2xl`). 구분선 16 높이 `border-neutral-strong` — **선택 항목 양쪽은 숨김**. 선택: 흰 판(`button-base-neutral-bg`) + `border-neutral-main` + `elevation-1`, 글자 `text-heading-main`.
- 선택 안 됨: 글자 `text-body-main` normal. hover는 state layer만 — selected와 다르게 보인다.
- 모서리는 높이 규칙(control-sm · md · lg). 글자: sm 13 · md 14 · lg 15 · xl · 2xl 16.
- **선택 이동 애니메이션**: 선택 판이 새 항목으로 미끄러져 이동 · 폭 맞춤(220ms, `cubic-bezier(0.2, 0, 0, 1)`), 첫 표시와 "동작 줄이기" 설정에서는 정지.
- 고르는 기준: 흰 바탕 화면의 기본 전환 Neutral, 선택을 강하게 보여야 하면 Primary, 회색 판 · 툴바 안이나 카드 헤더처럼 가벼운 전환은 Padded. 필터성 전환은 Segment, 페이지 · 섹션 전환은 Tabs.
