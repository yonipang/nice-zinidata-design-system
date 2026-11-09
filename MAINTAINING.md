# 디자인시스템 수정 가이드 (MAINTAINING)

이 문서는 **다른 사람 · 다른 Claude 계정이 이 디자인시스템을 고칠 때**, 지금까지와 같은 수준 · 같은 방식으로 고치도록 만든 작업 설명서다.
사람이 읽어도 되고, Claude에게 "이 저장소의 MAINTAINING.md를 먼저 읽고 그대로 따라 작업해" 라고 주면 된다.

> 마지막 정리: 2026-10-30 · 컴포넌트 84종 · 토큰 Primitive 201 / project 4테마 / semantic 175+ / component 54

---

## 0. 먼저 읽을 것 (순서대로)

| 순서 | 파일 | 왜 |
|---|---|---|
| 0 | `docs/status.md` | **지금 상태 · 남은 일 · 최근 결정 — 새 대화는 이것만 먼저 읽는다** |
| 1 | 이 문서 | 작업 방식 · 규칙 · 도구 |
| 2 | `docs/rules.md` (적용규칙) | 토큰 층 · 이름 · 상태 · 여백 · 컴포넌트 사용 규칙 · 금지 사항 |
| 3 | `docs/component-guide.md` (컴포넌트가이드) | 피그마 컴포넌트 ↔ 코드 컴포넌트 대응 |
| 4 | `docs/work-summary.md` (작업요약) | 토큰 목록 · 결정 이력(변경 이력) · **남은 일** |
| 5 | `components/<이름>/README.md` | 고칠 컴포넌트의 props · 규칙 |

왜 그렇게 정했는지는 `CHANGELOG.md`에 날짜별로 다 있다(2026-11-09부터 이력은 CHANGELOG에만 쓴다). **이미 정한 것을 다시 바꾸기 전에 반드시 이력에서 이유를 찾아본다.**

---

## 1. 무엇이 어디에 있나

```
README.md              디자인시스템 소개 + "Consuming this system"(Claude Design이 읽는 사용법)
MAINTAINING.md         이 문서
CHANGELOG.md           변경 이력(작업요약의 변경 이력과 같은 내용)
design-system.json     디자인시스템 화면용 목록(Assets의 아이콘 · 로고) — 직접 고치지 않는다
tokens.json            토큰 원본(이름 · 값 · 용도)
source/
  tokens.css           모든 토큰(CSS 변수)
  tokens.w3c.json      W3C 형식 토큰
  tailwind.config.js   Tailwind에서 쓸 때
components/
  bundle.js            모든 컴포넌트(React, window.DS) — 한 파일
  bundle.css           모든 컴포넌트 스타일 — 한 파일
  index.d.ts           props 타입(문서용)
  <이름>/preview.html  컴포넌트 미리보기(검토판 · 디자인시스템 카드에 쓰임)
  <이름>/README.md     컴포넌트 설명(props · 규칙)
docs/                  Handbook 1~13편 + 부록, 그리고 원본 문서 rules.md(적용규칙) · component-guide.md(컴포넌트가이드) · work-summary.md(작업요약)
fonts/                 PretendardVariable.woff2
assets/Icons/          아이콘 SVG(bundle.js ICONS와 같은 내용) · assets/Logos/ NICE ZINIDATA 로고
archived/              정리하며 뺀 예전 컴포넌트 · 문서(참고용, 쓰지 않음)
tools/                 (저장소에만)
  build_review.py      검토판 만들기
  review-shell.html    검토판 페이지 틀
  check_review.py      검토판 오류 검사 · 카드 캡처
```

**원본은 하나다.** 디자인시스템 아티팩트(claude.ai의 "NICE지니데이타 디자인시스템")의 `project/` 폴더와 이 저장소는 **폴더 구조까지 완전히 같다**(2026-10-30 맞춤). 단 `tools/`(파이썬 도구)와 `.gitignore`는 아티팩트에 올릴 수 없는 파일 형식이라 **저장소에만** 있다. 고치면 **두 곳을 같이** 맞춘다(5장).

### 관련 피그마 파일

| 파일 | 파일 키 | 쓰임 |
|---|---|---|
| 🗃️ Component v2.3 | `3C2TB2p12Nxep7smiGvPgN` | 컴포넌트 · 변수(project · semantic · component 컬렉션) 원본 |
| 🏁 Table v1.0 | `DC6WYqBo5ayo20KU8dxJJd` | 표 셀(Header · Cell/Text · Indicator · Control · Data · Minimal) |
| Templates v2.1 | `8b0P5vfaIyISTvU4xU8EvR` | 화면 템플릿 — 지도 레이아웃(Floating type · Side pannel type · 보고서 · 접힘)의 기준 |
| 📊 charts v1.0 | (작업요약 참고) | 차트 — 아직 코드와 세부 대조 안 함(남은 일) |
| Primitive 라이브러리 | — | Color · Typography · Spacing · Layout · Effect (Tailwind v3.4 클래스 이름과 같음) |
| Icon Set | 라이브러리 | 회사 아이콘(line 기본, 24px) — 아이콘은 여기서만 가져온다 |

---

## 2. 절대 규칙 (어기면 다시 고쳐야 함)

### 2-1. 토큰
- 층은 **Primitive → (project) → Semantic → Component** 순서로만 참조한다. 컴포넌트 CSS는 **semantic(또는 component) 토큰만** 쓴다. `#hex` · `rgb()` · 임의 숫자 금지(예외는 2-5).
- project 토큰은 프로젝트마다 바뀌는 primary 색과 그 위 글자색뿐. 테마 전환: `<html data-project="orange|momstouch|at">`(기본 Default = 파랑).
- 한 컴포넌트에서만 쓰는 색만 component 토큰. 여러 컴포넌트가 쓰면 semantic.
- 텍스트는 `text/*`, 아이콘 · 스피너는 `icon/*`을 직접. gap · padding은 spacing 토큰(`--spacing-*`).
- 맞는 토큰이 없으면 **새로 만들지 말고 가장 가까운 토큰을 쓰고, 무엇으로 대신했는지 알린다.** 새 토큰이 꼭 필요하면 이름 규칙대로 만들고 tokens.css · tokens.json · 작업요약 토큰 목록 세 곳에 함께 넣는다.

### 2-2. 이름 규칙
- 형식 `{그룹}/{역할}-{단계}` — 예 `surface/primary-subtler`, `border/neutral-strong`. CSS 변수는 `/`를 `-`로: `--surface-primary-subtler`.
- 그룹: bg · surface · fill · text · icon · border · divider (+ table · chart · map 같은 영역 그룹)
- 역할: neutral · primary · inverse · destructive(negative) · success(positive) · warning · informative · increase · decrease / text · icon은 heading · body · placeholder · disabled
- 단계: subtlest · subtler · subtle · **main** · strong · stronger, accent(투명도 없는 최고 강조). 기준 단계에도 항상 `main`.
- 쓰지 않는 단어: bold · default(상태 이름과 혼동) · base · white(→ inverse) · hint(→ placeholder)
- 상태 이름: default · hover · focus · pressed · loading · disabled · active

### 2-3. 상태
- hover · pressed는 **state layer(덧씌우는 판)** 로만 표현한다. 상태별 배경 토큰을 만들지 않는다.
- loading 배경은 기본과 같고, 레이블 색도 default와 같다.
- disabled 글자 · 아이콘은 `text-disabled` · `icon-disabled`, placeholder는 `text-placeholder` · `icon-placeholder`.
- **모바일은 hover 없음** — 누르는 동안만 pressed(터치 기기 `hover: none`에서 hover 끔).
- **지도 위에 떠 있는 버튼**은 판 색을 바꾸지 말고 흰 판 위에 state layer를 **겹친다**(`linear-gradient(layer, layer), var(--surface-main)`).
- 키보드 focus: 바깥 2px 간격 + 2px 링(`border-neutral-stronger` 등).

### 2-4. 간격 · 모서리 · 구분선
- **여백 = 모서리**: 둥근 판 · 버튼의 좌우 여백은 모서리 값과 같게. 글자 묶음에 따로 좌우 여백이 있으면 합친 값으로 본다.
  예) Tabs rounded 판 10 + 글자 2 = `rounded-xl` 12 · 배지 판 4 + 글자 2 = `rounded-sm` 6(pill은 좌우 10) · Chip 4 + 4 = `rounded-md` 8 · Box Accordion 16 = `rounded-surface-sm` · 대화상자 24 = `rounded-surface-lg` · Pop Confirm 14 = `rounded-2xl` · 카드 sm 16 / lg 24 / xl 32.
- **마지막 줄 아래 구분선은 항상 지운다** — 목록 · 격자(마지막 행 전체) · 표 · 메뉴.
- 한글 줄바꿈은 **어절 단위**(`word-break: keep-all`), 문단은 `text-wrap: pretty`.

### 2-5. 예외 (토큰 대신 원래 색)
- Category Badge 분류색, 소셜 로고(카카오 · 네이버 · 구글) 브랜드 색 · 지하철 노선 고유 색(노선 배지, 예: 3호선 #EF7C1C), 지도 자리 표시 바탕(`.ds-mapbg`)만.
- 차트 계열 색은 `chart-series-1~6`, Status Badge는 의미 토큰만(Primitive 금지).

### 2-6. 아이콘
- **회사 Icon Set에서만** 가져온다(line 기본). 임의 도형 · 다른 아이콘 세트 · 이모지 금지.
- 새 아이콘 추가는 4-5절.

---

## 3. 작업 방식 (프로세스)

이 디자인시스템은 아래 방식으로 고쳐 왔다. 다른 계정에서도 똑같이 한다.

1. **요청한 범위만 바꾼다.** 답을 받지 않은 항목은 추천안대로 임의 적용하지 않는다. 결정이 필요한 것은 답변 마지막에 모아서 묻는다.
2. **이미 정한 결정은 이력에서 이유를 확인**하고, 바꿀 때는 "예전에 왜 그랬는지 → 왜 바꾸는지"를 남긴다.
3. **피그마와 코드는 함께 맞춘다.** 피그마 값을 먼저 읽고(파일 키 · 노드 이름 · 변수 이름) 코드에 같은 토큰으로 옮긴다. 피그마가 규칙을 어기면(예: Primitive 직접 사용, 여백 ≠ 모서리) **고치기 전에 확인 목록으로 묻는다.**
4. **여러 변형을 바꾸는 피그마 작업은 계획(대상 · 개수 · 바뀌는 색)을 먼저 보여주고 확인**받는다. 한 번에 100개 안팎으로 나눠 실행하고, 연결이 끊기면 다시 실행하기 전에 파일 상태부터 확인한다.
5. 피그마 변수를 연결할 때 실제 색 값도 함께 맞춘다(검게 보이는 문제 방지). 변수 목록은 ID로 직접 확인한다(목록 API가 일부를 빠뜨림). 삭제는 파일 전체에서 사용처 · 참조가 없는 걸 확인한 뒤에만.
6. **사용자가 "직접 수정 중"이라고 하면 피그마 파일을 건드리지 않는다.**
7. 작업 후 바뀐 내용을 **"무엇을 · 몇 곳 · 색 변화"** 로 정리하고, **스크린샷으로 확인**한다(코드는 4-7절 도구, 피그마는 get_screenshot).
8. 토큰 · 컴포넌트 · 규칙이 바뀌면 작업 끝에 **`CHANGELOG.md`** 에 `날짜 · 대상 — 변경 내용`을 추가하고, **`docs/status.md`** 의 남은 일 · 최근 결정(10개)을 고친다. 본문(이름 규칙 · 토큰 목록 · 컴포넌트 구조)이 달라지면 `docs/work-summary.md` · `docs/rules.md`도 고친다.
9. 답변은 **한국어**. 표는 머리 · 내용 모두 한국어로 쓴다.

### 아티팩트 댓글로 들어온 요청
검토판 · 디자인시스템 페이지에 댓글로 요청이 오면: 해당 부분을 다시 읽고 → 고치고 → **그 댓글 스레드에 답을 단다**(대화창에는 한 줄만). 스레드는 요청한 사람이 읽고 닫도록 **직접 닫지 않는다.** "항상"이라는 말이 들어간 요청은 같은 구조의 다른 컴포넌트에도 적용하고 규칙 문서에 적는다.

---

## 4. 코드 고치는 법

### 4-1. bundle.js 구조
- 파일 맨 위 한 줄이 **매니페스트**: `/* @ds-bundle: {"format":4,"namespace":"DS","components":[{"name":"Button"},…]} */` — 디자인시스템 화면의 Components 목록이 여기서 나온다.
- 그 아래 IIFE 하나: `var React = window.React; var h = React.createElement;` (JSX 없음, ES5에 가까운 문법 — `var`, `function`).
- `var ICONS = {이름: ["viewBox", "<path …/>"], …}` — 아이콘 SVG(색은 `currentColor`).
- 공용 도우미: `cx()`(클래스 합치기) · `rest(p, omit)`(나머지 props) · `stateCls(state)`(`is-hover` 등) · `useValue({value, defaultValue, onChange})`(제어/비제어 겸용 상태) · `usePopup` · `useWidth(ref)`(판 폭 재기, ResizeObserver) · `Icon` · 차트용 `loadECharts` · `tok(이름)`(CSS 변수 → 실제 색) · `ecBase` · `ecTooltip`.
- 파일 끝 `window.DS = Object.assign(window.DS || {}, { Button: Button, … });` — **여기에 넣어야 바깥에서 쓸 수 있다.**

### 4-2. 새 컴포넌트 만들기 (체크리스트)
1. **피그마 읽기** — 컴포넌트 세트의 속성(variant 옵션 · boolean), 크기 · 여백 · gap · 모서리 변수 · 채움/선 변수 · 글자 스타일 · 그림자 스타일을 읽는다. 규칙 위반이 보이면 확인 목록에 적는다.
2. **bundle.js** — 함수 컴포넌트 추가. 바로 위에 한 줄 주석으로 `이름 — props 요약 · 핵심 규칙(토큰 이름 포함)`을 적는다. `window.DS`에 등록, 매니페스트 `components`에 `{"name":"이름"}` 추가.
3. **bundle.css** — 클래스는 `ds-` 접두사 + BEM 비슷하게(`.ds-chip`, `.ds-chip__label`, `.ds-chip--sm`, 상태 `.is-selected`). 값은 토큰만. 블록 위에 `/* ───── 이름 ───── 핵심 치수 · 토큰 */` 주석. 애니메이션은 `@media (prefers-reduced-motion: reduce)`에서 끈다. 반응형은 판 폭 기준(`container-type` + `@container`, 또는 `useWidth`).
4. **index.d.ts** — `export interface 이름Props { … }` 추가.
5. **components/이름/preview.html** — 4-3절 형식.
6. **components/이름/README.md** — 4-4절 형식.
7. **검토판 탭에 등록** — `tools/build_review.py`의 `TABS`에 넣고 다시 만든다.
8. **확인** — `tools/check_review.py 이름`으로 오류 0 · 캡처 확인. 상호작용(열기 · 고르기 · 키보드)은 직접 눌러 보거나 Playwright로 클릭해 확인한다.
9. 컴포넌트가이드의 해당 장 "코드" 줄, Handbook(`docs/08-components.md` 등)에 이름 추가. 작업요약 · CHANGELOG에 이력.

### 4-3. preview.html 형식
```html
<!-- @dsCard group="Actions" height=492 subtitle="한 줄 설명 — 보여주는 변형들" -->
<!doctype html>
<html lang="ko"> … <div id="root" class="ds-root pv"></div>
<script>
var D = window.DS, h = React.createElement;
function sect(t) { … }            // 캡션 + 내용
function App() { return h(…); }   // 반드시 App 이름
ReactDOM.createRoot(document.getElementById("root")).render(h(App));
</script>
```
- 첫 줄 주석 `@dsCard` 필수: `group`(Actions · Inputs · Select · Lists · Navigation · Badges · Feedback · Data · Charts · Map 등), `height`(카드 높이 px), `subtitle`.
- 머리말 부분은 기존 preview.html(예: `SquareSplitButtonGroup/preview.html`)의 `<head>`~`function S(C` 앞까지를 그대로 복사해 쓴다(도우미 `cap` · `row` · `sect` · `grid` 포함).
- **예시 내용은 실제 서비스 맥락**(상권 · 업종 · 매출 · 점포 · 수원시 영통구 등)으로 쓰고, 모든 변형 · 상태 · 크기를 한 카드에서 보여준다. 반응형 컴포넌트는 폭 전환(예: PC 1280 · 태블릿 900 · 모바일 375) 예시를 넣는다.
- 검토판 빌더는 `<script>` 안의 코드를 꺼내 `App`을 쓴다 — `App` 밖에서 DOM을 직접 만지지 않는다.

### 4-4. README.md 형식 (컴포넌트별)
```md
# 이름
한 줄: 무엇이고 언제 쓰나(피그마 이름).
**Props** — `prop` 값|값 · …
- 치수 · 여백 · 모서리(토큰 이름)
- 색(토큰 이름) · 상태
- 반응형 · 키보드 · 접근성(aria)
- 쓰지 말아야 할 경우
```
검토판 카드의 설명 줄은 README 둘째 줄(첫 문단)에서 나온다.

### 4-5. 아이콘 추가
1. 피그마 Icon Set 라이브러리에서 이름으로 찾는다(search_design_system, line 버전).
2. `importComponentByKeyAsync(key)` → `exportAsync({format:'SVG_STRING'})` → `<svg>` 안쪽만, `fill="..."` 속성은 지운다(색은 currentColor).
3. bundle.js `ICONS`에 `"이름": ["0 0 24 24", "<path d=…/>"]` 추가, index.d.ts `IconName`에 이름 추가, `assets/Icons/이름.svg`도 같은 내용으로 추가.
4. 컴포넌트에서 쓰기 전에 아이콘 이름이 실제로 있는지 확인한다(없는 이름은 아무것도 안 그린다 — 지도 '공유' 아이콘이 빠졌던 사례).

### 4-6. 토큰 고치기
- 값 변경: `source/tokens.css` + `tokens.json` + `source/tokens.w3c.json` + 피그마 변수 + 작업요약 토큰 목록.
- 대비 확인: 글자 토큰은 WCAG AA(4.5:1, 큰 글자 3:1). 기준 미달을 감수하는 경우는 이력에 남긴다(예: `fill/warning-strong` 흰 글자, Toast warning).
- 새 semantic 토큰: 예) `table/fixed-overlay → state layers/on neutral/hover`, `chart/series-1~6`, `map/cluster-ring-strong = fill/inverse-main 60%`.

### 4-7. 확인 도구
```bash
python3 tools/build_review.py                 # review/component-review.html 다시 만들기
pip install playwright && playwright install chromium
python3 tools/check_review.py                 # 모든 탭 오류 검사
python3 tools/check_review.py Table MapLayout # + shots/Table.png, shots/MapLayout.png
```
- 확인할 것: 미리보기 오류 0 · 페이지 오류 0 · 캡처로 모양 확인 · 반응형 폭 전환 · 상호작용(클릭 후 상태 값 측정 — 예: aria-pressed, 높이 변화, 선택 값).
- 치수는 눈대중 말고 **측정**한다(`getBoundingClientRect`로 폭 · 높이 · 중심 비교 — 예: 도넛 가운데 글과 고리 중심, 정사각형 버튼, 마지막 줄 테두리 0px).

---

## 5. 배포 — 디자인시스템 아티팩트 · GitHub · Claude Design

### 5-1. 디자인시스템 아티팩트 (Claude Design이 쓰는 것)
- 주소: `https://claude.ai/artifact/EG1hS5zhH81z9nPW54LzoZ` (소유자: infra@zinidata.co.kr). **조직 기본 디자인 시스템**으로 지정되어 있다.
- 아티팩트 안 경로는 `project/` + 저장소와 **같은 경로**다(예: 저장소 `source/tokens.css` = 아티팩트 `project/source/tokens.css`). 저장소에서 바뀐 파일을 같은 경로로 게시하면 된다.
- **다른 계정에서 고칠 때**: 소유자가 아니면 이 아티팩트를 바로 덮어쓸 수 없다. 둘 중 하나:
  1. 소유자에게 **편집 권한**을 받는다(공유 → 사용자 초대). 그러면 Claude에게 "이 디자인 시스템 아티팩트를 고쳐" 라고 하면 같은 주소에 게시된다.
  2. 저장소만 고쳐 PR/커밋하고, 소유자 계정에서 "저장소의 변경을 디자인 시스템 아티팩트에 반영해"로 게시한다.
- Claude로 게시할 때: 바뀐 파일만 `Artifact publish(url=위 주소, files=[…])`, 작은 수정은 `Artifact edit`. 게시 후 디자인시스템 화면(Components)과 검토판을 새로고침해 확인한다.
- README의 **"Consuming this system"** 절(namespace `DS`, 불러오는 순서 tokens.css → bundle.css → bundle.js, 바탕 클래스 `ds-root`, 글꼴 등록, 차트 주의)은 Claude Design이 실제 컴포넌트를 불러오는 데 필요하다 — 지우지 않는다.
- 디자인시스템 화면의 문서는 **마크다운 링크를 연결해 주지 않는다** → `[이름](경로)` 대신 `이름 (`경로`)`로 쓴다.

### 5-2. GitHub
- 저장소: `https://github.com/yonipang/nice-zinidata-design-system`
- 폴더째 덮어쓰고 커밋. 이름을 바꾸거나 없앤 컴포넌트 폴더만 따로 지운다.
- **웹 업로드는 한 번에 파일 100개까지** — `components/`(160개 이상)는 나눠 올리거나 GitHub Desktop · git을 쓴다.
- 커밋 메시지 예: `Table: 머리 회색 기본 · 흰 머리 글자 옅게 (2026-10-29)`.

### 5-3. Claude Design에서 쓰기
- claude.ai 대화 · 사이드바 Design · 아티팩트 탭에서 디자인을 만들면 조직 기본값인 이 디자인 시스템이 자동으로 붙는다.
- 독립형 claude.ai/design의 선택 창에는 안 나온다(2026-12-14 종료 예정, 별도 설정). 꼭 써야 하면 독립형에서 저장소를 연결해 따로 만든다(두 벌 관리 주의).
- 디자인 캔버스는 외부 스크립트를 막아 **차트(ECharts)가 그려지지 않는다** → 표 · StatisticCard로 대신.

---

## 6. 컴포넌트 그룹별 핵심 결정 (요약)

자세한 값은 각 README와 작업요약 변경 이력에 있다. 아래는 다시 바꾸기 쉬운 것들의 확정값.

| 그룹 | 확정 |
|---|---|
| 버튼 | 색 역할 세트(Primary · Neutral · Negative · Inverse) × Style(solid · soft · outline · base · ghost). solid는 한 영역에 1개 |
| 입력 | focus 카드는 모두 떠 있는 판. Text Area 버튼 영역은 오른쪽 Primary 하나(Text Button · "지우기" 금지) |
| 선택 | Radio는 눌러서 끌 수 없음. 메뉴 · 목록 선택 항목 semibold |
| 탭 | rounded 좌우 여백 = 모서리(10+2=12), 탭 사이 4. Breadcrumb 현재 항목 밑줄 |
| 헤더 | PageHeader 제목 bold · SectionHeader semibold · 부제목 `text-body-subtle` |
| 카드 | 판 `surface-main`, 여백 = 모서리. StatisticNumber 증가 빨강 ▲ · 감소 파랑 ▼ |
| 배지 | 좌우 여백 = 모서리 6, Status Badge 의미 토큰만, `text/informative-main` = blue-600 |
| 칩 | 표시 · 지우기용. 선택은 `selectable`(켜짐 = primary · brand + ✓) — 피그마 State 변형은 만들지 않음 |
| 알림 · 대화상자 | 판 `surface-main`, 여백 = 모서리, Toast warning `fill/warning-main` |
| 표 | 머리 기본 회색(`table/header-subtle`), 흰 머리면 머리 글자 옅게. 목록 표 강조 2~3가지, 상태는 StatusBadge, 막대 여러 열이면 quiet. 마지막 줄 구분선 없음. 1~3위 메달 |
| 차트 | ECharts 5.5 + 토큰 테마. 반응형(판 폭). 도넛: 좁으면 도넛 먼저 줄이고 그다음 위아래 배치, 가운데 글 묶음 중심 = 고리 중심, 범례 14 |
| 지도 | Templates v2.1 지도 레이아웃 그대로(패널 375 · 보고서 390 · 필터는 검색과 함께 이동 · 필터 선택 판 + 하위 항목 › · 접으면 "현 지도에서 검색"). 모바일: 검색 막대 → 검색 화면(최근 검색 · 결과) → 지도, 필터 가로 스크롤, 목록 아래 시트, 보고서 전체 화면, 도구는 더보기(⋮) + 내 위치(확대 · 축소 없음) |
| 아코디언 | 0.24s 애니메이션, 열려 있으면 판 전체 클릭으로 닫힘 |
| 모바일 공통 | hover 없음, NavDrawer 항목 모서리 없음, BottomSheet 꽉 찬 xl 버튼 |

---

## 7. 남은 일 (2026-10-30)

작업요약 "11. 남은 일"이 최신이다. 요약:
1. 지도 — Templates v2.1 반경 선택 · 면적 선택 · 인디케이터, Patterns 지도 검색 · 폴리곤 생성
2. 행정구역 색칠 지도(MapCountry) — 경계 데이터 정해지면
3. 모바일 지도 기준 시안이 생기면 맞추기
4. 📊 charts v1.0 ↔ ECharts 테마 대조
5. 피그마 Component v2.3 · Table v1.0 게시

---

## 8. Claude에게 줄 시작 문장 (복사해서 쓰기)

> 이 저장소(nice-zinidata-design-system)의 디자인시스템을 고칠 거야. 먼저 `MAINTAINING.md` → `docs/rules.md` → `docs/component-guide.md` → `docs/work-summary.md`의 변경 이력과 남은 일을 읽고, 거기 적힌 규칙 · 작업 방식 · 도구를 그대로 따라 줘. 피그마 파일 키는 MAINTAINING.md 1장에 있어. 요청한 범위만 바꾸고, 결정이 필요한 건 마지막에 모아서 물어봐. 작업이 끝나면 검토판으로 확인한 캡처, "무엇을 · 몇 곳 · 색 변화" 요약, 작업요약 변경 이력 추가까지 해 줘. 답은 한국어로.
