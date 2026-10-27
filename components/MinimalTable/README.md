# MinimalTable

모바일 표(~767).

**Props** — `columns` [{key,label,numeric,legendColor,deltaKey,render}] · `rows`. `deltaKey`가 가리키는 값 {type,value}은 숫자 아래 증감으로 붙는다.
- 헤더는 **항상 흰색**(`table-header-main`), 헤더 글자 text-xs-normal `text-body-subtle`, 높이 24. 본문 행 36, 구분선 없음, 좌우 여백 없음.
- 숫자와 그 열 헤더는 오른쪽 정렬. 행이 많으면 가로 스크롤 또는 카드 목록으로 전환.
