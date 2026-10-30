# 디자인시스템 정비 작업 요약

기준일: 2026-10-14 (v2)
목적: 피그마 디자인시스템을 Primitive → Semantic → Component 3단 구조로 정리하고, Tailwind 코드·클로드 디자인·클로드 코드와 이름을 맞추는 작업

> 작업 중 변경사항이 생기면 맨 아래 **변경 이력**에 날짜와 내용을 추가한다.

---

## 1. 환경

- **코드**: Tailwind CSS **v3.4.17** (`tailwind.config.js`, 커스텀 값은 `theme.extend` 안에 있음)
- **피그마 파일**
  - `Primitive` (Systems 프로젝트, Foundation 페이지) — 원천 토큰 라이브러리
  - `🗃️ Component v2.3` — 컴포넌트 + project · semantic · component 컬렉션
- **Semantic · Component 토큰은 아직 코드화 전** — 현재 퍼블리싱은 Primitive(Tailwind 클래스) 기준
- 클로드 디자인 / 클로드 코드로 디자인·퍼블리싱 작업 중

---

## 2. 구조 원칙

```
Primitive   재료        zinc/500, rounded/lg, spacing/4
   ↓ (참조)
project     프로젝트별  primary/main, palette/600   (mode: Default / Orange / Momstouch / AT)
   ↓
Semantic    용도        bg, surface, fill, text, icon, border, divider, state layers
   ↓ (참조)
Component   전용        button/solid/primary/bg …
```

- 참조는 위에서 아래 방향으로만. **Component는 Semantic만 참조**한다.
- project 컬렉션에는 프로젝트마다 바뀌는 **primary 색과 그 위 글자색만** 둔다. 여백은 프로젝트별로 바꾸지 않는다.
- **한 컴포넌트에서만 쓰는 색만 Component 토큰**으로 만든다. 여러 컴포넌트가 함께 쓰면 Semantic.
- 컴포넌트의 **텍스트는 semantic text**, **아이콘·스피너는 semantic icon** 토큰을 직접 쓴다.
- 컴포넌트의 **gap · padding은 Primitive spacing 변수**에 연결한다.
- Primitive 변수: scope 전부 끔, Hide from publishing 끔
- 반응형(PC/Mobile)은 Primitive가 아니라 Semantic 컬렉션의 mode로 처리

---

## 3. Primitive 컬렉션

**피그마 변수 경로 = Tailwind 클래스 이름** (예: `rounded/lg` → `rounded-lg`, `font/weight/bold` → `font-bold`). 피그마는 이름에 점을 못 써서 `0.5` → `0-5`.

| 컬렉션 | 그룹 |
|---|---|
| Color | static, zinc, red ~ rose (Tailwind 색상) |
| Typography | text, font/family, font/weight, style, tracking, leading |
| Spacing | spacing, size, rounded, border-width |
| Layout | breakpoint, container |
| Effect | opacity, blur, skew |

- 회색은 **zinc만 사용**하며 값은 Tailwind gray (`colors: { zinc: colors.gray }`)
- `text`: 6xs(8px) ~ 9xl(128px), **xs = 13px** (Tailwind 기본 12px과 다름)
- `font/family`: sans = Pretendard
- `rounded`: none 0 · xs 4 · sm 6 · md 8 · lg 10 · xl 12 · 2xl 14 · 3xl 16 · 4xl 20 · 5xl 24 · 6xl 32 · 7xl 40 · full 9999
- `spacing`: 0, px, 0-5, 0-75, 1, 1-5 … 96 (n × 4px)
- `size`: px 표기 이름, 코드는 같은 값의 spacing 클래스(`size-4.5`), 없을 때만 `size-[Npx]`
- `container`: 실제로는 `max-w-*` 값 (그룹 이름 `max-w`로 변경 검토)

### Tailwind v3 설정 대응

| 피그마 그룹 | tailwind.config.js | 클래스 예 |
|---|---|---|
| Color | colors | text-zinc-500 |
| text | fontSize | text-base |
| font/weight | fontWeight | font-bold |
| spacing | spacing | p-4, gap-4 |
| rounded | borderRadius | rounded-lg |
| breakpoint | screens | max-1240:block |
| container | maxWidth | max-w-md |
| opacity | opacity | opacity-50 |

---

## 4. 이름 규칙

### 형식
```
{그룹}/{역할}-{단계}      예) surface/primary-subtler, border/neutral-strong
```

| 축 | 값 |
|---|---|
| 그룹 (어디에) | bg, surface, fill, text, icon, border, divider (표 배경 전용 `table`) |
| 역할 (무슨 색) | neutral, primary, inverse, negative, positive, warning, informative, increase, decrease |
| (참고) | increase · decrease는 수치 증감 전용으로 positive · negative와 별개 |
| text · icon 역할 | 용도 이름 사용: heading, body, placeholder, disabled (+ primary, inverse, 상태색) |
| 단계 (얼마나) | subtlest · subtler · subtle · **main** · strong · stronger, accent |
| 상태 | default, hover, focus, pressed, loading, disabled, active |

- **기준 단계에도 항상 main**을 붙인다 (`fill/neutral-main`, `text/body-main`).
- 역할이 없는 단계형 그룹(bg, surface의 회색)은 기준을 `main`으로 쓴다 (`bg/main`, `surface/main`).
- 단계는 **그룹 기준의 상대적 진하기**다. 같은 palette 값이라도 그룹마다 이름이 다를 수 있다.
- **accent** = 투명도 없이 100%로 쓰는 최고 강조 색
- **focus** = 포커스 등 강조가 필요할 때의 색 (예전 highlight)

### 쓰지 않는 단어
| 단어 | 이유 | 대신 |
|---|---|---|
| bold | `font-bold`와 혼동 | strong |
| default | 상태 이름과 혼동 | main |
| base (단계) | `text-base`, Primitive 층과 혼동 | main |
| white | 역할이 아닌 색 이름 | inverse |
| hint | 용도가 불분명 | placeholder |
| muted, soft, faint, track, paragraph | 예전 단계·용도 이름 | 위 규칙의 단계·용도 |

---

## 5. project 컬렉션

mode: Default / Orange / Momstouch / AT

```
palette   50 ~ 950        (Palette Maker로 만든 값)
primary
├ main           기준색 (palette/600)
├ subtle · subtler · subtlest   연한 단계 (subtler = 100, subtlest = 50)
├ strong         진한 단계
├ text           흰 배경 위 primary 글자
├ text-on-main   기준색 위 글자 (white)
└ text-on-subtle 연한 판 위 글자
```

---

## 6. Semantic 컬렉션 (현재)

```
bg        main · subtler · subtlest · primary-subtler · primary-subtlest · inverse-main
surface   main · subtle · subtler · subtlest · primary-main · primary-subtler · primary-subtlest
          inverse-main · scrim · informative/warning/positive/negative/increase/decrease-main · negative-subtlest
fill      neutral-strong(zinc/900) · neutral-main(zinc/700) · neutral-subtle(zinc/400) · neutral-subtler(950 25%) · neutral-subtlest(950 8%) · primary-main · primary-subtle(40%) · primary-subtler(20%) · primary-subtlest(10%) · none(투명)
          inverse-main · inverse-subtle · inverse-subtler · inverse-subtlest · inverse-disabled · disabled · hint
          positive-main · informative/warning/negative/increase/decrease-main
text      heading-main · body-main · body-subtle · placeholder · disabled
          primary-main · primary-subtle · primary-strong
          inverse-heading-main · inverse-body-main · inverse-body-subtle · inverse-disabled
          negative-main · negative-subtle · negative-subtler
          positive/warning/informative/increase/decrease-main
icon      text와 같은 이름, 값은 같은 이름의 text 참조
border    increase-main · decrease-main(증감) · neutral-subtle(6%) · neutral-main(10%) · neutral-strong(15%) · neutral-stronger(30%) · neutral-accent(100%)
          primary-subtler(10%) · primary-subtle(30%) · primary-main(60%) · primary-strong(80%) · primary-accent(100%)
          negative-subtler · negative-subtle · negative-main
          informative/positive/warning-main · inverse-accent · inverse-subtle
divider   neutral-main · neutral-subtle · neutral-strong · neutral-stronger · none · inverse-main(흰색 20%, 어두운 배경 위)
fill+     warning-strong(orange/500 — 흰 글자를 올리는 경고 판, Status Badge warning solid)
table     header-main · header-subtle(기본 머리) · row-main · row-subtle · row-selected · row-selected-primary · row-selected-negative · fixed-overlay(→ state layers/on neutral/hover, 고정 경계 그림자)
chart     series-1~6 (blue-600 · cyan-500 · violet-500 · amber-400 · emerald-500 · rose-400 — 차트 · 표 막대 계열 색, 분류색)
state layers   on brand · on neutral · on soft · on negative · brand · neutral · negative · inverse · nav-brand-inverse
               (각 default · hover · pressed · focus · disabled)
```

- **scope**: text = Text fill / icon = Shape fill · Stroke
- **fill은 면 색**(버튼 배경, 배지, 칩, 진행바), **icon은 모양 색** — 아이콘에 fill을 쓰지 않는다.
- **placeholder**: `text/placeholder` · `icon/placeholder` (입력창 빈 값 안내 전용)
- **disabled 상태 (공통 세트)**: disabled는 state layer가 아니라 공통 토큰으로 표현한다 (Material 방식). state-layer는 default(투명)
  - 배경 `fill/disabled`(950 12%) · 테두리 `border/disabled`(950 6%) · 텍스트 `text/disabled` · 아이콘 `icon/disabled`
  - 어두운 배경 위: `fill/inverse-disabled`(흰색 8%) · `border/inverse-subtle` · `text/inverse-disabled` · `icon/inverse-disabled`
  - 색 역할(primary · negative 등)과 상관없이 disabled는 같은 회색
  - 예외 — Switch: 트랙 `fill/neutral-subtlest`(950 8%) + 핸들 `control/handle-disabled`(950 8%), 핸들 그림자 없음. 꺼진 스위치(zinc/200 트랙 + 흰 핸들)와 구분하기 위함
- **state layers**: neutral 오버레이 = zinc/950, negative = `fill/negative-main`, inverse = 흰색 (disabled 8%)
- **2026-10-29 바뀐 값**: `text/informative-main` blue/500 → **blue/600**(대비 5.2:1, `icon/informative-main` 따라감).
- **Status Badge는 의미 토큰만** — soft `surface/*-main` + `text/*-main`, solid `fill/*` + 흰 글자(Primitive 직접 사용 금지). 분류색 예외는 Category Badge · 차트 계열 · 소셜 로고만.

---

## 7. Component 컬렉션

### Button
```
button/{style}/{color}/
  bg               배경 (모든 상태 공통, loading 포함)
  border           테두리 (outline · base · solid 일부)
```
- 레이블은 semantic `text/*`, 아이콘·스피너는 `icon/*`를 직접 사용 (component label 토큰 없음)
- hover · pressed 등 상태 색은 토큰을 만들지 않고 **state layers**로 표현

### Control (Checkbox · Radio · Switch 공통)
```
control/
  bg                 체크박스·라디오 박스 배경            {fill/inverse-main}
  on                 체크·선택 배경, 스위치 켜진 트랙      {fill/primary-main}
  on-green           초록 스타일 켜짐                      {fill/positive-main}
  on-negative        negative 체크                         {fill/negative-main}
  track-off          스위치 꺼진 트랙                      {surface/subtle}
  handle             스위치 핸들                           {fill/inverse-main}
  handle-disabled    스위치 핸들 disabled                  {fill/neutral-subtlest}
```
- ghost 스타일 박스는 배경 없음
- disabled는 공통 세트(`fill/disabled` 등)를 직접 사용, Switch만 트랙·핸들 `fill/neutral-subtlest` 예외
- 구조: `_Base/Checkbox` · `_Base/Radio` = 박스(bg) > state-layer > 체크·점, `_Base/Switch` = 트랙(bg) > state-layer > 핸들
- hover는 state-layer 오버레이 (꺼짐·ghost `neutral`, primary 켜짐 `on brand`, 초록 `on neutral`, negative `on negative`), 테두리 hover 변화는 유지

### Input (Input · Password · Input Quantity · Text Area · Select · Search Form · Map Search · DatePicker Input 공통)
```
input/
  bg               line 배경                      {surface/main}
  bg-soft          soft 배경                      {fill/neutral-subtlest}
  bg-soft-inverse  어두운 배경 위 soft            {fill/inverse-subtlest}
  bg-negative      soft · ghost 오류 배경         {surface/negative-subtlest}
  bg-readonly      read-only 배경                 {fill/neutral-subtlest}
  border           기본 테두리                    {border/neutral-main}
  border-hover     line hover 테두리              {border/primary-subtle}
  border-focus     focus 테두리                   {border/primary-main}
  border-negative  오류 테두리                    {border/negative-main}
  border-readonly  line read-only 테두리          {border/neutral-subtle}
```
- 텍스트 · 아이콘 · disabled는 semantic 직접 사용

### 모서리 (semantic `rounded/`)
```
rounded/
  control-sm   {rounded/md}   8   버튼 · 입력창 28 · 32
  control-md   {rounded/xl}  12   버튼 · 입력창 36 · 40
  control-lg   {rounded/3xl} 16   버튼 · 입력창 48
  surface-xs   {rounded/xl}  12   Pop Confirm 등 작은 팝오버
  surface-sm   {rounded/3xl} 16   카드 sm, Alert · Toast
  surface-md   {rounded/4xl} 20   모바일 모달 · Bottom Sheet
  surface-lg   {rounded/5xl} 24   카드 lg, 모달
  surface-xl   {rounded/6xl} 32   Card Layout xl
```
- Tailwind `borderRadius`에 같은 이름으로 추가 (`rounded-control-md` 등). pill · 원형은 Primitive `rounded/full`, 중첩 모서리(바깥 − 여백)는 계산값이라 Primitive `rounded/*` 허용

### Table (표 배경 — semantic)
```
table/
  header-main               {surface/main}             흰 헤더 (Minimal Table 포함)
  header-subtle             {surface/subtler}          회색 헤더
  row-main                  {surface/main}             본문 줄
  row-subtle                {surface/subtlest}         줄무늬 · 연한 줄
  row-selected              {surface/subtler}          선택 줄
  row-selected-primary      {surface/primary-subtler}  강조 선택 줄
  row-selected-negative     {surface/negative-main}    오류 · 경고 줄
```
- 헤더 셀 · 본문 셀 컴포넌트에는 배경을 두지 않고, 표를 만들 때 **헤더 줄 · 본문 줄 프레임**에 이 토큰을 넣는다
- component `table/*` 7개는 삭제됨 (표 배경은 semantic `table/*`만 사용)

### Map (지도 전용)
```
map/
  cluster-strong       Circle Cluster 진한 원 · 테두리   {fill/primary-main} 90%
  cluster-main         Circle Cluster 중간 테두리         {fill/primary-main} 60%
  region               지역 채우기 (MapCountry)          {fill/primary-main} 30%
  cluster-ring-subtle  클러스터 안쪽 흰 링               {fill/inverse-main} 10%
  cluster-ring         클러스터 안쪽 흰 링               {fill/inverse-main} 30%
  cluster-ring-strong  클러스터 안쪽 흰 링 (진함)        {fill/inverse-main} 60%
```
- 지도 색은 브랜드 primary를 따른다 (project mode에 따라 바뀜). 지도 배지 up · down은 증감 고정색(increase · decrease)

### Scrollbar
```
scrollbar/
  thumb    스크롤 막대     {fill/neutral-subtler}   950 25%
  track    스크롤 배경     {surface/subtler}        zinc/100
```

### Toggle Button
- 선택 안 됨은 outline · base 버튼, 선택됨은 outline 스타일이면 solid 버튼과 같은 규칙. base 스타일 선택됨은 글자 · 테두리만 바뀌므로 state layer는 `on neutral` (상태 규칙 2)
- 구조: variant(배경) > state-layer > 아이콘 · 레이블. hover · loading 배경은 default와 같음, loading 레이블 · 스피너는 default와 같은 색
- disabled: 선택된 outline(꽉 찬 배경)은 `fill/disabled` · 테두리 없음, 나머지는 배경 그대로 + `border/disabled`

### Text Button
- 속성: Color(neutral · neutral-subtle · primary · inverse) · `+ Underline`(밑줄 켜기) · Size(3xs · 2xs · xs) · State(default · hover · disabled)
- 모서리 0 (판이 없는 글자형이라 높이별 모서리 기준에서 제외, 사용자가 직접 변경)
- hover는 판 없이 **밑줄이 나타나고** 글자 · 아이콘을 한 단계 진하게: neutral 아이콘 `heading`, neutral-subtle `body-main`, primary `primary-strong`, inverse `inverse-heading` (사용자 결정 — 글자형 버튼은 글자 색 변화)

### 탭 · 세그먼트 상태 규칙
- 탭 버튼(`_Base/TabButton/*`)과 세그먼트(`_Base/Segment Button`)도 버튼과 같은 구조: variant(배경) > state-layer > 아이콘 · 레이블
- hover는 state layer만 바꾼다 (글자 · 아이콘 색은 그대로). 선택 안 됨 · 중립 선택은 `on neutral`, primary 선택은 `brand`
- 선택 표시는 배경 토큰: Ghost 탭 `surface/neutral-subtlest`, Segment neutral `surface/subtlest`, Segment primary `surface/primary-subtlest`
- Underline 탭 hover: 둥근 판(`rounded/md`), 위쪽은 탭 끝까지, 밑줄과 실제 4px 틈(아래 여백 = 밑줄 2px + 4px). 좌우 여백은 Ghost · Box 탭과 같게 (sm 8 · md 10 · lg/xl 12 · 2xl 16). 탭 사이 간격 sm · md 4, lg 이상 8. 선택 · 비선택의 위아래 여백은 같게

### 예전 색 변수 정리 규칙
- 투명 배경: 버튼 성격 컴포넌트는 `button/ghost/neutral/bg`, 그 외는 배경 제거
- 흰 배경: 버튼 성격은 `button/base/neutral/bg`, 판 · 카드는 `surface/main`
- 값이 정확히 같은 토큰만 연결, 이름과 컴포넌트 의미가 맞아야 함
- Category · Status Badge, 지도 마커 배지, DatePicker 공휴일 숫자 등 분류 · 표시용 색은 Primitive 그대로 사용

### 표 배경 그룹
`table`은 그룹 목록의 예외 — 표 배경 전용 semantic 그룹 (헤더 줄 · 본문 줄을 토큰으로 구분하려고 둠)

---

## 8. 컴포넌트 구조

### 버튼
- 세트: **Primary · Neutral · Negative · Inverse Button** (색 역할별)
- 속성: `Style`(solid · soft · outline · base · ghost) · `Type`(text · icon) · `Size`(sm ~ 2xl) · `Shape`(rounded · pill) · `State`(default · hover · loading · disabled)
- Inverse는 base가 solid와 같은 디자인이라 base 없음
- 레이어 구조
  ```
  variant (bg, 모서리 clip)
  └ state-layer (상태 오버레이 + auto layout, padding·gap = spacing 변수)
     ├ Icon leading
     ├ Button Label
     └ Right Icon
  ```
- 상태 규칙
  - **state layer 색 결정 규칙**
    1. 기본: state layer는 그 위 글자(없으면 아이콘) 색을 따른다. 검정 · 회색 → `on neutral`, 파랑 → `brand`, 빨강 → `negative` (테두리 · 배경 색은 그다음 기준)
    2. 선택(Active)으로 글자 · 테두리 색만 바뀌고 배경이 그대로면, 선택 안 된(default) 상태의 state layer를 그대로 쓴다 — 예: Toggle base 선택됨, Underline 탭 선택됨, Segment neutral 선택됨, BorderBox outline 선택됨 → `on neutral`
    3. 선택으로 배경이 꽉 찬 색으로 바뀌면, 그 배경 위 글자 기준 — 파랑 배경 + 흰 글자 → `on brand`, 검정 배경 + 흰 글자 → `inverse` (예: Toggle outline 선택됨, BorderBox solid 선택됨)
    4. 선택으로 배경이 연한 색(soft)으로 바뀌면 규칙 1(글자 색 기준)을 따른다 — 예: Segment primary 선택됨, Cascader 선택됨(연한 파랑 + 파란 글자) → `brand`
    - 규칙 1~3은 글자가 있는 컴포넌트(버튼 · 탭 · 세그먼트 · 메뉴)에 적용. 선택 컨트롤은 아래 컨트롤 규칙을 따른다
  - **내비게이션 항목(Side Navigation Item · Page Index Item)의 state layer는 글자 색이 아니라 항목의 Color를 따른다**
    - 밝은 배경: basic `on neutral`, brand `brand` / 어두운 배경: basic `inverse`, brand `nav-brand-inverse`(primary 20%)
    - hover 때 글자는 한 단계 진하게 (basic 회색 → 검정, brand 검정 → 파랑). selected는 배경 토큰: 밝은 basic `surface/neutral-subtler` · brand `surface/primary-subtler`, 어두운 basic `surface/inverse-subtler` · brand `fill/primary-subtle`
  - **선택 컨트롤(Checkbox · Radio · Switch)의 state layer는 박스 · 트랙의 배경을 따른다**
    - 배경이 흰색 · 회색 · 투명 → `on neutral` (체크 표시 색과 무관, secondary · ghost 포함)
    - primary로 꽉 참 → `on brand`, negative로 꽉 참 → `on negative`
    - 초록(positive)으로 꽉 참 → `on neutral` (positive 전용 state layer 없음, 필요하면 추후 `on positive` 검토)
  - hover · disabled: state-layer 색으로 표현 (solid는 `on {color}`, 나머지는 `{color}`, inverse는 `inverse`)
  - **neutral 배경(흰색·회색·투명) 위의 state-layer는 `on neutral`** — Neutral 버튼의 soft · outline · base · ghost, Inverse solid, Checkbox · Radio · Switch의 꺼짐 상태
  - **어두운 배경(Neutral solid) 위의 state-layer는 `inverse`** (흰색 오버레이). `state layers/neutral`은 사용처 없음, 삭제 보류(사용자 결정)
  - loading: 배경 `bg`, 레이블은 default와 같은 색
  - disabled: solid는 흰색 오버레이로 흐리게, 나머지는 `label-disabled` 대신 `text/disabled` · `icon/disabled`, inverse는 흰색 8% 판
  - **solid는 테두리 없음** (모든 상태). `button/solid/*/border` 3개는 사용처 없음, 삭제 보류
- pressed는 우선 넣지 않음

### Input 규칙 (Input · Password · Input Quantity · Text Area · Select · DatePicker Input 공통)
- 상태: default · hover · focus · filled · negative · read-only · disabled
  - 우선순위: disabled > read-only > negative > focus > hover > default
  - negative는 State가 아니라 별도 속성(Negative)으로 두고, default · hover · focus와 조합한다
  - line + negative: default · hover는 빨간 테두리 1px로 같은 모양, focus는 빨간 테두리 2px. state layer 사용 안 함
  - soft + negative: 테두리 없음. default는 연한 빨강 배경, hover는 `state layers/negative/hover`, focus는 `state layers/negative/focus` 오버레이
  - 정리: line은 테두리로, soft는 배경 오버레이(state layer)로 상태를 표현
  - soft · ghost는 모든 상태에 state layer가 한 겹 있다: default · disabled · read-only는 `…/default`(투명), hover · focus는 해당 단계 (오류는 `negative` 그룹, 그 외 `on neutral`)
  - soft 오류 상태의 hover · focus 오버레이(`negative/hover` · `negative/focus`)는 의도적으로 약하게 둔다 (hover와 focus 구분이 적어도 됨)
- placeholder(빈 값) 텍스트는 모두 `text/placeholder`
- 상태별 변화
  | 상태 | 배경 | 테두리 | 텍스트 · 아이콘 |
  |---|---|---|---|
  | default | 스타일 배경 | 기본 테두리 | 값 `text/body-main`, placeholder `text/placeholder`, 아이콘 `icon/body-subtle` |
  | hover | line 그대로 · soft는 `state layers/on neutral/hover` 오버레이 한 겹 추가 | line 연한 primary(`input/border-hover`, primary 30%) 2px · soft 없음 | 그대로 |
  | focus | line 그대로 · soft는 `state layers/on neutral/focus` 오버레이 | line primary 60%(`input/border-focus`) 2px · soft 없음 (바깥 링은 추후 검토) | 아이콘은 입력 텍스트와 같은 색 |
  | filled | 그대로 | 그대로 | 아이콘은 입력 텍스트와 같은 색 |
  | negative | soft · ghost만 연한 빨강 배경 | negative | 오류 문구 `text/negative-main` |
  | read-only | `input/bg-readonly` | line `input/border-readonly` · soft 없음 | 값은 default와 같은 색, 아이콘 `icon/body-subtle`, hover · focus 변화 없음 |
  | disabled | `fill/disabled` | `border/disabled` | `text/disabled` · `icon/disabled` |
- read-only: 값은 보이고 선택·복사·포커스 가능, 수정만 불가 (회원 아이디, 주문번호, 자동 계산 값, 권한상 보기만 가능한 값 등)
  - 값이 있는 경우(TextFill=true)만 제공. 제공: Input · Input Quantity · Text Area / 미제공: Password · Select
  - Input Quantity의 +/− 버튼은 read-only에서 disabled 상태로 표시
- 입력창은 스타일 · 상태와 상관없이 그림자를 쓰지 않는다
- 스타일: line(흰 배경 + 테두리) · soft(연한 회색 배경) · ghost(배경·테두리 없음) · inverse(어두운 배경 위 soft)
- 글자 수 표시는 Text Area에만
- Form Field 구성: 레이블 행(레이블 `text/body-main` · text-md/medium, (optional) `text/body-subtle`, 필수 * `text/primary-main`, 툴팁) → 입력창 → 도움말 · 오류 문구(입력창 아래, text-xs/normal, 오류는 `text/negative-main`), 세로 간격 8

### Search Form 규칙 (일반 검색 · 주소 검색 공용)
- `Show Label` true/false 옵션
- 검색어 목록은 선택적으로 노출/미노출 (`Show Suggestion` 옵션)
- focus + 검색어 입력(filled) 시 키워드 목록 노출
  - 항목: 1줄 주소(일치 키워드 `text/primary-main`) + 2줄 보조 주소(`text/body-subtle`)
  - 항목 hover: state layer `on neutral/hover`
  - 값이 있으면 지우기(×) 버튼

### Icon Button
- Color: primary · neutral · **neutral-subtle** · negative · inverse
  - neutral-subtle: 아이콘 `icon/body-subtle`, 배경 · hover는 neutral과 같은 `on neutral` state layer
- 배경은 state layer로 표현 (neutral · neutral-subtle → `on neutral`, primary → `brand`, negative → `negative`, inverse → `inverse`), loading 스피너는 default 아이콘과 같은 색
- 사용 규칙: 아이콘 버튼 색은 주변 텍스트 위계를 따른다. 입력창 · 검색창 안의 지우기(×) 버튼은 `neutral-subtle`, 뒤로 · 메뉴 같은 주요 동작은 `neutral`
- 구조는 2단(variant 배경 = state layer > 아이콘) 유지. state-layer 프레임을 따로 두지 않는다
- disabled는 배경 없이 `icon/disabled`(어두운 배경은 `icon/inverse-disabled`)만 쓴다
- 인스턴스에서 아이콘 색을 덮어쓰지 않는다. 다른 진하기가 필요하면 Color variant를 추가한다
- 빈 자리가 필요하면 아이콘 없는 버튼 대신 같은 크기의 빈 프레임 `Spacer`를 두고 크기는 `size/*` 변수에 연결한다

### Search 공통 (Search Form · Map Search · SearchMap/Logo)
- 상태는 default · focus 두 가지만 둔다
- basic(line형): default `input/border` 1px, focus `input/border-focus` 2px
- soft: 테두리 없음, `input/bg-soft` + state layer (`on neutral/default` · `/focus`)
- inverted(어두운 배경): `input/bg-soft-inverse` + state layer (`inverse/default` · `/focus`)
- 그림자: Search Form은 없음. 지도 위에 뜨는 Map Search floating · SearchMap/Logo와 드롭다운 판(키워드 목록 · Location selector)만 그림자 유지

### Map Search 규칙
- 레이블 없음, 타입 basic · soft · floating
  - basic · soft: 일반 Search Form과 비슷, 아래에 판(사이드바 등)이 있을 때
  - floating: 아래에 판이 없을 때 (지도 위)
- focus 상태의 아래 패널 (동시 노출 아님)
  - focus + filled=false → Location selector
  - focus + filled=true → 검색어 키워드 목록

### Select
- ghost: 배경 없음(투명). hover `state layers/on neutral/hover`, focus `on neutral/focus` 오버레이, negative는 `input/bg-negative` 배경 + hover 때 `negative/hover`, disabled는 배경 없이 `text/disabled`

---

## 9. 클로드 디자인 / 클로드 코드용 규칙 (초안)

```
## 토큰 사용 규칙
- 토큰에 있는 클래스만 사용 (rounded-lg, text-base, size-4.5 등)
- 회색은 zinc만 사용 (gray, slate, neutral, stone 금지)
- 글꼴은 font-sans만 사용
- rounded 단독 사용 금지 → rounded-xs 사용
- Semantic 색은 CSS 변수(var(--...))로 사용, Primitive 색 직접 사용 지양
- 텍스트는 text-*, 아이콘은 icon-* 토큰 사용 (fill-* 토큰을 아이콘에 쓰지 않음)
- 맞는 토큰이 없으면 임의로 만들지 말고 가장 가까운 토큰을 쓰고 대신 쓴 값을 알려줄 것

## 대괄호 값 규칙
- 대괄호 임의 값([ ])은 기본적으로 사용하지 않는다.
- 예외: Primitive Docs의 size 표에서 size-[…] 로 표시된 값만 허용
  ✅ size-4.5   ❌ size-[51px]   ❌ top-[88px]
```

---

## 10. 플러그인

- **Primitive Docs**: 컬렉션별 Name · Value · Class(또는 CSS 변수) 표 생성, Change log 기록
- **Palette Maker**: 기준색 하나로 50~950 팔레트 생성 (50~300 bg, 400~700 contents, 800~950 contrast), 복사 · 캔버스 문서 기능만

---

## 11. 남은 일

### 디자인시스템 코드 · 문서 (2026-10-30 기준)
1. **지도** — Templates v2.1의 반경 선택 · 면적 선택 · 인디케이터 페이지, Patterns 지도 검색 · 폴리곤 생성을 코드로 옮기기
2. **행정구역 색칠 지도(MapCountry)** — 시도 · 시군구 경계 데이터 정해지면 ECharts 지도로
3. **모바일 지도 화면 기준** — Templates에 모바일 프레임이 없어 PC 규칙으로 정한 배치(검색 막대 · 필터 가로 스크롤 · 목록 아래 시트 · 보고서 전체 화면). 모바일 시안이 생기면 맞추기
4. **차트 피그마 대조** — 📊 charts v1.0 라이브러리와 ECharts 테마(축 · 툴팁 · 범례 · 색) 대조
5. **GitHub 저장소 반영** — 이번 코드 변경(차트 ECharts, 표 셀 6종, 헤더 · 카드 · 배지 · 알림 · 모달 · 지도 · 슬라이더 · 아코디언 · 칩 등)
6. **피그마 게시** — Component v2.3 · Table v1.0 다시 게시(사용자)

### 이전부터 남은 일
1. border 투명도 값 점검 — 역할마다 단계 간격이 다름 (neutral main 10% · stronger 60%, primary main 80%, negative main 60%)
2. `state layers/on soft` 사용처 확인 후 정리 (on brand와 값이 같음)
3. `fill/hint` (면 색으로 쓰는 구분 막대) 이름 정리
4. Icon · Toggle · Square · Text 버튼을 새 구조(색 역할별 세트, state-layer)로 정리 — Text Button은 Style에 색과 모양이 섞여 있음
5. 상태색 아이콘(negative · positive · warning)이 text 단계로 진해진 부분 화면 확인
6. Select Negative=true placeholder 색 결정
7. 글자의 예전 font 변수 정리
8. 코드 확인: borderRadius 최신 값, fontSize xs=13, `zinc: colors.gray`, maxWidth 3xs · 2xs
9. AI 규칙 문서 확정 후 클로드 디자인 · 클로드 코드에 등록
10. disabled 공통 세트 미적용 컴포넌트 — 해당 컴포넌트 수정 시 반영: Toggle · Social · Icon · Text Button, Filter Button, ButtonGroup _Base, Input Quantity Group(내부 버튼), DatePicker(Button · Inline · CalendarItem), Slider, List Menu(행 state-layer disabled → default, 반영 후 `state layers/on neutral/disabled` · `brand/disabled` 삭제), Navigation SubMenu Item
11. 원본 세트 Control Button · ControlButton 삭제 여부 — 이 파일 사용처 0곳, Templates 등 다른 파일 사용 여부 확인 후 결정
12. 콘텐츠 폭 토큰 확인 — Primitive Layout `container`(Tailwind `maxWidth`)에 1180 · 1440 값이 있는지 확인, 없으면 추가
13. 입력창 Shape 속성 — pill 프로젝트가 생기면 Input · Password · Input Quantity · DatePicker Input에 `Shape=rounded/pill` 추가 (Text Area는 rounded 고정). 그전까지 pill 프로젝트는 지원하지 않음
14. Report Modal section 헤더(브랜드 색 배경)의 흰 글자 대비를 project mode별로 확인
15. Templates 베리에이션 추가 (범위 확인 필요)
16. Templates 3단계 — 새 레이아웃 규칙(콘텐츠 폭 · 간격 · 카드 Size · 모바일) 적용 (페이지별)
17. Templates — Table v1.0(헤더 배경 제거) · Charts v1.0 게시 후 업데이트
18. Templates — 차트 표 값: 나머지 45개를 막대 길이 기준으로 계산할지 결정, 선 차트(12 · 13개월) 축 라벨 · 도넛/파이 항목 라벨 기준 결정
19. Templates — 개인/법인 비율 셀 한 줄/두 줄 결정, 보고서 Report Modal 긴 내용 표시 방식 결정
20. Table v1.0 — Table Text 오른쪽 정렬 variant가 52px로 커지는 원인 수정, Minimal Metric에 Align=center 추가 검토
21. (필요할 때) Foundation 시각 문서 — 변수 · 스타일에서 자동 생성 (온보딩 · 개발 전달용)
---

## 변경 이력

> 형식: `날짜 · 대상 — 변경 내용`

### 2026-10-21
- **disabled 공통 세트 적용 (나머지 컴포넌트)** — List Menu state-layer `on neutral/disabled` → `/default` 33, Cascader `brand/disabled` → `/default` 5, Filter Button 배경 `fill/disabled` 60 · 테두리 `border/disabled` 40, Slider 트랙 `fill/disabled` 21, DatePicker Button 배경 · 테두리 5, Text Button 투명 배경 제거 15 · 밑줄 `icon/disabled` 3, ButtonGroup _Base 흰 배경 `surface/main` 15. **Toggle Button disabled 80**: 버튼 규칙대로 회색 판 → default와 같은 배경(흰색) + 테두리 `border/disabled` (**색 변화: 회색 배경 → 흰 배경**). DatePicker disabled 날짜의 범위 표시는 유지
- **예전 색 변수 정리 (같은 값)** — 투명 `button/ghost-default` → `button/ghost/neutral/bg` 약 1,400 · 배경 제거 약 180, 흰색(`button/neutral-default` · `white-default` · `color/zinc/00` · `badge/white` · `basic/*`) → `button/base/neutral/bg` 약 2,300 · `surface/main` 약 420, `button/brand · black-default` → `button/solid/primary · neutral/bg` 180, soft 20, `color/black/a/6` → `divider/neutral-subtle` 302, zinc/100 · gray-muted · zinc/200 · white/a/50 → surface · fill 169, 글자 zinc/950 · blue/600 → text 64. 색 변화 없음
- **Badge · 표시용 색 → Primitive** — Category · Status Badge 예전 `color/<색>/<단계>` 444곳 → 현재 Primitive 같은 이름(49종), Badge 흰색 4 → `static/white`, Map 배지 `amber/500` 8, `badge/dark` 20 → `zinc/800` + 투명도 90%, DatePicker 공휴일 숫자 `red/500` 8. 색 변화 없음
- **semantic 추가** — `divider/inverse-main`(흰색 20%, Page · Section Header 어두운 배경 구분선 22), `surface/neutral-subtlest`(zinc/800 4%) · `surface/inverse-subtlest`(흰색 4%) (Section Header supporting box 등 13 · 13). 색 변화 없음
- **값이 다른 예전 변수 정리 (색 변화 있음)** — 글자 `color/zinc/900` 38곳(Contents Header Bullet 30 · Title bar 8) → `text/heading-main` (#101828 → #030712), Segment Padded 배경 `color/slate/50` 40곳 → `surface/subtler` (#F1F1F3 → #F3F4F6). 투명 `color/black/0` 57곳 제거
- **Tabs state layer** — `_Base/TabButton` 248개에 state-layer 구조 추가(크기 변화 없음). Ghost: 선택 배경 예전 `ghost-black-hover` → `surface/neutral-subtlest`(같은 값), hover → `on neutral/hover` (zinc/800 4% → zinc/950 4%, 거의 같음). Box · BorderBox: hover 배경 예전 `neutral-black-hover` → default 배경 + `on neutral/hover` (**#F9FAFB → 흰색 위 950 4% ≈ #F6F6F7, 조금 진해짐**)
- **Underline 탭** — hover 배경 **새로 추가**(이전에는 hover 배경 없음): 둥근 판 `rounded/md`, 밑줄과 4px 틈. 좌우 여백 추가(sm 8 · md 10 · lg/xl 12 · 2xl 16) → **탭 너비 증가**(lg 71 → 95px). Tabs/Underline 탭 사이 간격 sm · md 8 → 4, lg · xl 16 → 8, 2xl 24 → 8 (레이블 사이 거리는 증가, lg 약 20 → 36px)
- **Segment Button** — `_Base/Segment Button`에 State(default · hover) 추가 30 → 60, state-layer 구조, hover **새로 추가**(`on neutral/hover`, primary 선택 `brand/hover`). 선택 배경 neutral `button/white-hover` → `surface/subtlest`, primary `bg/primary-subtlest` → `surface/primary-subtlest` (같은 값). 선택 안 된 primary · neutral 글자의 예전 `text/paragraph` 20곳은 남음
- **Toggle Button state layer** — 320개에 state-layer 구조 추가(크기 변화 없음), hover · loading 배경의 예전 변수(`white-hover` · `brand-hover` · `black-hover` · `solid-brand-loading` · `dark-loading`) 제거 → default와 같은 배경. hover 색 변화: 흰 배경 #F9FAFB → 흰색 위 state layer(글자 색 기준 `on neutral` 950 4% 또는 `brand` 파랑 8%), 파랑 선택 #2B7FFF → #155DFC + `on brand/hover`, 검정 선택 #1E2939 → #101828 + 흰색 8%. **loading 배경** #8EC5FF · #D1D5DC → 기본 파랑 · 검정, **loading 레이블 · 스피너** 연한 색(`text/primary-subtle` · `text/paragraph`) → default와 같은 색 (80). **선택된 outline disabled** 파랑 · 검정 배경 → `fill/disabled`, 테두리 없음 (20). 흰 글자 예전 `text/inverted-default` → `text/inverse-heading-main` 16 (같은 값)
- **state layer 색 결정 규칙 정리** — 규칙 1~3 추가(버튼 상태 규칙). Tabs BorderBox solid 선택됨: brand → `on brand`(20), black → `inverse`(20) (default는 투명이라 변화 없음, **hover 때 꽉 찬 탭이 살짝 밝아짐**). Toggle base 선택됨 · BorderBox outline 선택됨 · Underline 선택됨 · Segment neutral 선택됨은 규칙 2에 따라 `on neutral`
- **선택 컨트롤 state layer 규칙 추가** — 박스 · 트랙 배경 기준(흰색 · 회색 · 투명 `on neutral`, primary `on brand`, negative `on negative`, 초록 `on neutral`). 현재 Checkbox · Radio · Switch와 같은 내용이라 컴포넌트 변경 없음
- **연한 배경 선택 상태 = 글자 색 기준 (규칙 4)** — Cascader 1depth 선택됨 6 · Cascader 2depth+ 선택됨 6(예전 `on soft` 5 포함) · Profile Menu List 선택됨 2: `on neutral` · `on soft` → `brand` (hover 때 연한 파랑 오버레이). Cascader 2depth+ 선택됨 disabled 5는 `brand/default` → `on neutral/default` (둘 다 투명, 변화 없음)
- **Square Button 정리** — 180개에 state-layer 구조 추가(크기 변화 없음), hover · loading 배경의 예전 변수 제거 → default 배경, state layer는 글자 색 기준(solid primary `on brand`, solid neutral `inverse`, primary 글자 `brand`, 그 외 `on neutral`). **solid 테두리 제거**(default 30% · hover/loading 15% → 없음, 60, 모든 solid 버튼과 통일). **outline neutral 테두리** 예전 `color/black/a/80`(80%) · loading 15% → `border/neutral-accent`(100%, Neutral Button outline과 통일, 30). loading 글자 · 아이콘 연한 색 → default와 같은 색. base neutral 흰 배경 `fill/inverse-main` → `button/base/neutral/bg`(같은 값). 아이콘 예전 `color/white` → `icon/inverse-heading-main`(같은 값, 10). **State=disabled 추가** 60개(180 → 240): solid `fill/disabled` · 테두리 없음, outline · base 배경 그대로 + `border/disabled`, `text/disabled` · `icon/disabled`. hover 색 변화는 Toggle과 같음(#F9FAFB · #2B7FFF · #1E2939 → 기본 배경 + state layer, loading #8EC5FF · #D1D5DC → 기본 배경)
- **solid 버튼 테두리 제거** — Primary · Neutral · Negative Button solid 180개(각 60)의 테두리 `button/solid/*/border`(950 15%) 제거. Square Button solid도 테두리 없음으로 통일. **색 변화: 꽉 찬 버튼 가장자리의 연한 테두리가 사라짐.** `button/solid/primary · neutral · negative/border` 사용처 0, 삭제 보류
- **Square · Toggle Button을 버튼 토큰으로** — 배경 · 테두리를 `button/{style}/{color}/bg · border`로 통일 (Square 300곳 · Toggle 330곳). 색 변화: **outline primary 테두리** `border/primary-subtle` 30% → `button/outline/primary/border` 80% (진해짐, Square 30 · Toggle 30), **base primary 테두리** 15% → `button/base/primary/border` 10% (연해짐, Square 30 · Toggle 30). 나머지는 같은 값(이름만 변경). disabled는 공통 세트 유지. Toggle base 선택됨의 선택 테두리(primary 30% · neutral 100%)는 선택 표시라 유지
- **component 토큰의 Primitive 직접 참조 정리** — `button/solid/primary/bg` `palette/600` → `fill/primary-main`, `button/outline/primary · neutral · negative/bg` `static/white` → `fill/inverse-main` (값 같음). 남은 11개는 아래 항목에서 정리
- **semantic 추가 + 버튼 토큰 참조 정리** — 새 semantic: `fill/none`(투명), `fill/primary-subtlest`(primary 10%), `fill/negative-strong`(red/600), `fill/negative-subtlest`(red/500 10%), `border/inverse-strong`(흰색 80%). ghost 4종 · outline inverse 배경 → `fill/none`, soft primary → `fill/primary-subtlest`, solid negative → `fill/negative-strong`, soft negative → `fill/negative-subtlest`, outline inverse 테두리 → `border/inverse-strong` (색 변화 없음). **색 변화**: soft neutral 배경 #1E2939 6% → `fill/neutral-subtlest` #030712 8% (조금 진해짐), soft inverse 배경 흰색 10% → `fill/inverse-subtlest` 6% (조금 연해짐). 이제 버튼 component 토큰은 모두 semantic만 참조
- **Filter Button state layer** — 240개에 state-layer 구조 추가(최소 크기 포함, 크기 변화 없음). hover · focus 배경의 예전 변수(`neutral-black-hover` #F9FAFB · `ghost-black-hover` zinc/800 4% · `soft-black-hover` zinc/800 10% · `soft-brand-hover` 파랑 15%) 제거 → default 배경 + state layer(`on neutral/hover · focus`, soft 선택됨은 `brand/hover · focus`). **disabled**: neutral · dashed 회색 판(`fill/disabled`) → default 배경(흰색 · 투명) + `border/disabled` (40, 버튼 규칙의 테두리형 disabled), soft는 `fill/disabled` 유지
- **state layers/brand/focus 값 변경** — 파랑 12% → **8%** (brand/hover와 같은 값). 사용처는 Filter Button soft · 선택됨 · focus 10곳뿐 (연한 파랑 배경 위에서 너무 진해 보여서 조정)
- **Split Button Group state layer** — 기반 버튼 `_Base/Text` · `IconText` · `Icon/Icon` · `Icon/IconText` 80개에 state-layer 구조 추가(크기 변화 없음). **hover 표현 변경**: 파란 글자 · 아이콘(selected와 같은 모양) → 검정 글자 · 아이콘(default와 같음) + `on neutral/hover`(950 4%). selected는 파란 글자 유지(state layer `on neutral/default`, 규칙 2). disabled 흰 배경 `surface/main` → `button/base/neutral/bg`(같은 값). Text Button Group(텍스트 링크)은 대상 아님
- **인스턴스 여백 중복 수정** — state-layer 구조로 바꾼 컴포넌트의 인스턴스 중 루트 여백 · 간격 덮어쓰기가 남아 있던 738곳(Segment 세트 420 · Split Button Group 300 · Header의 Filter 18)에서 덮어쓰기를 state-layer로 옮김. 여백이 두 번 적용돼 커지고 겹치던 문제 해결 (원래 크기로 복구)
- **Pagination 페이지 번호 버튼 교체** — 캔버스에서 삭제된 예전 버튼 세트 `sm`(160개, 예전 변수 · destructive/white 이름) 인스턴스 45곳 → `Neutral Button`(ghost · text · sm, default/hover). 숫자 글자 그대로 유지, 교체 시 따라온 루트 여백 덮어쓰기 제거, 한 자리 숫자는 28×28 유지(버튼 너비 28 고정 + state-layer 채움). hover는 예전 `ghost-black-hover` → state layer `on neutral/hover`. 예전 `sm` 세트 사용처 0 (원본 삭제 여부는 Templates 정리 때 결정)
- **Pagination 현재 페이지 표시** — 현재 페이지를 hover 모양(회색 판)으로 표시하던 것을 글자 색으로 구분: 현재 페이지 `text/heading-main`(검정), 다른 페이지 `text/body-subtle`(회색) (4개 variant, 숫자 30곳). hover는 회색 판(state layer) 그대로라 현재 페이지와 hover가 구분됨
- **Side Navigation · Page Index Item 토큰 최신화 (구조 유지)** — 새 semantic `surface/neutral-subtler`(zinc/800 8%) · `surface/inverse-subtler`(흰색 8%) 추가. selected 배경 `color/black/a/8` → `surface/neutral-subtler` 5, `color/white/a/8` → `surface/inverse-subtler` 5, 투명 `color/white/a/0` → `fill/none` 3. 색 변화 없음. state layer 구조는 미적용(남은 일), brand 색은 미정
- **Side Navigation brand (밝은 배경) 색 정리** — 가장 가까운 primary semantic으로: hover `palette/alpha/8`(#2B7FFF 8%, 흰 바탕 위 ≈ #EDF4FF) → `surface/primary-subtlest` #EFF6FF, selected `palette/alpha/15`(≈ #E1ECFF) → `surface/primary-subtler` #DBEAFE (아주 조금 변함). 어두운 배경 brand(20% · 40%)는 미정
- **Nav 항목 state layer** — SubMenu Item 3: state-layer 추가, hover 예전 `ghost-black-hover`(zinc/800 4%) → `on neutral/hover`(950 4%). Nav Menu Item 8: hover 판 프레임(`navitem`)의 예전 `ghost-black-hover` → `on neutral/hover · default` (hover 표시가 생김, 밑줄과는 떨어진 판). _Base/NavItem 12: state-layer 추가(최소 크기 유지), **hover 때 파란 글자 · 아이콘 → default 색 + `on neutral/hover`**, selected(파랑 배경)는 `on brand`. 인스턴스 루트 여백 덮어쓰기 10곳 state-layer로 이동. Nav Menu Item 밑줄의 예전 `items/subtle`(zinc/600)은 남음
- **Side Navigation brand (어두운 배경) 색 정리** — `fill/primary-subtle`(primary 500 불투명, 사용처 0)을 **primary 600 40%**로 재정의, 새 `fill/primary-subtler`(primary 600 20%) 추가 → fill primary 사다리: subtlest 10% · subtler 20% · subtle 40% · main 100%. 어두운 배경 brand hover `palette/alpha/20` → `fill/primary-subtler`, selected `palette/alpha/40` → `fill/primary-subtle` (500 기준 → 600 기준으로 아주 조금 진해짐). 세트 안 `palette/alpha` 0. (중간에 꽉 찬 `fill/primary-main`으로 바꿨다가 너무 밝아서 되돌림)
- **내비게이션 항목 state layer** — 새 그룹 `state layers/nav-brand-inverse`(primary 600 default 0% · hover 20%). Side Navigation Item 24 · Page Index Item 12에 state-layer 구조 추가(크기 변화 없음), hover 배경 = default 배경 + 항목 Color 기준 오버레이(밝은 basic `on neutral` · brand `brand`, 어두운 basic `inverse` · brand `nav-brand-inverse`). hover 글자 진해짐 · selected 배경은 그대로. 색 변화: 어두운 basic hover 흰색 4% → 8%, 밝은 brand hover 파랑 500 기준 → 600 기준(거의 같음). 인스턴스 루트 여백 덮어쓰기 24곳 이동. 내비게이션 규칙 추가
- **이름 정리** — `Squre Split Button Group` → `Square Split Button Group`, Split Button Group 속성 `Button Conut` → `Button Count`, Callout Marker 값 `Outine` → `Outline`(2), NICE 로고 값 `Whtie` → `White`(1). Profile Menu List의 임시 이름 `State4 · 5 · 6` → `disabled · hover · default`(Active=true와 조합). Profile Menu 선택됨은 배경이 그대로(흰색)라 규칙 2에 따라 state layer `brand` → `on neutral`로 바로잡음(앞서 규칙 4로 잘못 적용), disabled 오버레이 예전 `on neutral/disabled` → 투명, 행 배경 `bg/main` → `surface/main`(같은 값)
- **Side Navigation brand 2depth selected를 1depth와 통일** — 밝은 배경: 회색 `surface/neutral-subtler` + 검정 글자 → `surface/primary-subtler` + `text/primary-main`(파랑), 어두운 배경: 흰색 8% `surface/inverse-subtler` → `fill/primary-subtle`(파랑 40%), 글자 흰색 유지. 불릿 아이콘은 글자와 같은 색. 밝은 배경 brand 2depth hover 글자도 `text/body-main` → `text/primary-main`(1depth와 같게)
- **카드 여백 = 모서리 규칙 적용** — 규칙: 둥근 판의 안쪽 여백 ≥ 모서리 값(같거나 spacing 1단계 큼). Statistic · Text Card card 스타일 16개: 여백 20/16 → `spacing/6`(24, 모서리 24와 같음), **높이 +8, 내용 폭 −16**. ghost 스타일(모서리 0)은 20/16 유지. Card Layout: Default(모서리 32) 24/32 → `spacing/8` 32, Size3(모서리 24) 20/16 → `spacing/6` 24, Size2(모서리 16) 14/12 → `spacing/4` 16 (Size2 · 3은 높이 변화)
- **카드 늘어나는 구조** — Statistic · Text Card 32개: 제목 영역 Fill, 설명(최대 2줄) · Text Card 본문(최대 3줄) Fill + 말줄임, 최소 폭 240. Card Layout 3개 최소 폭 320. 원본 크기 변화 없음. 1/4 · 1/3 · 1/2 칸에 Fill로 넣어 확인. 카드 크기 규칙(4칸 그리드 · 최소 폭 · 내용별 카드 선택 · 넘침 처리)을 적용규칙에 추가
- **Global Navigation `Width=wide(1440px)` 추가** — fixed(1180px) 4개를 복제해 Container 1440으로 (8 → 12개, 속성 연결 복구). 콘텐츠 폭 규칙: default 1180 · wide 1440 · full(좌우 48), GNB Width를 같은 폭으로
- **페이지 레이아웃 확정 (Claude Design 적용규칙)** — 글자 용도별 스타일, 콘텐츠 폭(default 1180 · wide 1440 · full), 페이지 간격(상단 40 · 제목~섹션 32 · 섹션 사이 48 · 섹션 제목~내용 16 · 카드 사이 16 · 좌우 최소 48), 카드 크기(4칸 그리드), 모서리와 여백 규칙
- **버튼 선택 기준 확정 (Claude Design 적용규칙)** — Style은 중요도(solid 1개 · 2순위 soft/outline 중 프로젝트별 하나 1~2개 · 회색 배경 base · ghost), Size는 놓이는 곳(기본 md · 표/필터 sm · 폼/모달 하단 lg · 입력창 옆은 같은 높이), Shape는 프로젝트별 rounded/pill 택1(혼용 금지, Shape 속성 있는 모든 컴포넌트에 같은 값). 적용규칙에 "프로젝트 설정" 섹션 추가
- **입력창 선택 기준 확정 (Claude Design 적용규칙)** — 스타일은 입력창 뒤 배경으로: 흰 바탕 폼 line, 흰 바탕 검색창(기본) · 필터 soft, 회색 바탕이면 line, 표 · 툴바 Select ghost, 어두운 바탕 inverse. 검색창과 같은 줄의 Select · DatePicker는 검색창 스타일. 크기는 기본 xl · 필터 md · 큰 입력 2xl. Shape는 현재 rounded만 지원
- **버튼 · 입력창 그림자 제거** — Toggle Button 240 · Filter Button 90 (`components/default` 등). 나머지 버튼 · 입력창은 원래 없음
- **그림자를 elevation으로 통일** — 컴포넌트의 `shadow/*` · `components/default` → 기존 효과 스타일 `elevation/elevation-0~5`: 붙어 있는 요소 · 카드 elevation-1 (Segment 150 · Tabs 374 · Switch 등 45 · Card Layout 3 …), 떠 있는 컨트롤 elevation-2 (Slider 62 · 지도 검색 8 · 마커 4 …), 드롭다운 · 툴팁 · 달력 · Expanded Alert elevation-3, 모달 elevation-4 (Dialog 26 · Report Modal 16), Toast elevation-5. 그림자가 단계별로 조금씩 달라짐(모달은 더 떠 보임). 직접 값 그림자 0. `shadow/*`는 Primitive로 유지
- **Claude Design 문서 갱신** — 적용규칙 v0.3(상태 표현 장 전면 정리, 글자 · 레이아웃 · 카드 · elevation · 버튼 · 입력창 기준, 프로젝트 설정, 금지 사항 추가, 미정은 모바일만 남음), 컴포넌트가이드 v0.2(버튼 · Toggle · Square · Segment · Pagination 규칙, 정리 필요 목록 갱신)
- **나머지 컴포넌트 예전 변수 정리 (1단계)** — 새 semantic `surface/primary-strong`(palette/900) · `fill/primary-strong`(palette/700). Badge 테두리 `color/{색}/a/20` 96곳 → Primitive `{색}/500` + 20%, 흰색 50% → `static/white` 50%, `badge/gray` → `zinc/100` (색 변화 없음). Chip `palette/100 · 600` → `surface/primary-subtler` · `fill/primary-main`, Page Header `palette/50 · 900` → `surface/primary-subtlest` · `surface/primary-strong`, Report Modal `palette/700` → `fill/primary-strong` · `zinc/50` → `surface/subtlest`, Toast → `surface/inverse-main`, Navigation 예전 투명 → `fill/none`, Menu 흰 배경 → `surface/main` (색 변화 없음). 조금 변함: Modal 아이콘 원 배경 검정 6% → `fill/neutral-subtlest` 8%, 파랑(500) 15% → `fill/primary-subtlest`(600 10%), Title bar · MenuButton 테두리 #27272A 기준 → `border/neutral-subtle · main`(950 기준), Menu Area 글자 `text/paragraph` → `text/body-subtle`. AvatarLogo 파란 아이콘은 로고라 그대로
- **`text/paragraph` 정리 (1차)** — 예전 이름 `text/paragraph`(zinc/600 #4A5565)를 컴포넌트별로: Category Badge 20 · Page Header(Wide · Narrow · Centered) 21 · Section Header 32 → `text/body-main`(#1E2939, 진해짐), Status Badge 8 · Change Badge 1 → `text/body-subtle`(#6A7282, 연해짐). 나머지 사용처는 다음 단계에서 결정
- **선택 상태 글자 굵기** — `_Base/Segment Text`(Text Button Group) 선택 레이블 semibold → medium (8, 선택 안 됨은 normal이라 구분 유지). 선택 안 된 상태가 이미 medium인 컴포넌트(List Menu 6종 · Cascader · Segment Button · Side Navigation · Page Index · Location selector)는 보류. Accordion · 지도 마커 제외. Control Box · Nav Menu Item은 선택 안 됨도 semibold라 변경 없음
- **메뉴 · 내비게이션 글자 굵기 한 단계 낮춤** — List Menu 6종 · Cascader 2종 · Segment Button · Side Navigation · Page Index · Location selector: medium → normal 156, semibold → medium 312 (선택 안 됨 normal, 선택 medium). 높이 변화 없음. 규칙: semibold · bold는 제목에만
- **레이블 굵기 정리 (semibold · bold는 제목 · 숫자만)** — semibold → medium: Category Badge 228 · Status Badge 60 · Basic Badge 1 · Chip 레이블 128 · Profile 18 · Tooltip 1 · SubMenu Item 3 · Control Box 9 · Location 이동 버튼 2 · Slider 값 2. 탭 개수(00) bold → medium 248. 유지: 제목류, 숫자 강조(Statistic Number · Quantity · 지도 Cluster · Chip 개수), Text Card 본문(semibold), 지도 마커. GNB Menu Item은 GNB 전용 글자 스타일 `component/gnb-menu`(17px · medium · 줄높이 24, Component 파일 로컬 스타일)를 새로 만들어 연결(8, SemiBold → medium). 다른 곳에서는 쓰지 않음
- **`text/paragraph` 정리 (2차)** — 본문 · 내용 → `text/body-main`: Accordion 8 · Modal 본문 14 · Inline Alert 2 · Segment Text 4 · Breadcrumb 1 · Text Button 3. 설명 · 캡션 · 단위 → `text/body-subtle`: List Menu 설명 · Caption 30 · SubMenu 1 · Map List 4 · Callout Marker 4 · Rectangle Cluster 1 · Statistic Number 단위 20 · DatePicker "부터" 15 · Slider 값 33. 남은 곳: Badge/Basic 1 (사용처 없는 예전 배지)
- **DatePicker state layer** — 날짜 셀: 날짜 원 hover 예전 `ghost-black-hover` → `on neutral/hover`(15), 나머지 → 투명 `on neutral/default`(27), 선택된 파란 원 유지, 범위 배경 `bg/primary-subtlest` → `surface/primary-subtlest`(34, 같은 값). DatePicker Button: **Neutral base 버튼 규칙**으로 — 배경 `button/base/neutral/bg`, 테두리 `button/base/neutral/border` 1px(disabled `border/disabled`), state-layer 구조 추가(hover `on neutral/hover` · focus `on neutral/focus`), 모서리를 높이 기준으로(sm · md `rounded/md`, lg · xl `rounded/xl`, 2xl `rounded/3xl`), focus 글자 · 아이콘은 파랑(사용자 결정). (중간에 Input 규칙 2px 테두리로 잘못 적용했다가 바로잡음) DatePicker Inline: hover · focus를 state layer로 (아래 'DatePicker 글자 · 아이콘 색' 항목 참고). 달력 제목: hover 판 → `on neutral/hover`, 임시 이름 `State4 · 5 · 6` → `hover · disabled · default`, lg · xl disabled 글자 `text/body-subtle` → `text/disabled`. DatePicker Input 흰 배경 → `input/bg`, 입력 상자 테두리를 Input line 규칙으로(기본 `input/border` 1px · hover `input/border-hover` 2px · focus `input/border-focus` 2px · disabled `border/disabled` + `fill/disabled`)
- **Badge/Basic 삭제** — 예전 단독 배지 `Badge/Basic/2. sm/xs/gray/rounded/false` (이 파일 사용처 0 확인 후 삭제). 이제 `text/paragraph`를 쓰는 컴포넌트 0곳 (변수 자체는 남아 있음, 삭제 보류)
- **높이별 모서리 기준 적용** — 버튼 · 입력창 모서리: 28 · 32 → `rounded/md`, 36 · 40 → `rounded/xl`, 48 → `rounded/3xl` (적용규칙에 추가). DatePicker Inline 전 크기 6 → 기준값, DatePicker Button 2xl 12 → 16, Select sm 12 → 8, Search Form md 12 → 8
- **DatePicker 글자 · 아이콘 색 (사용자 결정)** — Button focus: 글자 · 아이콘 파랑(`primary-main`). Inline: hover = 회색 판(`on neutral/hover`) + 글자 · 아이콘 `heading-main`, focus = 투명 판 + 글자 · 아이콘 파랑
- **나머지 hover 정리** — Box Accordion hover: 파란 글자 → 기본 글자 + 기본 배경 위 `on neutral/hover` (selected 회색 배경과 비슷해도 유지). Text Accordion hover: 글자형이라 판 없이 **제목 글자 · 아이콘 파랑**으로 표시 (아이콘은 Icon Button Color=primary, 사용자 결정). Map Menu hover 예전 `neutral-black-hover` → `surface/main` + `on neutral/hover`, 테두리 예전 `border/default` → `border/neutral-main`. Map List hover → `surface/main` + `on neutral/hover`. Location selector 버튼 hover: 글자 진해짐 → 기본 글자 + `on neutral/hover`, `bg/*` → `surface/*`(같은 값). Control Box hover 테두리 primary 80% → `border/primary-subtle` 30%, `bg/main` → `surface/main`, selected 배경 `surface/primary-subtlest`(연한 파랑 판, 사용자가 직접 변경) + 테두리 `border/primary-accent`. (hover 오버레이는 배경 칠 위에 한 겹 더 쌓는 방식)
- **Text Button 구조 정리** — Style(색 · 모양 섞임) → **Color**(basic→neutral, muted→neutral-subtle, primary, white→inverse) + 켜고 끄는 **`+ Underline`** 속성(모든 variant에 밑줄 레이어, 색은 글자와 같은 계열). 사용처 0이던 underline 스타일 9개 삭제(45 → 36). hover: 회색 판(예전 `ghost-black-hover`) 제거 → **밑줄 표시(속성과 상관없이) + 글자 · 아이콘 한 단계 진하게**, 밑줄은 글자 기준선 바로 아래(xs y19 · 2xs y16 · 3xs y14), 글자 폭과 같은 길이의 고정 위치라 높이 변화 없음 (neutral 아이콘 heading, neutral-subtle body-main, primary `primary-strong`, inverse inverse-heading). 크기 변화 없음, 인스턴스 176곳 연결 유지
- **Text Button 모서리** — 8 → 0 (사용자 직접 변경). 판 없는 글자형 버튼이라 높이별 모서리 기준에서 제외
- **지도(Map Item) 색 정리 — 브랜드 색 따름** — component `map/*` 5개 추가(primary 90 · 60 · 30%, 흰 링 10 · 30%), semantic `border/increase-main` · `border/decrease-main` 추가. Circle Cluster · MapCountry `palette/alpha/90 · 60 · 30` → `map/*` (63), 마커 · Rectangle Cluster · 지도 배지 `palette/600` → `fill/primary-main`, Callout Marker `palette/900` → `surface/primary-strong` · `palette/800` 테두리 → `fill/primary-strong`, 흰 글자 · 테두리 · 면(연결 안 됨) → `text/inverse-heading-main` · `border/inverse-accent` · `fill/inverse-main`, Map List 구분선 → `divider/neutral-strong`. 지도 배지 up · down outline 테두리 → `border/increase-main` · `border/decrease-main`. **색 변화**: 클러스터 · 지역 primary 500 기준 → 600 기준(아주 조금 진해짐), Callout 테두리 800 → 700, down 배지 테두리 #155DFC → #2B7FFF(증감 색과 같게)
- **모달 · 알럿 · 토스트 등 규칙 점검** — 색 토큰 · 상태 · 그림자 · 글자 굵기는 규칙대로 확인. 모서리와 여백 규칙 적용: 작은 컴포넌트는 모서리를 줄임(Pop Confirm 16 → 12, 크기 그대로. Toast는 처음에 16 → 12로 줄였다가 규칙 정정 후 사용자가 16으로 되돌림), 모달 계열은 여백을 늘림(Bottom Sheet 16 → 20 · 20 → 24, 높이 +8 · Report Modal 20 → 24). Card Layout Slot 흰 배경 → `surface/main`. 알약 · 원형은 규칙 예외
- **Alert 모서리 · 여백 한 단계 올림 (사용자 요청)** — Inline Alert: Toast와 같은 스타일로 맞춤 — 모서리 16 · 여백 상하 12 · 좌우 20 (사용자 직접 수정). Expanded Alert: 모서리 16 · 여백 20 (사용자 직접 수정, 높이 156 · 176 · 196)
- **Report Modal 모바일형 여백** — Menu Position=top 4개: 제목 영역 24 · 내용 영역 20/32 → 모두 `spacing/5` 20 (제목 · 메뉴 · 내용 왼쪽 끝 정렬), 모서리 24 → `rounded/4xl` 20 (여백 ≥ 모서리 규칙). 크기 그대로. PC형(Menu left)은 24 유지
- **모서리와 여백 규칙 정정** — 상하 · 좌우 여백이 다를 때 **큰 쪽**을 기준으로 본다(이전 "작은 쪽"은 잘못 적은 것). 재점검 결과 Inline Alert · Toast(r16 · 12/20), Expanded Alert, Pop Confirm, Bottom Sheet, 카드류 모두 맞음. Report Modal은 판 자체 여백 0, 안쪽 영역 여백으로 판단
- **카드 그림자** — Statistic Card · Text Card의 card 스타일 16개에 `elevation/1` 적용 (ghost 스타일은 그림자 없음). Card Layout은 이미 elevation-1 → 모든 카드가 같은 그림자
- **Statistic Number 간격** — 숫자 영역과 증감 배지 사이 gap 4 → 2 (사용자 직접 수정)
- **카드 Size 속성** — Card Layout `Size=Default · Size3 · Size2` → `lg · md · sm`(여백 · 모서리 32 · 24 · 16). Statistic Card · Text Card에 `Size=md · sm` 추가(16 → 32개씩): md = 지금 값(여백 · 모서리 24), sm = 여백 16 · 모서리 16(`rounded/3xl`) · 안쪽 간격 12 (ghost 스타일 sm은 여백 16/12). 높이 약 −20. 규칙: PC는 md, 모바일 · 좁은 칸은 sm
- **중첩 모서리 규칙 추가 + Segment 적용** — 규칙: 안쪽 모서리 = 바깥 모서리 − 사이 여백 (적용규칙 5장, 버튼 · 입력창 · 배지 · 메뉴 항목은 예외). Segment Primary · Neutral · Padded 120개: 트랙 모서리를 높이 기준(sm · md 8, lg · xl 12, 2xl 16, Primary lg 8 → 12 포함), 항목 420곳: Primary · Neutral은 트랙과 같은 값(여백 0), Padded는 트랙 − 2(6 · 10 · 14)
- **semantic 모서리 토큰 추가** — `rounded/control-sm · md · lg`(8 · 12 · 16), `rounded/surface-sm · md · lg`(16 · 24 · 32). 버튼 4세트 760 · Toggle · Square · Filter · Icon Button · 입력창 · Select · Search · DatePicker · Segment 트랙 → `control-*`, 카드 · Alert · Toast · 모달 → `surface-*`로 연결(값 같음, 모양 변화 없음). Primitive로 남은 것: pill(`full`), Segment Padded 항목(중첩), Pop Confirm 12 · Bottom Sheet · Report Modal 모바일 20, Select 드롭다운 판 · 항목(16 · 12)
- **Statistic Card 간격 (사용자 직접 수정)** — 제목 영역 ~ 숫자 사이 gap: md 16 → `spacing/6` 24, sm 12 → `spacing/4` 16 (제목 영역 안 간격 12는 그대로). 높이 md 134~146 · sm 110~122. 규칙상 카드 안쪽 큰 간격 = 카드 여백과 같은 값
- **`rounded/surface-xs`(12) 추가** — Pop Confirm 모서리 연결 (값 같음)
- **카드 sm 최소 폭** — Statistic · Text Card Size=sm 32개 최소 폭 240 → 150 (모바일 2열: 390 화면에서 칸 169). md는 240 유지
- **Text Card 간격** — Statistic Card와 같은 기준으로: 제목 영역 ~ 본문 gap md 16 → `spacing/6` 24 · sm 12 → `spacing/4` 16 (높이 md +16 · sm +8)
- **surface 모서리 단계 추가** — 20 단계를 위해 이름을 다시 매김: `surface-lg`(32) → `surface-xl`, `surface-md`(24) → `surface-lg`, 새 `surface-md`(20, `rounded/4xl`). 연결은 이름만 바뀌어 유지. Report Modal 모바일 · Bottom Sheet의 20 모서리 14곳 → `surface-md`. 
- **카드 Size 이름 = 모서리 토큰 단계** — Statistic · Text Card `Size=md` → `lg`(sm 그대로), Card Layout `lg · md · sm` → `xl · lg · sm`. 값 이름만 바뀌어 인스턴스 연결 유지. 규칙: PC 카드 lg, 모바일 · 좁은 칸 sm, 20(md)은 필요할 때 추가
- **Statistic · Text Card 설정 간소화** — `Title Size` · `Gap` 속성 삭제, variant 32 → 4개씩(Style × Size). 제목은 Size에 묶음(lg `text-sm/medium` · sm `text-xs/medium`), 간격은 auto 배치로 통일, Statistic의 숫자 배치를 Size에 고정(lg 가로 · sm 세로), 안쪽 Tooltip 설정 노출 해제. 남긴 것: Metric(value · 단위 · 증감) · Change Type · 아이콘 토글. Templates v2.1 사용처(Statistic 11 · Text 3, 모두 Title Size=sm)는 남긴 lg variant와 같은 노드라 연결 · 모양 유지. 카드 variant 폭을 275 고정으로 정리
- **Statistic Number 정리** — 속성 이름 `vAlign` → `Align`(left · justify · right), `hAlign` → `Direction`(horizontal · vertical), `FontSize` → `Size`(base · lg · xl · 2xl), 연결 유지. 단위 글자 xl · 2xl 13 → `text-sm/normal` 14 (10곳). variant 20개는 실제로 모두 쓰여서 그대로 유지(가로 left · right 8개만 사용처 없음)
- **모바일 기준 확정 (적용규칙 5장)** — 구간(모바일 ~767 · 태블릿 · PC 1024~), 모바일 간격(좌우 20 · 상단 24 · 섹션 32 · 카드 12), 제목 크기(xl · base), 카드 sm · Statistic 2열(세로 배치), 입력창 16px, 하단 버튼 2xl, 모달 방식, 표 처리, hover → pressed
- **Report Modal 구조 (모바일 대응)** — 16개 모두 높이 고정 → 내용에 맞춤 + 최대 640, 내용 영역은 최대 높이(640 − 제목 영역) · 최소 240 · 세로 스크롤 · 위 정렬. 모바일형(Menu top) 폭 400 → 최소 320 · 최대 560(폴드 등 큰 모바일 고려), 상단 메뉴 가로 스크롤. PC형 폭 700 유지
- **Report Modal 버그 수정** — semantic 모서리 연결 때 네 모서리를 한꺼번에 묶으면서 section 헤더(Title Wrap) 아래 모서리까지 둥글어진 것 → 아래 모서리 0으로 복구(8). 높이를 내용 맞춤으로 바꾸면서 왼쪽 메뉴 판이 짧아진 것 → 메뉴 · 내용 열을 세로 Fill로(12). 교훈: 모서리 토큰을 바꿀 때는 모서리별로 원래 값이 0인지 확인할 것
- **사이드 내비게이션 정리** — Side Navigation Item · Page Index Item 모서리 `rounded/xl` → `rounded/control-md`(모서리별 확인, 값 같음). _Base/NavItem(아이콘 레일) 글자 예전 `txt/txt-paragraph` → `text/body-main`(8), w40 글자 스타일 `text-2xs/normal` 연결(3). 레일 선택은 꽉 찬 파랑 유지
- **결정 항목 일괄 처리** — Bottom Sheet Size=md 아래 모서리 0(화면에 붙는 시트). 효과 스타일 `elevation/elevation-N` → `elevation/N`(6, 연결 유지). Chip 개수(00) bold → medium(128, 탭과 같게). Text Button primary hover 글자 · 아이콘 · 밑줄 `primary-strong` → `primary-main`(밑줄로 구분). Navigation: 속성 이름 Title bar `LeftButton` → `Left Button`, Title `Property1` → `Type`, Profile Area `Color` → `Direction`, Title 아이콘 연결 안 된 색 → `icon/body-main`, Report Navigation `Width=wide(1440px)` 추가, SubMenu · SubMenu Group · Right Slot 모서리 → semantic(모서리별). Report Navigation 글자는 없는 폰트(Spoqa Han Sans Neo)라 스타일 연결 보류
- **Report Navigation 글자** — 사용자가 `component/gnb-menu`로 변경
- **primary 위 글자 · 아이콘 `on-primary`** — semantic `text/on-primary` · `icon/on-primary`(→ project `primary/text-on-main`) 추가, primary 배경 바로 위의 흰 글자 · 아이콘 236곳 연결(solid primary 버튼 · BorderBox 탭 · Chip 선택 · Slider · 달력 · 아이콘 레일 · Report Modal · Page Header 헤더 · 지도). 헤더 위 Icon Button(inverse)은 아직 흰색 고정
- **Table 정리 1단계** — component `table/*` 7개 추가(위 표). Table v1.0 파일의 자체 색 132곳을 Component v2.3 semantic으로 교체: `text/subtle` · `text/paragraph` → `text/body-main`, `color/zinc/400` · `text/muted` → `text/body-subtle`, `text/heading` → `heading-main`, `button/ghost` · `alpha/light/0` → `fill/none`, 증감 글자 · 아이콘 → `*-main`(감소 #155DFC → #2B7FFF), `basic/blue-accent` → primary, Scroll 회색 → `scrollbar/thumb · track`
- **버튼 · 탭 키보드 focus 표시** — 버튼 4세트(1,520) · Icon(180) · Toggle(320) · Square(240) · Text Button(36) · Segment 항목(60) · 탭 4종(248)에 숨겨진 `Focus Ring` 레이어 + 새 boolean 속성 `+ Focus`. 링: 바깥 2px 간격 · 2px 테두리 `border/primary-subtle`(primary 30%, 사용자 결정 — 60%에서 연하게), 어두운 배경(Inverse 등) `border/inverse-strong`, 모서리 = 버튼 모서리 + 4(pill은 full). 링이 밖으로 나오도록 루트 clip을 끄면서 state-layer가 네모로 드러나는 문제 → state-layer에 루트와 같은 모서리 토큰 연결로 해결
- **focus 링 색 = 버튼 색** — primary `border/primary-subtle`(30%), neutral · neutral-subtle · 검정 탭 `border/neutral-stronger`(30%), negative `border/negative-subtle`(20%, 30% 단계 없음), inverse `border/inverse-subtle`(30%). 버튼 4세트 · Icon · Toggle · Square · Text Button은 Color 기준, Segment는 Style, Underline · BorderBox 탭은 Color(brand · primary → primary)
- **최종 점검 1차** — Radio 예전 색 `items/gray-subtle` → `surface/subtle`(8, 같은 값), `button/destructive-default` → `fill/negative-strong`(4, 같은 값). Circle Cluster 남은 색: 흰색 60% → 새 `map/cluster-ring-strong`, primary 10% → `fill/primary-subtlest`(500 → 600 기준)
- **아이콘 아래 작은 레이블 전용 스타일** — `component/icon-label`(10px · medium · 줄높이 12) · `component/icon-label-sm`(9px · medium). Square Button xl(48) · IconText 10~11px(8) · Map Menu 10px(4) → icon-label, Square Button md · lg(96) · IconText 8px(8) · Map Menu 9px(4) → icon-label-sm. 10px 하나로 통일하면 Square md · lg와 Map Menu "지적편집도"가 넘쳐서 2단계로 나눔. 크기 변화 없음. Map Menu 글자 regular → medium. 적용규칙에 "작은 레이블 최대 글자 수, 넘으면 컴포넌트(세트) 대체" 규칙 추가
- **Nav Menu Item 밑줄** — 예전 `items/subtle`(#4A5565) → `fill/neutral-main`(#364153, 조금 진해짐)
- **Social Button 정리** (240) — state-layer 구조 추가(hover `on neutral`, loading 배경 = default), brand: 카카오 노랑 #FEE500 유지(예외, 토큰 없음) · 테두리 제거 · disabled `fill/disabled`, secondary: Neutral base 버튼 색(`button/base/neutral/bg · border`) · disabled `border/disabled`, disabled 글자 `text/disabled`, 모서리 높이 기준 `rounded/control-*`(48 높이 12 → 16), `+ Focus` 링(`border/neutral-stronger`). 예전 `button/neutral-default · disabled · neutral-black-hover · loading` 0. 크기 변화 없음
- **Table 정리 2단계 완료 (Table v1.0)** — 헤더 배경 `th-header` · `th-muted` 22곳 → component `table/header/bg` · `header-muted/bg`(회색 헤더 #E5E7EB → #F3F4F6), 배지 · 차트 · 상태 색 → Primitive(`zinc/100` · `cyan/500 · 600` · `blue/600` · `green/600 · 700` · `red/600 · 700`), `border/darker` → `divider/neutral-strong`. 라이브러리 업데이트 수신(사용자) 후 표 안 v2.3 컴포넌트(Tooltip · Checkbox · Radio · Switch · Segment · Avatar · Icon Button) 최신화. 예전 컴포넌트 19곳 교체: Badge/Basic → Category Badge(soft · xs · gray), 예전 outline 버튼 → Neutral Button outline sm, 예전 Neutral Icon Button → Icon Button sm, ControlButton → Icon Button 2xs (글자 · 아이콘 유지). Table 파일 예전 변수 0
- **Templates v2.1 정리 1 · 2단계** — 파일 안에서 직접 그린 요소의 예전 변수 약 7,500곳(덮어쓰기 포함)을 값 + 쓰임(글자 · 아이콘 · 배경 · 테두리) 기준으로 교체: `table/row-default` → `table/row/bg`, `color/black/a/6` · `alpha/dark/6` → `divider/neutral-subtle`, `text/subtle` → `body-main`, `text/paragraph` → `body-main`(13px 이하 `body-subtle`), `color/zinc/*` → 쓰임별 `text · icon · surface · fill`, 차트 · 배지 `basic/*` → Primitive(같은 색 또는 가장 가까운 단계), `brand/alpha/*` → primary · `map/*`, 헤더 → `table/header*/bg` 등. 예전 `Badge/Basic` 흰색 31곳 → Category Badge. 남은 예전 색은 대부분 **다른 라이브러리 컴포넌트 안쪽**(예전 Table 셀 `Cell/Display/*` · Chart 라이브러리 · `Nav Item/Solid Navigation Item` 등)이라 원본 정리 또는 교체 필요
- **Charts v1.0 정리** — 모든 페이지 예전 변수를 Templates와 같은 기준으로 교체(약 1만 7천 곳, 차트 색은 Primitive 같은 색 · 가장 가까운 단계, `border/white*` → `border/inverse-accent`, 흰색 60% → `static/white` 60% 등). `.Row` 안 예전 표 헤더 셀 109곳 → Table v1.0. 예전 변수 0
- **Templates 예전 컴포넌트 교체** — 예전 Table 셀(`Cell/Display · Data · Header · Control · Indicator/*`) 약 880곳 → Table v1.0(Header Text · Header Top/Left · Heder Checkbox · Table Text(text/number/rank/trend) · Minimal Cell/Metric/Delta · Table Button/Switch/Checkbox/Actions/Avatar), `Nav Item/Solid Navigation Item` 100곳 → v2.3 Side Navigation Item (variant · 토글 · 글자 · 위치 · 크기 유지). 예전 셀(높이 56) → Table Text(36)로 행 높이가 줄었을 수 있음
- **Templates 예전 컴포넌트 정리 완료** — 지워진 예전 Table v1.0 `.Row`(원본 없음) 919곳 연결 해제 후 안쪽 예전 셀 약 1,700곳 → Table v1.0. 지워진 예전 v2.3 `Report Dialog` 2곳 → v2.3 `Report Modal`(clear · section, 왼쪽 메뉴)로 교체하고 메뉴 · 보고서 내용을 슬롯으로 옮김(폭 유지, 모달은 최대 높이 640 + 내용 스크롤이라 긴 보고서는 스크롤 상태로 보임). Templates에 예전 표 셀 · `.Row` · `Report Dialog` 0
- **차트 아래 표 스타일 바로잡음 (Templates)** — 예전 셀을 Table v1.0으로 바꾸면서 차트 아래 범례 · 데이터 표가 일반 표(Header Text · Table Text, 높이 36, 구분선)로 커진 문제 → 차트와 함께 쓰는 표 85개(보고서 29 · Chart 56)를 **Minimal Table**로: 범례가 있는 표는 모든 칸 `Minimal Table/ Header Top`(text-xs · 높이 24), 데이터 표는 첫 줄 Header Top + 본문 `Minimal Cell`, 행 구분선 제거(약 1,900칸). 차트와 무관한 일반 표 23개는 Table Text 유지. → **정정**: Minimal Table은 모바일 전용이라, PC 표(폭 600 이상) 58개는 다시 일반 Table로 되돌림 — 헤더 줄 Header Text, 범례 표 본문 Header Text · 데이터 표 본문 Table Text, 행 높이 36 + 아래 구분선 `divider/neutral-subtle`. 모바일 표만 Minimal 유지. 규칙: **PC는 Table(행 높이 36), 모바일은 Minimal Table**
- **Templates 표 행 높이 · 차트 내용 맞춤** — 일반 표 셀(Table Text · Header Text) 중 52 · 56 · 44px로 늘어나 있던 616곳을 기본 높이 **36px**로(설명 켠 헤더는 제외), 고정 높이 행 6개는 셀에 맞춤. 차트 아래 표를 차트와 맞춤: 표 본문 첫 칸 = 차트 카테고리 라벨(행 수도 카테고리 수에 맞춰 추가 75 · 삭제 101), 헤더 = 범례 시리즈 이름(범례가 있는 차트), 도넛 · 파이는 범례를 행으로 — 보고서 30 · Chart 58 · 대시보드 6개. 본문 값 칸의 "값n"+색 네모 자리표시 150곳 → 숫자 자리표시 "00.0"(네모 끔). 수치 값 자체는 차트와 아직 일치시키지 않음
- **Templates 차트 ↔ 표 맞춤 (재작업)** — 첫 시도에서 표와 차트를 너무 넓게 짝지어 지도 정보 List Table 등 행이 지워지는 문제 → 사용자가 10:14 버전으로 복원 후 재작업. ① 일반 표 셀 1,431곳 높이 36px, 고정 높이 행 46개 셀에 맞춤. ② 표 바로 위 차트 하나만 짝(표만 담은 감싸는 프레임까지만 위로), 카테고리 라벨 줄바꿈은 한 줄로, PC 표는 카테고리 수에 맞춰 행 추가/삭제, 모바일 표는 축 라벨이 듬성듬성해 행을 줄이지 않음, 차트 없는 표는 건드리지 않음. 보고서 26 · Chart 54개 표 정리(헤더가 로컬 컴포넌트 `.Row`인 표 7개 별도 보정). 값 칸은 그대로
- **가로 상단 라벨형 차트 표 맞춤** — 막대마다 라벨이 하나씩 붙은 차트(일반 · 스택 바 · 스택 바 100%, PC · 모바일 6개 표)는 막대 라벨을 위에서부터 모아 표 첫 칸에 넣음(주유소명 11개, 66곳)
- **차트 ↔ 표 전체 점검** — 차트 아래 표 95개 중 80개 일치 확인. 고친 것: 성연령대 세로형 PC 표 중복 행 삭제 · 5개 라벨, 보고서 지도_차트 모바일 표 날짜 라벨(26.01~26.06). 남은 것: 선 차트(최근 12 · 13개월 6개)는 축 라벨이 숫자 자리표시(1, 2, 3…)라 표 "Text"와 맞출 기준 없음, 도넛 · 파이(4개)는 차트에 항목 라벨이 없음, 지도_차트 모바일 13행 표 2개는 축 라벨 3개라 건너뜀
- **차트 표 헤더 · 중복 행 정리** — 헤더 자리에 카테고리 라벨이 들어가 헤더가 없어진 표 11개에 헤더 행 다시 만듦(성/연령대 · 남성 · 여성 등, 짝 표의 헤더를 따름), 헤더와 같은 라벨이나 같은 카테고리가 두 번 들어간 중복 행 정리. 이 과정에서 자리표시("Text") 행이 중복으로 잘못 지워진 월별 · 시간대 표 8개는 같은 블록의 PC 표에서 행 수 · 라벨 · 값을 복사해 복구, 지도 정보 List Table 2개는 행 수 복구(같은 라벨이 반복되는 표). 모바일 일반 표에 새로 만든 헤더는 본문과 같은 Header Text로
- **표 본문에서 헤더 컴포넌트 제거** — 표 본문 행(헤더 줄 아래)에 쓰인 헤더 컴포넌트 약 1,020칸 교체: PC `Header Text` → `Table Text`(data), 모바일 `Header Top` · `Header Left` → `Minimal Cell`(글자 · 정렬 유지, 색 네모 끔). 오른쪽 정렬 Table Text가 52px로 커져 줄이 어긋나던 426칸은 36px 고정 + 행 세로 가운데 정렬. 가로 상단 라벨형 3종 PC · 모바일 표 6개는 값을 막대 길이 ÷ 축 눈금으로 계산해 넣음(모바일은 축이 없어 PC 값 사용), 헤더 시리즈 네모 = 막대 색. 규칙: **헤더 컴포넌트는 헤더 줄에만**
- **차트 표 헤더 색 네모** — 차트 아래 표 91개 헤더의 시리즈 칸(첫 칸 제외)에 색 네모를 켜고 차트 색으로(범례 → 막대 · 선 · 조각 순으로 색을 읽음, 세로 스택은 아래부터). 시리즈가 1개인데 값 열이 여러 개면 시리즈 열에만(예: 매출액). 연령대가 열인 보고서 표 4개와 도넛 · 파이 표 4개(열이 시리즈가 아닌 값)는 네모 끔. 남은 12개는 표 바로 위에 그려진 차트를 위치로 찾아 색을 맞춤(보고서 4시리즈 표 2개 = 차트 4색 순서, 단일 시리즈 표 10개 = 값 열에만 차트 색), 빈 헤더 칸은 네모 없음. 보고서 표 헤더에 남아 있던 "항목 1" → "값 1". 차트 표 헤더 네모 정리 완료
- **성/연령별 교차표 복구 (보고서 2개 블록)** — 차트 ↔ 표 맞춤 때 연령대가 열인 교차표에 연령대를 행으로 넣어 망가뜨린 것을 다시 구성: 헤더 = "연령대 / 성별"(2줄 높이) + 연령대 줄 6칸(각 2열 폭) + 성별 줄 여성 · 남성 ×6(Header Text 가운데 정렬), 본문 = 25.12 · 25.11 · 증감 3행. 중복 헤더 줄 · 앞쪽 여분 칸 · 늘어난 본문 행 삭제. 규칙: 차트 카테고리가 열인 교차표는 차트 맞춤 대상에서 제외
- **숫자 오른쪽 정렬** — 성/연령별 교차표 2개: 값 칸 폭을 헤더 열 폭(÷12)과 같게, 숫자 칸 모두 오른쪽 정렬(두 줄 값 칸 = Minimal Metric은 오른쪽 여백 12로 맞춤), 성별 헤더도 오른쪽, 연령대 상위 헤더는 가운데. Templates 전체 표에서 숫자 칸이 오른쪽이 아니던 10칸 · 해당 열 헤더 3칸 정리. 규칙 추가: 숫자 데이터와 그 열 헤더는 오른쪽 정렬
- **개인/법인 비중 셀** — 예전 셀 교체 때 비율 막대 셀을 `Cell/Data/BarChart` Type=basic(글자 세로 쌓임)으로 잘못 매핑 → Type=**composition**(양 끝 배치)으로 교체, 값 줄 14% · 86%, 이름 줄 개인 · 법인 (보고서 10곳)
- **Table v1.0 · Header Top 배경 제거 (사용자 작업)** — 헤더 영역 배경은 컴포넌트가 아니라 표를 만들 때 헤더 줄 프레임에서 정함(`table/header/bg` · `table/header/muted-bg`). 적용규칙 5장에 반영. Templates의 Header Top 헤더 줄 10개에 배경 지정 — 짝 PC 표 헤더 톤을 따름(회색 6 · 흰색 4) → **정정: Minimal Table 헤더는 흰색**이라 Header Top · Header Left 헤더 줄 28개 모두 `table/header/bg`로(24개 변경)
- **Header Text 배경 제거 (Table v1.0)** — Fixed=none 3개 variant의 `table/header/bg` 배경 제거(Fixed=right · bottom 6개는 고정 열이 스크롤 내용을 가려야 해서 유지). Templates에서 Header Text를 담은 헤더 줄 중 배경이 없던 45개에 `table/header/bg`를 넣어 업데이트 후에도 모양 유지(나머지 59개는 이미 줄 배경 있음). Table v1.0 게시 → Templates 업데이트 필요
- **Templates 예전 변수 0** — 마지막 1곳(반경 선택 원 테두리 `border/primary-strong`) → `border/neutral-accent`. 파일 레이어 · 라이브러리 인스턴스 안쪽 모두 예전 색 없음 확인
- **Table v1.0 · Charts 게시 후 Templates 정리** — 업데이트 뒤 Header Text 칸에 남아 있던 배경 덮어쓰기 12곳 제거. 성/연령별 교차표 헤더 영역은 한 색으로(안쪽 줄 배경 제거, 헤더 틀 배경을 raw `zinc/100` → `table/header/muted-bg`). component 표 토큰 이름이 `table/header/muted-bg` · `table/row/muted-bg` · `table/row/selected-*-bg` 형태로 바뀐 것 문서에 반영
- **Templates 헤더 줄 배경 토큰 바로잡음** — 예전 변수 일괄 교체 때 `table/row-default` → `table/row/bg`로 바꾸면서 헤더 줄(예전 `.Row`)까지 행 토큰이 들어갔던 것 → 헤더 컴포넌트를 담은 줄 66개(보고서 13 · Chart 53)를 `table/header/bg`로 (색 변화 없음)
- **표 배경 토큰 semantic으로 일원화 (B안)** — 예전 semantic `table/*` 7개를 새 이름으로 바꿔 재사용: `row-default` → `row-main`, `th-header` → `header-main`, `th-muted` → `header-subtle`, `row-muted` → `row-subtle`, `row-selected` 유지, `row-selected-primary`, `row-selected-negative` — 모두 surface 토큰 참조(값 변화 없음), 설명 · 채우기 범위 지정. component `table/*` 사용처 → semantic으로 연결 교체: Table v1.0 8 · Templates 943 · Charts 417 (Component v2.3 0). `table`을 그룹 목록에 표 배경 전용 예외로 추가. component `table/*` 7개는 게시 · 업데이트 후 삭제 예정
- **component `table/*` 7개 삭제** — 게시 · 업데이트 후 Component v2.3 · Table v1.0 · Templates · Charts 사용처 0(레이어 · 변수 참조 모두) 확인하고 삭제: `header/bg` · `header/muted-bg` · `row/bg` · `row/muted-bg` · `row/selected-bg` · `row/selected-primary-bg` · `row/selected-negative-bg`. Component v2.3 다시 게시 필요
- **Claude Design 문서 최신화** — 컴포넌트가이드 v0.3: `+ Focus` 공통 속성, Square Button · Map Menu 레이블 최대 글자 수, Social Button 새 구조, Card Layout Size=xl/lg/sm, **11장 표(Table v1.0 컴포넌트 · 규칙)** · **12장 차트** 신설. 적용규칙 v0.4: 라이브러리에 Table v1.0 · charts v1.0, 색 2장에 semantic `table` 그룹과 Primitive 예외(차트 · 분류 배지 · 브랜드 색), 표 규칙을 6장 "표"로 모으고 행 높이 · 구분선 · 차트 아래 표 · 교차표 규칙 추가, 금지 사항에 표 항목 추가
- **Claude Design 등록 패키지** — 피그마 변수에서 자동 추출: `tokens.css`(Primitive 색 201 · 숫자 92 · project 4 mode · semantic 175 · component 54 · elevation · 레이아웃, 투명도 있는 primary 토큰은 `color-mix`로 프로젝트 색을 따름, `<html data-project>`로 전환), `tailwind.config.js`(색 · spacing · borderRadius `control-*`·`surface-*` · fontSize `gnb-menu`·`icon-label` · elevation · 화면 구간), `tokens.json`(W3C 형식), README. 문서 3종과 함께 `claude-design.zip`
- **Table Text 숫자 칸 바로잡음 (Templates)** — 예전 숫자 셀을 `Type=number`로 매핑했는데 이 variant는 숫자 아래 증감(+00.0)이 항상 붙음 → 증감이 없던 칸 180곳(관리자 No 열 · 대시보드 매출 · UI · Chart · 보고서 · 회원관리)을 `Type=text`(같은 Style · Align, 값 유지)로. 퍼블리싱 전달용의 인스턴스 안쪽 33곳은 원본 컴포넌트 쪽이라 제외. 컴포넌트가이드에 "증감 없는 숫자도 Type=text" 명시
- **Templates 그림자 → elevation** — 예전 효과 스타일 교체 약 390곳: `shadow/2xs·xs·sm` → `elevation/1`(카드 · 붙어 있는 판), `md` → `elevation/2`(지도 위 패널 · 토글 · 슬라이더 카드), `lg` → `elevation/3`(메뉴 · 드롭다운), `xl` → `elevation/4`, 스타일 없는 지도 위 그림자 5곳 → `elevation/2`. 입력창 · 버튼의 `components/default` 그림자 25곳 제거(버튼 · 입력창 그림자 없음 규칙). backdrop-blur는 유지
- **그리드 표 바로잡음 (Templates)** — 그리드(auto layout grid)로 만든 표에서 셀을 교체할 때 새 셀이 빈칸에 자동 배치돼 체크박스 · 값이 다른 열로 흩어짐(대시보드 지역별 표) → 줄마다 체크박스 1열 · 값 5~6열로 되돌림. 같은 작업에서 새 셀에 빠진 아래 구분선 135칸 복원, 그리드 표 5개 줄 높이 56 · HUG → 36 고정. 중간에 줄 높이를 잘못 넣어 표가 접힌 것(19px)도 함께 바로잡음
- **Templates 버튼 크기 바로잡음** — 버튼을 state-layer 구조로 바꾸기 전 인스턴스에 남아 있던 **루트 여백 덮어쓰기**가 state-layer 여백과 겹쳐 버튼이 커져 있었음(예: 대시보드 검색 버튼 Size=lg 36 → 48px) → 버튼 인스턴스 40곳(회원 관리 9 · 대시보드 3 · 관리자 4 · UI 20 · 기타 4) 루트 여백 0으로. 검색 버튼은 검색창과 같은 36px
- **Templates 규칙 점검 · 정리** —
  - Table v1.0 `Table Button` 기본 버튼 · 보조 버튼 → `Neutral · base · sm`(줄마다 solid 반복 금지), Templates의 Table Button 49곳도 같은 값으로
  - 다른 컴포넌트 안쪽에 남은 예전 컴포넌트 교체: 예전 Neutral Icon Button · Control Button → v2.3 Icon Button(아이콘 유지), 예전 Badge/Basic · Badge/soft → Category Badge
  - 연결 안 된 색 약 730곳: 같은 값 semantic(역할별: 글자 text · 아이콘 icon · 배경 surface/fill · 선 border/divider), 회색은 가장 가까운 semantic(예: #000 글자 → text/heading-main, #737373 → body-subtle), 차트 · 범례 · 배지 색은 같은 · 가장 가까운 Primitive
  - 숫자 모서리 약 250곳 → 높이별 `rounded/control-*`, 판 `rounded/surface-*`, 작거나 완전히 둥근 모서리는 Primitive
  - PC 표에 섞여 있던 모바일 `Minimal Metric` 48칸 → Table Text `Type=trend`, 36px이 아니던 PC 표 줄 22개 정리
  - pill 버튼 1 → rounded, error 페이지 hover 상태로 남은 버튼 → default
  - 남은 것: 연결 안 된 색 104(Chart 범례 흰 테두리 · 면적 선택 · memo 등 문서 · 표시용), 글자 스타일 없는 텍스트 57(표지용 큰 글자 · 11px 등 단계 밖 크기), 간격(gap) 숫자 연결은 레이아웃 3단계에서
- **Component v2.3 Foundation 페이지 삭제** — 처음 Tailwind 기준 정리표 그대로라 예전 · 삭제된 변수 연결 약 1,250곳, semantic 토큰 문서 없음. 같은 정보는 변수 패널 · `tokens.css` · 적용규칙/작업요약에 있어 중복 관리 대신 삭제(사용자 결정). 페이지 안 문서용 컴포넌트 `Element`(244) · `Row`(21)는 페이지 밖 사용처 0 확인 후 함께 삭제. 시각 문서가 필요하면 변수에서 자동 생성하기로. Component v2.3 재게시 필요
- **Status Badge 색 다시 지정 (사용자 작업)** — 60개 variant: soft 배경 `{색}/100` · 글자 `{색}/600~700`, solid 배경 `{색}/600`(negative `red/700`) · 흰 글자, 테두리는 semantic(`border/neutral-strong` · `informative-main` · `positive-main` · `warning-main` · `negative-subtle`). neutral=zinc · accent=blue · positive=green · warning=amber · negative=red. 컴포넌트가이드 8장에 색 표 추가
- **Claude Design 디자인시스템 점검 · 보완** — 등록된 "NICE지니데이타 디자인시스템" 확인: 토큰 · 규칙 문서는 최신과 같음, Status Badge 색만 예전(semantic 상태색) → 컴포넌트 CSS · 설명을 Component v2.3과 같게(Primitive). 컴포넌트 5종 추가: GlobalNav(56 · gnb-menu 17 · ghost/underline · 폭 fill/1180/1440), PageHeader(xl/2xl/3xl · 경로 · 설명 · 버튼 · 도움말), SearchField(line/soft/inverse · md/lg/xl/2xl · 옆 버튼 같은 높이), DatePicker + Calendar(Neutral base 판 · 기간 부터~까지 · 달력 elevation-3), Tooltip(흰 말풍선 · surface-sm · elevation-3). search · calendar 아이콘은 회사 Icon Set에서 옮김
- **Filter Menu 예시 컴포넌트 추가 (Component v2.3 · Filter 페이지)** — 필터 목록 단독 컴포넌트가 없어 Menu Caption + Checkbox Menu List(md) + Radio Menu List(md) + Menu Button Set(CTA 2개 justify: 초기화 · 적용)로 조립한 `Filter Menu`(폭 288, `surface/main` · `border/neutral-subtle` · `rounded/surface-xs` · `elevation/3`). 예시 프레임 "Filter / 예시 — 닫힘 · 열림" 2개를 프로토타입으로 연결(Filter Button 클릭 → 열림, 버튼 · 적용 → 닫힘). 디자인시스템 코드에도 `FilterMenu` 추가
- **Menu Caption 크기 · 여백 정리** — 메뉴 줄(Menu List · Cascader)은 크기별 왼쪽 여백이 sm · md · lg 8, xl 10, 2xl 12인데 Caption은 크기 속성 없이 16(Caption은 안쪽 +8 = 24)이라 제목이 어긋났음 → Menu Caption에 **Size(sm~2xl) 추가**(2 → 10 variant, 기존은 md), 좌우 여백을 메뉴 줄과 같게(`spacing/2` · `2-5` · `3`), Caption 안쪽 Value 여백 0. **제목 글자 = 줄 내용 시작선(체크 · 라디오 · 아이콘 왼쪽 끝)**. 기존 인스턴스는 옆 메뉴 크기로 Size 지정. 예외: Navigation SubMenu Group은 항목이 SubMenu Item(글자 16)이라 Caption 좌우 16(`spacing/4`) 유지
- **Filter Menu 다듬기 (사용자 작업) → 코드 반영** — 폭 240, 모서리 `rounded/surface-sm`, 속성 `Show title-area` · `Show bottom-area`. 제목줄(제목 `text-base/bold` + 도움말 Tooltip + 닫기 Icon Button md, 여백 8/8/4/16), 섹션은 좌우 8 안에 Menu Caption(md, `text-xs/normal` · `text/body-subtle`) + Checkbox/Radio Menu List md, 섹션 사이 구분선 · 간격 12, 하단 구분선 + Menu Button Set(초기화 base · 적용 solid). 이후 수정: 영역 사이 간격 0, 제목줄 여백 16/12/0/16 · 닫기 Icon Button sm · 도움말 기본 숨김, 목록 영역 위아래 12. 디자인시스템 코드 `FilterMenu`(title · tooltip · showTitle · showFooter · onClose 추가) · 미리보기 · 검토판 같이 수정
- **Tooltip 말풍선이 판 밖으로 보이게 (코드)** — 디자인시스템 `Tooltip` 말풍선을 페이지 맨 위(body)에 띄워(fixed) 메뉴 · 카드 · 모달처럼 잘리는 판 안에서도 판 밖까지 보이게, 스크롤 · 창 크기 변경 시 아이콘을 따라감. 피그마 Filter Menu는 Clip content를 그대로 두기로 결정(사용자) — 피그마에서는 Tooltip을 숨김 상태로 두고, 판 밖 표시는 코드 규칙으로만 정함
- **디자인시스템 코드 — 버튼 그룹 · 버튼 묶음 그룹 정리** — 버튼: Button 일치 확인, Icon Button(작은 크기 모서리 control-sm, 3xl 추가) · Text Button(3xs/2xs/xs) 수정, Toggle · Square · Social · Filter Button 추가. 버튼 묶음: Segment를 피그마대로 다시 만듦(neutral · primary · padded, sm~2xl, 구분선 · 선택 표시), Split · Square Split Button Group · Text Button Group · Button Set · Menu Button Set 추가. 검토판(탭별 미리보기) 만들어 함께 갱신. 피그마 확인 목록: Toggle md 높이 28, Filter Button 모서리 control-md 고정, Square Button xl 아이콘 16/18, Segment Neutral 선택 글자 primary, Split · Square Split 모서리 rounded/xl 고정, Segment Text 아이콘 색 예전 변수(`color/black/a/80`)
- **Segment 선택 이동 애니메이션 (코드)** — 선택 판(indicator)이 새 항목으로 미끄러져 이동 · 폭 맞춤(220ms, `cubic-bezier(0.2, 0, 0, 1)`), 첫 표시와 동작 줄이기 설정에서는 정지. FilterMenu 선택 항목 글자 medium으로(피그마 Menu List 선택은 이미 medium)
- **검토판 댓글로 고친 것 (코드)** — Segment를 SegmentNeutral · Primary · Padded 3개 컴포넌트로 분리(공통 Segment는 내부 기반), 선택 판 이동 애니메이션, 구분선(Neutral 항상 · Primary/Padded 선택 양쪽 숨김), 모서리(Neutral 선택 · hover 각진 칸, Primary 항목 = 바깥과 같은 단계, Padded 중첩 모서리), Square Split 토글 · 폭 고정, Select soft는 빈 값 안내 없이 기본값, SideNav hover 아이콘 색, SearchField 버튼 = 입력창과 같은 Size, 달력 기간 띠 여백 없이 연결, DateRangePicker(시작일 · 종료일 버튼 묶음 + 두 달 RangeCalendar) 추가
- **확인 목록 결정 → 피그마 · 코드 반영** — ① Toggle Button md 28 → 32(64 variant, state-layer 6/10) ② Filter Button 모서리 높이 규칙(rounded 72 variant: sm · md control-sm, 2xl control-lg) ③ Square Button primary xl 아이콘 18 → 16 ④ Split · Square Split 모서리 `rounded/xl` 고정 = 확정 예외 ⑤ Segment Neutral 선택 글자 파랑 = 의도 ⑥ Segment Text 아이콘 예전 변수 `color/black/a/80` → `icon/heading-main`(4곳) ⑦ Calendar Card · Range Card 모서리 `rounded/surface-sm` · `elevation/3`, 기간 시작 · 끝 칸(CalendarItem Selector 24 variant)을 `fill/primary-main` + `text/on-primary` 진한 칸으로(띠 유지, hover variant는 on-brand hover 판 추가). 코드도 같은 값
- **디자인시스템 코드 — 입력 그룹** — FormField를 피그마대로(레이블 = Input Label xs 14 medium, 2xl은 sm 15, 가로 배치 · 도움말 아이콘), InputLabel 추가, soft 입력창은 `input-bg` 위에 `input-bg-soft`를 겹침(피그마와 같게), Password(보기 전환 + 조건 카드) · TextArea(글자 수 · 도움말 · 버튼 영역) · InputQuantity · InputQuantityGroup(outside · inside) 추가. DatePicker 상태(disabled hover 없음 · 빈 값도 disabled 색, focus 글자 · 아이콘 primary), DateRangePicker(입력된 칸만 파랑). 적용규칙 · Handbook의 "입력 레이블 text-md/medium 15"를 피그마 기준 "text-sm/medium 14(2xl 옆 15)"로 정정
- **Input Quantity 간격 8 → 6 (피그마 90 variant · 코드)** — 버튼과 입력창 사이 `spacing/1-5`, 전체 폭 188 유지(입력창 md 112 · xl 96 · 2xl 80). 코드 TextArea 아래 버튼 사이 12, soft 입력창 테두리 없음(두께 0), TextArea 크기 조절 핸들 제거
- **Password 조건 카드 (피그마 · 코드)** — `_Base/Items/Password Validation`(3개)에 `elevation/3`, Password 72 variant의 입력창 ~ 카드 간격 8 → 4(`spacing/1`). 코드 달력: 오늘 = 회색 판(테두리 없음), 토요일 `text-primary-main` · 일요일 `text-negative-subtle`(피그마와 같게)
- **디자인시스템 코드 — 입력 그룹 마무리** — Input `textButton`(입력창 안 TextButton 2xs primary), FormField `action`(입력 옆 Neutral base 버튼) · 입력 여러 개 가로 배치, SearchField `label`, 달력 제목을 누르면 월 · 연도 보기(4×3), DatePicker `options` 목록형(피그마 Basic Date Picker Type=select), **DatePickerInline**(테두리 없는 글자형) · **DateInput**(입력창 모양, 달력형 · 목록형, 레이블 · 도움말) 추가. TextArea 아래 버튼 영역에 "지우기" 같은 전체 삭제 버튼은 두지 않는 규칙
- **열고 닫는 판 공통 동작 (코드)** — Select · DatePicker · DatePickerInline · DateInput · DateRangePicker: 판 바깥을 누르거나(마우스 · 터치) Esc를 누르면 닫힘, 값을 고르면 닫힘(기간은 종료일 후 바깥 클릭으로 닫음). `open`을 주지 않으면 컴포넌트가 스스로 열고 닫음(예: Select ghost가 이제 열림)
- **입력 focus 카드 = 떠 있는 판 (코드 · 규칙)** — Select 목록 · 날짜 판(DatePicker · Inline · DateInput · DateRange) · 필터 목록 · 비밀번호 조건 카드를 모두 트리거 아래 4에 겹쳐 뜨게(아래 내용을 밀지 않음). 기간 선택은 예약 사이트 방식(한 판에서 시작 → 종료, 마우스 미리보기, 자동 넘김), 날짜 버튼 너비 고정. Handbook 8편 · 적용규칙에 규칙 추가
- **본인인증 PhoneVerification 추가 (코드 · 규칙, 사용자 시안 기준)** — Type 1(버튼이 입력 아래 꽉 찬 폭) · Type 2(입력 옆). 인증 요청(Primary soft) → 재요청(Neutral soft, Type 1 "인증번호 재요청" · Type 2 "재요청") + 인증번호 입력 · 남은 시간 03:00(`text-primary-main`) · 인증 완료(Primary soft), 시간 초과 시 오류 문구. 인증번호 요청은 입력창 안 글자 버튼으로 만들지 않는다(Input textButton 예시에서 인증 제거). Handbook 8편에 "본인인증" 절 추가
- **옵션 항목 기본 크기 lg (코드)** — Select · DatePicker 목록형 · DateInput 목록형의 옵션 = Menu List lg(높이 36 · `text-md` 15/24 · `text-heading-main`, 선택 `text-primary-main` medium, 항목 사이 2). Select · 날짜 선택은 value가 없으면 고른 값을 스스로 기억(defaultValue)
- **스크롤바 통일 (코드, 피그마 Asset · Scroll/basic 기준)** — 폭 6 · 위아래 4 띄움 · 트랙 없음 · 손잡이 `scrollbar-thumb` · 끝 둥글게(mini 3 = `ds-scroll--mini`). 디자인시스템 안의 모든 스크롤 영역, 디자인시스템을 쓰는 페이지의 html · body, 검토판 페이지(페이지 · 탭 줄 · 미리보기 가로 스크롤)에 적용. 파이어폭스는 thin + 같은 색
- **날짜 선택을 한 카드로 묶음 (디자인시스템 · 검토판)** — DatePicker 카드 안에 버튼형(DatePicker) · 기간(DateRangePicker split · joined) · 글자형(DatePickerInline) · 입력창형(DateInput) · 목록형(options)을 절로 나눠 함께 보여줌, 설명도 DatePicker README 하나로 합침(나머지 3개 카드는 안내만). 검토판 입력 탭 11 → 9개
- **디자인시스템 코드 — 선택 그룹** — Checkbox · Radio: 스타일 primary · secondary · ghost, 꺼진 상자 테두리 `border-neutral-strong`, 레이블 간격 12 · 레이블 medium heading(sm 16 · xs 14) · 설명 `text-sm` body-subtle(피그마와 같게). Switch: 3xs(28×16) · 오른쪽 정렬 · 설명. 새로 Quantity(큰 숫자 수량) · ControlBox(고르는 카드: 선택 시 `border-primary-accent` 2 + `surface-primary-subtlest`) · SelectWithLabel 추가. 피그마 확인 필요: Control Box 안 Category Badge 글자색에 예전 변수 `text/paragraph`
- **Select 보완 (코드)** — Size sm(28) 추가, 왼쪽 아이콘(`icon`, 피그마 + Show Left Icon), 옵션 목록 제목(`heading` · 목록 안 {heading} 섹션, 피그마 SelectItem + ShowHeading), 선택된 값 글자 medium, **Shape=pill 추가**(사용자 결정: `rounded-full`, 좌우 여백 한 단계 넓게, 모바일 필터 줄 · 칩용, 목록 판은 `rounded-surface-xs` 유지). Radio는 눌러서 끌 수 없게(묶음의 다른 항목을 골라야 바뀜)
- **입력 pill (코드)** — Input · Password · DateInput · InputQuantity · SearchField가 `shape="pill"`을 받음. 규칙: pill은 검색 · 필터 줄처럼 늘어선 조건에만, 폼 안 입력창은 rounded. 미리보기 예시는 Input 1개 · SearchField 1개(피그마 Search Form Shape=pill). 피그마 Input에는 Shape=pill을 넣지 않음 — 필요한 화면이 생기면 추가(사용자 결정)
- **디자인시스템 코드 — 목록 · 메뉴 그룹** — MenuList(basic · checkbox · radio · switch · profile · quantity, sm~2xl, 아이콘 · 배지 · 숫자 · 설명 · 구분선 · 제목; 선택 `text-primary-main` medium, radio는 secondary · 다시 눌러도 유지), Cascader(단계별 칸 · 고른 경로 파랑 · chevron), MenuCaption(heading · caption, 메뉴와 같은 시작선) 추가. 검토판에 "목록 · 메뉴" 탭 신설
- **MenuList 피그마 맞춤 (코드)** — 기본 크기 lg(36), 컨트롤과 글자 사이 6(+ 안쪽 4), 컨트롤은 레이블 첫 줄 가운데, 설명 lg 이상 `text-sm`(14) · 선택 시 `text-primary-main` · disabled는 레이블 · 설명 `text-disabled`(피그마 Checkbox Menu List lg와 같게, 설명 있는 줄 높이 58). 메뉴 안 배지는 테두리 있는 CategoryBadge(white)
- **메뉴 · 목록 선택 항목 semibold (피그마 · 코드 · 규칙)** — 피그마 Menu List 6종 · Cascader 2종의 Active=true 레이블 141곳 `text-*/medium` → `text-*/semibold`(설명은 normal 그대로). 코드 Select 옵션 · MenuList · Cascader · FilterMenu · DatePicker 목록형 동일. 규칙: 컴포넌트 선택 상태는 medium, **메뉴 · 목록 판의 선택 항목만 semibold**(Handbook 4편 · 적용규칙 · 컴포넌트 README)
- **아이콘 출처 = 피그마 Icon Set (코드 · 규칙)** — 메뉴 예시 아이콘을 Icon Set 컴포넌트에서 그대로 가져옴(map-2 · list · bar-chart-2 · notification-3 · refresh · map-pin-2, line 기준). 프로필 자리는 Avatar(character): `surface-subtle` 원 + 옅은 테두리 + 흰 User 아이콘. Handbook 11편에 "아이콘은 Icon Set에서, 임의 도형 · 다른 세트 금지" 추가
- **코드 아이콘 34개 전부 피그마 Icon Set에서 다시 추출** — 파일에서 쓰는 Icon Set 컴포넌트(검색 · 달력 · 체크 · 닫기 · 화살표 · 로딩 · 빼기 등)는 그 컴포넌트에서, 파일에 없는 것은 Icon Set의 line 버전에서 SVG를 그대로 가져옴(edit · filter-3 · question · settings · circle · square · function · user 등). 예외: pencil은 Icon Set에 fill 한 가지만 있음, 카카오 마크는 로고라 Social Button에서 그대로
- **디자인시스템 코드 — 탭 · 내비게이션 1부** — Tabs를 피그마 4종으로 다시 만듦(Underline primary · black sm~2xl · Ghost · Box · BorderBox outline/solid × brand/black, rounded/pill, 꽉 채움, 숫자 · 아이콘; 탭 글자는 선택 여부와 상관없이 medium heading, Underline 선택 = 바닥 2). Pagination: 이전 · 다음 Icon Button xs + 숫자 Neutral ghost sm(현재 semibold heading), Simple 타입 추가. 새로 PaginationDot · Breadcrumb(집 아이콘 · "/" · 현재 heading, light/dark) · PageIndex(목차, 선택 surface-neutral-subtler) 추가. 아이콘 chevron-left · home-2 Icon Set에서 추가. 피그마 확인 필요: Ghost · Box · BorderBox 탭 모서리가 모든 크기 `rounded/xl` 고정
- **Tab Box 좌우 여백 = 모서리 값 (피그마 · 코드)** — `_Base/TabButton/Box` rounded 12 variant의 state-layer 좌우 4 · 6 · 8 → 10(`spacing/2-5`), 글자 묶음 2와 합쳐 모서리 `rounded/xl` 12와 같게. 코드 Tabs box sm · md · lg 동일. Tabs/Box 36 variant 탭 사이 8 → 4(`spacing/1`), 코드 동일. Breadcrumb 현재 항목 밑줄(코드), Tabs pill 좌우 여백 · 글자 묶음 2 · Underline 높이 피그마 맞춤
### 2026-10-28 ~ 10-30 (컴포넌트 코드화 · 피그마 대조 4~5차)
- **디자인시스템 코드 — 탭 · 내비게이션 2부** — GlobalNav 2depth 메뉴(피그마 SubMenu Group: hover 열림 · 클릭 고정 · 바깥 클릭/Esc 닫힘, 묶음 제목 · 이름 text-base medium · 설명 text-xs). 새로 ReportNav(리포트 상단 바: 로고 · 가운데 제목 17 medium · 버튼 · 프로필 · 로그아웃), TitleBar(56 · 뒤로 · 제목 text-base semibold · 배지 · 닫기), MobileNav(NavLogo: 로고 + 햄버거), NavDrawer(프로필 · 묶음 · 구분선), Avatar(character: surface-subtle 원 + 흰 User) 추가. 아이콘 menu · arrow-left · logout-box-r · file-excel-2 Icon Set에서 추가. 헤더(Page · Section · Contents Header)는 다음 "헤더" 묶음에서
- **Tabs rounded 좌우 여백 = 모서리 · 탭 사이 4 (피그마 · 코드)** — `_Base/TabButton/Ghost` rounded 12개(md 6 · xl 8 · 2xl 10 → 10), `_Base/TabButton/BorderBox` rounded 80개(sm 6 · md 8 · lg 10 · xl 12~14 · 2xl 18 → 10) state-layer 좌우를 `spacing/2-5`로, 글자 묶음 2와 합쳐 `rounded/xl` 12. `Tabs/Ghost` 36개 · `Tabs/BorderBox` 240개 탭 사이 8 → 4(`spacing/1`). 코드 동일. 규칙: rounded 탭의 좌우 여백 = 모서리 값
- **Breadcrumb 현재 항목 밑줄 (피그마)** — `_Base/Breadcrumbs` Type=text · Active=true · default 2개(light · dark) 글자 underline. 코드와 같게 "현재 = 항상 밑줄, 나머지 = hover 밑줄"
- **모바일은 hover 없음 (코드 · 규칙)** — MobileNav · TitleBar · NavDrawer 안의 버튼 · 항목은 hover 없이 pressed state layer만. 터치 기기(`hover: none`)에서는 모든 컴포넌트 hover 끔. Handbook 7편에 규칙 추가
- **디자인시스템 코드 — 헤더 그룹 신설** — PageHeader를 피그마 3종으로 다시 만듦(Wide · Narrow · Centered, simple/background, 경로는 Breadcrumb, 제목 bold, background = surface-primary-subtlest · 48/40 · rounded-surface-xl). 새로 SectionHeader(부제목 · 제목 semibold · 기준일 · 제목 옆 버튼 · 오른쪽 슬롯 · supporting-box 설명 박스 surface-neutral-subtlest · rounded-4xl, Narrow) · ContentsHeader(contents/card, 아이콘 · 불릿 · 배지 · 오른쪽 요소 · 더보기) 추가. 검토판 "헤더" 탭 신설(탭 · 내비게이션에서 PageHeader 이동). 피그마 확인 필요: Page Header Centered의 Custom 슬롯 글자색이 예전 변수 `text/hint`
- **로그아웃 = muted · primary 텍스트 버튼 hover = 밑줄만 (피그마 · 코드)** — 피그마 `_Base/Right Slot` basic · report의 로그아웃 Text Button Color primary → neutral-subtle. 코드 ReportNav 동일. Text Button primary hover의 색 변화(primary-strong) 제거 — 피그마처럼 색은 그대로, 밑줄만. NavDrawer 메뉴 항목 모서리 없음(모바일)
- **Section Header 설명 박스 좌우 여백 = 모서리 (피그마 · 코드)** — Section Header Wide 12 · Narrow 2개의 Supporting box 좌우 12 → 20(`spacing/5`), 모서리 `rounded/4xl` 20과 같게(위아래 16 유지). UserMenu(내 정보 메뉴) 코드 추가, 로그아웃 muted
- **헤더 부제목 색 (사용자 피그마 수정 → 코드 반영)** — Page Header Wide · Narrow, Section Header Wide · Narrow 부제목 `text/body-main` → `text/body-subtle`(dark `text/inverse-body-subtle`). 코드 PageHeader · SectionHeader 동일. Page Header Centered light 3개도 `text/body-main` → `text/body-subtle`로 맞춤(사용자 확인)
- **디자인시스템 코드 — 카드 그룹** — Card(피그마 Card Layout sm 16 · lg 24 · xl 32, 여백 = 모서리, ghost 여백 lg 20/16 · sm 16/12). StatisticCard를 피그마 구조로 다시 만듦(제목 묶음: 아이콘 · 제목 medium body-main · 배지 · 도움말 · 설명 / 오른쪽 위 아이콘, 숫자는 StatisticNumber). 새로 StatisticNumber(숫자 bold base~2xl · 단위 · "전월대비" + 증감 text-increase/decrease + ▲▼, 가로 · 세로 · 정렬) · TextCard(본문 text-base semibold · 아래 줄 보조 글 + Text Button 3xs) 추가. 아이콘 increase · decrease Icon Set에서 추가. 피그마 확인 필요: Statistic · Text Card · Card Layout 판 색이 `bg/main`(카드는 `surface/main` 규칙)
- **카드 판 색 (피그마)** — Statistic Card 2 · Text Card 2 · Card Layout 3개 판 `bg/main` → `surface/main`(ghost는 판 없음)
- **디자인시스템 코드 — 배지 그룹** — Status · Category Badge: 여백 2/4 · `rounded-md`, xs 20 `text-xs` · sm 24 `text-sm`, pill 좌우 8, 아이콘 xs 12 · sm 14(왼쪽 · 오른쪽). Status soft/solid 색 · 의미별 테두리, Category solid(색-600, red 700) · gray 글자 `text-body-main`. ChangeBadge: 앞 글(이전 기간 대비) `text-xs` body-subtle + 값 `text-xs` medium + ▲▼, 배경형. 피그마 확인 필요: Status · Category Badge가 Primitive 색(zinc/blue/green…)을 직접 씀, Status Badge sm 높이 22(Category 24)
- **배지 좌우 여백 = 모서리 (피그마 · 코드, 사용자 결정 A)** — 배지는 판 여백 4 + 글자 묶음 2 = 글자까지 6이라, 모서리를 `rounded/md` 8 → `rounded/sm` 6으로 맞춤. 피그마 Status Badge rounded 30개 · Category Badge rounded 114개(60 + 54). Status Badge 높이 고정 22 → hug(sm 24 · xs 20, Category와 같게). 코드 StatusBadge · CategoryBadge 좌우 6(pill 10) · `rounded-sm`, ChangeBadge 배경 판 `rounded-xs`(좌우 4)
- **Status Badge 의미 토큰 (피그마 · 코드 · 토큰)** — 새 Semantic 토큰 `fill/warning-strong`(→ orange/600, 흰 글자 대비용). Status Badge 60개 variant의 판 · 글자 · 아이콘을 Primitive에서 의미 토큰으로: soft `surface/{neutral-subtler · informative · positive · warning · negative}-main` + `text/*-main`(아이콘 `icon/*-main`), solid `fill/{neutral · informative · positive}-main` · `fill/warning-strong` · `fill/negative-strong`. 남은 Primitive 0개 확인. 색 변화: accent 글자 blue-600 → 500, negative 글자 red-700 → 600, warning amber → orange, neutral solid zinc-600 → 700, accent solid blue-600 → 500, negative solid red-700 → 600. 코드 · tokens.css · tokens.json 동일
- **`fill/warning-strong` orange/600 → orange/500 (피그마 · 코드, 사용자 결정 B)** — warning solid 배지가 너무 진해서 한 단계 연하게. ⚠ 흰 글자 대비 약 2.8:1(기준 4.5:1 미달), 짧은 상태 이름에만
- **디자인시스템 코드 — 피드백 1부** — InlineAlert를 피그마대로 다시 만듦(아이콘 20 + 제목 semibold + 설명 medium, 글자 · 아이콘 의미 색, soft 8/20 모서리 없음 · line 12/20 테두리 rounded-surface-sm). 새로 ExpandedAlert(여백 20 · 제목 줄 · 설명 · 슬롯 · 버튼, soft/line × info · highlight · warning · negative · positive). Toast 다시 만듦(dark · basic · 의미 fill + 흰 글자, border-neutral-strong · elevation-5). 아이콘 alert · information-2 · error-warning · checkbox-circle Icon Set에서 추가. 피그마 확인 필요: ① Inline Alert line 모서리 16 ≠ 좌우 20 ② Toast warning `fill/warning-main`(orange-400) + 흰 글자 대비 부족 ③ Inline Alert basic · Expanded line · Toast basic 판이 `bg/*`(규칙상 surface)
- **알림 3가지 정리 (피그마 · 코드, 사용자 결정)** — ① Inline Alert line 5개 모서리 `rounded/surface-sm` 16 → `rounded/4xl` 20(좌우 여백 20과 같게) ② Toast warning 판 `fill/warning-main` → `fill/warning-strong`(흰 글자 대비) ③ Inline Alert basic · Expanded Alert line · Toast basic 판 `bg/subtlest` · `bg/main` → `surface/subtlest` · `surface/main`(같은 값, 8곳)
- **`text/informative-main` blue/500 → blue/600 (피그마 · 코드 · 토큰)** — 알림 information 글자를 한 단계 진하게. 같은 토큰을 쓰는 곳: Inline Alert 4 · Expanded Alert 2 · Status Badge accent 8(배지 글자도 blue-600으로 — 원래 값으로 돌아감), `icon/informative-main`도 따라감
- **`text/informative-main` blue/500 → blue/600 (피그마 · 코드 · 토큰)** — 알림 information 글자를 한 단계 진하게. 같은 토큰을 쓰는 곳: Inline Alert 4 · Expanded Alert 2 · Status Badge accent 8(배지 글자도 blue-600으로 — 원래 값으로 돌아감), `icon/informative-main`도 따라감
- **Toast warning 판 되돌림 (피그마 · 코드, 사용자 결정)** — `fill/warning-strong` → 다시 `fill/warning-main`(orange-400). 흰 글자 대비 낮음은 알고 유지
- **디자인시스템 코드 — 피드백 2부(모달)** — 공통 대화상자 판(surface-main · border-neutral-strong · rounded-surface-lg 24 · 여백 24 · elevation-4, scrim 클릭 닫힘). ConfirmModal 다시 만듦(폭 320 · 제목 text-base bold · 본문 text-base medium · 버튼 xl · 왼쪽/가운데 · fit/fill). 새로 Modal(Contents: 제목 base/xl bold · 설명 · 콘텐츠 · 버튼 lg), IconModal(아이콘 원 48 · 결과 알림), PopConfirm(248 · 여백 12 · rounded-surface-xs), BottomSheet(아래 붙음 · 위 모서리만 · 손잡이 · 꽉 찬 xl 버튼), ReportModal(700 · section 머리 fill-primary-strong · 왼쪽 목차 PageIndex · 본문) 추가. 피그마 확인 필요: Dialog 5종 판이 `bg/main`(규칙상 surface/main)
- **모달 간격 정리 (피그마 · 코드)** — Pop Confirm 2개: 여백 12 → 14(`spacing/3-5`) · 모서리 `rounded/surface-xs` 12 → `rounded/2xl` 14(여백 = 모서리) · 제목 → 본문 8 → 4(`spacing/1`). 코드: 모달 닫기 버튼이 제목 줄을 키우지 않게(제목 → 본문 19 → 8), 가운데 정렬 모달은 제목도 가운데, ReportModal 제목 줄 28 · 메뉴 위(탭) 추가 · 메뉴 없는 형태는 쓰지 않음, 한글 어절 단위 줄바꿈(keep-all) 전체 적용
- **대화상자 판 색 (피그마)** — Confirm 8 · Contents 8 · Icon 4 · Pop Confirm 2 · Bottom Sheet 4 = 26곳 `bg/main` → `surface/main`
- **Tooltip 피그마 맞춤 (코드)** — Border(기본) · Solid(surface-inverse-main) 두 가지, 여백 16 = 모서리 rounded-3xl 16, 제목 semibold, 닫기, 꼬리 없음. 새로 TooltipBubble(늘 떠 있는 안내 · 코치마크). 피그마도 정리(사용자 결정): Tooltip · Solid · Border Tooltip · _Base/Master Tooltip의 `bg/main` → `surface/main`, `border/gray` → `border/neutral-main`, `zinc/800` → `surface/inverse-main`(꼬리 포함 306곳), 세 세트 모두 의미 토큰만 남음
- **지도 컴포넌트 포함 결정** — 피그마 지도 10종을 디자인시스템 코드에 포함(사용자 결정)
- **ReportModal 반응형 (코드)** — 판 폭 600 미만이면 자동으로 모바일 형태(container query): 머리 여백 16/20 · 제목 text-base, 왼쪽 목차 → 머리 아래 탭(가로 스크롤), 한 줄 본문. 화면이 600 미만이면 화면 꽉 채움(모서리 · 테두리 없음, 100dvh), `mobile`로 강제 가능. **모바일은 풀페이지 팝업 + 머리 · 탭 위 고정, 본문만 스크롤**(판 높이가 없을 땐 sticky). 미리보기에 휴대폰 틀 예시 2개
- **디자인시스템 코드 — 표 그룹 (피그마 🏁 Table v1.0 기준)** — Table: 셀 8/12 · 머리 text-sm medium(아이콘 · 도움말) · 행 선택(체크박스 열 + 전체 선택) · 고정 열 여러 개(width로 위치, 마지막 열 그림자) · hover. 셀 도우미 TableTitle(보조 글 + 제목 semibold) · TableNumber(숫자 + 증감) · TableRank(1~3위 강조) · TableBar(basic · composition) · TableActions 추가. MinimalTable: 행 머리 · 숫자 + 증감(Metric) · 고정 열. 피그마 확인 필요: Table Status · Badge가 예전 Category Badge 모양(여백 2/8 · Primitive 색), BarChart 셀이 Primitive `cyan/500 · 600` 직접 사용, 고정 열 그림자 `raw` 색
- **표 보강 · 셀 미리보기 (피그마 토큰 · 코드)** — 새 Semantic 토큰 `table/fixed-overlay`(→ state layers/on neutral/hover, 고정 경계 그림자)와 `chart/series-1~6`(blue-600 · cyan-500 · violet-500 · amber-400 · emerald-500 · rose-400). 코드: 행 색을 셀마다 칠해 선택 + hover가 고정 열까지 한 줄로 이어지게, 체크박스 열 정확히 40, 고정 그림자는 가로 스크롤했을 때만, 순위 1~3위 메달 아이콘(Table v1.0 circle/1st · 2nd · 3rd) · 4위부터 숫자, 숫자 셀이 열 정렬을 따름, 막대 셀 2번 색부터 chart-series. 셀 미리보기 카드 6개(TableHeaderCell · TableTextCell · TableIndicatorCell · TableControlCell · TableDataCell · MinimalTableCell)로 Table v1.0 모든 변형 표시, TableCell · TableStatus(badge · dot) · TableBadges · TableActions(더보기) 도우미. 피그마 Table v1.0 파일 수정(Status · Badge 교체, BarChart 색, overlay 연결)은 파일 접근 필요로 대기
- **표 머리 회색 기본 (코드)** — Table 머리 기본을 `table-header-subtle`(회색) + `text-body-main`으로. 흰 머리(`header="main"`, `table-header-main`)일 때는 머리 글자 `text-body-subtle`. 예시 표를 원래 구성으로 되살리되 차분하게(특징 배지 2개 · quiet 막대 · 동작 줄임 · 미리 선택 없음, 상태는 StatusBadge). 피그마 Table v1.0 머리 셀 11개(Header Text 9 · Header Checkbox · Header Empty) 판 → `table/header-subtle`(판이 없던 Fixed=none 3개도 추가). 흰 머리용 variant는 미정
- **피그마 🏁 Table v1.0 정리 (Component v2.3 게시 후)** — ① Table Status · Style=Badge 4개: 예전 Category Badge(pill) → Status Badge soft xs rounded(neutral · accent · positive · negative, 아이콘 숨김), Dot 4개 · Table Badge 6개는 라이브러리 업데이트로 새 Category Badge(모서리 6 · 의미 토큰) 반영 확인. ② BarChart composition: `cyan/500`(막대) · `cyan/600`(글자) → `chart/series-2`. ③ 고정 그림자 87개(머리 · 셀 · Minimal Table의 Fixed variant): raw 흰 그라데이션 → `table/fixed-overlay` 색 + 알파 그라데이션 마스크 묶음(Overlay 그룹, 같은 위치 · 고정). 남은 raw 그라데이션 0개
- **디자인시스템 코드 — 차트를 ECharts로 전환** — ECharts 5.5(cdnjs, 한 번만 불러옴) 위에 토큰 테마(실행 중 CSS 변수에서 읽음): 계열 `chart-series-1~6`, 축 글자 text-xs body-subtle · 축선 divider-neutral-main · 격자 divider-neutral-subtle · 눈금 없음, 툴팁은 Tooltip 판과 같은 HTML(범주 semibold + 점 · 이름 · 값), 범례 위 왼쪽 네모 10, ResizeObserver로 다시 그림, 동작 줄이기면 애니메이션 끔. BarChart(세로 · 가로 · 누적 · 값 표시) · LineChart(면적 · 곡선) · DonutChart(가운데 합계 · % 범례)를 같은 props로 다시 만들고, ComboChart(막대 + 선 두 축) · HeatmapChart(요일 × 시간대) · Chart(공통 판, option/build) 추가
- **차트 반응형 · 도넛 정리 (코드)** — 차트가 판 폭을 재서 다시 그림(높이도 폭에 맞출 수 있음). 도넛: 넓으면 도넛 왼쪽 고정 크기 + 범례 바로 오른쪽(사이 32), 좁으면 도넛 위 · 범례 아래(가운데 · 줄바꿈)로 자동 전환. 가운데 글은 값 + 설명 묶음의 가운데 = 고리 중심(설명 없으면 값만 중심). 범례 글자: 도넛 14(네모 12) · 축 차트 13. 폭 480 미만: 범례 좌우 넘김, 축 글자 11 · 겹치면 숨김, 막대 최대 폭 16
- **디자인시스템 코드 — 빠진 피그마 컴포넌트 1부** — Accordion(Box · Text × md · sm, 펼침 surface-subtler · 제목 heading, text hover primary), Chip(neutral · soft · ghost · primary × gray · brand × md 32 · sm 26 · xs 24 · 2xs 18, pill · 테두리 · 아이콘 · 값 · 지우기 · 눌러서 고르기), SocialBadge(카카오 · 네이버 · 구글, mini 18 — 브랜드 색 예외), Profile(가로 · 세로, mini 소셜 배지) · ProfileButton, Avatar 2xs~4xl. 검토판: Chip → 선택, Accordion → 목록 · 메뉴, SocialBadge → 배지, Profile → 탭 · 내비게이션. 피그마 확인 필요: Box Accordion 모서리 raw 8 · 좌우 16(여백 = 모서리 규칙), Text Accordion 판 `bg/main`, Chip primary · gray가 soft · gray와 같은 모양
- **Accordion · Chip 정리 (피그마 · 코드, 사용자 결정)** — Box Accordion 6개 모서리 raw 8 → `rounded/surface-sm` 16(좌우 여백 16과 같게). Text Accordion 6개 판 `bg/main` → `surface/main`. Chip primary · gray 16개 `surface/subtler`(soft와 같던 것) → `fill/neutral-main` + 글자 `text/inverse-heading-main` · 아이콘 `icon/inverse-heading-main`. 코드 동일. Accordion 애니메이션 · 열렸을 때 판 전체 클릭으로 닫기
- **Chip 선택 옵션 (코드, 사용자 결정)** — 피그마에 State 변형은 추가하지 않음. 코드 Chip에 `selectable` · `selected` · `defaultSelected` · `onChange` 추가: 꺼짐 = 지정한 variant · color, 켜짐 = primary · brand + 왼쪽 ✓, `aria-pressed`. 피그마에서는 선택된 칩을 Style=primary · Color=brand · ShowLeftIcon(check)으로 그림
- **디자인시스템 코드 — 빠진 피그마 컴포넌트 2부(Slider)** — Slider(하나 · 범위, 막대 4 surface-subtler · 채움 fill-primary-main · 손잡이 20 흰 원 + border-neutral-strong + elevation-2 · 값 상자 rounded-md text-xs, 눈금 선 1×4 + text-xs, 비활성, 끌기 · 막대 누르기 · 키보드 화살표/Page/Home/End, role=slider) · SliderField(이름 · 설명 · 현재 값 primary + 슬라이더 — 피그마 Slider/Circle · Slider/Range). 검토판 선택 탭
- **디자인시스템 코드 — 지도 그룹(반응형)** — 실제 지도는 지도 라이브러리가 그리고 디자인시스템은 위의 표시 · 검색 · 패널 · 배치를 맡음. MapLayout(판 폭 900↑ 왼쪽 패널 390 + 접기 손잡이 · 검색 떠 있음 / 600~900 패널 320 / 600↓ 검색 위 꽉 · 패널 아래 시트 40↔85% · 도구 40 compact), MapSearch(48 · rounded-3xl · floating · 결과 판 · 찾은 글자 primary, 모바일 56 막대), LocationSelector(단계 칩 · 3열 격자 40 · 적용, 좁으면 2열), MapCluster(76~180 · 고른 것 · 링) · MapRectCluster · MapBadge(basic · up · down × outline · solid) · MapMarker(핀 34×42) · MapCallout · MapTip, MapMenu(48 · 묶음 · 확대/축소), MapListItem. 아이콘 ruler · stack · focus-3 · share. 검토판 "지도" 탭. 피그마 확인 필요: 지도 말풍선(Top Badge)이 Primitive `zinc/800`, Map Search 판이 `bg/*` 일부, `map/cluster-ring-strong` 코드 토큰 없음(링은 map-region으로 대체)
- **MapLayout을 Templates v2.1 지도 레이아웃 기준으로 다시 만듦 (코드)** — 처음 만든 배치(임의 패널 제목 "영통동 상권 리포트")를 버리고 Templates v2.1 "지도 레이아웃"(Floating type · Side pannel type · 보고서 펼친 상태 · 접힌 상태)과 인터랙션 규칙대로: 지도 100%, 왼쪽 목록 패널 375(위 검색 + Map List), 필터(Toggle Button base xl primary pill, 여백 20/24 · 사이 12)는 검색과 함께 이동, 보고서 390이 패널 옆에 붙어 필터 위를 덮음(Contents Header card + 보고서 영역), 보고서 열린 채 접으면 전체 접힘, 접으면 "현 지도에서 검색", 오른쪽 위 도구(내 정보 · 거리/면적/반경 · 커스텀) · 아래(내 위치 · 확대). 반응형: 768~1023 패널 320 · 보고서 겹침 / 768 미만 검색 막대 + 필터 가로 스크롤 · 목록 아래 시트 · 보고서 전체 화면. MapTool 추가, MapListItem 동그란 사진
- **지도 말풍선 · 묶음 색 단계 · Text Area 버튼 영역 (피그마 · 코드, 사용자 결정)** — Map Item의 Top Badge · 꼬리 20곳(Rectangle Cluster 4 · Minimal Marker 8 · Callout Marker 8) Primitive `zinc/800` → `surface/inverse-main`. 코드 토큰 `map-cluster-ring-strong`(= `fill/inverse-main` 60%, 피그마 component 토큰과 같음) 추가 — 원형 묶음 색 단계는 파랑 위에 겹쳐 연하게 + 테두리 `fill/primary-subtlest`. Text Area Button Area의 Text Button 30개 삭제(속성 연결 0 확인) → 오른쪽 정렬 Primary Button만
- **지도 모바일 도구 정리 (코드, 사용자 결정 A + 더보기)** — 모바일에서 도구가 위아래로 겹치던 문제: 확대 · 축소 버튼 없앰(두 손가락), 내 정보는 검색 막대 오른쪽(`profile`, MapSearch `trailing`), 거리 · 면적 · 반경 · 커스텀은 오른쪽 위 더보기(⋮) 하나로 접고 누르면 목록(줄 44, 바깥 누르기 · Esc 닫힘), 내 위치만 오른쪽 아래(시트 있으면 시트 위 · Floating형은 아래 16). 지도 도구 버튼 · 묶음 정사각형 유지
- **모바일 지도 검색 흐름 (코드)** — 실제 앱 패턴: 지도 화면에는 누르면 열리는 검색 막대 → 지도 위를 덮는 검색 화면(← 뒤로 + 자동 초점 입력 + 지우기, 입력 전 최근 검색 · 하나씩 지우기 · 전체 삭제, 입력하면 결과 · 찾은 글자 파랑, 결과 없음 안내) → 결과 선택 · Enter면 지도 화면으로 돌아가 막대에 이름, ← · Esc는 그냥 돌아감. MapLayout 모바일에서도 지도 화면 전체를 덮음. 지도 위 버튼 hover는 흰 판 위에 state layer 겹침(모바일은 pressed만)
- **지도 필터 선택 판 (코드, 시안 반영)** — 필터를 누르면 버튼 아래 선택 판(폭 220 · rounded-3xl · elevation-3 · 제목 text-base semibold · 줄 40), 고르면 버튼에 값 표시 + primary 테두리. 하위 항목(`{label, children}`)은 › 표시 · hover/누르면 오른쪽 하위 판(모바일은 아래로 펼침), 값 "상위 · 하위". 필터 아이콘은 선택(`icon`, 기본 없음). 최근 검색 지우기 버튼 크기 수정
- **문서 정리 (2026-10-30)** — 작업요약 본문(semantic 추가 토큰 · Status Badge 규칙 · 남은 일 다시 정리), 적용규칙(모바일 · 지도 버튼 상태, 한글 줄바꿈, 여백 = 모서리 목록, 마지막 줄 구분선, 컴포넌트 사용 규칙, 금지 사항), 컴포넌트가이드(장마다 코드 컴포넌트 대응) 갱신

### 2026-10-20
- **Icon Button 아이콘 덮어쓰기 제거** — Title bar 12 · NavLogo 12 · Report Modal 8 · Pagination 6 · Pop Confirm 2 (40곳): `icon/heading-main`(zinc/950) → 컴포넌트 기본 `icon/body-main`(zinc/800)
- **Control Button 정리 마무리** — Type=empty 11곳(NavLogo 10 · Map Search 1) → 빈 프레임 `Spacer` 36×36 (`size/36px` 연결, NavLogo의 Menu 속성 연결 유지). TitleButton 1곳 → Icon Button xl · neutral · menu. 이 파일에 Control Button · ControlButton · TitleButton 인스턴스 0곳
- **Accordion** — add · close 12곳 → Icon Button neutral (2xs 6 · 3xs 6, 원래 크기 유지). 아이콘 선 `border/neutral-accent` → `icon/body-main`
- **숨김 ControlButton 삭제** — Change Badge 5 · Contents Header Bullet 30 (속성 연결 없고 켜진 곳 0곳 확인 후 삭제)
- **Spacer 크기 변수 수정** — 처음에 `spacing/9`로 연결된 것을 합의한 대로 `size/36px`로 교체 (11곳, 크기 변화 없음)
- **Icon Button 크기 정리** — 인스턴스에서 크기를 강제로 줄인 곳을 맞는 Size로: Pagination 18곳 sm(강제 24) → xs 24, Pop Confirm 2곳 2xs(강제 18) → 3xs 16. Mobile/Map Search 메뉴 버튼 1곳 xl → lg. Icon Button disabled는 배경 없이 `icon/disabled`만 쓰는 것으로 확정
- **Neutral solid state-layer** — 검정 배경 위에 검정 오버레이(`on neutral`)라 hover가 안 보이던 것을 `state layers/inverse`로 연결 (80개: hover → `inverse/hover` 흰색 8%, 나머지 → `inverse/default`)
- **fill neutral 단계 조정 + 스크롤바 토큰** — 25% 단계를 넣기 위해 값은 그대로 두고 이름만 한 칸씩 이동: `fill/neutral-main`(zinc/900) → `fill/neutral-strong`, `fill/neutral-subtle`(zinc/700) → `fill/neutral-main`, `fill/neutral-subtler`(zinc/400) → `fill/neutral-subtle`. 새 `fill/neutral-subtler` = 950 25% 추가. component `scrollbar/thumb` → `{fill/neutral-subtler}`, `scrollbar/track` → `{surface/subtler}`. 기존 색 변화 없음 (퍼블리셔 전달: 이름 변경만)

### 2026-10-14
- **이름 규칙** — 진하기 단계를 subtlest · subtler · subtle · main · strong · stronger로 통일, 기준 단계에 항상 main. bold · default · base · white · hint 사용 중단
- **project/primary** — 10개 → 정리 (main · subtle · subtler · subtlest · strong · text · text-on-main · text-on-subtle). tint · soft(8%) · track · muted 삭제
- **semantic 이름 변경** — bg · surface 회색 단계, fill(역할-단계), border · divider(neutral-*), text(heading · body 용도형), white → inverse 전체
- **text** — heading-main · body-main · body-subtle 체계로 변경, white 단계 80 · 60%를 70%로 통합, `text/primary/disabled` 삭제
- **icon 그룹 신설** — text와 같은 이름으로 text 참조. 컴포넌트 아이콘 약 3,300곳을 fill → icon으로 이동 (회색 아이콘은 text 단계에 맞춰 한 단계 진해짐)
- **hint → placeholder** — `text/hint` → `text/placeholder`, `icon/hint` → `icon/placeholder`. placeholder가 아닌 사용처(Radio 설명 등 41곳)는 `text/body-subtle`로 이동. `destructive-hint` 삭제
- **disabled** — 모든 컴포넌트 disabled 상태의 텍스트 `text/disabled`, 아이콘 `icon/disabled`로 통일
- **state layers** — 상태 이름 소문자 통일, neutral 오버레이 zinc/950, destructive → fill/destructive-main, inverse 그룹 추가 (disabled 흰색 8%)
- **버튼 세트** — 스타일별 세트 → 색 역할별 세트(Primary · Neutral · Destructive · Inverse)로 재구성, Color 속성 제거 · Style 속성 추가, Neutral Button → Base Button(스타일), inverse base 제거, inverse solid icon 40개 추가
- **버튼 레이어** — state-layer 래퍼 구조로 변경, padding · gap을 Primitive spacing 변수에 연결, pressed 제거
- **버튼 토큰** — component에 `button/{style}/{color}/bg · border · border-disabled` 생성. hover · loading · disabled 배경 토큰과 label 토큰 생성 후 삭제(state layers · text · icon으로 대체). 예전 `Button/*` 18개 삭제
- **Select** — soft · ghost 빈 값 placeholder를 `text/body-main`으로 변경
- **색 연결 보완** — Solid Tooltip 글자 75곳 `text/inverse-heading-main`, Contents Header 제목 60곳 예전 `color/zinc/900` → `text/heading-main`, Mobile/NavLogo 테두리 4곳 예전 `color/alpha/dark/6` → `border/neutral-subtle`. Navigation의 로고(이름에 logo 포함)는 토큰 연결 대상에서 제외
- **border 정리** — `accent` → `neutral-accent`, `destructive-light` · `destructive-darker` → `destructive-subtler` · `destructive-subtle`. 사용처 없는 8개 삭제 (primary-stronger, destructive-strong · accent, informative · success · warning-strong, focus-destructive, none)
- **switch** — 켜짐 색 `switch/active-default`를 primary 500 → `primary/main`(600)으로 변경 (checkbox와 통일)
- **상태색 이름 변경** — `success` → `positive`, `destructive` → `negative` (변수 40개: text · icon · fill · surface · border · state layers · Input · table · button 토큰). `Destructive Button` → `Negative Button`. 컴포넌트 속성: Icon Button Color, Confirm Modal · Pop Confirm Type, HelperText Type, Alert · Toast Type(success → positive, error → negative), Input · Password · Input Quantity(+Group) · Text Area · Select · Checkbox · Radio의 `Danger` · `Destructive` 속성 → `Negative`. Modal `_Base/Icon`의 아이콘 종류 이름은 유지
- **border 값** — `border/neutral-stronger` 60% → 30%, Neutral Button outline 테두리 → `border/neutral-accent`
- **control 토큰** — Checkbox · Radio · Switch 공통 `control/*` 10개 생성(component, semantic 참조), semantic `fill/neutral-subtlest`(950 8%) · `fill/primary-subtler`(palette/200) · `fill/positive-subtler`(green 20%) 추가. `_Base/Checkbox` · `_Base/Radio` · `_Base/Switch`를 state-layer 구조로 변경(hover 배경 토큰 제거), Negative variant의 예전 `button/*` 참조와 `color/green/a/20` 정리. semantic `control/*` · `switch/*` 17개 삭제. Location selector scroll 배경 → `surface/main`
- **control 보정** — Checkbox · Radio · Control Box · Checkbox/Radio Menu List의 hover · disabled variant가 안쪽 `_Base` 인스턴스를 default 상태로 둔 채 색 덮어쓰기로 표현하고 있어서, 안쪽 인스턴스의 State를 바깥 State와 맞춤(48곳). `_Base/Switch` 2xs hover · disabled 4개는 다른 스위치 인스턴스를 감싸고 있던 구조를 풀어 직접 구성
- **state layer 정리** — neutral 배경 위 state-layer를 `state layers/neutral` → `on neutral`로 변경 (Neutral Button soft · outline · base · ghost 320, Inverse solid 80, Checkbox 52, Radio 40, Switch 40). hover 오버레이 8% → 4%. `state layers/neutral`은 사용처 없음 (검정 배경용으로 재정의 예정)
- **disabled 공통 세트** — disabled를 state layer 대신 공통 토큰으로 표현 (Material 방식). `fill/disabled` 20% → 12%, `fill/inverse-disabled` 흰색 30% → 8%, `border/disabled` 추가. Primary · Neutral · Negative · Inverse Button disabled 380개, `_Base/Checkbox` 20 · `_Base/Radio` 16 · `_Base/Switch` 20에 적용 (state-layer default, 컨트롤의 연한 파랑 · 초록 disabled도 회색으로). 이전 토큰은 확인 전이라 삭제하지 않음
- **Switch disabled** — 트랙 `fill/disabled` → `fill/neutral-subtlest`(950 8%), 핸들 흰색 → `control/handle-disabled`(신규, `fill/neutral-subtlest` 참조), 핸들 그림자 제거 (20개). 공통 세트만으로는 꺼진 상태와 구분이 안 돼서 조정
- **이전 토큰 정리** — 공통 disabled 세트로 바꾸면서 쓰지 않게 된 18개 삭제: 버튼 `border-disabled` 7개, `control/disabled` · `on-disabled` · `on-green-disabled` · `track-off-disabled`, `fill/primary-subtler` · `fill/positive-subtler`, state layers의 `on brand` · `on soft` · `on negative` · `negative` · `inverse` disabled. `on neutral/disabled`(List Menu 34곳) · `brand/disabled`(Cascader 5곳)은 사용 중이라 유지, `neutral/disabled`는 검정 배경용 재정의 때 함께 결정
- **Input UX 규칙** — Input 계열 · Search Form · Map Search 규칙 정리 (상태와 우선순위, read-only 추가, hover 테두리는 회색 한 단계 진하게, focus는 테두리 색만, 아이콘 색, Form Field 구성, 검색어 목록)
- **Input 색을 공통 단계로 정렬** — semantic `Input/*` · `border/input/*`가 Primitive를 직접 참조하던 것을 공통 semantic 참조로 변경 (Input · Password · Input Quantity(+Group) · Text Area · Select · Search Form · DatePicker Input에 반영)
  | 토큰 | 이전 | 이후 |
  |---|---|---|
  | `Input/default` | #ffffff | `{surface/main}` #ffffff (변화 없음) |
  | `Input/soft` | zinc/800 6% (#1e2939 6%) | `{fill/neutral-subtlest}` zinc/950 8% (#030712 8%) |
  | `border/input/default` | zinc/800 8% (#1e2939 8%) | `{border/neutral-main}` zinc/950 10% (#030712 10%) |
  | `border/input/hover` | primary 60% (#155dfc 60%) | `{border/neutral-strong}` zinc/950 15% (#030712 15%) — hover는 회색으로 |
  | `border/input/focus` | palette/500 (#2b7fff) | `{border/primary-accent}` primary/main 100% (#155dfc) |
  | `border/input/negative` | red/500 60% | `{border/negative-main}` red/500 60% (변화 없음) |
  - `Input/soft-inverted`(흰색 6%) · `Input/negative`(red 4%)는 같은 값의 공통 토큰이 없어 semantic 추가 → 아래 항목
- **semantic 추가** — `fill/inverse-subtlest`(흰색 6%), `surface/negative-subtlest`(red 4%). `Input/soft-inverted` → `{fill/inverse-subtlest}`(Search Form Basic inverted 12곳), `Input/negative` → `{surface/negative-subtlest}` (색 변화 없음)
- **Input component 토큰** — semantic `Input/*` · `border/input/*`를 component `input/*`로 이동(약 1,010곳 연결 변경, 색 변화 없음). 입력창이 아닌데 빌려 쓰던 SearchMap/Logo · Mobile/Map Search Screen · Map Item/Report는 semantic으로 직접 연결. semantic `Input/*` · `border/input/*` 8개, 예전 component `Input/*` 7개 삭제
- **Input disabled** — Input 계열 · Select · DatePicker Input disabled 144곳에 공통 세트 적용 (`fill/disabled` · `border/disabled`)
- **disabled 그림자 제거** — 파일 전체 disabled variant의 그림자 22개 레이어 제거 (Filter Button 10, Password 6, Input 3, Input Quantity 3)
- **Input read-only** — `input/bg-readonly` · `input/border-readonly` 추가. State=read-only variant 추가: Input 6, Text Area 2, Input Quantity 6 (+/− 버튼 disabled). line은 연한 테두리, soft는 테두리 없음
- **Claude Design 문서** — `디자인시스템_적용규칙_ClaudeDesign.md`(v0.2), `디자인시스템_컴포넌트가이드_ClaudeDesign.md`(v0.1, 컴포넌트 90여 개의 용도 · 속성 · 규칙 · 정리 필요 항목) 작성
- **Input read-only 테두리 수정** — line · soft의 테두리가 원래 스타일과 반대로 들어가 있던 것을 바로잡음: line read-only는 연한 테두리(`input/border-readonly`), soft read-only는 테두리 없음 (Input 6 · Text Area 2 · Input Quantity 6)
- **Input soft 상태 보정** — soft hover가 예전 변수 `Input/soft-hover`(zinc/800 8%)를 써서 default보다 연해 보이던 문제 수정: hover = `input/bg-soft` + `state layers/on neutral/hover` 오버레이 (negative hover 포함). soft focus에 `input/border-focus` 테두리 추가. Input 12 · Password 6 · Input Quantity 12 · Text Area 4 · Select 16 (hover), focus 32. Search Form의 soft · inverted focus 32곳은 아직 예전 변수 사용 (별도 규칙 확인 후 정리)
- **Input negative hover** — soft negative hover의 오버레이를 `on neutral/hover` → `state layers/negative/hover`(red 8%)로 변경 (Input 6 · Input Quantity 6 · Text Area 2)
- **Input negative hover 오버레이 제거** — negative hover에서 state layer를 빼고 negative 모양 그대로 유지 (Input 6 · Input Quantity 6 · Text Area 2). 작업 중 Input Quantity(+Group) 안 +/− 버튼의 state-layer까지 지워져 32곳을 컴포넌트 원래 값으로 복구
- **Input soft negative default 테두리 제거** — Input의 soft · negative · default variant 6개에서 테두리를 빼서 hover(빨간 테두리)와 구분. negative hover는 원래대로(연한 빨강 배경 + 빨간 테두리, 오버레이 없음)
- **Input negative 규칙 확정** — negative는 별도 속성으로 유지, default와 hover는 같은 모양, focus만 빨간 테두리 2px로 구분 (Input: soft negative hover 테두리 제거 6, negative focus 2px 12). 잠시 만들었던 `input/border-negative-hover` 삭제
- **Input hover · focus** — line hover 테두리를 회색 → 연한 primary로 (`input/border-hover` → `border/primary-subtle` 30%), hover · focus 두께 2px로 통일 (Input: line hover 6, focus 12). focus 색을 primary 100% → 60%로 (`input/border-focus` → `border/primary-main`)
- **border primary 단계 조정** — primary 60%를 추가하면서 사다리 정리: 기존 `border/primary-main`(80%) → `border/primary-strong`으로 이름 변경, 새 `border/primary-main` = 60%. (subtler 10 · subtle 30 · main 60 · strong 80 · accent 100, negative의 main 60%와 같은 기준)
- **Input soft 상태 표현** — soft는 테두리 대신 state layer로 상태 표현: focus 테두리 제거 + `on neutral/focus`(12%) 6개, negative hover `negative/hover` 오버레이 6개, negative focus 테두리 제거 + `negative/focus` 오버레이 6개 (Input)
- **Input soft 그림자 제거** — Input soft variant의 그림자 17개 레이어 제거 (default · hover · focus). 다른 입력창(Password 37 · Input Quantity 65 · Select 24)은 나머지 입력창 정리 때 함께 반영
- **Input 규칙을 나머지 입력창에 적용** — Password · Text Area · Input Quantity · Select: line hover 연한 primary 2px · focus primary 60% 2px · 오류 default/hover 빨강 1px · 오류 focus 2px, soft는 테두리 없이 state layer 오버레이(hover · focus · 오류 포함), soft 그림자 제거 (line 124 · soft 154 variant, 그림자 126 레이어). Select ghost 44개는 배경 컨테이너가 없어 이번 적용에서 제외
- **placeholder 색 통일** — 빈 값 variant의 placeholder를 `text/body-subtle` → `text/placeholder`로 (Input 26 · Password 24 · Input Quantity 26 · Text Area 12 · Select 38 · Search Form 64). Suffix 텍스트는 제외
- **입력창 그림자 전체 제거** — Input 26 · Password 43 · Input Quantity 74 · Input Quantity Group 52 · Select 80 · DatePicker Input 6 레이어 (모든 스타일 · 상태)
- **입력창 안 작은 버튼** — 지우기 · 보기 · 수량 +/− · 날짜 버튼 인스턴스에 예전 버튼 토큰으로 덮어쓴 색 제거, 각 버튼 컴포넌트의 원래 색 사용 (Input 90 · Input Quantity 120 · Text Area 30 · Group 20 · DatePicker Input 8, 색 변화 없음 확인)
- **Select ghost** — 예전 `button/ghost-default` · `button/ghost-black-hover` 배경 제거(투명), hover · focus는 `on neutral` state layer, negative hover는 `negative/hover` (92개 variant)
- **입력창 state layer 구조 통일** — soft · ghost의 모든 variant에 state layer 한 겹을 둠 (default · disabled · read-only = 투명 default 단계). Input 45 · Password 36 · Input Quantity 45 · Text Area 15 · Select 188
- **Select ghost 레이어 구조** — line · soft와 같은 구조로 변경 (92개): variant(세로, 배경 없음) > `Input`(여백 · 모서리 · 배경 · state layer) > `Wrap`(아이콘 · 레이블) + `Wrap`(화살표), 드롭다운 목록은 variant 바로 아래 유지. 레이어 이름도 line · soft와 통일(Label wrap · Left Icon · Icon trailling → Wrap). 크기 변화 없음
- **Form Field (Slot) 세트 오류 수정** — 같은 이름의 variant(`Size=2xl, Align=vertical`)가 2개라 세트 속성을 읽을 수 없던 문제. 두 variant가 완전히 같고 사용처가 없는 것을 확인한 뒤 중복 1개 삭제 (7 → 6개)
- **Select 마무리** — line 기본 테두리 `border/neutral-strong` → `input/border` 1px (Input과 동일, 16개), soft · ghost 빈 값 글자 `text/body-main` → `text/placeholder` (44곳, 예외 규칙 삭제)
- **Input Quantity Group** — State의 `typing`을 `focus`로 통합: typing에만 있던 입력 커서를 focus 24개에 복사하고 typing 24개 삭제 (State: default · hover · focus · disabled)
- **Search 정리** — Search Form/Basic 96: basic 테두리 Input과 동일(default 1px · focus 2px), soft · inverted focus를 예전 `Input/soft-hover` · `soft-hover-inverted` 대신 state layer로, 그림자 제거. Map Search/Basic 12: basic · floating 테두리 Input과 동일(focus 표시 추가), soft는 state layer, basic · soft 그림자 제거(floating 유지). SearchMap/Logo 4: 배경 `input/bg`, 테두리 Input과 동일. Mobile/Map Search: 예전 흰 배경(`Input/default` · `basic/default`) → `input/bg` · `surface/main`. _Base/SearchGroup · SearchItem 흰 판 → `surface/main`. 구분선(`color/zinc/400`) 117곳 → `fill/neutral-subtler` (값 동일)
- **Input Quantity +/− 버튼 교체** — 예전 `Icon Button/Neutral Icon Button` 120개 → `Neutral Button`(base · icon, 같은 크기 · 상태 · 아이콘). Input · Text Area의 Text Button(2xs, 20px)은 새 버튼 세트에 같은 크기가 없어 유지 (Text Button 정리 때 처리)
- **입력창 gap 정리** — 연결 안 된 gap 중 자식 2개 이상은 spacing 변수 연결(gap 6 → `spacing/1-5` 104, gap 8 → `spacing/2` 84, gap 10 → `spacing/2-5` 4), 자식 1개뿐인 프레임의 기본 gap 10은 0으로 (820)
- **Search 예전 변수 정리** — 값이 같은 토큰이 없던 것을 공통 단계로: `text/paragraph`(zinc/700) → `text/body-main` 60, `items/slider/input-soft` → `input/bg-soft` 4, `border/default` → `input/border` 6
- **Control Button** — 원본 세트의 예전 투명 배경(`button/ghost-default`) 104곳 제거, 인스턴스 130곳(Search 120 · Navigation 10) 동기화 (색 변화 없음). hover의 `button/ghost-black-hover` 88곳은 남음
- **Control Button → Icon Button** — 캔버스에서 삭제된 Control Button 인스턴스 118곳(Search)을 `Icon Button`(Color=neutral, 같은 크기 · 상태)으로 교체, 아이콘은 종류별로 지정 (close → close, back → arrow-left, menu → menu). Type=empty 11곳(Mobile/NavLogo 10 · Mobile/Map Search 1)과 TitleButton 1곳은 남음
- **Icon Button 토큰 최신화** — 배경의 예전 `button/ghost-*` 변수를 state layer로 교체 (144개): neutral → `on neutral`, primary → `brand`, negative → `negative`, inverse → `inverse` (hover는 hover 단계, 나머지는 투명 default). loading 스피너의 예전 변수(`palette/alpha/40` · `color/black/a/80` · `color/red/a/40` · `color/white/a/40`, 40~80% 투명)를 default 아이콘과 같은 `icon/*`로 (36곳, 로딩 아이콘이 default와 같은 진하기로)
- **Icon Button neutral-subtle** — Color에 `neutral-subtle` 추가(36개, 아이콘 `icon/body-subtle`). 복제 과정에서 끊긴 아이콘 교체 속성 연결을 복구. 입력창 · 검색창의 지우기 버튼 107곳(Search Form 96 · Map Search 7 · SearchMap/Logo 2 · Mobile 2)을 `neutral-subtle`로, 아이콘 색이 아이콘 라이브러리 기본값(`surface/mono`)으로 남은 58곳은 `icon/body-subtle`로 맞춤
- **Search 마무리** — 검색 결과 항목 hover(예전 `button/neutral-black-hover`) → `surface/main` + `state layers/on neutral/hover`, Search Form의 예전 `button/soft-white-default` 4곳 → `input/bg-soft-inverse`, Location selector의 투명 `badge/transparent` 제거 · 연결 안 된 흰 판 21곳 → `surface/main`
- **숫자 변수 최신화 (파일 전체)** — 예전 라이브러리의 숫자 변수(spacing · radius · border-width)에 연결된 padding · gap · 모서리 · 테두리 두께 · 아이콘 크기를 현재 Primitive로 교체 (원본 컴포넌트 기준 약 15만 곳, 인스턴스는 원본을 따라감). spacing · border-width는 같은 이름 · 같은 값, radius는 **값 기준**으로 `rounded/*` 연결 (예전 radius/sm 8 → `rounded/md`, radius/md 12 → `rounded/xl`, radius/lg 16 → `rounded/3xl`, radius/3xl 360 → `rounded/full`), `gap/action/lg`(6) → `spacing/1-5`. 모양 변화 없음. Foundation · Layout · Asset 문서 페이지의 font · breakpoint · container 변수 약 160곳은 남음 (Foundation 문서 재생성 때 정리)

### 2026-10-02
- v1 작성: Primitive 컬렉션 정리, Semantic 구조 초안(bg · surface · fill), Primitive Docs 플러그인
