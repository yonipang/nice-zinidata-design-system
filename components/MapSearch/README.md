# MapSearch

지도 검색(피그마 Map Search/Basic · SearchMap/Logo · Mobile/Map Search · _Base/SearchGroup · _Base/SearchItem).

**Props** — `variant` floating(기본)|basic|soft · `value` · `defaultValue` · `placeholder` · `logo`(돋보기 대신 로고) · `results`[{title, address, badge}] · `onSelect` · `onBack` · `onChange` · `mobile`.
- 입력: 높이 48 · `rounded-3xl`(20) · 여백 12, `input-bg` · 초점 `input-border-focus`. floating은 테두리 없이 `elevation-2`, soft는 `bg-subtler`.
- 결과 판: `surface-main` · `border-neutral-stronger` · `rounded-3xl` · 여백 8/0 · 최대 316. 줄: 핀 아이콘 16 + 이름 `text-sm` medium heading(입력한 글자는 `text-primary-main`) + 주소 `text-sm` body-main + 오른쪽 배지.
- **모바일 흐름**(실제 앱 패턴): 지도 화면에는 **누르면 열리는 검색 막대**(입력 대신 버튼) → 누르면 지도 위를 덮는 **검색 화면**(위 56 막대: ← 뒤로 + 입력(자동 초점) + 지우기) → 입력 전엔 **최근 검색**(하나씩 지우기 · 전체 삭제), 입력하면 **결과 목록** → 결과를 고르면(또는 Enter) 지도 화면으로 돌아가 막대에 고른 이름이 들어감, ← · Esc는 그냥 지도 화면으로. `recent`(최근 검색) · `onSelect` · `onBack`.
- **반응형**: MapLayout 안에서는 **지도 화면 폭** 600 미만, 혼자 쓸 때는 창 폭 600 미만(또는 `mobile`)이면 모바일 형태 — 높이 56 막대(뒤로 Icon Button lg + 입력 40 · `bg-subtler`), 결과는 아래로 꽉 차는 목록.
