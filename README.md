# ระบบหอพักออนไลน์ (Dormitory Management System)

ระบบสำหรับจัดการค่าห้องและค่าน้ำค่าไฟในหอพัก

## Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Build

```bash
npm run build
```

### Production Start

```bash
npm start
```

## Technology Stack

- **Framework**: Next.js 14.0.4
- **Frontend**: React 18.2.0
- **Backend**: Node.js with API Routes
- **Database**: MongoDB with Prisma ORM
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Cloudinary
- **Styling**: Styled Components
- **Validation**: Zod

## Environment Variables

Create `.env.local` file with:

```env
DATABASE_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── api/            # API routes
│   ├── admin/          # Admin pages
│   ├── components/     # Reusable components
│   └── layout.tsx      # Root layout
├── lib/                # Utilities
│   ├── prisma.ts       # Prisma client
│   ├── jwt.ts          # JWT auth
│   ├── env.ts          # Environment variables
│   └── auth-middleware.ts
└── styles/             # Global styles

prisma/
└── schema.prisma       # Database schema
```

## Features

- ✅ User authentication (Login/Register)
- ✅ Bill management for room rental
- ✅ Payment slip upload and verification
- ✅ Admin dashboard
- ✅ User profile management
- ✅ Water and electric bill tracking

## Deploy on Vercel

The easiest way to deploy is to use [Vercel Platform](https://vercel.com).

### Steps:

1. Push code to GitHub:
```bash
git remote add origin <your-github-repo>
git push -u origin master
```

2. Connect to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Import your project
   - Add environment variables
   - Deploy

### Environment Variables in Vercel:

Add these in Vercel dashboard under Settings > Environment Variables:
- `DATABASE_URL`
- `JWT_SECRET`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment Docs](https://nextjs.org/docs/deployment)
- [Prisma Documentation](https://www.prisma.io/docs)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
