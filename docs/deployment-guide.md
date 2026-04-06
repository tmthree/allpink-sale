# Deployment Guide

## Platform

- **Hosting**: Vercel
- **Database**: Supabase
- **Domain**: Sẽ cấu hình sau

## Environment Variables

### Required (Vercel Dashboard → Settings → Environment Variables)

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJ...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJ...

# Prisma
DATABASE_URL=postgresql://postgres:xxx@db.xxx.supabase.co:5432/postgres

# App
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Local Development

Copy `.env.example` to `.env.local` và điền giá trị.

## Deploy Commands

```bash
# Build locally (kiểm tra trước khi push)
npm run build

# Prisma
npx prisma generate    # Generate client
npx prisma db push     # Push schema to DB
npx prisma migrate dev # Create migration (dev)
npx prisma studio      # DB GUI
```

## CI/CD

- Push to `main` → Auto deploy production
- Push to PR branch → Auto deploy preview
- Vercel tự chạy `npm run build`

## Checklist Deploy

- [ ] Environment variables đã set trên Vercel
- [ ] Supabase project đã tạo
- [ ] Database schema đã migrate
- [ ] RLS policies đã cấu hình
- [ ] Domain đã trỏ DNS (nếu có)
- [ ] Test build pass locally (`npm run build`)
