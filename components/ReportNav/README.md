# ReportNav

리포트 화면 맨 위 바(피그마 Navigation/Report Navigation). GNB 대신 쓰며, 메뉴 대신 **지금 보고 있는 리포트 제목**(분석 지역 | 업종)을 보여준다.

**Props** — `logo` · `title` · `align` left|center · `width` fill|default|wide · `actions`(엑셀 다운로드 · 공유 등 버튼) · `user`{name} · `onProfile` · `onLogout`.
- 판은 GNB와 같다: 높이 56, `surface-main`, 아래 `divider-neutral-subtle`, 좌우 48, 영역 사이 24.
- 제목 `component-gnb-menu`(17 medium) `text-heading-main`.
- 오른쪽: 버튼 묶음(사이 12, Neutral base · Primary outline md) → 프로필(Avatar md 32 + 이름 + chevron-down, **누르면 UserMenu**: 마이페이지 · 설정 · 로그아웃) → 로그아웃(Text Button 2xs **neutral-subtle**(muted) + logout 아이콘), 사이 16.
