import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { AboutSection, ProjectsSection, ContactSection } from './components/Sections'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="pt-24 sm:pt-28">
        <Hero />
        <div id="about"><AboutSection /></div>
        <div id="work"><ProjectsSection /></div>
        <ContactSection />
      </main>
      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 text-center text-white/60">
          © {new Date().getFullYear()} Your Name. Built with care.
        </div>
      </footer>
    </div>
  )
}
