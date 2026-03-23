# 🚀 MGZon Platform - Enterprise Multi-Tenant E-Commerce & Freelance Marketplace

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=flat-square&logo=graphql)](https://graphql.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0-green?style=flat-square&logo=mongodb)](https://www.mongodb.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![NextAuth](https://img.shields.io/badge/NextAuth.js-4.0-orange?style=flat-square)](https://next-auth.js.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Role-Based System](#-role-based-system)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

## 🌟 Overview

**MGZon Platform** is a comprehensive enterprise-grade multi-tenant platform that seamlessly integrates **E-commerce**, **Freelance Marketplace**, **Recruitment System**, and **Real-time Communication**. Built with modern web technologies, it serves 14 different user roles including Admins, HR Managers, Department Managers, Seller Managers, App Managers, Developer Managers, Store Managers, Finance Managers, Marketing Managers, App Reviewers, Content Moderators, Support Agents, Employees, and Clients.

### Key Highlights

- 🏢 **Multi-Tenant Architecture** - Support for multiple stores with isolated data
- 🛒 **E-commerce System** - Complete online store management with products, orders, and payments
- 💼 **Freelance Marketplace** - Project posting, bidding, and contract management
- 👔 **Recruitment Platform** - Job posting, applications, and HR management
- 💬 **Real-time Chat** - Instant messaging with stories, groups, and video calls
- 🎨 **Theme System** - Customizable store themes with live preview
- 🔌 **Integration Marketplace** - Third-party app integrations and developer tools
- 📊 **Analytics Dashboard** - Comprehensive reports and insights for all roles

## ✨ Features

### 🏛️ **Core Platform Features**

| Feature | Description |
|---------|-------------|
| **Multi-tenancy** | Separate stores with isolated data, themes, and settings |
| **Authentication** | NextAuth.js with Google OAuth and credentials provider |
| **Authorization** | Role-based access control with granular permissions |
| **Internationalization** | Full i18n support with RTL layout (English/Arabic) |
| **Real-time Updates** | WebSocket connections for live notifications |
| **File Upload** | Cloudinary integration for images and documents |
| **Payment Processing** | Stripe, PayPal, and bank transfer integrations |
| **Email Service** | Transactional emails with Resend/SendGrid |

### 👥 **User Roles & Dashboards**

#### 👨‍💼 **Admin**
- System-wide analytics and monitoring
- User management (all roles)
- Platform configuration
- Salary processing
- Recruitment settings
- Marketplace approvals

#### 👥 **HR Manager**
- Job posting and management
- Application review and shortlisting
- Interview scheduling
- Employee onboarding
- Employee records management

#### 👔 **Department Manager**
- Team management and assignments
- Project oversight
- Task delegation
- Performance tracking
- Budget management

#### 🛒 **Seller Manager**
- Seller approvals and verification
- Store management
- Seller performance analytics
- Platform commission tracking

#### 📱 **App Manager**
- App submission review
- Developer management
- Category management
- App marketplace analytics

#### 👨‍💻 **Developer Manager**
- Developer team management
- Project assignment
- Skills matrix
- Developer performance tracking

#### 🏪 **Store Manager**
- Store approvals
- Category management
- Store analytics
- Suspended stores oversight

#### 💰 **Finance Manager**
- Payout processing
- Salary management
- Financial reports
- Transaction analytics

#### 📊 **Marketing Manager**
- Campaign management
- Audience insights
- Email marketing
- Marketing analytics

#### 🔍 **App Reviewer**
- App submission review
- Approval/Rejection decisions
- Review time tracking
- App quality assessment

#### 📝 **Content Moderator**
- Report management
- Flagged content review
- Moderation actions
- Content policy enforcement

#### 💬 **Support Agent**
- Ticket management
- Customer support
- Escalation handling
- Satisfaction tracking

#### 👨‍💼 **Employee**
- Project management
- Time tracking
- Bid management
- Earnings dashboard
- Portfolio showcase

#### 👤 **Client**
- Project posting
- Freelancer hiring
- Contract management
- Payment processing
- Reviews and ratings

### 🎯 **Advanced Features**

#### 📦 **Store Management**
- Custom domain support
- Theme marketplace with live preview
- Page builder with drag-and-drop
- SEO optimization tools
- Analytics dashboard
- Multi-currency support

#### 💬 **Chat System**
- Real-time messaging
- Group chats
- Stories (like Instagram)
- Video/audio calls
- Read receipts
- Typing indicators
- Online status

#### 🔌 **Integration Marketplace**
- Third-party app marketplace
- Developer portal
- OAuth integration
- Webhook management
- API documentation generator

#### 📊 **Analytics**
- Role-specific dashboards
- Revenue reports
- User behavior analytics
- Performance metrics
- Export capabilities (PDF, Excel, CSV)

## 🛠 Tech Stack

### **Frontend**
- Next.js 15 (App Router)
- TypeScript 5.0
- TailwindCSS 3.0
- shadcn/ui Components
- Lucide Icons
- React Hook Form
- Zod Validation
- Framer Motion
- Apollo Client

### **Backend**
- GraphQL (Apollo Server)
- MongoDB with Mongoose
- NextAuth.js
- Node.js
- WebSocket (Socket.io)
- Redis (Caching)

### **DevOps & Tools**
- Docker
- GitHub Actions (CI/CD)
- Vercel / AWS
- Cloudinary
- Stripe / PayPal
- SendGrid
- Sentry (Error Tracking)

## 🏗 Architecture

### **High-Level Architecture**

```
┌─────────────────────────────────────────────────────────────┐
│                         Client Layer                        │
├─────────────────────────────────────────────────────────────┤
│  Next.js App Router │ Apollo Client │ TailwindCSS │ i18n   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                         API Layer                           │
├─────────────────────────────────────────────────────────────┤
│  GraphQL Resolvers │ REST API │ WebSocket │ Middleware     │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                       Service Layer                         │
├─────────────────────────────────────────────────────────────┤
│  Auth │ Store │ Product │ Order │ Chat │ Payment │ Email   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                       Database Layer                        │
├─────────────────────────────────────────────────────────────┤
│         MongoDB (Primary) │ Redis (Cache) │ GridFS         │
└─────────────────────────────────────────────────────────────┘
```

### **Data Flow**

```mermaid
graph TB
    subgraph Frontend
        A[🌐 Client Browser]
        B[📱 Next.js App]
        C[🎨 React Components]
        D[📡 Apollo Client]
    end

    subgraph API
        F[⚡ GraphQL API]
        G[📝 GraphQL Schema]
        H[🔄 Resolvers]
    end

    subgraph Business
        J[👤 Auth]
        K[💰 Payment]
        L[💬 Chat]
        M[📊 Analytics]
    end

    subgraph Database
        Q[(🗄️ MongoDB)]
        R[(⚡ Redis)]
    end

    subgraph External
        U[☁️ Cloudinary]
        V[💳 Stripe]
        W[📧 SendGrid]
    end

    A --> B --> C --> D --> F
    F --> G --> H
    H --> J & K & L & M
    J & K & L & M --> Q & R
    H --> U & V & W
    H --> D
    D --> C
    C --> B
    B --> A
```

### **Role Hierarchy**

```mermaid

graph TD
    Admin[👨‍💼 Admin]
    
    Admin --> HR[👥 HR Manager]
    Admin --> Dept[👔 Dept Manager]
    Admin --> Seller[🛒 Seller Manager]
    Admin --> App[📱 App Manager]
    Admin --> Dev[👨‍💻 Dev Manager]
    Admin --> Store[🏪 Store Manager]
    Admin --> Finance[💰 Finance Manager]
    Admin --> Marketing[📊 Marketing Manager]
    Admin --> Reviewer[🔍 App Reviewer]
    Admin --> Mod[📝 Content Mod]
    Admin --> Support[💬 Support Agent]
    Admin --> Employee[👨‍💼 Employee]
    Admin --> Client[👤 Client]
    
    Dept --> Team[👥 Team Members]
    Seller --> Stores[🏬 Stores]
    App --> Reviewers[🔍 Reviewers]
    Dev --> Projects[📋 Projects]
    Employee --> Tasks[📝 Tasks]
    Client --> Hiring[🤝 Hiring]

```

## 👥 Role-Based System

### **Permissions Matrix**

| Permission | Admin | HR | Manager | Seller Mgr | App Mgr | Dev Mgr | Store Mgr | Finance Mgr | Marketing Mgr | App Reviewer | Content Mod | Support | Employee | Client |
|------------|-------|-----|---------|------------|---------|---------|-----------|-------------|---------------|--------------|-------------|---------|----------|--------|
| Manage Users | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Manage Platform | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Manage Store | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Manage Apps | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| Post Projects | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Bid on Projects | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Post Jobs | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Manage Employees | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Manage Salary | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Process Payouts | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Manage Campaigns | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Review Apps | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| Moderate Content | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| Handle Support | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ |
| View Reports | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

### **Chat System Architecture**

```mermaid
graph LR
    subgraph Users
        A[👤 Client]
        B[👨‍💼 Employee]
        C[👨‍💻 Developer]
        D[🛒 Seller]
    end
    
    subgraph Messages
        E[💬 UnifiedMessages]
        F[📋 Conversations]
        G[💭 Chat Area]
    end
    
    subgraph Features
        H[✅ Read Receipts]
        I[✍️ Typing]
        J[🟢 Online Status]
        K[📎 Files]
    end
    
    subgraph Storage
        L[(🗄️ MongoDB)]
        M[(⚡ Redis)]
    end
    
    A & B & C & D --> E
    E --> F & G
    G --> H & I & J & K
    H & I & J & K --> L & M
```

## 🚀 Getting Started

### **Prerequisites**

- Node.js 18+
- MongoDB 6.0+
- Redis (optional, for caching)
- npm / yarn / pnpm

### **Installation**

```bash
# Clone the repository
git clone https://github.com/yourusername/mgzon-platform.git
cd mgzon-platform

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Update .env.local with your credentials
# - MongoDB connection string
# - NextAuth secret
# - Google OAuth credentials
# - Cloudinary credentials
# - Stripe/PayPal credentials

# Run database seeds
npm run db:seed

# Start development server
npm run dev
```

### **Environment Variables**

```env
# Database
MONGODB_URI=mongodb://localhost:27017/mgzon

# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# OAuth Providers
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# File Upload
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Payment
STRIPE_SECRET_KEY=your-stripe-secret
PAYPAL_CLIENT_ID=your-paypal-client-id
PAYPAL_CLIENT_SECRET=your-paypal-secret

# Email
EMAIL_SERVER=smtp://user:pass@smtp.example.com:587
EMAIL_FROM=noreply@mgzon.com
```

### **Running the Application**

```bash
# Development mode
npm run dev

# Production build
npm run build
npm start

# Run tests
npm test

# Run linting
npm run lint

# Format code
npm run format
```

## 📚 API Documentation

### **GraphQL Schema Highlights**

```graphql
# Core Types
type User {
  id: ID!
  name: String!
  email: String!
  roles: [String!]!
  profile: Profile
  wallet: Wallet
  employee: Employee
  seller: Seller
  developer: Developer
}

type Project {
  id: ID!
  title: String!
  description: String!
  client: User!
  budget: Budget!
  status: ProjectStatus!
  bids: [Bid!]!
  milestones: [Milestone!]!
}

type Job {
  id: ID!
  title: String!
  department: String!
  salary: Salary!
  applications: [Application!]!
}

type Store {
  id: ID!
  name: String!
  slug: String!
  theme: Theme!
  products: [Product!]!
  orders: [Order!]!
}

# Query Examples
query GetUserProjects($userId: ID!) {
  userProjects(userId: $userId) {
    id
    title
    status
    budget
  }
}

query GetStoreAnalytics($storeId: ID!) {
  storeAnalytics(storeId: $storeId) {
    revenue
    orders
    visitors
    conversionRate
  }
}

# Mutation Examples
mutation CreateProject($input: CreateProjectInput!) {
  createProject(input: $input) {
    id
    title
    status
  }
}

mutation SubmitReview($appId: ID!, $decision: String!) {
  submitReview(appId: $appId, decision: $decision) {
    success
    message
    data {
      id
      status
      reviewedAt
    }
  }
}
```

## 🚢 Deployment

### **Vercel (Recommended)**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
```

### **Docker**

```dockerfile
# Dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
RUN npm ci --only=production

EXPOSE 3000
CMD ["npm", "start"]
```

```bash
# Build Docker image
docker build -t mgzon-platform .

# Run container
docker run -p 3000:3000 --env-file .env mgzon-platform
```

### **Environment-Specific Deployments**

| Environment | URL | Purpose |
|-------------|-----|---------|
| Development | http://localhost:3000 | Local development |
| Staging | https://staging.mgzon.com | Testing & QA |
| Production | https://mgzon.com | Live site |

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### **Development Guidelines**

- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all checks pass before submitting PR

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org) for the amazing framework
- [Vercel](https://vercel.com) for hosting and deployment
- [shadcn/ui](https://ui.shadcn.com) for beautiful components
- [TailwindCSS](https://tailwindcss.com) for the utility-first CSS framework
- [MongoDB](https://mongodb.com) for the flexible database
- [GraphQL](https://graphql.org) for the powerful API layer

## 📞 Support & Contact

- **Documentation**: [https://docs.mgzon.com](https://docs.mgzon.com)
- **Email**: support@mgzon.com
- **GitHub Issues**: [https://github.com/yourusername/mgzon-platform/issues](https://github.com/yourusername/mgzon-platform/issues)
- **Discord**: [https://discord.gg/mgzon](https://discord.gg/mgzon)

---

<div align="center">
  <sub>Built with ❤️ by the MGZon Team</sub>
</div>

