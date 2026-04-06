# src/types/ — TypeScript Definitions

## Purpose
Shared TypeScript types và interfaces cho toàn app.

## Structure
```
types/
├── product.ts      # Product, ProductFormData
├── order.ts        # Order, OrderItem, OrderStatus
├── customer.ts     # Customer
└── database.ts     # Prisma-generated types re-exports
```

## Conventions
- File naming: `kebab-case.ts` theo entity name
- Type naming: `PascalCase` (e.g., `Product`, `OrderItem`)
- Prefer `type` over `interface` (consistency)
- Form data types: suffix `FormData` (e.g., `ProductFormData`)
- API response: `{ data: T | null; error: string | null }`
- Prisma types: Re-export from `@prisma/client` khi cần
