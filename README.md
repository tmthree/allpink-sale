# AllPink Sale — Web Bán Hạt Nhựa Tái Chế

Web app cho cơ sở sản xuất hạt nhựa tái chế. Thu mua rổ nhựa từ chợ, xay nhuyễn, đóng bao và bán cho các cơ sở sản xuất nhựa.

## Tính năng chính

- **Trang chủ**: Giới thiệu cơ sở, quy trình sản xuất
- **Sản phẩm**: Danh mục hạt nhựa tái chế (loại, màu, giá, tồn kho)
- **Đặt hàng**: Khách hàng đặt hàng trực tiếp qua web
- **Liên hệ**: Thông tin liên hệ, Zalo, điện thoại
- **Admin**: Quản lý sản phẩm, đơn hàng, khách hàng

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS + shadcn/ui
- **Deploy**: Vercel

## Bắt đầu

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Biến môi trường

Tạo file `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
DATABASE_URL=your_database_url
```

## Deploy

Push code lên GitHub → Connect repo trên Vercel → Auto deploy.
