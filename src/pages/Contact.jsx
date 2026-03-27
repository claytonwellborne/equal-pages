import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'

// ─── Social Icons ─────────────────────────────────────────────────────────────

const InstagramIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const XIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const FacebookIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

// ─── Contact Form ─────────────────────────────────────────────────────────────

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }))
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required.'
    if (!form.email.trim()) errs.email = 'Email is required.'
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email.'
    if (!form.subject.trim()) errs.subject = 'Please add a subject.'
    if (!form.message.trim()) errs.message = 'Message cannot be empty.'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    // TODO: Wire up to backend / Formspree / EmailJS
    console.log('Contact form:', form)
    setSubmitted(true)
  }

  const inputCls = (hasError) =>
    `w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/40 transition ${
      hasError ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
    }`

  if (submitted) {
    return (
      <div className="bg-brand-green-light border border-brand-green/20 rounded-2xl p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-brand-green flex items-center justify-center mx-auto mb-5">
          <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy mb-2">Message received!</h3>
        <p className="text-gray-600 text-sm">
          Thanks for reaching out, <strong>{form.name}</strong>. We'll get back to you at{' '}
          <strong>{form.email}</strong> within 2–3 business days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">
            Name <span className="text-red-400">*</span>
          </label>
          <input name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your name" className={inputCls(errors.name)} />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">
            Email <span className="text-red-400">*</span>
          </label>
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputCls(errors.email)} />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-navy mb-1.5">
          Subject <span className="text-red-400">*</span>
        </label>
        <input name="subject" type="text" value={form.subject} onChange={handleChange} placeholder="What's this about?" className={inputCls(errors.subject)} />
        {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
      </div>
      <div>
        <label className="block text-sm font-semibold text-navy mb-1.5">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          name="message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="Write your message here…"
          className={`w-full border rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand-green/40 transition ${
            errors.message ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
          }`}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-colors"
      >
        Send Message
      </button>
    </form>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Contact() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-navy py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-brand-green text-sm font-semibold uppercase tracking-widest mb-4">
              Contact
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tightest leading-tight mb-5">
              Say Hello.
            </h1>
            <p className="text-white/60 text-xl max-w-md leading-relaxed">
              Questions, partnerships, media inquiries, or just want to learn more — we'd love
              to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Left: Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-navy mb-2">Send us a message</h2>
                <p className="text-gray-500 text-sm mb-8">
                  We'll respond within 2–3 business days.
                </p>
                <ContactForm />
              </ScrollReveal>
            </div>

            {/* Right: Contact info */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={100}>
                <div className="space-y-8">
                  {/* Email */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">
                      Email
                    </h3>
                    <a
                      href="mailto:info@equalpages.org"
                      className="flex items-center gap-3 text-navy font-semibold hover:text-brand-green transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-brand-green-light flex items-center justify-center text-brand-green flex-shrink-0">
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" transform="scale(0.65) translate(1.5, 2)" />
                          <polyline points="22,6 12,13 2,6" transform="scale(0.65) translate(1.5, 2)" />
                        </svg>
                      </div>
                      {/* PLACEHOLDER: Replace with real email */}
                      info@equalpages.org
                    </a>
                    <p className="text-gray-400 text-xs mt-1 ml-13">[ Placeholder email — update before launch ]</p>
                  </div>

                  {/* Phone */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">
                      Phone
                    </h3>
                    <a
                      href="tel:+17130000000"
                      className="flex items-center gap-3 text-navy font-semibold hover:text-brand-green transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-brand-green-light flex items-center justify-center text-brand-green flex-shrink-0">
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.98-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z" transform="scale(0.65) translate(1.5, 1.5)" />
                        </svg>
                      </div>
                      {/* PLACEHOLDER: Replace with real phone number */}
                      (713) 000-0000
                    </a>
                    <p className="text-gray-400 text-xs mt-1 ml-13">[ Placeholder phone — update before launch ]</p>
                  </div>

                  {/* Location */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">
                      Based In
                    </h3>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-green-light flex items-center justify-center text-brand-green flex-shrink-0">
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M10.5 1A4.5 4.5 0 0 0 6 5.5C6 8.625 10.5 15 10.5 15S15 8.625 15 5.5A4.5 4.5 0 0 0 10.5 1z" transform="scale(0.9) translate(1,0)" />
                          <circle cx="10.5" cy="5.5" r="1.5" transform="scale(0.9) translate(1,0)" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-navy font-semibold">Houston, Texas</p>
                        <p className="text-gray-400 text-sm">Serving the greater Houston area</p>
                      </div>
                    </div>
                  </div>

                  {/* Social links */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">
                      Follow Us
                    </h3>
                    <div className="flex items-center gap-4">
                      {[
                        { label: 'Instagram', icon: <InstagramIcon />, href: '#' },
                        { label: 'X (Twitter)', icon: <XIcon />, href: '#' },
                        { label: 'Facebook', icon: <FacebookIcon />, href: '#' },
                      ].map(({ label, icon, href }) => (
                        <a
                          key={label}
                          href={href}
                          aria-label={`Equal Pages on ${label}`}
                          className="w-10 h-10 rounded-xl bg-navy-light flex items-center justify-center text-navy-muted hover:bg-navy hover:text-white transition-all"
                        >
                          {icon}
                        </a>
                      ))}
                    </div>
                    <p className="text-gray-400 text-xs mt-2">
                      {/* PLACEHOLDER: Update these with real social profile links */}
                      [ Update social links with real profiles before launch ]
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ TEASER ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-navy-light px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-navy mb-8">Common Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Is the book fair really free?',
                  a: 'Yes — 100% free. Every child who attends gets to choose and keep their books at no cost.',
                },
                {
                  q: 'Do I need to register to attend?',
                  a: 'Pre-registration helps us prepare, but walk-ins are always welcome. Just show up!',
                },
                {
                  q: 'How can my school or organization host a book fair?',
                  a: 'We partner with schools, libraries, churches, and community orgs. Reach out using the contact form above.',
                },
                {
                  q: 'Is Equal Pages a registered nonprofit?',
                  a: '[ PLACEHOLDER: Add 501(c)(3) status information here when registered. ]',
                },
              ].map(({ q, a }) => (
                <details key={q} className="bg-white rounded-xl border border-gray-100 group">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-navy text-sm list-none flex items-center justify-between hover:text-brand-green transition-colors">
                    {q}
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 group-open:rotate-180 transition-transform">
                      <path d="M4 6l8 8 8-8" transform="scale(0.55) translate(3, 3)" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">{a}</div>
                </details>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
