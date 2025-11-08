# 🚀 Next.js Boilerplate SaaS

[![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6.19.0-green?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![tRPC](https://img.shields.io/badge/tRPC-11.7.1-pink?style=for-the-badge&logo=trpc)](https://trpc.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-blue?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue?style=for-the-badge&logo=postgresql)](https://www.postgresql.org/)

A modern, full-stack SaaS boilerplate built with Next.js 16, featuring TypeScript, Prisma ORM, tRPC for type-safe APIs, Tailwind CSS for styling, and a comprehensive UI component library.

## ✨ Features

### 🛠️ Core Technologies

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript for type safety
- **Database**: PostgreSQL with Prisma ORM
- **API**: tRPC for end-to-end type-safe APIs
- **Styling**: Tailwind CSS 4.0 with custom design system
- **UI Components**: Radix UI primitives with custom styling
- **State Management**: TanStack Query for server state
- **Forms**: React Hook Form with Zod validation

### 🎨 UI & Design

- **Component Library**: Comprehensive UI components (Accordion, Dialog, Tabs, etc.)
- **Theme Support**: Dark/Light mode with next-themes
- **Icons**: Lucide React icons
- **Charts**: Recharts for data visualization
- **Notifications**: Sonner for toast notifications

### 🔧 Developer Experience

- **Linting & Formatting**: Biome for fast code quality
- **Database Management**: Prisma Studio and migrations
- **Type Safety**: End-to-end type safety with tRPC
- **Hot Reload**: Fast development with Next.js dev server

### 📦 Key Dependencies

- `@trpc/client`, `@trpc/server` - Type-safe APIs
- `@prisma/client` - Database ORM
- `@tanstack/react-query` - Data fetching
- `@radix-ui/*` - Accessible UI primitives
- `class-variance-authority` - Component variants
- `zod` - Schema validation

## ⚡ Performance Optimization: Server-Side Prefetching

This boilerplate demonstrates advanced performance patterns by leveraging server-side rendering with client-side hydration for optimal loading speeds.

### Server-Side Data Prefetching

In `src/app/page.tsx`, data is prefetched on the server before the page renders:

```tsx
// Server-side prefetching for instant initial load
void queryClient.prefetchQuery(trpc.getUser.queryOptions());

// Hydrate the prefetched data to the client
<HydrationBoundary state={dehydrate(getQueryClient())}>
  <Suspense fallback={<div>Loading...</div>}>
    <Client />
  </Suspense>
</HydrationBoundary>;
```

### Client-Side Data Hydration

The `src/app/Client.tsx` component seamlessly continues from the server state:

```tsx
"use client";
export const Client = () => {
  const trpc = useTRPC();

  // Instantly available data from server prefetch
  const { data: user } = useSuspenseQuery(trpc.getUser.queryOptions());

  return (
    <div>this is client and their data {JSON.stringify(user, null, 2)}</div>
  );
};
```

### Benefits

- **⚡ Instant Loading**: Data loads immediately without client-side waterfalls
- **🚀 SEO Friendly**: Server-rendered content for search engines
- **🔄 Seamless Hydration**: Client takes over without refetching
- **📱 Progressive Enhancement**: Works without JavaScript, enhanced with it
- **🛡️ Type Safety**: End-to-end type safety from database to UI

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database (local or cloud like NeonDB)
- Package manager: npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/nextjs-boilerplate-saas.git
   cd nextjs-boilerplate-saas
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Configure your `DATABASE_URL` and other required environment variables.

4. **Set up the database**

   ```bash
   # Generate Prisma client
   npm run db:generate

   # Push schema to database
   npm run db:push

   # (Optional) Run migrations
   npm run db:migrate

   # (Optional) Seed the database
   npm run db:seed
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📜 Available Scripts

| Command               | Description                     |
| --------------------- | ------------------------------- |
| `npm run dev`         | Start development server        |
| `npm run build`       | Build for production            |
| `npm run start`       | Start production server         |
| `npm run lint`        | Run Biome linter                |
| `npm run format`      | Format code with Biome          |
| `npm run db:generate` | Generate Prisma client          |
| `npm run db:push`     | Push schema changes to database |
| `npm run db:migrate`  | Run database migrations         |
| `npm run db:studio`   | Open Prisma Studio              |
| `npm run db:seed`     | Seed the database               |

## 🏗️ Project Structure

```
nextjs-boilerplate-saas/
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── migrations/            # Database migrations
├── public/                    # Static assets
├── src/
│   ├── app/                   # Next.js app router pages
│   │   ├── api/               # API routes
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable components
│   │   └── ui/               # UI component library
│   ├── lib/                  # Utilities and configurations
│   │   ├── db.ts             # Database client
│   │   └── utils.ts          # Helper functions
│   ├── trpc/                 # tRPC configuration
│   │   ├── client.tsx        # tRPC client
│   │   ├── init.ts           # tRPC initialization
│   │   ├── routers/          # API routers
│   │   └── server.tsx        # tRPC server utilities
│   └── hooks/                # Custom React hooks
├── .env                       # Environment variables
├── biome.json                # Linting configuration
├── next.config.ts            # Next.js configuration
├── package.json              # Dependencies and scripts
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## 🗄️ Database Schema

The application uses Prisma ORM with PostgreSQL. Current models include:

- **User**: User accounts with email and name
- **Post**: Blog posts with title, content, and author relationship

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/dbname"
```

### Prisma Configuration

Database connection and client generation are configured in `prisma/schema.prisma`.

### Next.js Configuration

Additional settings can be modified in `next.config.ts`.

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Other Platforms

The application can be deployed to any platform supporting Node.js:

- **Railway**
- **Render**
- **AWS/GCP/Azure**
- **Docker** (create a Dockerfile)

### Build Commands

```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Prisma](https://www.prisma.io/) - Database toolkit
- [tRPC](https://trpc.io/) - Type-safe APIs
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Radix UI](https://www.radix-ui.com/) - UI primitives
- [Vercel](https://vercel.com/) - Deployment platform

---

Built with ❤️ using Next.js and modern web technologies.
