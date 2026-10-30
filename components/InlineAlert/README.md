# InlineAlert

페이지 · 표 · 폼 위의 **한 줄 안내**(피그마 Inline Alert).

**Props** — `type` basic|information|warning|negative|positive · `variant` soft|line · `title` · `children`(설명) · `icon`(false로 숨김) · `action`(오른쪽 버튼, Neutral base md) · `onClose`(Icon Button xs).
- 아이콘 20(information-2 · alert · error-warning · checkbox-circle, Icon Set) + 제목 `text-sm` **semibold**(좌우 4) + 설명 `text-sm` **medium**(제목과 12), 사이 8.
- 색: 판 `surface-*-main`, 글자 `text-*-main`, 아이콘 `icon-*-main` — basic은 `surface-subtlest` + `text-heading-main` + `icon-body-main`.
- **soft**: 여백 8/20, 모서리 없음(가로로 꽉 차는 띠). **line**: 여백 12/20, 테두리 `border-*-main`(basic `border-neutral-strong`), `rounded-4xl`(20 = 좌우 여백 20).
- 여러 줄 · 버튼 묶음이 필요하면 ExpandedAlert, 잠깐 떴다 사라지는 알림은 Toast.
