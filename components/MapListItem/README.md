# MapListItem

지도 패널의 목록 한 줄(피그마 Map List). `title` · `addresses`[] · `labels`[] · `badges`[] · `thumbnail` · `hover`(지도 핀과 연결된 hover) · `onClick`. **선택 상태 없음**(피그마 Map List = default · hover).
- 여백 20 · 사이 8, 이름 `text-base` bold heading, 주소 `text-sm` `text-body-subtle`(사이 6), 정보는 세로선(1×12 `divider-neutral-strong`)으로 구분, 배지 CategoryBadge white + 테두리, 오른쪽 사진 72(모서리 12).
- 아래 `divider-neutral-subtle`, hover state layer. 누르면 MapLayout이 그 매장 보고서를 열고 지도 핀을 고른 상태로 바꾼다(목록 줄은 색이 바뀌지 않음).
- 목록 **마지막 줄은 아래 구분선 없음**.
