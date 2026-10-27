# 7. 상태

**핵심**: hover · pressed · focus는 배경 위에 **얇은 판(state layer)만 덮는다.** 글자 색과 배경 색은 바꾸지 않고, 상태별 배경 토큰을 만들지 않는다. 상태는 컴포넌트의 상태 속성으로 고르고 화면에서 색을 직접 칠하지 않는다.

| 상태 | 표현 |
|---|---|
| hover · pressed · focus | state layer만 |
| loading | 모양 그대로 스피너만(배경 = 기본, 레이블 = 기본과 같은 색) |
| selected | 글자 색 또는 배경 토큰 — **hover와 다르게 보여야 한다** |
| disabled | 색 역할과 상관없이 같은 회색. 꽉 찬 것(solid · soft) `fill-disabled` · 테두리 없음, 테두리형(outline · base) 배경 그대로 + `border-disabled`, 글자 `text-disabled` · 아이콘 `icon-disabled`(어두운 바탕 `*-inverse-disabled`) |
| read-only(입력창) | 값은 또렷하게, 배경만 연한 회색. 수정할 수 없는 값은 disabled가 아니라 read-only |
| 오류(입력창) | negative 속성 + 아래 오류 문구 `text-negative-main` |

- solid 버튼은 모든 상태에서 테두리 없음. 버튼 · 입력창 · disabled · read-only에는 그림자 없음.

## 키보드 focus

- 버튼 · Icon · Toggle · Square · Text · Social Button, 탭 · Segment 항목: 바깥 2px 간격 + 2px 링, **색은 버튼 색을 따름** — primary `border-primary-subtle` · neutral `border-neutral-stronger` · negative `border-negative-subtle` · inverse `border-inverse-subtle`. 링 모서리 = 버튼 모서리 + 4(pill은 full).
- 입력창 · Filter는 focus 상태(테두리만 primary, 바깥 링 없음).

## state layer 색 (새 컴포넌트를 만들 때만)

- 기본: 글자(없으면 아이콘) 색을 따른다 — 검정 · 회색 `on neutral`, 파랑 `brand`, 빨강 `negative`, 흰 글자 + 파랑 바탕 `on brand`, 흰 글자 + 어두운 바탕 `inverse`.
- 선택으로 글자 · 테두리만 바뀌면 선택 전과 같은 판 / 배경이 연한 색이 되면 글자 색 기준 / 배경이 꽉 찬 색이 되면 흰 글자 기준.
- 체크박스 · 라디오 · 스위치: 박스 · 트랙 색 기준(흰 · 회색 `on neutral`, 파랑 `on brand`, 빨강 `on negative`).
- 사이드바 · 목차 메뉴: 메뉴 색 기준(밝은 basic `on neutral` · brand `brand`, 어두운 basic `inverse` · brand `nav-brand-inverse`), hover 때 글자 한 단계 진하게.

## selected 표시

| 컴포넌트 | 선택 표시 |
|---|---|
| Ghost 탭 | 배경 `surface-neutral-subtlest` |
| Segment | neutral `surface-subtlest`, primary `surface-primary-subtlest` |
| Split Button Group | 파란 글자 |
| Control Box(카드형 선택지) | `surface-primary-subtlest` + 테두리 `border-primary-accent` |
| Pagination | 현재 페이지 `text-heading-main`, 나머지 `text-body-subtle` |
| 사이드바 메뉴 | 밝은 basic `surface-neutral-subtler` · brand `surface-primary-subtler`, 어두운 basic `surface-inverse-subtler` · brand `fill-primary-subtle` |
