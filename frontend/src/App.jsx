import { useState, useEffect } from 'react'
import { useSiteData } from './hooks/useSiteData'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BusinessLines from './components/BusinessLines'
import AboutUs from './components/AboutUs'
import Stats from './components/Stats'
import BotSection from './components/BotSection'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import { useScrollReveal } from './hooks/useScrollReveal'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const { data, loading, error } = useSiteData()
  useScrollReveal(data)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-lg font-semibold">Cargando...</p>
        </div>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-lg font-semibold text-red-600">Error al cargar los datos</p>
          <p className="text-sm text-gray-600">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} data={data} />
      <Hero data={data} />
      <BotSection />
      <BusinessLines data={data} />
      <AboutUs data={data} />
      <Stats data={data} />
      <Footer data={data} />
      <Chatbot data={data} />
    </div>
  )
}

export default App
