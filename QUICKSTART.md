# 🚀 Quick Start Guide - AgriDoctor NEP

## ⚡ Get Started in 3 Minutes

### Step 1: Navigate to Project Directory
```bash
cd "c:\Users\Aayush\Documents\New HAckaton project\Ghr aayesi\HTML\agridoctor-react"
```

### Step 2: Install Dependencies
```bash
npm install
```

**What this installs:**
- React 18+ with all necessary libraries
- Vite for lightning-fast development
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for navigation
- Zustand for state management
- PWA plugin for offline support

### Step 3: Start Development Server
```bash
npm run dev
```

**Server will start at:** `http://localhost:5173`

---

## 📱 Test the Application

### Features to Try:

1. **Homepage** (`/`)
   - Modern hero section with animations
   - Statistics dashboard
   - Featured products
   - Testimonials

2. **Disease Detection** (`/detection`)
   - Upload crop images
   - Camera capture functionality
   - AI-powered analysis simulation
   - Treatment recommendations

3. **Marketplace** (`/marketplace`)
   - Browse products by category
   - Search functionality
   - Add to cart
   - Wishlist products

4. **Community** (`/community`)
   - View farming posts
   - Browse categories
   - Trending topics

5. **Authentication**
   - Login (`/login`)
   - Register (`/register`)
   - Farmer/Buyer role selection

6. **Dashboards**
   - Farmer Dashboard (`/farmer-dashboard`)
   - Buyer Dashboard (`/buyer-dashboard`)

7. **Dark Mode**
   - Toggle sun/moon icon in navbar
   - Persists across sessions
   - Smooth transitions

---

## 🎨 Customization Quick Tips

### Change Primary Color
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    600: '#YOUR_COLOR_HERE',
  }
}
```

### Add New Product
Edit `src/data/mockData.js`:
```javascript
{
  id: 9,
  nameNepali: 'तपाईंको बाली',
  nameEnglish: 'Your Crop',
  price: 100,
  emoji: '🌾',
  // ... other fields
}
```

### Modify Navigation
Edit `src/components/Navbar.jsx`:
```javascript
const navLinks = [
  { path: '/new-page', label: 'New Page', nepali: 'नयाँ' }
]
```

---

## 🏗️ Build for Production

```bash
npm run build
```

**Output:** Production-ready files in `dist/` folder

**Preview Production:**
```bash
npm run preview
```

---

## 🌐 Deploy to Vercel

### Method 1: Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Method 2: GitHub Integration
1. Push code to GitHub repository
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel auto-configures everything
6. Click "Deploy"
7. Done! ✨

**Your site will be live at:** `https://your-project-name.vercel.app`

---

## 📦 Project Structure Overview

```
agridoctor-react/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── layouts/       # Layout wrappers
│   ├── store/         # Zustand state management
│   ├── data/          # Mock data
│   ├── App.jsx        # Main app component
│   └── main.jsx       # Entry point
├── public/            # Static assets
├── index.html         # HTML template
├── package.json       # Dependencies
├── vite.config.js     # Vite configuration
└── tailwind.config.js # Tailwind configuration
```

---

## 🔧 Common Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run linter
```

---

## 🎯 Key Features Implemented

✅ Modern React 18+ with Hooks  
✅ Vite for fast development  
✅ Tailwind CSS - fully responsive  
✅ Framer Motion animations  
✅ React Router v6 navigation  
✅ Zustand state management  
✅ Dark mode with persistence  
✅ PWA ready (offline support)  
✅ SEO optimized (React Helmet)  
✅ Code splitting & lazy loading  
✅ Mobile-first design  
✅ Production-ready architecture  

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173 (Windows)
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Or use different port
npm run dev -- --port 3000
```

### Dependencies Not Installing
```bash
# Clear cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear dist folder
rm -rf dist

# Rebuild
npm run build
```

---

## 📚 Learn More

- **React:** https://react.dev/
- **Vite:** https://vitejs.dev/
- **Tailwind CSS:** https://tailwindcss.com/
- **Framer Motion:** https://www.framer.com/motion/
- **React Router:** https://reactrouter.com/
- **Zustand:** https://github.com/pmndrs/zustand

---

## 💡 Tips for Development

1. **Hot Module Replacement (HMR)**
   - Edit any file and see changes instantly
   - No need to refresh browser

2. **React DevTools**
   - Install React DevTools browser extension
   - Inspect component hierarchy and state

3. **Tailwind IntelliSense**
   - Install Tailwind CSS IntelliSense extension in VS Code
   - Get autocomplete for Tailwind classes

4. **Lighthouse**
   - Run Lighthouse audit in Chrome DevTools
   - Check performance, accessibility, SEO scores

---

## 🎉 You're Ready!

Your modern, production-ready React application is all set up!

**Next Steps:**
1. Explore the application
2. Customize to your needs
3. Build awesome features
4. Deploy to Vercel
5. Share with the world! 🚀

**Questions?** Check README.md for detailed documentation.

---

Made with ❤️ for Nepali Farmers
