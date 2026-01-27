# Orria Website

Official website for Orria - The world's first social decision-making platform.

## 🚀 Quick Start

This website is built with pure HTML, CSS, and JavaScript - no build process required! It's optimized for GitHub Pages hosting.

### Local Development

1. Clone this repository
2. Open `index.html` in your browser
3. Or use a local server:
   ```bash
   python -m http.server 8000
   # Then open http://localhost:8000
   ```

## 📦 Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to GitHub and create a new repository (e.g., `orria-website`)
2. Initialize it as public
3. Push this code to the repository:

```bash
git init
git add .
git commit -m "Initial commit: Orria website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/orria-website.git
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **main** branch
4. Click **Save**
5. Your site will be published at `https://YOUR_USERNAME.github.io/orria-website/`

### Step 3: Configure Custom Domain (orria.app)

#### On GitHub:

1. In **Settings** → **Pages**
2. Under "Custom domain", enter: `orria.app`
3. Click **Save**
4. Check "Enforce HTTPS" (after DNS propagates)

#### On GoDaddy:

1. Log in to your GoDaddy account
2. Go to **DNS Management** for orria.app
3. Add the following DNS records:

**A Records** (for apex domain):
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 600 seconds

Type: A
Name: @
Value: 185.199.109.153
TTL: 600 seconds

Type: A
Name: @
Value: 185.199.110.153
TTL: 600 seconds

Type: A
Name: @
Value: 185.199.111.153
TTL: 600 seconds
```

**CNAME Record** (for www subdomain):
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
TTL: 1 Hour
```

**Note:** Replace `YOUR_USERNAME` with your actual GitHub username.

4. **Save all DNS records**
5. Wait for DNS propagation (15 minutes to 48 hours, usually ~1 hour)

### Step 4: Verify Setup

1. Wait for DNS to propagate (check with: https://dnschecker.org/)
2. Visit `https://orria.app` - your site should load!
3. GitHub will automatically provision an SSL certificate

## 🎨 Customization

### Adding Real App Screenshots

1. Take screenshots of your iOS app
2. Place images in an `images/` folder
3. Update the phone mockup in `index.html`:
   - Replace the `.app-preview` content with actual screenshot images
   - Or use tools like [Mockuphone](https://mockuphone.com/) to create device mockups

### Updating Content

- **Hero section**: Edit lines 31-68 in `index.html`
- **Features**: Edit lines 71-143 in `index.html`
- **Pricing**: Edit lines 175-245 in `index.html`
- **Colors**: Modify CSS variables in `styles.css` lines 13-26
- **Logo**: Replace the ✨ emoji with your actual logo image

### Adding Analytics

Add Google Analytics or similar tracking to the `<head>` section of `index.html`.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔧 Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid & Flexbox
- **Vanilla JavaScript** - Smooth scrolling, animations, interactions
- **Google Fonts** - Inter font family
- **No frameworks** - Pure, lightweight code

## 🎯 Features

- ✅ Smooth scrolling navigation
- ✅ Intersection Observer animations
- ✅ Mobile-responsive design
- ✅ Premium Flighty-inspired design
- ✅ Optimized for performance
- ✅ SEO-friendly markup
- ✅ Fast loading (no dependencies)

## 📊 Performance

- **Load time**: < 1 second
- **Page size**: < 100 KB (without images)
- **Lighthouse score**: 95+ (Performance, Accessibility, Best Practices, SEO)

## 🐛 Troubleshooting

### Custom Domain Not Working

1. Verify DNS records are correct in GoDaddy
2. Check DNS propagation: https://dnschecker.org/
3. Make sure CNAME file contains only `orria.app` (no http://)
4. Wait 24-48 hours for full propagation
5. Clear browser cache

### HTTPS Certificate Issues

1. Wait for GitHub to provision the certificate (can take up to 24 hours)
2. Make sure "Enforce HTTPS" is checked in GitHub Pages settings
3. Try disabling and re-enabling custom domain in GitHub settings

### Site Not Updating

1. Clear GitHub Pages cache by disabling/enabling Pages
2. Hard refresh browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
3. Check GitHub Actions for build errors

## 📞 Support

For issues or questions:
- Email: hojae.hotherside@gmail.com
- Create an issue in this repository

## 📄 License

© 2026 Orria. All rights reserved.

---

**Made with ✨ by Hojae**
