import React from 'react'

export interface ArchitectureBlueprintViewProps {
  systemLabel?: string
  heading?: string
  description?: string
  items?: Array<{
    num: string
    category: string
    title: string
    description: string
  }>
}

export function ArchitectureBlueprintView({
  systemLabel,
  heading,
  description,
  items,
}: ArchitectureBlueprintViewProps) {
  return (
    <section className="bg-zinc-950 text-white py-24 px-4 sm:px-8 lg:px-12 border-b border-zinc-900 overflow-hidden">
      <div className="mx-auto max-w-7xl border-x border-zinc-900 px-4 sm:px-8 lg:px-12">
        {/* Module Text Segment Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 font-mono">
          <div className="max-w-xl">
            <span className="text-zinc-600 text-[10px] tracking-widest block mb-2">
              {systemLabel || '// CORE_ENGINE_BLUEPRINT'}
            </span>
            <h2 className="text-2xl font-bold tracking-tight uppercase text-zinc-100 sm:text-3xl">
              {heading || 'Architectural Map'}
            </h2>
          </div>
          {description && (
            <p className="text-xs text-zinc-400 font-sans max-w-md leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Horizontal Card Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-zinc-900 rounded-lg overflow-hidden bg-zinc-950">
          {items?.map((b, idx) => (
            <div
              key={idx}
              className="border-r border-b border-zinc-900 p-6 bg-zinc-900/10 backdrop-blur-sm hover:bg-zinc-900/30 transition-all flex flex-col justify-between group h-64 font-mono relative"
            >
              {/* Subtle top grid illumination accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/0 to-transparent group-hover:via-indigo-500/40 transition-all duration-300" />

              <div>
                {/* Step Metadata String Tag */}
                <div className="flex items-center justify-between text-[9px] tracking-tight text-zinc-500 mb-6">
                  <span>[{b.category}]</span>
                  <span className="text-zinc-600 font-semibold group-hover:text-indigo-400 transition-colors">
                    #{b.num}
                  </span>
                </div>

                {/* Primary Card Title */}
                <h3 className="text-xs font-bold tracking-tight text-zinc-200 group-hover:text-white transition-colors mb-2 uppercase">
                  {b.title}
                </h3>

                {/* Description Body text */}
                <p className="text-[11px] font-sans text-zinc-400 group-hover:text-zinc-300 leading-relaxed transition-colors">
                  {b.description}
                </p>
              </div>

              {/* Lower visual structural terminal decoration */}
              <div className="text-[9px] text-zinc-700 font-bold select-none group-hover:text-zinc-600 transition-colors pt-4 mt-auto">
                SYS.EXEC_NODE_0{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
