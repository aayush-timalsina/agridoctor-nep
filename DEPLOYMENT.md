# AgriDoctor NEP - Vercel Deployment Configuration

This file contains special deployment notes for Vercel.

## Automatic Deployment

Vercel will automatically:
- Detect this is a Vite project
- Install dependencies
- Run build command
- Deploy to global CDN

## Build Settings (Auto-detected)

```
Framework: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

## Environment Variables

If you need API keys or environment variables:

1. Go to Vercel Dashboard > Your Project > Settings > Environment Variables
2. Add variables like:
   - `VITE_API_URL`
   - `VITE_STRIPE_KEY` (if using payments)

## Custom Domain

To add custom domain:
1. Go to Project Settings > Domains
2. Add your domain
3. Configure DNS as instructed

## Performance

- Edge network deployment
- Automatic HTTPS
- Global CDN
- Instant cache invalidation

## Monitoring

Check deployment logs in Vercel Dashboard for any issues.
