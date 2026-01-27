# Orria Website Deployment Guide

## 🚀 Quick Deployment to GitHub Pages

### Prerequisites
- GitHub account
- Git installed on your machine
- GoDaddy account with orria.app domain

---

## Step-by-Step Deployment

### 1️⃣ Create GitHub Repository

```bash
# Navigate to the website folder
cd /path/to/orria-website

# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "feat: initial Orria website launch"

# Create main branch
git branch -M main
```

### 2️⃣ Push to GitHub

```bash
# Create a new repository on GitHub named 'orria-website'
# Then connect it:

git remote add origin https://github.com/YOUR_GITHUB_USERNAME/orria-website.git
git push -u origin main
```

### 3️⃣ Enable GitHub Pages

1. Go to: `https://github.com/YOUR_GITHUB_USERNAME/orria-website`
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes for deployment

✅ Your site is now live at: `https://YOUR_GITHUB_USERNAME.github.io/orria-website/`

---

## 🌐 Configure Custom Domain (orria.app)

### On GitHub

1. Go to **Settings** → **Pages**
2. Under **Custom domain**, type: `orria.app`
3. Click **Save**
4. ⚠️ **Don't check "Enforce HTTPS" yet** (wait for DNS)

### On GoDaddy DNS

1. Log in to [GoDaddy](https://godaddy.com)
2. Go to **My Products** → **DNS** for orria.app
3. Click **Manage DNS**

#### Delete Existing Records

Delete any existing A or CNAME records for @ and www.

#### Add New A Records

Click **Add** and create **4 A records**:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 600 seconds |
| A | @ | 185.199.109.153 | 600 seconds |
| A | @ | 185.199.110.153 | 600 seconds |
| A | @ | 185.199.111.153 | 600 seconds |

#### Add CNAME Record

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | YOUR_GITHUB_USERNAME.github.io | 1 hour |

**Important:** Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username!

4. Click **Save**

### Wait for DNS Propagation

⏰ DNS changes take time to propagate globally:
- **Minimum:** 15 minutes
- **Average:** 1-2 hours
- **Maximum:** 48 hours

Check propagation status: https://dnschecker.org/

### Enable HTTPS

Once DNS has propagated (wait at least 1 hour):

1. Go back to GitHub **Settings** → **Pages**
2. Check **"Enforce HTTPS"**
3. Wait for SSL certificate provisioning (5-20 minutes)

✅ Your site is now live at: `https://orria.app` 🎉

---

## 🔄 Updating the Website

Anytime you make changes to the website:

```bash
# Make your changes to HTML, CSS, or JS files

# Stage changes
git add .

# Commit with descriptive message
git commit -m "update: improved hero section"

# Push to GitHub
git push origin main
```

GitHub Pages will automatically rebuild and deploy in 1-2 minutes!

---

## 🎨 Adding Real App Screenshots

### Option 1: Manual Screenshots

1. Take screenshots on your iPhone (Cmd+Shift+4 on Simulator)
2. Create an `images/` folder in the website directory
3. Save screenshots as:
   - `screenshot-home.png`
   - `screenshot-decision.png`
   - `screenshot-ai.png`
4. Update `index.html` to reference these images

### Option 2: Device Mockups

Use online tools to create professional mockups:
- [Mockuphone](https://mockuphone.com/)
- [Shots.so](https://shots.so/)
- [Screely](https://screely.com/)
- [Cleanmock](https://cleanmock.com/)

---

## 📊 Verifying Deployment

### Check if Site is Live

```bash
# Check HTTP status
curl -I https://orria.app

# Should return: HTTP/2 200
```

### Check DNS Records

```bash
# Check A records
dig orria.app A

# Check CNAME record
dig www.orria.app CNAME
```

### Browser Tests

1. Open `https://orria.app` in:
   - Chrome
   - Safari
   - Firefox
   - Mobile browser
2. Check:
   - All images load
   - Links work
   - Smooth scrolling works
   - Responsive design on mobile

---

## 🐛 Common Issues & Solutions

### Issue: 404 Page Not Found

**Solution:**
- Check that CNAME file exists with correct domain
- Verify DNS records are correct
- Wait longer for DNS propagation
- Disable and re-enable custom domain in GitHub

### Issue: SSL/HTTPS Not Working

**Solution:**
- Wait 24 hours after DNS propagation
- Uncheck and re-check "Enforce HTTPS"
- Make sure all DNS records are correct
- Clear browser cache

### Issue: Site Shows Old Content

**Solution:**
- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Clear browser cache
- Wait 2-3 minutes for GitHub Pages to rebuild
- Check GitHub Actions for build status

### Issue: www Not Working

**Solution:**
- Verify CNAME record points to: `YOUR_GITHUB_USERNAME.github.io`
- Make sure you didn't include the repository name in CNAME
- Wait for DNS propagation

---

## 📈 Next Steps

### Add Analytics

```html
<!-- Add to <head> in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Add Favicon

1. Create favicon.ico (16x16, 32x32, 64x64)
2. Place in root directory
3. Add to `<head>`:
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
```

### Add Open Graph Tags

For better social media sharing:

```html
<meta property="og:title" content="Orria - Make Better Decisions Together">
<meta property="og:description" content="The world's first social decision-making platform">
<meta property="og:image" content="https://orria.app/og-image.png">
<meta property="og:url" content="https://orria.app">
<meta name="twitter:card" content="summary_large_image">
```

---

## 📞 Support

Need help? Contact:
- **Email:** hojae.hotherside@gmail.com
- **GitHub Issues:** Create an issue in the repository

---

**Estimated Total Setup Time:** 30-60 minutes (plus DNS propagation)

Good luck with your launch! 🚀✨
