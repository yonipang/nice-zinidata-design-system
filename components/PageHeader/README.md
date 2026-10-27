# PageHeader

페이지 맨 위의 제목 영역. 경로(breadcrumb) · 작은 제목 · 제목 · 설명 · 오른쪽 버튼을 한 줄 구성으로 놓는다.

**Props** — `title` · `titleSize` xl|2xl(기본)|3xl · `breadcrumb` 문자열 배열 · `smallTitle` · `description` · `tooltip` · `actions` · `divider` · `background` light|dark · `children`(제목 아래 콘텐츠 슬롯: 기간 탭 · 필터).
- 페이지 제목은 `text-2xl-bold`(모바일 `text-xl-bold`), 3xl은 보고서 표지처럼 큰 제목에만. 설명은 `text-md-normal` + `text-body-subtle`.
- 작은 제목은 `text-primary-main` medium — 보고서 섹션의 질문형 제목 위 분류 이름.
- 오른쪽 버튼은 페이지의 주요 행동 1개만 solid(primary), 나머지는 Neutral base. 크기 md.
- 제목 ~ 첫 섹션 간격은 `spacing-8` 32(모바일 24). divider를 켜면 아래 `divider-neutral-subtle`.
