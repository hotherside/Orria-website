# ✅ Website Privacy & Support Pages Added

## What Was Done

I've added two new pages to your Orria website:

### 1. Privacy Policy Page
- **URL**: `https://[your-github-pages-url]/Orria-website/privacy`
- **Path**: `orria_website/app/privacy/page.tsx`
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
- **URL**: `https://[your-github-pages-url]/Orria-website/support`
- **Path**: `orria_website/app/support/page.tsx`
- Comprehensive FAQ covering:
  - What is Orria
  - Account creation
  - Pricing information
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
https://[your-github-username].github.io/Orria-website/privacy
```

Use this Support URL:

```
https://[your-github-username].github.io/Orria-website/support
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
- Privacy: `https://[username].github.io/Orria-website/privacy`
- Support: `https://[username].github.io/Orria-website/support`

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
- orria_website/app/privacy/page.tsx
- orria_website/app/support/page.tsx

Modified:
- orria_website/components/Footer.tsx (updated links)

Built:
- orria_website/out/ (static site ready for deployment)
```

## Privacy Policy Summary

The privacy policy is comprehensive and covers:
- ✅ Data collection transparency
- ✅ Third-party services (Supabase, OpenAI, RevenueCat)
- ✅ User rights under GDPR/CCPA
- ✅ Children's privacy (COPPA compliance)
- ✅ AI data processing disclosure
- ✅ Contact information for data requests

This meets Apple's App Store requirements and privacy regulations.

---

**Ready for submission!** Once you deploy the website, you'll have professional privacy and support pages that Apple reviewers can verify.
