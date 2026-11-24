import { ArrowIcon } from './Icons.jsx'

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__content container">
        <p className="hero__eyebrow">Indonesian Haute Cuisine &amp; Fine Dining</p>
        <h1 className="hero__title" id="hero-title">
          A Symphony of Flavors,
          <br />
          Served with Elegance.
        </h1>
        <p className="hero__text">
          Where indigenous archipelago spices meet refined culinary artistry.
          <br />
          Indulge in an unforgettable multi-sensory dining journey
          <br />
          in the heart of Menteng, Jakarta.
        </p>
        <div className="hero__actions">
          <a className="btn btn--rosewood" href="#menu">
            Explore Our Menu
            <ArrowIcon />
          </a>
          <a className="btn btn--outline" href="#reservation">
            Reserve a Table
          </a>
        </div>
      </div>
      <div className="hero__scroll" aria-hidden="true">
        <span>Scroll to discover</span>
        <i />
      </div>
    </section>
  )
}

export default Hero
