import { useState } from 'react'
import { dishes } from '../data/dishes.js'
import { ArrowIcon } from './Icons.jsx'

const times = [
  '11:30 am (Lunch Service)',
  '01:00 pm (Lunch Service)',
  '06:00 pm (Dinner Prime)',
  '08:00 pm (Dinner Prime)',
  '09:30 pm (Late Dinner)',
]

const today = new Date().toISOString().slice(0, 10)

function Reservation({ feast }) {
  const [sent, setSent] = useState(false)
  const selectedDishes = dishes
    .filter((dish) => feast.includes(dish.id))
    .map((dish) => dish.name)

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const message = [
      'Hello Maison Rasa, I would like to reserve a table.',
      `Full name: ${form.get('fullName')}`,
      `Phone number: ${form.get('phone')}`,
      `Number of guests: ${form.get('guests')}`,
      `Date: ${form.get('date')}`,
      `Time: ${form.get('time')}`,
      `Email address: ${form.get('email') || '-'}`,
    ]

    if (selectedDishes.length > 0) {
      message.push(`Interested in: ${selectedDishes.join(', ')}`)
    }

    const url = `https://wa.me/62213918889?text=${encodeURIComponent(message.join('\n'))}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <section className="reservation" id="reservation" aria-labelledby="reservation-title">
      <div className="container reservation__inner">
        <div className="section-heading reservation__heading">
          <p className="eyebrow eyebrow--light">Online Reserve</p>
          <h2 className="section-title section-title--light" id="reservation-title">
            For Online Reservation
          </h2>
        </div>

        <form className="reservation__form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="fullName">Full name*</label>
            <input id="fullName" name="fullName" type="text" placeholder="Name*" required autoComplete="name" />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone number*</label>
            <input id="phone" name="phone" type="tel" placeholder="Phone*" required autoComplete="tel" />
          </div>
          <div className="field">
            <label htmlFor="guests">Number of guests</label>
            <div className="select-wrap">
              <select id="guests" name="guests" defaultValue="2">
                {Array.from({ length: 8 }, (_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1} {index === 0 ? 'person' : 'people'}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="field">
            <label htmlFor="date">Date</label>
            <input id="date" name="date" type="date" min={today} required />
          </div>
          <div className="field">
            <label htmlFor="time">Time</label>
            <div className="select-wrap">
              <select id="time" name="time" defaultValue={times[3]}>
                {times.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="field">
            <label htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" placeholder="Email" autoComplete="email" />
          </div>

          <div className="reservation__submit-wrap">
            <button className="btn btn--gold" type="submit">
              Reserve Now
              <ArrowIcon />
            </button>
            <p className="reservation__status" role="status" aria-live="polite">
              {sent
                ? 'Thank you! Your reservation details are ready in WhatsApp — please send the message to confirm.'
                : ''}
            </p>
          </div>
        </form>

        <p className="reservation__notice">
          Notice: For groups exceeding 8 guests or private banquet buyouts, please contact our
          VIP Concierge directly at <a href="tel:+62213918889">+62 21 3918 889</a>.
        </p>
      </div>
    </section>
  )
}

export default Reservation
