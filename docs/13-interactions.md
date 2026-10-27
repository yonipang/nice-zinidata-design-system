# 13. 동작 · 인터랙션

컴포넌트의 동작은 **아직 전체 검토 전**이다. 아래 "정해진 동작"은 기준 문서(적용규칙 · 작업요약)에 이미 정해진 것만 담았다. 여기에 없는 동작은 **임의로 만들지 않고 묻는다.**

## 정해진 동작

| 동작 | 규칙 |
|---|---|
| hover · pressed · focus | state layer만 덮는다(글자 · 배경 색 그대로). 모바일은 hover 없음 — hover 모양은 누르는 동안 표시 |
| 키보드 focus | 버튼 · Icon · Toggle · Square · Text · Social Button, 탭 · Segment는 focus 링(버튼 색을 따름), 입력창 · Filter는 테두리만 primary |
| 입력창 상태 | hover 회색 테두리 한 단계 진하게, focus 테두리 primary(바깥 링 없음), 값이 있으면 아이콘이 입력 글자와 같은 색 |
| Map Search | focus + 빈 값 → Location selector, focus + 입력값 있음 → 검색어 목록 |
| loading | 모양 그대로 스피너만, 레이블 색 유지 |

## 검토 후 채울 것

컴포넌트 검토가 끝나면 정해진 동작(예: 검색어 입력 시 일치 글자 강조, 자동완성 키보드 이동, 표 정렬)을 위 표에 추가하고 `CHANGELOG.md`에 기록한다. 그 전까지 이런 동작이 필요하면 **만들기 전에 묻는다.**
