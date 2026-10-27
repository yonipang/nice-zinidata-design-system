# FormField

레이블 → 입력창 → 도움말 · 오류 문구를 세로 간격 8로 묶는다.

**Props** — `label` · `required`(* `text-primary-main`) · `optional`("(optional)" `text-body-subtle`) · `helper` · `error`(있으면 helper 대신, `text-negative-main` text-xs-normal) · `children`(Input · Select).
- 레이블은 `text-body-main` · text-md-medium. 오류 문구는 입력창 바로 아래, 입력창에는 `negative`를 함께 켠다.
- 글자 수 표시는 Text Area에만.
