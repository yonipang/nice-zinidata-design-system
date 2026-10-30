# SelectWithLabel

레이블 + Select 1~3개 + 버튼 + 도움말(피그마 Select With Label). FormField에 Select를 넣는 것과 같은 구성을 한 번에 쓰는 편의 컴포넌트.

**Props** — `label` · `selects`[Select props 1~3개] · `size` md|xl(기본)|2xl · `align` vertical|horizontal · `required` · `tooltip` · `helper` · `error` · `action`(옆 버튼).
- Select가 여러 개면 가로로 8 간격, 같은 폭으로 나눈다. 옆 버튼은 Neutral base, Select와 같은 Size.
- 레이블 · 도움말 규칙은 FormField와 같다.
