/** 디자인시스템 Tailwind 설정 (v3.4) — tokens.css를 함께 불러와야 한다
 *  색 클래스 예: bg-surface-main, text-text-heading-main, border-border-neutral-main, bg-table-header-main
 *  모서리: rounded-control-md, rounded-surface-lg · 그림자: shadow-elevation-1 · 글자: text-sm font-medium
 */
module.exports = {
  "theme": {
    "screens": {
      "md": "768px",
      "lg": "1024px"
    },
    "colors": {
      "transparent": "transparent",
      "current": "currentColor",
      "indigo": {
        "100": "var(--color-indigo-100)",
        "50": "var(--color-indigo-50)",
        "950": "var(--color-indigo-950)",
        "400": "var(--color-indigo-400)",
        "500": "var(--color-indigo-500)",
        "300": "var(--color-indigo-300)",
        "800": "var(--color-indigo-800)",
        "200": "var(--color-indigo-200)",
        "700": "var(--color-indigo-700)",
        "600": "var(--color-indigo-600)",
        "900": "var(--color-indigo-900)"
      },
      "lime": {
        "950": "var(--color-lime-950)",
        "800": "var(--color-lime-800)",
        "700": "var(--color-lime-700)",
        "100": "var(--color-lime-100)",
        "900": "var(--color-lime-900)",
        "500": "var(--color-lime-500)",
        "50": "var(--color-lime-50)",
        "400": "var(--color-lime-400)",
        "600": "var(--color-lime-600)",
        "300": "var(--color-lime-300)",
        "200": "var(--color-lime-200)"
      },
      "orange": {
        "200": "var(--color-orange-200)",
        "950": "var(--color-orange-950)",
        "300": "var(--color-orange-300)",
        "600": "var(--color-orange-600)",
        "800": "var(--color-orange-800)",
        "700": "var(--color-orange-700)",
        "100": "var(--color-orange-100)",
        "900": "var(--color-orange-900)",
        "500": "var(--color-orange-500)",
        "400": "var(--color-orange-400)",
        "50": "var(--color-orange-50)"
      },
      "yellow": {
        "100": "var(--color-yellow-100)",
        "600": "var(--color-yellow-600)",
        "950": "var(--color-yellow-950)",
        "900": "var(--color-yellow-900)",
        "50": "var(--color-yellow-50)",
        "500": "var(--color-yellow-500)",
        "400": "var(--color-yellow-400)",
        "300": "var(--color-yellow-300)",
        "200": "var(--color-yellow-200)",
        "700": "var(--color-yellow-700)",
        "800": "var(--color-yellow-800)"
      },
      "pink": {
        "500": "var(--color-pink-500)",
        "900": "var(--color-pink-900)",
        "50": "var(--color-pink-50)",
        "400": "var(--color-pink-400)",
        "300": "var(--color-pink-300)",
        "800": "var(--color-pink-800)",
        "200": "var(--color-pink-200)",
        "950": "var(--color-pink-950)",
        "100": "var(--color-pink-100)",
        "600": "var(--color-pink-600)",
        "700": "var(--color-pink-700)"
      },
      "blue": {
        "500": "var(--color-blue-500)",
        "700": "var(--color-blue-700)",
        "600": "var(--color-blue-600)",
        "900": "var(--color-blue-900)",
        "300": "var(--color-blue-300)",
        "400": "var(--color-blue-400)",
        "800": "var(--color-blue-800)",
        "100": "var(--color-blue-100)",
        "950": "var(--color-blue-950)",
        "50": "var(--color-blue-50)",
        "200": "var(--color-blue-200)"
      },
      "purple": {
        "100": "var(--color-purple-100)",
        "50": "var(--color-purple-50)",
        "500": "var(--color-purple-500)",
        "700": "var(--color-purple-700)",
        "200": "var(--color-purple-200)",
        "400": "var(--color-purple-400)",
        "950": "var(--color-purple-950)",
        "300": "var(--color-purple-300)",
        "900": "var(--color-purple-900)",
        "600": "var(--color-purple-600)",
        "800": "var(--color-purple-800)"
      },
      "rose": {
        "50": "var(--color-rose-50)",
        "400": "var(--color-rose-400)",
        "200": "var(--color-rose-200)",
        "100": "var(--color-rose-100)",
        "300": "var(--color-rose-300)",
        "900": "var(--color-rose-900)",
        "500": "var(--color-rose-500)",
        "950": "var(--color-rose-950)",
        "600": "var(--color-rose-600)",
        "800": "var(--color-rose-800)",
        "700": "var(--color-rose-700)"
      },
      "green": {
        "400": "var(--color-green-400)",
        "100": "var(--color-green-100)",
        "500": "var(--color-green-500)",
        "50": "var(--color-green-50)",
        "900": "var(--color-green-900)",
        "300": "var(--color-green-300)",
        "700": "var(--color-green-700)",
        "600": "var(--color-green-600)",
        "200": "var(--color-green-200)",
        "800": "var(--color-green-800)",
        "950": "var(--color-green-950)"
      },
      "violet": {
        "100": "var(--color-violet-100)",
        "900": "var(--color-violet-900)",
        "400": "var(--color-violet-400)",
        "950": "var(--color-violet-950)",
        "700": "var(--color-violet-700)",
        "200": "var(--color-violet-200)",
        "600": "var(--color-violet-600)",
        "800": "var(--color-violet-800)",
        "50": "var(--color-violet-50)",
        "500": "var(--color-violet-500)",
        "300": "var(--color-violet-300)"
      },
      "red": {
        "100": "var(--color-red-100)",
        "300": "var(--color-red-300)",
        "700": "var(--color-red-700)",
        "800": "var(--color-red-800)",
        "600": "var(--color-red-600)",
        "950": "var(--color-red-950)",
        "200": "var(--color-red-200)",
        "50": "var(--color-red-50)",
        "400": "var(--color-red-400)",
        "900": "var(--color-red-900)",
        "500": "var(--color-red-500)"
      },
      "static": {
        "transparent": "var(--color-static-transparent)",
        "black": "var(--color-static-black)",
        "white": "var(--color-static-white)"
      },
      "amber": {
        "800": "var(--color-amber-800)",
        "400": "var(--color-amber-400)",
        "600": "var(--color-amber-600)",
        "100": "var(--color-amber-100)",
        "200": "var(--color-amber-200)",
        "700": "var(--color-amber-700)",
        "50": "var(--color-amber-50)",
        "500": "var(--color-amber-500)",
        "950": "var(--color-amber-950)",
        "900": "var(--color-amber-900)",
        "300": "var(--color-amber-300)"
      },
      "sky": {
        "100": "var(--color-sky-100)",
        "800": "var(--color-sky-800)",
        "700": "var(--color-sky-700)",
        "600": "var(--color-sky-600)",
        "500": "var(--color-sky-500)",
        "200": "var(--color-sky-200)",
        "300": "var(--color-sky-300)",
        "400": "var(--color-sky-400)",
        "50": "var(--color-sky-50)",
        "900": "var(--color-sky-900)",
        "950": "var(--color-sky-950)"
      },
      "fuchsia": {
        "600": "var(--color-fuchsia-600)",
        "950": "var(--color-fuchsia-950)",
        "50": "var(--color-fuchsia-50)",
        "300": "var(--color-fuchsia-300)",
        "800": "var(--color-fuchsia-800)",
        "700": "var(--color-fuchsia-700)",
        "100": "var(--color-fuchsia-100)",
        "400": "var(--color-fuchsia-400)",
        "900": "var(--color-fuchsia-900)",
        "500": "var(--color-fuchsia-500)",
        "200": "var(--color-fuchsia-200)"
      },
      "teal": {
        "700": "var(--color-teal-700)",
        "400": "var(--color-teal-400)",
        "300": "var(--color-teal-300)",
        "200": "var(--color-teal-200)",
        "800": "var(--color-teal-800)",
        "50": "var(--color-teal-50)",
        "100": "var(--color-teal-100)",
        "600": "var(--color-teal-600)",
        "500": "var(--color-teal-500)",
        "950": "var(--color-teal-950)",
        "900": "var(--color-teal-900)"
      },
      "zinc": {
        "800": "var(--color-zinc-800)",
        "700": "var(--color-zinc-700)",
        "300": "var(--color-zinc-300)",
        "500": "var(--color-zinc-500)",
        "200": "var(--color-zinc-200)",
        "100": "var(--color-zinc-100)",
        "400": "var(--color-zinc-400)",
        "600": "var(--color-zinc-600)",
        "900": "var(--color-zinc-900)",
        "50": "var(--color-zinc-50)",
        "950": "var(--color-zinc-950)"
      },
      "cyan": {
        "50": "var(--color-cyan-50)",
        "900": "var(--color-cyan-900)",
        "800": "var(--color-cyan-800)",
        "500": "var(--color-cyan-500)",
        "950": "var(--color-cyan-950)",
        "400": "var(--color-cyan-400)",
        "700": "var(--color-cyan-700)",
        "300": "var(--color-cyan-300)",
        "200": "var(--color-cyan-200)",
        "600": "var(--color-cyan-600)",
        "100": "var(--color-cyan-100)"
      },
      "emerald": {
        "800": "var(--color-emerald-800)",
        "500": "var(--color-emerald-500)",
        "400": "var(--color-emerald-400)",
        "50": "var(--color-emerald-50)",
        "600": "var(--color-emerald-600)",
        "900": "var(--color-emerald-900)",
        "950": "var(--color-emerald-950)",
        "300": "var(--color-emerald-300)",
        "100": "var(--color-emerald-100)",
        "700": "var(--color-emerald-700)",
        "200": "var(--color-emerald-200)"
      },
      "state-layers-on-brand-default": "var(--state-layers-on-brand-default)",
      "state-layers-on-brand-hover": "var(--state-layers-on-brand-hover)",
      "state-layers-on-brand-pressed": "var(--state-layers-on-brand-pressed)",
      "state-layers-on-brand-focus": "var(--state-layers-on-brand-focus)",
      "state-layers-on-neutral-default": "var(--state-layers-on-neutral-default)",
      "state-layers-on-neutral-hover": "var(--state-layers-on-neutral-hover)",
      "state-layers-on-neutral-pressed": "var(--state-layers-on-neutral-pressed)",
      "state-layers-on-neutral-focus": "var(--state-layers-on-neutral-focus)",
      "state-layers-on-neutral-disabled": "var(--state-layers-on-neutral-disabled)",
      "state-layers-on-soft-default": "var(--state-layers-on-soft-default)",
      "state-layers-on-soft-hover": "var(--state-layers-on-soft-hover)",
      "state-layers-on-soft-pressed": "var(--state-layers-on-soft-pressed)",
      "state-layers-on-soft-focus": "var(--state-layers-on-soft-focus)",
      "state-layers-on-negative-default": "var(--state-layers-on-negative-default)",
      "state-layers-on-negative-hover": "var(--state-layers-on-negative-hover)",
      "state-layers-on-negative-pressed": "var(--state-layers-on-negative-pressed)",
      "state-layers-on-negative-focus": "var(--state-layers-on-negative-focus)",
      "state-layers-brand-default": "var(--state-layers-brand-default)",
      "state-layers-brand-hover": "var(--state-layers-brand-hover)",
      "state-layers-brand-pressed": "var(--state-layers-brand-pressed)",
      "state-layers-brand-focus": "var(--state-layers-brand-focus)",
      "state-layers-brand-disabled": "var(--state-layers-brand-disabled)",
      "state-layers-neutral-default": "var(--state-layers-neutral-default)",
      "state-layers-neutral-hover": "var(--state-layers-neutral-hover)",
      "state-layers-neutral-pressed": "var(--state-layers-neutral-pressed)",
      "state-layers-neutral-focus": "var(--state-layers-neutral-focus)",
      "state-layers-neutral-disabled": "var(--state-layers-neutral-disabled)",
      "state-layers-negative-default": "var(--state-layers-negative-default)",
      "state-layers-negative-hover": "var(--state-layers-negative-hover)",
      "state-layers-negative-pressed": "var(--state-layers-negative-pressed)",
      "state-layers-negative-focus": "var(--state-layers-negative-focus)",
      "text-heading-main": "var(--text-heading-main)",
      "text-body-main": "var(--text-body-main)",
      "text-body-subtle": "var(--text-body-subtle)",
      "text-disabled": "var(--text-disabled)",
      "text-placeholder": "var(--text-placeholder)",
      "text-primary-main": "var(--text-primary-main)",
      "text-primary-subtle": "var(--text-primary-subtle)",
      "text-primary-strong": "var(--text-primary-strong)",
      "text-inverse-heading-main": "var(--text-inverse-heading-main)",
      "text-inverse-body-main": "var(--text-inverse-body-main)",
      "text-inverse-body-subtle": "var(--text-inverse-body-subtle)",
      "text-inverse-disabled": "var(--text-inverse-disabled)",
      "text-negative-main": "var(--text-negative-main)",
      "text-negative-subtle": "var(--text-negative-subtle)",
      "text-negative-subtler": "var(--text-negative-subtler)",
      "text-positive-main": "var(--text-positive-main)",
      "text-warning-main": "var(--text-warning-main)",
      "text-informative-main": "var(--text-informative-main)",
      "text-increase-main": "var(--text-increase-main)",
      "text-decrease-main": "var(--text-decrease-main)",
      "fill-neutral-strong": "var(--fill-neutral-strong)",
      "fill-neutral-main": "var(--fill-neutral-main)",
      "fill-neutral-subtle": "var(--fill-neutral-subtle)",
      "fill-inverse-main": "var(--fill-inverse-main)",
      "fill-primary-main": "var(--fill-primary-main)",
      "fill-primary-subtle": "var(--fill-primary-subtle)",
      "fill-inverse-subtle": "var(--fill-inverse-subtle)",
      "fill-inverse-subtler": "var(--fill-inverse-subtler)",
      "fill-increase-main": "var(--fill-increase-main)",
      "fill-decrease-main": "var(--fill-decrease-main)",
      "fill-positive-main": "var(--fill-positive-main)",
      "fill-informative-main": "var(--fill-informative-main)",
      "fill-warning-main": "var(--fill-warning-main)",
      "fill-negative-main": "var(--fill-negative-main)",
      "fill-disabled": "var(--fill-disabled)",
      "fill-inverse-disabled": "var(--fill-inverse-disabled)",
      "fill-hint": "var(--fill-hint)",
      "border-neutral-main": "var(--border-neutral-main)",
      "border-neutral-subtle": "var(--border-neutral-subtle)",
      "border-neutral-strong": "var(--border-neutral-strong)",
      "border-neutral-stronger": "var(--border-neutral-stronger)",
      "border-neutral-accent": "var(--border-neutral-accent)",
      "border-primary-subtle": "var(--border-primary-subtle)",
      "border-primary-subtler": "var(--border-primary-subtler)",
      "border-primary-strong": "var(--border-primary-strong)",
      "border-primary-accent": "var(--border-primary-accent)",
      "border-informative-main": "var(--border-informative-main)",
      "border-positive-main": "var(--border-positive-main)",
      "border-warning-main": "var(--border-warning-main)",
      "border-inverse-accent": "var(--border-inverse-accent)",
      "surface-main": "var(--surface-main)",
      "surface-subtle": "var(--surface-subtle)",
      "surface-subtler": "var(--surface-subtler)",
      "surface-subtlest": "var(--surface-subtlest)",
      "surface-primary-subtler": "var(--surface-primary-subtler)",
      "surface-primary-subtlest": "var(--surface-primary-subtlest)",
      "surface-primary-main": "var(--surface-primary-main)",
      "surface-inverse-main": "var(--surface-inverse-main)",
      "border-inverse-subtle": "var(--border-inverse-subtle)",
      "border-negative-main": "var(--border-negative-main)",
      "border-negative-subtler": "var(--border-negative-subtler)",
      "border-negative-subtle": "var(--border-negative-subtle)",
      "bg-main": "var(--bg-main)",
      "bg-subtler": "var(--bg-subtler)",
      "bg-subtlest": "var(--bg-subtlest)",
      "bg-primary-subtler": "var(--bg-primary-subtler)",
      "bg-primary-subtlest": "var(--bg-primary-subtlest)",
      "bg-inverse-main": "var(--bg-inverse-main)",
      "surface-scrim": "var(--surface-scrim)",
      "surface-informative-main": "var(--surface-informative-main)",
      "surface-warning-main": "var(--surface-warning-main)",
      "surface-positive-main": "var(--surface-positive-main)",
      "surface-negative-main": "var(--surface-negative-main)",
      "divider-neutral-subtle": "var(--divider-neutral-subtle)",
      "divider-neutral-main": "var(--divider-neutral-main)",
      "divider-neutral-strong": "var(--divider-neutral-strong)",
      "divider-neutral-stronger": "var(--divider-neutral-stronger)",
      "divider-none": "var(--divider-none)",
      "table-header-main": "var(--table-header-main)",
      "table-header-subtle": "var(--table-header-subtle)",
      "table-row-main": "var(--table-row-main)",
      "table-row-subtle": "var(--table-row-subtle)",
      "table-row-selected": "var(--table-row-selected)",
      "table-row-selected-primary": "var(--table-row-selected-primary)",
      "table-row-selected-negative": "var(--table-row-selected-negative)",
      "surface-increase-main": "var(--surface-increase-main)",
      "surface-decrease-main": "var(--surface-decrease-main)",
      "state-layers-inverse-default": "var(--state-layers-inverse-default)",
      "state-layers-inverse-hover": "var(--state-layers-inverse-hover)",
      "state-layers-inverse-pressed": "var(--state-layers-inverse-pressed)",
      "state-layers-inverse-focus": "var(--state-layers-inverse-focus)",
      "icon-heading-main": "var(--icon-heading-main)",
      "icon-body-subtle": "var(--icon-body-subtle)",
      "icon-placeholder": "var(--icon-placeholder)",
      "icon-inverse-heading-main": "var(--icon-inverse-heading-main)",
      "icon-inverse-disabled": "var(--icon-inverse-disabled)",
      "icon-negative-subtle": "var(--icon-negative-subtle)",
      "icon-negative-subtler": "var(--icon-negative-subtler)",
      "icon-negative-main": "var(--icon-negative-main)",
      "icon-positive-main": "var(--icon-positive-main)",
      "icon-warning-main": "var(--icon-warning-main)",
      "icon-informative-main": "var(--icon-informative-main)",
      "icon-primary-main": "var(--icon-primary-main)",
      "icon-increase-main": "var(--icon-increase-main)",
      "icon-decrease-main": "var(--icon-decrease-main)",
      "icon-primary-subtle": "var(--icon-primary-subtle)",
      "icon-body-main": "var(--icon-body-main)",
      "icon-inverse-body-subtle": "var(--icon-inverse-body-subtle)",
      "icon-disabled": "var(--icon-disabled)",
      "icon-primary-strong": "var(--icon-primary-strong)",
      "icon-inverse-body-main": "var(--icon-inverse-body-main)",
      "fill-neutral-subtlest": "var(--fill-neutral-subtlest)",
      "border-disabled": "var(--border-disabled)",
      "fill-inverse-subtlest": "var(--fill-inverse-subtlest)",
      "surface-negative-subtlest": "var(--surface-negative-subtlest)",
      "border-primary-main": "var(--border-primary-main)",
      "fill-neutral-subtler": "var(--fill-neutral-subtler)",
      "divider-inverse-main": "var(--divider-inverse-main)",
      "surface-neutral-subtlest": "var(--surface-neutral-subtlest)",
      "surface-inverse-subtlest": "var(--surface-inverse-subtlest)",
      "fill-none": "var(--fill-none)",
      "fill-primary-subtlest": "var(--fill-primary-subtlest)",
      "fill-negative-strong": "var(--fill-negative-strong)",
      "fill-negative-subtlest": "var(--fill-negative-subtlest)",
      "border-inverse-strong": "var(--border-inverse-strong)",
      "surface-neutral-subtler": "var(--surface-neutral-subtler)",
      "surface-inverse-subtler": "var(--surface-inverse-subtler)",
      "fill-primary-subtler": "var(--fill-primary-subtler)",
      "state-layers-nav-brand-inverse-default": "var(--state-layers-nav-brand-inverse-default)",
      "state-layers-nav-brand-inverse-hover": "var(--state-layers-nav-brand-inverse-hover)",
      "surface-primary-strong": "var(--surface-primary-strong)",
      "fill-primary-strong": "var(--fill-primary-strong)",
      "border-increase-main": "var(--border-increase-main)",
      "border-decrease-main": "var(--border-decrease-main)",
      "text-on-primary": "var(--text-on-primary)",
      "icon-on-primary": "var(--icon-on-primary)",
      "primary-main": "var(--primary-main)",
      "primary-subtle": "var(--primary-subtle)",
      "primary-subtler": "var(--primary-subtler)",
      "primary-subtlest": "var(--primary-subtlest)",
      "primary-strong": "var(--primary-strong)",
      "primary-text": "var(--primary-text)",
      "primary-text-on-main": "var(--primary-text-on-main)",
      "primary-text-on-subtle": "var(--primary-text-on-subtle)",
      "button-solid-primary-bg": "var(--button-solid-primary-bg)",
      "button-solid-primary-border": "var(--button-solid-primary-border)",
      "button-outline-primary-bg": "var(--button-outline-primary-bg)",
      "button-outline-primary-border": "var(--button-outline-primary-border)",
      "button-base-primary-bg": "var(--button-base-primary-bg)",
      "button-base-primary-border": "var(--button-base-primary-border)",
      "button-soft-primary-bg": "var(--button-soft-primary-bg)",
      "button-ghost-primary-bg": "var(--button-ghost-primary-bg)",
      "button-outline-neutral-bg": "var(--button-outline-neutral-bg)",
      "button-outline-neutral-border": "var(--button-outline-neutral-border)",
      "button-solid-neutral-bg": "var(--button-solid-neutral-bg)",
      "button-solid-neutral-border": "var(--button-solid-neutral-border)",
      "button-base-neutral-bg": "var(--button-base-neutral-bg)",
      "button-base-neutral-border": "var(--button-base-neutral-border)",
      "button-soft-neutral-bg": "var(--button-soft-neutral-bg)",
      "button-ghost-neutral-bg": "var(--button-ghost-neutral-bg)",
      "button-base-negative-bg": "var(--button-base-negative-bg)",
      "button-base-negative-border": "var(--button-base-negative-border)",
      "button-solid-negative-bg": "var(--button-solid-negative-bg)",
      "button-solid-negative-border": "var(--button-solid-negative-border)",
      "button-outline-negative-bg": "var(--button-outline-negative-bg)",
      "button-outline-negative-border": "var(--button-outline-negative-border)",
      "button-soft-negative-bg": "var(--button-soft-negative-bg)",
      "button-ghost-negative-bg": "var(--button-ghost-negative-bg)",
      "button-soft-inverse-bg": "var(--button-soft-inverse-bg)",
      "button-solid-inverse-bg": "var(--button-solid-inverse-bg)",
      "button-outline-inverse-bg": "var(--button-outline-inverse-bg)",
      "button-outline-inverse-border": "var(--button-outline-inverse-border)",
      "button-ghost-inverse-bg": "var(--button-ghost-inverse-bg)",
      "control-bg": "var(--control-bg)",
      "control-on": "var(--control-on)",
      "control-on-green": "var(--control-on-green)",
      "control-on-negative": "var(--control-on-negative)",
      "control-track-off": "var(--control-track-off)",
      "control-handle": "var(--control-handle)",
      "control-handle-disabled": "var(--control-handle-disabled)",
      "input-bg": "var(--input-bg)",
      "input-bg-soft": "var(--input-bg-soft)",
      "input-bg-soft-inverse": "var(--input-bg-soft-inverse)",
      "input-bg-negative": "var(--input-bg-negative)",
      "input-border": "var(--input-border)",
      "input-border-hover": "var(--input-border-hover)",
      "input-border-focus": "var(--input-border-focus)",
      "input-border-negative": "var(--input-border-negative)",
      "input-bg-readonly": "var(--input-bg-readonly)",
      "input-border-readonly": "var(--input-border-readonly)",
      "scrollbar-thumb": "var(--scrollbar-thumb)",
      "scrollbar-track": "var(--scrollbar-track)",
      "map-cluster-strong": "var(--map-cluster-strong)",
      "map-cluster-main": "var(--map-cluster-main)",
      "map-region": "var(--map-region)",
      "map-cluster-ring-subtle": "var(--map-cluster-ring-subtle)",
      "map-cluster-ring": "var(--map-cluster-ring)",
      "map-cluster-ring-strong": "var(--map-cluster-ring-strong)"
    },
    "spacing": {
      "16": "var(--spacing-16)",
      "0": "var(--spacing-0)",
      "3.5": "var(--spacing-3-5)",
      "56": "var(--spacing-56)",
      "52": "var(--spacing-52)",
      "12": "var(--spacing-12)",
      "64": "var(--spacing-64)",
      "8": "var(--spacing-8)",
      "6": "var(--spacing-6)",
      "60": "var(--spacing-60)",
      "1": "var(--spacing-1)",
      "3": "var(--spacing-3)",
      "48": "var(--spacing-48)",
      "0.5": "var(--spacing-0-5)",
      "40": "var(--spacing-40)",
      "24": "var(--spacing-24)",
      "44": "var(--spacing-44)",
      "80": "var(--spacing-80)",
      "14": "var(--spacing-14)",
      "72": "var(--spacing-72)",
      "2.5": "var(--spacing-2-5)",
      "0.75": "var(--spacing-0-75)",
      "10": "var(--spacing-10)",
      "9": "var(--spacing-9)",
      "96": "var(--spacing-96)",
      "1.5": "var(--spacing-1-5)",
      "28": "var(--spacing-28)",
      "7": "var(--spacing-7)",
      "36": "var(--spacing-36)",
      "32": "var(--spacing-32)",
      "px": "var(--spacing-px)",
      "11": "var(--spacing-11)",
      "5": "var(--spacing-5)",
      "4.5": "var(--spacing-4-5)",
      "2": "var(--spacing-2)",
      "20": "var(--spacing-20)",
      "4": "var(--spacing-4)"
    },
    "borderRadius": {
      "7xl": "var(--rounded-7xl)",
      "md": "var(--rounded-md)",
      "4xl": "var(--rounded-4xl)",
      "3xl": "var(--rounded-3xl)",
      "lg": "var(--rounded-lg)",
      "sm": "var(--rounded-sm)",
      "none": "var(--rounded-none)",
      "xl": "var(--rounded-xl)",
      "2xl": "var(--rounded-2xl)",
      "6xl": "var(--rounded-6xl)",
      "5xl": "var(--rounded-5xl)",
      "full": "var(--rounded-full)",
      "xs": "var(--rounded-xs)",
      "control-sm": "var(--rounded-control-sm)",
      "control-md": "var(--rounded-control-md)",
      "control-lg": "var(--rounded-control-lg)",
      "surface-sm": "var(--rounded-surface-sm)",
      "surface-lg": "var(--rounded-surface-lg)",
      "surface-xl": "var(--rounded-surface-xl)",
      "surface-xs": "var(--rounded-surface-xs)",
      "surface-md": "var(--rounded-surface-md)"
    },
    "fontFamily": {
      "sans": [
        "var(--font-sans)"
      ]
    },
    "fontSize": {
      "2xs": [
        "12px",
        {
          "lineHeight": "14px"
        }
      ],
      "xs": [
        "13px",
        {
          "lineHeight": "16px"
        }
      ],
      "sm": [
        "14px",
        {
          "lineHeight": "20px"
        }
      ],
      "md": [
        "15px",
        {
          "lineHeight": "24px"
        }
      ],
      "base": [
        "16px",
        {
          "lineHeight": "24px"
        }
      ],
      "lg": [
        "18px",
        {
          "lineHeight": "28px"
        }
      ],
      "xl": [
        "20px",
        {
          "lineHeight": "28px"
        }
      ],
      "2xl": [
        "24px",
        {
          "lineHeight": "32px"
        }
      ],
      "3xl": [
        "30px",
        {
          "lineHeight": "36px"
        }
      ],
      "4xl": [
        "36px",
        {
          "lineHeight": "40px"
        }
      ],
      "5xl": [
        "48px",
        {
          "lineHeight": "48px"
        }
      ],
      "6xl": [
        "60px",
        {
          "lineHeight": "60px"
        }
      ],
      "7xl": [
        "72px",
        {
          "lineHeight": "72px"
        }
      ],
      "8xl": [
        "96px",
        {
          "lineHeight": "96px"
        }
      ],
      "9xl": [
        "128px",
        {
          "lineHeight": "128px"
        }
      ],
      "gnb-menu": [
        "17px",
        {
          "lineHeight": "24px",
          "fontWeight": "500"
        }
      ],
      "icon-label": [
        "10px",
        {
          "lineHeight": "12px",
          "fontWeight": "500"
        }
      ],
      "icon-label-sm": [
        "9px",
        {
          "lineHeight": "12px",
          "fontWeight": "500"
        }
      ]
    },
    "fontWeight": {
      "thin": 100,
      "extralight": 200,
      "light": 300,
      "normal": 400,
      "medium": 500,
      "semibold": 600,
      "bold": 700,
      "extrabold": 800,
      "black": 900
    },
    "boxShadow": {
      "elevation-0": "var(--elevation-0)",
      "elevation-1": "var(--elevation-1)",
      "elevation-2": "var(--elevation-2)",
      "elevation-3": "var(--elevation-3)",
      "elevation-4": "var(--elevation-4)",
      "elevation-5": "var(--elevation-5)"
    },
    "extend": {
      "maxWidth": {
        "content": "var(--content-default)",
        "content-wide": "var(--content-wide)"
      },
      "borderWidth": {
        "4": "4px",
        "2": "2px",
        "0": "0px",
        "1": "1px",
        "8": "8px"
      }
    }
  }
};
