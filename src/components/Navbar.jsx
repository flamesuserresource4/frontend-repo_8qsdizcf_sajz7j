import React from 'react'

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-6">
        <nav className="mt-6 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <a href="#" className="font-medium text-white">You</a>
          <div className="flex items-center gap-4 text-sm">
            <a href="#work" className="text-white/70 hover:text-white">Work</a>
            <a href="#about" className="text-white/70 hover:text-white">About</a>
            <a href="#contact" className="text-white/70 hover:text-white">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  )
}
