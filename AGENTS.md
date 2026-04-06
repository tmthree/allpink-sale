<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project-Specific Warnings

### Next.js 15 App Router
- Default components are Server Components — add `"use client"` only when needed
- Use Server Actions in `src/actions/` for data mutations — NOT API routes
- `fetch()` in Server Components is auto-cached by Next.js
- Dynamic routes: `[slug]` folder convention
- Layouts are shared, not re-rendered on navigation

### Supabase
- Client-side: use `createBrowserClient()` from `@supabase/ssr`
- Server-side: use `createServerClient()` with cookie handling
- Never expose `SUPABASE_SERVICE_ROLE_KEY` in client code
- Row Level Security (RLS) is enabled by default — configure policies

### Tailwind CSS v4
- Uses CSS-first configuration (no `tailwind.config.js`)
- Theme customization via `@theme` in CSS files
- Check `node_modules/tailwindcss/` docs for v4 syntax

### Vietnamese UI
- All user-facing text must be in Vietnamese
- Use UTF-8 encoding for all files
- Date format: DD/MM/YYYY
- Currency: VND (₫) — format with dots (e.g., 50.000₫)
