# Toast

잠깐 떴다 사라지는 작업 결과 알림.

**Props** — `type` dark|basic|information|warning|negative|positive · `children` · `action`(버튼 하나) · `onClose`.
- 그림자 `elevation-5`, 모서리 `rounded-surface-sm`. dark는 `surface-inverse-main` + `text-inverse-body-main`, 안의 버튼은 Inverse ghost.
- 화면에 남아야 하는 내용은 InlineAlert.
