# MapAreaDraw · MapGuideBar

지도에서 **다각형으로 분석 영역을 고르는 흐름**(NICE bizmap 면적 선택과 같은 순서). 지도 라이브러리 위에 얹어 쓰고, 실제 서비스에서는 화면 좌표 대신 위경도로 바꿔 쓴다.

## 흐름
| 단계 | 화면 | 안내 막대 |
|---|---|---|
| 1. 시작 | 커서 + | "지도에서 분석하실 영역의 첫 번째 포인트를 선택해주세요" |
| 2. 점 찍기 | 점(흰 원 + 파란 테두리) → 2개면 선 → **3개부터 면**(파랑 20%) + 커서 옆 **"총 면적"** 말풍선(아래 회색 칸 "ESC / 마우스 우클릭으로 완료해주세요.") | "원하는 곳을 선택해 다각형을 만든 후 ESC / 마우스 우클릭으로 완료해주세요." |
| 3. 완료(ESC · 우클릭, 점 3개 이상) | 꼭짓점 손잡이(**끌어서 고치기**) + 영역 위 **결과 카드**(이름 · 총 면적 · [다시 그리기] [✓ 영역 확정하기]) | "영역 확정하기 버튼을 눌러 분석 영역을 확정해주세요" |
| 4. 확정 | 손잡이 없음, 카드에는 [다시 그리기]만 | 안내 막대 닫힘 |
안내 막대 오른쪽 **[종료하기]**는 언제든 그리기를 끝낸다(`onExit`).

**MapAreaDraw Props** — `metersPerPixel`(면적 환산) · `nameFor(points)`(영역 이름, 예: 역지오코딩 결과) · `onConfirm({points, area})` · `onReset` · `onExit` · `guide`(false면 안내 막대 숨김) · `defaultPoints` · `defaultStage`(draw|done|confirmed, 단계 보여주기용).
**MapGuideBar Props** — `icon`(기본 map-pin-2) · `children`(안내 글) · `onExit` · `exitLabel`(기본 "종료하기").

## 모양
- 점 r5 흰 판 + `border-primary-accent` 2, 선 2, 면 `fill-primary-main` 20% + 테두리 2.
- 말풍선 · 결과 카드: `surface-main` · `border-neutral-main` · `rounded-xl` · `elevation-3`, 여백 12(말풍선) · 16(카드). 이름 `text-sm` semibold heading, "총 면적" `text-xs` body-subtle + 값 `text-sm` bold `text-primary-main`.
- 안내 막대: 보이는 지도 아래 가운데(아래 16) · `surface-main` · 테두리 · `rounded-xl` · `elevation-2` · 여백 8/8/8/16, 핀 아이콘 + `text-sm` + [종료하기](Neutral outline sm). MapLayout의 다른 도구(거리 · 반경 · 커스텀) 안내도 같은 막대를 쓴다(`notice`).
- 결과 카드는 영역 위 가운데(위에 자리가 없으면 아래), 말풍선은 커서 오른쪽(가장자리면 왼쪽) — 지도 판 밖으로 잘리지 않게 자리를 바꾼다.
- 카드 버튼: [다시 그리기] Neutral outline **md** · [✓ 영역 확정하기] Primary solid **md**, 사이 8, 글자 폭은 늘 확보하고 남는 폭을 나눠 채움(카드 최소 폭 240). 확정 뒤 [다시 그리기]는 꽉 채움.
