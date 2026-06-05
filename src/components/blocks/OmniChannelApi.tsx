import React from 'react'

export interface OmniChannelAPIProps {
  systemLabel?: string
  heading?: string
  description?: string
  codeSnippet?: string
  endpoints?: Array<{
    title: string
    description: string
    status: string
  }>
}

export function OmniChannelAPI({
  systemLabel,
  heading,
  description,
  codeSnippet,
  endpoints,
}: OmniChannelAPIProps) {
  return (
    <section className="bg-zinc-950 text-white py-24 px-4 sm:px-8 lg:px-12 border-b border-zinc-900 font-mono">
      <div className="mx-auto max-w-7xl border-x border-zinc-900 px-4 sm:px-8 lg:px-12">
        <div className="mb-12 max-w-2xl text-xs">
          <span className="text-zinc-600">{systemLabel || '// DECOUPLED_DATA_DISTRIBUTION'}</span>
          <h2 className="text-xl font-bold uppercase text-zinc-100 mt-1">
            {heading || 'Write Once, Distribute Everywhere'}
          </h2>
          {description && (
            <p className="text-[11px] font-sans text-zinc-400 mt-2 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: The Raw JSON API Payload */}
          <div className="rounded-xl border border-zinc-900 bg-[#0a0a0a] p-6 shadow-2xl relative">
            <div className="absolute top-0 right-0 p-3 flex gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500/20 border border-red-500/50" />
              <span className="h-2 w-2 rounded-full bg-amber-500/20 border border-amber-500/50" />
              <span className="h-2 w-2 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
            </div>
            <div className="text-[10px] text-zinc-600 mb-4 pb-2 border-b border-zinc-900">
              GET /api/globals/campaign_hero
            </div>

            <pre className="text-[11px] leading-relaxed overflow-x-auto text-zinc-400">
              <code>{codeSnippet}</code>
            </pre>
          </div>

          {/* Right: The Endpoints Receiving the Data */}
          <div className="space-y-4">
            {endpoints?.map((endpoint, i) => {
              const isConnected = endpoint.status === 'CONNECTED'
              return (
                <div
                  key={i}
                  className={`border border-zinc-900 bg-zinc-900/10 p-4 rounded-xl flex items-center justify-between group hover:border-indigo-500/50 transition-colors ${
                    !isConnected ? 'opacity-70' : ''
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold text-zinc-200 group-hover:text-white uppercase mb-1">
                      {endpoint.title}
                    </div>
                    <div className="text-[10px] text-zinc-500 font-sans">
                      {endpoint.description}
                    </div>
                  </div>
                  <div
                    className={`text-[9px] bg-zinc-950 px-2 py-1 rounded border border-zinc-900 font-bold ${
                      isConnected ? 'text-emerald-400' : 'text-zinc-500'
                    }`}
                  >
                    {endpoint.status}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
