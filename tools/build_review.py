"""검토판(component-review.html) 만들기.
사용: python3 tools/build_review.py [저장소 루트] [출력 파일]
- 저장소 루트 기본값: 이 파일의 상위 폴더
- 출력 기본값: review/component-review.html
- 페이지 틀은 tools/review-shell.html(탭 · 카드 · 미리보기 오류 표시가 들어 있는 페이지)을 쓰고,
  토큰 · bundle.css · bundle.js · 글꼴 · 각 컴포넌트 preview.html의 App을 넣어 한 파일로 만든다.
- 새 컴포넌트를 검토판에 보이려면 아래 TABS의 알맞은 탭에 폴더 이름을 넣는다."""
import sys,re,base64,json,os
HERE=os.path.dirname(os.path.abspath(__file__))
ROOT=sys.argv[1] if len(sys.argv)>1 else os.path.dirname(HERE)
OUT=sys.argv[2] if len(sys.argv)>2 else os.path.join(ROOT,'review','component-review.html')
# 디자인시스템 아티팩트 폴더 구조(source/ · fonts/)와 저장소 구조(tokens/ · assets/fonts) 둘 다 지원
def first(*ps):
    for p in ps:
        if os.path.exists(p): return p
    raise SystemExit('찾을 수 없음: '+' / '.join(ps))
A=ROOT
TABS=[('버튼',['Button','IconButton','TextButton','ToggleButton','SquareButton','SocialButton','FilterButton']),
('버튼 묶음',['SegmentNeutral','SegmentPrimary','SegmentPadded','SplitButtonGroup','SquareSplitButtonGroup','TextButtonGroup','ButtonSet']),('입력',['Input','InputLabel','FormField','Password','TextArea','InputQuantity','SearchField','DatePicker','PhoneVerification']),('선택',['Select','SelectWithLabel','Checkbox','Switch','Quantity','ControlBox','Chip','Slider']),
('목록 · 메뉴',['MenuList','Cascader','MenuCaption','Accordion']),
('탭 · 내비게이션',['Tabs','Pagination','Breadcrumb','PageIndex','SideNav','GlobalNav','ReportNav','MobileNav','Profile']),
('헤더',['PageHeader','SectionHeader','ContentsHeader']),('카드',['Card','StatisticCard','TextCard']),
('배지',['StatusBadge','CategoryBadge','ChangeBadge','SocialBadge']),('피드백 · 오버레이',['InlineAlert','ExpandedAlert','Toast','ConfirmModal','Modal','BottomSheet','ReportModal','Tooltip']),
('표',['Table','TableHeaderCell','TableTextCell','TableIndicatorCell','TableControlCell','TableDataCell','MinimalTable','MinimalTableCell']),('차트',['BarChart','LineChart','DonutChart','ComboChart','HeatmapChart']),
('레이아웃',['Layouts']),('블록',['BlocksHeader','BlocksText','BlocksNumber','BlocksList','BlocksChart','BlocksTable','BlocksInput']),('지도',['MapLayout','MapSearch','LocationSelector','MapMarkers','MapMenu','MapListItem','MapFilterPanel','MapAreaDraw'])]
old=open(os.path.join(HERE,'review-shell.html'),encoding='utf-8').read()
tokens=open(first(A+'/source/tokens.css',A+'/tokens/tokens.css'),encoding='utf-8').read(); bcss=open(A+'/components/bundle.css',encoding='utf-8').read(); bjs=open(A+'/components/bundle.js',encoding='utf-8').read()
font=base64.b64encode(open(first(A+'/fonts/PretendardVariable.woff2',A+'/assets/fonts/PretendardVariable.woff2',A+'/assets/PretendardVariable.woff2'),'rb').read()).decode()
blocks=[]; meta=[]
for ti,(tab,comps) in enumerate(TABS):
    for c in comps:
        t=open(f'{A}/components/{c}/preview.html',encoding='utf-8').read()
        m=re.search(r'@dsCard ([^>]*)-->',t); sub=re.search(r'subtitle="([^"]*)"',m.group(1))
        sc=t[t.find('<script>')+8:t.rfind('</script>')]; sc=re.sub(r'ReactDOM\.createRoot\([^;]*\);\s*','',sc)
        rd=open(f'{A}/components/{c}/README.md',encoding='utf-8').read().split('\n'); summary=next((l for l in rd[1:] if l.strip() and not l.startswith('#')),'')
        blocks.append(f'PV[{json.dumps(c)}] = (function(){{\n{sc}\nreturn App; }})();'); meta.append({'tab':ti,'name':c,'sub':sub.group(1) if sub else '','summary':summary})
# reuse page shell: replace style head parts and script parts
head_end=old.find('<style>')+7; css_end=old.find(':root { box-sizing')
page=old[:head_end]+'\n@font-face { font-family: "Pretendard Variable"; font-weight: 45 920; font-display: swap; src: url(data:font/woff2;base64,'+font+') format("woff2"); }\n'+tokens+'\n'+bcss+'\n'+old[css_end:]
s1a=page.find('<script>\n',page.find('<div id="app"></div>'))+9; s1b=page.find('</script>',s1a)
page=page[:s1a]+bjs+'\n'+page[s1b:]
s2a=page.find('var PV = {};'); s2b=page.find('function Boundary')
page=page[:s2a]+'var PV = {};\nvar D = window.DS, h = React.createElement;\n'+'\n'.join(blocks)+'\nvar TABS = '+json.dumps([t for t,_ in TABS],ensure_ascii=False)+';\nvar META = '+json.dumps(meta,ensure_ascii=False)+';\n'+page[s2b:]
os.makedirs(os.path.dirname(OUT),exist_ok=True); open(OUT,'w',encoding='utf-8').write(page); print(len(page)//1024,'KB',len(meta))
