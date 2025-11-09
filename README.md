# 🚀 Next.js Boilerplate SaaS with Better Auth UI

[![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6.19.0-green?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![tRPC](https://img.shields.io/badge/tRPC-11.7.1-pink?style=for-the-badge&logo=trpc)](https://trpc.io/)
[![Better Auth UI](https://img.shields.io/badge/Better_Auth_UI-3.2.8-purple?style=for-the-badge)](https://better-auth-ui.com/)
[![Sentry](https://img.shields.io/badge/Sentry-8.0-red?style=for-the-badge&logo=sentry)](https://sentry.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-blue?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue?style=for-the-badge&logo=postgresql)](https://www.postgresql.org/)

A modern, full-stack SaaS boilerplate built with Next.js 16, featuring enterprise-grade authentication, TypeScript, Prisma ORM, tRPC for type-safe APIs, Tailwind CSS for styling, Inngest for background jobs, and a comprehensive UI component library powered by **Better Auth UI**.

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
- **Authentication**: Better Auth UI v3.2.8 with enterprise features
- **Background Jobs**: Inngest for reliable async processing
- **Email Services**: Resend integration for email delivery
- **Error Monitoring**: Sentry 8.0 for comprehensive error tracking
- **Database**: PostgreSQL with Prisma ORM and migrations

### 🎨 UI & Design

- **Component Library**: Comprehensive UI components (Accordion, Dialog, Tabs, etc.)
- **Theme Support**: Dark/Light mode with next-themes
- **Icons**: Lucide React icons
- **Charts**: Recharts for data visualization
- **Notifications**: Sonner for toast notifications

### 🔐 Authentication & Security

- **Better Auth UI**: Complete authentication system with shadcn/ui styling
- **Multiple Auth Methods**: Email/password, magic links, social providers (GitHub, Google)
- **Advanced Features**: API keys management, additional fields, custom routing
- **Security**: Session management, password reset, account deletion
- **Localization**: Multi-language support for auth flows
- **User Management**: Profile settings, avatar uploads, account management

### 🔧 Developer Experience

- **Linting & Formatting**: Biome for fast code quality
- **Database Management**: Prisma Studio and migrations
- **Type Safety**: End-to-end type safety with tRPC
- **Background Processing**: Inngest for reliable job execution
- **Email Integration**: Resend for transactional emails
- **Error Monitoring**: Sentry 8.0 for production error tracking
- **Hot Reload**: Fast development with Next.js dev server

### 📦 Key Dependencies

- `@trpc/client`, `@trpc/server` - Type-safe APIs
- `@prisma/client` - Database ORM
- `@tanstack/react-query` - Data fetching
- `@daveyplate/better-auth-ui` - Enterprise Authentication UI
- `better-auth` - Authentication library
- `inngest` - Background job processing
- `resend` - Email delivery service
- `@sentry/nextjs` - Error monitoring and tracking
- `@radix-ui/*` - Accessible UI primitives
- `class-variance-authority` - Component variants
- `zod` - Schema validation

## 🔐 Authentication Features with Better Auth UI

This boilerplate now includes comprehensive authentication powered by **Better Auth UI v3.2.8**, providing enterprise-grade security and user management capabilities.

### 🚀 Key Authentication Features

- **Multiple Authentication Methods**: Email/password, magic links, and social providers (GitHub, Google)
- **Advanced User Management**: User profiles, avatar uploads, account settings
- **Security Features**: Session management, password reset, secure account deletion
- **API Keys**: Complete API key management system with expiration and metadata
- **Additional Fields**: Custom registration fields (company, age, etc.)
- **Localization**: Multi-language support for all auth flows
- **Custom Routing**: Flexible URL paths for authentication pages

### 🎯 Authentication Flow Examples

#### Protected Page with Authentication State

```tsx
import {
  SignedIn,
  SignedOut,
  UserButton,
  AuthLoading,
} from "@daveyplate/better-auth-ui";

export default function ProtectedPage() {
  return (
    <div className="flex flex-col gap-4">
      <AuthLoading>
        <div className="text-center">Loading...</div>
      </AuthLoading>

      <SignedIn>
        <div className="text-center">
          <h1>Welcome back!</h1>
          <UserButton />
        </div>
      </SignedIn>

      <SignedOut>
        <div className="text-center">
          <h1>Please sign in to continue</h1>
        </div>
      </SignedOut>
    </div>
  );
}
```

#### Authentication Provider Configuration

```tsx
// src/providers/betterAuthUiProvider.tsx
<AuthUIProvider
  authClient={authClient}
  navigate={router.push}
  replace={router.replace}
  onSessionChange={() => router.refresh()}
  Link={Link}
  // Social providers
  social={{ providers: ["github", "google"] }}
  magicLink
  // Additional fields for registration
  additionalFields={{
    company: { label: "Company", required: true, type: "string" },
    age: {
      label: "Age",
      required: true,
      type: "number",
      validate: (value) => parseInt(value) >= 18,
    },
  }}
  // API keys management
  apiKey={{ prefix: "app_", metadata: { environment: "production" } }}
  // Sign-up configuration
  signUp={{ fields: ["company", "age"] }}
  // Localization
  localization={{ SIGN_IN: "Log in", SIGN_UP: "Create Account" }}
  // Custom auth paths
  viewPaths={{
    SIGN_IN: "login",
    SIGN_OUT: "logout",
    SIGN_UP: "register",
    FORGOT_PASSWORD: "forgot",
  }}
>
  {children}
</AuthUIProvider>
```

### 📱 Available Authentication Routes

| Route                   | Description              | Custom Path      |
| ----------------------- | ------------------------ | ---------------- |
| `/auth/sign-in`         | Email/password login     | `/auth/login`    |
| `/auth/sign-up`         | User registration        | `/auth/register` |
| `/auth/magic-link`      | Passwordless login       | `/auth/magic`    |
| `/auth/forgot-password` | Password reset           | `/auth/forgot`   |
| `/auth/reset-password`  | New password setup       | `/auth/reset`    |
| `/auth/settings`        | User account settings    | -                |
| `/account/*`            | Account management pages | -                |
| `/organization/*`       | Organization management  | -                |

### 🛡️ Security Features

- **Session Management**: Automatic session refresh and secure handling
- **API Key Security**: Hashed storage, expiration, and metadata tracking
- **Password Security**: Secure password change flows with verification
- **Account Protection**: Secure account deletion with confirmation
- **Route Protection**: Built-in authentication guards

### 🌐 Localization Support

Easily customize text across all authentication flows:

```tsx
localization={{
  SIGN_IN: "Log in",
  SIGN_IN_DESCRIPTION: "Use your email and password to log in.",
  SIGN_UP: "Create Account",
  FORGOT_PASSWORD: "Reset Password",
  MAGIC_LINK_EMAIL: "Check your inbox for your login link!",
  RESET_PASSWORD_SUCCESS: "You can now sign in with your new password!",
  DELETE_ACCOUNT_SUCCESS: "Your account has been permanently deleted."
}}
```

## ⚡ Performance Optimization: Server-Side Prefetching

This boilerplate demonstrates advanced performance patterns by leveraging server-side rendering with client-side hydration for optimal loading speeds, now enhanced with authenticated state management.

### Server-Side Data Prefetching

In `src/app/page.tsx`, data is prefetched on the server with authentication checks:

```tsx
// Server-side authentication check and data prefetching
await requireAuth();
const data = await caller.getUser();

return (
  <div className="flex items-center justify-center">
    <AuthLoading>
      <div className="text-center">Loading...</div>
    </AuthLoading>

    <SignedIn>
      <div>
        Welcome back! <UserButton />
      </div>
    </SignedIn>

    <SignedOut>
      <div>Please sign in to access this page.</div>
    </SignedOut>
  </div>
);
```

### Benefits

- **🔐 Secure by Default**: Authentication checks happen server-side
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
│   ├── schema.prisma          # Database schema with auth tables
│   └── migrations/            # Database migrations
├── public/                    # Static assets
├── src/
│   ├── app/                   # Next.js app router pages
│   │   ├── api/               # API routes
│   │   │   ├── auth/          # Better Auth API routes
│   │   │   ├── inngest/       # Inngest webhook endpoint
│   │   │   └── trpc/          # tRPC API routes
│   │   ├── auth/              # Authentication pages (dynamic routing)
│   │   ├── account/           # User account settings
│   │   ├── organization/      # Organization management
│   │   ├── globals.css        # Global styles with Better Auth UI
│   │   ├── layout.tsx         # Root layout with providers
│   │   └── page.tsx           # Home page with auth components
│   ├── components/            # Reusable components
│   │   ├── ui/               # UI component library (Radix + custom)
│   │   ├── Headers.tsx       # Header with UserButton integration
│   │   └── modeToggle.tsx    # Dark/light mode toggle
│   ├── inngest/              # Background job functions
│   │   ├── client.ts         # Inngest client configuration
│   │   └── functions.ts      # Job function definitions
│   ├── lib/                  # Utilities and configurations
│   │   ├── auth.tsx          # Better Auth server configuration
│   │   ├── auth-client.ts    # Better Auth client configuration
│   │   ├── db.ts             # Prisma database client
│   │   └── utils.ts          # Helper functions
│   ├── providers/            # React providers
│   │   └── betterAuthUiProvider.tsx # Auth UI provider setup
│   ├── trpc/                 # tRPC configuration
│   │   ├── client.tsx        # tRPC client
│   │   ├── init.ts           # tRPC initialization
│   │   ├── routers/          # API routers
│   │   │   └── _app.ts       # Root tRPC router
│   │   └── server.tsx        # tRPC server utilities
│   └── hooks/                # Custom React hooks
├── .env                      # Environment variables
├── .env.example              # Environment variables template
├── .gitignore                # Git ignore rules (excludes /llm/)
├── biome.json                # Linting and formatting configuration
├── next.config.ts            # Next.js configuration
├── package.json              # Dependencies and scripts
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # This documentation
```

## 🗄️ Database Schema

The application uses Prisma ORM with PostgreSQL. Current models include:

- **User**: User accounts with email, name, avatar, and custom fields
- **Post**: Blog posts with title, content, and author relationship
- **Session**: Authentication sessions management
- **Account**: Social provider accounts linking
- **Verification**: Email verification tokens
- **ApiKey**: API keys for programmatic access (Better Auth UI feature)
- **Job Functions**: Inngest functions for background processing

### Authentication Tables (Better Auth UI)

The boilerplate now includes all necessary tables for Better Auth UI:

- **user**: Core user information and custom fields
- **session**: Active user sessions management
- **account**: Social provider account linking
- **verification**: Email verification and password reset tokens
- **apiKey**: API keys for third-party integrations

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/dbname"
BETTER_AUTH_SECRET="your-secret-key" # Generate a secure random string
BETTER_AUTH_URL="http://localhost:3000" # Base URL of your app

# Resend API key for email delivery
RESEND_API_KEY="your-resend-api-key"

# Better Auth UI - Social Providers (Optional)
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Inngest Configuration (Optional - for background jobs)
INNGEST_EVENT_KEY="your-inngest-event-key"

# Sentry Configuration (Optional - for error monitoring)
SENTRY_AUTH_TOKEN="your-sentry-auth-token"
SENTRY_DSN="your-sentry-dsn"
SENTRY_ORG="your-sentry-org"
SENTRY_PROJECT="your-sentry-project"
```

### Authentication Setup

The authentication system is pre-configured with Better Auth UI. Key files:

- `src/lib/auth.ts` - Server-side authentication configuration with Resend email templates
- `src/lib/auth-client.ts` - Client-side authentication client
- `src/providers/betterAuthUiProvider.tsx` - Auth UI provider setup with advanced features
- `src/app/api/auth/[...all]/route.ts` - Authentication API routes
- `src/inngest/` - Background job functions and client configuration
- `src/app/api/inngest/route.ts` - Inngest webhook endpoint
- `sentry.server.config.ts` - Server-side Sentry configuration
- `sentry.edge.config.ts` - Edge runtime Sentry configuration

### Prisma Configuration

Database connection and authentication tables are configured in `prisma/schema.prisma`. Run migrations to set up authentication tables:

```bash
npm run db:migrate
npm run db:generate
```

### Next.js Configuration

Additional settings can be modified in `next.config.ts`. The authentication routes are automatically handled by the dynamic route structure.

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Inngest Setup (for Background Jobs)

If using Inngest for background processing:

1. Create an Inngest account at [inngest.com](https://inngest.com)
2. Connect your repository to Inngest
3. Add `INNGEST_EVENT_KEY` to your environment variables
4. Deploy your functions

### Sentry Setup (for Error Monitoring)

For production error monitoring with Sentry:

1. Create a Sentry account at [sentry.io](https://sentry.io)
2. Create a new project for your application
3. Add the required environment variables (`SENTRY_DSN`, `SENTRY_AUTH_TOKEN`, etc.)
4. Configure source maps for better error tracking by running `npm run build`
5. Deploy your application to see real-time error monitoring

### Other Platforms

The application can be deployed to any platform supporting Node.js:

- **Railway** - Full-stack deployment with PostgreSQL
- **Render** - Cloud hosting with managed databases
- **AWS/GCP/Azure** - Enterprise cloud platforms
- **Docker** - Containerized deployment

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

## 🎯 What's New: Latest Features & Integrations

### ✨ Recent Additions

This boilerplate has been significantly enhanced with multiple new features:

#### 🔐 Better Auth UI v3.2.8 Enterprise Integration

#### 🔐 Better Auth UI v3.2.8 Enterprise Integration

- **Multi-method Authentication**: Email/password, magic links, social providers
- **Advanced User Management**: Profiles, avatars, account settings
- **Security Features**: Session management, password reset, account deletion
- **API Keys Management**: Create, manage, and revoke API keys programmatically
- **Custom Fields**: Additional registration fields (company, age validation, etc.)
- **Localization**: Multi-language support for all auth flows
- **Custom Routing**: Flexible URL paths (login, register, forgot, etc.)

#### ⚡ Inngest Background Processing

- **Reliable Job Execution**: Event-driven background processing
- **User Functions**: Pre-configured hello world and user demo functions
- **Webhook Integration**: API endpoints for job triggers
- **Type Safety**: Full TypeScript support for function definitions

#### 📧 Resend Email Integration

- **Transactional Emails**: Integrated with Better Auth for verification
- **Beautiful Templates**: Pre-styled email templates using Better Auth UI
- **Customizable Content**: Easy to modify email content and branding

#### 🐛 Sentry Error Monitoring

- **Enterprise Error Tracking**: Comprehensive error monitoring for production
- **Performance Insights**: Real-time performance metrics and tracing
- **Release Tracking**: Automatic release tracking and deployment monitoring
- **Source Maps**: Enhanced debugging with source map support

#### 🎨 Enhanced UI Components

- **Better Auth UI Components**: Pre-built, styled authentication components
- **User Button**: Dropdown with user actions and settings access
- **Settings Cards**: Comprehensive account management interface
- **Loading States**: Smooth loading experiences with AuthLoading
- **Authentication Guards**: SignedIn/SignedOut conditional rendering

#### 🏗️ Architecture Improvements

- **Modular Provider Setup**: Clean separation of auth and app providers
- **Type-Safe Configuration**: Full TypeScript support for all auth features
- **Dynamic Routing**: Flexible route generation for auth pages
- **Session Management**: Automatic session refresh and cache management

### 🚀 Quick Start with Authentication

1. **Environment Setup**:

   ```bash
   cp .env.example .env.local
   # Add your DATABASE_URL and social provider keys
   ```

2. **Database Migration**:

   ```bash
   npm run db:migrate
   npm run db:generate
   ```

3. **Development Server**:

   ```bash
   npm run dev
   ```

4. **Test Authentication**:
   - Visit `/auth/login` for custom login path
   - Visit `/auth/register` for signup with additional fields
   - Visit `/account/settings` for user settings

### 📱 Available Authentication Routes

| Path                | Description       | Features                                      |
| ------------------- | ----------------- | --------------------------------------------- |
| `/auth/login`       | Sign in page      | Email/password, social providers, magic links |
| `/auth/register`    | Registration      | Custom fields, validation, email verification |
| `/auth/forgot`      | Password reset    | Email-based reset flow                        |
| `/auth/magic`       | Magic link login  | Passwordless authentication                   |
| `/account/settings` | User settings     | Profile, password, API keys, sessions         |
| `/account/security` | Security settings | 2FA, sessions, account deletion               |

### 🔧 Configuration Examples

#### Basic Setup

```typescript
// src/providers/betterAuthUiProvider.tsx
<AuthUIProvider
  authClient={authClient}
  social={{ providers: ["github", "google"] }}
  magicLink
>
  {children}
</AuthUIProvider>
```

#### Advanced Configuration

```typescript
<AuthUIProvider
  authClient={authClient}
  additionalFields={{
    company: { label: "Company", required: true },
    age: { label: "Age", type: "number", validate: (v) => parseInt(v) >= 18 }
  }}
  apiKey={{ prefix: "app_", metadata: { env: "prod" } }}
  localization={{ SIGN_IN: "Log in", SIGN_UP: "Create Account" }}
  viewPaths={{ SIGN_IN: "login", SIGN_UP: "register" }}
>
  {children}
</AuthUIProvider>
```

### 🛡️ Security & Best Practices

- **Session Security**: Automatic session refresh and secure handling
- **API Key Management**: Hashed storage with expiration and metadata
- **Input Validation**: Client and server-side validation for all forms
- **Route Protection**: Built-in authentication guards and redirects
- **Type Safety**: End-to-end TypeScript coverage for auth flows

### 🎨 UI Customization

All authentication components support extensive customization:

```tsx
<AuthView
  classNames={{
    base: "max-w-md mx-auto",
    header: "text-center",
    button: "w-full rounded-lg",
  }}
  localization={{
    SIGN_IN: "Sign In",
    SIGN_UP: "Get Started",
  }}
/>
```

## 🐛 Sentry Error Monitoring Examples

### Basic Error Tracking

```typescript title="src/app/sentry-example-page/page.tsx"
import * as Sentry from "@sentry/nextjs";

class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CustomApplicationError";
  }
}

// Trigger an error to test Sentry
throw new CustomError("This error will be captured by Sentry!");
```

### Performance Monitoring

```typescript
await Sentry.startSpan(
  {
    name: "Database Query",
    op: "db.query",
  },
  async () => {
    // Your database operation
    const data = await db.user.findMany();
    return data;
  }
);
```

### Connectivity Check

```typescript
useEffect(() => {
  async function checkConnectivity() {
    const result = await Sentry.diagnoseSdkConnectivity();
    setIsConnected(result !== "sentry-unreachable");
  }
  checkConnectivity();
}, []);
```

## 🤖 Background Job Examples

### Basic Inngest Function

```typescript title="src/inngest/functions.ts"
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "4s");
    return { message: `Hello ${event.data.email}!` };
  }
);
```

### Database Integration

```typescript title="src/inngest/functions.ts"
export const demoGetCurrentUser = inngest.createFunction(
  { id: "demo-get-current-user" },
  { event: "test/demo.get-current-user" },
  async ({ event, step }) => {
    await step.run("fetching current user", async () => {
      const user = await db.user.findUnique({
        where: { id: event.data.id },
      });
      return user;
    });
  }
);
```

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Better Auth UI](https://better-auth-ui.com/) - Authentication UI components
- [Better Auth](https://better-auth.com/) - Authentication library
- [Inngest](https://inngest.com/) - Background job processing
- [Resend](https://resend.com/) - Email delivery service
- [Sentry](https://sentry.io/) - Error monitoring and tracking
- [Prisma](https://www.prisma.io/) - Database toolkit
- [tRPC](https://trpc.io/) - Type-safe APIs
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Radix UI](https://www.radix-ui.com/) - UI primitives
- [Vercel](https://vercel.com/) - Deployment platform

---

## 📋 What's Next

This boilerplate is continuously evolving. Upcoming features may include:

- **Organization Management**: Multi-tenant organization features (currently excluded)
- **Advanced Analytics**: User behavior and performance metrics with Sentry
- **File Uploads**: Enhanced media management with Cloudinary/CDN
- **Real-time Features**: WebSocket integration for live updates
- **Payment Integration**: Stripe/PayPal for subscription management
- **Admin Dashboard**: Comprehensive admin panel for user management
- **Advanced Monitoring**: Enhanced error tracking and performance insights
- **AI Integration**: LLM capabilities and intelligent features

Built with ❤️ using Next.js and modern web technologies.

---

_Last updated: November 2025_

---

## 🎯 Enterprise SaaS Features (November 2025)

This boilerplate represents the cutting-edge of modern SaaS development, featuring:

### 🔒 **Enterprise-Grade Authentication**

- **Better Auth UI v3.2.8** with comprehensive security features
- **Multi-factor authentication** support
- **API key management** for programmatic access
- **Custom user fields** with validation (company, age, etc.)
- **Localization support** for global applications
- **Flexible routing** with customizable auth paths

### 🔄 **Background Processing & Monitoring**

- **Inngest integration** for reliable background job processing
- **Sentry 8.0** for enterprise error monitoring and performance tracking
- **Real-time connectivity checks** and diagnostic capabilities
- **Event-driven architecture** for scalable operations

### 📧 **Communication Infrastructure**

- **Resend integration** for transactional email delivery
- **Beautiful email templates** powered by Better Auth UI
- **Customizable branding** and content management

### 🏗️ **Developer Experience**

- **TypeScript 5.0** for end-to-end type safety
- **tRPC v11.7.1** for type-safe API communication
- **Prisma 6.19.0** with PostgreSQL for robust data management
- **Biome** for fast linting and code formatting
- **Hot reload** with Next.js 16 App Router

### 🎨 **Modern UI/UX**

- **Tailwind CSS 4.0** for utility-first styling
- **Radix UI** components for accessibility
- **Dark/Light mode** support with next-themes
- **Responsive design** patterns
- **Loading states** and smooth transitions

This boilerplate is production-ready and designed to scale with your business needs. Each integration is carefully configured for optimal performance, security, and developer experience.
