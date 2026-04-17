import { useEffect, useState } from 'react'

export default function Hero({ data }) {
  if (!data || !data.hero) {
    return (
      <section className="relative h-[420px] md:h-[480px] lg:h-[540px] w-full overflow-hidden flex items-center bg-gray-200">
        <div className="container mx-auto px-8 md:px-16 z-10">
          <h1 className="font-headline text-5xl md:text-8xl font-extrabold text-gray-800 leading-none tracking-tighter">
            Bienvenido a OHV HONDA
          </h1>
          <p className="text-xl text-gray-600 max-w-xl leading-relaxed mt-4">
            Soluciones automotrices de alto rendimiento para los entornos más exigentes.
          </p>
        </div>
      </section>
    )
  }

  const { hero } = data

  return (
    <section className="relative h-[420px] md:h-[480px] lg:h-[540px] w-full overflow-hidden flex items-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700">
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          src={hero.videoUrl}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="absolute inset-0 w-full h-full object-cover opacity-60 bg-gradient-to-b from-black/40 to-black/80"></div>
      </div>

      <div className="container mx-auto px-8 md:px-16 z-10">
        <div className="max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-primary-fixed">
              {hero.badge}
            </span>
          </div>

          <h1 className="font-headline text-5xl md:text-8xl font-extrabold text-white leading-none tracking-tighter waterfall-text">
            {hero.title}
          </h1>

          <p className="text-xl text-surface-container-highest max-w-xl leading-relaxed reveal-on-scroll delay-100">
            {hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {hero.buttons.map((button, index) => (
              <button
                key={index}
                className={`px-8 py-4 rounded-md font-label font-bold uppercase tracking-widest text-sm transition-all ${
                  button.type === 'primary'
                    ? 'technical-gradient text-white hover:scale-105 active:scale-95'
                    : 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20'
                }`}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 hidden lg:flex items-end gap-4 text-white/40">
        <span className="text-6xl font-black font-headline">{hero.sectionNumber}</span>
        <div className="h-0.5 w-24 bg-white/20 mb-4"></div>
      </div>
    </section>
  )
}
