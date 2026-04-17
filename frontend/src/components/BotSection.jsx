import { useState, useRef, useEffect } from 'react'
import ModernLoader from './ModernLoader'


export default function BotSection() {
  const [expanded, setExpanded] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { from: 'bot', text: '¡Hola! ¿Qué repuesto buscas hoy?' }
  ])
  const [loading, setLoading] = useState(false)
  const chatRef = useRef(null)
  // Expansión automática tras 1er input
  useEffect(() => {
    if (expanded) return
    if (messages.length > 1) {
      setTimeout(() => setExpanded(true), 1200)
    }
  }, [messages, expanded])

  // Scroll automático al fondo
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [messages, loading])

  const handleSend = async () => {
    if (!input.trim() || loading) return
    setMessages([...messages, { from: 'user', text: input }])
    setInput('')
    setLoading(true)
    // Simula animación de carga antes de responder
    setTimeout(() => {
      setLoading(false)
      setMessages(msgs => [...msgs, { from: 'bot', text: 'Buscando repuesto: ' + input }])
      setExpanded(true)
    }, 1800)
  }

  return (
    <section className="w-full flex justify-center py-12 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-400">
      <div className={`relative transition-all duration-500 max-w-xl w-full rounded-2xl shadow-2xl bg-white/90 p-6 flex flex-col items-center ${expanded ? 'h-96' : 'h-auto min-h-[148px]'}`}>
        <div className={`flex items-center gap-2 ${expanded ? 'mb-4' : 'mb-3'}`}>
          <span className="text-2xl font-bold text-pink-600">🤖</span>
          <span className="font-bold text-lg text-gray-800">Busca tu repuesto</span>
        </div>
        <div
          ref={chatRef}
          className={`relative w-full overflow-y-auto transition-all duration-500 ${expanded ? 'flex-1 mb-2' : 'max-h-0 mb-0 overflow-hidden'}`}
          style={{ maxHeight: expanded ? 240 : 0 }}
        >
          {messages.map((msg, i) => (
            <div key={i} className={`my-1 text-sm ${msg.from === 'bot' ? 'text-pink-700' : 'text-gray-700 text-right'}`}>{msg.text}</div>
          ))}
          {loading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-white/65 backdrop-blur-sm px-4">
              <div className="w-full h-full py-3">
                <ModernLoader words={["Buscando repuestos...", "Consultando inventario...", "Preparando respuesta..."]} />
              </div>
            </div>
          )}
        </div>
        <div className={`flex w-full gap-2 ${expanded ? 'mt-2' : 'mt-0'}`}>
          <input
            className="flex-1 rounded-lg border border-pink-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Ej: filtro de aire"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            disabled={loading}
          />
          <button
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-4 py-2 rounded-lg transition"
            onClick={handleSend}
            disabled={loading}
          >
            Enviar
          </button>
        </div>
      </div>
    </section>
  )
}
