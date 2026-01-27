This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on GitHub Pages

This project is configured to deploy to GitHub Pages using GitHub Actions.

### Setup Instructions

1. Push your changes to GitHub.
2. Go to your repository settings on GitHub.
3. Scroll down to the "Pages" section (or "Actions" -> "General" -> "Workflow permissions" to ensure GITHUB_TOKEN has write permissions).
4. In "Pages" settings, under "Build and deployment", select **GitHub Actions** as the source.
5. The `Deploy Next.js site to Pages` workflow will run automatically on push to `main`.

### Local Development

Since we are using `basePath: "/Orria-website"` for production deployment, you might need to access the site at `http://localhost:3000/Orria-website` locally, or temporarily disable `basePath` in `next.config.ts`.
