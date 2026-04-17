export default function BusinessLines({ data }) {
  if (!data) return null

  const { businessLines } = data

  return (
    <section className="py-24 bg-gradient-to-b from-slate-100 via-white to-slate-50 px-8 md:px-16">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {businessLines.map((line, index) => (
            <div
              key={line.id}
              className={`group relative overflow-hidden bg-surface-container-high rounded-lg flex flex-col ${
                index === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              } h-auto md:h-[450px] reveal-on-scroll ${index === 1 ? 'delay-200' : ''}`}
            >
              <div className="flex-1 p-10 flex flex-col justify-between">
                <div>
                  <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">
                    {line.subtitle}
                  </span>
                  <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-4">
                    {line.title}
                  </h2>
                  <p className="text-secondary leading-relaxed">{line.description}</p>
                </div>
                <a
                  className="inline-flex items-center gap-2 text-primary font-bold uppercase text-sm group-hover:gap-4 transition-all"
                  href="#"
                >
                  {line.linkText} <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>

              <div className="flex-1 relative h-64 md:h-full overflow-hidden">
                <img
                  src={line.imageUrl}
                  alt={line.imageAlt || line.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.onerror = null
                    event.currentTarget.src = '/images/bestseller_honda_part.png'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
