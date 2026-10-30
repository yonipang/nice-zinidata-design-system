# MapListItem

지도 패널의 목록 한 줄(피그마 Map List). `title` · `addresses`[] · `labels`[] · `badges`[] · `thumbnail` · `active` · `onClick`.
- 여백 20 · 사이 8, 이름 `text-base` bold heading, 주소 `text-sm` `text-body-subtle`(사이 6), 정보는 세로선(1×12 `divider-neutral-strong`)으로 구분, 배지 CategoryBadge white + 테두리, 오른쪽 사진 72(모서리 12).
- 아래 `divider-neutral-subtle`, hover state layer, 고른 줄 `surface-primary-subtlest`. 누르면 지도의 같은 핀이 고른 상태가 되게 연결한다.
- 목록 **마지막 줄은 아래 구분선 없음**.
