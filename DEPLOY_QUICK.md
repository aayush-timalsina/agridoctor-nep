# 🚀 Quick Deploy to GitHub Pages

## Step-by-Step Commands

### 1️⃣ **First Time Setup**

```bash
# Navigate to project
cd "c:\Users\Aayush\Documents\New HAckaton project\Ghr aayesi\HTML\agridoctor-react"

# Initialize git (if not done)
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit - AgriDoctor NEP React App"

# Create GitHub repository at: https://github.com/new
# Name it: agridoctor-nep

# Add remote (REPLACE 'your-username' with YOUR GitHub username)
git remote add origin https://github.com/your-username/agridoctor-nep.git

# Push to GitHub
git branch -M main
git push -u origin main

# Install gh-pages package
npm install

# Deploy to GitHub Pages
npm run deploy
```

### 2️⃣ **Update Base Path** (IMPORTANT!)

Before deploying, update `vite.config.js`:

```javascript
// Change this line:
base: process.env.VITE_BASE_PATH || '/',

// To this (replace with YOUR repository name):
base: '/agridoctor-nep/',
```

Then rebuild and deploy:
```bash
npm run deploy
```

### 3️⃣ **Future Updates**

```bash
# Make changes to your code

git add .
git commit -m "Update message"
git push
npm run deploy
```

---

## 🌐 Your Live URL

After deployment, visit:
```
https://YOUR-USERNAME.github.io/agridoctor-nep/
```

**Example:** If your GitHub username is `aayush123`:
```
https://aayush123.github.io/agridoctor-nep/
```

---

## ✅ Checklist

- [ ] Git installed
- [ ] GitHub account created
- [ ] Repository created on GitHub
- [ ] Updated `base` in `vite.config.js`
- [ ] Ran `npm install`
- [ ] Committed code: `git add . && git commit -m "message"`
- [ ] Added remote: `git remote add origin URL`
- [ ] Pushed: `git push -u origin main`
- [ ] Deployed: `npm run deploy`
- [ ] Waited 2 minutes
- [ ] Visited live URL
- [ ] 🎉 Success!

---

## 🔄 Alternative: Deploy to Vercel (Easier!)

```bash
npm i -g vercel
vercel login
vercel
```

Your site will be live at: `https://agridoctor-nep.vercel.app`

**Vercel is faster and easier - no configuration needed!**

---

For detailed instructions, see `GITHUB_PAGES_DEPLOY.md`
