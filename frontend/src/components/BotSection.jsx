import { useState, useRef, useEffect } from 'react'
import PixelBackground from './PixelBackground'


export default function BotSection() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { from: 'bot', text: '¡Hola! ¿Qué repuesto buscas hoy?' }
  ])
  const [loading, setLoading] = useState(false)
  const chatRef = useRef(null)
  const hasConversationStarted = messages.some((m) => m.from === 'user')

  // Scroll automático al fondo
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [messages, loading])

  const handleSend = async () => {
    const query = input.trim()
    if (!query || loading) return

    setMessages([...messages, { from: 'user', text: query }])
    setInput('')
    setLoading(true)

    // Simula respuesta del bot
    setTimeout(() => {
      setLoading(false)
      setMessages(msgs => [...msgs, { from: 'bot', text: 'Buscando repuesto: ' + query }])
    }, 1800)
  }

  return (
    <section className="w-full flex justify-center py-12 relative overflow-hidden">
      <PixelBackground
        className="absolute inset-0 z-0 pointer-events-none"
        opacity={0.9}
        direction="center"
      />

      <div className="relative z-10 max-w-xl w-full rounded-2xl shadow-2xl bg-white/90 p-6 flex flex-col items-center h-96">
        <div
          className={`w-full flex flex-col items-center justify-center transition-all duration-500 ${
            hasConversationStarted ? 'mb-4' : 'flex-1'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className={`${hasConversationStarted ? 'text-2xl' : 'text-5xl'} font-bold text-pink-600 transition-all duration-500`}>🤖</span>
            <span className={`${hasConversationStarted ? 'text-lg' : 'text-3xl'} font-bold text-gray-800 transition-all duration-500`}>Busca tu repuesto</span>
          </div>
        </div>
        <div
          ref={chatRef}
          className={`relative w-full overflow-y-auto transition-all duration-500 ${
            hasConversationStarted ? 'flex-1 mb-2 opacity-100' : 'h-0 mb-0 opacity-0 overflow-hidden'
          }`}
        >
          {messages.map((msg, i) => (
            <div key={i} className={`my-1 text-sm ${msg.from === 'bot' ? 'text-pink-700' : 'text-gray-700 text-right'}`}>{msg.text}</div>
          ))}

          {loading && (
            <div className="my-2 flex justify-start">
              <div className="inline-flex items-center gap-1 rounded-full bg-gray-900/75 border border-black/10 px-3 py-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-100 animate-bounce" style={{ animationDelay: '0ms', animationDuration: '900ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-gray-100 animate-bounce" style={{ animationDelay: '150ms', animationDuration: '900ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-gray-100 animate-bounce" style={{ animationDelay: '300ms', animationDuration: '900ms' }} />
              </div>
            </div>
          )}
        </div>
        <div className="flex w-full gap-2 mt-2">
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
