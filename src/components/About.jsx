function About() {
  return (
    <section className="about section-light" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Our Culinary Heritage</p>
          <h2 className="section-title" id="about-title">
            Reimagining Royal
            <br />
            Nusantara Banquets
          </h2>
        </div>

        <div className="about__grid">
          <div className="about__visual">
            <div className="about__images">
              <img
                className="about__img-small about__img-small--top"
                src="/images/about-dining.jpg"
                alt="Guests dining in the warmly lit Maison Rasa dining room"
                loading="lazy"
              />
              <img
                className="about__img-main"
                src="/images/about-chef.jpg"
                alt="Chef finishing a plated dish in the kitchen"
                loading="lazy"
              />
              <img
                className="about__img-small about__img-small--bottom"
                src="/images/about-plate.jpg"
                alt="A carefully plated haute cuisine dish"
                loading="lazy"
              />
            </div>
            <blockquote className="about__quote">
              <p>
                “Every dish preserves the sacred soul of spices, presented with
                modern French discipline.”
              </p>
              <cite>— Executive Chef Aria</cite>
            </blockquote>
          </div>

          <div className="about__copy">
            <p className="eyebrow">The Philosophy</p>
            <h3 className="about__lead">
              From West Sumatra’s slow-simmered Rendang to Bali’s aromatic
              16-spice Betutu.
            </h3>
            <p className="about__paragraph">
              Maison Rasa honors the ancient culinary kingdoms of the Indonesian
              archipelago, bringing their heritage to contemporary haute cuisine.
            </p>
            <p className="about__paragraph">
              We source heirloom cloves, Andaliman pepper, nutmeg blossoms and
              palm nectars directly from smallholder farms across Maluku, North
              Sumatra and Central Java. Each dish tells a story of land, history
              and royal hospitality.
            </p>
            <div className="about__features">
              <div>
                <h4>Artisanal Ingredients</h4>
                <p>Directly procured spices from generational family growers.</p>
              </div>
              <div>
                <h4>Sommelier Pairing</h4>
                <p>Old and New World vintages curated to balance island chilies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
