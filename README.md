
```
fenrir
├─ .prettierrc
├─ README.md
├─ eslint.config.mjs
├─ next.config.ts
├─ package.json
├─ pnpm-lock.yaml
├─ postcss.config.mjs
├─ public
│  └─ backgrounds
│     └─ auth-background.webp
├─ src
│  ├─ actions
│  │  └─ register.ts
│  ├─ app
│  │  ├─ (auth)
│  │  │  ├─ layout.tsx
│  │  │  └─ register
│  │  │     ├─ components
│  │  │     │  ├─ hero-section.tsx
│  │  │     │  ├─ register-form.tsx
│  │  │     │  └─ socials-odc-buttons.tsx
│  │  │     └─ page.tsx
│  │  ├─ (main)
│  │  │  ├─ dashboard
│  │  │  │  ├─ components
│  │  │  │  │  ├─ project-overview-bar.tsx
│  │  │  │  │  ├─ severity-grid.tsx
│  │  │  │  │  └─ table
│  │  │  │  │     ├─ dashboard-table.tsx
│  │  │  │  │     └─ table-toolbar.tsx
│  │  │  │  └─ page.tsx
│  │  │  ├─ layout.tsx
│  │  │  └─ scans
│  │  │     ├─ components
│  │  │     │  ├─ console
│  │  │     │  │  ├─ console-header.tsx
│  │  │     │  │  ├─ console-tabs.tsx
│  │  │     │  │  └─ scan-console.tsx
│  │  │     │  ├─ flow-stepper.tsx
│  │  │     │  ├─ logs
│  │  │     │  │  ├─ finding-logs.tsx
│  │  │     │  │  └─ logs-card.tsx
│  │  │     │  ├─ scan-details.tsx
│  │  │     │  ├─ scan-footer.tsx
│  │  │     │  ├─ scan-header.tsx
│  │  │     │  └─ scan-progress.tsx
│  │  │     └─ page.tsx
│  │  ├─ api
│  │  │  └─ auth
│  │  │     └─ [...all]
│  │  │        └─ route.ts
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  ├─ icons
│  │  │  └─ index.tsx
│  │  └─ layout.tsx
│  ├─ components
│  │  ├─ shared
│  │  │  ├─ badge
│  │  │  │  └─ table-status.badge.tsx
│  │  │  ├─ cards
│  │  │  │  └─ severity.card.tsx
│  │  │  ├─ page.header.tsx
│  │  │  ├─ sidebar
│  │  │  │  └─ index.tsx
│  │  │  └─ terminals
│  │  │     └─ terminal-logs.tsx
│  │  ├─ skeletons
│  │  │  └─ dashboard
│  │  │     └─ overview.dashboard.skeleton.tsx
│  │  └─ ui
│  │     ├─ button.tsx
│  │     ├─ checkbox.tsx
│  │     ├─ field.tsx
│  │     ├─ input.tsx
│  │     ├─ label.tsx
│  │     ├─ popover.tsx
│  │     ├─ progress.tsx
│  │     ├─ separator.tsx
│  │     ├─ sheet.tsx
│  │     ├─ sidebar.tsx
│  │     ├─ skeleton.tsx
│  │     ├─ table.tsx
│  │     └─ tooltip.tsx
│  ├─ constants
│  │  ├─ auth.constants.tsx
│  │  ├─ dashboard.constants.tsx
│  │  ├─ scans.constants.tsx
│  │  └─ sidebar.constants.tsx
│  ├─ contexts
│  │  └─ theme-provider.tsx
│  ├─ fonts
│  │  └─ index.ts
│  ├─ hooks
│  │  ├─ use-is-loading.ts
│  │  └─ use-is-mobile.ts
│  ├─ lib
│  │  ├─ auth
│  │  │  ├─ client.ts
│  │  │  └─ server.ts
│  │  └─ utils.ts
│  ├─ proxy.ts
│  └─ types
│     └─ scan.types.ts
└─ tsconfig.json
```