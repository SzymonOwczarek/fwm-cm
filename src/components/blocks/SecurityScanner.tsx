'use client'
import React, { useState } from 'react'

export interface SecurityScannerProps {
  systemLabel?: string
  heading?: string
  description?: string
  vectors?: Array<{
    slug: string
    label: string
    title: string
    vulnerability: string
    remediation: string
    status: string
    logs: Array<{ log: string }>
  }>
}

export function SecurityScanner({
  systemLabel,
  heading,
  description,
  vectors,
}: SecurityScannerProps) {
  const [activeVector, setActiveVector] = useState<string>(vectors?.[0]?.slug || 'sql')

  const active = vectors?.find((v) => v.slug === activeVector) || vectors?.[0]

  if (!active) return null

  return (
    <section className="bg-zinc-950 text-white py-24 px-4 sm:px-8 lg:px-12 border-b border-zinc-900 font-mono">
      <div className="mx-auto max-w-5xl border-x border-zinc-900/60 px-4 sm:px-8 lg:px-12">
        <div className="mb-12 max-w-xl text-xs">
          <span className="text-zinc-600">{systemLabel || '// DEFENSE_MITIGATION_SIMULATOR'}</span>
          <h2 className="text-xl font-bold uppercase text-zinc-100 mt-1">
            {heading || 'Immutable Threat Deflection'}
          </h2>
          {description && (
            <p className="text-[11px] font-sans text-zinc-400 mt-2 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Left Threat Selector Column */}
          <div className="space-y-3 lg:col-span-1">
            {vectors?.map((v) => (
              <button
                key={v.slug}
                onClick={() => setActiveVector(v.slug)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex flex-col justify-between h-24 ${
                  activeVector === v.slug
                    ? 'border-indigo-500 bg-indigo-500/5 shadow-[0_0_12px_rgba(99,102,241,0.15)]'
                    : 'border-zinc-900 bg-zinc-900/20 hover:border-zinc-800'
                }`}
              >
                <span className="text-[9px] text-zinc-500">{v.label}</span>
                <span className="text-xs font-bold uppercase text-zinc-200 tracking-tight">
                  {v.title}
                </span>
              </button>
            ))}
          </div>

          {/* Right Live Mitigator Console Layout Terminal */}
          <div className="lg:col-span-2 rounded-xl border border-zinc-900 bg-zinc-950 p-6 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-4 text-[10px] text-zinc-500">
              <span className="text-emerald-400 font-bold">STATUS: // {active.status}</span>
              <span>ENGINE_AUDIT_LOG_PROMPT</span>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <span className="text-red-400 block font-bold text-[10px] uppercase mb-1">
                  Detected Corporate Vulnerability:
                </span>
                <p className="text-[11px] font-sans text-zinc-400 leading-relaxed">
                  {active.vulnerability}
                </p>
              </div>

              <div>
                <span className="text-emerald-400 block font-bold text-[10px] uppercase mb-1">
                  Our Decoupled Architecture Remediation:
                </span>
                <p className="text-[11px] font-sans text-zinc-300 leading-relaxed">
                  {active.remediation}
                </p>
              </div>

              {/* Running Output Strings Grid */}
              <div className="bg-zinc-900/30 border border-zinc-900 rounded p-3 text-[10px] text-zinc-500 space-y-1.5 font-mono">
                {active.logs?.map((item, lIdx) => (
                  <div
                    key={lIdx}
                    className={
                      item.log.includes('[OK]')
                        ? 'text-emerald-500/80'
                        : item.log.includes('[WARN]') || item.log.includes('[ALERT]')
                          ? 'text-amber-500/80'
                          : ''
                    }
                  >
                    {item.log}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
