# src/actions/ — Server Actions

## Purpose
Business logic — tất cả data mutations (create, update, delete) chạy trên server.

## Structure
```
actions/
├── product-actions.ts    # CRUD sản phẩm
├── order-actions.ts      # Tạo, cập nhật, hủy đơn hàng
├── customer-actions.ts   # Quản lý khách hàng
└── upload-actions.ts     # Upload ảnh sản phẩm
```

## Conventions
- All files MUST start with `"use server";`
- Naming: `verb-noun` pattern (e.g., `createProduct`, `updateOrderStatus`)
- Always wrap in try-catch, return `{ data, error }` pattern
- Validate input with Zod schemas before processing
- Error messages: Tiếng Việt cho user-facing responses
- Revalidate paths after mutations: `revalidatePath('/san-pham')`
