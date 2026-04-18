import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import { upcomingEvents } from '../data/events'

// ─── Icon Components ────────────────────────────────────────────────────────

const HandsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
    <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
    <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
  </svg>
)

const MegaphoneIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 11l19-9-9 19-2-8-8-2z" />
  </svg>
)

const HeartIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)

// ─── Sub-components ──────────────────────────────────────────────────────────

function StatCard({ value, label, delay }) {
  return (
    <ScrollReveal delay={delay} className="text-center">
      <div className="text-5xl md:text-6xl font-extrabold text-brand-green tracking-tightest mb-2">
        {value}
      </div>
      <div className="text-navy font-medium text-base">{label}</div>
    </ScrollReveal>
  )
}

function InvolvementCard({ icon, title, description, to, delay }) {
  return (
    <ScrollReveal delay={delay}>
      <Link
        to={to}
        className="group flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 hover:border-brand-green/30 hover:shadow-lg transition-all duration-300 bg-white"
      >
        <div className="w-16 h-16 rounded-full bg-brand-green-light flex items-center justify-center text-brand-green mb-5 group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-navy font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
        <span className="mt-4 text-brand-green text-sm font-medium group-hover:underline">
          Learn more →
        </span>
      </Link>
    </ScrollReveal>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  const nextEvent = upcomingEvents[0]

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-navy min-h-[92vh] flex items-center overflow-hidden">
        {/* Hero background photo */}
        <div className="absolute inset-0">
          <img
            src="/equal-pages/images/hero-toddler-book.jpg"
            alt="A young child holding a book at the Equal Pages Community Book Fair"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-navy/75" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-28 w-full">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span className="text-brand-green text-sm font-medium">Houston, Texas</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tightest mb-8">
              Every Child
              <br />
              <span className="text-brand-green">Deserves</span> a
              <br />
              Bookshelf.
            </h1>

            {/* Subheadline */}
            <p className="text-white/65 text-xl md:text-2xl font-light leading-relaxed max-w-xl mb-10">
              Equal Pages puts free, student-selected books in the hands of Houston's
              underserved youth — one community fair at a time.
            </p>

            {/* Stat callout */}
            <p className="text-white/40 text-sm font-medium mb-8 uppercase tracking-widest">
              300+ students served · April 11, 2026
            </p>

            {/* CTA */}
            <Link
              to="/events"
              className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-semibold text-base px-8 py-4 rounded-full transition-colors duration-200"
            >
              See Upcoming Events
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ── IMPACT NUMBERS ───────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="text-center mb-14">
            <p className="text-brand-green text-sm font-semibold uppercase tracking-widest mb-3">
              By the Numbers
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tighter">
              Our First Event. Real Impact.
            </h2>
            <p className="text-gray-500 mt-3 text-lg">
              April 11, 2026 — inaugural MYC Community Book Fair, Sunnyside Houston
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
            <StatCard value="300+" label="Students Served" delay={0} />
            <StatCard value="1,000+" label="Books Donated" delay={80} />
            <StatCard value="1" label="Community United" delay={160} />
          </div>
        </div>
      </section>

      {/* ── DIVIDER ──────────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-gray-100" />
      </div>

      {/* ── WHAT WE DO ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <ScrollReveal>
              <p className="text-brand-green text-sm font-semibold uppercase tracking-widest mb-4">
                What We Do
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tighter leading-tight mb-6">
                Books chosen by kids,
                <br />
                for kids.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Equal Pages hosts free community book fairs where students browse age-appropriate
                shelves and select books they actually want to read — no strings attached.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                When children choose their own reading material, they read more, learn more, and
                build a lifelong love of books. That's our whole philosophy.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-brand-green font-semibold hover:gap-2.5 transition-all"
              >
                Learn more about our mission
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </ScrollReveal>

            {/* Event photo */}
            <ScrollReveal delay={120}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/equal-pages/images/community-books.jpg"
                  alt="Community member holding books at the April 2026 Equal Pages Book Fair"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── UPCOMING EVENTS PREVIEW ──────────────────────────────────────── */}
      <section className="py-24 bg-navy-light">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="mb-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="text-brand-green text-sm font-semibold uppercase tracking-widest mb-2">
                  Upcoming
                </p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tighter">
                  Next Event
                </h2>
              </div>
              <Link
                to="/events"
                className="text-brand-green text-sm font-semibold hover:underline self-start sm:self-auto"
              >
                View all events →
              </Link>
            </div>
          </ScrollReveal>

          {nextEvent ? (
            <ScrollReveal delay={80}>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden md:flex">
                {/* Color bar / image placeholder */}
                <div className="md:w-64 bg-brand-green-light flex items-center justify-center p-10 md:p-0 min-h-[140px]">
                  <div className="text-center">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-green mx-auto mb-2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <p className="text-brand-green text-xs font-semibold opacity-70">
                      [ EVENT IMAGE ]
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="inline-block bg-brand-green/10 text-brand-green text-xs font-semibold px-3 py-1 rounded-full mb-4">
                      Free · Open to All
                    </span>
                    <h3 className="text-2xl font-bold text-navy mb-2">{nextEvent.title}</h3>
                    <div className="flex flex-wrap gap-x-5 gap-y-1 text-gray-500 text-sm mb-4">
                      <span className="flex items-center gap-1.5">
                        <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="1" y="2" width="14" height="14" rx="2" ry="2"/>
                          <line x1="10" y1="0" x2="10" y2="4"/>
                          <line x1="4" y1="0" x2="4" y2="4"/>
                          <line x1="1" y1="7" x2="15" y2="7"/>
                        </svg>
                        {nextEvent.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="7" cy="7" r="6"/>
                          <polyline points="7 4 7 7 9 9"/>
                        </svg>
                        {nextEvent.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M10.5 1C7.46 1 5 3.46 5 6.5c0 4.5 5.5 9.5 5.5 9.5s5.5-5 5.5-9.5C16 3.46 13.54 1 10.5 1z" transform="translate(-4 -0.5)"/>
                          <circle cx="6.5" cy="6" r="1.5" transform="translate(-4 -0.5)"/>
                        </svg>
                        {nextEvent.location}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{nextEvent.shortDescription}</p>
                  </div>
                  <div className="mt-6">
                    <Link
                      to={`/events/${nextEvent.id}`}
                      className="inline-flex items-center gap-2 bg-navy hover:bg-navy/90 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
                    >
                      Register Now
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ) : (
            <ScrollReveal>
              <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
                <p className="text-gray-400">No upcoming events scheduled. Check back soon.</p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* ── GET INVOLVED TEASER ──────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="text-center mb-14">
            <p className="text-brand-green text-sm font-semibold uppercase tracking-widest mb-3">
              Join the Movement
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tighter mb-4">
              Get Involved
            </h2>
            <p className="text-gray-500 text-lg max-w-md mx-auto">
              Whether you show up, speak up, or give — there's a place for you in Equal Pages.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InvolvementCard
              icon={<HandsIcon />}
              title="Volunteer"
              description="Show up on event day to help set up, sort books, and serve students in your community."
              to="/get-involved#volunteer"
              delay={0}
            />
            <InvolvementCard
              icon={<MegaphoneIcon />}
              title="Become an Ambassador"
              description="Represent Equal Pages in your school or neighborhood and help us reach more students."
              to="/get-involved#ambassador"
              delay={100}
            />
            <InvolvementCard
              icon={<HeartIcon />}
              title="Donate"
              description="Every dollar funds books for a child who needs them most. No donation is too small."
              to="/get-involved#donate"
              delay={200}
            />
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA BANNER ─────────────────────────────────────────────── */}
      <section className="bg-brand-green py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tighter mb-5">
              Ready to make a difference?
            </h2>
            <p className="text-white/75 text-lg mb-8">
              Join us at our next book fair or get involved today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/events"
                className="bg-white text-brand-green font-semibold px-8 py-4 rounded-full hover:bg-white/90 transition-colors"
              >
                See Events
              </Link>
              <Link
                to="/get-involved"
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
              >
                Get Involved
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
