import { useState } from 'react'
import MenuCard from './MenuCard.jsx'
import { ArrowIcon } from './Icons.jsx'
import { categories, dishes } from '../data/dishes.js'

function Menu({ feast, onToggleDish }) {
  const [activeCategory, setActiveCategory] = useState('All Dishes')
  const visibleDishes =
    activeCategory === 'All Dishes'
      ? dishes
      : dishes.filter((dish) => dish.category === activeCategory)

  return (
    <section className="menu-section section-light" id="menu" aria-labelledby="menu-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Gastronomic Selection</p>
          <h2 className="section-title" id="menu-title">
            Explore Our Menu
          </h2>
          <p className="section-intro">
            A curated collection of seasonal archipelago treasures crafted with culinary mastery
          </p>
        </div>

        <div className="menu-filters" role="group" aria-label="Filter menu by category">
          {categories.map((category) => (
            <button
              key={category}
              className={`menu-filter${activeCategory === category ? ' is-active' : ''}`}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="menu-result-count" aria-live="polite">
          Showing {visibleDishes.length} {visibleDishes.length === 1 ? 'dish' : 'dishes'}
          {activeCategory === 'All Dishes' ? '' : ` in ${activeCategory}`}
        </p>

        <div className="menu-grid">
          {visibleDishes.map((dish) => (
            <MenuCard
              key={dish.id}
              dish={dish}
              added={feast.includes(dish.id)}
              onAdd={onToggleDish}
            />
          ))}
        </div>

        <div className="menu-bottom">
          <a className="link-underline" href="/maison-rasa-menu.pdf" target="_blank" rel="noreferrer">
            Download Complete Seasonal Degustation Menu (PDF)
            <ArrowIcon />
          </a>
          {feast.length > 0 && (
            <a className="feast-count" href="#reservation">
              Your feast: {feast.length} {feast.length === 1 ? 'dish' : 'dishes'}
              <ArrowIcon />
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default Menu
