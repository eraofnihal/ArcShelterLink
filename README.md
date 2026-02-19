# 🏠 ShelterLink — MYP Design ePortfolio

> Dignified, modular shelter solutions for vulnerable communities at Faizabad interchange, Rawalpindi.

---

## 📁 Project Structure

```
shelterlink/
├── public/
│   └── index.html          ← Your ePortfolio (served as static site)
│
├── api/                    ← Vercel Serverless Functions (auto-routed)
│   ├── health.js           → GET  /api/health
│   └── contact.js          → POST /api/contact
│
├── .github/
│   └── workflows/
│       └── deploy.yml      ← Auto-deploy to Vercel on git push
│
├── vercel.json             ← Routing config
├── package.json
└── .gitignore
```

---

## 🚀 Step-by-Step Deployment

### Step 1 — Push to GitHub

1. Go to [github.com/new](https://github.com/new)
2. Name it `shelterlink`, click **Create repository**
3. Extract this zip, then open a terminal inside the folder and run:

```bash
git init
git add .
git commit -m "🎉 Initial commit — ShelterLink"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/shelterlink.git
git push -u origin main
```

---

### Step 2 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Click **Import** next to your `shelterlink` GitHub repo
3. Leave all settings as default (Vercel auto-detects the structure)
4. Click **Deploy**

✅ Your site will be live at `https://shelterlink.vercel.app` in ~30 seconds!

---

### Step 3 — Enable Auto-Deploy on Git Push (optional)

Add these 3 secrets in **GitHub → Settings → Secrets → Actions**:

| Secret | Where to get it |
|---|---|
| `VERCEL_TOKEN` | [vercel.com/account/tokens](https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID` | Vercel dashboard → Settings → General |
| `VERCEL_PROJECT_ID` | Vercel project → Settings → General |

After this, every `git push` to `main` auto-deploys to production!

---

## 🔌 API Endpoints

| Method | URL | Description |
|---|---|---|
| `GET` | `/api/health` | Server health check |
| `POST` | `/api/contact` | Submit contact form |
| `GET` | `/api/contact` | View submissions |

### Test the API

```bash
# Health check
curl https://shelterlink.vercel.app/api/health

# Submit a message
curl -X POST https://shelterlink.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Ali","email":"ali@example.com","message":"Brilliant project!"}'
```

---

## 🛠 Tech Stack

| | Technology |
|---|---|
| Frontend | HTML5, Tailwind CSS, Vanilla JS |
| Backend | Vercel Serverless Functions (Node.js) |
| Hosting | Vercel |
| CI/CD | GitHub Actions |
