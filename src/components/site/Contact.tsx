import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { Section } from './Section'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'sonner'

const services = [
  'Singapore Work Permit',
  'S Pass',
  'Employment Pass',
  'Study Visa',
  'Career Consultation',
  'Job Placement',
]

type FormData = {
  name: string
  phone: string
  email: string
  service: string
  message: string
}

export function Contact() {
  const [sent , setSent] = useState(false)

  const {
    register,
    handleSubmit,
   
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
   
 
   const response = await axios.post(`${import.meta.env.BASE_URL}/send-email`, data);
   
   if(response.status === 200){
    setSent(true)
    toast.success('Email sent successfully')
    alert('Email sent successfully')
   }
   else{
    setSent(false)
    toast.error('Email sending failed')
    alert('Email sending failed')
   }
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

            <a
              href="https://www.google.com/maps/dir//SINGAWAY+TRADE+AND+TEST+CENTRE+PVT.+LTD.,+4th+Floor,+MOTIAZ+ROYAL+BUSINESS+PARK,+404,+Zirakpur,+Punjab+140603/@28.5900635,77.2290188,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390febe6746fe86b:0x18af830c46df0681!2m2!1d76.8247521!2d30.6329049?hl=en-in&entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              <p className="flex items-center gap-3 text-foreground/90">
                <span className="grid h-9 w-9 place-items-center rounded-xl border border-border cursor-pointer">
                  <MapPin className="h-4 w-4" />
                </span>

                #404, 4th Floor, MOTIAZ ROYAL BUSINESS PARK, Zirakpur, Punjab
                140603
              </p>
            </a>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit(onSubmit)}
          className="lg:col-span-3 rounded-3xl border border-border glass-strong p-6 shadow-luxe sm:p-8"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field
              label="Full Name"
              placeholder="Your full name"
              required
              {...register('name')}
            />

            <Field
              label="Phone / WhatsApp"
              placeholder="+91 ..."
              required
              {...register('phone')}
            />

            <Field
              label="Email"
              type="email"
              placeholder="you@email.com"
              required
              {...register('email')}
            />

            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                Interested Service
              </label>

              <select
                {...register('service')}
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
                {...register('message')}
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