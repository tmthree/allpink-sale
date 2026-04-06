# src/components/ — UI Components

## Purpose
Reusable UI components dùng chung trong toàn app.

## Structure
```
components/
├── ui/           # shadcn/ui base components (Button, Input, Card, etc.)
├── layout/       # Layout components (Header, Footer, Sidebar, Navigation)
└── features/     # Feature-specific components
    ├── product-card.tsx
    ├── order-table.tsx
    └── contact-form.tsx
```

## Conventions
- File naming: `kebab-case.tsx`
- Export naming: `PascalCase` (e.g., `export function ProductCard()`)
- Props type: Define inline or in `src/types/`
- Server Components by default — `"use client"` only when needed
- Max 200 lines/file — extract sub-components khi vượt
- UI text: Tiếng Việt
- shadcn/ui: Install via `npx shadcn@latest add <component>`
