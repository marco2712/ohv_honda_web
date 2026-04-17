export default function Footer({ data }) {
  if (!data || !data.footer) {
    return (
      <footer className="bg-gray-100 w-full border-t border-gray-300">
        <div className="text-center py-8">
          <p className="text-gray-600 text-sm">© 2026 OHV HONDA. Todos los derechos reservados.</p>
        </div>
      </footer>
    )
  }

  const { footer, company } = data
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-950 dark:to-slate-900 w-full border-t border-slate-200 dark:border-slate-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-16 w-full max-w-screen-2xl mx-auto">
        <div className="space-y-6">
          <span className="text-xl font-extrabold text-slate-900 dark:text-white font-headline">
            {company.name}
          </span>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            {company.tagline}
          </p>
          <div className="flex gap-4">
            {footer.sections[0].socialLinks.map((link) => (
              <a key={link.label} className="text-slate-400 hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h5 className="font-bold text-sm uppercase tracking-widest text-slate-900 dark:text-white">
            {footer.sections[1].title}
          </h5>
          <ul className="space-y-4">
            {footer.sections[1].links.map((link) => (
              <li key={link.label}>
                <a className="text-slate-500 dark:text-slate-400 text-sm hover:underline decoration-red-700 underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h5 className="font-bold text-sm uppercase tracking-widest text-slate-900 dark:text-white">
            {footer.sections[2].title}
          </h5>
          <ul className="space-y-4">
            {footer.sections[2].links.map((link) => (
              <li key={link.label}>
                <a className="text-slate-500 dark:text-slate-400 text-sm hover:underline decoration-red-700 underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h5 className="font-bold text-sm uppercase tracking-widest text-slate-900 dark:text-white">
            {footer.sections[3].title}
          </h5>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            {footer.sections[3].address}
          </p>
          <div className="flex items-center gap-2 text-red-700 dark:text-red-500">
            <span className="material-symbols-outlined text-sm">schedule</span>
            <span className="text-sm font-bold">{footer.sections[3].schedule}</span>
          </div>
        </div>
      </div>

      <div className="px-12 py-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 dark:text-slate-400 text-xs font-label">
          {footer.copyright.replace('{year}', currentYear)}
        </p>
        <div className="flex gap-6">
          {footer.badges.map((badge) => (
            <span key={badge} className="text-slate-400 text-[10px] uppercase font-bold tracking-tighter">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}
