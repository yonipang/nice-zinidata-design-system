# ContentsHeader

콘텐츠 블록 · 카드의 제목(피그마 Contents Header · Contents Header Bullet).

**Props** — `type` contents|card · `titleSize` sm · md · base · lg(기본, card는 md) · xl · 2xl · `icon` · `bullet` · `badge` · `title` · `tooltip` · `description` · `right`(버튼 · Select · Text Button · Segment) · `onMore`(⋮ Icon Button) · `divider`.
- 제목 **semibold** `text-heading-main`(sm 14 · md 15 · base 16 · lg 18 · xl 20 · 2xl 24), 설명 `text-sm` `text-body-subtle`(사이 4).
- 왼쪽 아이콘 20 / 불릿(3px 점, 20 칸), 배지는 CategoryBadge white + 테두리, 오른쪽 요소 사이 8. 더보기는 제목이 base 이하면 Icon Button sm, 그 이상이면 md.
- **card**: 카드 맨 위에 넣는 형태 — 여백 20/20/0/20, 제목 ↔ 구분선 16. **contents**: 여백 없음, 구분선 24.
