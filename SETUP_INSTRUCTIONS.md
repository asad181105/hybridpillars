# Setup Instructions

## Logo Setup
1. Place your `hp_logo.png` file in the `public` folder at the root of the project
2. The logo will automatically be used in:
   - Navbar
   - Footer
   - Favicon (browser tab icon)

## EmailJS Setup
1. Create an account at https://www.emailjs.com/
2. Create a service and template in your EmailJS dashboard
3. Copy your Service ID, Template ID, and Public Key
4. Create a `.env.local` file in the root directory with:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```
5. Your EmailJS template should include these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{company}}` - Company name (if provided)
   - `{{message}}` - Message content
   - `{{urgency}}` - Urgency level (for get-in-touch form)
   - `{{type}}` - Form type (Contact Form or Get in Touch Form)
   - `{{timestamp}}` - Submission timestamp

## Admin Dashboard
- Access the admin dashboard at `/admin`
- View all form submissions, filter by status and type
- Update submission status (new, contacted, qualified, converted)
- Delete submissions
- Send emails directly to leads

## Form Submissions
- All form submissions are stored in browser localStorage
- Data persists across page refreshes
- Submissions are automatically sent via EmailJS
- Both Contact and Get-in-touch forms save data and send emails

## CTA Redirects
- All call-to-action buttons now redirect to `/contact`
- This includes:
  - "Try for free" buttons
  - "Book a demo" buttons
  - "Learn More" links
  - "Get Started" buttons
  - All pricing plan CTAs
  - All agent CTAs

