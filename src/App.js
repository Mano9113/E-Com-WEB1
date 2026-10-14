import React, { useState, useEffect } from 'react';
import { 
  FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, 
  FaWhatsapp, FaStar, FaPlay, FaTimes, FaFacebook,
  FaVideo, FaPaintBrush, FaGlobe, FaSearch, FaBullhorn, FaCamera,
  FaCheckCircle, FaArrowRight, FaCrown, FaGem, FaAward,
  FaChartLine, FaHashtag, FaDownload, FaRocket
} from 'react-icons/fa';
import './styles.css';

// ============================================
// 🎯 SITE CONFIGURATION - BEE ALTITUDE
// ============================================
const SITE_CONFIG = {
  name: "Bee Altitude",
  tagline: "Events | Production | Talents | Wedding | Entertainment",
  slogan: "Your Complete Event Management Partner",
  description: "Professional event management services for all occasions",
  phone: "+91 8073797153",
  email: "beealtitude@gmail.com",
  instagram: "https://instagram.com/beealtitude",
  facebook: "https://facebook.com/beealtitude",
  whatsapp: "https://wa.me/918073797153",
  location: "3rd Cross Rd, Bharathi Layout, S.G. Palya, Bengaluru 560029",
  locationLink: "https://maps.app.goo.gl/hsesyTHMzzvCEEVS7?g_st=iw",
  logo: "/logo.jpg",
  heroImage: "/images/hero-bg.jpg",
  brochure: "/Bee Altitude 1.pdf",
};

// ============================================
// 📋 SERVICES DATA - Complete from Client PDF
// ============================================
const SERVICES = [
  {
    id: "events",
    icon: <FaStar />,
    title: "Events",
    category: "Events",
    description: "Complete event management solutions for all your corporate and personal celebrations.",
    features: [
      "Corporate Events",
      "Festival Decoration", 
      "Award Ceremony",
      "Birthday Plans",
      "Manpower Management",
      "Corporate Gifts",
      "Interior Decoration"
    ]
  },
  {
    id: "production",
    icon: <FaVideo />,
    title: "Production",
    category: "Production",
    description: "Professional stage setup and production services for impactful events.",
    features: [
      "Stage Setup",
      "Sound Systems",
      "Lighting Setup",
      "LED Screens",
      "Technical Production",
      "AV Equipment"
    ]
  },
  {
    id: "talents",
    icon: <FaCrown />,
    title: "Talents",
    category: "Talents",
    description: "Skilled performers and professionals to make your events memorable.",
    features: [
      "Entertainment Performance",
      "Emcee Activity",
      "Dance Performance",
      "Singing Performance",
      "Art Performance",
      "Live Bands"
    ]
  },
  {
    id: "wedding",
    icon: <FaGem />,
    title: "Wedding Events",
    category: "Wedding",
    description: "Complete wedding planning from venue to photography, making your special day perfect.",
    features: [
      "Back to Agenda",
      "Wedding Hall",
      "Wedding Decoration",
      "Wedding Photography",
      "Wedding Videography",
      "Dance, Singing & Art"
    ]
  },
  {
    id: "entertainment",
    icon: <FaBullhorn />,
    title: "Entertainment Events",
    category: "Entertainment",
    description: "Exciting entertainment solutions including celebrity events and launching ceremonies.",
    features: [
      "Food Stall",
      "Music Events",
      "Dance Events",
      "Celebrity Events",
      "Launching Events",
      "Stage Setup"
    ]
  },
  {
    id: "photography",
    icon: <FaCamera />,
    title: "Photography & Videography",
    category: "Photography",
    description: "Professional photo and video coverage to capture your precious moments forever.",
    features: [
      "Event Photography",
      "Wedding Photography",
      "Event Videography",
      "Wedding Videography",
      "Drone Coverage",
      "Photo Editing"
    ]
  },
  {
    id: "hosters",
    icon: <FaAward />,
    title: "Hosters & Hospitality",
    category: "Hosters",
    description: "Trained staff and hosters for seamless event execution including catering services.",
    features: [
      "Event Hosters",
      "Hospitality Staff",
      "Lunch Service",
      "Snacks Service",
      "Dinner Service",
      "Catering Management"
    ]
  },
  {
    id: "digital",
    icon: <FaHashtag />,
    title: "Digital Campaign",
    category: "Digital",
    description: "Strategic digital marketing to promote your events and reach wider audiences.",
    features: [
      "Social Media Marketing",
      "Online Promotion",
      "Brand Marketing",
      "Content Creation",
      "Influencer Marketing",
      "Ad Campaigns"
    ]
  }
];

// ============================================
// 💰 DIGITAL MARKETING PACKAGES - No Prices
// ============================================
const PACKAGES = [
  {
    name: "Gold",
    icon: <FaAward />,
    color: "#f9a825",
    features: [
      "10 Posts/Monthly",
      "4 Videos/Reels",
      "Business Development",
      "Social Media Handling",
      "Promotional Posters/Reels",
      "Video Shoot & Editing"
    ]
  },
  {
    name: "Platinum",
    icon: <FaCrown />,
    color: "#64b5f6",
    popular: true,
    features: [
      "15 Posts/Monthly",
      "6 Reels/Videos",
      "Promotional Posters/Reels",
      "Social Media Handle",
      "Google Ads",
      "SEO",
      "Web Development"
    ]
  },
  {
    name: "Diamond",
    icon: <FaGem />,
    color: "#ce93d8",
    features: [
      "20 Posts/Monthly",
      "10 Videos/Reels",
      "Posters & Social Media",
      "Google Ads & SEO",
      "Web Development",
      "Influencer Marketing",
      "Lead Generation",
      "Business Development",
      "Ad Shoot"
    ]
  }
];

// ============================================
// 🖼️ PORTFOLIO DATA - Organized by Service Categories
// Images should be placed in public/images/{category}/ folders
// ============================================
const PORTFOLIO = [
  // Events
  { id: 1, type: "image", category: "Events", title: "Corporate Event", image: "/images/event1.jpg" },
  { id: 2, type: "image", category: "Events", title: "Festival Decoration", image: "/images/event2.jpg" },
  { id: 3, type: "image", category: "Events", title: "Award Ceremony", image: "/images/event3.jpg" },
  { id: 4, type: "image", category: "Events", title: "Birthday Party", image: "/images/event4.jpg" },
  
  // Production
  { id: 5, type: "image", category: "Production", title: "Stage Setup", image: "/images/event5.jpg" },
  { id: 6, type: "image", category: "Production", title: "Sound & Lighting", image: "/images/event6.jpg" },
  
  // Talents
  { id: 7, type: "image", category: "Talents", title: "Entertainment Performance", image: "/images/event7.jpg" },
  { id: 8, type: "image", category: "Talents", title: "Dance Performance", image: "/images/event8.jpg" },
  
  // Wedding
  { id: 9, type: "image", category: "Wedding", title: "Wedding Decoration", image: "/images/event9.jpg" },
  { id: 10, type: "image", category: "Wedding", title: "Wedding Photography", image: "/images/event10.jpg" },
  
  // Entertainment
  { id: 11, type: "image", category: "Entertainment", title: "Music Event", image: "/images/event11.jpg" },
  { id: 12, type: "image", category: "Entertainment", title: "Celebrity Event", image: "/images/event12.jpg" },
  
  // Photography
  { id: 13, type: "image", category: "Photography", title: "Event Coverage", image: "/images/event1.jpg" },
  
  // Decoration
  { id: 14, type: "image", category: "Decoration", title: "Interior Decoration", image: "/images/event2.jpg" },
  
  // Hosters
  { id: 15, type: "image", category: "Hosters", title: "Hospitality Service", image: "/images/event3.jpg" },
  
  // Digital
  { id: 16, type: "image", category: "Digital", title: "Digital Campaign", image: "/images/digital-marketing.jpg" },
];

// ============================================
// ⭐ TESTIMONIALS DATA - Real Google Reviews
// ============================================
const TESTIMONIALS = [
  {
    name: "Soumya a Amarapurkar",
    role: "Google Review",
    text: "We had a wonderful experience with the team. They took care of everything and made the venue look gorgeous. Very happy with the service and would definitely choose them again.",
    rating: 5
  },
  {
    name: "Seasame",
    role: "Google Review",
    text: "We had a wonderful experience with the team. They took care of everything and made the venue look gorgeous. Very happy with the service and would definitely choose them again.",
    rating: 5
  },
  {
    name: "Pooja",
    role: "Local Guide • Google Review",
    text: "Good marketing team and I was really happy to work with them and I got a on time payment.",
    rating: 5
  },
  {
    name: "Kavita",
    role: "Local Guide • Google Review",
    text: "Very good influencer marketing team. Smooth process and payment was done on time.",
    rating: 5
  },
  {
    name: "Kajal Gupta",
    role: "Local Guide • Google Review",
    text: "One of the best decoration services we've used. The team was responsive, punctual, and very creative. The final setup was beautiful and exceeded our expectations.",
    rating: 5
  },
  {
    name: "Vegbynature r",
    role: "Local Guide • Google Review",
    text: "Worked with Bee Altitude team and felt the service is very good and professional.",
    rating: 5
  }
];

// ============================================
// 📊 STATS DATA
// ============================================
const STATS = [
  { value: "100+", label: "Projects" },
  { value: "100+", label: "Happy Clients" },
  { value: "20+", label: "Team Members" },
  { value: "2+", label: "Years Experience" }
];

// ============================================
// 🧩 COMPONENTS
// ============================================

// Navbar Component
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="navbar-logo">
          <img 
            src={SITE_CONFIG.logo} 
            alt={SITE_CONFIG.name} 
            style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '50%', 
              objectFit: 'cover',
              border: '2px solid rgba(255,255,255,0.3)'
            }} 
          />
          <span>{SITE_CONFIG.name}</span>
        </a>

        <ul className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#services" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
          <li><a href="#portfolio" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>Portfolio</a></li>
          <li><a href="#about" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>About</a></li>
          <li><a href="#contact" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
        </ul>

        <div className="navbar-actions">
          <a href={SITE_CONFIG.instagram} target="_blank" rel="noopener noreferrer" className="social-btn">
            <FaInstagram />
          </a>
          <a href={`tel:${SITE_CONFIG.phone}`} className="btn btn-primary">
            <FaPhone /> Call Now
          </a>
        </div>

        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span className={mobileMenuOpen ? 'open' : ''}></span>
          <span className={mobileMenuOpen ? 'open' : ''}></span>
          <span className={mobileMenuOpen ? 'open' : ''}></span>
        </button>
      </div>
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <img src={SITE_CONFIG.heroImage} alt="Hero Background" className="hero-video" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-badge">
          <span className="pulse-dot"></span>
          <span>Events | Production | Talents | Wedding | Entertainment</span>
        </div>

        <h1 className="hero-title">
          Making Every <span>Event</span> Memorable!
        </h1>

        <p className="hero-subtitle">
          From corporate events to dream weddings, we handle everything. 
          Events, Production, Talents, Entertainment - your complete event partner!
        </p>

        <div className="hero-tagline">
          <span>Your Vision</span>
          <span className="divider">|</span>
          <span>Our Expertise</span>
          <span className="divider">|</span>
          <span>Perfect Events</span>
        </div>

        <div className="hero-buttons">
          <a href="#services" className="btn btn-accent btn-lg">
            Our Services <FaArrowRight />
          </a>
          <a href={SITE_CONFIG.brochure} download className="btn btn-glass btn-lg">
            <FaDownload /> Download Brochure
          </a>
        </div>

        <div className="hero-stats">
          {STATS.map((stat, index) => (
            <div key={index} className="hero-stat">
              <span className="hero-stat-value">{stat.value}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}

// Why Choose Us Section - NEW!
function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="why-grid">
          <div className="why-content">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">Your Complete Event Management Partner</h2>
            <p className="why-text">
              At Bee Altitude, we don't just organize events – we create unforgettable experiences. Our comprehensive 
              event management services cover everything from corporate functions to dream weddings.
            </p>
            
            <div className="why-features">
              <div className="why-feature-item">
                <FaRocket className="why-icon" />
                <div>
                  <h4>End-to-End Solutions</h4>
                  <p>From planning to execution, we handle everything</p>
                </div>
              </div>
              <div className="why-feature-item">
                <FaChartLine className="why-icon" />
                <div>
                  <h4>Professional Team</h4>
                  <p>Experienced staff and talented performers</p>
                </div>
              </div>
              <div className="why-feature-item">
                <FaAward className="why-icon" />
                <div>
                  <h4>100+ Successful Events</h4>
                  <p>Trusted by 100+ happy clients</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn btn-accent">
              Plan Your Event <FaArrowRight />
            </a>
          </div>

          <div className="why-image">
            <img src="/images/hero-bg.jpg" alt="Bee Altitude Team" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Section
function Services({ onViewGallery }) {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Offered Services</span>
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">
            Complete event management solutions for corporate events, weddings, entertainment, and more
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}><FaCheckCircle /> {feature}</li>
                ))}
              </ul>
              <button 
                className="btn btn-service-gallery"
                onClick={() => onViewGallery(service.category)}
              >
                View Gallery <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Section - Digital Marketing Packages (No Prices)
function Pricing() {
  return (
    <section id="packages" className="pricing">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Digital Marketing</span>
          <h2 className="section-title">Our Exclusive Packages</h2>
          <p className="section-subtitle">
            Elevate your digital presence with our comprehensive marketing solutions. 
            Choose from 6, 12, or 24 months plans.
          </p>
        </div>

        <div className="pricing-grid">
          {PACKAGES.map((pkg, index) => (
            <div key={index} className={`pricing-card ${pkg.popular ? 'popular' : ''}`}>
              {pkg.popular && <div className="popular-badge">Most Popular</div>}
              <div className="pricing-icon" style={{ color: pkg.color }}>
                {pkg.icon}
              </div>
              <h3 className="pricing-name">{pkg.name}</h3>
              <ul className="pricing-features">
                {pkg.features.map((feature, i) => (
                  <li key={i}><FaCheckCircle className="check-icon" /> {feature}</li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-accent btn-block">
                Get Quote
              </a>
            </div>
          ))}
        </div>

        <p className="pricing-note">
          Contact us for detailed pricing. Custom packages available for enterprise needs.
        </p>
      </div>
    </section>
  );
}

// Portfolio Section
function Portfolio({ filter, setFilter }) {
  const [lightbox, setLightbox] = useState(null);

  const categories = ['All', ...new Set(PORTFOLIO.map(item => item.category))];
  const filtered = filter === 'All' ? PORTFOLIO : PORTFOLIO.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Work</span>
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle">
            {filter === 'All' 
              ? 'A glimpse of our creative work and successful projects'
              : `Showcasing our ${filter} work`
            }
          </p>
        </div>

        <div className="portfolio-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filtered.map(item => (
            <div key={item.id} className="portfolio-item" onClick={() => setLightbox(item)}>
              <div className="portfolio-image">
                <img src={item.image} alt={item.title} />
              </div>
              {item.type === 'video' && (
                <div className="video-indicator"><FaPlay /></div>
              )}
              <div className="portfolio-overlay">
                <span className="portfolio-category">{item.category}</span>
                <h4 className="portfolio-title">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="portfolio-empty">
            <p>No images available for this category yet. Check back soon!</p>
          </div>
        )}

        <div className="portfolio-cta">
          <a href={SITE_CONFIG.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
            <FaInstagram /> See More on Instagram
          </a>
        </div>

        {lightbox && (
          <div className="lightbox" onClick={() => setLightbox(null)}>
            <button className="lightbox-close"><FaTimes /></button>
            <div className="lightbox-content" onClick={e => e.stopPropagation()}>
              <img src={lightbox.image} alt={lightbox.title} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// About Section
function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <img src="/images/grow-business.jpg" alt="Bee Altitude - Event Management" />
          </div>

          <div className="about-content">
            <span className="section-tag">About Us</span>
            <h2 className="section-title">Your Trusted Event Partner</h2>
            
            <p className="about-text">
              <strong>Bee Altitude</strong> is Bangalore's leading event management company. 
              We specialize in creating memorable experiences for corporate events, weddings, 
              entertainment shows, and all types of celebrations.
            </p>
            
            <p className="about-text">
              From manpower management to interior decoration, from photography to entertainment 
              performances - we offer end-to-end event solutions. Our dedicated team ensures 
              every event is executed flawlessly.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <div className="feature-icon"><FaChartLine /></div>
                <div>
                  <h4>Complete Solutions</h4>
                  <p>Events, Production, Talents, Entertainment - All in One</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="feature-icon"><FaVideo /></div>
                <div>
                  <h4>Professional Coverage</h4>
                  <p>Photography & Videography Services</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="feature-icon"><FaBullhorn /></div>
                <div>
                  <h4>Hospitality Services</h4>
                  <p>Hosters, Catering, Guest Management</p>
                </div>
              </div>
            </div>

            <div className="about-buttons">
              <a href="#contact" className="btn btn-accent">
                Plan Your Event <FaArrowRight />
              </a>
              <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section - Slider with Google Reviews
function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <div className="testimonials-title-area">
            <h2 className="testimonials-main-title">Client Speaks</h2>
            <a 
              href="https://www.google.com/maps/place/BEE+ALTITUDE.+events.%2FMan+Power%2Fproduction%2Ftalents%2FDigital+Marketing/@12.9305068,77.6075783,1346m/data=!3m1!1e3!4m8!3m7!1s0x3bae15cd3bdbed9b:0x7680ad5c4971ea10!8m2!3d12.9305068!4d77.6075783!9m1!1b1!16s%2Fg%2F11ntpd2_ds" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="testimonials-link"
            >
              Read all client testimonials <FaArrowRight />
            </a>
          </div>
        </div>

        <div className="testimonials-slider">
          {/* Previous cards (blurred) */}
          <div className="slider-card slider-card-prev">
            <div className="testimonial-card blur-card">
              <p className="testimonial-text">
                "{TESTIMONIALS[(currentSlide - 1 + TESTIMONIALS.length) % TESTIMONIALS.length].text}"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {TESTIMONIALS[(currentSlide - 1 + TESTIMONIALS.length) % TESTIMONIALS.length].name.charAt(0)}
                </div>
                <div>
                  <div className="author-name">
                    {TESTIMONIALS[(currentSlide - 1 + TESTIMONIALS.length) % TESTIMONIALS.length].name}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Current card (main) */}
          <div className="slider-card slider-card-current">
            <div className="testimonial-card main-card">
              <div className="testimonial-header">
                <div className="google-badge">
                  <img src="https://www.google.com/favicon.ico" alt="Google" className="google-icon" />
                  <span>Google Review</span>
                </div>
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="star filled" />
                  ))}
                </div>
              </div>
              <p className="testimonial-text main-text">"{TESTIMONIALS[currentSlide].text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar main-avatar">{TESTIMONIALS[currentSlide].name.charAt(0)}</div>
                <div>
                  <div className="author-name main-name">{TESTIMONIALS[currentSlide].name}</div>
                  <div className="author-role">{TESTIMONIALS[currentSlide].role}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Next cards (blurred) */}
          <div className="slider-card slider-card-next">
            <div className="testimonial-card blur-card">
              <p className="testimonial-text">
                "{TESTIMONIALS[(currentSlide + 1) % TESTIMONIALS.length].text}"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {TESTIMONIALS[(currentSlide + 1) % TESTIMONIALS.length].name.charAt(0)}
                </div>
                <div>
                  <div className="author-name">
                    {TESTIMONIALS[(currentSlide + 1) % TESTIMONIALS.length].name}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Dots */}
        <div className="slider-dots">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section - NEW!
function CallToAction() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Plan Your Event?</h2>
          <p>Get in touch today for a free consultation. Let's create something memorable together!</p>
          <div className="cta-buttons">
            <a href={`tel:${SITE_CONFIG.phone}`} className="btn btn-accent btn-lg">
              <FaPhone /> Call Now: {SITE_CONFIG.phone}
            </a>
            <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-glass btn-lg">
              <FaWhatsapp /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hi Bee Altitude!%0A%0AI'm ${formData.name}.%0A%0AService Interested: ${formData.service}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0AMessage: ${formData.message}`;
    window.open(`${SITE_CONFIG.whatsapp}?text=${message}`, '_blank');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title">Let's Plan Your Event</h2>
            <p className="contact-text">
              Ready to create an unforgettable event? Contact us today for a free consultation 
              and let's discuss how we can make your vision come to life!
            </p>

            <div className="contact-details">
              <a href={`tel:${SITE_CONFIG.phone}`} className="contact-item">
                <div className="contact-icon"><FaPhone /></div>
                <div>
                  <span className="contact-label">Call Us</span>
                  <span className="contact-value">{SITE_CONFIG.phone}</span>
                </div>
              </a>

              <a href={`mailto:${SITE_CONFIG.email}`} className="contact-item">
                <div className="contact-icon"><FaEnvelope /></div>
                <div>
                  <span className="contact-label">Email</span>
                  <span className="contact-value">{SITE_CONFIG.email}</span>
                </div>
              </a>

              <a href={SITE_CONFIG.instagram} target="_blank" rel="noopener noreferrer" className="contact-item instagram">
                <div className="contact-icon"><FaInstagram /></div>
                <div>
                  <span className="contact-label">Instagram</span>
                  <span className="contact-value">@beealtitude</span>
                </div>
              </a>

              <a href={SITE_CONFIG.locationLink} target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon"><FaMapMarkerAlt /></div>
                <div>
                  <span className="contact-label">Location</span>
                  <span className="contact-value">{SITE_CONFIG.location}</span>
                </div>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Get Free Quote</h3>
            
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <select name="service" value={formData.service} onChange={handleChange} required>
                <option value="">Select Event Type</option>
                <option value="Corporate Event">Corporate Event</option>
                <option value="Wedding Event">Wedding Event</option>
                <option value="Entertainment Event">Entertainment Event</option>
                <option value="Birthday Party">Birthday Party</option>
                <option value="Festival Decoration">Festival Decoration</option>
                <option value="Award Ceremony">Award Ceremony</option>
                <option value="Photography & Videography">Photography & Videography</option>
                <option value="Stage Setup & Production">Stage Setup & Production</option>
                <option value="Manpower & Hosters">Manpower & Hosters</option>
                <option value="Other Event">Other Event</option>
              </select>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Tell us about your business and requirements..."
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-accent btn-lg btn-block">
              <FaWhatsapp /> Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={SITE_CONFIG.logo} alt={SITE_CONFIG.name} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
              <span>{SITE_CONFIG.name}</span>
            </div>
            <p>{SITE_CONFIG.tagline}</p>
            <p style={{ marginTop: '8px', color: 'var(--gray-400)' }}>"Your Complete Event Management Partner"</p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <a href={SITE_CONFIG.instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href={SITE_CONFIG.facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href={`tel:${SITE_CONFIG.phone}`}>
              <FaPhone />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <p>Crafted with ❤️ in Bangalore, India</p>
        </div>
      </div>
    </footer>
  );
}

// Floating WhatsApp Button
function WhatsAppFloat() {
  return (
    <a 
      href={SITE_CONFIG.whatsapp} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
      <span className="whatsapp-tooltip">Chat with us!</span>
    </a>
  );
}

// ============================================
// 🚀 MAIN APP
// ============================================
function App() {
  const [galleryFilter, setGalleryFilter] = useState('All');

  // Function to set gallery filter and scroll to portfolio
  const handleViewGallery = (category) => {
    setGalleryFilter(category);
    // Scroll to portfolio section
    setTimeout(() => {
      const portfolioSection = document.getElementById('portfolio');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services onViewGallery={handleViewGallery} />
      <Pricing />
      <Portfolio filter={galleryFilter} setFilter={setGalleryFilter} />
      <About />
      <Testimonials />
      <CallToAction />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
