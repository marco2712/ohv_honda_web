import { useState } from 'react'
import PixelBackground from './PixelBackground'

export default function Chatbot({ data }) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: data?.chatbot.welcomeMessage || '¡Hola! Bienvenido. ¿Cómo puedo ayudarte?'
    }
  ])
  const [inputValue, setInputValue] = useState('')

  if (!data) return null

  const { chatbot } = data

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      const userMessage = {
        id: messages.length + 1,
        type: 'user',
        text: inputValue
      }
      setMessages([...messages, userMessage])
      setInputValue('')

      setTimeout(() => {
        const botMessage = {
          id: messages.length + 2,
          type: 'bot',
          text: 'Gracias por tu mensaje. Un asesor se pondrá en contacto pronto.'
        }
        setMessages((prev) => [...prev, botMessage])
      }, 500)
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-primary text-white shadow-lg hover:shadow-xl transition-all z-50 flex items-center justify-center"
        aria-label="Abrir chatbot"
      >
        <span className="material-symbols-outlined text-2xl">support_agent</span>
      </button>

      <div
        className={`fixed bottom-28 right-6 w-80 bg-surface rounded-2xl shadow-2xl border border-outline-variant/30 flex flex-col overflow-hidden relative z-[100] transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <PixelBackground className="absolute inset-0 z-0 pointer-events-none" opacity={0.35} />

        <div className="bg-primary text-white p-4 flex justify-between items-center shadow-md relative z-10">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined">support_agent</span>
            <span className="font-bold font-headline text-sm tracking-wide">{chatbot.title}</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>

        <div className="p-4 h-80 overflow-y-auto space-y-4 text-sm bg-transparent flex-1 relative z-10" style={{ scrollbarWidth: 'thin' }}>
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'items-start gap-2'}`}>
              {message.type === 'bot' && (
                <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center flex-shrink-0 text-white shadow-sm overflow-hidden border border-outline-variant/30">
                  <span className="text-xs font-bold">T</span>
                </div>
              )}
              <div
                className={`p-3 rounded-2xl max-w-xs ${
                  message.type === 'user'
                    ? 'bg-primary text-white rounded-br-none'
                    : 'bg-white border border-outline-variant/20 shadow-sm text-on-surface rounded-tl-none'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSendMessage} className="p-4 border-t border-outline-variant/20 bg-white relative z-10">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escribe un mensaje..."
              className="flex-1 px-4 py-2 rounded-full bg-surface-container-low border border-outline-variant/20 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
            <button type="submit" className="bg-primary text-white rounded-full p-2 hover:bg-primary-dark transition-colors">
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
