'use client'

import { useEffect, useState } from 'react'

const marqueeItems = [
  { text: 'Frontend Developer', color: 'text-blue-600' },
  { text: 'Technical Writer', color: 'text-gray-900' },
  { text: 'Community Manager', color: 'text-blue-600' },
  { text: 'Docs Engineer', color: 'text-gray-900' },
  { text: 'React & Next.js', color: 'text-blue-600' },
  { text: 'UX & Design', color: 'text-gray-900' },
  { text: 'Open to Work', color: 'text-blue-600' },
  { text: 'Tailwind CSS', color: 'text-gray-900' },
]

const navLinks = [
  {
    label: 'Home', href: '#Hero.tsx',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    label: 'GitHub', href: 'https://github.com/Tobore005',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'X', href: 'https://x.com/toboreeee',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn', href: 'https://www.linkedin.com/in/ighotobore-ayarah-721aa1267/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Dev.to', href: 'https://dev.to/toboreeee',
    icon: (
      // Custom DEV Community logo — a "D" inside a black badge shape
      <svg className="w-5 h-5" viewBox="0 0 448 512" fill="currentColor">
        <path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z" />
      </svg>
    ),
  },
  {
    label: 'Resume', href: '/RESUME.pdf',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
]

const track = [...marqueeItems, ...marqueeItems, ...marqueeItems]

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <>
      <style>{`
        @keyframes fade-down {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }

        .nav-enter  { animation: fade-down 0.6s cubic-bezier(.22,1,.36,1) 0.05s both; }
        .fu-1 { animation: fade-up 0.55s cubic-bezier(.22,1,.36,1) 0.20s both; }
        .fu-2 { animation: fade-up 0.55s cubic-bezier(.22,1,.36,1) 0.32s both; }
        .fu-3 { animation: fade-up 0.55s cubic-bezier(.22,1,.36,1) 0.44s both; }
        .fu-4 { animation: fade-up 0.55s cubic-bezier(.22,1,.36,1) 0.56s both; }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 22s linear infinite;
        }
        .marquee-track:hover { animation-play-state: paused; }

        /* Tooltip */
        .nav-icon-wrap { position: relative; }
        .nav-icon-wrap .tip {
          position: absolute;
          bottom: -32px;
          left: 50%;
          transform: translateX(-50%);
          background: #111827;
          color: #fff;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.05em;
          padding: 3px 8px;
          border-radius: 6px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.15s ease;
        }
        .nav-icon-wrap:hover .tip { opacity: 1; }
      `}</style>

      <section className="min-h-screen bg-white flex flex-col overflow-hidden">

        {/* ── Floating transparent pill nav ── */}
        <div className={`nav-enter pt-7 flex justify-center ${mounted ? '' : 'opacity-0'}`}>
          <nav className="flex items-center gap-0.5 bg-white/60 backdrop-blur-md border border-white/80 shadow-lg shadow-gray-200/40 rounded-2xl px-2.5 py-2">
            {navLinks.map((link, i) => (
              <span key={link.label} className="nav-icon-wrap flex items-center">
                {/* Thin divider before Resume */}
                {link.label === 'Resume' && (
                  <span className="w-px h-5 bg-gray-200 mx-2" />
                )}
                <a
                  href={link.href}
                  aria-label={link.label}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-2.5 rounded-xl text-gray-400 hover:text-blue-600 hover:bg-blue-50/60 transition-all duration-150"
                >
                  {link.icon}
                </a>
                <span className="tip">{link.label}</span>
              </span>
            ))}
          </nav>
        </div>

        {/* ── Hero content ── */}
        <div className={`flex-1 flex flex-col items-center justify-center text-center px-6 py-14 ${mounted ? '' : 'opacity-0'}`}>

          <div className="fu-1 mb-5">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
              Hey, I'm Tobore.<br />
              Frontend Developer<br />
              <span className="text-blue-600">&amp; Content Writer.</span>
            </h1>
          </div>

          <div className="fu-2 mb-10 max-w-md">
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
              Creating innovative solutions and captivating designs. Building clean interfaces and writing technical stories that make learning feel effortless.
            </p>
          </div>

          <div className="fu-3 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:tobore@example.com"
              className="px-6 py-3 rounded-2xl bg-gray-900 text-white text-sm font-bold hover:bg-blue-600 transition-colors duration-200"
            >
              Hire Me!
            </a>
            <span className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-green-100 text-green-700 text-sm font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Available
            </span>
          </div>
        </div>

        {/* ── Scrolling marquee ── */}
        <div className={`fu-4 w-full overflow-hidden border-t border-b border-gray-100 py-4 mb-10 ${mounted ? '' : 'opacity-0'}`}>
          <div className="marquee-track">
            {track.map((item, i) => (
              <span key={i} className="flex items-center shrink-0">
                <span className={`text-sm font-semibold tracking-wide whitespace-nowrap px-6 ${item.color}`}>
                  {item.text}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
              </span>
            ))}
          </div>
        </div>

      </section>
    </>
  )
}