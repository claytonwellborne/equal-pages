import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

// ─── Reusable Form Components ────────────────────────────────────────────────

function FormField({ label, required, error, children }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-navy mb-1.5">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      {children}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}

const inputClass = (hasError) =>
  `w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/40 transition ${
    hasError ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
  }`

function SuccessMessage({ name, context }) {
  return (
    <div className="bg-brand-green-light border border-brand-green/20 rounded-2xl p-8 text-center">
      <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center mx-auto mb-4">
        <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h4 className="font-bold text-navy text-lg mb-1">Thank you, {name}!</h4>
      <p className="text-gray-600 text-sm">{context}</p>
    </div>
  )
}

// ─── Volunteer Form ──────────────────────────────────────────────────────────

function VolunteerForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', availability: [], message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const availabilityOptions = ['Event Day Setup', 'Book Sorting', 'Family Check-In', 'Student Support', 'Tear-Down / Cleanup']

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }))
  }

  const toggleAvailability = (opt) => {
    setForm((p) => ({
      ...p,
      availability: p.availability.includes(opt) ? p.availability.filter((o) => o !== opt) : [...p.availability, opt],
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required.'
    if (!form.email.trim()) errs.email = 'Email is required.'
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email.'
    if (Object.keys(errs).length) { setErrors(errs); return }
    // TODO: Connect to backend / Formspree / EmailJS
    console.log('Volunteer form:', form)
    setSubmitted(true)
  }

  if (submitted) return <SuccessMessage name={form.name} context="We'll be in touch before our next event with details on how to get involved." />

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Full Name" required error={errors.name}>
          <input name="name" type="text" value={form.name} onChange={handleChange} placeholder="Jane Smith" className={inputClass(errors.name)} />
        </FormField>
        <FormField label="Email Address" required error={errors.email}>
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="jane@example.com" className={inputClass(errors.email)} />
        </FormField>
      </div>
      <FormField label="Phone Number" error={errors.phone}>
        <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(713) 000-0000" className={inputClass(false)} />
      </FormField>
      <div>
        <p className="text-sm font-semibold text-navy mb-2">
          How would you like to help? <span className="text-gray-400 font-normal">(select all that apply)</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {availabilityOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => toggleAvailability(opt)}
              className={`text-sm px-4 py-2 rounded-full border transition-colors ${
                form.availability.includes(opt)
                  ? 'bg-brand-green border-brand-green text-white'
                  : 'border-gray-200 text-gray-600 hover:border-brand-green/40'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
      <FormField label="Anything else you'd like to share?" error={errors.message}>
        <textarea name="message" rows={3} value={form.message} onChange={handleChange} placeholder="Previous volunteer experience, questions, etc." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand-green/40 transition" />
      </FormField>
      <button type="submit" className="w-full sm:w-auto bg-navy hover:bg-navy/90 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-colors">
        Submit Volunteer Interest
      </button>
    </form>
  )
}

// ─── Ambassador Form ─────────────────────────────────────────────────────────

function AmbassadorForm() {
  const [form, setForm] = useState({ name: '', email: '', gradeOrRole: '', school: '', why: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required.'
    if (!form.email.trim()) errs.email = 'Email is required.'
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email.'
    if (!form.why.trim()) errs.why = 'Please tell us why you\'re interested.'
    if (Object.keys(errs).length) { setErrors(errs); return }
    // TODO: Connect to backend
    console.log('Ambassador form:', form)
    setSubmitted(true)
  }

  if (submitted) return <SuccessMessage name={form.name} context="We'll reach out as the Student Ambassador Program launches. Thank you for your interest!" />

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Full Name" required error={errors.name}>
          <input name="name" type="text" value={form.name} onChange={handleChange} placeholder="Jordan Lee" className={inputClass(errors.name)} />
        </FormField>
        <FormField label="Email Address" required error={errors.email}>
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="jordan@example.com" className={inputClass(errors.email)} />
        </FormField>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Grade or Role" error={errors.gradeOrRole}>
          <input name="gradeOrRole" type="text" value={form.gradeOrRole} onChange={handleChange} placeholder="e.g. 10th Grade, Community Organizer" className={inputClass(false)} />
        </FormField>
        <FormField label="School or Organization" error={errors.school}>
          <input name="school" type="text" value={form.school} onChange={handleChange} placeholder="Houston ISD, Houston Public Library…" className={inputClass(false)} />
        </FormField>
      </div>
      <FormField label="Why do you want to be an Equal Pages Ambassador?" required error={errors.why}>
        <textarea name="why" rows={4} value={form.why} onChange={handleChange} placeholder="Tell us about your passion for literacy and what you hope to accomplish…" className={`w-full border rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand-green/40 transition ${errors.why ? 'border-red-300 bg-red-50' : 'border-gray-200'}`} />
      </FormField>
      <button type="submit" className="w-full sm:w-auto bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-colors">
        Submit Ambassador Interest
      </button>
    </form>
  )
}

// ─── Partner / Sponsor Form ──────────────────────────────────────────────────

function PartnerForm() {
  const [form, setForm] = useState({ name: '', org: '', email: '', phone: '', inquiryType: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required.'
    if (!form.email.trim()) errs.email = 'Email is required.'
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email.'
    if (!form.inquiryType) errs.inquiryType = 'Please select an inquiry type.'
    if (Object.keys(errs).length) { setErrors(errs); return }
    // TODO: Connect to backend
    console.log('Partner form:', form)
    setSubmitted(true)
  }

  if (submitted) return <SuccessMessage name={form.name} context="A member of the Equal Pages team will follow up with you within 3–5 business days." />

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Your Name" required error={errors.name}>
          <input name="name" type="text" value={form.name} onChange={handleChange} placeholder="Alex Rivera" className={inputClass(errors.name)} />
        </FormField>
        <FormField label="Organization Name" error={errors.org}>
          <input name="org" type="text" value={form.org} onChange={handleChange} placeholder="Company or nonprofit name" className={inputClass(false)} />
        </FormField>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Email Address" required error={errors.email}>
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="alex@company.com" className={inputClass(errors.email)} />
        </FormField>
        <FormField label="Phone Number" error={errors.phone}>
          <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(713) 000-0000" className={inputClass(false)} />
        </FormField>
      </div>
      <FormField label="Inquiry Type" required error={errors.inquiryType}>
        <select
          name="inquiryType"
          value={form.inquiryType}
          onChange={handleChange}
          className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/40 transition bg-white ${errors.inquiryType ? 'border-red-300' : 'border-gray-200'}`}
        >
          <option value="">Select an inquiry type…</option>
          <option value="book-donation">Book Donation</option>
          <option value="financial-sponsorship">Financial Sponsorship</option>
          <option value="in-kind-support">In-Kind Support</option>
          <option value="venue-partnership">Venue / Hosting Partnership</option>
          <option value="media-outreach">Media Outreach</option>
          <option value="other">Other</option>
        </select>
      </FormField>
      <FormField label="Tell us more about your inquiry" error={errors.message}>
        <textarea name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Describe how you'd like to partner with Equal Pages…" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand-green/40 transition" />
      </FormField>
      <button type="submit" className="w-full sm:w-auto bg-navy hover:bg-navy/90 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-colors">
        Send Partnership Inquiry
      </button>
    </form>
  )
}

// ─── Section Wrapper ─────────────────────────────────────────────────────────

function Section({ id, icon, label, title, description, children, bg = 'bg-white' }) {
  return (
    <section id={id} className={`${bg} py-20 px-6 scroll-mt-20`}>
      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-brand-green-light flex items-center justify-center text-brand-green">
              {icon}
            </div>
            <span className="text-brand-green text-sm font-semibold uppercase tracking-widest">{label}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tighter mb-3">{title}</h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-xl">{description}</p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          {children}
        </ScrollReveal>
      </div>
    </section>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function GetInvolved() {
  const location = useLocation()

  // Handle anchor hash on load
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [location.hash])

  return (
    <>
      {/* ── PAGE HERO ────────────────────────────────────────────────────── */}
      <section className="bg-navy py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-brand-green text-sm font-semibold uppercase tracking-widest mb-4">Get Involved</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tightest leading-tight mb-5">
              There's a place
              <br />
              for you here.
            </h1>
            <p className="text-white/60 text-xl max-w-lg leading-relaxed">
              Show up, speak up, or give. Every form of support puts more books in more hands.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick nav */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="max-w-4xl mx-auto px-6 flex gap-6 overflow-x-auto py-3">
          {[
            { href: '#volunteer', label: 'Volunteer' },
            { href: '#ambassador', label: 'Ambassador' },
            { href: '#partner', label: 'Partner / Sponsor' },
            { href: '#donate', label: 'Donate' },
          ].map(({ href, label }) => (
            <a key={href} href={href} className="text-sm font-medium text-gray-500 hover:text-navy whitespace-nowrap py-1 border-b-2 border-transparent hover:border-brand-green transition-all">
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* ── VOLUNTEER ────────────────────────────────────────────────────── */}
      <Section
        id="volunteer"
        label="Volunteer"
        title="Show Up and Serve"
        description="Volunteers are the heartbeat of Equal Pages. Help us set up, sort books, and serve students and families at our community book fairs. No experience required — just a heart for kids and literacy."
        bg="bg-white"
        icon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
            <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
            <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
            <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
          </svg>
        }
      >
        <VolunteerForm />
      </Section>

      <div className="max-w-4xl mx-auto px-6"><div className="border-t border-gray-100" /></div>

      {/* ── AMBASSADOR ───────────────────────────────────────────────────── */}
      <Section
        id="ambassador"
        label="Ambassador Program"
        title="Become an Ambassador"
        description="Student and community ambassadors are the future of Equal Pages. Help spread the word, organize book drives, and build the literacy movement in your school or neighborhood. The Student Ambassador Program is coming soon — get on the list now."
        bg="bg-white"
        icon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 11l19-9-9 19-2-8-8-2z" />
          </svg>
        }
      >
        <AmbassadorForm />
      </Section>

      <div className="bg-navy-light">
        {/* ── PARTNER / SPONSOR ────────────────────────────────────────────── */}
        <Section
          id="partner"
          label="Partner & Sponsor"
          title="Partner With Us"
          description="Organizations and businesses can support Equal Pages through book donations, financial sponsorships, in-kind support, or venue partnerships. Help us reach more students across Houston."
          bg="bg-navy-light"
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          }
        >
          <PartnerForm />
        </Section>
      </div>

      {/* ── DONATE ───────────────────────────────────────────────────────── */}
      <Section
        id="donate"
        label="Donate"
        title="Fund the Books"
        description="Your donation directly funds books for Houston students. Every $10 provides a book for a child who needs it most. 100% of proceeds go toward book procurement and event operations."
        bg="bg-white"
        icon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        }
      >
        <div className="space-y-8">
          {/* Impact rows */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { amount: '$10', impact: 'Provides 1 book for a child' },
              { amount: '$50', impact: 'Stocks a shelf for a family' },
              { amount: '$250', impact: 'Funds an entire student section' },
            ].map(({ amount, impact }) => (
              <div key={amount} className="bg-navy-light rounded-2xl p-5 text-center">
                <div className="text-2xl font-extrabold text-brand-green mb-1">{amount}</div>
                <p className="text-navy text-sm">{impact}</p>
              </div>
            ))}
          </div>

          <div>
            {/* DONATE BUTTON PLACEHOLDER */}
            {/* TODO: Replace href with actual donation link (e.g. PayPal Giving Fund, Donorbox, or direct link) */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); alert('Donation link coming soon! Check back shortly.') }}
              className="inline-flex items-center gap-3 bg-brand-green hover:bg-brand-green-dark text-white font-bold text-lg px-10 py-5 rounded-full transition-colors shadow-lg shadow-brand-green/20"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              Donate to Equal Pages
            </a>
            <p className="text-gray-400 text-sm mt-3">
              Donation link placeholder — replace with live link when ready.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
