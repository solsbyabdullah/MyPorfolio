# Portfolio Deployment Guide

This guide will help you deploy your React portfolio to various hosting platforms.

## Build for Production

First, create a production build:

```bash
npm run build
```

This creates a `dist` folder with optimized files ready for deployment.

## Deployment Options

### 1. Netlify (Recommended)

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign up
3. Click "New site from Git"
4. Connect your GitHub repository
5. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy!

### 2. Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up
3. Import your GitHub repository
4. Vercel automatically detects Vite settings
5. Deploy!

### 3. GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "homepage": "https://yourusername.github.io/MyPortfolio",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

### 4. Firebase Hosting

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Set public directory to `dist`
5. Deploy: `firebase deploy`

## Environment Variables

For production, you may need environment variables:

1. Create `.env.production` file
2. Add variables with `VITE_` prefix:
   ```
   VITE_API_URL=https://your-api.com
   VITE_CONTACT_EMAIL=your@email.com
   ```
3. Use in code: `import.meta.env.VITE_API_URL`

## Custom Domain

Most hosting platforms allow custom domains:

1. Purchase a domain
2. Add CNAME record pointing to your hosting platform
3. Configure in your hosting platform's dashboard

## Performance Tips

- Images are optimized automatically by Vite
- CSS is minified in production build
- JavaScript is bundled and minified
- Consider adding a CDN for global performance

## Updating Your Portfolio

1. Make changes to your code
2. Test locally: `npm run dev`
3. Build: `npm run build`
4. Deploy using your chosen method

Your portfolio is now ready for deployment! 🚀