# Bee Altitude Website

Your professional event management website. Just add your logo, photos, and videos!

## 🚀 Quick Start

```bash
cd event-starter
npm install
npm start
```

## 📁 Add Your Media Files

### Step 1: Add Your Logo
Place your logo file in: `public/logo.png`

### Step 2: Add Hero Background Video (Optional)
Place a background video in: `public/videos/hero-bg.mp4`
Or an image in: `public/images/hero-poster.jpg`

### Step 3: Add Portfolio Images
Add your event photos to: `public/images/`
- event1.jpg
- event2.jpg
- event3.jpg
- ... etc

### Step 4: Add Portfolio Videos (Optional)
Add your event videos to: `public/videos/`

## 📝 Update Your Information

Edit the top of `src/App.js` to update:

```javascript
const SITE_CONFIG = {
  name: "Bee Altitude",
  phone: "+91 80737 97155",      // Your phone number
  email: "beealtitude@gmail.com", // Your email
  instagram: "https://instagram.com/beealtitude",
  location: "Bangalore, India",
};
```

## 🖼️ Update Portfolio Items

Edit the `PORTFOLIO` array in `src/App.js`:

```javascript
const PORTFOLIO = [
  { 
    id: 1, 
    type: "image",        // "image" or "video"
    category: "Events",   // Category name
    title: "My Event",    // Event title
    image: "/images/event1.jpg"  // Your image path
  },
  // Add more items...
];
```

## 🎨 Change Colors

Edit the CSS variables in `src/styles.css`:

```css
:root {
  --accent: #d4af37;  /* Gold color - change this */
}
```

## 📱 Features

- ✅ Mobile responsive
- ✅ Hero section with video background
- ✅ Services showcase
- ✅ Portfolio gallery with lightbox
- ✅ About section
- ✅ Testimonials
- ✅ Contact form (sends to WhatsApp)
- ✅ Instagram link
- ✅ Click-to-call phone button

## 📦 Build for Production

```bash
npm run build
```

Deploy the `build/` folder to any hosting service.
