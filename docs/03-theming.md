# 3. 프로젝트 테마

primary 색은 프로젝트마다 다르다. 나머지 색은 모든 프로젝트가 같다.

| 테마 | primary | 비고 |
|---|---|---|
| **Default** | 파랑(blue 600) | 이 시스템의 기본값 |
| Orange | orange 600 | |
| Momstouch | orange 600(밝은 단계는 amber) | |
| AT | teal 600 | primary 글자는 `palette-700`(대비 확보) |

## 전환

```html
<html data-project="at">   <!-- orange | momstouch | at, 없으면 Default -->
```

- **반드시 `<html>`에** 붙인다 — 그래야 모든 semantic 토큰이 함께 바뀐다.
- 투명도가 있는 primary 토큰(`fill-primary-subtle` 40% 등)도 `color-mix()`로 정의돼 있어 테마 색을 따라간다.
- 화면에 primary 색을 직접 칠하지 말고 반드시 토큰을 써야 전환이 적용된다.

## 프로젝트 설정 (프로젝트마다 하나씩 정한다)

| 항목 | 선택지 | 현재 |
|---|---|---|
| 2순위 버튼 Style | soft 또는 outline 중 **하나만** | AT 프로젝트: **soft** |
| Shape | rounded 또는 pill 중 **하나만**(모든 컴포넌트에 같은 값) | **rounded만 지원** — 입력창(Input · Password · Input Quantity · DatePicker Input)에 Shape가 없어 pill 프로젝트는 입력창 Shape 추가 후 사용. Text Area는 항상 rounded |
| 테마(mode) | Default · Orange · Momstouch · AT | Component v2.3 파일 기본 Default, AT 프로젝트 화면은 AT |
