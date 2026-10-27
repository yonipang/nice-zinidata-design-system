# SideNav

사이드바 메뉴(Side Navigation Item 묶음). hover · selected 색을 직접 칠하지 않고 상태로 고른다.

**Props** — `items` [{value,label,icon,depth:1|2}] · `value` · `onChange` · `color` basic|brand · `background` light|dark.
- state layer는 글자가 아니라 메뉴의 Color를 따른다: 밝은 basic `on-neutral` · brand `brand`, 어두운 basic `inverse` · brand `nav-brand-inverse`. hover 때 글자 한 단계 진하게.
- 선택: 밝은 basic `surface-neutral-subtler` · brand `surface-primary-subtler`, 어두운 basic `surface-inverse-subtler` · brand `fill-primary-subtle`.
