import ScrollReveal from '../components/ScrollReveal'
import { Link } from 'react-router-dom'

// ─── Data ────────────────────────────────────────────────────────────────────

const coreValues = [
  {
    title: 'Equity',
    description:
      'Every child, regardless of zip code or family income, deserves access to books. We meet students where they are — bringing the book fair to their community.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
  },
  {
    title: 'Service Learning',
    description:
      'We engage students not just as recipients of books, but as future organizers, leaders, and advocates for literacy in their own schools and neighborhoods.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Student Autonomy & Access',
    description:
      'Children choose their own books — always. Research shows that student-selected reading leads to deeper engagement, stronger comprehension, and a lasting love of learning.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    title: 'Civic Engagement',
    description:
      'We believe that reading creates citizens. Equal Pages builds awareness around educational equity and inspires community members to take action for the children in their neighborhoods.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
]

const crisisStats = [
  { value: '1 in 6', label: 'U.S. children cannot read proficiently by 3rd grade' },
  { value: '1 per 300', label: 'Books per child in some low-income communities' },
  { value: '61%', label: 'Of low-income families own no books at home' },
  { value: '#1', label: 'Predictor of academic success is access to books' },
]

// ─── Page ────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <>
      {/* ── PAGE HERO ────────────────────────────────────────────────────── */}
      <section className="bg-navy py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-brand-green text-sm font-semibold uppercase tracking-widest mb-4">
              About Us
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tightest leading-tight mb-6 max-w-2xl">
              We're closing the
              <br />
              book gap — one
              <br />
              child at a time.
            </h1>
            <p className="text-white/60 text-xl max-w-lg leading-relaxed">
              Equal Pages is a Houston-based nonprofit founded on a simple belief: every child's
              story begins with access to books.
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" style={{ position: 'relative' }} />
      </section>

      {/* ── THE CRISIS ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="max-w-2xl mb-16">
            <p className="text-brand-green text-sm font-semibold uppercase tracking-widest mb-4">
              The Problem
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tighter leading-tight mb-6">
              America has a book
              poverty crisis.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Millions of American children grow up in "book deserts" — homes and communities
              where books are scarce or nonexistent. The consequences are devastating and
              lasting. But this crisis is solvable.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {crisisStats.map(({ value, label }, i) => (
              <ScrollReveal key={label} delay={i * 80}>
                <div className="bg-navy-light rounded-2xl p-6">
                  <div className="text-3xl md:text-4xl font-extrabold text-brand-green tracking-tighter mb-2">
                    {value}
                  </div>
                  <p className="text-navy text-sm font-medium leading-snug">{label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-10">
            <p className="text-gray-500 text-sm italic">
              Sources: Annie E. Casey Foundation, Reach Out and Read, NEA Foundation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── MISSION & VISION ─────────────────────────────────────────────── */}
      <section className="py-24 bg-navy-light">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="mb-12">
            <p className="text-brand-green text-sm font-semibold uppercase tracking-widest mb-2">
              Our Purpose
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tighter">
              Mission &amp; Vision
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission */}
            <ScrollReveal delay={0}>
              <div className="bg-white rounded-2xl p-10 h-full border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center mb-6">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-green mb-3">
                  Mission
                </h3>
                <p className="text-navy text-xl font-semibold leading-snug">
                  To eliminate book poverty in Houston by connecting students with free,
                  self-selected books through community book fairs and a growing student
                  ambassador program.
                </p>
              </div>
            </ScrollReveal>

            {/* Vision */}
            <ScrollReveal delay={120}>
              <div className="bg-navy rounded-2xl p-10 h-full">
                <div className="w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center mb-6">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2D9B6F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-green mb-3">
                  Vision
                </h3>
                <p className="text-white text-xl font-semibold leading-snug">
                  A Houston where every child has a bookshelf — and chooses to fill it.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="mb-14">
            <p className="text-brand-green text-sm font-semibold uppercase tracking-widest mb-3">
              What Guides Us
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tighter">
              Core Values
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreValues.map(({ title, description, icon }, i) => (
              <ScrollReveal key={title} delay={i * 80}>
                <div className="flex gap-5 p-8 rounded-2xl border border-gray-100 hover:border-brand-green/20 hover:shadow-sm transition-all">
                  <div className="w-12 h-12 rounded-xl bg-brand-green-light flex items-center justify-center text-brand-green flex-shrink-0 mt-0.5">
                    {icon}
                  </div>
                  <div>
                    <h3 className="text-navy font-bold text-lg mb-2">{title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR WORK ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-navy-light">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="mb-14">
            <p className="text-brand-green text-sm font-semibold uppercase tracking-widest mb-3">
              Programs
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tighter">
              Our Work
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Community Book Fair — Active */}
            <ScrollReveal delay={0}>
              <div className="bg-white rounded-2xl p-10 border border-gray-100 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-brand-green/10 text-brand-green text-xs font-semibold px-3 py-1 rounded-full">
                    Active
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-navy mb-3">Community Book Fair</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our flagship program. Equal Pages sets up free book fairs in underserved
                  Houston communities, where children browse and select 3–5 books to take home
                  at no cost. Every title is age-appropriate and student-chosen.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Events are open to all families, supported by community volunteers, and
                  supplemented with local partner organizations providing additional resources.
                </p>
                <div className="mt-8">
                  <Link
                    to="/events"
                    className="inline-flex items-center gap-2 text-brand-green font-semibold text-sm hover:underline"
                  >
                    See upcoming events →
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Student Ambassador Model — Coming Soon */}
            <ScrollReveal delay={120}>
              <div className="bg-white rounded-2xl p-10 border border-gray-200 h-full opacity-70">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-gray-100 text-gray-500 text-xs font-semibold px-3 py-1 rounded-full">
                    In Development
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-500 mb-3">Student Ambassador Model</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Our next chapter. The Student Ambassador Model will train student leaders —
                  middle and high schoolers — to organize book drives, host micro-fairs, and
                  advocate for literacy in their own schools and neighborhoods.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Ambassadors won't just receive books — they'll become the architects of
                  literacy access in their communities.
                </p>
                <div className="mt-8">
                  <span className="text-gray-400 text-sm font-medium">Coming soon</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── FOUNDER ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="mb-14">
            <p className="text-brand-green text-sm font-semibold uppercase tracking-widest mb-3">
              Leadership
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tighter">
              Meet Our Founder
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Photo placeholder */}
            <ScrollReveal>
              <div className="aspect-[3/4] bg-navy-light rounded-2xl flex flex-col items-center justify-center text-navy-muted border border-gray-200">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-30 mb-3">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span className="text-sm font-medium opacity-40">[ FOUNDER HEADSHOT ]</span>
                <span className="text-xs opacity-30 mt-1">Photo Placeholder</span>
              </div>
            </ScrollReveal>

            {/* Bio */}
            <ScrollReveal delay={100} className="md:col-span-2">
              <h3 className="text-2xl font-bold text-navy mb-1">[ Founder Name ]</h3>
              <p className="text-brand-green font-medium text-sm mb-6">Founder &amp; Executive Director</p>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-navy">[ PLACEHOLDER ]</strong> Founded Equal Pages in
                  Houston, Texas, driven by a firsthand understanding of how book access — or the
                  lack of it — shapes a child's entire trajectory. Having witnessed students
                  light up when given the freedom to choose their own books, they built Equal
                  Pages around a simple but powerful idea: agency in reading changes everything.
                </p>
                <p>
                  [ Founder background paragraph — include education, professional experience,
                  personal connection to the mission, and what drives them to do this work in
                  Houston specifically. This should be 2–3 sentences. ]
                </p>
                <p>
                  [ Optional third paragraph about their vision for Equal Pages' future, what they
                  hope to build, or a personal reflection on the impact they've seen so far. ]
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href="mailto:info@equalpages.org"
                  className="inline-flex items-center gap-2 text-navy font-medium text-sm hover:text-brand-green transition-colors"
                >
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" transform="scale(0.6) translate(2,2)"/>
                    <polyline points="22,6 12,13 2,6" transform="scale(0.6) translate(2,2)"/>
                  </svg>
                  info@equalpages.org
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-navy-light py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-navy tracking-tighter mb-5">
              Be part of the solution.
            </h2>
            <p className="text-gray-500 text-lg mb-8">
              Volunteer at our next event, become an ambassador, or donate to put more books in
              more hands.
            </p>
            <Link
              to="/get-involved"
              className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Get Involved
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
