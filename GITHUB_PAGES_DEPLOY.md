# 🚀 Deploy AgriDoctor NEP to GitHub Pages

This guide will help you deploy your React app to GitHub Pages for FREE hosting.

---

## 📋 Prerequisites

- Git installed on your computer
- GitHub account created
- Project built successfully

---

## 🔧 Step 1: Configure for GitHub Pages

### Update vite.config.js

Add the `base` property for your repository:

```javascript
export default defineConfig({
  base: '/agridoctor-nep/', // Replace with your repo name
  plugins: [
    // ... rest of config
  ]
});
```

### Update package.json

Add deployment script:

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

### Install gh-pages package

```bash
npm install --save-dev gh-pages
```

---

## 📦 Step 2: Initialize Git Repository

Open terminal in your project folder:

```bash
# Navigate to project
cd "c:\Users\Aayush\Documents\New HAckaton project\Ghr aayesi\HTML\agridoctor-react"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - AgriDoctor NEP React App"
```

---

## 🌐 Step 3: Create GitHub Repository

### Option A: Using GitHub Website

1. Go to https://github.com
2. Click the **"+"** icon (top right) → **New repository**
3. Enter repository details:
   - **Repository name:** `agridoctor-nep`
   - **Description:** "AI-powered agriculture platform for Nepali farmers"
   - **Visibility:** Public (required for free GitHub Pages)
   - **DO NOT** initialize with README (you already have files)
4. Click **Create repository**

### Option B: Using GitHub CLI (if installed)

```bash
gh repo create agridoctor-nep --public --source=. --remote=origin
```

---

## 📤 Step 4: Push to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/agridoctor-nep.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

---

## 🚀 Step 5: Deploy to GitHub Pages

### Method 1: Using npm script (Recommended)

```bash
npm run deploy
```

This will:
1. Build your project (`npm run build`)
2. Create a `gh-pages` branch
3. Push the `dist` folder to that branch
4. Deploy automatically

### Method 2: Manual GitHub Settings

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

---

## 🌍 Step 6: Access Your Live Site

After deployment (takes 1-2 minutes), your site will be live at:

```
https://YOUR_USERNAME.github.io/agridoctor-nep/
```

**Example:**
- GitHub username: `johndoe`
- Repository: `agridoctor-nep`
- Live URL: `https://johndoe.github.io/agridoctor-nep/`

---

## 📝 Complete Example Workflow

Here's a complete example with username `aayush`:

```bash
# 1. Navigate to project
cd "c:\Users\Aayush\Documents\New HAckaton project\Ghr aayesi\HTML\agridoctor-react"

# 2. Install gh-pages
npm install --save-dev gh-pages

# 3. Initialize git (if needed)
git init

# 4. Stage all files
git add .

# 5. Commit
git commit -m "Initial commit"

# 6. Add remote (replace 'aayush' with your username)
git remote add origin https://github.com/aayush/agridoctor-nep.git

# 7. Push to main branch
git branch -M main
git push -u origin main

# 8. Deploy to GitHub Pages
npm run deploy
```

---

## 🔄 Update Workflow (After First Deployment)

When you make changes:

```bash
# 1. Make your code changes

# 2. Stage changes
git add .

# 3. Commit
git commit -m "Your commit message"

# 4. Push to main
git push

# 5. Deploy updated version
npm run deploy
```

---

## ⚙️ Configuration Files to Update

### 1. vite.config.js

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/agridoctor-nep/', // ADD THIS LINE - match your repo name
  plugins: [
    react(),
    VitePWA({
      // ... existing PWA config
    })
  ],
  // ... rest of config
});
```

### 2. package.json

Add these scripts:

```json
{
  "name": "agridoctor-nep",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "devDependencies": {
    "gh-pages": "^6.1.0"
    // ... other dependencies
  }
}
```

---

## 🐛 Troubleshooting

### Issue: Blank page after deployment

**Solution:** Ensure `base` in `vite.config.js` matches your repository name exactly.

```javascript
base: '/your-exact-repo-name/'
```

### Issue: CSS/JS not loading

**Solution:** Check that `base` path ends with `/`:

```javascript
base: '/agridoctor-nep/', // Correct ✅
base: '/agridoctor-nep',  // Wrong ❌
```

### Issue: 404 on page refresh

**Solution:** Add a `404.html` file in `public` folder that redirects to `index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/'"></meta>
  </head>
</html>
```

### Issue: gh-pages command not found

**Solution:** Install gh-pages:

```bash
npm install --save-dev gh-pages
```

### Issue: Permission denied

**Solution:** 
1. Set up GitHub authentication:
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```
2. Use Personal Access Token instead of password

---

## 🔐 GitHub Authentication

### Using Personal Access Token (Recommended)

1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Select scopes: `repo`, `workflow`
4. Copy the token
5. When pushing, use token as password:
   ```bash
   Username: your-github-username
   Password: ghp_YourPersonalAccessToken
   ```

### Or use GitHub CLI

```bash
# Install GitHub CLI
winget install GitHub.cli

# Authenticate
gh auth login

# Then push normally
git push
```

---

## 📊 Monitoring Deployment

### Check deployment status:

1. Go to your repository on GitHub
2. Click **Actions** tab
3. You'll see deployment workflow running
4. Wait for green checkmark ✅

### View deployment:

1. Go to **Settings** → **Pages**
2. You'll see: "Your site is live at https://..."
3. Click the link to view

---

## 🎨 Custom Domain (Optional)

To use a custom domain:

1. Buy a domain (e.g., from Namecheap, GoDaddy)
2. Add `CNAME` file in `public` folder with your domain:
   ```
   agridoctor.com
   ```
3. Configure DNS settings:
   - Type: `A`
   - Host: `@`
   - Value: GitHub Pages IPs (check GitHub docs)
4. In GitHub Settings → Pages, add custom domain

---

## ✅ Quick Checklist

Before deploying:

- [ ] `base` path set in `vite.config.js`
- [ ] `deploy` script added to `package.json`
- [ ] `gh-pages` installed
- [ ] Git repository initialized
- [ ] GitHub repository created
- [ ] Remote added correctly
- [ ] Code pushed to `main` branch
- [ ] Run `npm run deploy`
- [ ] Wait 1-2 minutes
- [ ] Visit your GitHub Pages URL
- [ ] 🎉 Celebrate!

---

## 🆚 GitHub Pages vs Vercel

| Feature | GitHub Pages | Vercel |
|---------|-------------|--------|
| Cost | Free | Free |
| Setup | Manual config | Auto-detect |
| Deploy | npm script | Git push |
| Custom domain | Yes | Yes |
| Analytics | No | Yes |
| Serverless | No | Yes |
| Preview deploys | No | Yes |
| Build time | Slower | Faster |

**Recommendation:** 
- **GitHub Pages:** Simple, free, no account needed
- **Vercel:** Better DX, faster, more features

---

## 📚 Additional Resources

- GitHub Pages Docs: https://pages.github.com
- Vite Deployment: https://vitejs.dev/guide/static-deploy.html
- gh-pages npm: https://www.npmjs.com/package/gh-pages

---

## 🎉 Success!

Your AgriDoctor NEP app is now live and accessible worldwide! 🌍

**Share your link:**
```
https://YOUR_USERNAME.github.io/agridoctor-nep/
```

---

Made with ❤️ for Nepali Farmers
