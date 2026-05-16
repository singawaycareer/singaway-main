import { useState } from 'react'

import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { Section } from './Section'

const services = [
  'Singapore Work Permit',
  'S Pass',
  'Employment Pass',
  'Study Visa',
  'Career Consultation',
  'Job Placement',
]

export function Contact() {
  const [sent, setSent] = useState(false)
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <Section id="contact" className="border-t border-border">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Contact
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Start your Singapore journey.
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Tell us about your goals. A consultant will reach out within one
            business day.
          </p>

          <div className="mt-8 space-y-3 text-sm">
            <a
              className="flex items-center gap-3 text-foreground/90 hover:text-foreground"
              href="tel:+917888727497"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl border border-border">
                <Phone className="h-4 w-4" />
              </span>
              +91 78887 27497
            </a>
            <a
              className="flex items-center gap-3 text-foreground/90 hover:text-foreground"
              href="mailto:singawaycareer@gmail.com"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl border border-border">
                <Mail className="h-4 w-4" />
              </span>
              singawaycareer@gmail.com
            </a>
            <p className="flex items-center gap-3 text-foreground/90">
              <span className="grid h-9 w-9 place-items-center rounded-xl border border-border">
                <MapPin className="h-4 w-4" />
              </span>
              Raffles Place, Singapore
            </p>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={onSubmit}
          className="lg:col-span-3 rounded-3xl border border-border glass-strong p-6 shadow-luxe sm:p-8"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field
              label="Full Name"
              name="name"
              placeholder="Your full name"
              required
            />
            <Field
              label="Phone / WhatsApp "
              name="phone"
              placeholder="+91 ..."
              required
            />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="you@email.com"
              required
            />
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                Interested Service
              </label>
              <select
                name="service"
                className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-foreground"
              >
                {services.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your background and goals…"
                className="w-full rounded-xl border border-border bg-background p-3 text-sm outline-none focus:border-foreground"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            {sent ? "Thank you — we'll be in touch" : 'Send enquiry'}
            <ArrowUpRight className="h-4 w-4" />
          </button>
          <p className="mt-3 text-xs text-muted-foreground">
            By submitting, our team will contact you as soon as possible to
            guide you further. We’re here to help at every step.
          </p>
        </motion.form>
      </div>
    </Section>
  )
}

function Field(
  props: React.InputHTMLAttributes<HTMLInputElement> & { label: string },
) {
  const { label, ...rest } = props
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
        {label}
      </label>
      <input
        {...rest}
        className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none transition-colors focus:border-foreground"
      />
    </div>
  )
}
