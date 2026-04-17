import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ModernLoader = ({ words = [
  'Preparando el bot...',
  'Conectando módulos...',
  'Casi listo...'
] }) => {
  const [currentLine, setCurrentLine] = useState(0)
  const [cursorVisible, setCursorVisible] = useState(true)
  const containerRef = useRef(null)

  const colors = useMemo(
    () => [
      'bg-gray-500',
      'bg-teal-500',
      'bg-blue-500',
      'bg-gray-600',
      'bg-pink-500',
    ],
    [],
  )
  const BUFFER = 20
  const MAX_LINES = 100

  const generateLines = useCallback(
    (count = 20) =>
      Array.from({ length: count }, (_, idx) => ({
        id: Date.now() + idx,
        segments: Array.from(
          { length: Math.floor(Math.random() * 4) + 1 },
          () => ({
            width: `${Math.floor(Math.random() * 80) + 50}px`,
            color: colors[Math.floor(Math.random() * colors.length)],
            isCircle: Math.random() > 0.93,
            indent: Math.random() > 0.7 ? 1 : 0,
          }),
        ),
      })),
    [colors],
  )

  const [lines, setLines] = useState(() => generateLines())

  const getVisibleRange = () => {
    const start = Math.max(0, currentLine - BUFFER)
    const end = Math.min(lines.length, currentLine + BUFFER)
    return { start, end }
  }

  const { start: visibleStart, end: visibleEnd } = getVisibleRange()

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [currentLine])

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentLine((prev) => {
        const nextLine = prev + 1
        if (nextLine >= lines.length - 10)
          setLines((old) => [...old, ...generateLines(50)])
        return nextLine
      })
    }, 200)
    return () => clearTimeout(timer)
  }, [currentLine, lines.length, generateLines])

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((prev) => !prev), 530)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const cleanup = () => {
      if (lines.length > MAX_LINES && currentLine > BUFFER * 2) {
        setLines((oldLines) => {
          const safeIndex = currentLine - BUFFER * 2
          if (safeIndex > 0) {
            setCurrentLine((prev) => prev - safeIndex)
            return oldLines.slice(safeIndex)
          }
          return oldLines
        })
      }
    }
    const interval = setInterval(cleanup, 5000)
    return () => clearInterval(interval)
  }, [currentLine, lines.length])

  const visibleLines = lines.slice(visibleStart, visibleEnd)

  return (
    <div className='w-full h-full'>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className='relative h-full overflow-hidden'
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className='text-center pb-2'
        >
          <span className='text-gray-600 text-xs font-mono'>{words[currentLine % words.length]}</span>
        </motion.div>
        <div
          ref={containerRef}
          className='relative px-2 py-2 font-mono text-sm overflow-y-hidden h-[calc(100%-24px)]'
        >
          <div className='space-y-2 relative z-10'>
            <AnimatePresence mode='sync'>
              {visibleLines.map((line, idx) => {
                const actualIndex = visibleStart + idx
                if (actualIndex >= currentLine) return null
                const extraMargin = (idx + 1) % 4 === 0 ? 'mt-2' : ''
                const paddingClass = line.segments[0]?.indent ? 'pl-4' : ''
                return (
                  <div key={line.id} className={`flex items-center gap-2 h-5 ${extraMargin} ${paddingClass}`}>
                    {line.segments.map((seg, i) =>
                      seg.isCircle ? (
                        <div key={i} className={`w-4 h-4 rounded-full opacity-50 ${seg.color}`} />
                      ) : (
                        <div key={i} className={`h-3 rounded-sm opacity-50 ${seg.color}`} style={{ width: seg.width }} />
                      ),
                    )}
                  </div>
                )
              })}
            </AnimatePresence>
            {currentLine < lines.length && (
              <div
                className='flex items-center h-5'
                style={{ paddingLeft: `${lines[currentLine]?.segments[0]?.indent ? 16 : 0}px` }}
              >
                <div
                  style={{ opacity: cursorVisible ? 1 : 0 }}
                  className='w-0.5 h-3.5 bg-blue-500'
                />
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ModernLoader
