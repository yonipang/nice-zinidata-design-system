# Button

Primary · Neutral · Negative · Inverse 네 세트를 색 역할로 고르고, Style은 중요도로, Size는 놓이는 곳으로 고른다.

**Props** — `color` primary|neutral|negative|inverse · `variant` solid|soft|outline|base|ghost · `size` sm|md|lg|xl|2xl · `iconLeft` `iconRight` `icon`(아이콘만, `label` 필수) · `loading` · `disabled` · `fullWidth` · `state`(시안용 hover|pressed|focus|disabled). 아이콘 이름은 Icons 자산 그룹의 파일 이름.

**Style (중요도)**
| 중요도 | Style | 한 영역에 |
|---|---|---|
| 1순위 — 저장 · 다음 · 조회 · 확인 | `solid` | 1개만 |
| 2순위 — 취소 · 이전 · 다운로드 | `soft` 또는 `outline` 중 프로젝트에서 정한 하나 (AT: soft) | 1~2개 |
| 회색 판 · 툴바 안 | `base` | 제한 없음 |
| 3순위 — 표 · 카드 헤더의 작은 행동, 더보기 | `ghost` | 제한 없음 |

영역 = 페이지 하단 · 모달 · 폼 · 카드 하나. 위험한 주요 행동(삭제 확인)은 Negative solid.

**Size (놓이는 곳)** — sm 28: 표 안 · 필터 바 · 카드 헤더 오른쪽 / md 32: 기본 / lg 36: 폼 · 모달 하단 / xl 40: 입력창(xl) 옆 · 모바일 하단 고정 / 2xl 48: 로그인 · 랜딩 CTA. 입력창 옆 버튼은 입력창과 같은 높이, 한 줄의 버튼은 같은 Size. 모서리는 높이로 정해진다(28·32 `rounded-control-sm`, 36·40 `control-md`, 48 `control-lg`).

**상태** — hover · pressed는 state layer(덧씌우는 판)만 바뀐다: Neutral 밝은 스타일 `state-layers-on-neutral-*`, Neutral solid `state-layers-inverse-*`, Primary solid `on-brand`, Primary 나머지 `brand`, Negative solid `on-negative`, 나머지 `negative`. loading은 모양 그대로 스피너만(레이블 색은 default와 같다). disabled는 색 역할과 상관없이 같은 회색: solid · soft `fill-disabled` + 테두리 없음, outline · base 배경 그대로 + `border-disabled`, 글자 `text-disabled`. 키보드 focus는 바깥 2px 간격 + 2px 링(primary `border-primary-subtle` · neutral `border-neutral-stronger` · negative `border-negative-subtle` · inverse `border-inverse-subtle`).

**Do / Don't**
- 버튼 묶음은 오른쪽 정렬, 주요 행동이 가장 오른쪽(취소 · 저장 순).
- 표 안 줄마다 반복되는 버튼은 `color="neutral" variant="base" size="sm"` — solid 금지.
- solid에 테두리를 넣지 않는다. 버튼에 그림자를 넣지 않는다. Shape는 rounded만(pill과 섞지 않는다).
