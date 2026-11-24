import { CheckIcon, PlusIcon } from './Icons.jsx'

function MenuCard({ dish, added, onAdd }) {
  return (
    <article className="menu-card">
      <div className="menu-card__media">
        <img src={dish.image} alt={dish.name} loading="lazy" />
      </div>
      <p className="menu-card__meta">{dish.meta}</p>
      <h3 className="menu-card__name">{dish.name}</h3>
      <p className="menu-card__description">{dish.description}</p>
      <div className="menu-card__footer">
        <span className="menu-card__price">{dish.price}</span>
        <button
          className={`menu-card__add${added ? ' is-added' : ''}`}
          type="button"
          aria-pressed={added}
          aria-label={`${added ? 'Remove' : 'Add'} ${dish.name} ${added ? 'from' : 'to'} your feast`}
          onClick={() => onAdd(dish)}
        >
          {added ? 'Added to Feast' : 'Add to Feast'}
          {added ? <CheckIcon /> : <PlusIcon />}
        </button>
      </div>
    </article>
  )
}

export default MenuCard
