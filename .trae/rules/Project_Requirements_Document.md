# AIgree Codebase Overview

This codebase powers **AIgree**, an AI-powered SaaS platform for contract analysis. The application is built using **React, TypeScript, TailwindCSS, and Supabase**, with Vite for bundling. It enables users to upload contracts, process them via LLM APIs (e.g., OpenAI/Gemini), and visualize extracted clauses, risks, and compliance issues.

---

## 🧱 Stack and Key Technologies

| Layer        | Tech/Library                    | Role |
|--------------|----------------------------------|------|
| **Frontend** | React + TypeScript              | SPA with routing, views, and user flows |
| **Styling**  | TailwindCSS                     | Utility-first styling across UI |
| **UI Library** | Shadcn/ui + Custom Components | Accessible components (sidebar, inputs, modals) |
| **Backend**  | Supabase                        | Handles Auth, DB, Storage |
| **LLM APIs** | OpenAI / Gemini (via FastAPI)   | Used for clause extraction, risk flagging |
| **Bundler**  | Vite                            | Fast local dev and HMR |
| **Hosting**  | TBD (e.g., Vercel, Netlify)     | Frontend hosting (can integrate CI/CD) |

---

## 🧾 Project Purpose and Core Features

### 🔐 Authentication

- **Implemented via Supabase Auth**
  - Email/password login and signup (`src/pages/Login.tsx`, `Register.tsx`)
  - Auth context provided globally (`src/contexts/AuthContext.tsx`)
  - Conditional routing/navigation using context hook

---

### 📂 File Upload & Contract Processing

- **File Upload Page** (`src/pages/Upload.tsx`)
  - Allows uploading of contracts in PDF or DOCX format
  - Uploaded files are stored in Supabase Storage

- **Integration layer** (`src/integrations/supabase/client.ts`)
  - Handles file uploads, metadata updates, session persistence

---

### 📄 Clause Analysis & Dashboard

- **Dashboard View** (`src/pages/Dashboard.tsx`)
  - Displays results from the clause/risk/compliance pipeline
  - Dynamic sidebar via `components/ui/sidebar.tsx`

- **Document Viewer Page** (`src/pages/Documents.tsx`)
  - Displays individual document insights, clause summaries, risk flags

---

### 🧠 AI Integration Layer (Planned)

- **LLM Orchestration**
  - Backend services will process parsed text via OpenAI/Gemini APIs
  - Responses (structured JSON) stored in Supabase for frontend retrieval
  - Orchestrated through external FastAPI service or background task engine

---

## 🔧 File Structure Summary (Key Paths)

| Path                           | Purpose                                           |
|--------------------------------|---------------------------------------------------|
| `src/pages`                    | Page-level components (e.g., Dashboard, Upload)   |
| `src/components/layout/`       | Shared layout components (Header, Footer, Sidebar)|
| `src/components/ui/`           | Reusable UI building blocks (e.g., Buttons, Dialogs) |
| `src/contexts/AuthContext.tsx` | Auth state & session management                   |
| `src/integrations/supabase/`   | Supabase client setup and helper types            |
| `src/hooks/use-toast.ts`       | Custom hook for notification UI                   |
| `Rules/`                       | Development and product requirement guidelines    |
| `supabase/config.toml`         | Supabase project config file                      |

---

## ⚙️ Navigation and UI Composition

- **Layouts**: `AuthLayout.tsx` and `DashboardLayout.tsx` structure public and authenticated routes
- **Navbar & Sidebar**: Provided via `Header.tsx` and `sidebar.tsx`
- **Toast and Alerts**: UI feedback mechanisms powered by `sonner.tsx`, `alert-dialog.tsx`, and `use-toast.ts`

---

## 🧪 Testing & Quality

- **ESLint Configured**: `eslint.config.js` is included for code linting
- **Type-Safe**: Project uses `tsconfig.app.json` and `vite-env.d.ts` for IDE integration

---

## 📘 Deployment Readiness

- **Single-Page App ready for deployment**
  - With a compatible backend service or scheduled task to run LLM-powered analysis
  - Can be hosted on Vercel/Netlify for frontend
  - Supabase handles backend auth/storage/database out of the box

---

## ✅ Suggested Next Steps

1. **Integrate LLM API into backend task or via Supabase Edge Functions**
2. **Build job queue to handle async processing of contract analysis**
3. **Add analysis result visualization in `Documents.tsx`**
4. **Polish Upload and Dashboard flows with clear states: uploaded, processing, complete**
