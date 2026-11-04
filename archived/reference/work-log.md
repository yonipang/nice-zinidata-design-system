# 디자인시스템 정비 — 상세 작업 기록

작성일: 2026-10-20 · 갱신일: 2026-10-27
대상 파일: 🗃️ Component v2.3 (`3C2TB2p12Nxep7smiGvPgN`) · 🗃️ Table v1.0 (`DC6WYqBo5ayo20KU8dxJJd`) · 📊 charts v1.0 (`5YPSJMUzst1KRIXCJ51eFj`) · Templates v2.1 (`8b0P5vfaIyISTvU4xU8EvR`)
함께 읽을 문서: `디자인시스템_작업요약.md`(규칙 · 토큰 · 변경 이력의 기준), `디자인시스템_적용규칙_ClaudeDesign.md`, `디자인시스템_컴포넌트가이드_ClaudeDesign.md`

> 이 문서는 "무엇을 왜 그렇게 정했는지"와 "작업하면서 겪은 문제"를 남기기 위한 기록이다.
> 규칙의 최종본은 작업요약 문서가 우선이며, 이 문서는 그 배경을 설명한다.
> 새 세션은 이 문서 → 작업요약 → 피그마 파일 상태 확인 순서로 시작한다.

---

## 1. 작업 방식 (사용자와 합의한 것)

### 1-1. 진행 원칙
- **요청한 범위만** 바꾼다. 답을 받지 않은 항목은 추천안이 있어도 적용하지 않는다. "응/진행"이 어느 질문에 대한 답인지 애매하면 다시 묻는다.
- 여러 variant를 바꾸는 작업은 **계획(대상 · 개수 · 바뀌는 색)을 먼저 보여주고** 확인받는다.
- 사용자가 직접 수정 중이라고 하면 파일을 건드리지 않는다.
- 작업 후에는 "무엇을 · 몇 곳 · 색 변화"로 보고하고 **스크린샷으로 확인**한다.
- 결정이 필요한 항목은 답변 마지막에 따로 모아서 묻는다. 추천안이 있으면 이유와 함께 제시한다.
- 사용자는 **예외를 만드는 것보다 규칙으로 정리하는 것**을 선호한다. (예: 아이콘 색 덮어쓰기 대신 `neutral-subtle` variant 추가)
- 사용자는 **너무 티나는 인터랙션을 원하지 않는다.** (예: soft 오류 상태의 hover · focus 오버레이를 일부러 약하게 둠)

### 1-2. 문서 · 히스토리
- 토큰 · 컴포넌트 · 규칙이 바뀌면 작업을 마칠 때 `디자인시스템_작업요약.md`의 "변경 이력"에 `날짜 · 대상 — 변경 내용` 형식으로 추가한다.
- 본문(이름 규칙, 토큰 목록, 컴포넌트 구조, 남은 일)과 달라지면 본문도 고친다.
- 퍼블리셔에게 전달할 수 있도록 색이 바뀐 경우 **이전 · 이후 값(hex)** 을 함께 적는다.
- 수정한 문서는 파일로 전달하고, **프로젝트 컨텍스트 교체는 사용자가 직접** 한다. (이 계정의 채팅에는 프로젝트 파일을 쓰는 도구가 없다. 개인 계정은 GitHub 연동으로 가능하지만 이 계정은 그렇게 하지 않기로 함)
- 큰 작업 중간에는 문서를 매번 고치지 않고, 사용자가 원하면 **작업이 끝난 뒤 한 번에** 반영한다.

### 1-3. 피그마 작업 요령 (기술)
- **큰 세트는 한 번에 처리하면 연결이 끊긴다.** variant 100개 안팎, 바인딩 수천 개 단위로 나누고, **인스턴스 안쪽은 내려가지 않고** 원본만 바꾼다(인스턴스는 원본을 따라감).
- 연결이 끊기면 **다시 실행하기 전에 파일 상태부터 확인**한다. 끊겨도 일부가 적용된 경우가 있었다.
- 변수 목록 API(`getLocalVariablesAsync`)가 일부 변수를 빠뜨린다 → 레이어에 걸린 변수는 **ID로 직접 조회**한다.
- 변수를 연결할 때 **실제 색 값도 함께 맞춘다**(그대로 두면 검게 보이는 문제).
- 삭제는 **파일 전체에서 레이어 연결과 다른 변수의 참조가 없는 걸 확인한 뒤**에만 한다.
- 현재 Primitive 라이브러리 Spacing 컬렉션 키: `41302aed14c52ee6a83bbd72c6d3254cc41d8953` (spacing · rounded · border-width · size). 이 세션에서는 라이브러리 컬렉션 목록 API가 비어 있어 Typography · Layout 컬렉션 키를 찾지 못했다.

---

## 2. 결정 사항과 이유

### 2-1. 이름 규칙
- 형식 `{그룹}/{역할}-{단계}`. 단계 subtlest < subtler < subtle < **main** < strong < stronger, accent. 기준 단계에도 항상 main.
- **white → inverse**: 색 이름이 아니라 역할 이름으로. (`text/inverse-heading-main`, `fill/inverse-*`, `border/inverse-*`)
- **hint → placeholder**: 용도가 분명한 이름으로. placeholder가 아니던 사용처(Radio 설명, 보조 텍스트 등)는 `text/body-subtle`로 옮김.
- **success → positive, destructive → negative**: Status Badge의 Color 값(positive · negative)과 언어를 맞추고, 상태를 중립적으로 표현하기 위해. 버튼 세트(`Negative Button`), 컴포넌트 속성(`Danger` · `Destructive` → `Negative`, Alert · Toast의 `success · error` → `positive · negative`)까지 모두 통일. Modal `_Base/Icon`의 아이콘 종류 이름은 그림 이름이라 유지.
- increase · decrease는 수치 증감 전용으로 positive · negative와 별개.

### 2-2. 층 구조와 component 토큰 원칙
- Primitive → Semantic → Component. Component는 Semantic만 참조.
- 처음 규칙은 "한 컴포넌트에서만 쓰는 색만 component 토큰"이었지만, 사용자가 **"이름과 실제 사용되는 컴포넌트 사이에 연결이 안 된다"**고 지적 → **컴포넌트 부위를 이름으로 구분해야 하는 색은 component 토큰으로 두고 값은 semantic을 참조**하는 방향으로 운영 중. (예: `control/handle`, `input/bg-readonly`)
- 같은 값이라도 의미가 다른 semantic을 빌려 쓰지 않는다. (예: 스위치 핸들에 `fill/inverse-subtle`을 쓰는 대신 `control/handle-disabled`를 만듦)

### 2-3. fill과 icon
- fill은 **면 색**(버튼 배경, 배지, 칩, 진행바), icon은 **모양 색**. 아이콘에 fill을 쓰지 않는다. 대비 기준이 달라 나중에 갈라지기 때문.
- icon 그룹은 text와 같은 이름, 값은 text 참조. 아이콘은 **옆 텍스트와 같은 단계**를 따른다.
- 아이콘을 icon으로 옮길 때 회색 단계가 달라 값이 바뀌는 곳이 있었음. 사용자 결정: **text 단계를 따라 맞춤**(조금 진해짐). 상태색 아이콘도 text 단계로 진해짐 → 화면 확인 필요(남은 일).

### 2-4. border 단계
- negative: subtler 6 · subtle 20 · main 60.
- primary: subtler 10 · subtle 30 · **main 60** · strong 80 · accent 100. (Input focus에 60%가 필요해서 추가. 기존 main 80%를 strong으로 이름 변경, 새 main = 60% → negative의 main 60%와 같은 기준이 됨)
- neutral: subtle 6 · main 10 · strong 15 · **stronger 30**(사용자가 60 → 30으로 변경) · accent 100.
- 사용처 없는 border 토큰 8개 삭제, `accent` → `neutral-accent`.

### 2-5. state layer
- Neutral solid(검정 배경) 위 state-layer는 `state layers/inverse`(흰색). 처음엔 `neutral` 그룹을 흰색으로 재정의하려 했으나, 같은 값의 그룹이 중복되지 않도록 `inverse`를 쓰기로 결정
- hover · pressed · focus는 state layer(오버레이)로 표현, 상태별 배경 토큰을 만들지 않는다.
- **neutral 배경(흰색 · 회색 · 투명) 위는 `on neutral`**. `state layers/neutral`은 사용자가 **검정 배경(Neutral solid 등)용 밝은 색으로 재정의 예정** → 지금은 사용처 없음.
- 사용자가 `state layers/neutral`이라고 말해도 투명 · 밝은 배경이면 `on neutral`이 맞다(규칙 우선, 확인하고 진행).
- 컨트롤 · 입력창의 default 상태에도 투명 단계(`…/default`)를 한 겹 두어 구조를 통일.

### 2-6. disabled (Material 방식으로 전환)
- 처음에는 버튼 disabled를 흰색 80% 오버레이로 표현했으나, Material처럼 **disabled는 state layer가 아니라 공통 토큰 세트**로 바꿈. 사용자가 확인 후 유지 결정.
  - 배경 `fill/disabled`(950 **12%**, 20%에서 낮춤) · 테두리 `border/disabled`(950 6%, 신규) · 텍스트 `text/disabled` · 아이콘 `icon/disabled`
  - 어두운 배경: `fill/inverse-disabled`(흰색 **8%**) · `border/inverse-subtle` · `text/inverse-disabled` · `icon/inverse-disabled`
  - 색 역할과 무관하게 같은 회색. state-layer는 default(투명).
- **disabled · read-only · 입력창에는 그림자를 쓰지 않는다.**
- **Switch 예외**: 공통 세트만으로는 꺼진 스위치와 구분이 안 됨. 시행: 회색 핸들(25%) "너무 시꺼멓다" → 12% "여전히 진하다" → zinc/200 "너무 연함" → zinc/300 → 흰색 70% → **최종: 트랙 `fill/neutral-subtlest`(8%) + 핸들 `control/handle-disabled`(8%) + 핸들 그림자 없음** ("움직이지 않을 것 같은 느낌"). 사용자가 "내가 원했던 정도"라고 확정.
- 공통 세트 미적용 컴포넌트는 **해당 컴포넌트를 수정할 때 반영**하기로 함(남은 일 목록).

### 2-7. 버튼
- 색 역할별 세트: Primary · Neutral · Negative · Inverse. Style solid · soft · outline · base · ghost.
- 레이블은 semantic text, 아이콘 · 스피너는 icon 토큰 직접(component label 토큰 삭제). loading 레이블 · 아이콘은 default와 같은 색.
- solid disabled에는 테두리 없음. Inverse disabled 배경은 흰색 8%.
- Icon Button: 배경은 state layer(neutral · neutral-subtle → `on neutral`, primary → `brand`, negative → `negative`, inverse → `inverse`), 로딩 스피너는 default 아이콘과 같은 색.
- **Icon Button `Color=neutral-subtle` 추가**: 입력창 안 지우기(×) 버튼을 연하게 하기 위해. "밝기를 자유롭게 덮어쓰기"보다 variant가 결과가 일정하고 Claude Design에도 유리해서 선택.
  - 규칙: 아이콘 버튼 색은 주변 텍스트 위계를 따른다. 지우기(×)는 `neutral-subtle`, 뒤로 · 메뉴 같은 주요 동작은 `neutral`.
  - 아이콘 크기를 줄이는 안(A: Neutral Button과 맞춤, B: 약 60%)은 사용자가 거절 → 크기는 그대로.
- Control Button(사용자가 예전에 캔버스에서 삭제한 컴포넌트)은 **Icon Button으로 교체**. close → close, back → arrow-left, menu → menu 아이콘.

### 2-8. Control (Checkbox · Radio · Switch)
- semantic의 `control` · `switch` 그룹을 component `control/*`로 옮김. 세 컴포넌트를 **"선택 컨트롤 가족"으로 묶는 `control/*`** 방식 선택(버튼 가족 `button/*`과 같은 발상, on/off 색을 한 곳에서 관리). 스위치 켜짐 색을 체크박스와 같은 primary 600으로 맞춤.
- 구조: `_Base/Checkbox` · `_Base/Radio` = 박스(bg) > state-layer > 체크 · 점, `_Base/Switch` = 트랙(bg) > state-layer > 핸들. hover는 state layer.
- disabled는 공통 세트, Switch만 예외(2-6).

### 2-9. Input (Input · Password · Input Quantity · Text Area · Select · DatePicker Input)
- **UX 규칙을 먼저 정하고 토큰을 맞춤** (사용자 제안).
- 상태: default · hover · focus · filled · negative · read-only · disabled. 우선순위 disabled > read-only > negative > focus > hover > default.
- **negative는 State가 아니라 별도 속성(Negative)**. 다른 시스템도 오류를 상태와 겹치는 별도 축으로 다룸.
- **line은 테두리로, soft는 배경 오버레이로** 상태 표현:
  - line: default `input/border` 1px · hover 연한 primary(30%) **2px** · focus primary **60%** **2px**(샘플 9511:24122 기준) · 오류 default/hover 빨강 1px(같은 모양) · 오류 focus 빨강 2px
  - soft: 테두리 없음. hover `on neutral/hover`(4%), focus `on neutral/focus`(12%), 오류 default 연한 빨강 배경, 오류 hover · focus `negative/hover` · `negative/focus`(**일부러 약하게**, 올리지 않기로 함)
  - negative 처리 과정의 시행착오: 오버레이 추가 → 빼기 → soft 오류 default 테두리 제거 → hover 20% 테두리 → "오류도 default·hover 같게, focus만 구분"(다른 시스템 조사 후) → soft는 최종적으로 테두리 없이 오버레이로 확정
- 아이콘: 값 없음 `icon/body-subtle`, focus · 값 있음은 입력 텍스트와 같은 색.
- placeholder는 모두 `text/placeholder`(Select 예외도 없앰).
- **read-only**: 수정 불가 값 표시용(아이디, 주문번호, 자동 계산 값). 값 있을 때만, Password · Select에는 없음. 배경 `input/bg-readonly`, line은 연한 테두리(`input/border-readonly`) · soft는 테두리 없음(처음엔 반대로 넣었다가 사용자가 "서로 바뀐 것 같다"고 해서 수정). Input Quantity의 +/− 버튼은 read-only에서 disabled 모양.
- 입력창 그림자 전부 제거. 글자 수는 Text Area에만.
- 값이 딱 맞는 semantic이 없던 Input 색은 **가까운 공통 단계로 맞춤**(사용자 결정, 퍼블리셔에 전달할 이전 · 이후 값 기록함).
- Select ghost: 배경 없음(투명), state layer로 상태. 레이어 구조를 line · soft와 같게(`Input` 프레임 > `Wrap` + `Wrap`).
- Input Quantity Group의 `typing`(focus + 커서)을 focus로 통합.
- 입력창 안 +/− 버튼은 새 `Neutral Button`(base · icon)으로 교체. Text Button(20px 텍스트 링크)은 같은 크기 버튼이 없어 유지.

### 2-10. Search
- **Search Form**(일반 · 주소 검색): `Show Label` 옵션, 검색어 목록은 선택적으로 노출, focus + 입력값 → 키워드 목록(일치 키워드 `text/primary-main`, 보조 주소 `text/body-subtle`, 항목 hover `on neutral/hover`).
- **Map Search**: 레이블 없음. basic · soft(아래에 판이 있을 때) · floating(지도 위). focus + 빈 값 → Location selector, focus + 입력값 → 키워드 목록 (**동시 노출 아님**).
- 상태는 default · focus 두 가지만 유지(사용자 결정).
- 그림자: Search Form은 없음. 지도 위에 뜨는 floating · SearchMap/Logo와 드롭다운 판만 유지.

### 2-11. 숫자 변수 (padding · gap · 모서리 · 테두리 두께)
- 파일 전체가 **예전 라이브러리 버전의 숫자 변수**를 쓰고 있었음(로컬 컬렉션이 아님). 현재 Primitive로 교체(원본 기준 약 15만 곳).
- spacing · border-width는 같은 이름 · 같은 값. **radius는 값 기준**(예전 radius/sm 8 → `rounded/md`, md 12 → `rounded/xl`, lg 16 → `rounded/3xl`, 360 → `rounded/full`). `gap/action/lg`(6) → `spacing/1-5`.
- 입력창의 연결 안 된 gap: 자식 2개 이상은 변수 연결, 자식 1개뿐인 프레임의 기본 gap 10은 0으로.

### 2-12. 기타 결정
- ~~table 그룹 정리 방향 미정~~ → 2-19에서 결정 (semantic `table/*`).
- ~~Social Button은 디자인시스템 대상 아님~~ → 2-16에서 정리 (브랜드 색만 예외). Avatar 색은 hex 그대로 사용.
- 로고(레이어 이름에 logo 포함)는 토큰 연결 대상 아님.
- Tabs hover variant의 커서 그림은 예시 그래픽이라 토큰 대상 아님(실수로 연결했다가 되돌림).
- ~~Templates v2.1의 예전 변수 정리는 프로젝트 진행 후로~~ → 2026-10-27 완료 (2-18).

### 2-13. 모서리 · 그림자 (semantic 숫자 토큰)
- 높이별 모서리를 semantic `rounded/control-sm·md·lg`(8·12·16), 판 크기별 `rounded/surface-xs~xl`(12~32)로 둠. Primitive `rounded/*`는 pill · 원형 · 중첩 모서리(바깥 − 여백 계산값)에만.
- **이유**: 컴포넌트마다 "28·32는 8, 36·40은 12…"를 기억하지 않아도 되고, Tailwind에 같은 이름(`rounded-control-md`)으로 내보낼 수 있음.
- 그림자는 `elevation/0~5` 효과 스타일만. 버튼 · 입력창은 그림자 없음.

### 2-14. 레이아웃 · 모바일 기준
- 콘텐츠 폭 1180(default) · 1440(wide) · full(좌우 48), GNB Width도 같은 값. PC 간격(상단 40 · 제목~섹션 32 · 섹션 사이 48 · 카드 사이 16).
- 모바일(~767): 좌우 20 · 섹션 사이 32 · 카드 sm · 입력창 2xl · 하단 버튼 2xl 꽉 채움. 화면 구간 ~767 / 768~1023 / 1024~.
- 모서리 ≥ 큰 쪽 여백(모서리와 여백 규칙), 중첩 모서리 = 바깥 − 사이 여백.

### 2-15. Focus 링
- 버튼 · 탭 · Segment에 숨겨진 `Focus Ring` 레이어 + `+ Focus`(B). 바깥 2px 간격 · 2px 링, 모서리 = 버튼 모서리 + 4.
- 링 진하기: 60% → **30%**(사용자: 연하게). 색은 **버튼 색을 따름**(primary `border/primary-subtle`, neutral `border/neutral-stronger`, negative `border/negative-subtle`, inverse `border/inverse-subtle`).
- 링이 밖으로 나오도록 루트 clip을 끄면서 state-layer가 네모로 드러남 → state-layer에 루트와 같은 모서리 토큰 연결.

### 2-16. 작은 레이블 · Social Button
- 9~11px로 흩어진 아이콘 아래 레이블을 `component/icon-label`(10px) · `icon-label-sm`(9px) 두 스타일로. 10px 하나로 통일하면 Square md · lg와 Map Menu가 넘쳐서 2단계.
- 레이블이 안쪽 폭을 넘으면 줄이지 않고 **컴포넌트를 바꾼다**(묶음이면 묶음 전체). 최대 글자 수는 컴포넌트가이드.
- Social Button: state-layer 구조, brand는 브랜드 색(토큰 없음, 로고와 같은 예외) · 테두리 없음, secondary는 Neutral base 버튼 색.

### 2-17. 표 (Table v1.0)
- **PC = Table**(Header Text · Table Text), **모바일 = Minimal Table**(Header Top · Minimal Cell). 헤더 컴포넌트는 헤더 줄에만.
- 행 높이 36px, 본문 줄 아래 `divider/neutral-subtle`, Minimal은 구분선 없음.
- 헤더 셀에는 배경 없음(사용자 결정) → 줄 프레임에서 배경을 정함. Minimal 헤더는 항상 흰색. 고정 열(Fixed=right · bottom)만 배경 유지.
- 숫자 데이터와 그 열 헤더는 오른쪽, 글자는 왼쪽, 묶음 상위 헤더는 가운데.
- 차트 아래 표: 첫 칸 = 차트 카테고리, 헤더 시리즈 칸에 차트 색 네모(본문 값 칸에는 없음). 카테고리가 열인 교차표는 예외.

### 2-18. Templates · Table · Charts 파일 정리
- 예전 변수 → 값 + 쓰임(글자 · 아이콘 · 배경 · 테두리) 기준으로 교체. 차트 · 배지 색은 Primitive 같은 색(또는 가장 가까운 단계).
- 예전 Table 셀(`Cell/Display·Data·Header·Control·Indicator/*`) → Table v1.0, `Solid Navigation Item` → Side Navigation Item, 원본이 지워진 `.Row` → 연결 해제 후 안쪽 셀 교체, 지워진 `Report Dialog` → Report Modal(메뉴 · 내용을 슬롯으로).
- 결과: Component · Table · Charts · Templates 모두 예전 변수 0.

### 2-19. 표 배경 토큰 (B안)
- component `table/*`를 없애고 **semantic `table/*`** 만 사용: `header-main · header-subtle · row-main · row-subtle · row-selected · -primary · -negative`(모두 surface 참조).
- **이유(사용자에게 추천한 근거)**: surface를 직접 쓰면 헤더 줄과 본문 줄이 같은 토큰이 되어 구분이 안 됨(실제로 `row-default` 하나를 헤더 · 본문이 같이 써서 66곳이 틀어짐). 표 색을 프로젝트 단위로 한 번에 바꿀 수 있음. 여러 컴포넌트 · 템플릿이 함께 쓰는 색이라 semantic 규칙에도 맞음.
- `table`은 이름 규칙 그룹 목록의 예외(표 배경 전용).

### 2-20. Claude Design 등록 판단 (2026-10-27)
- 토큰 · 핵심 컴포넌트가 안정돼서 v0.x로 등록 → 대표 화면 2~3개로 시험 → 빈틈 반영하는 방식으로 합의. 등록 전 문서 최신화(가이드 v0.3 · 규칙 v0.4) 완료.

---

## 3. 작업하면서 겪은 문제와 교훈

| 문제 | 원인 | 교훈 |
|---|---|---|
| Radio · Checkbox의 hover가 default처럼 보임 | 상위 컴포넌트가 안쪽 `_Base` 인스턴스를 default로 둔 채 색 덮어쓰기로 hover를 표현 → 덮어쓰기를 바꾸면서 hover가 사라짐 | 상위 컴포넌트의 상태는 **안쪽 인스턴스의 State를 맞추는 방식**으로 표현 |
| 체크박스가 100×100으로 커짐 | HUG 부모 안에 FILL 자식(state-layer) | 빈 variant는 원래 크기로 고정하거나 HUG |
| 복제한 variant의 아이콘 교체가 안 됨 | 복제 시 아이콘 교체 속성 연결(componentPropertyReferences)이 끊김 | variant 복제 후 **속성 연결 복구** 필수 |
| 아이콘을 바꾸면 색이 아이콘 라이브러리 기본값(`surface/mono`)으로 돌아감 | 아이콘 교체 시 안쪽 벡터 색 덮어쓰기가 따라오지 않음 | 교체 후 아이콘 색 확인 |
| Select에서 hover · 오류 처리 중 버튼 안 state-layer까지 지움 | 범위를 넓게 잡음 | 입력창 안의 버튼 인스턴스는 건드리지 않도록 범위 제한 |
| read-only 테두리가 line · soft 반대로 들어감 | "read-only는 테두리 없음"을 line에 적용 | 상태를 추가할 때 **원래 스타일의 특징**(line=테두리, soft=배경)을 유지 |
| Control Button 원본을 못 찾음 | 사용자가 예전에 캔버스에서 삭제한 컴포넌트(인스턴스만 남음) | 원본이 페이지에 없으면 삭제된 컴포넌트일 수 있음 |
| state-layer를 넣은 뒤 Split Button Group · Segment 세트가 커지고 겹침 | 인스턴스에 루트 여백 덮어쓰기가 남아 있어서, 원본에서 state-layer로 옮긴 여백과 **두 번 적용**됨 | state-layer 구조로 바꾼 뒤 **인스턴스의 루트 여백 · 간격 덮어쓰기도 state-layer로 옮긴다** |
| Square Button hover 판이 버튼 안에 작게 뜸 | 루트의 최소 크기(min width/height)를 그대로 두고 여백만 옮김 | 최소 크기 · 고정 크기도 state-layer로 함께 옮긴다 |
| NavItem 너비가 64 → 48 · 56으로 줄어듦 | 최소 크기를 state-layer로 옮기면서 여백을 빼서 계산했고, 루트에 최대 너비(max width)도 걸려 있었음 | 최소 크기를 옮길 때 state-layer 자신의 여백을 포함한 값으로, 루트에 max width가 있으면 루트 min도 유지 |
| 큰 작업 중 연결 끊김 다수 | 한 번에 수만 개 처리 | 세트 · variant 단위로 나누기, 끊기면 상태부터 확인 |
| 버튼 hover 판이 네모로 드러남 | focus 링을 위해 루트 clip을 껐는데 state-layer는 루트 clip에 기대 둥글게 보였음 | 구조를 바꿀 때 **다른 레이어가 기대던 속성**(clip 등)을 확인 |
| 차트 아래 표가 크게 바뀜 (1차) | 예전 셀을 일반 표로 교체 — 모바일 Minimal과 PC Table 구분을 몰랐음 | 교체 전 **PC · 모바일 컴포넌트 구분**을 먼저 확인 |
| 표가 사라지거나 엉뚱한 라벨 (2차) | 표 → 차트 짝을 상위 프레임까지 넓게 찾아 다른 차트 라벨 사용, 행 삭제 | **바로 위 차트 하나만** 짝, 행을 지우기 전 목록을 보여주고 확인. 사용자가 10:14 버전으로 복원 |
| 모바일 표 행이 13 → 3 | 모바일 축 라벨이 듬성듬성(3개)인 것을 카테고리로 씀 | 모바일은 라벨 수로 행을 줄이지 않음 |
| 연결 끊김 중 일부만 적용 · 헤더 중복 | 끊긴 실행이 일부 반영된 상태에서 다시 실행, 로컬 컴포넌트 헤더를 본문으로 판단 | 끊기면 **표 단위로 상태 확인 후** 다시, 줄 순서는 y 좌표로 |
| 같은 라벨이 반복되는 행까지 삭제 | "중복 = 오류"로 일괄 판단 | 목록형 표 · 자리표시는 반복이 정상일 수 있음 — 대상 확인 후 삭제 |
| 교차표(연령대 × 성별) 망가짐 | 카테고리가 열인 표에 "카테고리 = 행" 규칙 적용 | 표 구조(행/열)부터 판단, 교차표는 제외 |
| 비율 셀 글자가 세로로 쌓임 | 예전 셀을 BarChart Type=basic으로 매핑(맞는 건 composition) | variant 매핑은 **모양까지 확인** |
| 헤더 줄에 행 토큰 | `row-default` 하나를 헤더 · 본문이 같이 썼는데 이름만 보고 `row/bg`로 일괄 교체 | 같은 토큰이 다른 역할로 쓰이는지 확인 → 표 토큰 분리(2-19) |
| 순번 칸에 "1 / +00.0" | 예전 숫자 셀을 Table Text `Type=number`로 매핑 — number는 증감이 항상 붙는 variant | 매핑 전에 **variant 모양을 열어 보고** 고르기 (BarChart 건과 같은 종류의 실수) |
| 그리드 표의 체크박스 · 값이 다른 열로 흩어짐 | 그리드 표에서 셀을 새로 만들어 끼우면 원래 칸이 아니라 빈칸에 자동 배치됨 | 그리드 표는 **swapComponent로 제자리 교체**하거나 교체 후 `setGridChildPosition`으로 칸 지정. 줄 높이 설정 시 HUG 트랙을 그대로 넘기면 1px로 접힘 |
| 오른쪽 정렬 Table Text가 52px | Table v1.0 컴포넌트 쪽 문제(원인 미확인) | 템플릿에서는 36px 고정으로 임시 처리, 원본 수정 필요 |

---

## 4. 현재 상태 (2026-10-27 기준)

- **Component v2.3**: 토큰 체계(project · semantic · component) 완성, 핵심 컴포넌트 state layer · 모서리 · 그림자 · focus 정리, 예전 변수 0. component `table/*` 삭제 → Component v2.3 재게시 필요(삭제 반영)
- **Table v1.0**: 예전 변수 0, 헤더 셀 배경 제거(고정 열 제외), 표 배경은 semantic `table/*`
- **charts v1.0**: 예전 변수 0, `.Row` 안 헤더 셀 Table v1.0으로
- **Templates v2.1**: 예전 변수 0, 예전 컴포넌트 0(표 셀 · `.Row` · Report Dialog · Solid Navigation Item), 표 규칙(행 36 · 헤더 줄 배경 · 숫자 오른쪽 · 차트 표 라벨 · 헤더 색 네모) 적용. 레이아웃 3단계 · 베리에이션은 아직
- **문서**: 적용규칙 v0.4 · 컴포넌트가이드 v0.3 · 작업요약 최신

---

## 5. 결정 대기 항목 (2026-10-27 기준)

| # | 질문 | 추천 |
|---|---|---|
| 1 | 차트 표 값 45개를 막대 길이로 계산해 넣을지 | 막대 · 스택은 계산, 선 · 도넛은 자리표시 |
| 2 | 선 차트 표(12 · 13개월) 첫 칸 — 축 숫자 / 월 이름 | 축을 월 이름으로 바꾸고 맞추기 |
| 3 | 도넛 · 파이 표 "항목 1~8" | 유지 |
| 4 | 개인/법인 비율 셀 두 줄 / 한 줄 | 사용자 확인 |
| 5 | 보고서 Report Modal 긴 내용 — 스크롤 / 펼침 | 사용자 확인 |
| 6 | 교차표 둘째 행 라벨 "25.11" 맞는지 | 사용자 확인 |
| 7 | 고정 열 헤더 배경을 줄 색 토큰과 맞출지 | 맞추기 |

### 이번 기간의 실수 (재발 방지)
- 표 내용을 일괄로 바꾸다 같은 종류의 실수가 반복됨(3장 표 참고) → **표 내용 변경은 대상 목록과 바뀌는 행을 먼저 보여주고 진행**하기로 사용자와 약속
- 사용자 질문의 "응"이 어느 항목에 대한 답인지 애매할 때 확인 없이 진행한 경우가 있었음

## 6. 남은 일 (작업요약 "남은 일"과 같음, 요약)

1. Component v2.3 재게시 (component `table/*` 삭제 반영)
2. Claude Design 등록 → 대표 화면 2~3개 시험 → 규칙 · 컴포넌트 보완
3. Templates 결정 항목(5장) → 3단계 레이아웃 규칙 적용(페이지별) → 베리에이션(화면 종류 · 모바일 · wide · 구성 변형)
4. Table v1.0: 오른쪽 정렬 Table Text 52px 원인 수정, Minimal Metric 가운데 정렬 variant 검토
5. 사용처 없는 토큰 삭제(`state layers/neutral` · `on neutral/disabled` · `brand/disabled` 등), 입력창 Shape 속성(pill 프로젝트 생길 때)
6. Foundation 문서 재생성, 개발 전달(CSS 변수 · Tailwind `borderRadius control-* · surface-*`, `fontSize gnb-menu · icon-label`, container 1180 · 1440)

---

## 7. 자주 쓰는 노드 ID

| 대상 | ID |
|---|---|
| Primary / Neutral / Negative / Inverse Button | 8421:28247 / 8421:30772 / 8421:31573 / 8421:33175 |
| Icon Button | 8424:14098 |
| _Base/Checkbox · Radio · Switch | 4693:41765 · 4741:24435 · 4693:42149 |
| Input / Text Area / Input Quantity / Input Quantity Group | 8292:31757 / 4758:18013 / 8521:8010 / 4975:6350 |
| Select | 4964:13505 |
| Form Field (Slot) | 8917:7630 |
| Mobile/Map Search · Map Search/Basic | 7917:62621 · 4943:73204 |
| Input 샘플(hover · focus 기준) | 9511:24122 |
| Form Field 오류 문구 참고 | 9470:23660 |
| Square Button · Toggle Button · Text Button | 8279:54696 · 8509:8168 · 4643:3479 |
| Social Button | 5353:16532 |
| Templates v2.1 파일 | 8b0P5vfaIyISTvU4xU8EvR |
| Table v1.0 파일 · Charts v1.0 파일 | DC6WYqBo5ayo20KU8dxJJd · 5YPSJMUzst1KRIXCJ51eFj |
| Templates 성/연령별 교차표 (보고서) | 1143:22910 · 1143:22959 |
| Templates 가로 상단 라벨형 블록 (Chart) | 437:113048 (일반) · 437:112830 (스택 바 100%) |
| 라이브러리 컬렉션 키: semantic · component · Primitive Color · Spacing | b77515d9… · b4f56650… · 7f89b373… · 41302aed… |
