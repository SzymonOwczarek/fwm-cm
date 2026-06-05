import React from 'react'
import Image from 'next/image'

export interface WebhookEcosystemProps {
  systemLabel?: string
  heading?: string
  integrations?: Array<{
    name: string
    logo?: {
      url?: string
    }
  }>
}

export const WebhookEcosystem = ({ systemLabel, heading, integrations }: WebhookEcosystemProps) => (
  <section className="bg-zinc-950 text-white py-24 px-4 border-b border-zinc-900 font-mono">
    <div className="mx-auto max-w-7xl border-x border-zinc-900 px-8">
      <div className="mb-12 text-center">
        <span className="text-zinc-600 text-[10px] tracking-widest block mb-2">
          {systemLabel || '// INTEROPERABILITY_GRID'}
        </span>
        <h2 className="text-xl font-bold uppercase text-zinc-100">
          {heading || 'Engineered for Global Interoperability'}
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-8 opacity-50">
        {integrations?.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all"
          >
            {item.logo?.url && (
              <div className="relative w-6 h-6">
                <Image src={item.logo.url} alt={item.name} fill className="object-contain" />
              </div>
            )}
            <span className="text-[10px] font-bold uppercase">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
)
