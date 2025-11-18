# 🚀 Deployment Guide for Vercel

This guide will help you deploy your Flight Manifest Manager (FMM) Case Study portfolio to Vercel.

## Prerequisites

- A GitHub account
- A Vercel account (free tier is sufficient) - Sign up at [vercel.com](https://vercel.com)
- Your project files

## Method 1: Deploy via Vercel Dashboard (Recommended for Beginners)

### Step 1: Push to GitHub

1. Create a new repository on GitHub
2. Initialize git in your project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: FMM Case Study"
   ```
3. Connect to your GitHub repository:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New..."** → **"Project"**
3. Click **"Import Git Repository"**
4. Select your GitHub repository
5. Vercel will automatically detect the framework and settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
6. Click **"Deploy"**

### Step 3: Wait for Deployment

- Vercel will build and deploy your project
- This typically takes 1-2 minutes
- You'll get a live URL like `your-project.vercel.app`

### Step 4: Custom Domain (Optional)

1. Go to your project settings on Vercel
2. Click **"Domains"**
3. Add your custom domain
4. Follow Vercel's instructions to update your DNS settings

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login

```bash
vercel login
```

### Step 3: Deploy

```bash
# Navigate to your project directory
cd path/to/your/project

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Step 4: Follow Prompts

The CLI will ask:
- Set up and deploy? **Yes**
- Which scope? **Select your account**
- Link to existing project? **No** (first time)
- What's your project's name? **fmm-case-study** (or your choice)
- In which directory is your code located? **./
- Want to modify settings? **No**

## Method 3: Deploy from Local Build

### Step 1: Build Locally

```bash
npm install
npm run build
```

### Step 2: Deploy Build Folder

```bash
vercel --prod
```

## Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch automatically deploys to production
- Pull requests get preview deployments
- Rollback to any previous deployment with one click

## Environment Variables (if needed in future)

1. Go to Vercel Dashboard → Your Project
2. Click **Settings** → **Environment Variables**
3. Add key-value pairs
4. Redeploy for changes to take effect

## Troubleshooting

### Build Fails

**Check:**
- All dependencies are in `package.json`
- Build command is correct: `npm run build`
- Output directory is `dist`

**Solution:**
```bash
# Test build locally first
npm run build
npm run preview
```

### Images Not Loading

**Check:**
- Image URLs are accessible
- Using `ImageWithFallback` component correctly
- Images are properly imported

### Styles Not Applied

**Check:**
- `/styles/globals.css` is imported
- Tailwind configuration is correct
- Dark mode class is applied to root element

## Performance Optimization

Vercel automatically provides:
- ✅ Global CDN
- ✅ Image optimization
- ✅ Automatic HTTPS
- ✅ Compression (gzip/brotli)
- ✅ Caching

## Analytics (Optional)

Enable Vercel Analytics:
1. Go to your project dashboard
2. Click **Analytics** tab
3. Enable Web Analytics
4. Add script to your app (Vercel will guide you)

## Final Checklist

Before deploying:
- [ ] All images load correctly
- [ ] All links work
- [ ] Responsive on mobile/tablet/desktop
- [ ] Dark mode displays correctly
- [ ] No console errors
- [ ] Smooth scrolling works
- [ ] All sections render properly

## Post-Deployment

After successful deployment:
1. ✅ Test all functionality on live site
2. ✅ Share your URL on LinkedIn/portfolio
3. ✅ Update README with live link
4. ✅ Monitor Vercel dashboard for analytics

## Live URL

Once deployed, your case study will be live at:
```
https://your-project-name.vercel.app
```

Share this URL in:
- Your portfolio website
- LinkedIn profile
- Resume/CV
- Job applications
- Social media

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)
- [Community Discord](https://vercel.com/discord)

---

**Good luck with your deployment! 🚀**

Your case study deserves to be seen by the world.
