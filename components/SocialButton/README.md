# SocialButton

소셜 로그인 버튼(카카오).

**Props** — `type` text|icon · `variant` brand|secondary · `size` sm|md|lg|xl|2xl · `align` center|justify(폭 꽉 채우고 레이블 가운데) · `label` · `state`.
- **brand 배경은 카카오 노랑 `#FEE500`** — 로고와 같은 취급이라 토큰 없이 쓰는 유일한 예외. 테두리 없음, 글자 `text-heading-main`.
- secondary는 Neutral base 버튼과 같은 판(`button-base-neutral-*`).
- 상태 · disabled · focus는 다른 버튼 규칙과 같다. 로그인 화면에서는 보통 2xl + justify.
