import React from 'react'

export interface BenefitsContentControlProps {
  systemLabel?: string
  heading?: string
  description?: string
  benefits?: Array<{
    label: string
    title: string
    description: string
  }>
}

export function BenefitsContentControl({
  systemLabel,
  heading,
  description,
  benefits,
}: BenefitsContentControlProps) {
  return (
    <section className="bg-zinc-950 text-white py-24 px-4 sm:px-8 lg:px-12 border-b border-zinc-900 font-mono">
      <div className="mx-auto max-w-7xl border-x border-zinc-900 px-4 sm:px-8 lg:px-12">
        {/* Content Section Row Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Informational Column Header Panel */}
          <div className="lg:col-span-1 space-y-4">
            <span className="text-zinc-600 text-[10px] block tracking-widest">
              {systemLabel || '// DECOUPLED_ADMIN_ADVANTAGE'}
            </span>
            <h2 className="text-xl font-bold uppercase text-zinc-100 tracking-tight sm:text-2xl leading-tight">
              {heading || 'Absolute Control, Zero Broken Layouts'}
            </h2>
            {description && (
              <p className="text-xs text-zinc-400 font-sans leading-relaxed">{description}</p>
            )}
          </div>

          {/* Features Column Pipeline Row */}
          <div className="lg:col-span-2 space-y-6">
            {benefits?.map((item, idx) => (
              <div
                key={idx}
                className="border border-zinc-900 rounded-xl bg-zinc-900/10 p-5 hover:border-zinc-800 transition-all group flex flex-col sm:flex-row sm:items-start gap-4"
              >
                {/* Visual Label Module Tag */}
                <div className="text-[9px] font-bold text-zinc-500 bg-zinc-950 px-2 py-1 rounded border border-zinc-900/80 w-fit shrink-0">
                  {item.label}
                </div>

                {/* Data Segment Details */}
                <div className="space-y-1">
                  <h3 className="text-xs font-bold text-zinc-200 group-hover:text-white uppercase tracking-tight transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] font-sans text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
