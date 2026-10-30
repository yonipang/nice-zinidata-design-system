# Select

목록에서 하나 고르기. 트리거와(열렸을 때) 목록 판을 그린다.

**Props** — `options` [{value,label,disabled} · {heading}(목록 안 섹션 제목)] 또는 문자열 배열 · `value` · `defaultValue` · `placeholder` · `icon`(왼쪽 아이콘) · `heading`(목록 맨 위 제목) · `variant` line|soft|ghost · `size` sm 28|md 32|xl 40|2xl 48 · `shape` rounded(기본)|pill · `negative` · `state` · `open` · `onToggle` · `onChange(value)` · `width`.
- ghost는 표 · 툴바 안 선택(정렬, 상태 변경)에만. 검색창과 같은 줄의 Select는 검색창과 같은 스타일.
- 목록 판은 `surface-main` + `elevation-3`, 모서리 `rounded-surface-xs`, 안쪽 항목은 중첩 모서리(12 − 4 = `rounded-md`). 선택 항목 `text-primary-main` + 체크.
- read-only를 제공하지 않는다.
- **soft는 빈 값 안내(placeholder) 없이 기본값을 골라 둔 상태로 쓴다.** 흰 바탕의 회색 판 + 연한 안내 글자 조합은 비활성처럼 보이기 때문. 필터 · 기간처럼 soft를 쓰는 자리는 대부분 기본값("최근 7일", "전체")이 있으므로 그 값을 보여준다. 꼭 비워 둬야 하면 line을 쓴다.
- **열고 닫기**: 트리거를 누르면 열리고, 열린 상태에서 **판 바깥을 누르거나 Esc**를 누르면 닫힌다. 값을 고르면 닫힌다(기간 선택은 종료일까지 고른 뒤 바깥을 눌러 닫음). `open`을 주지 않으면 컴포넌트가 스스로 열고 닫고, 주면 부모가 `onToggle`(· `onClose`)로 제어한다.
- 목록 판은 **떠 있는 판**(트리거 아래 4, 같은 폭, `elevation-3`) — 열려도 아래 내용을 밀어내지 않는다.
- **옵션 항목 기본 크기 = lg**(Menu List lg: 높이 36 · 글자 `text-md`(15/24) · `text-heading-main`, 선택 `text-primary-main` **semibold**, 항목 사이 2).
- 목록이 길면 판 안에서 스크롤 — 스크롤바는 피그마 Asset · Scroll/basic(폭 6, 위아래 4 띄움, 트랙 없음, 손잡이 `scrollbar-thumb`, 끝 둥글게). 디자인시스템 안의 모든 스크롤 영역에 같은 모양이 적용된다(좁은 곳은 mini 3 — `ds-scroll--mini`).
- 선택된 값 글자는 medium(피그마 선택값 `text-*-medium`). 목록 제목은 `text-xs` `text-body-subtle`, 섹션 사이 구분선.
- **Shape=pill**: 끝이 완전히 둥근 판(`rounded-full`), 좌우 여백 한 단계 넓게. 모바일 필터 줄 · 칩처럼 늘어선 조건에 쓴다. 폼 안의 Select는 rounded. 목록 판은 pill이어도 `rounded-surface-xs`.
