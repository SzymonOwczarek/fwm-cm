import React from 'react'

export interface BenefitsSpeedMetricsProps {
  systemLabel?: string
  heading?: string
  description?: string
  metrics?: Array<{
    metric: string
    stat: string
    benefit: string
    description: string
    codeLog: string
  }>
}

export function BenefitsSpeedMetrics({
  systemLabel,
  heading,
  description,
  metrics,
}: BenefitsSpeedMetricsProps) {
  return (
    <section className="bg-zinc-950 text-white py-24 px-4 sm:px-8 lg:px-12 border-b border-zinc-900 font-mono">
      <div className="mx-auto max-w-7xl border-x border-zinc-900 px-4 sm:px-8 lg:px-12">
        {/* Module Header */}
        <div className="mb-20 max-w-2xl">
          <div className="text-zinc-600 text-[10px] tracking-widest block mb-2">
            {systemLabel || '// PERFORMANCE_FINANCIAL_METRIC_FEED'}
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-100 uppercase sm:text-3xl">
            {heading || 'Speed is a Core Business Asset'}
          </h2>
          {description && (
            <p className="mt-3 text-xs text-zinc-400 font-sans leading-relaxed">{description}</p>
          )}
        </div>

        {/* Benefits Performance Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {metrics?.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-zinc-900 bg-zinc-900/10 p-6 flex flex-col justify-between hover:border-zinc-800 transition-all group"
            >
              <div>
                <span className="text-[10px] text-zinc-600 block mb-4">{item.metric}</span>

                {/* Big Stat Value */}
                <div className="text-4xl font-bold tracking-tight text-zinc-100 group-hover:text-indigo-400 transition-colors mb-2">
                  {item.stat}
                </div>

                <h3 className="text-xs font-bold text-zinc-200 uppercase tracking-tight mb-3">
                  {item.benefit}
                </h3>

                <p className="text-[11px] font-sans text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {item.description}
                </p>
              </div>

              {/* Lower Pseudo Diagnostic Readout */}
              <div className="mt-8 pt-3 border-t border-zinc-900/60 text-[9px] text-zinc-700 font-bold flex justify-between items-center">
                <span>EXEC_OPTIMIZATION_NODE</span>
                <span className="text-zinc-500 font-normal">#{item.codeLog}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
