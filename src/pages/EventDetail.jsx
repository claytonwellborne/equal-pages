import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import { upcomingEvents } from '../data/events'

const AGE_RANGES = ['Kindergarten – 2nd grade', '3rd – 5th grade', '6th – 8th grade', '9th – 12th grade']

// ─── Pre-Registration Form ───────────────────────────────────────────────────

function RegistrationForm({ eventTitle }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    childCount: '',
    ageRanges: [],
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleAgeRange = (range) => {
    setForm((prev) => ({
      ...prev,
      ageRanges: prev.ageRanges.includes(range)
        ? prev.ageRanges.filter((r) => r !== range)
        : [...prev.ageRanges, range],
    }))
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required.'
    if (!form.email.trim()) errs.email = 'Email is required.'
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email address.'
    if (!form.childCount) errs.childCount = 'Please enter a number.'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    // TODO: Wire up to backend / email service (e.g. Formspree, EmailJS, or custom API)
    console.log('Registration submitted:', form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-brand-green-light border border-brand-green/20 rounded-2xl p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-brand-green flex items-center justify-center mx-auto mb-5">
          <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy mb-2">You're registered!</h3>
        <p className="text-gray-600">
          Thanks, <strong>{form.name}</strong>! We've received your pre-registration for{' '}
          <strong>{eventTitle}</strong>. We'll send a confirmation to{' '}
          <strong>{form.email}</strong> shortly.
        </p>
        <p className="text-gray-400 text-sm mt-4">
          No action required — just show up on the day!
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Name */}
      <div>
        <label className="block text-sm font-semibold text-navy mb-1.5" htmlFor="reg-name">
          Your Name <span className="text-red-400">*</span>
        </label>
        <input
          id="reg-name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="Jane Smith"
          className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/40 transition ${
            errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
          }`}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-navy mb-1.5" htmlFor="reg-email">
          Email Address <span className="text-red-400">*</span>
        </label>
        <input
          id="reg-email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="jane@example.com"
          className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/40 transition ${
            errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
          }`}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Number of children */}
      <div>
        <label className="block text-sm font-semibold text-navy mb-1.5" htmlFor="reg-children">
          Number of Children Attending <span className="text-red-400">*</span>
        </label>
        <input
          id="reg-children"
          name="childCount"
          type="number"
          min="1"
          max="20"
          value={form.childCount}
          onChange={handleChange}
          placeholder="2"
          className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/40 transition ${
            errors.childCount ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
          }`}
        />
        {errors.childCount && <p className="text-red-500 text-xs mt-1">{errors.childCount}</p>}
      </div>

      {/* Age ranges */}
      <div>
        <p className="text-sm font-semibold text-navy mb-2">
          Age Range(s) of Children{' '}
          <span className="text-gray-400 font-normal">(select all that apply)</span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {AGE_RANGES.map((range) => (
            <label
              key={range}
              className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 cursor-pointer hover:border-brand-green/40 transition has-[:checked]:border-brand-green has-[:checked]:bg-brand-green-light"
            >
              <input
                type="checkbox"
                checked={form.ageRanges.includes(range)}
                onChange={() => handleAgeRange(range)}
                className="accent-brand-green w-4 h-4"
              />
              <span className="text-sm text-navy">{range}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Optional notes */}
      <div>
        <label className="block text-sm font-semibold text-navy mb-1.5" htmlFor="reg-notes">
          Anything we should know?{' '}
          <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <textarea
          id="reg-notes"
          name="notes"
          rows={3}
          value={form.notes}
          onChange={handleChange}
          placeholder="Accessibility needs, questions, etc."
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand-green/40 transition"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-brand-green hover:bg-brand-green-dark text-white font-semibold py-4 rounded-full text-sm transition-colors"
      >
        Pre-Register — It's Free
      </button>
      <p className="text-center text-gray-400 text-xs">
        No payment required. Pre-registration helps us prepare — walk-ins are always welcome.
      </p>
    </form>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function EventDetail() {
  const { id } = useParams()
  const event = upcomingEvents.find((e) => e.id === id)

  if (!event) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-navy mb-4">Event Not Found</h1>
          <p className="text-gray-500 mb-8">
            This event doesn't exist or may have been removed.
          </p>
          <Link
            to="/events"
            className="inline-flex items-center gap-2 bg-brand-green text-white font-semibold px-6 py-3 rounded-full hover:bg-brand-green-dark transition-colors"
          >
            ← Back to Events
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* ── EVENT HERO ───────────────────────────────────────────────────── */}
      <section className="bg-navy py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors"
            >
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              All Events
            </Link>
            <span className="inline-block bg-brand-green/10 border border-brand-green/20 text-brand-green text-xs font-semibold px-3 py-1 rounded-full mb-5">
              Free · Open to All
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tightest leading-tight mb-6 max-w-2xl">
              {event.title}
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/60 text-sm">
              <span className="flex items-center gap-2">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="2" width="14" height="14" rx="2" ry="2"/>
                  <line x1="10" y1="0" x2="10" y2="4"/>
                  <line x1="4" y1="0" x2="4" y2="4"/>
                  <line x1="1" y1="7" x2="15" y2="7"/>
                </svg>
                {event.date}
              </span>
              <span className="flex items-center gap-2">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="7" cy="7" r="6"/>
                  <polyline points="7 4 7 7 9 9"/>
                </svg>
                {event.time}
              </span>
              <span className="flex items-center gap-2">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7.5 0A4.5 4.5 0 0 0 3 4.5C3 8.25 7.5 14 7.5 14S12 8.25 12 4.5A4.5 4.5 0 0 0 7.5 0z" transform="translate(0 0)"/>
                  <circle cx="7.5" cy="4.5" r="1.5"/>
                </svg>
                {event.location}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">

            {/* Left: Event details */}
            <div className="lg:col-span-3 space-y-14">

              {/* Photo placeholder */}
              <ScrollReveal>
                <div className="aspect-video bg-navy-light rounded-2xl flex flex-col items-center justify-center border border-gray-200">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-navy-muted opacity-30 mb-3">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <span className="text-navy-muted text-sm opacity-40">[ EVENT PHOTO PLACEHOLDER ]</span>
                  <span className="text-navy-muted text-xs opacity-30 mt-1">{event.title}</span>
                </div>
              </ScrollReveal>

              {/* About this event */}
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-navy mb-4">About This Event</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{event.fullDescription}</p>
              </ScrollReveal>

              {/* What to expect */}
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-navy mb-5">What to Expect</h2>
                <ul className="space-y-3">
                  {event.whatToExpect.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-brand-green-light flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="12" height="12" fill="none" stroke="#2D9B6F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" transform="scale(0.6) translate(0, 1)" />
                        </svg>
                      </span>
                      <span className="text-gray-700 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              {/* Location */}
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-navy mb-4">Location</h2>
                <div className="bg-navy-light rounded-2xl p-6">
                  <p className="font-semibold text-navy mb-1">{event.location}</p>
                  {event.address && <p className="text-gray-500 text-sm">{event.address}</p>}
                  {/* MAP PLACEHOLDER */}
                  <div className="mt-4 h-40 bg-gray-200 rounded-xl flex items-center justify-center">
                    <span className="text-gray-400 text-sm">[ MAP EMBED PLACEHOLDER ]</span>
                  </div>
                </div>
              </ScrollReveal>

            </div>

            {/* Right: Registration form (sticky) */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="sticky top-24">
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                    <h2 className="text-xl font-bold text-navy mb-1">Pre-Register</h2>
                    <p className="text-gray-500 text-sm mb-6">
                      Free to attend. Pre-registration helps us prepare enough books.
                    </p>
                    <RegistrationForm eventTitle={event.title} />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
