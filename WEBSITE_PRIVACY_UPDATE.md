# ✅ Website Privacy & Support Pages Added

## What Was Done

I've added two new pages to your Orria website:

### 1. Privacy Policy Page
- **URL**: `https://orria.app/privacy`
- **Path**: `app/privacy/page.tsx`
- Complete, professional privacy policy covering:
  - Information collection (email, name, user content)
  - How data is used
  - AI processing disclosure
  - Data storage and security (Supabase)
  - Data sharing policies
  - User rights (access, delete, export)
  - Children's privacy
  - Contact information

### 2. Support Page
- **URL**: `https://orria.app/support`
- **Path**: `app/support/page.tsx`
- Comprehensive FAQ covering:
  - What is Orria
  - Account creation
  - Pricing: Free tier and Pro ($9.99 USD/month)
  - AI features
  - Privacy settings
  - Account deletion
  - Subscription cancellation
  - Troubleshooting
  - Reporting content
  - Feature suggestions

### 3. Footer Updated
- Updated footer links to point to `/privacy` and `/support`
- Changed "Company" section to "Support" section
- Added proper navigation

## For App Store Connect

Use this Privacy Policy URL in App Store Connect:

```
https://orria.app/privacy
```

Use this Support URL:

```
https://orria.app/support
```

Or use the email directly:
```
mailto:support@orria.app
```

## Email Addresses Referenced

The privacy policy and support pages reference:
- **Privacy inquiries**: `privacy@orria.app`
- **Support**: `support@orria.app`

**Note**: These email addresses need to be set up, or you can replace them with your actual email address.

## Next Steps

### 1. Deploy to GitHub Pages

The static files are already built in `orria_website/out/`. To deploy:

```bash
cd orria_website
git add .
git commit -m "Add privacy policy and support pages"
git push origin main
```

Make sure GitHub Pages is enabled in your repo settings.

### 2. Verify URLs Work

After deploying, test these URLs:
- Privacy: `https://orria.app/privacy`
- Support: `https://orria.app/support`

### 3. Update App Store Connect

In App Store Connect → App Information:
- **Privacy Policy URL**: Use the privacy URL above
- **Support URL**: Use the support URL above

### 4. Set Up Email (Optional)

You can either:
- Set up `privacy@orria.app` and `support@orria.app` email addresses
- Or replace them in the pages with `hojae.hotherside@gmail.com`

## File Changes Made

```
Created:
- app/privacy/page.tsx
- app/support/page.tsx

Modified:
- components/Footer.tsx (updated links)
- components/Pricing.tsx (simplified to Free + Pro tiers, removed Pay as You Go, prices in USD)

Built:
- out/ (static site ready for deployment)
```

## Pricing

Two tiers only:
- **Free**: $0/forever — Unlimited private decisions, free AI summaries, 3 premium AI insights, community access, deadline reminders, outcome tracking
- **Pro**: $9.99 USD/month — Everything in Free plus unlimited premium AI insights, all 4 AI agent perspectives, anonymous posting, priority visibility boosts, advanced pattern analytics

## Privacy Policy Summary

The privacy policy is comprehensive and covers:
- Data collection transparency
- Third-party services (Supabase, OpenAI, RevenueCat)
- User rights under GDPR/CCPA
- Children's privacy (COPPA compliance)
- AI data processing disclosure
- Contact information for data requests

This meets Apple's App Store requirements and privacy regulations.

---

**Ready for submission!** Once you deploy the website, you'll have professional privacy and support pages that Apple reviewers can verify.
