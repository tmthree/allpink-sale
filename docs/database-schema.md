# Database Schema

## Overview

Supabase PostgreSQL — quản lý sản phẩm, đơn hàng, khách hàng.

## Tables

### products (Sản phẩm)

| Column | Type | Description |
|--------|------|-------------|
| id | uuid (PK) | ID sản phẩm |
| name | text | Tên sản phẩm (e.g., "Hạt nhựa PP trắng") |
| slug | text (unique) | URL slug |
| description | text | Mô tả chi tiết |
| plastic_type | text | Loại nhựa (PP, PE, HDPE, LDPE) |
| color | text | Màu sắc (trắng, xanh, đỏ, hỗn hợp) |
| price_per_kg | integer | Giá/kg (VND, lưu integer) |
| min_order_kg | integer | Đặt hàng tối thiểu (kg) |
| stock_kg | integer | Tồn kho (kg) |
| image_urls | text[] | URLs ảnh sản phẩm |
| is_active | boolean | Đang bán hay không |
| created_at | timestamptz | Ngày tạo |
| updated_at | timestamptz | Ngày cập nhật |

### orders (Đơn hàng)

| Column | Type | Description |
|--------|------|-------------|
| id | uuid (PK) | ID đơn hàng |
| order_number | text (unique) | Mã đơn hàng (e.g., "DH-20260406-001") |
| customer_name | text | Tên khách hàng |
| customer_phone | text | SĐT khách hàng |
| customer_address | text | Địa chỉ giao hàng |
| status | text | Trạng thái (mới, xác nhận, đang giao, hoàn thành, hủy) |
| total_amount | integer | Tổng tiền (VND) |
| notes | text | Ghi chú |
| created_at | timestamptz | Ngày đặt |
| updated_at | timestamptz | Ngày cập nhật |

### order_items (Chi tiết đơn hàng)

| Column | Type | Description |
|--------|------|-------------|
| id | uuid (PK) | ID |
| order_id | uuid (FK → orders) | Đơn hàng |
| product_id | uuid (FK → products) | Sản phẩm |
| quantity_kg | integer | Số lượng (kg) |
| unit_price | integer | Đơn giá (VND/kg) |
| subtotal | integer | Thành tiền |

### customers (Khách hàng)

| Column | Type | Description |
|--------|------|-------------|
| id | uuid (PK) | ID |
| name | text | Tên khách hàng / cơ sở |
| phone | text (unique) | SĐT |
| address | text | Địa chỉ |
| company_name | text | Tên cơ sở (nếu có) |
| notes | text | Ghi chú |
| created_at | timestamptz | Ngày tạo |

## Relationships

```
products ──< order_items >── orders
customers ──< orders (qua phone matching)
```

## Indexes

- `products.slug` — unique, dùng cho URL
- `products.plastic_type` — filter theo loại nhựa
- `orders.order_number` — unique, tra cứu nhanh
- `orders.status` — filter theo trạng thái
- `customers.phone` — unique, lookup nhanh

## Notes

- Giá lưu integer (VND) — không dùng decimal để tránh floating point
- Images lưu trên Supabase Storage, chỉ lưu URL trong DB
- Soft delete: dùng `is_active` cho products, không xóa record
