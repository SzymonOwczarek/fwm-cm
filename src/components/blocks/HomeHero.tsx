import React from 'react'

export const HomeHero = ({ title, subtitle, ctaText }: any) => (
  <section className="relative pt-32 pb-24 px-4 border-b border-zinc-900 bg-zinc-950 font-mono">
    <div className="mx-auto max-w-7xl border-x border-zinc-900 px-8 py-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
          {title}
        </h1>
        <p className="text-zinc-400 text-lg mb-10 font-sans max-w-xl">{subtitle}</p>
        <button className="bg-white text-zinc-950 px-8 py-4 rounded-full text-xs font-bold uppercase hover:bg-indigo-500 hover:text-white transition-colors">
          {ctaText || 'Initialize System'}
        </button>
      </div>
    </div>
  </section>
)
