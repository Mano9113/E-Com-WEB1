import React, { useState, useEffect } from 'react';
import { 
  FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, 
  FaWhatsapp, FaStar, FaPlay, FaTimes, FaUsers,
  FaCalendarAlt, FaVideo, FaMicrophone, FaBullhorn, FaPaintBrush,
  FaCheckCircle, FaArrowRight
} from 'react-icons/fa';
import './styles.css';

// ============================================
// 🎯 SITE CONFIGURATION - UPDATE YOUR INFO HERE
// ============================================
const SITE_CONFIG = {
  name: "Bee Altitude",
  tagline: "Your Vision | Our Creativity | Real Impact",
  phone: "+91 80737 97155",
  email: "beealtitude@gmail.com",
  instagram: "https://instagram.com/beealtitude",
  whatsapp: "https://wa.me/918073797155",
  location: "Bangalore, India",
  locationLink: "https://maps.google.com/?q=Bangalore,India",
  logo: "/logo.jpg",
  heroImage: "/images/hero-bg.jpg",
};

// ============================================
// 📋 SERVICES DATA
// ============================================
const SERVICES = [
  {
    icon: <FaUsers />,
    title: "Staff Management",
    description: "Professional staff solutions for all types of events. Our trained team ensures seamless execution from start to finish.",
    features: ["Trained Professionals", "Event Support", "Crowd Management"]
  },
  {
    icon: <FaCalendarAlt />,
    title: "Event Management",
    description: "End-to-end event planning and execution. From intimate gatherings to large-scale productions, we bring your vision to life.",
    features: ["Corporate Events", "Weddings", "Private Parties"]
  },
  {
    icon: <FaVideo />,
    title: "Production",
    description: "High-quality production services including sound, lighting, staging, and technical equipment for unforgettable experiences.",
    features: ["Sound & Lighting", "Stage Design", "Technical Setup"]
  },
  {
    icon: <FaMicrophone />,
    title: "Talents",
    description: "Access to a diverse pool of performers, hosts, artists, and entertainers to elevate your event experience.",
    features: ["Hosts & Anchors", "Artists", "Performers"]
  },
  {
    icon: <FaBullhorn />,
    title: "Digital Campaign",
    description: "Strategic digital marketing and social media campaigns to amplify your event's reach and engagement.",
    features: ["Social Media", "Content Creation", "Influencer Marketing"]
  },
  {
    icon: <FaPaintBrush />,
    title: "Creative Agency",
    description: "Complete creative solutions including branding, design, and content that captures your unique identity.",
    features: ["Branding", "Design", "Content Strategy"]
  }
];

// ============================================
// 🖼️ PORTFOLIO DATA - Your Real Images
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
  { id: 9, type: "image", category: "Events", title: "Celebration", image: "/images/event9.jpg" },
  { id: 10, type: "image", category: "Production", title: "Technical Setup", image: "/images/event10.jpg" },
  { id: 11, type: "image", category: "Events", title: "Grand Event", image: "/images/event11.jpg" },
  { id: 12, type: "image", category: "Events", title: "Event Highlights", image: "/images/event12.jpg" },
];

// ============================================
// ⭐ TESTIMONIALS DATA
// ============================================
const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    role: "Corporate Client",
    text: "Bee Altitude transformed our annual corporate event into an unforgettable experience. Their attention to detail and professionalism exceeded our expectations.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "Wedding Client",
    text: "From planning to execution, the team was exceptional. They understood our vision perfectly and delivered a magical celebration.",
    rating: 5
  },
  {
    name: "Vikram Patel",
    role: "Event Organizer",
    text: "Working with Bee Altitude was seamless. Their production quality and staff management made our event a huge success.",
    rating: 5
  }
];

// ============================================
// 📊 STATS DATA
// ============================================
const STATS = [
  { value: "500+", label: "Events" },
  { value: "100+", label: "Happy Clients" },
  { value: "50+", label: "Team Members" },
  { value: "5+", label: "Years Experience" }
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
          <span>Event Management & Production</span>
        </div>

        <h1 className="hero-title">
          We Create <span>Unforgettable</span> Experiences
        </h1>

        <p className="hero-subtitle">
          Bangalore's premier event management company delivering exceptional experiences 
          through creative vision and flawless execution.
        </p>

        <div className="hero-tagline">
          <span>Your Vision</span>
          <span className="divider">|</span>
          <span>Our Creativity</span>
          <span className="divider">|</span>
          <span>Real Impact</span>
        </div>

        <div className="hero-buttons">
          <a href="#contact" className="btn btn-accent btn-lg">
            Get a Quote <FaArrowRight />
          </a>
          <a href="#portfolio" className="btn btn-glass btn-lg">
            View Our Work
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

// Services Section
function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Services</span>
          <h2 className="section-title">What We Offer</h2>
          <p className="section-subtitle">
            Comprehensive event solutions tailored to bring your vision to life
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
            A glimpse of the memorable events we've created
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
            <img src="/images/team.jpg" alt="Bee Altitude Team" />
            <div className="about-image-badge">
              <span className="badge-value">5+</span>
              <span className="badge-label">Years of Excellence</span>
            </div>
          </div>

          <div className="about-content">
            <span className="section-tag">About Us</span>
            <h2 className="section-title">The Team Behind Your Perfect Event</h2>
            
            <p className="about-text">
              Bee Altitude is Bangalore's trusted partner for event management and production. 
              With years of experience and a passion for perfection, we transform ordinary 
              gatherings into extraordinary experiences.
            </p>
            
            <p className="about-text">
              Our team of creative professionals, skilled technicians, and dedicated staff 
              work together to ensure every detail is perfect. From corporate events to 
              weddings, from intimate gatherings to large-scale productions – we deliver excellence.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <div className="feature-icon"><FaUsers /></div>
                <div>
                  <h4>Expert Team</h4>
                  <p>Trained professionals for every aspect of your event</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="feature-icon"><FaVideo /></div>
                <div>
                  <h4>Quality Production</h4>
                  <p>State-of-the-art equipment and technical expertise</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="feature-icon"><FaPaintBrush /></div>
                <div>
                  <h4>Creative Vision</h4>
                  <p>Unique concepts that bring your ideas to life</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn btn-accent">
              Work With Us <FaArrowRight />
            </a>
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
            Don't just take our word for it – hear from those who've experienced our services
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
    const message = `Hi! I'm ${formData.name}.%0A%0AService: ${formData.service}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0AMessage: ${formData.message}`;
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
            <h2 className="section-title">Let's Create Something Amazing</h2>
            <p className="contact-text">
              Ready to bring your event vision to life? Contact us today and let's 
              start planning your next unforgettable experience.
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
            <h3>Send Us a Message</h3>
            
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
                <option value="">Select Service</option>
                <option value="Event Management">Event Management</option>
                <option value="Staff Management">Staff Management</option>
                <option value="Production">Production</option>
                <option value="Talents">Talents</option>
                <option value="Digital Campaign">Digital Campaign</option>
                <option value="Creative Agency">Creative Agency</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Tell us about your event..."
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
          <p>Crafted with ❤️ in Bangalore</p>
        </div>
      </div>
    </footer>
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
      <Services />
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
