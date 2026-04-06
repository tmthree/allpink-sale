# AllPink Sale — Web Bán Hạt Nhựa Tái Chế

@AGENTS.md

## Project Description

Web app bán hàng cho cơ sở sản xuất hạt nhựa tái chế. Ba mẹ thu mua rổ nhựa đựng trái cây từ chợ, xay bằng máy xay chuyên dụng, đóng bao và bán cho các cơ sở sản xuất nhựa (B2B). Web giúp hiển thị sản phẩm, nhận đơn hàng, và quản lý khách hàng.

**IMPORTANT: Before implementing any feature — read relevant skills in .claude/skills/ and docs in docs/ first**

## Dev Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Database | Supabase (PostgreSQL) |
| ORM | Prisma |
| Auth | Supabase Auth (admin panel) |
| State | Zustand (client) + TanStack Query (server) |
| Deploy | Vercel |
| UI Language | Tiếng Việt |

## Architecture Overview

```
Browser → Next.js App Router (Vercel)
           ├── Server Components (SSR/SSG)
           ├── Server Actions (mutations)
           ├── API Routes (webhooks)
           └── Supabase (PostgreSQL + Auth + Storage)
```

### Key Flows
- **Khách hàng**: Xem sản phẩm → Liên hệ/Đặt hàng → Nhận xác nhận
- **Admin**: Đăng nhập → Quản lý sản phẩm, đơn hàng, khách hàng

## Project Structure

```
src/
├── app/          # Next.js App Router pages & layouts
├── components/   # Reusable UI components
├── lib/          # Utilities, configs, Supabase client
├── actions/      # Server Actions (business logic)
└── types/        # TypeScript type definitions
```

## Key Conventions

- File naming: `kebab-case` (e.g., `product-card.tsx`, `order-list.tsx`)
- Component naming: `PascalCase` (e.g., `ProductCard`, `OrderList`)
- Server Actions: `src/actions/` — named `verb-noun.ts` (e.g., `create-order.ts`)
- Types: `src/types/` — named `noun.ts` (e.g., `product.ts`, `order.ts`)
- Keep files under 200 lines — modularize when exceeded
- UI language: Tiếng Việt — all user-facing strings in Vietnamese
- Error handling: try-catch in all server actions + user-friendly error messages

## Documentation

- [System Architecture](docs/system-architecture.md)
- [Code Standards](docs/code-standards.md)
- [Database Schema](docs/database-schema.md)
- [Deployment Guide](docs/deployment-guide.md)
- [Domain Glossary](docs/domain-glossary.md)
