# Vercel Deployment

✅ **Your portfolio is ready for Vercel deployment!**

## 📋 Steps to Deploy:

### 1. **Fix Security Vulnerabilities (Optional but Recommended)**
```bash
npm audit fix
```

### 2. **Install Vercel CLI (if not already installed)**
```bash
npm install -g vercel
```

### 3. **Deploy to Vercel**

**Option A: Deploy via Vercel CLI**
```bash
vercel
```
Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Choose your account
- Link to existing project? **N** (for first deployment)
- Project name: **portfolio** (or your choice)
- Directory: **./** (press Enter)
- Auto-detected settings: **Y**

**Option B: Deploy via Vercel Dashboard**
1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect Vite settings
5. Click **"Deploy"**

### 4. **Production Deployment**
```bash
vercel --prod
```

## 🔧 Configuration Files Created:

✅ **vercel.json** - Vercel deployment configuration
- Routes all requests to index.html (SPA routing)
- Handles API routes properly
- Sets build output directory to 'dist'

✅ **package.json** - Added `vercel-build` script
- Runs `vite build` during deployment
- Ensures proper build process on Vercel

## 📝 Important Notes:

1. **Environment Variables**: If you use any API keys, add them in Vercel Dashboard:
   - Go to Project Settings → Environment Variables
   - Add your variables (e.g., API keys, database URLs)

2. **Custom Domain**: After deployment, you can add a custom domain in Project Settings

3. **Build Output**: Vercel will use the `dist` folder created by `vite build`

4. **Automatic Deployments**: Once connected to GitHub, Vercel will auto-deploy on every push to main branch

## 🚀 Your Portfolio Will Be Live At:
```
https://your-project-name.vercel.app
```

## 🐛 Troubleshooting:

If deployment fails:
- Ensure all dependencies are in `package.json`
- Check build logs in Vercel Dashboard
- Verify Node version (Vercel uses Node 18 by default)
- Make sure `dist` folder is in `.gitignore` but gets created during build

Ready to deploy! Run `vercel` in your terminal. 🎉
