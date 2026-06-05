'use client'

import React, { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface MobileMenuProps {
  navItems: Array<{ label: string; link: string }>
  ctaText: string
  ctaLink: string
}

export function MobileMenu({ navItems, ctaText, ctaLink }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-2 text-zinc-400 hover:text-white"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </button>

      {/* Dropdown Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-50 mt-2 border-b border-zinc-900 bg-zinc-950/95 p-6 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="font-mono text-sm tracking-tight text-zinc-400 transition-colors hover:text-white"
              >
                {item.label.toUpperCase()}()
              </Link>
            ))}
            <hr className="my-2 border-zinc-900" />
            <Link
              href={ctaLink}
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-100 px-4 py-2.5 font-mono text-xs font-semibold text-zinc-950 hover:bg-white"
            >
              {ctaText}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}
