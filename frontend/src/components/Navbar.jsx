import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ darkMode, setDarkMode, data }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [atTop, setAtTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY < 10)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!data) return null

  return (
    <nav className={
      `${atTop
        ? 'bg-transparent backdrop-blur-none'
        : 'bg-white/85 dark:bg-slate-900/85 backdrop-blur-md'} sticky top-0 z-50 transition-all duration-500`
    }>
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex-shrink-0">
            <span className={`text-2xl font-black tracking-tighter font-headline transition-colors duration-300 ${atTop ? 'text-black' : 'text-red-700 dark:text-red-600'}`}>
              {data.company.name}
            </span>
          </Link>
          <div className="hidden md:flex gap-6">
            {data.navigation.map((link, idx) => (
              <a
                key={link.label}
                className={
                  `font-medium font-label py-1 transition-colors duration-300 ` +
                  (atTop
                    ? 'text-black hover:text-red-700'
                    : `text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 ${idx === 0 ? 'text-red-700 dark:text-red-500 font-bold border-b-2 border-red-700' : ''}`)
                }
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 transition-colors ${atTop ? 'text-black hover:text-primary' : 'text-on-surface-variant hover:text-primary'}`}
            aria-label="Alternar modo oscuro"
          >
            <span className="material-symbols-outlined">
              {darkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <button className={`p-2 transition-colors ${atTop ? 'text-black hover:text-primary' : 'text-on-surface-variant hover:text-primary'}`}>
            <span className="material-symbols-outlined">account_circle</span>
          </button>
          <button className={`p-2 transition-colors ${atTop ? 'text-black hover:text-primary' : 'text-on-surface-variant hover:text-primary'}`}>
            <span className="material-symbols-outlined">shopping_cart</span>
          </button>
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-4">
          {data.navigation.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2 text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
