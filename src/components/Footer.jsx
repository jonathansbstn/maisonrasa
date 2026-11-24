import { useState } from 'react'
import { ArrowIcon, FacebookIcon, InstagramIcon, WhatsAppIcon } from './Icons.jsx'

const navItems = [
  { label: 'Our Story', href: '#about' },
  { label: 'A La Carte Menu', href: '#menu' },
  { label: 'Degustation Journey', href: '#menu' },
  { label: 'Visual Gallery', href: '#gallery' },
  { label: 'Private Salon Buyout', href: '#reservation' },
]

function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event) => {
    event.preventDefault()
    setSubscribed(true)
    event.currentTarget.reset()
  }

  return (
    <footer className="footer section-dark" id="contact">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <h2 className="footer__logo">MAISON RASA</h2>
            <p>
              Indonesian Haute Cuisine &amp; Fine Dining. Celebrating the ancient
              spice routes and royal hospitality of the archipelago through
              modern gastronomy in Menteng, Jakarta.
            </p>
            <div className="footer__badges">
              <span>Halal Certified Ingredients</span>
              <span>Vegan Tasting Options</span>
            </div>
            <div className="social-icons footer__social">
              <a
                href="https://www.instagram.com/maisonrasa.jkt/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Maison Rasa on Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Maison Rasa on Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://wa.me/62213918889"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Maison Rasa on WhatsApp"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          <div className="footer__column">
            <h3>Navigation</h3>
            <ul>
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h3>Service Times</h3>
            <p className="footer__service-label">Lunch Service:</p>
            <p>11:30 AM – 03:00 PM</p>
            <p className="footer__service-label">Dinner Service:</p>
            <p>06:00 PM – 11:00 PM</p>
            <p className="footer__dress">Smart elegant dress code observed.</p>
          </div>

          <div className="footer__column footer__newsletter">
            <h3>Gastronomy Journal</h3>
            <p>Subscribe for invitations to seasonal chef tables and rare vintage wine releases.</p>
            <form onSubmit={handleSubscribe}>
              <label className="sr-only" htmlFor="newsletter-email">
                Your email address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                placeholder="Your email address"
                required
              />
              <button className="btn btn--lemon" type="submit">
                Subscribe
                <ArrowIcon />
              </button>
            </form>
            <p className="footer__newsletter-status" role="status" aria-live="polite">
              {subscribed ? 'Thank you for subscribing to our journal.' : ''}
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2024 Maison Rasa Indonesia. All rights reserved.</p>
          <nav aria-label="Legal links">
            <a href="#contact">Privacy Policy</a>
            <a href="#contact">Terms of Hospitality</a>
            <a href="mailto:press@maisonrasa.com">Press Inquiries</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
