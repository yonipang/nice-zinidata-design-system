# PageIndex

긴 리포트 · 문서 페이지 안의 목차(피그마 Nav Item/Page Index Item). 누르면 그 절로 이동하고, 스크롤 위치에 맞춰 현재 절을 표시한다.

**Props** — `items`[{value,label,depth 1|2,badge}] · `value`/`defaultValue` · `onChange` · `background` light|dark.
- 항목 높이 40, 여백 8/12, 모서리 `rounded-control-md`. 기본 `text-md` normal `text-body-main` → **선택 `surface-neutral-subtler` + `text-md` medium `text-heading-main`**, hover state layer.
- 2단계는 왼쪽 24 들여 쓰고 `text-sm`(높이 36).
