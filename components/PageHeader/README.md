# PageHeader

페이지 맨 위 제목 영역(피그마 Page Header Wide · Narrow · Centered).

**Props** — `layout` wide(기본)|narrow|centered · `type` simple|background · `background` light|dark · `titleSize` lg · xl · 2xl(기본) · 3xl · `breadcrumb`[] · `smallTitle`(centered 부제목) · `title` · `tooltip` · `description` · `actions`(오른쪽 버튼) · `children`(콘텐츠 슬롯: 탭 · 필터 등) · `divider`.
- 경로(Breadcrumb) → 제목 16, 제목 · 설명 사이 8, 제목 줄 ↔ 콘텐츠 슬롯 · 구분선 32.
- 제목 **bold** `text-heading-main`(xl 20 · 2xl 24 · 3xl 30, narrow는 lg 18부터), 설명 `text-sm` `text-body-main`, 부제목 `text-sm` semibold `text-body-subtle`(dark `text-inverse-body-subtle`), 도움말 question 16.
- **wide**: 버튼이 제목 줄 오른쪽 아래 정렬. **narrow**(모바일 · 좁은 칸): 버튼이 제목 아래로(사이 16). **centered**: 모두 가운데, 경로 → 제목 32.
- **background**: `surface-primary-subtlest` 판 · 여백 48/40 · `rounded-surface-xl`(32), 구분선 없음.
- 구분선 `divider-neutral-subtle`.
