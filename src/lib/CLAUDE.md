# src/lib/ — Utilities & Configurations

## Purpose
Shared utilities, configurations, database client, helper functions.

## Structure
```
lib/
├── supabase/
│   ├── client.ts       # Browser Supabase client
│   └── server.ts       # Server Supabase client (with cookies)
├── prisma.ts           # Prisma client singleton
├── utils.ts            # General utility functions
├── constants.ts        # App constants (site name, phone, etc.)
└── format.ts           # Formatters (currency VND, date DD/MM/YYYY)
```

## Conventions
- Supabase client: NEVER import server client in client components
- Prisma: Use singleton pattern to avoid connection pool exhaustion
- Utils: Pure functions, no side effects
- Constants: UPPER_SNAKE_CASE
- Format helpers: `formatVND(amount)`, `formatDate(date)`, `formatPhone(phone)`
