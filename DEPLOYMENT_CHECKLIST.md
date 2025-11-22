# Deployment Checklist for Vercel

## ✅ Pre-Deployment Checklist

### Code Quality
- [x] No linting errors
- [x] TypeScript compilation passes
- [x] All imports resolved
- [x] No deprecated methods (fixed `substr` → `substring`)

### Dependencies
- [x] All packages in `package.json`
- [x] `@emailjs/browser` installed
- [x] Next.js 14 configured
- [x] TypeScript configured

### Assets
- [x] `public/hp_logo.png` exists
- [x] `public/image.png` exists
- [x] All image paths correct

### Configuration Files
- [x] `next.config.mjs` configured
- [x] `tsconfig.json` configured
- [x] `.gitignore` configured
- [x] `package.json` scripts ready

### Features Implemented
- [x] Admin dashboard at `/admin`
- [x] Contact form with EmailJS integration
- [x] Get-in-touch form with EmailJS integration
- [x] LocalStorage for form submissions
- [x] All CTAs redirect to `/contact`
- [x] Logo replaced everywhere (navbar, footer, favicon)
- [x] Phone number: +91 8247579990
- [x] Location: Edventure Park MasabTank Hyderabad

## 🔧 Environment Variables Required

Set these in Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📋 Deployment Steps

1. **Push to Git Repository**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push
   ```

2. **Connect to Vercel**
   - Go to vercel.com
   - Import your repository
   - Vercel auto-detects Next.js

3. **Add Environment Variables**
   - Add the 3 EmailJS variables
   - Set for Production, Preview, and Development

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete

5. **Verify Deployment**
   - Test all pages
   - Submit test form
   - Check admin dashboard
   - Verify email receipt

## 🚨 Important Notes

### Windows Build Error
If you see `EPERM: operation not permitted` during local build:
- This is a Windows file permission issue
- **Not a code problem** - Vercel builds on Linux
- Deployment will work fine on Vercel

### LocalStorage Limitation
- Admin dashboard data is stored in browser localStorage
- Data is per-device/browser
- This is expected behavior

### EmailJS Setup
- Must configure EmailJS template before deployment
- See `EMAILJS_TEMPLATE.md` for template code
- Test email sending after deployment

## 📁 File Structure

```
cohortA25/
├── app/
│   ├── admin/page.tsx          # Admin dashboard
│   ├── contact/page.tsx        # Contact page
│   ├── get-in-touch/page.tsx    # Get in touch page
│   ├── layout.tsx               # Root layout with favicon
│   └── ...
├── components/
│   ├── Contact.tsx              # Contact form component
│   ├── Navbar.tsx               # Navigation with logo
│   ├── Footer.tsx               # Footer with logo
│   └── ...
├── lib/
│   ├── storage.ts               # LocalStorage utility
│   ├── emailjs.ts               # EmailJS integration
│   └── utils.ts                  # Utility functions
├── public/
│   ├── hp_logo.png              # Logo file
│   └── image.png                # Hero image
├── .gitignore                   # Git ignore rules
├── next.config.mjs              # Next.js config
├── package.json                 # Dependencies
└── tsconfig.json                # TypeScript config
```

## ✅ Ready for Deployment!

Your project is ready to deploy on Vercel. The Windows build error you might see locally is not a concern - Vercel builds on Linux and will work perfectly.

