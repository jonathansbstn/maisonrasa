import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand-mark" href="#home" aria-label="Maison Rasa — home">
          MR
        </a>

        <ul className={`nav-links${menuOpen ? ' is-open' : ''}`} id="mobile-nav">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="nav-reserve-mobile">
            <a href="#reservation" onClick={() => setMenuOpen(false)}>
              Reserve a Table
            </a>
          </li>
        </ul>

        <a className="btn btn--lemon nav-reserve" href="#reservation">
          Reserve a Table
        </a>

        <button
          className={`nav-toggle${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  )
}

export default Navbar
