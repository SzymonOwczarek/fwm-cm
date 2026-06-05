import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'
import { ArrowRight, Terminal } from 'lucide-react'
import { MobileMenu } from './MobileMenu'

interface NavbarProps {
  locale: string
}

// Explicit structure matching your Header configuration schema
interface HeaderGlobalData {
  logoText: string
  ctaText: string
  ctaLink?: string
  navItems?: Array<{
    label: string
    link: string
  }>
}

export async function Navbar({ locale }: NavbarProps) {
  const payload = await getPayload({ config })

  // Typecasting the global fetch via unknown to bypass the missing payload-types definition
  const headerData = (await payload.findGlobal({
    slug: 'header' as any,
    locale: locale as any,
  })) as unknown as HeaderGlobalData

  const navItems = headerData.navItems || []

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-900 bg-zinc-950/70 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between border-x border-zinc-900 px-4 sm:px-8 lg:px-12">
          {/* Brand Logo Identity */}
          <Link href="/" className="flex items-center gap-2 group">
            <Terminal className="h-4 w-4 text-indigo-400 group-hover:text-emerald-400 transition-colors" />
            <span className="font-mono text-xs font-bold tracking-widest text-zinc-200">
              {headerData.logoText}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item: { label: string; link: string }, idx: number) => (
              <Link
                key={idx}
                href={item.link}
                className="font-mono text-[11px] tracking-tight text-zinc-400 transition-colors hover:text-zinc-200"
              >
                <span className="text-zinc-600 mr-0.5">.</span>
                {item.label.toUpperCase()}()
              </Link>
            ))}
          </nav>

          {/* Desktop Action Trigger Panel */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href={headerData.ctaLink || '/contact'}
              className="group inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/40 px-3.5 py-1.5 font-mono text-[11px] tracking-tight text-zinc-300 transition-all hover:bg-zinc-900/80 hover:text-white"
            >
              {headerData.ctaText}
              <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5 text-zinc-500 group-hover:text-zinc-300" />
            </Link>
          </div>

          {/* Mobile Shell Injection Router */}
          <MobileMenu
            navItems={navItems}
            ctaText={headerData.ctaText}
            ctaLink={headerData.ctaLink || '/contact'}
          />
        </div>
      </div>
    </header>
  )
}
