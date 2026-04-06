# Code Standards

## File Naming

- Files: `kebab-case.tsx` (e.g., `product-card.tsx`, `create-order.ts`)
- Components: `PascalCase` export (e.g., `export function ProductCard()`)
- Types: `PascalCase` (e.g., `Product`, `Order`, `Customer`)
- Constants: `UPPER_SNAKE_CASE` (e.g., `MAX_UPLOAD_SIZE`)

## Directory Structure

```
src/
├── app/                    # Next.js routes
│   ├── (public)/           # Public pages (trang chủ, sản phẩm)
│   ├── admin/              # Admin panel (protected)
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # shadcn/ui base components
│   ├── layout/             # Header, Footer, Sidebar
│   └── features/           # Feature-specific components
├── lib/
│   ├── supabase/           # Supabase client configs
│   ├── utils.ts            # Utility functions
│   └── constants.ts        # App constants
├── actions/                # Server Actions
│   ├── product-actions.ts
│   ├── order-actions.ts
│   └── customer-actions.ts
└── types/                  # TypeScript types
    ├── product.ts
    ├── order.ts
    └── customer.ts
```

## Component Patterns

### Server Component (default)

```tsx
// src/components/features/product-list.tsx
import { getProducts } from "@/actions/product-actions";

export async function ProductList() {
  const products = await getProducts();
  return <div>{/* render */}</div>;
}
```

### Client Component (khi cần interactivity)

```tsx
// src/components/features/add-to-cart-button.tsx
"use client";

import { useState } from "react";

export function AddToCartButton({ productId }: { productId: string }) {
  const [loading, setLoading] = useState(false);
  // ...
}
```

### Server Action

```tsx
// src/actions/create-order.ts
"use server";

import { prisma } from "@/lib/prisma";

export async function createOrder(formData: FormData) {
  try {
    // validate, create, return
  } catch (error) {
    return { error: "Không thể tạo đơn hàng" };
  }
}
```

## Coding Conventions

- Max file size: 200 lines — modularize khi vượt
- Error messages: Tiếng Việt cho user-facing, English cho logs
- Try-catch: Bọc tất cả Server Actions
- Validation: Zod schemas cho form inputs
- Comments: English cho code comments, Vietnamese cho UI strings
- Imports: Use `@/` alias (e.g., `@/components/ui/button`)

## Currency & Date

- Tiền: VND, format `50.000₫` (dùng `Intl.NumberFormat('vi-VN')`)
- Ngày: `DD/MM/YYYY` (e.g., `06/04/2026`)
- Số điện thoại: `0xxx.xxx.xxx`
