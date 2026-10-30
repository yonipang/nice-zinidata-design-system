# SplitButtonGroup

여러 버튼을 한 판에 붙인 묶음 — 보기 방식 전환, 이전 · 다음 같은 짝 행동.

**Props** — `items`(문자열 또는 {value,label,icon,disabled}) · `value`(선택) · `onChange` · `type` text|icon(아이콘 + 글자) · `size` sm~2xl · `align` horizontal|vertical.
- 바깥 `bg-main` + `border-neutral-strong`, 모서리 **모든 크기 `rounded-xl` 고정**(높이 규칙의 예외, 확정). 항목은 `button-base-neutral-bg`, 사이 구분선 `border-neutral-main`.
- 선택은 **파란 글자**(`text-primary-main` · `icon-primary-main`)만, 배경은 그대로. hover `state-layers-on-neutral-hover`, disabled `text-disabled`.
- 크기(피그마 실측): sm 28 · md 32 · lg 36 · xl 40 · 2xl 48, 아이콘 16 · 18 · 20 · 20 · 24, 글자 medium.
