"""검토판 확인 — 모든 탭을 열어 미리보기 오류 · 페이지 오류를 찾고, 원하는 카드를 캡처한다.
사용:
  pip install playwright && playwright install chromium
  python3 tools/check_review.py                       # 모든 탭 오류 검사
  python3 tools/check_review.py Table MapLayout        # 오류 검사 + 해당 카드 캡처(shots/<이름>.png)
- 차트는 ECharts를 cdnjs에서 불러오므로 인터넷이 필요하다.
- 모바일 · 반응형 확인은 카드 안의 폭 전환 버튼을 누르거나, 아래 VIEWPORT를 바꿔 다시 실행한다."""
import sys, os, asyncio
from playwright.async_api import async_playwright
HERE=os.path.dirname(os.path.abspath(__file__)); ROOT=os.path.dirname(HERE)
PAGE='file://'+os.path.join(ROOT,'review','component-review.html')
VIEWPORT={'width':1400,'height':1000}
async def main(names):
    async with async_playwright() as p:
        b=await p.chromium.launch(); pg=await b.new_page(viewport=VIEWPORT, device_scale_factor=2)
        errs=[]; pg.on('pageerror', lambda e: errs.append(str(e)))
        await pg.goto(PAGE); await pg.wait_for_timeout(800)
        ntab=await pg.evaluate("()=>document.querySelectorAll('.rv-tabs button, [role=tab]').length") or 13
        found={}
        for t in range(ntab):
            await pg.goto(PAGE+'#t%d'%t); await pg.wait_for_timeout(900)
            bad=await pg.evaluate("()=>[...document.querySelectorAll('.pv-cap')].filter(e=>e.textContent.startsWith('미리보기 오류')).map(e=>e.closest('.rv-card')?.id+': '+e.textContent.slice(0,160))")
            for x in bad: print('[미리보기 오류] 탭',t,x)
            ids=await pg.evaluate("()=>[...document.querySelectorAll('.rv-card')].map(c=>c.id)")
            for n in names:
                if n in ids and n not in found:
                    await pg.evaluate("()=>{const h=document.querySelector('.rv-head'); if(h) h.style.position='static'}")
                    el=await pg.query_selector('#'+n); os.makedirs(os.path.join(ROOT,'shots'),exist_ok=True)
                    await el.screenshot(path=os.path.join(ROOT,'shots',n+'.png')); found[n]=t
        for e in errs: print('[페이지 오류]',e)
        for n in names: print(n, '→ shots/'+n+'.png' if n in found else '→ 검토판에 없음(build_review.py TABS 확인)')
        if not errs: print('페이지 오류 없음')
        await b.close()
asyncio.run(main(sys.argv[1:]))
