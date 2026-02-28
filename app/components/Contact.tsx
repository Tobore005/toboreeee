'use client'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Top label */}
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-6 text-center">
          Contact
        </p>

        {/* Big heading */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight text-center mb-6">
          Let's Work<br />
          <span className="text-blue-600">Together.</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-500 text-center max-w-lg mx-auto leading-relaxed mb-12">
          I'm always open to new opportunities, collaborations, or just a good conversation. Reach out — I'd love to hear from you.
        </p>

        {/* Contact buttons — stacked on mobile, row on desktop */}
        <div className="flex flex-col items-stretch sm:flex-row sm:items-center sm:justify-center gap-3 max-w-sm mx-auto sm:max-w-none">

          {/* Email — full width on mobile */}
          <a
            href="mailto:lorenaayarah@gmail.com"
            className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-gray-900 text-white rounded-2xl text-sm font-bold hover:bg-blue-600 transition-colors duration-200 w-full sm:w-auto"
          >
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="truncate">lorenaayarah@gmail.com</span>
          </a>

          {/* LinkedIn + X side by side on mobile */}
          <div className="flex gap-3 sm:contents">
            <a
              href="https://www.linkedin.com/in/ighotobore-ayarah-721aa1267/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-4 bg-gray-100 text-gray-700 rounded-2xl text-sm font-bold hover:bg-gray-200 transition-colors duration-200"
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>

            <a
              href="https://x.com/toboreeee"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-4 bg-gray-100 text-gray-700 rounded-2xl text-sm font-bold hover:bg-gray-200 transition-colors duration-200"
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              @toboreeee
            </a>
          </div>

        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-gray-300 mt-16 tracking-wide">
          Based in Nigeria · Available worldwide · Open to remote
        </p>

      </div>
    </section>
  )
}