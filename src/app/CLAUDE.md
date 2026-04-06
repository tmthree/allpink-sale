# src/app/ — Next.js App Router

## Purpose
Chứa tất cả routes, pages, layouts của ứng dụng.

## Structure
```
app/
├── layout.tsx          # Root layout (fonts, metadata, providers)
├── page.tsx            # Trang chủ
├── globals.css         # Global styles + Tailwind
├── (public)/           # Public routes (không cần auth)
│   ├── san-pham/       # Danh mục sản phẩm
│   ├── lien-he/        # Trang liên hệ
│   └── gioi-thieu/     # Giới thiệu cơ sở
└── admin/              # Admin panel (protected by auth middleware)
    ├── layout.tsx      # Admin layout (sidebar, nav)
    ├── page.tsx        # Dashboard
    ├── san-pham/       # CRUD sản phẩm
    ├── don-hang/       # Quản lý đơn hàng
    └── khach-hang/     # Quản lý khách hàng
```

## Conventions
- Route names: Vietnamese slug (e.g., `san-pham`, `don-hang`)
- Default: Server Components — add `"use client"` only when interactivity needed
- Layouts share across child routes, not re-rendered on navigation
- Loading states: `loading.tsx` per route
- Error handling: `error.tsx` per route
- Metadata: Export `metadata` object from each `page.tsx`
