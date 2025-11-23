'use client'

export default function Resume() {
  return (
    <section id="resume" className="py-20 px-6 sm:px-8 lg:px-12 bg-[#f3f4f6]">
      <div className="max-w-6xl mx-auto relative overflow-hidden rounded-3xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_60%_at_100%_0%,rgba(59,130,246,0.12),transparent_50%),radial-gradient(80%_50%_at_0%_100%,rgba(168,85,247,0.12),transparent_50%)]"></div>

        <div className="relative p-6 sm:p-10 lg:p-14">
          <div className="flex justify-center mb-8">
            <span className="px-5 py-2 rounded-full bg-white/70 backdrop-blur text-sm font-medium text-gray-800 border border-gray-200 shadow-sm">
             Front‑End Developer & Technical Writer
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            My work experience
          </h2>

          <div className="space-y-8">
            {[
              { period: '2025 – Present', role: 'Technical Writer & Community Manager', company: 'Nelo' },
              { period: '2024 – Present', role: 'Front‑End Developer & Documentation Engineer', company: 'Delta Health' },
              { period: '2024', role: 'Front‑End Development Intern', company: 'Mrsoft International' },
              { period: '2022 – Present', role: 'Freelance Front‑End Developer & Technical Writer', company: 'Remote' },
            ].map((item) => (
              <div key={item.role} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-start">
                <div className="sm:col-span-4 text-gray-600 text-base">
                  {item.period}
                </div>
                <div className="sm:col-span-8 flex items-center gap-3 text-gray-900">
                  <span className="font-semibold">{item.role}</span>
                  <span className="text-gray-500 inline-grid place-items-center h-5 w-5 rounded-md bg-gray-100  text-[12px] font-bold border border-gray-200">at</span>
                  <span className="inline-flex items-center gap-2">
                    
                    <span className="font-medium text-gray-800">{item.company}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 center">
            <div className="flex gap-4 overflow-x-auto no-scrollbar py-3 justify-center">
              {[
                'TS','React','Next','Tailwind','Node','Git','Docs','SEO','UX','Testing'
              ].map((t) => (
                <div
                  key={t}
                  className="shrink-0 h-16 w-16 rounded-2xl bg-white border border-gray-200 grid place-items-center text-sm font-semibold text-gray-700 shadow-sm"
                  title={t}
                >
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <a
              href="/RESUME.pdf"
              download="RESUME.pdf"
              type="application/pdf"
              aria-label="Download resume PDF"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors font-medium"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
