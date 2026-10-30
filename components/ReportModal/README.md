# ReportModal

리포트 상세를 띄우는 큰 모달(피그마 Report Modal). 지도 · 목록에서 한 지역 · 점포를 눌렀을 때.

**Props** — `styleType` clear|section · `menuPosition` left(왼쪽 목차)|top(머리 아래 Tabs underline lg) · `align` left|center · `title` · `description` · `tooltip` · `leftItem` · `rightItem`(엑셀 등 버튼) · `menu`[{value,label}](왼쪽 목차) · `value` · `defaultValue` · `onChange` · `children`(본문 = **보고서 콘텐츠를 담는 슬롯**, 피그마 Contents Slot) · `onClose` · `width`(기본 700) · `inline` · `bare`.
- 판: `surface-main` · `border-neutral-strong` · `rounded-surface-lg` · `elevation-4`, 여백 0.
- 머리: 여백 24, 제목 줄 높이 28(닫기 Icon Button sm · 오른쪽 버튼 sm), 제목 `text-lg` **bold**, 설명 `text-sm` `text-body-subtle`(사이 4). **section**: 머리 판 `fill-primary-strong` + 제목 `text-on-primary` · 설명 `text-inverse-body-subtle` · 닫기 inverse. **clear**: 흰 머리 + 아래 구분선.
- 왼쪽 목차: 폭 204, `surface-subtlest`, 여백 20/12, PageIndex(선택 `surface-neutral-subtler`). 본문 여백 20.
- **항상 메뉴와 함께 쓴다** — 절이 많고 오가며 볼 때 **메뉴 왼쪽**, 절이 3~5개면 **메뉴 위(탭)**. 메뉴 없는 한 장짜리 형태는 쓰지 않는다(그런 내용은 Modal). 강조가 필요하면 section, 기본은 clear.

## 반응형 (모바일)
- **같은 컴포넌트가 판 폭에 맞춰 자동으로 바뀐다**(container query, 600 미만).
  - 머리 여백 24 → 16/20, 제목 `text-lg` 18 → `text-base` 16.
  - 왼쪽 목차 → **머리 아래 탭**(Tabs underline lg, 가로 스크롤). 메뉴 위 형태는 그대로 탭.
  - 본문 여백 20, 목차 칸 없이 한 줄.
- 화면 자체가 600 미만(모바일 기기)이면 **풀페이지 팝업** — 모서리 · 테두리 · 바깥 여백 없음, 높이 100dvh, section 머리도 각진 모양. **머리 + 탭은 위에 고정되고 본문만 스크롤**된다(판 높이가 정해지지 않은 곳에서도 sticky로 붙어 있음). `mobile`로 강제할 수 있다(미리보기 · 앱 웹뷰).
- 모바일 규칙대로 hover 없음.
