/* ==========================================
   SPORIAN COLLEGE - INTERACTIVE FEATURES
   ========================================== */

// ==========================================
// 1. PAGE LOADING ANIMATION
// ==========================================
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-wrapper");
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 1500);
});

// ==========================================
// 2. SCROLL PROGRESS BAR
// ==========================================
window.addEventListener("scroll", () => {
  const scrollProgress = document.getElementById("scrollProgressBar");
  const windowHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;
  scrollProgress.style.width = scrolled + "%";
});

// ==========================================
// 3. STICKY NAVIGATION & TOP BAR HIDE
// ==========================================
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");
const topBar = document.querySelector(".top-bar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Hide top-bar on scroll, show back at top
  if (window.scrollY > 80) {
    topBar.classList.add("hidden");
    navbar.classList.add("top-bar-hidden");
  } else {
    topBar.classList.remove("hidden");
    navbar.classList.remove("top-bar-hidden");
  }
});

// ==========================================
// 4. SMOOTH SCROLLING & ACTIVE NAV LINKS
// ==========================================
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Remove active class from all links
    navLinks.forEach((l) => l.classList.remove("active"));

    // Add active class to clicked link
    link.classList.add("active");

    // Get target section
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    // Smooth scroll to section
    if (targetSection) {
      const navHeight = navbar.offsetHeight;
      const targetPosition = targetSection.offsetTop - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }

    // Close mobile menu if open
    const navMenu = document.getElementById("navMenu");
    const mobileToggle = document.getElementById("mobileMenuToggle");
    navMenu.classList.remove("active");
    mobileToggle.classList.remove("active");
  });
});

// Update active link on scroll
window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ==========================================
// 5. MOBILE MENU TOGGLE
// ==========================================
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const navMenu = document.getElementById("navMenu");

mobileMenuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  mobileMenuToggle.classList.toggle("active");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".nav-wrapper")) {
    navMenu.classList.remove("active");
    mobileMenuToggle.classList.remove("active");
  }
});

// ==========================================
// 6. DARK MODE TOGGLE
// ==========================================
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem("theme", "light");
  }
});

// ==========================================
// 7. ANIMATED COUNTERS
// ==========================================
const counters = document.querySelectorAll(".stat-number");
let countersAnimated = false;

const animateCounters = () => {
  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-target"));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60 FPS
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };

    updateCounter();
  });
};

// Trigger counters when in viewport
const observeCounters = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !countersAnimated) {
        animateCounters();
        countersAnimated = true;
      }
    });
  },
  { threshold: 0.5 },
);

const statsContainer = document.querySelector(".stats-container");
if (statsContainer) {
  observeCounters.observe(statsContainer);
}

// ==========================================
// 8. TESTIMONIAL SLIDER
// ==========================================
const testimonialCards = document.querySelectorAll(".testimonial-card");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const sliderDots = document.getElementById("sliderDots");
let currentSlide = 0;

// Create dots
testimonialCards.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(index));
  sliderDots.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

const showSlide = (index) => {
  testimonialCards.forEach((card) => card.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  testimonialCards[index].classList.add("active");
  dots[index].classList.add("active");
};

const nextSlide = () => {
  currentSlide = (currentSlide + 1) % testimonialCards.length;
  showSlide(currentSlide);
};

const prevSlide = () => {
  currentSlide =
    (currentSlide - 1 + testimonialCards.length) % testimonialCards.length;
  showSlide(currentSlide);
};

const goToSlide = (index) => {
  currentSlide = index;
  showSlide(currentSlide);
};

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

// Auto-play slider
let autoplayInterval = setInterval(nextSlide, 5000);

// Pause on hover
const testimonialSlider = document.querySelector(".testimonials-slider");
testimonialSlider.addEventListener("mouseenter", () => {
  clearInterval(autoplayInterval);
});

testimonialSlider.addEventListener("mouseleave", () => {
  autoplayInterval = setInterval(nextSlide, 5000);
});

// ==========================================
// 9. LIGHTBOX GALLERY
// ==========================================
const sportCards = document.querySelectorAll(".sport-card");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");

function openLightboxFromImg(img, caption) {
  lightboxImage.src = img.src;
  lightboxCaption.textContent = caption;
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

sportCards.forEach((card) => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img");
    const caption = card.querySelector("h3").textContent;
    openLightboxFromImg(img, caption);
  });
});

// Gallery section lightbox
const galleryItems = document.querySelectorAll(".gallery-item");
galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img");
    const caption = item.querySelector(".gallery-overlay span").textContent;
    openLightboxFromImg(img, caption);
  });
});

// Gallery filter tabs
const filterBtns = document.querySelectorAll(".gallery-filter-btn");
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.getAttribute("data-filter");
    galleryItems.forEach((item) => {
      if (filter === "all" || item.getAttribute("data-category") === filter) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

function closeLightbox() {
  lightbox.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Close lightbox with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.classList.contains("active")) {
    closeLightbox();
  }
});

// ==========================================
// 10. FORM VALIDATION
// ==========================================
const contactForm = document.getElementById("contactForm");
const formInputs = contactForm.querySelectorAll("input, textarea");

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validation functions
const validators = {
  name: (value) => {
    if (value.trim().length < 2) {
      return "Name must be at least 2 characters long";
    }
    if (!/^[a-zA-Z\s]+$/.test(value)) {
      return "Name should only contain letters";
    }
    return "";
  },
  email: (value) => {
    if (!emailRegex.test(value)) {
      return "Please enter a valid email address";
    }
    return "";
  },
  subject: (value) => {
    if (value.trim().length < 3) {
      return "Subject must be at least 3 characters long";
    }
    return "";
  },
  message: (value) => {
    if (value.trim().length < 10) {
      return "Message must be at least 10 characters long";
    }
    return "";
  },
};

// Real-time validation
formInputs.forEach((input) => {
  input.addEventListener("blur", () => {
    validateField(input);
  });

  input.addEventListener("input", () => {
    if (input.parentElement.classList.contains("error")) {
      validateField(input);
    }
  });
});

function validateField(field) {
  const fieldName = field.getAttribute("name");
  const fieldValue = field.value;
  const formGroup = field.parentElement;
  const errorMessage = formGroup.querySelector(".error-message");

  if (validators[fieldName]) {
    const error = validators[fieldName](fieldValue);

    if (error) {
      formGroup.classList.add("error");
      errorMessage.textContent = error;
      return false;
    } else {
      formGroup.classList.remove("error");
      errorMessage.textContent = "";
      return true;
    }
  }

  return true;
}

// Form submission
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  // Validate all fields
  formInputs.forEach((input) => {
    if (!validateField(input)) {
      isValid = false;
    }
  });

  if (isValid) {
    // Show success message
    showNotification(
      "Message sent successfully! We will get back to you soon.",
      "success",
    );

    // Reset form
    contactForm.reset();

    // Remove any error classes
    formInputs.forEach((input) => {
      input.parentElement.classList.remove("error");
    });
  } else {
    showNotification("Please fix the errors in the form.", "error");
  }
});

// Notification function
function showNotification(message, type) {
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.textContent = message;
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === "success" ? "#10b981" : "#ef4444"};
        color: white;
        padding: 20px 30px;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideInRight 0.5s ease;
    `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.5s ease";
    setTimeout(() => {
      notification.remove();
    }, 500);
  }, 3000);
}

// Add notification animations
const style = document.createElement("style");
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==========================================
// 11. BACK TO TOP BUTTON
// ==========================================
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ==========================================
// 12. SCROLL ANIMATIONS
// ==========================================
const scrollElements = document.querySelectorAll(
  ".about-card, .department-card, .sport-card, .event-card, .stat-box",
);

const elementInView = (el, offset = 100) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) - offset
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scroll-animate");
  element.classList.add("animate");
};

const hideScrollElement = (element) => {
  element.classList.remove("animate");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 100)) {
      displayScrollElement(el);
    }
  });
};

window.addEventListener("scroll", handleScrollAnimation);

// Initial check
handleScrollAnimation();

// ==========================================
// 13. NEWSLETTER FORM
// ==========================================
const newsletterForm = document.querySelector(".newsletter-form");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const email = emailInput.value;

    if (emailRegex.test(email)) {
      showNotification("Successfully subscribed to newsletter!", "success");
      emailInput.value = "";
    } else {
      showNotification("Please enter a valid email address.", "error");
    }
  });
}

// ==========================================
// 14. HERO SECTION PARALLAX EFFECT
// ==========================================
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// ==========================================
// 15. SECTION REVEAL ON SCROLL
// ==========================================
const revealSections = document.querySelectorAll("section");

const revealSection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

revealSections.forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(20px)";
  section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  sectionObserver.observe(section);
});

// ==========================================
// 16. DYNAMIC YEAR IN FOOTER
// ==========================================
const currentYear = new Date().getFullYear();
const yearElements = document.querySelectorAll(".footer-bottom p");
yearElements.forEach((element) => {
  if (element.textContent.includes("2026")) {
    element.textContent = element.textContent.replace("2026", currentYear);
  }
});

// ==========================================
// 17. PREVENT CONTEXT MENU ON IMAGES
// ==========================================
const images = document.querySelectorAll("img");
images.forEach((img) => {
  img.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
});

// ==========================================
// 18. PRELOAD IMAGES
// ==========================================
const preloadImages = () => {
  const imageSources = [
    "https://images.unsplash.com/photo-1562774053-701939374585?w=1920&h=1080&fit=crop",
  ];

  imageSources.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

preloadImages();

// ==========================================
// 19. DEPARTMENT CARD TILT EFFECT
// ==========================================
const departmentCards = document.querySelectorAll(".department-card");

departmentCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
  });
});

// ==========================================
// 20. EVENT REGISTRATION BUTTONS
// ==========================================
const eventButtons = document.querySelectorAll(".event-btn");

eventButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const eventTitle = button
      .closest(".event-card")
      .querySelector("h3").textContent;
    showNotification(
      `Registration for "${eventTitle}" has been initiated!`,
      "success",
    );

    // Scroll to contact form
    setTimeout(() => {
      document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
    }, 1000);
  });
});

// ==========================================
// CONSOLE MESSAGE
// ==========================================
console.log(
  "%c🎓 Welcome to Sporian College! ",
  "background: #1e3a8a; color: #fbbf24; font-size: 20px; padding: 10px; border-radius: 5px;",
);
console.log(
  "%cBuilt with ❤️ by Sporian Tech Team",
  "color: #6b7280; font-size: 14px;",
);

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================
// Lazy load images
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
        }
        observer.unobserve(img);
      }
    });
  });

  const lazyImages = document.querySelectorAll("img[data-src]");
  lazyImages.forEach((img) => imageObserver.observe(img));
}

// Debounce function for performance
function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Apply debounce to scroll events
window.addEventListener(
  "scroll",
  debounce(() => {
    // Scroll-dependent operations are already handled above
  }, 10),
);

// ==========================================
// ACCESSIBILITY IMPROVEMENTS
// ==========================================
// Keyboard navigation for slider
document.addEventListener("keydown", (e) => {
  const testimonialSection = document.querySelector(".testimonials");
  const isInView = elementInView(testimonialSection, 0);

  if (isInView) {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  }
});

// Focus trap for lightbox
lightbox.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    e.preventDefault();
  }
});

// ==========================================
// SMOOTH LOADING EXPERIENCE
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Add loaded class to body
  document.body.classList.add("loaded");

  // Animate hero text
  const heroTitle = document.querySelector(".hero-title");
  const heroSubtitle = document.querySelector(".hero-subtitle");

  if (heroTitle && heroSubtitle) {
    setTimeout(() => {
      heroTitle.style.opacity = "1";
      heroTitle.style.transform = "translateY(0)";
    }, 200);

    setTimeout(() => {
      heroSubtitle.style.opacity = "1";
      heroSubtitle.style.transform = "translateY(0)";
    }, 400);
  }
});

// ==========================================
// 18. SPORTS ROADMAP SCROLL ANIMATION
// ==========================================
const roadmapItems = document.querySelectorAll(".roadmap-item");

if (roadmapItems.length > 0) {
  const roadmapObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.dataset.delay) || 0;
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, delay);
          roadmapObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 }
  );

  roadmapItems.forEach((item, index) => {
    item.dataset.delay = index * 180;
    roadmapObserver.observe(item);
  });
}

// ==========================================
// END OF SCRIPT
// ==========================================
