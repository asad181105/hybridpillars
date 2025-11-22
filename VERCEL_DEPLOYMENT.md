# Vercel Deployment Guide

## Pre-Deployment Checklist

✅ All dependencies installed  
✅ No linting errors  
✅ TypeScript compilation passes  
✅ All environment variables documented  
✅ Public assets in place (hp_logo.png, image.png)  

## Step 1: Environment Variables Setup

Before deploying, you need to set up EmailJS environment variables in Vercel:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

**Important:** 
- Use `NEXT_PUBLIC_` prefix for client-side variables
- Add these for **Production**, **Preview**, and **Development** environments
- Get these values from your EmailJS dashboard at https://www.emailjs.com/

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click **"New Project"**
4. Import your repository
5. Vercel will auto-detect Next.js
6. Add environment variables (from Step 1)
7. Click **"Deploy"**

### Option B: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

## Step 3: Post-Deployment Verification

After deployment, verify:

1. ✅ Homepage loads correctly
2. ✅ All pages are accessible:
   - `/` - Home
   - `/contact` - Contact page
   - `/get-in-touch` - Get in touch page
   - `/admin` - Admin dashboard
   - `/agents` - Agents page
   - `/solutions` - Solutions page
   - `/pricing` - Pricing page
   - `/about-us` - About page

3. ✅ Forms work:
   - Submit a test form on `/contact`
   - Check `/admin` to see the submission
   - Verify email is received via EmailJS

4. ✅ Images load:
   - Logo appears in navbar and footer
   - Hero image displays correctly
   - Favicon shows in browser tab

5. ✅ Phone number and location:
   - Phone: +91 8247579990
   - Location: Edventure Park MasabTank Hyderabad

## Step 4: Custom Domain (Optional)

1. Go to **Settings** → **Domains** in Vercel
2. Add your custom domain
3. Follow DNS configuration instructions
4. SSL certificate is automatically provisioned

## Troubleshooting

### Build Fails

- Check that all dependencies are in `package.json`
- Verify TypeScript compilation: `npm run build`
- Check for missing environment variables

### Forms Not Sending Emails

- Verify EmailJS environment variables are set in Vercel
- Check EmailJS dashboard for service status
- Test EmailJS template with sample data
- Check browser console for errors

### Images Not Loading

- Verify files exist in `public/` folder:
  - `hp_logo.png`
  - `image.png`
- Check image paths in code (should start with `/`)

### Admin Dashboard Not Showing Data

- Admin dashboard uses localStorage (client-side only)
- Data is stored per browser/device
- This is expected behavior for localStorage

## Performance Optimization

Vercel automatically optimizes:
- ✅ Next.js Image optimization
- ✅ Code splitting
- ✅ Static page generation where possible
- ✅ Edge network caching

## Monitoring

- Check **Analytics** tab in Vercel dashboard
- Monitor **Functions** for serverless function logs
- Use **Speed Insights** for performance metrics

## Support

For issues:
1. Check Vercel deployment logs
2. Review browser console for client-side errors
3. Verify environment variables are set correctly
4. Test locally with `npm run build` first

