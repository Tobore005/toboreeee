'use client'

import { useState } from 'react'

const experiences = [
  {
    period: '2025 – Present',
    role: 'Technical Writer & Community Manager',
    company: 'Nelo',
    idx: '01',
  },
  {
    period: '2024 – 2025',
    role: 'Front‑End Developer & Documentation Engineer',
    company: 'Delta Health',
    idx: '02',
  },
  {
    period: '2025-2026',
    role: 'Front-End Developer & Documentation Engineer',
    company: 'Mrsoft International',
    idx: '03',
  },
  {
    period: '2024',
    role: 'Front‑End Development Intern',
    company: 'Mrsoft International',
    idx: '04',
  },
  {
    period: '2022 – Present',
    role: 'Freelance Front‑End Developer & Technical Writer',
    company: 'Remote',
    idx: '05',
  },
]

const skills = [
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Node.js',
  'Git',
  'Documentation',
  'SEO',
  'UX Design',
  'Testing',
]

// matches the blue-600 accent from Hero
const ACCENT = 'rgb(37,99,235)' // blue-600

export default function Resume() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section
      id="resume"
      className="relative py-24 px-6 sm:px-8 lg:px-12 bg-[#f3f4f6] overflow-hidden"
    >
      {/* Ambient orbs — mirror Hero's blue accent */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[420px] h-[420px] rounded-full bg-blue-50/60 blur-3xl" />

      <div className="relative max-w-4xl mx-auto">

        {/* ── Header — mirrors Hero h1 sizing & font weight ── */}
        <div className="mb-20 text-center">
          <p className="inline-block mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">
            Career Timeline
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            My{' '}
            <span className="text-blue-600">Work</span>
            <br />
            Experience
          </h2>
        </div>

        {/* ── Experience rows ── */}
        <div className="mb-20">
          {experiences.map((item) => {
            const isHovered = hovered === item.idx
            const isDimmed = hovered !== null && !isHovered

            return (
              <div
                key={item.idx}
                onMouseEnter={() => setHovered(item.idx)}
                onMouseLeave={() => setHovered(null)}
                className={`relative cursor-default transition-all duration-300 ${
                  isDimmed ? 'opacity-25' : 'opacity-100'
                }`}
              >
                <div className="h-px bg-gray-300" />

                <div className="relative flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 py-7">

                  {/* Blue left gutter bar on hover */}
                  <div
                    className={`absolute left-0 top-0 w-0.5 transition-all duration-300 rounded-full ${
                      isHovered ? 'h-full bg-blue-600 opacity-100' : 'h-0 opacity-0'
                    }`}
                  />

                  {/* Ghost index — huge, slides in */}
                  <span
                    aria-hidden
                    className="hidden lg:block pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[8rem] font-black leading-none select-none text-blue-600/10 transition-all duration-500"
                    style={{
                      opacity: isHovered ? 1 : 0,
                      transform: `translateY(-50%) translateX(${isHovered ? '0' : '1.5rem'})`,
                    }}
                  >
                    {item.idx}
                  </span>

                  {/* Small idx */}
                  <span className="text-[11px] font-bold tracking-widest text-gray-300 tabular-nums w-8 shrink-0 select-none">
                    {item.idx}
                  </span>

                  {/* Period */}
                  <span
                    className={`text-sm font-medium tabular-nums sm:w-40 shrink-0 transition-colors duration-300 ${
                      isHovered ? 'text-blue-600' : 'text-gray-400'
                    }`}
                  >
                    {item.period}
                  </span>

                  {/* Role */}
                  <span
                    className={`flex-1 font-bold text-xl sm:text-2xl leading-snug transition-colors duration-300 ${
                      isHovered ? 'text-gray-900' : 'text-gray-700'
                    }`}
                  >
                    {item.role}
                  </span>

                  {/* Company — animated underline */}
                  <span
                    className={`text-sm font-semibold shrink-0 sm:ml-4 transition-all duration-300 ${
                      isHovered ? 'text-blue-600' : 'text-gray-400'
                    }`}
                  >
                    {item.company}
                    <span
                      className={`block h-0.5 bg-blue-600 mt-0.5 transition-all duration-300 rounded-full ${
                        isHovered ? 'w-full' : 'w-0'
                      }`}
                    />
                  </span>
                </div>
              </div>
            )
          })}
          <div className="h-px bg-gray-300" />
        </div>

        {/* ── Skills — inline flowing tags ── */}
        <div className="mb-20">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-5">
            Core Skills
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="group relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 cursor-default"
              >
                <span className="relative z-10">{s}</span>
                <span className="absolute inset-0 rounded-full border border-transparent group-hover:border-blue-200 bg-white/0 group-hover:bg-blue-50 transition-all duration-200" />
              </span>
            ))}
          </div>
        </div>

        {/* ── Footer: tagline + download ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
          <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
            3+ years shipping interfaces, docs, and developer experiences across startups and freelance engagements.
          </p>

          <a
            href="/RESUME.pdf"
            download="RESUME.pdf"
            type="application/pdf"
            aria-label="Download resume PDF"
            className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gray-900 text-white text-sm font-semibold overflow-hidden transition-all duration-300 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-200 hover:-translate-y-0.5 self-start sm:self-auto"
          >
            {/* Shimmer sweep */}
            <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
        </div>

      </div>
    </section>
  )
}