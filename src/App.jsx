import { useState } from 'react'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import Gallery from './components/Gallery.jsx'
import Hero from './components/Hero.jsx'
import Location from './components/Location.jsx'
import Menu from './components/Menu.jsx'
import Navbar from './components/Navbar.jsx'
import Reservation from './components/Reservation.jsx'
import './App.css'

function App() {
  const [feast, setFeast] = useState([])

  const toggleDish = (dish) => {
    setFeast((current) =>
      current.includes(dish.id)
        ? current.filter((id) => id !== dish.id)
        : [...current, dish.id],
    )
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu feast={feast} onToggleDish={toggleDish} />
        <Gallery />
        <Location />
        <Reservation feast={feast} />
      </main>
      <Footer />
    </>
  )
}

export default App
