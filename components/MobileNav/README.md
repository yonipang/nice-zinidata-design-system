# MobileNav · TitleBar · NavDrawer

모바일 화면의 상단 바와 전체 메뉴.

**MobileNav**(피그마 Mobile/NavLogo) — `logo` · `align` left|center · `actions` · `onMenu`(햄버거 → NavDrawer) · `scrolled`. 높이 56, `surface-main`, 왼쪽 18 · 오른쪽 8, 오른쪽 Icon Button lg.

**TitleBar**(피그마 Title bar) — `title` · `badge` · `align` left|center · `onBack`(왼쪽 arrow-left) · `onClose` · `actions` · `scrolled`. 높이 56, 좌우 8, 제목 `text-base` semibold `text-heading-main`(좌우 2), 오른쪽 Icon Button lg 사이 4. 하위 화면 · 팝업 · 바텀시트 맨 위.

**NavDrawer**(피그마 Mobile/NavDrawer) — `profile`{name,sub,action} · `groups`[{heading,items}] · `value` · `onChange`. 위아래 8, 프로필(여백 12/16, Avatar 48 + 이름 `text-sm` medium + 보조 `text-xs`, 오른쪽 버튼), 묶음 사이 `divider-neutral-main`. 항목은 GNB 2depth 메뉴와 같은 모양(이름 `text-base` medium + 설명 `text-xs`, 선택 `text-primary-main` semibold).

스크롤되면(`scrolled`) 바 아래에 `divider-neutral-subtle` 1.

**hover 없음** — 모바일 컴포넌트(MobileNav · TitleBar · NavDrawer)는 hover 상태를 두지 않고, 누르는 동안만 pressed state layer(`state-layers-on-neutral-pressed`)를 보인다. NavDrawer 메뉴 항목은 **모서리 없이** 화면 폭을 꽉 채우는 줄이라 pressed 판도 각진 모양. 터치 기기에서는 다른 컴포넌트도 hover를 끈다.
