import { ArrowIcon, FacebookIcon, InstagramIcon, WhatsAppIcon } from './Icons.jsx'

const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Jalan+Teuku+Umar+No+18+Menteng+Jakarta+Pusat+10350'

function Location() {
  return (
    <section className="location section-dark" id="location" aria-labelledby="location-title">
      <div className="container location__grid">
        <div className="location__details">
          <h2 className="section-title section-title--light" id="location-title">
            Visit Us.
            <br />
            Find your table at
            <br />
            MAISON RASA.
          </h2>
          <p className="location__intro">
            Step in for coffee, pastry and a space that leaves an impression long
            after the last sip.
          </p>

          <dl className="location__info">
            <div>
              <dt>Address</dt>
              <dd>
                Jalan Teuku Umar No. 18
                <br />
                Menteng, Jakarta Pusat 10350
              </dd>
            </div>
            <div>
              <dt>Contact</dt>
              <dd>
                <a href="tel:+62213918889">+62 21 3918 889</a>
                <br />
                <a href="mailto:reservations@maisonrasa.com">
                  reservations@maisonrasa.com
                </a>
              </dd>
            </div>
            <div>
              <dt>Opening Hours</dt>
              <dd>
                Mon – Fri: 11:00 – 23:00
                <br />
                Sat – Sun: 10:00 – 00:00
              </dd>
            </div>
          </dl>

          <a className="btn btn--outline btn--light" href={mapsUrl} target="_blank" rel="noopener noreferrer">
            Open map
            <ArrowIcon />
          </a>

          <div className="location__social">
            <span>Social</span>
            <div className="social-icons">
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
        </div>

        <a
          className="location__map"
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Maison Rasa location in Google Maps"
        >
          <img src="/images/location-map.png" alt="Map of Maison Rasa in Menteng, Jakarta" loading="lazy" />
        </a>
      </div>
    </section>
  )
}

export default Location
