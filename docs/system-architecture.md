# System Architecture

## Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | Next.js 15 (App Router) | SSR/SSG, routing, UI |
| Styling | Tailwind CSS v4 + shadcn/ui | Design system |
| Database | Supabase (PostgreSQL) | Data storage |
| ORM | Prisma | Type-safe DB queries |
| Auth | Supabase Auth | Admin authentication |
| File Storage | Supabase Storage | Product images |
| State | Zustand + TanStack Query | Client/server state |
| Deploy | Vercel | Hosting, CDN, Edge |

## Data Flow

```
Khách hàng (Browser)
    │
    ▼
Next.js App Router (Vercel Edge)
    ├── Server Components → Prisma → Supabase PostgreSQL
    ├── Server Actions → Prisma → Supabase PostgreSQL
    └── Static Assets → Vercel CDN

Admin (Browser)
    │
    ▼
Next.js Admin Routes (/admin/*)
    ├── Supabase Auth (login/session)
    ├── Server Actions (CRUD operations)
    └── Supabase Storage (image upload)
```

## Auth Flow

1. Admin truy cập `/admin` → Redirect đến login page
2. Đăng nhập qua Supabase Auth (email/password)
3. Session lưu trong cookie (httpOnly)
4. Middleware kiểm tra session cho mọi route `/admin/*`
5. Khách hàng: KHÔNG cần đăng nhập — xem sản phẩm, đặt hàng qua form

## Deployment Model

- **Platform**: Vercel (auto-deploy từ GitHub)
- **Database**: Supabase (managed PostgreSQL)
- **Domain**: Cấu hình sau khi mua domain
- **Environment**: Preview (PR branches) + Production (main branch)

## Key Directories

```
src/app/           → Pages & routing
src/app/admin/     → Admin dashboard (protected)
src/components/    → Shared UI components
src/lib/           → Supabase client, utils
src/actions/       → Server Actions (business logic)
src/types/         → TypeScript definitions
prisma/            → Database schema & migrations
```
