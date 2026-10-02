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
  tagline: "Production | Talents | Events | Digital Campaign",
  slogan: "We Provide Great Ideas to GROW YOUR BUSINESS!",
  description: "The best solution for the progress of your business",
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
// 📋 SERVICES DATA
// ============================================
const SERVICES = [
  {
    icon: <FaVideo />,
    title: "Promotional Videos & Reels",
    description: "Eye-catching promotional videos and reels that capture attention and drive engagement for your brand.",
    features: ["Video Production", "Reels Creation", "Ad Films"]
  },
  {
    icon: <FaGlobe />,
    title: "Website Development & SEO",
    description: "Professional websites optimized for search engines to boost your online presence and visibility.",
    features: ["Custom Websites", "SEO Optimization", "Responsive Design"]
  },
  {
    icon: <FaHashtag />,
    title: "Social Media Management",
    description: "Complete social media handling to grow your brand presence across all platforms.",
    features: ["Content Strategy", "Daily Posts", "Engagement Growth"]
  },
  {
    icon: <FaBullhorn />,
    title: "Online Digital Campaign",
    description: "Strategic digital marketing campaigns that deliver results and maximize your ROI.",
    features: ["Google Ads", "Facebook Ads", "Lead Generation"]
  },
  {
    icon: <FaCamera />,
    title: "AD Shoot & Editing",
    description: "Professional photo and video shoots with expert editing for stunning visual content.",
    features: ["Product Shoots", "Video Editing", "Post Production"]
  },
  {
    icon: <FaPaintBrush />,
    title: "Graphic Designing",
    description: "Creative graphic designs including posters, banners, and brand identity materials.",
    features: ["Posters & Banners", "Brand Identity", "Marketing Materials"]
  }
];

// ============================================
// 💰 PRICING PACKAGES
// ============================================
const PACKAGES = [
  {
    name: "Gold",
    price: "15,000",
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
    price: "20,000",
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
    price: "30,000",
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
// 🖼️ PORTFOLIO DATA
// ============================================
const PORTFOLIO = [
  { id: 1, type: "image", category: "Events", title: "Event Production", image: "/images/event1.jpg" },
  { id: 2, type: "image", category: "Events", title: "Live Event", image: "/images/event2.jpg" },
  { id: 3, type: "image", category: "Production", title: "Stage Setup", image: "/images/event3.jpg" },
  { id: 4, type: "image", category: "Events", title: "Corporate Event", image: "/images/event4.jpg" },
  { id: 5, type: "image", category: "Production", title: "Sound & Lighting", image: "/images/event5.jpg" },
  { id: 6, type: "image", category: "Events", title: "Special Occasion", image: "/images/event6.jpg" },
  { id: 7, type: "image", category: "Production", title: "Event Setup", image: "/images/event7.jpg" },
  { id: 8, type: "image", category: "Events", title: "Live Performance", image: "/images/event8.jpg" },
];

// ============================================
// ⭐ TESTIMONIALS DATA
// ============================================
const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    role: "Business Owner",
    text: "Bee Altitude transformed our digital presence completely. Their social media management and video production helped us reach 10x more customers!",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "Startup Founder",
    text: "The Platinum package was perfect for our startup. Professional website, great SEO results, and amazing promotional content. Highly recommended!",
    rating: 5
  },
  {
    name: "Vikram Patel",
    role: "Restaurant Owner",
    text: "Their creative team produced stunning videos and posters for our restaurant. We saw immediate increase in footfall after their digital campaign.",
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
          <li><a href="#pricing" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>Pricing</a></li>
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
          <span>Production | Talents | Events | Digital Campaign</span>
        </div>

        <h1 className="hero-title">
          Grow Your <span>Business</span> With Us!
        </h1>

        <p className="hero-subtitle">
          We provide great ideas and digital solutions to elevate your brand. 
          From stunning videos to powerful marketing campaigns - we do it all!
        </p>

        <div className="hero-tagline">
          <span>Your Vision</span>
          <span className="divider">|</span>
          <span>Our Creativity</span>
          <span className="divider">|</span>
          <span>Real Impact</span>
        </div>

        <div className="hero-buttons">
          <a href="#pricing" className="btn btn-accent btn-lg">
            View Packages <FaArrowRight />
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
            <h2 className="section-title">The Best Solution for Your Business Growth</h2>
            <p className="why-text">
              At Bee Altitude, we don't just offer services – we deliver results. Our comprehensive 
              digital marketing solutions are designed to take your business to new heights.
            </p>
            
            <div className="why-features">
              <div className="why-feature-item">
                <FaRocket className="why-icon" />
                <div>
                  <h4>Fast Results</h4>
                  <p>See growth within weeks, not months</p>
                </div>
              </div>
              <div className="why-feature-item">
                <FaChartLine className="why-icon" />
                <div>
                  <h4>Data-Driven</h4>
                  <p>Strategies backed by analytics</p>
                </div>
              </div>
              <div className="why-feature-item">
                <FaAward className="why-icon" />
                <div>
                  <h4>5+ Years Experience</h4>
                  <p>Trusted by 200+ happy clients</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn btn-accent">
              Start Growing Today <FaArrowRight />
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
function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Complete digital solutions to grow your business and elevate your brand presence
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
            </div>
          ))}
        </div>

        {/* Services Banner */}
        <div className="services-banner">
          <img src="/images/digital-marketing.jpg" alt="Digital Marketing Services" />
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Affordable Plans</span>
          <h2 className="section-title">Our Exclusive Packages</h2>
          <p className="section-subtitle">
            Elevate your digital presence at a fraction of the cost. Choose from 6, 12, or 24 months plans.
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
              <div className="pricing-price">
                <span className="currency">₹</span>
                <span className="amount">{pkg.price}</span>
                <span className="period">/month</span>
              </div>
              <ul className="pricing-features">
                {pkg.features.map((feature, i) => (
                  <li key={i}><FaCheckCircle className="check-icon" /> {feature}</li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-accent btn-block">
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* Pricing Info Banner */}
        <div className="pricing-banner">
          <img src="/images/packages-info.jpg" alt="Package Details" />
          <div className="pricing-banner-overlay">
            <h3>Solve Your Problems with 1 Solution</h3>
            <p>Custom packages available for enterprise needs</p>
            <a href={SITE_CONFIG.brochure} download className="btn btn-accent">
              <FaDownload /> Download Brochure
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Portfolio Section
function Portfolio() {
  const [filter, setFilter] = useState('All');
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
            A glimpse of our creative work and successful projects
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
            <img src="/images/grow-business.jpg" alt="Bee Altitude - Grow Your Business" />
          </div>

          <div className="about-content">
            <span className="section-tag">About Us</span>
            <h2 className="section-title">Your Growth Partner</h2>
            
            <p className="about-text">
              <strong>Bee Altitude</strong> is Bangalore's leading digital marketing and creative agency. 
              We help businesses grow with powerful digital strategies, stunning visuals, and 
              result-driven marketing campaigns.
            </p>
            
            <p className="about-text">
              From startups to established brands, we've helped hundreds of businesses 
              elevate their digital presence and achieve real results. Our team combines 
              creativity with data-driven strategies to deliver exceptional outcomes.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <div className="feature-icon"><FaChartLine /></div>
                <div>
                  <h4>Result Driven</h4>
                  <p>Strategies focused on real business growth</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="feature-icon"><FaVideo /></div>
                <div>
                  <h4>Creative Content</h4>
                  <p>Eye-catching videos, posters & designs</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="feature-icon"><FaBullhorn /></div>
                <div>
                  <h4>Digital Marketing</h4>
                  <p>SEO, Ads, Social Media & more</p>
                </div>
              </div>
            </div>

            <div className="about-buttons">
              <a href="#contact" className="btn btn-accent">
                Work With Us <FaArrowRight />
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

// Testimonials Section
function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Real results from real businesses we've helped grow
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={`star ${i < testimonial.rating ? 'filled' : ''}`} />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.name.charAt(0)}</div>
                <div>
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-role">{testimonial.role}</div>
                </div>
              </div>
            </div>
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
          <h2>Ready to Grow Your Business?</h2>
          <p>Get started today with our affordable packages. First consultation is FREE!</p>
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
            <h2 className="section-title">Let's Grow Your Business</h2>
            <p className="contact-text">
              Ready to elevate your digital presence? Contact us today for a free consultation 
              and let's discuss how we can help your business grow!
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
                <option value="">Select Service / Package</option>
                <option value="Gold Package - ₹15,000/month">Gold Package - ₹15,000/month</option>
                <option value="Platinum Package - ₹20,000/month">Platinum Package - ₹20,000/month</option>
                <option value="Diamond Package - ₹30,000/month">Diamond Package - ₹30,000/month</option>
                <option value="Video Production">Video Production</option>
                <option value="Website Development">Website Development</option>
                <option value="Social Media Management">Social Media Management</option>
                <option value="Digital Campaign">Digital Campaign</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Custom Package">Custom Package</option>
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
            <p style={{ marginTop: '8px', color: 'var(--accent)' }}>"Solve your problems with 1 Solution"</p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
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
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />
      <Pricing />
      <Portfolio />
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
