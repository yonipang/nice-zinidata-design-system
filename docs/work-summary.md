# 디자인시스템 정비 작업 요약

기준일: 2026-11-09 (v3)
목적: 피그마 디자인시스템을 Primitive → Semantic → Component 3단 구조로 정리하고, Tailwind 코드·클로드 디자인·클로드 코드와 이름을 맞추는 작업

> 변경 이력은 `CHANGELOG.md`, 지금 상태 · 남은 일 요약은 `docs/status.md`. 이 문서는 본문(구조 · 토큰 · 규칙)과 남은 일 전체 목록만 둔다.

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
| Layout | breakpoint, max-w |
| Effect | opacity, blur, skew |

- 회색은 **zinc만 사용**하며 값은 Tailwind gray (`colors: { zinc: colors.gray }`)
- `text`: 6xs(8px) ~ 9xl(128px), **xs = 13px** (Tailwind 기본 12px과 다름)
- `font/family`: sans = Pretendard
- `rounded`: none 0 · xs 4 · sm 6 · md 8 · lg 10 · xl 12 · 2xl 14 · 3xl 16 · 4xl 20 · 5xl 24 · 6xl 32 · 7xl 40 · full 9999
- `spacing`: 0, px, 0-5, 0-75, 1, 1-5 … 96 (n × 4px)
- `size`: px 표기 이름, 코드는 같은 값의 spacing 클래스(`size-4.5`), 없을 때만 `size-[Npx]`
- `max-w`: Tailwind `max-w-*` 값(none · 3xs 256 ~ 7xl 1280) + 콘텐츠 폭 `content` 1180 · `content-wide` 1440(2026-11-09 추가, 코드 `max-w-content` · `max-w-content-wide`) — 예전 이름 `container`에서 바뀜(2026-11-09 확인)

### Tailwind v3 설정 대응

| 피그마 그룹 | tailwind.config.js | 클래스 예 |
|---|---|---|
| Color | colors | text-zinc-500 |
| text | fontSize | text-base |
| font/weight | fontWeight | font-bold |
| spacing | spacing | p-4, gap-4 |
| rounded | borderRadius | rounded-lg |
| breakpoint | screens | max-1240:block |
| max-w | maxWidth | max-w-md |
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

### 디자인시스템 코드 · 문서 (2026-11-09 기준)
1. **지도** — Templates v2.1 반경 선택 · 인디케이터, Patterns 지도 검색 · 폴리곤 생성을 코드로(면적 선택 MapAreaDraw는 끝남)
2. **행정구역 색칠 지도(MapCountry)** — 시도 · 시군구 경계 데이터 정해지면 ECharts 지도로
3. **모바일 지도 시안** — 시안이 생기면 지금 배치(검색 막대 · 필터 가로 스크롤 · 목록 시트 · 보고서 전체 화면)와 맞추기
4. **charts v1.0** — ECharts 테마와 축 · 툴팁 · 범례 대조, 라이브러리 원본의 Primitive 색을 chart/series · primary 규칙으로(라이브러리 파일 링크 필요)
5. **블록 세부 대조** — 피그마 Block 25종 ↔ 코드 Block* 값 대조(여백 · 글자 · 색)
6. **피그마 게시** — 변경 후 Component v2.3 · Templates v2.1 · Table v1.0 다시 게시(사용자)

### 이전부터 남은 일 (2026-11-09 정리 — 끝난 6개 뺌: 버튼 새 구조 · AI 규칙 등록 · disabled 공통 세트 · Control Button · Table/Charts 게시 후 Templates 업데이트 · 콘텐츠 폭 토큰)
1. border 투명도 값 점검 — 역할마다 단계 간격이 다름 (neutral main 10% · stronger 60%, primary main 80%, negative main 60%)
2. `state layers/on soft` 사용처 확인 후 정리 (on brand와 값이 같음)
3. `fill/hint` (면 색으로 쓰는 구분 막대) 이름 정리
4. 상태색 아이콘(negative · positive · warning)이 text 단계로 진해진 부분 화면 확인
5. Select Negative=true placeholder 색 결정
6. 글자의 예전 font 변수 정리
7. 코드 확인: borderRadius 최신 값, fontSize xs=13, `zinc: colors.gray`, maxWidth 3xs · 2xs
8. 입력창 Shape 속성 — pill 프로젝트가 생기면 Input · Password · Input Quantity · DatePicker Input에 `Shape=rounded/pill` 추가 (Text Area는 rounded 고정). 그전까지 pill 프로젝트는 지원하지 않음
9. Report Modal section 헤더(브랜드 색 배경)의 흰 글자 대비를 project mode별로 확인
10. Templates 베리에이션 추가 (범위 확인 필요)
11. Templates 3단계 — 새 레이아웃 규칙(콘텐츠 폭 · 간격 · 카드 Size · 모바일) 적용 (페이지별)
12. Templates — 차트 표 값: 나머지 45개를 막대 길이 기준으로 계산할지 결정, 선 차트(12 · 13개월) 축 라벨 · 도넛/파이 항목 라벨 기준 결정
13. Templates — 개인/법인 비율 셀 한 줄/두 줄 결정, 보고서 Report Modal 긴 내용 표시 방식 결정
14. Table v1.0 — Table Text 오른쪽 정렬 variant가 52px로 커지는 원인 수정(지금은 Templates에서 36px 고정으로 우회만 함), Minimal Metric에 Align=center 추가 검토
15. (필요할 때) Foundation 시각 문서 — 변수 · 스타일에서 자동 생성 (온보딩 · 개발 전달용)
---

## 변경 이력

→ **`CHANGELOG.md`**로 옮김(2026-11-09). 작업요약은 본문(구조 · 토큰 · 규칙 · 남은 일)만 둔다. 최근 결정 요약은 `docs/status.md`.
