import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Star } from 'lucide-react'

export function AboutSection() {
  return (
    <section className="relative bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_-10%,rgba(56,189,248,0.15),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">Philosophy</h2>
            <p className="text-white/70">
              I craft interfaces that feel inevitable—where motion guides, typography speaks,
              and technology disappears. Systems-thinking meets cinematography to ship products
              that are as performant as they are poetic.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { label: 'Years', value: 15 },
                { label: 'Products', value: 40 },
                { label: 'Awards', value: 18 },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
                >
                  <div className="text-3xl font-semibold" aria-label={`${s.value} ${s.label}`}>
                    {s.value}
                  </div>
                  <div className="text-xs uppercase tracking-wide text-white/60">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {['Design Systems', 'Motion Design', 'Frontend', 'Accessibility', 'Prototyping', '3D/Visuals'].map((skill) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-5"
              >
                <div className="mb-2 text-sm text-white/60">Capability</div>
                <div className="text-lg font-medium">{skill}</div>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full bg-cyan-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${70 + Math.floor(Math.random() * 30)}%` }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function ProjectsSection() {
  const projects = [
    { title: 'Kinetic Commerce', tags: ['Next.js', 'Framer Motion', 'Stripe'], image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1400&auto=format&fit=crop' },
    { title: 'Spatial Media', tags: ['WebGL', 'Spline', 'GSAP'], image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop' },
    { title: 'Design Systems', tags: ['Figma', 'Tokens', 'Accessibility'], image: 'https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=80&w=1400&auto=format&fit=crop' },
  ]

  return (
    <section className="relative bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_-20%,rgba(168,85,247,0.15),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-3xl font-semibold md:text-4xl">Selected Work</h2>
          <a className="text-sm text-cyan-300 hover:text-cyan-200" href="#">View All</a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={p.image} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="mb-2 text-lg font-medium">{p.title}</div>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/15 bg-white/10 px-2 py-1 text-xs text-white/80">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="relative bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_-30%,rgba(34,197,94,0.15),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-2 text-center text-3xl font-semibold md:text-4xl">Let’s build something remarkable</h2>
          <p className="mb-8 text-center text-white/70">Briefly share your goals and I’ll get back within 24 hours.</p>

          <form
            onSubmit={(e) => { e.preventDefault(); alert('Message sent!') }}
            className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm text-white/70">Name</label>
              <input id="name" required placeholder="Ada Lovelace" className="rounded-md border border-white/10 bg-white/10 px-3 py-2 outline-none placeholder:text-white/40 focus:border-cyan-400" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm text-white/70">Email</label>
              <input id="email" type="email" required placeholder="you@company.com" className="rounded-md border border-white/10 bg-white/10 px-3 py-2 outline-none placeholder:text-white/40 focus:border-cyan-400" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="msg" className="text-sm text-white/70">Message</label>
              <textarea id="msg" rows={4} required placeholder="Tell me about your project…" className="rounded-md border border-white/10 bg-white/10 px-3 py-2 outline-none placeholder:text-white/40 focus:border-cyan-400" />
            </div>
            <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-cyan-500/90 px-5 py-2.5 font-medium text-slate-950 transition-colors hover:bg-cyan-400">
              <Mail className="h-4 w-4" /> Send message
            </button>
          </form>

          <div className="mt-6 flex items-center justify-center gap-4 text-white/70">
            <a href="#" className="hover:text-white"><Github className="h-5 w-5" /></a>
            <a href="#" className="hover:text-white"><Linkedin className="h-5 w-5" /></a>
            <a href="#" className="hover:text-white"><Star className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
