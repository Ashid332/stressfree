# 🚀 Quick Start: Push to GitHub

Follow these commands in order to push your project to GitHub.

## Prerequisites
✅ Git installed on your computer  
✅ GitHub repository created at: https://github.com/Ashid332/stressfree

---

## Commands (Copy & Paste)

### 1️⃣ Open Terminal
Navigate to your project folder:
```bash
cd /path/to/your/stressfree-project
```

### 2️⃣ Initialize Git (if needed)
```bash
git init
```

### 3️⃣ Add All Files
```bash
git add .
```

### 4️⃣ Commit Your Code
```bash
git commit -m "Initial commit: SFA landing page with logo and 3D design handoff"
```

### 5️⃣ Add GitHub Remote
```bash
git remote add origin https://github.com/Ashid332/stressfree.git
```

### 6️⃣ Rename Branch to Main
```bash
git branch -M main
```

### 7️⃣ Push to GitHub
```bash
git push -u origin main
```

---

## ✅ Verify Success

1. Go to: https://github.com/Ashid332/stressfree
2. You should see all your files!

---

## 🔐 If Authentication Fails

You'll need to authenticate with GitHub. Two options:

### Option A: Use Personal Access Token
1. Go to: GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Select scope: **`repo`** (full control of private repositories)
4. Generate token and copy it
5. When git asks for password, paste your token (not your GitHub password)

### Option B: Use SSH (More Secure)
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Add to SSH agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Copy public key
cat ~/.ssh/id_ed25519.pub

# Add to GitHub:
# Go to: GitHub Settings → SSH and GPG keys → New SSH key
# Paste your public key

# Update remote to use SSH
git remote set-url origin git@github.com:Ashid332/stressfree.git

# Try pushing again
git push -u origin main
```

---

## 📦 What's Included

Your GitHub repository will contain:

### ✅ Code Files
- All React components (Hero, About, Services, etc.)
- Styling files (Tailwind CSS)
- Configuration files

### ✅ Assets
- SFA logo (imported from Figma)
- Dev notes for 3D placeholders

### ✅ Documentation
- `README.md` - Project overview
- `3D_DESIGN_HANDOFF.md` - Detailed 3D implementation guide
- `DEPLOYMENT.md` - Full deployment instructions
- `GITHUB_QUICK_START.md` - This file

### ❌ Excluded (via .gitignore)
- `node_modules/` - Dependencies (too large)
- `dist/` - Build files (generated on deployment)
- `.env` - Environment variables (keep secret)

---

## 🌐 Next: Deploy Your Site

After pushing to GitHub, deploy your site with:

### Vercel (Easiest)
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Import repository: `Ashid332/stressfree`
4. Click Deploy
5. Done! Your site is live 🎉

See `DEPLOYMENT.md` for detailed instructions.

---

## 💡 Daily Workflow

After initial push, use these commands to update:

```bash
# Make changes to your code...

# Stage changes
git add .

# Commit with message
git commit -m "Updated hero section"

# Push to GitHub
git push origin main
```

Vercel/Netlify will automatically redeploy!

---

## 🆘 Need Help?

- **Can't push?** → Check authentication (token or SSH)
- **Files missing?** → Check `.gitignore` file
- **Build fails?** → See `DEPLOYMENT.md` troubleshooting
- **3D questions?** → See `3D_DESIGN_HANDOFF.md`

---

**Ready? Let's push to GitHub! 🚀**

Copy the commands from Step 2-7 above and run them in your terminal.
