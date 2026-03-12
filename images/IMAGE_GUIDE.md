# Image Guidelines for Sporian College Website

## 📸 Image Requirements

This guide provides information about the images used in the website and recommendations for replacing them with your own.

## Current Image Sources

The website currently uses placeholder images from Unsplash CDN. These are free to use and provide a professional look while developing.

### Hero Section

- **Current**: College campus image from Unsplash
- **Source**: `https://images.unsplash.com/photo-1562774053-701939374585`
- **Recommended Size**: 1920x1080px (Full HD)
- **Format**: JPG or WebP
- **Description**: Main hero background showing campus view

### Sports Gallery Images

1. **Cricket**
   - Source: `https://images.unsplash.com/photo-1540747913346-19e32dc3e97e`
   - Size: 600x400px

2. **Football**
   - Source: `https://images.unsplash.com/photo-1579952363873-27f3bade9f55`
   - Size: 600x400px

3. **Tug of War**
   - Source: `https://images.unsplash.com/photo-1552674605-db6ffd4facb5`
   - Size: 600x400px

4. **Kho Kho**
   - Source: `https://images.unsplash.com/photo-1461896836934-ffe607ba8211`
   - Size: 600x400px

5. **Athletics**
   - Source: `https://images.unsplash.com/photo-1552674605-db6ffd4facb5`
   - Size: 600x400px

6. **Basketball**
   - Source: `https://images.unsplash.com/photo-1546519638-68e109498ffc`
   - Size: 600x400px

### Testimonial Avatars

- **Source**: `https://i.pravatar.cc/150`
- **Size**: 150x150px (Square)
- **Format**: JPG or PNG
- **Description**: Student profile pictures

## 🎨 Image Specifications

### Hero Background

```
Width: 1920px
Height: 1080px
Format: JPG or WebP
Quality: High (80-90%)
File Size: < 500KB (optimized)
```

### Sport Gallery Images

```
Width: 600px
Height: 400px
Aspect Ratio: 3:2
Format: JPG or WebP
Quality: Good (70-80%)
File Size: < 150KB each
```

### Testimonial Avatars

```
Width: 150px
Height: 150px
Aspect Ratio: 1:1 (Square)
Format: JPG or PNG
Quality: Good (70-80%)
File Size: < 50KB each
```

## 📁 Adding Your Own Images

### Step 1: Prepare Your Images

1. Resize images to recommended dimensions
2. Optimize images using tools like:
   - TinyPNG (https://tinypng.com/)
   - Squoosh (https://squoosh.app/)
   - ImageOptim (Mac)
   - RIOT (Windows)

### Step 2: Add Images to Project

1. Place images in the `images/` folder
2. Use descriptive names:
   ```
   hero-background.jpg
   sport-cricket.jpg
   sport-football.jpg
   student-avatar-1.jpg
   ```

### Step 3: Update HTML

Replace Unsplash URLs with local paths:

**Before:**

```html
<img src="https://images.unsplash.com/photo-..." alt="Cricket" />
```

**After:**

```html
<img src="images/sport-cricket.jpg" alt="Cricket" />
```

## 🚀 Optimization Tips

### For Hero Background

- Use WebP format with JPG fallback
- Consider using multiple sizes for responsive design
- Add blur-up technique for better perceived performance

### For Gallery Images

- Implement lazy loading (already included in JS)
- Use srcset for responsive images
- Consider WebP format for better compression

### Example Responsive Image:

```html
<picture>
  <source srcset="images/sport-cricket.webp" type="image/webp" />
  <source srcset="images/sport-cricket.jpg" type="image/jpeg" />
  <img src="images/sport-cricket.jpg" alt="Cricket" />
</picture>
```

## 📷 Recommended Free Image Sources

If you need high-quality free images:

1. **Unsplash** (https://unsplash.com/)
   - Topic: Education, Sports, Students
   - License: Free to use

2. **Pexels** (https://pexels.com/)
   - Topic: Campus, Students, Events
   - License: Free to use

3. **Pixabay** (https://pixabay.com/)
   - Topic: University, Learning, Sports
   - License: Free to use

## 🎯 Image Checklist

Before deploying, ensure:

- [ ] All images are optimized
- [ ] File sizes are reasonable
- [ ] Alt text is descriptive
- [ ] Images are responsive
- [ ] Copyright/licenses are clear
- [ ] Images load quickly
- [ ] No broken image links
- [ ] Images look good on mobile

## 📝 Alt Text Guidelines

Good alt text examples:

- ✅ "Students playing cricket in college ground"
- ✅ "Mechanical engineering students working in workshop"
- ✅ "Annual tech fest 2026 participants"

Bad alt text examples:

- ❌ "Image 1"
- ❌ "Photo"
- ❌ "IMG_20260310.jpg"

## 🌐 CDN Recommendations

For better performance, consider using a CDN:

- Cloudinary
- imgix
- Amazon CloudFront
- Netlify CDN

## 📊 Image Performance Impact

| Image Type  | Size  | Load Time (Fast 3G) | Impact      |
| ----------- | ----- | ------------------- | ----------- |
| Optimized   | 100KB | ~1s                 | ✅ Good     |
| Standard    | 500KB | ~5s                 | ⚠️ Moderate |
| Unoptimized | 2MB+  | ~20s+               | ❌ Poor     |

## 🔧 Tools for Optimization

### Online Tools

- **TinyPNG**: PNG/JPG compression
- **Squoosh**: Advanced image optimization
- **Compressor.io**: Multi-format compression

### Command Line

```bash
# Convert to WebP
cwebp input.jpg -q 80 -o output.webp

# Optimize JPG
jpegoptim --max=80 input.jpg

# Optimize PNG
optipng -o7 input.png
```

### Photoshop

1. File → Export → Save for Web
2. Choose JPG, Quality: 60-80%
3. Resize to required dimensions
4. Save

## 📱 Responsive Images

Consider creating multiple sizes:

```
images/
├── hero-background-1920.jpg    (Desktop)
├── hero-background-1280.jpg    (Tablet)
├── hero-background-768.jpg     (Mobile)
└── hero-background-480.jpg     (Small Mobile)
```

Then use in HTML:

```html
<img
  src="images/hero-background-768.jpg"
  srcset="
    images/hero-background-480.jpg   480w,
    images/hero-background-768.jpg   768w,
    images/hero-background-1280.jpg 1280w,
    images/hero-background-1920.jpg 1920w
  "
  sizes="100vw"
  alt="Sporian College Campus"
/>
```

## ✨ Final Notes

- Always test images on different devices
- Monitor website performance after adding images
- Keep original high-resolution versions as backup
- Update this guide when adding new images
- Consider accessibility for visually impaired users

---

**Need Help?** Contact the Sporian Tech Team at info@sporiancollege.edu
