function Gallery() {
  return (
    <section className="gallery section-dark" id="gallery" aria-labelledby="gallery-title">
      <div className="container">
        <div className="gallery__heading">
          <div>
            <p className="eyebrow eyebrow--light">Visual Atmosphere</p>
            <h2 className="section-title section-title--light" id="gallery-title">
              Our Gallery
            </h2>
          </div>
          <a
            className="link-underline gallery__instagram"
            href="https://www.instagram.com/maisonrasa.jkt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram: @maisonrasa.jkt
          </a>
        </div>

        <div className="gallery__grid">
          <figure className="gallery__item gallery__item--large">
            <img
              src="/images/gallery-private.jpg"
              alt="Private dining room set with an elegant long table"
              loading="lazy"
            />
            <figcaption>Private Dining Room</figcaption>
          </figure>
          <figure className="gallery__item gallery__item--lounge">
            <img
              src="/images/gallery-lounge.jpg"
              alt="Guests enjoying drinks at the cocktail lounge"
              loading="lazy"
            />
            <figcaption>Cocktail Lounge</figcaption>
          </figure>
          <figure className="gallery__item gallery__item--wine">
            <img
              src="/images/gallery-wine.jpg"
              alt="A curated selection of wines on the bar shelf"
              loading="lazy"
            />
            <figcaption>Wine Selection</figcaption>
          </figure>
          <figure className="gallery__item gallery__item--courtyard">
            <img
              src="/images/gallery-courtyard.jpg"
              alt="Leafy outdoor courtyard with dining tables"
              loading="lazy"
            />
            <figcaption>Outdoor Courtyard</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Gallery
