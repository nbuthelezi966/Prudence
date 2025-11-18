# 🎨 Customization Guide

This guide will help you personalize and customize your portfolio case study.

## 🖼️ Changing Images

### Replace Background Images

All images use the `ImageWithFallback` component. To replace them:

**Option 1: Use Your Own Images**

1. Place your images in a `/public/images` folder
2. Update the `src` prop in components:

```tsx
<ImageWithFallback
  src="/images/your-image.jpg"
  alt="Description"
  className="w-full h-auto"
/>
```

**Option 2: Use Different Unsplash Images**

Go to [unsplash.com](https://unsplash.com), search for images, and use their URLs:

```tsx
<ImageWithFallback
  src="https://images.unsplash.com/photo-[ID]"
  alt="Description"
  className="w-full h-auto"
/>
```

### Current Images and Where to Find Them

| Component | Purpose | File |
|-----------|---------|------|
| Hero | Background | `/components/Hero.tsx` line 13 |
| Project Summary | Dashboard preview | `/components/ProjectSummary.tsx` line 58 |
| Problem Statement | Control room | `/components/ProblemStatement.tsx` line 25 |
| Design Thinking | Process images | `/components/DesignThinking.tsx` lines 11-39 |
| Wireframes | Sketch example | `/components/Wireframes.tsx` line 28 |
| High Fidelity | Laptop mockup | `/components/HighFidelity.tsx` line 67 |
| Prototype | Prototype mockup | `/components/Prototype.tsx` line 33 |
| Reflection | Designer portrait | `/components/Reflection.tsx` line 52 |

## 🎨 Changing Colors

### Current Color Scheme

- **Electric Green:** `#00FF66` - Primary actions, success
- **Emergency Red:** `#FF3333` - Critical alerts, errors
- **Warning Amber:** `#FFB800` - Warnings, attention
- **Radar Blue:** `#00D4FF` - Information, links
- **Deep Purple:** `#9D4EDD` - Accents

### How to Change

**Method 1: Find and Replace**

Use your code editor to find and replace color codes:
- Find: `#00FF66`
- Replace: `#YOUR_COLOR`

**Method 2: CSS Variables (Recommended)**

Add custom colors to `/styles/globals.css`:

```css
:root {
  --color-brand-primary: #00FF66;
  --color-brand-danger: #FF3333;
  --color-brand-warning: #FFB800;
}
```

Then use them in components:
```tsx
<div style={{ color: 'var(--color-brand-primary)' }}>
```

## ✏️ Updating Text Content

### Personal Information

**Update in these files:**

1. `/components/Hero.tsx` - Lines 37-41 (Your name and title)
2. `/components/Footer.tsx` - Lines 67-79 (About section)
3. `/components/Reflection.tsx` - Lines 57-62 (Designer info)

### Project Details

Update project-specific content in:
- `/components/ProjectSummary.tsx`
- `/components/ProblemStatement.tsx`
- `/components/Solutions.tsx`

### Metrics and Numbers

Search for these numbers to update:
- `100+` flights
- `65%` reduction
- `80%` satisfaction
- `90%` decision time
- `92%` task completion
- `12` testing sessions

## 🔤 Changing Fonts

### Using Google Fonts

1. Go to [fonts.google.com](https://fonts.google.com)
2. Select your font
3. Add to `/public/index.html`:

```html
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
```

4. Update `/styles/globals.css`:

```css
body {
  font-family: 'Inter', sans-serif;
}
```

## 🎭 Adding/Removing Sections

### Remove a Section

1. Open `/App.tsx`
2. Comment out or delete the component:

```tsx
// <Wireframes />  ← Section removed
```

### Add a New Section

1. Create new component in `/components/YourSection.tsx`
2. Import and add to `/App.tsx`:

```tsx
import { YourSection } from "./components/YourSection";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white dark">
      {/* ... existing sections ... */}
      <YourSection />
      {/* ... more sections ... */}
    </div>
  );
}
```

## 🔗 Adding Contact Links

### Update Social Links

In `/components/Footer.tsx`, find the social buttons and add your links:

```tsx
<Button 
  variant="ghost" 
  size="icon" 
  className="rounded-full hover:bg-[#00FF66]/10 hover:text-[#00FF66]"
  onClick={() => window.open('https://linkedin.com/in/YOUR_PROFILE', '_blank')}
>
  <Linkedin className="w-5 h-5" />
</Button>
```

### Add Email Functionality

```tsx
<Button 
  className="bg-[#00FF66] text-black hover:bg-[#00FF66]/90"
  onClick={() => window.location.href = 'mailto:your.email@example.com'}
>
  <Mail className="w-4 h-4 mr-2" />
  Get in Touch
</Button>
```

## 🎬 Adding Animations

### Using Motion (Framer Motion)

Install motion:
```bash
npm install motion
```

Add scroll animations:

```tsx
import { motion } from "motion/react";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Your content
</motion.div>
```

## 📱 Making It More Responsive

### Adjust Breakpoints

Tailwind breakpoints:
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px
- `2xl:` - 1536px

Example:
```tsx
<div className="text-2xl md:text-4xl lg:text-6xl">
  Responsive heading
</div>
```

### Test Responsiveness

1. Open browser DevTools (F12)
2. Click device toolbar icon
3. Test different screen sizes
4. Adjust classes as needed

## 🌐 SEO Optimization

### Update Meta Tags

In `/public/index.html`:

```html
<meta name="description" content="Your custom description here">
<meta name="keywords" content="your, keywords, here">
<meta property="og:title" content="Your Title">
<meta property="og:description" content="Your description">
<meta property="og:image" content="URL to preview image">
```

### Add Structured Data

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Prudence Buthelezi",
  "jobTitle": "UX/UI Designer",
  "url": "https://your-site.com"
}
</script>
```

## 🎥 Adding Video/GIFs

### Embed Video

```tsx
<video 
  autoPlay 
  loop 
  muted 
  playsInline 
  className="w-full h-auto rounded-lg"
>
  <source src="/videos/demo.mp4" type="video/mp4" />
</video>
```

### Add GIF

```tsx
<ImageWithFallback
  src="/images/demo.gif"
  alt="Demo animation"
  className="w-full h-auto"
/>
```

## 🔊 Accessibility Improvements

### Add ARIA Labels

```tsx
<button aria-label="Navigate to next section">
  <ArrowRight />
</button>
```

### Improve Keyboard Navigation

```tsx
<div 
  role="button" 
  tabIndex={0}
  onKeyPress={(e) => e.key === 'Enter' && handleClick()}
>
  Interactive element
</div>
```

### Color Contrast

Use tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) to ensure:
- Normal text: 4.5:1 ratio minimum
- Large text: 3:1 ratio minimum

## 📊 Adding Analytics

### Google Analytics

1. Get tracking ID from [analytics.google.com](https://analytics.google.com)
2. Add to `/public/index.html`:

```html
<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
</head>
```

### Vercel Analytics

Already configured! Just enable in Vercel dashboard.

## 🎯 Performance Tips

### Optimize Images

1. Use WebP format when possible
2. Compress images before uploading
3. Use appropriate sizes (don't use 4K for thumbnails)

### Lazy Load Images

```tsx
<ImageWithFallback
  src="/image.jpg"
  alt="Description"
  loading="lazy"
  className="w-full h-auto"
/>
```

### Code Splitting

React automatically code-splits, but you can do more:

```tsx
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./components/HeavyComponent'));

<Suspense fallback={<div>Loading...</div>}>
  <HeavyComponent />
</Suspense>
```

## 🎨 Design System Customization

### Create Your Own Components

Follow the pattern in `/components/ui/`:

```tsx
// /components/ui/your-component.tsx
export function YourComponent({ children, className }) {
  return (
    <div className={`base-styles ${className}`}>
      {children}
    </div>
  );
}
```

### Extend Existing Components

```tsx
import { Button } from "./components/ui/button";

<Button className="custom-additional-styles">
  Click me
</Button>
```

## 🐛 Common Issues & Fixes

### Images Not Showing

**Check:**
- URL is correct and accessible
- Using `ImageWithFallback` component
- Image path starts with `/` for public folder

### Styling Not Applied

**Check:**
- Import `/styles/globals.css` in main file
- Classes are spelled correctly
- No CSS conflicts

### Dark Mode Issues

**Ensure:**
- `dark` class on root div in `/App.tsx`
- Dark mode colors defined in globals.css

## 📞 Need Help?

If you get stuck:
1. Check browser console for errors (F12)
2. Review component file for typos
3. Test in incognito mode (eliminates cache issues)
4. Rebuild: `npm run build && npm run preview`

---

**Happy customizing! 🎨**

Make this portfolio uniquely yours.
