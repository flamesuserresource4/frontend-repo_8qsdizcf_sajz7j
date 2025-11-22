import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Sparkles } from 'lucide-react'
import React, { useRef } from 'react'

const easing = [0.22, 1, 0.36, 1]

function useMagnetic() {
  const ref = useRef(null)
  const onMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const strength = 16
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * strength
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * strength
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`
  }
  const onMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate3d(0,0,0)'
  }
  return { ref, onMouseMove, onMouseLeave }
}

export default function Hero() {
  const magnetic = useMagnetic()

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-slate-950 text-white">
      {/* Animated gradient mesh */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-24 opacity-60 blur-3xl [mask-image:radial-gradient(closest-side,white,transparent)]">
          <div className="animate-[spin_18s_linear_infinite] from-fuchsia-500 via-sky-500 to-violet-600 bg-[conic-gradient(var(--tw-gradient-stops))] h-[140vmax] w-[140vmax] rounded-full" />
        </div>
        {/* Grain overlay */}
        <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay" style={{backgroundImage:
          'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNDAwJyBoZWlnaHQ9JzQwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48ZmlsdGVyIGlkPSdncmFpbic+PGZlVHVyYnVsZW5jZSB0eXBlPSdmcmFjdGFsTm9pc2UnIGJhc2VGcmVxdWVuY3k9JzAnIG51bU9jdGF2ZXM9JzInIHN0aXRjaFRpbGVzPSdzdGl0Y2gnLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWx0ZXI9InVybCgjZ3JhaW4pIi8+PC9zdmc+" )'}} />
      </div>

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/80 pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easing }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur"
        >
          <Sparkles className="h-4 w-4 text-amber-300" />
          <span className="text-white/80">Portfolio · Modern · Interactive</span>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.04 } },
          }}
          className="hero-title mb-4 text-center text-5xl font-semibold leading-tight tracking-tight md:text-7xl"
          aria-label="Crafting unforgettable digital experiences"
        >
          {Array.from('Crafting unforgettable digital experiences').map((ch, i) => (
            <motion.span
              key={i}
              className="inline-block will-change-transform"
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: easing }}
            >
              {ch === ' ' ? '\u00A0' : ch}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: easing }}
          className="mb-10 max-w-2xl text-center text-lg text-white/70 md:text-xl"
        >
          Design systems, motion, and engineering converging into a single, seamless narrative.
        </motion.p>

        <div className="flex items-center gap-4">
          <button
            className="group relative overflow-hidden rounded-full border border-white/10 bg-white/10 px-6 py-3 text-white shadow-[0_0_40px_rgba(56,189,248,0.15)] backdrop-blur transition-colors hover:bg-white/15"
            ref={magnetic.ref}
            onMouseMove={magnetic.onMouseMove}
            onMouseLeave={magnetic.onMouseLeave}
          >
            <span className="relative z-10 inline-flex items-center gap-2">
              View Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
            <span className="pointer-events-none absolute inset-0 -z-0 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(59,130,246,0.35),transparent_60%)]" />
          </button>
          <a href="#contact" className="rounded-full border border-white/10 px-6 py-3 text-white/80 hover:text-white/100 transition-colors">Contact</a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <div className="h-10 w-6 rounded-full border border-white/20 p-1">
            <motion.div
              className="mx-auto h-2 w-2 rounded-full bg-white/80"
              animate={{ y: [0, 18, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
