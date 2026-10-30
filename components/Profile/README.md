# Profile · ProfileButton · Avatar

**Avatar**(피그마 Avatar) — `size` 2xs 20 · xs 24 · sm 28 · md 32 · lg 36 · xl 40 · 2xl 48 · 3xl 56 · 4xl 64, `src`(사진). 사진이 없으면 `surface-subtle` 원 + 흰 User 아이콘(크기의 절반) + 옅은 테두리.

**Profile**(피그마 Profile Horizontal · Vertical) — `direction` horizontal|vertical · `size` · `name` · `description` · `src` · `social`(이름 옆 mini 소셜 배지).
- 이름 `text-sm` medium `text-heading-main` + 설명 `text-xs` `text-body-subtle`, 아바타와 사이 12. 세로형은 가운데 정렬.

**ProfileButton**(피그마 Profile Button) — `size` · `name` · `description` · `src` · `showImage` · `showLabel` · `icon`(기본 chevron-down) · `onClick`. 누르면 UserMenu를 연다(GlobalNav · ReportNav).
