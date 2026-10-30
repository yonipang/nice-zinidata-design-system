# Toast

동작 결과를 **잠깐 보여주고 사라지는** 알림(피그마 Toast). 화면 아래 가운데(모바일) · 오른쪽 아래(PC)에 띄우고 4초 뒤 사라진다.

**Props** — `type` dark(기본)|basic|information|warning|negative|positive · `title` · `children` · `icon` · `action`(Inverse soft md 버튼) · `onClose`(Icon Button xs).
- 여백 12/20, `rounded-surface-sm`, 테두리 `border-neutral-strong`, 그림자 `elevation-5`, 최대 폭 640. 구성은 InlineAlert와 같다(아이콘 20 + 제목 semibold + 설명 medium).
- 판: dark `surface-inverse-main` · information `fill-informative-main` · warning `fill-warning-main`(⚠ 흰 글자 대비 낮음 — 사용자 결정으로 유지) · negative `fill-negative-main` · positive `fill-positive-main` — 글자 · 아이콘 흰색. basic은 `surface-main` + `text-heading-main` + 아이콘 `icon-primary-main`(닫기 neutral).
