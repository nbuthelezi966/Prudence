# 📁 File Index & Documentation

Complete reference guide for all files in this project.

---

## 🎯 Core Application Files

### `/App.tsx`
**Purpose:** Main application component  
**What it does:** Imports and renders all portfolio sections in order  
**Edit when:** Never (unless adding/removing sections)  
**Dependencies:** All component files

---

## 🧩 Component Files

### `/components/Hero.tsx`
**Purpose:** Cover page / Landing section  
**Content:**
- Project title: "Flight Manifest Manager"
- Aviation icons (plane, radio, globe)
- Designer name and role
- Animated grid background
**Edit for:** Your name, title, styling preferences

### `/components/ProjectSummary.tsx`
**Purpose:** Project overview section  
**Content:**
- Mission-critical operations explanation
- Global scale challenges
- Rapid decision-making needs
- Dashboard preview image
**Edit for:** Project description, icons, preview image

### `/components/ProblemStatement.tsx`
**Purpose:** Problem definition section  
**Content:**
- Visual storytelling with control room image
- Problem statement in highlighted box
- Pain points diagram with icons
**Edit for:** Problem details, pain points, images

### `/components/DesignThinking.tsx`
**Purpose:** 5-stage design process  
**Content:**
- Empathize, Define, Ideate, Prototype, Test
- Each stage with image, icon, description
- Process flow visualization
**Edit for:** Process details, stage descriptions, images

### `/components/Solutions.tsx`
**Purpose:** Feature showcase  
**Content:**
- 5 solution cards with icons
- Feature descriptions
- Mockup placeholders
- Integration note
**Edit for:** Solutions, features, descriptions

### `/components/AppFlow.tsx`
**Purpose:** Navigation diagram  
**Content:**
- 9 app screens in flow diagram
- Connection arrows
- Screen mockup placeholders
- Primary/critical flow descriptions
**Edit for:** Flow structure, screen names, connections

### `/components/Wireframes.tsx`
**Purpose:** Wireframe gallery  
**Content:**
- Featured wireframe image
- 9 wireframe mockups in grid
- Process validation note
**Edit for:** Wireframe images, screen names

### `/components/DesignSystem.tsx`
**Purpose:** Visual design system  
**Content:**
- Color palette (6 colors)
- Typography scale (6 levels)
- Component library (buttons, badges, tables, alerts)
- Visual elements (glows, grids, gradients)
**Edit for:** Colors, fonts, components

### `/components/HighFidelity.tsx`
**Purpose:** Polished UI showcase  
**Content:**
- Laptop mockup frame
- 4 feature screens
- Design annotations
- Impact metrics
**Edit for:** Screen images, features, metrics

### `/components/Prototype.tsx`
**Purpose:** Interactive demo section  
**Content:**
- Laptop frame with prototype
- 6 key interactions
- User flow (4 steps)
- Testing validation note
**Edit for:** Prototype link, interactions, flow

### `/components/Reflection.tsx`
**Purpose:** Learnings and impact  
**Content:**
- Designer portrait/image
- 4 key learnings
- Designer quote
- Impact metrics
- Final thoughts
**Edit for:** Your photo, learnings, quote, metrics

### `/components/Footer.tsx`
**Purpose:** Bio, skills, and contact  
**Content:**
- CTA section
- About/bio text
- Core skills grid
- Tools list
- Design process summary
- Social links
**Edit for:** Bio, skills, tools, social links

---

## 🎨 Style Files

### `/styles/globals.css`
**Purpose:** Global styles and CSS variables  
**Content:**
- Light theme colors (not used)
- Dark theme colors (active)
- Custom FMM colors (neon accents)
- Typography defaults
- Base styles
**Edit for:** Colors, fonts, spacing  
**Warning:** Don't delete dark theme variables

---

## 🌐 Public Files

### `/public/index.html`
**Purpose:** HTML template with meta tags  
**Content:**
- Meta tags for SEO
- Open Graph tags for social media
- Page title
- Favicon (airplane emoji)
**Edit for:** Title, description, keywords, OG tags

---

## ⚙️ Configuration Files

### `/vercel.json`
**Purpose:** Vercel deployment configuration  
**Content:**
- Build command
- Output directory
- Framework preset
- Routing rules
**Edit when:** Almost never (works as-is)

### `/package.json`
**Purpose:** NPM dependencies and scripts  
**Content:**
- Project metadata
- Dependencies (React, Tailwind, etc.)
- Build scripts
**Edit when:** Adding new packages only

### `/.gitignore`
**Purpose:** Git exclusions  
**Content:**
- node_modules
- dist
- .env files
- Editor configs
**Edit when:** Never

---

## 📚 Documentation Files

### `/README.md`
**Purpose:** Project overview and setup  
**Content:**
- Project description
- Features list
- Deployment instructions
- Local development
- Technologies used
**Edit for:** Adding your info, updating links

### `/QUICK_START.md`
**Purpose:** 5-minute launch guide  
**Content:**
- Deploy in 3 steps
- Customization quick wins
- File structure
- Next steps
**Edit when:** Never (reference only)

### `/DEPLOYMENT_GUIDE.md`
**Purpose:** Detailed deployment instructions  
**Content:**
- 3 deployment methods
- Step-by-step GitHub setup
- Vercel dashboard guide
- CLI instructions
- Troubleshooting
**Edit when:** Never (reference only)

### `/CUSTOMIZATION_GUIDE.md`
**Purpose:** How to customize everything  
**Content:**
- Change images
- Update colors
- Modify text
- Add/remove sections
- Change fonts
- Add animations
- SEO tips
- Performance tips
**Edit when:** Never (reference only)

### `/PORTFOLIO_CONTENT.md`
**Purpose:** Copy/paste content for marketing  
**Content:**
- Taglines
- Bio versions
- LinkedIn post template
- Skills lists
- Tools list
- Design process explanation
- Social media captions
- Elevator pitch
**Edit when:** Never (reference only)

### `/PROJECT_SUMMARY.md`
**Purpose:** Comprehensive project overview  
**Content:**
- Full project details
- Design process
- Impact metrics
- Technical stack
- Key learnings
- Next steps
**Edit when:** Never (reference only)

### `/FILE_INDEX.md`
**Purpose:** This file! Complete file reference  
**Edit when:** Never

---

## 🗂️ File Organization

```
project-root/
│
├── 📄 Configuration
│   ├── package.json          (Dependencies)
│   ├── vercel.json           (Deployment)
│   └── .gitignore            (Git exclusions)
│
├── 🎨 Source Code
│   ├── App.tsx               (Main app)
│   ├── components/           (All components)
│   │   ├── Hero.tsx
│   │   ├── ProjectSummary.tsx
│   │   ├── ProblemStatement.tsx
│   │   ├── DesignThinking.tsx
│   │   ├── Solutions.tsx
│   │   ├── AppFlow.tsx
│   │   ├── Wireframes.tsx
│   │   ├── DesignSystem.tsx
│   │   ├── HighFidelity.tsx
│   │   ├── Prototype.tsx
│   │   ├── Reflection.tsx
│   │   ├── Footer.tsx
│   │   ├── ui/               (ShadCN components)
│   │   └── figma/            (ImageWithFallback)
│   └── styles/
│       └── globals.css       (Global styles)
│
├── 🌐 Public
│   └── index.html            (HTML template)
│
└── 📚 Documentation
    ├── README.md             (Main readme)
    ├── QUICK_START.md        (Quick guide)
    ├── DEPLOYMENT_GUIDE.md   (Deploy guide)
    ├── CUSTOMIZATION_GUIDE.md(Customize guide)
    ├── PORTFOLIO_CONTENT.md  (Marketing copy)
    ├── PROJECT_SUMMARY.md    (Full summary)
    └── FILE_INDEX.md         (This file)
```

---

## 🎯 Quick Reference

### What to Edit First

**Personalize these files:**
1. `/components/Hero.tsx` - Your name
2. `/components/Footer.tsx` - Your bio, skills, links
3. `/components/Reflection.tsx` - Your photo, quote
4. `/public/index.html` - Meta tags, title

**Replace these images:**
1. Hero background
2. Dashboard preview
3. Control room photo
4. Designer portrait

**Update these links:**
1. Social media (Footer.tsx)
2. Portfolio URL (Footer.tsx)
3. Email address (Footer.tsx)

### What NOT to Edit

❌ `/components/ui/*` - ShadCN components (protected)  
❌ `/components/figma/ImageWithFallback.tsx` - Protected system file  
❌ `/.gitignore` - Works as-is  
❌ `/vercel.json` - Configured correctly  

### Safe to Delete

✅ All `.md` documentation files (after reading)  
✅ `/README.md` - Can rewrite your own  

**DO NOT DELETE:**
❌ Any `.tsx` files  
❌ `/styles/globals.css`  
❌ `/package.json`  
❌ `/vercel.json`  

---

## 🔍 Finding Specific Content

### "Where is X located?"

| Content | File | Line(s) |
|---------|------|---------|
| Your name | `/components/Hero.tsx` | 37-41 |
| Project title | `/components/Hero.tsx` | 32-34 |
| Problem statement | `/components/ProblemStatement.tsx` | 43-46 |
| Solution features | `/components/Solutions.tsx` | 8-41 |
| Color palette | `/components/DesignSystem.tsx` | 7-14 |
| Your bio | `/components/Footer.tsx` | 67-79 |
| Skills list | `/components/Footer.tsx` | 88-101 |
| Tools list | `/components/Footer.tsx` | 108-122 |
| Impact metrics | `/components/Reflection.tsx` | 102-118 |
| Designer quote | `/components/Reflection.tsx` | 131-137 |
| Social links | `/components/Footer.tsx` | 145-156 |

### "How do I change X?"

| Want to change | See guide |
|----------------|-----------|
| Colors | `CUSTOMIZATION_GUIDE.md` → "Changing Colors" |
| Images | `CUSTOMIZATION_GUIDE.md` → "Changing Images" |
| Text content | `CUSTOMIZATION_GUIDE.md` → "Updating Text" |
| Fonts | `CUSTOMIZATION_GUIDE.md` → "Changing Fonts" |
| Add section | `CUSTOMIZATION_GUIDE.md` → "Adding/Removing Sections" |

---

## 📊 File Statistics

**Total Files:** ~50+ files  
**Components:** 12 main components  
**Documentation:** 7 guide files  
**Configuration:** 4 config files  
**Lines of Code:** ~2,500+ lines  

**Time to Edit:**
- Quick personalization: 15 minutes
- Full customization: 1-2 hours
- Complete redesign: 3-5 hours

---

## 🚀 Deployment Checklist

Before deploying, ensure:

- [ ] Updated your name in Hero.tsx
- [ ] Updated bio in Footer.tsx
- [ ] Updated social links in Footer.tsx
- [ ] Reviewed all text content
- [ ] Replaced placeholder images (optional)
- [ ] Updated meta tags in index.html
- [ ] Tested locally (`npm run dev`)
- [ ] Built successfully (`npm run build`)

---

## 🆘 Emergency Quick Fixes

### Site looks broken?
→ Check `/styles/globals.css` is imported  
→ Ensure `dark` class on root div in `/App.tsx`

### Images not loading?
→ Check Unsplash URLs are accessible  
→ Ensure `ImageWithFallback` component is used

### Text too big/small?
→ Check Tailwind classes in component files  
→ Review typography in `/styles/globals.css`

### Colors wrong?
→ Search for hex codes (#00FF66) and replace  
→ Check dark theme in `/styles/globals.css`

---

## 💡 Pro Tips

**Version Control:**
- Commit after each major change
- Use descriptive commit messages
- Create branches for experiments

**Testing:**
- Test on mobile, tablet, desktop
- Check in multiple browsers
- Test with slow internet

**Optimization:**
- Compress images before adding
- Use WebP format when possible
- Minimize custom code additions

**Maintenance:**
- Keep dependencies updated
- Review Vercel build logs
- Monitor site performance

---

**Last Updated:** [Current Date]  
**Documentation Version:** 1.0  
**Maintainer:** Prudence Buthelezi

---

*This index covers all files in the project. For detailed information about any file, refer to the specific documentation guides.*
