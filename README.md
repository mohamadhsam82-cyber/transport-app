# Transport App — MVP

نسخه اولیه یک سامانه حمل‌ونقل/باربری با Next.js + Prisma + PostgreSQL.

## پیش‌نیاز

- Node.js 20+
- PostgreSQL

## اجرا

```bash
npm install
cp .env.example .env
```

فایل `.env` را با اطلاعات PostgreSQL تنظیم کن، سپس:

```bash
npm run db:format
npm run db:validate
npm run db:migrate -- --name init
npm run db:generate
npm run dev
```

سپس مرورگر را روی:

`http://localhost:3000`

باز کن.

## API تست سلامت

`GET /api/health`

## ساختار

- `prisma/schema.prisma`: مدل دیتابیس
- `lib/prisma.ts`: Prisma Client
- `app/`: صفحات و APIهای Next.js

## مرحله بعد

1. OTP واقعی
2. session/JWT و role-based access
3. CRUD بارها
4. درخواست راننده
5. Trip و وضعیت سفر
6. آپلود مدارک
7. GPS tracking
8. Chat
9. پنل کامل Admin
