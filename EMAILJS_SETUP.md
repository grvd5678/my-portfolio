# EmailJS Setup Instructions

## 1. Install EmailJS Package
Run this command in your terminal:
```bash
npm install @emailjs/browser
```

## 2. Create EmailJS Account (Free)
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email

## 3. Set Up Email Service
1. Go to "Email Services" in dashboard
2. Click "Add New Service"
3. Choose Gmail (or your preferred email provider)
4. Connect your email account
5. Copy the SERVICE_ID (you'll need this)

## 4. Create Email Template
1. Go to "Email Templates" in dashboard
2. Click "Create New Template"
3. Use this template:

Subject: New Portfolio Contact from {{from_name}}

Body:
You have a new message from your portfolio!

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

4. Save and copy the TEMPLATE_ID

## 5. Get Your Public Key
1. Go to "Account" > "General"
2. Copy your PUBLIC_KEY

## 6. Add to Your Project
Create a file: src/config/emailjs.js
Add your credentials (I'll create this file next)
