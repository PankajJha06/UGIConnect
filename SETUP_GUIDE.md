# UGIConnect - CMS Integration Setup Guide

## 🎉 What We've Accomplished

We've successfully transformed your static website into a **dynamic, CMS-powered application** using the JAMstack architecture. Here's what's been set up:

### ✅ Project Structure Created
```
UGIConnect/
├── src/
│   ├── _data/              # JSON data files
│   │   ├── events.json
│   │   ├── announcements.json
│   │   └── gallery.json
│   ├── _includes/          # Reusable templates
│   │   └── base.njk
│   ├── admin/              # CMS admin panel
│   │   ├── index.html
│   │   └── config.yml
│   ├── images/             # All your images
│   ├── index.njk           # Home page template
│   ├── events.njk          # Events page template
│   ├── announcements.njk   # Announcements page template
│   ├── gallery.njk         # Gallery page template
│   ├── procedures.njk      # Procedures page template
│   ├── styles.css
│   └── script.js
├── .eleventy.js            # Eleventy configuration
└── package.json            # Node.js dependencies
```

### ✅ Data Extracted & Structured
All your hardcoded content has been moved to JSON files:
- **Events**: 4 events with title, date, description, location, and images
- **Announcements**: 5 announcements with tags and dates
- **Gallery**: 6 event categories with multiple photos each

### ✅ Templates Created
- Dynamic Nunjucks templates that automatically pull data from JSON files
- Reusable base layout with header and footer
- No more manual HTML editing needed!

### ✅ Admin Panel Configured
- Decap CMS (formerly Netlify CMS) setup complete
- Configuration file ready for managing Events, Announcements, and Gallery
- Admin interface will be accessible at `/admin/` once deployed

---

## 🚀 Next Steps to Complete Setup

### Step 1: Install Node.js
**You need to install Node.js first** (it's not currently installed on your system).

1. Go to https://nodejs.org/
2. Download the **LTS version** (recommended for most users)
3. Run the installer and follow the prompts
4. Restart your terminal/command prompt after installation

### Step 2: Install Dependencies
Once Node.js is installed, open a terminal in your project folder and run:

```bash
cd "C:\Users\Rajat\OneDrive\Desktop\UGIConnect"
npm install
```

This will install Eleventy and all required packages.

### Step 3: Build Your Site Locally
Test that everything works:

```bash
npx @11ty/eleventy
```

This will generate your website in the `public/` folder.

### Step 4: Run Local Development Server
To preview your site with live reload:

```bash
npx @11ty/eleventy --serve
```

Then open your browser to `http://localhost:8080`

---

## 📤 Deploying to Netlify

### Option A: Deploy via GitHub (Recommended)

1. **Create a GitHub Repository**
   - Go to https://github.com/new
   - Create a new repository (e.g., "UGIConnect")
   - Don't initialize with README

2. **Push Your Code to GitHub**
   ```bash
   cd "C:\Users\Rajat\OneDrive\Desktop\UGIConnect"
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/UGIConnect.git
   git push -u origin main
   ```

3. **Connect to Netlify**
   - Go to https://app.netlify.com/
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and select your repository
   - Build settings:
     - **Build command**: `npx @11ty/eleventy`
     - **Publish directory**: `public`
   - Click "Deploy site"

4. **Enable Netlify Identity** (for admin login)
   - In your Netlify site dashboard, go to "Site settings" → "Identity"
   - Click "Enable Identity"
   - Under "Registration preferences", select "Invite only"
   - Under "Services" → "Git Gateway", click "Enable Git Gateway"

5. **Invite Yourself as Admin**
   - Go to "Identity" tab
   - Click "Invite users"
   - Enter your email address
   - Check your email and accept the invitation

### Option B: Deploy via Netlify Drop (Quick Test)

1. Build your site locally:
   ```bash
   npx @11ty/eleventy
   ```

2. Go to https://app.netlify.com/drop
3. Drag and drop the `public/` folder
4. Your site will be live instantly!

**Note**: This method won't have CMS functionality. Use GitHub method for full features.

---

## 🎨 How to Use the Admin Panel

Once deployed with Netlify Identity enabled:

1. Go to `https://your-site-name.netlify.app/admin/`
2. Log in with your invited email
3. You'll see three sections:
   - **Events**: Add/edit/delete events
   - **Announcements**: Manage announcements
   - **Gallery**: Upload photos and organize by category

4. When you save changes:
   - Decap CMS commits to your GitHub repo
   - Netlify automatically rebuilds your site
   - Changes go live in ~1 minute!

---

## 📝 Adding Content via Admin Panel

### Adding a New Event
1. Go to Admin → Events
2. Click "Add Event"
3. Fill in:
   - Title (e.g., "Spring Festival 2026")
   - Date (e.g., "March 15, 2026")
   - Description
   - Location
   - Upload an image
4. Click "Publish"

### Adding an Announcement
1. Go to Admin → Announcements
2. Click "Add Announcement"
3. Fill in title, date, description
4. Optionally add tags (e.g., "Urgent")
5. Click "Publish"

### Adding Gallery Photos
1. Go to Admin → Gallery
2. Select a category or create a new one
3. Upload multiple images
4. Click "Publish"

---

## 🔧 Troubleshooting

### "npm is not recognized"
→ You need to install Node.js (see Step 1 above)

### Build fails with template errors
→ Check that all JSON files are valid (no trailing commas, proper quotes)

### Images not showing
→ Make sure images are in `src/images/` folder and paths start with `/images/`

### Admin panel shows "Error loading config"
→ Check `src/admin/config.yml` for syntax errors (YAML is indent-sensitive)

---

## 🎯 Benefits of This Setup

✅ **No More Manual HTML Editing**: Update content via a user-friendly interface  
✅ **Automatic Deployment**: Changes go live automatically  
✅ **Version Control**: Every change is tracked in Git  
✅ **Free Hosting**: Netlify free tier is generous  
✅ **Fast & Secure**: Static site = lightning fast, no server vulnerabilities  
✅ **Scalable**: Add more content types easily by editing `config.yml`

---

## 📚 Resources

- **Eleventy Docs**: https://www.11ty.dev/docs/
- **Decap CMS Docs**: https://decapcms.org/docs/
- **Netlify Docs**: https://docs.netlify.com/
- **Nunjucks Template Docs**: https://mozilla.github.io/nunjucks/

---

## 🆘 Need Help?

If you encounter any issues during setup:
1. Check the error message carefully
2. Verify Node.js is installed: `node --version`
3. Ensure you're in the correct directory
4. Try deleting `node_modules/` and running `npm install` again

---

**Good luck with your deployment! 🚀**
