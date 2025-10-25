# Personal Next.js Boilerplate

A comprehensive Next.js 15 boilerplate with modern tooling, database integration, and email functionality. Built with TypeScript, Tailwind CSS, and Convex for real-time data.

## 🚀 Quick Start

### Prerequisites

Before running this project, you'll need to set up the following services:

1. **Convex** - Real-time database and backend
2. **Resend** - Email service for transactional emails
3. **Node.js** (v18 or higher)
4. **pnpm** (recommended) or npm

### Setup Instructions

1. **Clone and install dependencies:**
```bash
git clone <your-repo-url>
cd nextjs-boilerplate
pnpm install
```

2. **Set up Convex:**
```bash
# Install Convex CLI globally
npm install -g convex

# Initialize Convex in your project
npx convex dev
```
Follow the prompts to create a new Convex project and get your deployment URL.

3. **Set up Resend:**
   - Go to [Resend.com](https://resend.com) and create an account
   - Create a new API key
   - Add your domain for sending emails

4. **Environment Variables:**
Create a `.env.local` file in the root directory:
```env
# Convex
CONVEX_DEPLOYMENT=your-convex-deployment-url

# Resend
RESEND_API_KEY=your-resend-api-key

# Optional: For production
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

5. **Run the development server:**
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## 🛠 Technology Stack

### Core Technologies
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS 4** for styling
- **React 19** with latest features

### Backend & Database
- **Convex** - Real-time database and backend functions
- **Resend** - Email service integration
- **Server Actions** with next-safe-action

### UI & Components
- **shadcn/ui** - Modern component library
- **Radix UI** - Accessible primitives
- **Lucide React** - Icon library
- **Framer Motion** - Animations

### Development Tools
- **ESLint & Prettier** - Code formatting and linting
- **TypeScript** - Static type checking
- **Tailwind CSS** - Utility-first styling

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (app)/             # Protected app routes
│   │   └── dashboard/     # Dashboard pages
│   └── (landing)/         # Public landing pages
├── components/            # Reusable components
│   ├── blocks/           # Page sections
│   ├── ui/               # shadcn/ui components
│   └── ...               # Other components
├── lib/                  # Utility functions
└── styles/               # Global styles

convex/                   # Convex backend
├── schema.ts            # Database schema
├── tasks.ts             # Task management functions
├── emails.ts            # Email functionality
└── http.ts              # HTTP endpoints
```

## 🎯 Features

### Pre-built Pages
- **Landing Page** - Hero, features, testimonials
- **About Page** - Company information
- **Pricing Page** - Pricing plans and features
- **FAQ Page** - Frequently asked questions
- **Contact Page** - Contact form with email integration
- **Dashboard** - Protected user area
- **Login/Signup** - Authentication pages

### Database Features
- **Tasks Management** - CRUD operations for tasks
- **Email Tracking** - Track sent emails and status
- **Real-time Updates** - Live data synchronization

### Email Integration
- **Welcome Emails** - Automated welcome sequences
- **Email Templates** - React-based email templates
- **Webhook Support** - Handle email events

## 🔧 Required Services Setup

### 1. Convex Setup
1. Sign up at [convex.dev](https://convex.dev)
2. Create a new project
3. Run `npx convex dev` to sync your schema
4. Copy the deployment URL to your `.env.local`

### 2. Resend Setup
1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. Add your domain for sending emails
4. Add the API key to your `.env.local`

### 3. Domain Setup (Optional)
For production email sending:
1. Add your domain to Resend
2. Configure DNS records as instructed
3. Update the `from` email in `convex/emails.ts`

## 🚀 Deployment

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Variables for Production
```env
CONVEX_DEPLOYMENT=your-production-convex-url
RESEND_API_KEY=your-resend-api-key
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

## 📝 Development

### Available Scripts
```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm format       # Format code with Prettier
```

### Convex Commands
```bash
npx convex dev    # Start Convex development
npx convex deploy # Deploy to production
```

## 🤝 Contributing

This is a personal boilerplate. Feel free to fork and customize for your own projects.

## 📄 License

MIT License - see LICENSE file for details.
