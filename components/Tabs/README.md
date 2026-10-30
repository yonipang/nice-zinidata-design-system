# Tabs

같은 자리의 내용을 바꿔 보여주는 탭(피그마 Tabs/Underline · Ghost · Box · BorderBox).

**Props** — `items`[{value,label,icon,rightIcon,count,disabled}] · `value`/`defaultValue` · `onChange` · `variant` underline(기본)|ghost|box|borderbox · `size`(underline sm~2xl · ghost md · xl · 2xl · box sm · md · lg · borderbox sm~2xl) · `color`(underline primary · black / borderbox brand · black) · `tabStyle`(borderbox outline · solid) · `shape` rounded|pill · `fullWidth`.
- 탭 글자는 모두 **medium `text-heading-main`**(선택 안 된 탭도 heading). 숫자(count)는 `text-body-subtle` normal.
- **Underline**: 바닥선 `border-neutral-main` 1, 선택 = 바닥 2 — primary `border-primary-accent` + `text-primary-main` / black `border-neutral-accent`. 탭 사이 4. 크기 28 · 32 · 36 · 40 · 48(글자 14 · 14 · 15 · 15 · 16).
- **Ghost**: 판 없음 → 선택 `surface-neutral-subtlest`. **Box**: 선택 흰 판 + `border-neutral-strong`. 탭 사이 4.
- **rounded 탭(Ghost · Box · BorderBox)의 좌우 여백 = 모서리 값** — `rounded-xl` 12 = 판 여백 10 + 글자 묶음 2, 모든 크기. 세 종류 모두 탭 사이 4.
- **BorderBox**: 모든 탭이 흰 판 + `border-neutral-strong`. 선택 — outline brand `border-primary-subtle` + 파랑 글자 / outline black `border-neutral-accent` / solid brand `button-solid-primary` + 흰 글자 / solid black `button-solid-neutral` + 흰 글자.
- 모서리: ghost · box · borderbox는 `rounded-xl`(피그마), pill은 `rounded-full` + **좌우 여백 한 단계 넓게**(ghost md 10 · xl 12 · 2xl 16 / box sm 8 · md 10 · lg 12 / borderbox sm 12 · md 14 · lg 18 · xl 20 · 2xl 24, 모두 + 글자 묶음 2). hover는 state layer.
- 고르는 기준: 페이지 · 섹션 전환은 Underline, 카드 · 패널 안 작은 전환은 Ghost · Box, 필터처럼 늘어선 선택은 BorderBox. 2~5개 중 하나를 고르는 짧은 전환은 Segment.
