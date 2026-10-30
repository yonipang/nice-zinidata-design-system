# Breadcrumb

현재 위치까지의 경로(피그마 Navigation/Breadcrumb). 마지막 항목이 현재 페이지.

**Props** — `items`[{label,icon,onClick}] · `home`(맨 앞 집 아이콘, home-2) · `onHome` · `background` light|dark.
- 사이 6, 항목 `text-sm` normal `text-body-subtle` → hover `text-body-main`, **현재 `text-heading-main` + 밑줄**(누를 수 없음), 다른 항목은 hover 때 밑줄. 구분자 "/" `text-sm` medium `text-placeholder`. 아이콘 14.
- dark: 같은 단계의 inverse 색. 페이지 제목(PageHeader) 위에 둔다.
