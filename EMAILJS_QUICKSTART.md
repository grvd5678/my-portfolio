# EmailJS Implementation - Quick Start Guide

## ✅ What's Been Implemented

Your Contact form now has:
1. **EmailJS Integration** - Professional email sending
2. **Dual Options** - "Send Message" (EmailJS) + "Email App" (mailto) buttons
3. **Status Messages** - Success/error feedback
4. **Loading State** - "Sending..." indicator

## 🚀 Setup Steps (5 minutes)

### Step 1: Install EmailJS
```bash
npm install @emailjs/browser
```

### Step 2: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "Sign Up" (it's FREE - 200 emails/month)
3. Verify your email

### Step 3: Add Email Service
1. In EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (recommended)
4. Click "Connect Account" and authorize
5. **Copy the SERVICE_ID** (looks like: service_xxxxxxx)

### Step 4: Create Email Template
1. Click "Email Templates"
2. Click "Create New Template"
3. Set Template Name: "Portfolio Contact"
4. In the template editor, use:

**Subject:**
```
New Portfolio Contact from {{from_name}}
```

**Content:**
```
You have a new message from your portfolio!

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

5. Click "Save"
6. **Copy the TEMPLATE_ID** (looks like: template_xxxxxxx)

### Step 5: Get Public Key
1. Click your profile icon → "Account"
2. Go to "General" tab
3. **Copy the PUBLIC_KEY** (looks like: xxxxxxxxxxxxxxxxx)

### Step 6: Update Config File
Open: `src/config/emailjs.js`

Replace with your actual values:
```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_xxxxxxx',    // Your Service ID
  TEMPLATE_ID: 'template_xxxxxxx',  // Your Template ID
  PUBLIC_KEY: 'xxxxxxxxxxxxxxxxx',  // Your Public Key
};
```

### Step 7: Test It!
1. Run your portfolio: `npm run dev`
2. Go to Contact section
3. Fill the form and click "Send Message"
4. Check your email!

## 🎯 How It Works

**Send Message Button (Primary):**
- Uses EmailJS to send email directly
- Shows success/error message
- Professional and reliable
- Works on all devices

**Email App Button (Backup):**
- Opens user's default email client
- Fallback option if EmailJS fails
- Pre-fills subject and message

## 📧 You'll Receive Emails At:
gouravdas350@gmail.com

## 🔧 Troubleshooting

**"Failed to send message" error?**
- Check if you've replaced the config values
- Verify your EmailJS account is active
- Check browser console for errors

**Not receiving emails?**
- Check spam folder
- Verify email service is connected in EmailJS dashboard
- Test the template in EmailJS dashboard

## 💡 Tips
- Free plan: 200 emails/month (plenty for portfolio)
- Emails arrive instantly
- You can customize the template anytime
- Add auto-reply in EmailJS settings

Need help? Check the console for error messages!
