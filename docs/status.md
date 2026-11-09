# 지금 상태 (status)

> **새 대화는 이 파일만 먼저 읽는다.** 읽는 방법: Artifact read · url=https://claude.ai/artifact/EG1hS5zhH81z9nPW54LzoZ · path="project/docs/status.md" — 경로 앞 `project/` 필수, **경로 없이 읽으면 파일 300개를 모두 받아 느려지니 하지 않는다.** 프로젝트 파일(사본)은 읽지 않는다. 다른 문서도 같은 방법으로 한 파일씩(path="project/…").
> 필요할 때만 더 읽기: 규칙 `docs/rules.md` · 컴포넌트 대응 `docs/component-guide.md` · 구조/토큰 본문 `docs/work-summary.md` · 수정 방법 `MAINTAINING.md` · 이력 `CHANGELOG.md` · 컴포넌트 props `components/<이름>/README.md`.
> 갱신: 작업이 끝날 때 "남은 일"과 "최근 결정"을 고친다(최근 결정은 10개까지, 오래된 건 지운다 — 기록은 CHANGELOG에 남아 있음).

기준일: 2026-11-09

## 작업 대상
- 피그마: Component v2.3 `3C2TB2p12Nxep7smiGvPgN`("Blocks & Layouts" 페이지) · Table v1.0 `DC6WYqBo5ayo20KU8dxJJd` · Templates v2.1 `8b0P5vfaIyISTvU4xU8EvR`("보고서 템플릿" 페이지) · 📊 charts v1.0(라이브러리)
- 디자인시스템: https://claude.ai/artifact/EG1hS5zhH81z9nPW54LzoZ · 검토판: https://claude.ai/artifact/Qs5DpwD9RWnesrtQvP5P2d
- GitHub: https://github.com/yonipang/nice-zinidata-design-system (아티팩트 project/ 구조 + tools/ · .gitignore — .gitignore는 저장소 쪽이 기준)

## 지금 규모
- 컴포넌트 · 블록: 일반 컴포넌트 80여 종 + 레이아웃 4(LayoutReport · LayoutSection · LayoutPanel · LayoutStack) + 블록 25(Block/Header · Text · Number · List · Chart · Table · Input)
- 검토판 탭 15: 버튼 · 버튼 묶음 · 입력 · 선택 · 목록·메뉴 · 탭·내비게이션 · 헤더 · 카드 · 배지 · 피드백·오버레이 · 표 · 차트 · 레이아웃 · 블록 · 지도

## 남은 일
1. 지도 — 반경 선택 · 인디케이터, Patterns 지도 검색 · 폴리곤 생성(면적 선택은 끝남)
2. 행정구역 색칠 지도 — 경계 데이터 정해지면
3. 모바일 지도 시안 생기면 맞추기
4. charts v1.0 ↔ ECharts 대조 + 라이브러리 원본 색을 계열 규칙으로(파일 링크 필요)
5. 피그마 Block 25종 ↔ 코드 Block* 세부 대조
6. 피그마 게시(사용자): 변경 후 Component v2.3 · Templates v2.1 · Table v1.0
- 오래된 정리 항목 16개 → `docs/work-summary.md` 11장 "이전부터 남은 일"(11-09 정리)

## 최근 결정 (새것부터 10개)
1. 11-09 · 문서 — 새 대화는 `docs/status.md`만 먼저 읽기, 변경 이력은 CHANGELOG로 일원화(작업요약은 본문만)
2. 11-06 · 레이아웃 ↔ 블록 — Layout/…(틀) · Block/<분류>/<이름>(내용) 분리, 블록에 흰 판 · 바깥 여백 없음, Header · Chart · Stats 합침, 예전 이름은 별칭
3. 11-06 · 블록은 어느 레이아웃에나 — 놓인 자리 폭 기준으로 모양이 바뀜(도넛 440 미만 위아래), 300 미만 자리는 비권장
4. 11-06 · 토큰 — text/increase-main rose/600 · text/decrease-main blue/600
5. 11-06 · 예외 색에 지하철 노선 색 추가
6. 11-05 · 차트 색 — 계열 하나 = primary(fill/primary-main), 둘 이상 = chart/series-1~6 / 피그마 차트는 charts v1.0 부품으로 조립
7. 11-05 · 차트 엔진 내장 — components/echarts.min.js(5.5.0)를 먼저, 없으면 cdnjs → Design 캔버스에서도 차트 동작
8. 11-05 · 지도 — 측정(거리 · 면적 · 반경) 중엔 지도 · 그리기 · 안내 막대 · 확대/축소만, 면적 선택 흐름(MapAreaDraw), 안내는 아래 가운데 막대(MapGuideBar)
9. 11-05 · 지도 — 검색은 왼쪽 위 고정 · 패널만 움직임, 모바일 시트 다 펼치면 모서리 없음, 내 정보 메뉴는 버튼 왼쪽
10. 11-04 · 지도 — 목록에 선택 상태 없음, 목록 ↔ 핀 ↔ 보고서 연결(items · reportFor)

## GitHub
- 토큰은 프로젝트 지침에 있음(Contents 쓰기). 작업 끝에 반영 여부를 묻고, 올린 뒤 다시 받아 같은지 확인한다.
