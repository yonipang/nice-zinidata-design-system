# ButtonSet · MenuButtonSet

모달 · 시트 · 메뉴 하단의 버튼 묶음.

**ButtonSet props** — `buttons`[{label,color,variant,onClick}] · `layout` fill(폭을 나눠 채움, 기본)|fit(오른쪽 맞춤) · `align` horizontal|vertical · `size` md|lg|xl(기본) · `left`(fit일 때 왼쪽 버튼) · `indicator`(모바일 홈 표시줄).
- 위 여백 20, 버튼 사이 8. 마지막 버튼이 주요 행동(Primary solid), 앞은 2순위(soft) — 프로젝트가 outline이면 `variant`로 바꾼다.
- 가로는 주요 행동이 오른쪽(취소 · 저장 순), 세로는 주요 행동이 위.
- 모바일 하단 시트는 vertical + indicator(134×5, `fill-hint`).

**MenuButtonSet props** — `buttons` · `type` cta(기본)|text · `align` justify|center|right|left.
- 드롭다운 · 필터 메뉴 맨 아래 줄. 여백 8, 배경 `button-base-neutral-bg`.
- cta 2개: 앞 Primary base + 뒤 Primary solid(md). cta 1개: Neutral base. text: TextButton 2xs.
