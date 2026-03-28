# 🚀 Deployment Guide - Stress Free All

This guide will walk you through deploying the Stress Free All landing page to GitHub and hosting it online.

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure you have:
- [x] Git installed on your computer ([Download Git](https://git-scm.com/downloads))
- [x] GitHub account created ([Sign up](https://github.com/join))
- [x] Repository created at: https://github.com/Ashid332/stressfree
- [x] All project files ready (this has been completed)
- [x] Logo updated with brand asset
- [x] 3D design handoff notes created

---

## 🔧 Step 1: Initialize Git Repository

Open your terminal/command prompt in the project directory and run:

```bash
# Navigate to your project directory
cd /path/to/your/stressfree-project

# Initialize git repository (if not already initialized)
git init

# Check status of files
git status
```

---

## 📦 Step 2: Stage and Commit Files

Add all project files to git and create your first commit:

```bash
# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit: Stress Free All landing page with logo and 3D design notes"
```

**What gets committed:**
- ✅ All React components
- ✅ Styling files (CSS)
- ✅ Configuration files (vite.config.ts, package.json)
- ✅ Documentation (README.md, 3D_DESIGN_HANDOFF.md)
- ✅ Logo asset
- ❌ node_modules/ (excluded via .gitignore)
- ❌ dist/ (excluded via .gitignore)
- ❌ .env files (excluded via .gitignore)

---

## 🔗 Step 3: Connect to GitHub Remote

Link your local repository to GitHub:

```bash
# Add GitHub repository as remote origin
git remote add origin https://github.com/Ashid332/stressfree.git

# Verify remote was added
git remote -v
```

You should see:
```
origin  https://github.com/Ashid332/stressfree.git (fetch)
origin  https://github.com/Ashid332/stressfree.git (push)
```

---

## 🚀 Step 4: Push to GitHub

Push your code to GitHub:

```bash
# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**If you get authentication errors:**

### Option A: HTTPS with Personal Access Token
1. Go to GitHub Settings → Developer Settings → Personal Access Tokens
2. Generate new token (classic) with `repo` scope
3. Use token as password when prompted

### Option B: SSH (Recommended)
```bash
# Generate SSH key (if you don't have one)
ssh-keygen -t ed25519 -C "your_email@example.com"

# Add SSH key to ssh-agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Copy SSH public key
cat ~/.ssh/id_ed25519.pub

# Add to GitHub: Settings → SSH Keys → New SSH Key

# Change remote to use SSH
git remote set-url origin git@github.com:Ashid332/stressfree.git

# Push again
git push -u origin main
```

---

## ✅ Step 5: Verify Upload

1. Go to https://github.com/Ashid332/stressfree
2. You should see all your files listed
3. Check that README.md displays properly
4. Verify 3D_DESIGN_HANDOFF.md is present

---

## 🌐 Step 6: Deploy to Hosting Platform

### Option 1: Vercel (Recommended - Easiest)

**Why Vercel?**
- ✅ Automatic deployments on every push
- ✅ Free SSL certificate
- ✅ Global CDN
- ✅ Perfect for React/Vite projects
- ✅ Zero configuration needed

**Steps:**
1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click "Add New Project"
3. Import `Ashid332/stressfree` repository
4. Vercel will auto-detect Vite configuration
5. Click "Deploy"
6. Your site will be live at: `https://stressfree.vercel.app`

**Custom Domain (Optional):**
1. In Vercel project settings, go to "Domains"
2. Add your custom domain (e.g., `www.stressfreeall.com`)
3. Follow DNS configuration instructions
4. SSL certificate is automatically provisioned

---

### Option 2: Netlify

**Steps:**
1. Go to [netlify.com](https://netlify.com) and sign up
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select `Ashid332/stressfree`
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click "Deploy site"
6. Your site will be live at: `https://random-name.netlify.app`

**Custom Domain:**
1. Go to Site Settings → Domain Management
2. Add custom domain and follow instructions

---

### Option 3: GitHub Pages

**Steps:**

1. Install gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Update `package.json` - add to scripts section:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.ts` - add base path:
```typescript
export default defineConfig({
  base: '/stressfree/',  // Add this line
  plugins: [react()],
  // ... rest of config
});
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: Deploy from branch `gh-pages`
   - Your site will be at: `https://ashid332.github.io/stressfree/`

---

## 🔄 Updating Your Site

### After making changes locally:

```bash
# Stage changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push origin main
```

**Automatic Deployments:**
- Vercel and Netlify automatically redeploy when you push to GitHub
- No manual steps needed!

---

## 📊 Monitoring Your Site

### Vercel Analytics (Free)
1. In Vercel dashboard, enable Analytics
2. Track page views, performance, and Web Vitals

### Google Analytics (Free)
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get tracking ID (G-XXXXXXXXXX)
3. Add to your site's `index.html` or use package:
```bash
npm install react-ga4
```

### Performance Monitoring
- Use [Lighthouse](https://developers.google.com/web/tools/lighthouse) for audits
- Check [PageSpeed Insights](https://pagespeed.web.dev/)
- Monitor [Web Vitals](https://web.dev/vitals/)

---

## 🛠️ Troubleshooting

### Issue: "Permission denied" when pushing
**Solution**: Check SSH key setup or use HTTPS with personal access token

### Issue: "Build failed" on deployment
**Solution**: 
- Check that `package.json` has correct dependencies
- Ensure Node version is compatible (use Node 18+)
- Check build logs for specific errors

### Issue: Blank page after deployment
**Solution**: 
- Check browser console for errors
- Verify base path in `vite.config.ts` matches deployment
- Ensure all imports use correct paths

### Issue: Assets not loading (images, fonts)
**Solution**:
- Use relative paths for assets
- Place assets in `/public` folder or import them
- Check that figma:asset imports are working

---

## 📝 Best Practices

### Before Each Deployment:
1. Test locally: `npm run dev`
2. Build locally: `npm run build`
3. Preview build: `npm run preview`
4. Check for console errors
5. Test on mobile device/simulator
6. Commit with descriptive message

### Security:
- ✅ Never commit `.env` files
- ✅ Use environment variables for API keys
- ✅ Keep dependencies updated: `npm update`
- ✅ Review security alerts from GitHub

### Performance:
- Optimize images before committing
- Monitor bundle size: `npm run build` shows sizes
- Use lazy loading for images
- Enable compression on hosting platform

---

## 📞 Need Help?

### Resources:
- **Vercel Documentation**: https://vercel.com/docs
- **Netlify Documentation**: https://docs.netlify.com
- **GitHub Pages Guide**: https://pages.github.com
- **Vite Documentation**: https://vitejs.dev

### Quick Support:
- Check GitHub Issues for repository
- Refer to 3D_DESIGN_HANDOFF.md for 3D implementation questions
- Review README.md for project overview

---

## 🎉 Success!

Your site should now be live! Share it with:
- Team members
- Clients
- Social media

**Next Steps:**
1. Implement 3D interactive elements (see 3D_DESIGN_HANDOFF.md)
2. Add real content and contact information
3. Set up custom domain
4. Configure SEO meta tags
5. Add social media integration
6. Enable analytics

---

**Last Updated**: March 28, 2026  
**Version**: 1.0.0  
**Status**: Ready for Deployment 🚀
