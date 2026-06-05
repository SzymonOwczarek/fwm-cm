import React from 'react'

export interface MetricsBentoGridProps {
  systemLabel?: string
  heading?: string
  cards?: Array<{
    tag: string
    title: string
    description: string
    footerLabel: string
    footerValue: string
  }>
}

export function MetricsBentoGrid({ systemLabel, heading, cards }: MetricsBentoGridProps) {
  return (
    <section className="bg-zinc-950 text-white py-24 px-4 sm:px-8 lg:px-12 border-b border-zinc-900 font-mono">
      <div className="mx-auto max-w-7xl border-x border-zinc-900 px-4 sm:px-8 lg:px-12">
        <div className="mb-12 text-xs">
          <span className="text-zinc-600">{systemLabel || '// CAPABILITY_MATRIX_LOG'}</span>
          <h2 className="text-xl font-bold uppercase text-zinc-100 mt-1">
            {heading || 'Core Infrastructure'}
          </h2>
        </div>

        {/* Bento Grid Wireframe Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards?.map((card, idx) => {
            const isLarge = idx === 0 || idx === 3
            return (
              <div
                key={idx}
                className={`${
                  isLarge ? 'md:col-span-2' : ''
                } rounded-xl border border-zinc-900 bg-zinc-900/10 p-6 flex flex-col justify-between hover:border-zinc-800 transition-all group`}
              >
                <div>
                  <div
                    className={`text-[10px] ${
                      idx === 2
                        ? 'text-indigo-400 border-indigo-500/20 bg-indigo-500/5'
                        : 'text-zinc-500'
                    } ${
                      idx === 0 ? 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5' : ''
                    } border px-2 py-0.5 rounded w-fit mb-4`}
                  >
                    {card.tag}
                  </div>
                  <h3 className="text-sm font-bold uppercase text-zinc-200 group-hover:text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[11px] font-sans text-zinc-400 max-w-xl leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Specific footer styling based on box index to match existing design */}
                {idx === 0 && (
                  <div className="mt-6 bg-zinc-950 p-4 rounded-lg border border-zinc-900/60 text-[10px] text-zinc-500 space-y-1">
                    <div className="flex justify-between text-zinc-400">
                      <span>[{card.footerLabel}]</span>
                      <span>STATUS: OPTIMAL</span>
                    </div>
                    <div className="text-emerald-400/80">
                      ████████████░░░░░░░░░░░░░░░ {card.footerValue}
                    </div>
                    <div className="text-zinc-600 font-sans text-[9px]">
                      Ping Warsaw: 4ms | Ping New York: 14ms | Ping Tokyo: 22ms
                    </div>
                  </div>
                )}

                {idx === 1 && (
                  <div className="mt-4 text-[10px] text-zinc-600 font-bold uppercase border-t border-zinc-900 pt-3">
                    {card.footerLabel} // {card.footerValue}
                  </div>
                )}

                {idx === 2 && (
                  <div className="mt-4 flex gap-1 text-[9px] text-zinc-500">
                    {card.footerValue?.split(',').map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="border border-zinc-900 px-1.5 py-0.5 bg-zinc-950 rounded"
                      >
                        #{tag.trim()}
                      </span>
                    ))}
                  </div>
                )}

                {idx === 3 && (
                  <div className="mt-4 flex items-center gap-6 border-t border-zinc-900/60 pt-4 text-[10px]">
                    <div>
                      <span className="text-zinc-600 block">{card.footerLabel}</span>
                      <span className="text-emerald-400 font-bold text-xs">{card.footerValue}</span>
                    </div>
                    <div>
                      <span className="text-zinc-600 block">CORE WEB VITALS</span>
                      <span className="text-emerald-400 font-bold text-xs">PASSING</span>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
