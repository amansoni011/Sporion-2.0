# 🎓 Sporian College - Modern Website

A modern, responsive, and feature-rich college website built with pure HTML, CSS, and JavaScript. This website showcases a professional UI design with smooth animations and interactive features.

![Sporian College](https://img.shields.io/badge/Version-1.0.0-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 🎨 Design Features

- **Modern UI/UX Design** - Clean and professional interface
- **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- **Dark/Light Mode** - Toggle between themes with smooth transitions
- **Professional Color Palette** - Blue, white, and gold tones
- **Modern Typography** - Using Poppins font family

### 🚀 Interactive Features

- **Sticky Navigation Bar** - Stays at the top while scrolling
- **Smooth Scrolling** - Enhanced navigation experience
- **Scroll Progress Bar** - Visual indicator of scroll position
- **Page Loading Animation** - Engaging entry animation
- **Animated Counters** - Dynamic statistics display
- **Testimonial Slider** - Auto-playing carousel with manual controls
- **Lightbox Gallery** - Click to view images in full screen
- **Form Validation** - Real-time validation for contact form
- **Back to Top Button** - Quick navigation to page top
- **Scroll Animations** - Elements animate on scroll
- **Mobile-Friendly Menu** - Responsive hamburger menu
- **Parallax Effects** - Depth and motion effects

## 📁 Project Structure

```
Sporian2026/
│
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All CSS styles and animations
├── js/
│   └── script.js       # All JavaScript functionality
├── images/             # Image assets (placeholder folder)
└── README.md           # Project documentation
```

## 🎯 Sections

1. **Home/Hero Section**
   - Full-screen background image
   - Animated heading text
   - Call-to-action buttons
   - Scroll indicator

2. **About Section**
   - College history, mission, and vision cards
   - Animated statistics counters
   - Hover effects on cards

3. **Departments Section**
   - Computer Science
   - Mechanical Engineering
   - Civil Engineering
   - Electronics Engineering
   - Interactive hover animations
   - 3D tilt effect on cards

4. **Sports Gallery**
   - Cricket, Football, Tug of War, Kho Kho, Athletics, Basketball
   - Zoom effect on hover
   - Lightbox functionality
   - Smooth image transitions

5. **Events Section**
   - Tech Fest 2026
   - Cultural Fest
   - Sports Day
   - Event registration buttons
   - Animated event cards

6. **Testimonials**
   - Student testimonials slider
   - Auto-play with manual controls
   - Smooth transitions
   - Navigation dots

7. **Contact Section**
   - Contact form with validation
   - Contact information
   - Social media links
   - Google Maps integration

8. **Footer**
   - Quick links
   - Newsletter subscription
   - Social media links
   - Copyright information

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling and animations
  - CSS Grid & Flexbox
  - CSS Variables
  - CSS Animations & Transitions
  - Media Queries for responsiveness
- **JavaScript (ES6+)** - Interactive functionality
  - DOM Manipulation
  - Event Listeners
  - Intersection Observer API
  - Local Storage for theme preference
- **Font Awesome** - Icons
- **Google Fonts** - Poppins font family

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic text editor (VS Code recommended)
- Local server (optional but recommended)

### Installation

1. **Clone or Download the Project**

   ```bash
   git clone <repository-url>
   cd Sporian2026
   ```

2. **Open the Project**
   - Simply open `index.html` in your browser, or
   - Use a local server for better performance

3. **Using Live Server (Recommended)**
   - Install Live Server extension in VS Code
   - Right-click on `index.html`
   - Select "Open with Live Server"

## 📧 Contact Form Email Setup

The contact form now sends submissions to an email address using FormSubmit.

1. Open `index.html`.
2. Find the contact form element with `id="contactForm"`.
3. Update the `data-recipient-email` value to your email address.
4. Submit the form once and confirm the activation email from FormSubmit.

After activation, all valid contact form submissions will be delivered to the configured inbox.

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 992px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🎨 Color Palette

```css
Primary Blue:    #1e3a8a
Secondary Blue:  #3b82f6
Accent Gold:     #fbbf24
Text Dark:       #1f2937
Text Light:      #6b7280
White:           #ffffff
Light Background:#f9fafb
```

## 🌟 Key Features Explained

### Dark Mode Toggle

- Click the moon/sun icon in the navigation
- Theme preference is saved in localStorage
- Smooth transition between themes

### Animated Counters

- Counters animate when scrolled into view
- Displays student count, faculty, courses, and success rate
- Smooth counting animation

### Form Validation

- Real-time validation as you type
- Email format validation
- Required field validation
- Success/error notifications

### Lightbox Gallery

- Click any sport image to view in lightbox
- Press ESC or click outside to close
- Smooth fade-in animation

### Testimonial Slider

- Auto-plays every 5 seconds
- Manual navigation with arrow buttons
- Dot indicators for quick navigation
- Pauses on hover

## 📄 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 🔧 Customization

### Changing Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
  --primary-color: #1e3a8a;
  --secondary-color: #3b82f6;
  --accent-color: #fbbf24;
  /* Add your colors here */
}
```

### Adding Images

1. Place your images in the `images/` folder
2. Update image paths in `index.html`
3. Recommended image sizes:
   - Hero background: 1920x1080px
   - Sport images: 600x400px
   - Testimonial avatars: 150x150px

### Modifying Content

- All content is in `index.html`
- Simply find the section you want to edit
- Replace text, images, or links

## 📊 Performance Features

- Image lazy loading
- Debounced scroll events
- CSS animations (hardware-accelerated)
- Optimized DOM queries
- Efficient event handling

## 🔐 Security Features

- Form validation to prevent invalid submissions
- Context menu disabled on images
- No inline scripts
- Sanitized user inputs

## 📝 Future Enhancements

- [ ] Add backend integration for form submissions
- [ ] Implement student/faculty login portal
- [ ] Add blog section
- [ ] Create online admission system
- [ ] Add course catalog with search
- [ ] Integrate payment gateway
- [ ] Add alumni section
- [ ] Create virtual campus tour

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact Information

For any queries or suggestions:

- **Email**: info@sporiancollege.edu
- **Website**: [Sporian College](#)
- **Phone**: +91 98765 43210

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 👏 Acknowledgments

- Images from Unsplash
- Icons from Font Awesome
- Fonts from Google Fonts
- Inspiration from modern university websites

## 🎓 About Sporian College

Sporian College is committed to providing exceptional education and fostering innovation, leadership, and excellence in every student. Since 1975, we have been shaping futures and building dreams.

---

**Built with ❤️ by Sporian Tech Team**

_Last Updated: March 2026_
