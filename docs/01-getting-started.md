# 1. 시작하기

## 파일 구성

| 파일 | 내용 |
|---|---|
| `source/tokens.css` | 모든 토큰을 CSS 변수로. Primitive → project → semantic → component 참조 관계와 프로젝트 테마 전환이 들어 있다. **정확한 값은 이 파일** |
| `source/tailwind.config.js` | Tailwind v3.4 설정(색 · spacing · borderRadius · fontSize · boxShadow · 화면 구간) |
| `source/tokens.w3c.json` | 같은 토큰을 W3C 디자인 토큰 형식으로 |
| `tokens.json` | 이 페이지가 보여주는 토큰 목록(용도 메모 포함) |
| `components/bundle.js` · `bundle.css` · `index.d.ts` | React 컴포넌트(`window.DS`), 스타일, 타입 |
| `components/<이름>/README.md` | 컴포넌트별 사용 규칙 |

## 코드에서 쓰기

```html
<link rel="stylesheet" href="source/tokens.css">
<link rel="stylesheet" href="components/bundle.css">
<script src="components/bundle.js"></script> <!-- React 18 뒤에 -->
```

```js
const { Button, Card, Table } = window.DS;
h(Button, { color: 'primary', variant: 'solid', size: 'md' }, '저장');
```

- 색 · 간격 · 모서리 · 그림자는 **CSS 변수로만** 쓴다: `background: var(--surface-main); border-radius: var(--rounded-surface-lg); box-shadow: var(--elevation-1);`
- 변수 이름은 피그마 토큰 이름의 `/`를 `-`로 바꾼 것이다: `text/heading-main` → `--text-heading-main`, `state layers/on neutral/hover` → `--state-layers-on-neutral-hover`.

## Tailwind

| 무엇 | 클래스 예 |
|---|---|
| 배경 · 글자 · 테두리 색 | `bg-surface-main` · `text-text-heading-main` · `border-border-neutral-main` · `bg-table-header-main` |
| 모서리 | `rounded-control-md` · `rounded-surface-lg` (단독 `rounded` 대신 `rounded-xs`) |
| 그림자 | `shadow-elevation-1` ~ `shadow-elevation-5` |
| 글자 | `text-sm font-medium`, 전용 `text-gnb-menu` · `text-icon-label` · `text-icon-label-sm` |
| 콘텐츠 폭 | `max-w-content`(1180) · `max-w-content-wide`(1440) |
| 화면 구간 | `md:`(768~) · `lg:`(1024~) |

- 대괄호 임의 값(`[13px]`, `[#123456]`)은 쓰지 않는다.
