import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import { upcomingEvents, pastEvents } from '../data/events'

// ─── Upcoming Event Card ─────────────────────────────────────────────────────

function UpcomingEventCard({ event, delay }) {
  return (
    <ScrollReveal delay={delay}>
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
        {/* Image placeholder */}
        <div className="h-48 bg-brand-green-light flex items-center justify-center">
          <div className="text-center">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-green mx-auto mb-2 opacity-60">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <span className="text-brand-green text-xs font-medium opacity-50">[ EVENT PHOTO ]</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-7 flex flex-col flex-1">
          <span className="inline-block bg-brand-green/10 text-brand-green text-xs font-semibold px-3 py-1 rounded-full mb-4 self-start">
            Free · Open to All
          </span>

          <h3 className="text-xl font-bold text-navy mb-3">{event.title}</h3>

          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                <rect x="1" y="2" width="14" height="14" rx="2" ry="2" />
                <line x1="10" y1="0" x2="10" y2="4" />
                <line x1="4" y1="0" x2="4" y2="4" />
                <line x1="1" y1="7" x2="15" y2="7" />
              </svg>
              {event.date}
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                <circle cx="7" cy="7" r="6" />
                <polyline points="7 4 7 7 9 9" />
              </svg>
              {event.time}
            </div>
            <div className="flex items-start gap-2 text-gray-500 text-sm">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                <path d="M11 17.25c0 0-6.5-6.45-6.5-10.25a6.5 6.5 0 1 1 13 0c0 3.8-6.5 10.25-6.5 10.25z" transform="translate(0.5 0)" />
                <circle cx="11.5" cy="7" r="2" transform="translate(0 0)" />
              </svg>
              <span>
                {event.location}
                {event.address && (
                  <span className="block text-gray-400">{event.address}</span>
                )}
              </span>
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
            {event.shortDescription}
          </p>

          <Link
            to={`/events/${event.id}`}
            className="w-full bg-navy hover:bg-navy/90 text-white font-semibold text-sm py-3 rounded-full text-center transition-colors block"
          >
            Register Now →
          </Link>
        </div>
      </div>
    </ScrollReveal>
  )
}

// ─── Past Event Card ─────────────────────────────────────────────────────────

function PastEventCard({ event, delay }) {
  return (
    <ScrollReveal delay={delay}>
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
        <div className="md:flex">
          {/* Image placeholder */}
          <div className="md:w-56 h-48 md:h-auto bg-navy-light flex items-center justify-center flex-shrink-0">
            <div className="text-center p-6">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-navy-muted mx-auto mb-2 opacity-40">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span className="text-navy-muted text-xs opacity-40">[ RECAP PHOTO ]</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 flex-1">
            <span className="inline-block bg-gray-100 text-gray-500 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Past Event
            </span>
            <h3 className="text-xl font-bold text-navy mb-1">{event.title}</h3>
            <p className="text-gray-400 text-sm mb-4">
              {event.date} · {event.location}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {event.shortDescription}
            </p>

            {/* Impact stats */}
            {event.stats && (
              <div className="flex flex-wrap gap-6 mb-6">
                {event.stats.map(({ label, value }) => (
                  <div key={label}>
                    <div className="text-2xl font-extrabold text-brand-green tracking-tighter">
                      {value}
                    </div>
                    <div className="text-gray-500 text-xs mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            )}

            <button className="inline-flex items-center gap-2 border border-navy text-navy font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-navy hover:text-white transition-colors">
              See Recap
              {/* Note: Connect to a recap page or modal when available */}
            </button>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Events() {
  return (
    <>
      {/* ── PAGE HERO ────────────────────────────────────────────────────── */}
      <section className="bg-navy py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-brand-green text-sm font-semibold uppercase tracking-widest mb-4">
              Events
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tightest leading-tight mb-5">
              Join Us
            </h1>
            <p className="text-white/60 text-xl max-w-lg leading-relaxed">
              Free community book fairs in Houston. Every child walks away with books they
              chose themselves.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── UPCOMING EVENTS ──────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tighter">
              Upcoming Events
            </h2>
          </ScrollReveal>

          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, i) => (
                <UpcomingEventCard key={event.id} event={event} delay={i * 80} />
              ))}
            </div>
          ) : (
            <ScrollReveal>
              <div className="bg-navy-light rounded-2xl p-16 text-center">
                <p className="text-gray-400 text-lg mb-2">No upcoming events scheduled.</p>
                <p className="text-gray-400 text-sm">
                  Follow us on social media or{' '}
                  <a href="mailto:info@equalpages.org" className="text-brand-green hover:underline">
                    join our mailing list
                  </a>{' '}
                  to be notified when new events are posted.
                </p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* ── PAST EVENTS ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-navy-light">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tighter">
              Past Events
            </h2>
          </ScrollReveal>

          {pastEvents.length > 0 ? (
            <div className="space-y-6">
              {pastEvents.map((event, i) => (
                <PastEventCard key={event.id} event={event} delay={i * 80} />
              ))}
            </div>
          ) : (
            <ScrollReveal>
              <p className="text-gray-400">No past events to show yet.</p>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* ── HOST AN EVENT CTA ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy tracking-tighter mb-4">
              Want to host a book fair in your community?
            </h2>
            <p className="text-gray-500 mb-8">
              We partner with schools, libraries, churches, and community organizations across
              Houston. Reach out and let's talk.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Get in Touch
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
