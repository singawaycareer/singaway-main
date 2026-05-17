import { motion } from 'framer-motion'
import airport from '@/assets/airport.webp'
import student from '@/assets/student.webp'
import warehouse from '@/assets/warehouse.webp'
import { Section, SectionHeader } from './Section'
import bg from '@/assets/bg.webp'

const benefits = [
  'Better Salary Opportunities',
  'International Exposure',
  'Safe & Clean Environment',
  'High Quality Education',
  'Career Growth',
  'Stable Future',
  'Modern Lifestyle',
  'Global Work Culture',
]

const stats = [
  { k: 'Top 5', v: 'Global financial hub' },
  { k: '1.4M+', v: 'Foreign professionals' },
  { k: '98%', v: 'Literacy rate' },
  { k: 'S$2.0K+', v: 'Avg. starting salary' },
]

export function WhySingapore() {
  return (
    <Section id="why">
      <SectionHeader
        eyebrow="Why Singapore"
        title="Why Choose Singapore?"
        desc="A global hub for opportunity — combining career mobility, world-class education and one of the safest, most modern cities in Asia."
      />

      {/* Image collage */}
      <div className="mt-14 grid grid-cols-12 gap-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="col-span-12 overflow-hidden rounded-3xl border border-border md:col-span-7"
        >
          <img
            src={bg}
            loading="lazy"
            alt="Singapore skyline"
            className="h-72 w-full object-cover sm:h-[420px]"
          />
        </motion.div>

        <div className="col-span-12 grid grid-cols-2 gap-3 md:col-span-5">
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            src={warehouse}
            loading="lazy"
            alt="Singapore warehouse"
            className="h-44 w-full rounded-3xl border border-border object-cover sm:h-[206px]"
          />
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            src={student}
            loading="lazy"
            alt="Student on campus"
            className="h-44 w-full rounded-3xl border border-border object-cover sm:h-[206px]"
          />
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            src={airport}
            loading="lazy"
            alt="Singapore warehouse"
            className="col-span-2 h-44 w-full rounded-3xl border border-border object-center sm:h-[206px]"
          />
        </div>
      </div>

      {/* Benefits */}
      <div className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {benefits.map((b, i) => (
          <motion.div
            key={b}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className="rounded-2xl border border-border bg-surface px-4 py-3 text-sm"
          >
            {b}
          </motion.div>
        ))}
      </div>

      {/* Animated counters */}
      <div className="mt-10 grid grid-cols-2 divide-x divide-border rounded-3xl border border-border bg-card sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.v} className="p-6 text-center">
            <p className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {s.k}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">{s.v}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
