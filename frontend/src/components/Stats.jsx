import { useEffect, useMemo, useRef, useState } from 'react'

function parseMetricValue(rawValue) {
  const text = String(rawValue ?? '').trim()
  const match = text.match(/^(\d+(?:[.,]\d+)?)(.*)$/)

  if (!match) {
    return { target: 0, suffix: '', decimals: 0, original: text }
  }

  const numberPart = match[1]
  const suffix = match[2] || ''
  const normalized = numberPart.replace(',', '.')
  const target = Number(normalized)
  const decimalPart = normalized.split('.')[1] || ''

  return {
    target: Number.isFinite(target) ? target : 0,
    suffix,
    decimals: decimalPart.length,
    original: text,
  }
}

function AnimatedMetric({ value, label, delay = 0, start }) {
  const parsed = useMemo(() => parseMetricValue(value), [value])
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!start) {
      setDisplay(0)
      return
    }

    if (!parsed.original) return

    let rafId = 0
    let startTs = 0
    const duration = 1300 + delay * 180

    const step = (timestamp) => {
      if (!startTs) startTs = timestamp
      const progress = Math.min((timestamp - startTs) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const nextValue = parsed.target * eased
      setDisplay(nextValue)

      if (progress < 1) {
        rafId = window.requestAnimationFrame(step)
      }
    }

    rafId = window.requestAnimationFrame(step)

    return () => {
      window.cancelAnimationFrame(rafId)
    }
  }, [delay, parsed.original, parsed.target, start])

  const shownNumber = parsed.decimals > 0
    ? display.toFixed(parsed.decimals)
    : Math.round(display).toString()

  return (
    <div className={`space-y-2 reveal-on-scroll ${delay > 0 ? `delay-${delay * 100}` : ''}`}>
      <span className="text-6xl md:text-8xl font-black font-headline text-surface-container-highest block">
        {parsed.original ? `${shownNumber}${parsed.suffix}` : value}
      </span>
      <span className="text-sm font-bold uppercase tracking-widest text-secondary">
        {label}
      </span>
    </div>
  )
}

export default function Stats({ data }) {
  if (!data) return null

  const { stats } = data
  const sectionRef = useRef(null)
  const [startCount, setStartCount] = useState(false)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry && entry.isIntersecting) {
          setStartCount(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-slate-100 via-white to-slate-50 px-8 md:px-16">
      <div className="max-w-screen-2xl mx-auto text-center space-y-24">
        <div className="max-w-3xl mx-auto space-y-4 reveal-on-scroll">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface">
            {stats.title}
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24">
          {stats.metrics.map((stat, index) => (
            <AnimatedMetric
              key={stat.label}
              value={stat.number}
              label={stat.label}
              delay={index}
              start={startCount}
            />
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden aspect-[21/9] bg-surface-container-high reveal-on-scroll delay-200">
          <img
            src={stats.mapUrl}
            alt={stats.mapAlt}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(event) => {
              event.currentTarget.onerror = null
              event.currentTarget.src = '/images/colombia_map.png'
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white text-on-surface px-10 py-5 rounded-md font-bold uppercase tracking-widest text-sm shadow-xl hover:bg-primary hover:text-white transition-all">
              {stats.ctaButton}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
