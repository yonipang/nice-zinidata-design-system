# LocationSelector

지역 고르기(피그마 Location selector/Navigation · Select Item · _base/Location selector/*).

**Props** — `data` { 시도: { 시군구: [읍면동] } } · `defaultValue` [시도, 시군구, 읍면동] · `onApply(값)`.
- 위 단계 칩: 핀(primary) + 시도 › 시군구 › 읍면동, **세 칸이 남는 폭을 채우고(글자가 긴 칸이 더 넓게) 글자는 가운데**(그래도 길면 …) — 지금 단계 `text-primary-main` semibold, 고른 단계 body-main, 아직 못 가는 단계 disabled. 누르면 그 단계로 돌아감.
- 격자: 3열 · 칸 높이 40 · `surface-main` + 칸 경계 `border-neutral-main` · `text-sm`. 고른 칸 `surface-primary-subtlest` + primary semibold. 고르면 다음 단계로 자동 이동.
- 아래 적용 버튼(Primary solid lg, 꽉 채움) — "경기도 수원시 영통구 영통동 적용".
- 판: `surface-main` · `border-neutral-stronger` · `rounded-3xl`. **반응형**: 판 폭 300 이하이면 2열.
- 격자 **마지막 줄은 아래 구분선 없음**(아래 적용 버튼 판의 위 구분선과 겹치지 않게).
