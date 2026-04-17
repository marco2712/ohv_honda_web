export default function AboutUs({ data }) {
  if (!data) return null

  const { aboutUs, company } = data

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-slate-200 to-slate-100 px-8 md:px-16 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Editorial Image */}
          <div className="lg:col-span-5 relative reveal-on-scroll">
            <div className="sticky top-32">
              <div className="w-full aspect-[4/5] rounded-lg shadow-2xl overflow-hidden bg-surface-container-high">
                <img
                  src={aboutUs.imageUrl || '/images/honda_oil_filter.png'}
                  alt={aboutUs.identity.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.onerror = null
                    event.currentTarget.src = '/images/bestseller_honda_part.png'
                  }}
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary p-12 hidden xl:block">
                <span className="text-white text-xl font-bold font-headline leading-tight block">
                  EST.<br />{company.year}
                </span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 space-y-16 py-8">
            <div className="space-y-6 reveal-on-scroll delay-100">
              <h3 className="text-primary uppercase font-bold tracking-[0.2em] text-sm">
                {aboutUs.identity.label}
              </h3>
              <h2 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface leading-[1.1]">
                {aboutUs.identity.title}
              </h2>
              <p className="text-xl text-secondary max-w-2xl leading-relaxed">
                {aboutUs.identity.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 reveal-on-scroll delay-200">
              {aboutUs.features.map((feature) => (
                <div key={feature.title} className="space-y-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-surface-container-highest rounded-full">
                    <span className="material-symbols-outlined text-primary">
                      {feature.icon}
                    </span>
                  </div>
                  <h4 className="font-headline text-xl font-bold">{feature.title}</h4>
                  <p className="text-secondary">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="p-10 bg-slate-900/90 text-white rounded-lg relative overflow-hidden reveal-on-scroll delay-300">
              <div className="relative z-10 space-y-4">
                <p className="text-lg italic opacity-80">
                  "{aboutUs.quote.text}"
                </p>
                <span className="block font-bold tracking-widest uppercase text-xs text-primary">
                  {aboutUs.quote.author}
                </span>
              </div>
              <div className="absolute right-0 bottom-0 opacity-5 -mb-10 -mr-10">
                <span
                  className="material-symbols-outlined !text-[200px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  shield
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
