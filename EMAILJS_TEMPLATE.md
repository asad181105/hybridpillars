# EmailJS Template Setup

## Step 1: Create EmailJS Template

Go to your EmailJS dashboard (https://www.emailjs.com/) and create a new email template.

## Step 2: Use This HTML Template Code

Copy and paste this HTML template into your EmailJS template editor (EmailJS supports basic HTML):

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f4f4f4;
    }
    .container {
      background-color: #ffffff;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .header {
      background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
      color: white;
      padding: 20px;
      border-radius: 8px 8px 0 0;
      margin: -30px -30px 20px -30px;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .info-section {
      margin: 20px 0;
      padding: 15px;
      background-color: #f9fafb;
      border-left: 4px solid #dc2626;
      border-radius: 4px;
    }
    .info-row {
      margin: 10px 0;
      padding: 8px 0;
      border-bottom: 1px solid #e5e7eb;
    }
    .info-row:last-child {
      border-bottom: none;
    }
    .label {
      font-weight: bold;
      color: #374151;
      display: inline-block;
      min-width: 120px;
    }
    .value {
      color: #6b7280;
    }
    .message-box {
      background-color: #fef2f2;
      border: 1px solid #fecaca;
      border-radius: 6px;
      padding: 15px;
      margin: 20px 0;
    }
    .message-box h3 {
      margin-top: 0;
      color: #991b1b;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 2px solid #e5e7eb;
      text-align: center;
      color: #6b7280;
      font-size: 12px;
    }
    .urgency-badge {
      background-color: #fee2e2;
      color: #991b1b;
      padding: 6px 12px;
      border-radius: 6px;
      display: inline-block;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📧 New Form Submission - hybridpillars</h1>
    </div>

    <div class="info-section">
      <h2 style="margin-top: 0; color: #dc2626;">Form Type</h2>
      <div class="info-row">
        <span class="label">Type:</span>
        <span class="value">{{type}}</span>
      </div>
      <div class="info-row">
        <span class="label">Submitted:</span>
        <span class="value">{{timestamp}}</span>
      </div>
    </div>

    <div class="info-section">
      <h2 style="margin-top: 0; color: #dc2626;">Contact Information</h2>
      <div class="info-row">
        <span class="label">Name:</span>
        <span class="value">{{from_name}}</span>
      </div>
      <div class="info-row">
        <span class="label">Email:</span>
        <span class="value">
          <a href="mailto:{{from_email}}" style="color: #dc2626; text-decoration: none;">
            {{from_email}}
          </a>
        </span>
      </div>
      <div class="info-row">
        <span class="label">Company:</span>
        <span class="value">{{company}}</span>
      </div>
    </div>

    <div class="info-section">
      <h2 style="margin-top: 0; color: #dc2626;">Response Urgency</h2>
      <div class="urgency-badge">
        ⏰ {{urgency}}
      </div>
    </div>

    <div class="message-box">
      <h3>📝 Message / Query</h3>
      <p style="white-space: pre-wrap; margin: 0;">{{message}}</p>
    </div>

    <div class="footer">
      <p>This email was automatically generated from the hybridpillars website contact form.</p>
      <p>Reply directly to this email to contact the lead: <a href="mailto:{{from_email}}">{{from_email}}</a></p>
    </div>
  </div>
</body>
</html>
```

## Step 3: Plain Text Version (Recommended for Testing)

If you prefer a plain text email (recommended for initial testing), use this template:

```
===========================================
NEW FORM SUBMISSION - hybridpillars
===========================================

FORM TYPE: {{type}}
SUBMITTED: {{timestamp}}

CONTACT INFORMATION:
-------------------
Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}

RESPONSE URGENCY:
-----------------
{{urgency}}

MESSAGE / QUERY:
---------------
{{message}}

===========================================
Reply directly to: {{from_email}}
===========================================
```

## Step 4: Template Variables Mapping

Make sure your EmailJS template uses these exact variable names:

| Variable Name | Description | Example Value |
|--------------|-------------|---------------|
| `{{from_name}}` | Sender's full name | "John Doe" |
| `{{from_email}}` | Sender's email address | "john@example.com" |
| `{{company}}` | Company name (optional) | "Acme Corp" or "Not provided" |
| `{{message}}` | Message content | Full message text or topic |
| `{{urgency}}` | Response urgency | "Within 1 hour" or "Not specified" |
| `{{type}}` | Form type | "Contact Form" or "Get in Touch Form" |
| `{{timestamp}}` | Submission time | "12/25/2024, 3:45:30 PM" |

## Step 5: EmailJS Template Settings

1. **Subject Line:** Use this:
   ```
   New {{type}} Submission from {{from_name}}
   ```

2. **From Name:** 
   ```
   hybridpillars Website
   ```

3. **From Email:** Your verified email in EmailJS

4. **Reply To:** 
   ```
   {{from_email}}
   ```
   (This allows you to reply directly to the lead)

## Step 6: Test Your Template

After setting up:
1. Go to your website
2. Submit a test form on `/contact` or `/get-in-touch`
3. Check your email inbox
4. Verify all fields are populated correctly

## Troubleshooting

- If variables show as `{{variable_name}}` instead of values, check that variable names match exactly
- If emails aren't sending, verify your environment variables in `.env.local`
- Check EmailJS dashboard logs for error messages
- Make sure your EmailJS service is active and verified

