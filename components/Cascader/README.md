# Cascader

단계별로 좁혀 고르는 목록(피그마 Cascader 1depth · 2depth+) — 시 · 도 › 시 · 군 · 구 › 읍 · 면 · 동, 업종 대 › 중 › 소분류.

**Props** — `options` 트리[{value,label,icon,badge,disabled,children}] · `value`/`defaultValue`(경로 배열) · `onChange(경로)` · `size` sm~2xl.
- 단계마다 칸(폭 200)이 오른쪽에 열린다. 칸 사이 `divider-neutral-subtle`. 판은 `surface-main` + `border-neutral-subtle` + `elevation-3` + `rounded-surface-xs`.
- 항목은 MenuList와 같은 크기 · 색 규칙. 하위가 있으면 오른쪽 chevron-right(`icon-body-subtle`, 고른 경로는 `icon-primary-main`). 1단계만 왼쪽 아이콘 · 배지(CategoryBadge white + 테두리).
- 고른 경로의 항목은 모두 `text-primary-main` semibold.
