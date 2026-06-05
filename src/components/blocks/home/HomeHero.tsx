'use client'

import React from 'react'
import { ArrowRight, Terminal, Layers, Cpu, Radio } from 'lucide-react'
import Link from 'next/link'

// Helper to render the proper metric icons dynamically
const IconMap = {
  layers: Layers,
  cpu: Cpu,
  radio: Radio,
}

interface MetricItem {
  icon: 'layers' | 'cpu' | 'radio'
  label: string
  value: string
  id?: string
}

interface HomeHeroProps {
  systemStatus?: string
  headingStart: string
  headingHighlight: string
  subheading: string
  primaryCtaText: string
  secondaryCtaText: string
  metrics?: MetricItem[]
  codePanelDatabase?: string
}

export function HomeHero({
  systemStatus = 'STABLE_READY',
  headingStart,
  headingHighlight,
  subheading,
  primaryCtaText,
  secondaryCtaText,
  metrics = [],
  codePanelDatabase = 'PostgreSQL_Pool',
}: HomeHeroProps) {
  const animationStyles = `
    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(12px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes progressGrow {
      0% { width: 0%; }
      100% { width: var(--target-width, 100%); }
    }
    .tech-fade-in {
      animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .tech-progress {
      animation: progressGrow 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
  `

  return (
    <section className="relative min-h-screen overflow-hidden bg-zinc-950 px-4 pt-36 pb-16 sm:px-6 lg:px-8 lg:pt-44">
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />

      {/* Structural Blueprint Grids */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:4rem_4rem] opacity-70" />

      {/* Exact Tech Accent Glows */}
      <div className="absolute top-0 right-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-500/[0.06] blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-emerald-500/[0.03] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl border-x border-zinc-900 px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Block: Core Information Matrix */}
          <div className="space-y-8 text-left lg:col-span-7">
            {/* Status Indicator */}
            <div
              className="tech-fade-in inline-flex items-center gap-2.5 rounded-full border border-zinc-800/80 bg-zinc-900/40 py-1 pr-4 pl-2 font-mono text-xs tracking-tight text-zinc-400 opacity-0 backdrop-blur-md"
              style={{ animationDelay: '50ms' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span className="text-zinc-600">SYS_STATUS:</span>
              <span className="font-medium text-zinc-300">{systemStatus}</span>
            </div>

            {/* Typography Engine */}
            <div className="space-y-4">
              <h1
                className="tech-fade-in font-sans text-4xl font-light tracking-tight text-white opacity-0 sm:text-6xl lg:leading-[1.05]"
                style={{ animationDelay: '150ms' }}
              >
                {headingStart}{' '}
                <span className="block bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text font-medium text-transparent">
                  {headingHighlight}
                </span>
              </h1>

              <p
                className="tech-fade-in max-w-xl font-mono text-xs leading-relaxed text-zinc-400 opacity-0"
                style={{ animationDelay: '250ms' }}
              >
                // {subheading}
              </p>
            </div>

            {/* Interactive Control Deck */}
            <div
              className="tech-fade-in flex flex-col items-stretch gap-4 pt-4 opacity-0 sm:flex-row sm:items-center"
              style={{ animationDelay: '350ms' }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-100 px-5 py-3 font-mono text-xs font-semibold text-zinc-950 transition-all duration-200 hover:bg-white active:scale-[0.99]"
              >
                {primaryCtaText}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/30 px-5 py-3 font-mono text-xs font-medium text-zinc-400 transition-colors duration-200 hover:bg-zinc-900/60 hover:text-zinc-200"
              >
                {secondaryCtaText}
              </Link>
            </div>

            {/* Engineering Metrics Grid (Bento Panels) */}
            {metrics.length > 0 && (
              <div
                className="tech-fade-in grid grid-cols-1 gap-4 border-t border-zinc-900/80 pt-8 opacity-0 sm:grid-cols-3"
                style={{ animationDelay: '450ms' }}
              >
                {metrics.map((item, index) => {
                  const IconComponent = IconMap[item.icon] || Layers
                  return (
                    <div
                      key={item.id || index}
                      className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-4"
                    >
                      <IconComponent className="mb-2 h-4 w-4 text-zinc-500" />
                      <div className="font-mono text-xs text-zinc-500 uppercase">{item.label}</div>
                      <div className="mt-1 text-sm font-semibold text-zinc-200">{item.value}</div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          {/* Right Block: Live Environment Manifest */}
          <div className="tech-fade-in opacity-0 lg:col-span-5" style={{ animationDelay: '300ms' }}>
            <div className="overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950 shadow-2xl">
              {/* Header Tab Shell */}
              <div className="flex items-center justify-between border-b border-zinc-900 bg-zinc-900/30 px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-zinc-800" />
                  <div className="h-2 w-2 rounded-full bg-zinc-800" />
                  <div className="h-2 w-2 rounded-full bg-zinc-800" />
                </div>
                <span className="font-mono text-[10px] tracking-tight text-zinc-500">
                  core-engine::schema.json
                </span>
                <Terminal className="h-3 w-3 text-zinc-600" />
              </div>

              {/* Code Panel Core */}
              <div className="bg-zinc-950 p-5 font-mono text-[11px] leading-relaxed text-zinc-400">
                <p className="font-sans text-zinc-600 italic">
                  // Structural initialization mapping
                </p>
                <div className="mt-2 space-y-0.5">
                  <p>
                    <span className="text-zinc-600">01</span>{' '}
                    <span className="text-indigo-400">export const</span> EngineConfig = &#123;
                  </p>
                  <p>
                    <span className="text-zinc-600">02</span> engineType:{' '}
                    <span className="text-emerald-400">"Headless_Payload_CMS"</span>,
                  </p>
                  <p>
                    <span className="text-zinc-600">03</span> framework:{' '}
                    <span className="text-emerald-400">"Next.js_15_AppRouter"</span>,
                  </p>
                  <p>
                    <span className="text-zinc-600">04</span> database:{' '}
                    <span className="text-emerald-400">"{codePanelDatabase}"</span>,
                  </p>
                  <p>
                    <span className="text-zinc-600">05</span> collections: [
                  </p>
                  <p>
                    <span className="text-zinc-600">06</span> &#123; slug:{' '}
                    <span className="text-zinc-300">'localized-nodes'</span>, cache:{' '}
                    <span className="text-indigo-400">true</span> &#125;,
                  </p>
                  <p>
                    <span className="text-zinc-600">07</span> &#123; slug:{' '}
                    <span className="text-zinc-300">'workflow-pipelines'</span>, sync:{' '}
                    <span className="text-indigo-400">true</span> &#125;
                  </p>
                  <p>
                    <span className="text-zinc-600">08</span> ],
                  </p>
                  <p>
                    <span className="text-zinc-600">09</span> middleware: [
                    <span className="text-zinc-500">"Edge_Georouting"</span>,{' '}
                    <span className="text-zinc-500">"I18n_Translation"</span>]
                  </p>
                  <p>
                    <span className="text-zinc-600">10</span> &#125;
                  </p>
                </div>

                {/* Live Node Analytics Subcard */}
                <div className="mt-5 rounded-lg border border-zinc-900 bg-zinc-900/20 p-4 font-sans">
                  <div className="mb-3 flex items-center justify-between font-mono text-[11px]">
                    <span className="font-semibold tracking-wider text-zinc-400 uppercase">
                      Telemetry Engine
                    </span>
                    <span className="flex items-center gap-1 text-indigo-400">IO_ACTIVE</span>
                  </div>

                  {/* Node Bars */}
                  <div className="space-y-2.5">
                    <div>
                      <div className="mb-1 flex justify-between font-mono text-[10px] text-zinc-500">
                        <span>GRAPHQL_QUERY_RESOLVE_TIME</span>
                        <span className="text-zinc-300">12ms</span>
                      </div>
                      <div className="h-1 w-full overflow-hidden rounded-full bg-zinc-900">
                        <div
                          className="tech-progress h-full rounded-full bg-indigo-500"
                          style={
                            {
                              animationDelay: '600ms',
                              '--target-width': '94%',
                            } as React.CSSProperties
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <div className="mb-1 flex justify-between font-mono text-[10px] text-zinc-500">
                        <span>EDGE_CACHE_HIT_RATE</span>
                        <span className="text-emerald-400">99.4%</span>
                      </div>
                      <div className="h-1 w-full overflow-hidden rounded-full bg-zinc-900">
                        <div
                          className="tech-progress h-full rounded-full bg-emerald-500"
                          style={
                            {
                              animationDelay: '850ms',
                              '--target-width': '99%',
                            } as React.CSSProperties
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
