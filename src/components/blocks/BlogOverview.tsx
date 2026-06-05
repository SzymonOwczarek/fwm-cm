'use client'
import React, { useState } from 'react'
import {
  ArrowUpRight,
  Cpu,
  Shield,
  Layers,
  Terminal,
  Activity,
  Fingerprint,
  Circle,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const MOCK_POSTS = [
  {
    id: '01',
    tag: 'SEC_04',
    title: 'Zero-Trust Architecture in Edge Computing',
    category: 'SECURITY',
    icon: Shield,
    excerpt:
      'Exploring how distributed worker nodes implement ephemeral security layers to mitigate regional vector threats without latency penalties.',
    date: 'OCT 12, 2025',
    status: 'PUBLISHED',
    metrics: 'THREAT_ISOLATION: 99.9%',
  },
  {
    id: '02',
    tag: 'OPT_09',
    title: 'The OpenNext Revolution: Decoupling the Stack',
    category: 'INFRASTRUCTURE',
    icon: Cpu,
    excerpt:
      'Analyzing the shift from monolithic deployments to hybrid edge-routing models using Cloudflare D1 and R2 storage solutions.',
    date: 'SEP 28, 2025',
    status: 'PUBLISHED',
    metrics: 'LATENCY_REDUCTION: -42ms',
  },
  {
    id: '03',
    tag: 'UX_02',
    title: 'Eliminating Hydration Mismatch in Multi-Locale Apps',
    category: 'FRONTEND',
    icon: Layers,
    excerpt:
      'Technical breakdown of implementing Next-Intl border-layer evaluation to prevent layout flashing during global distribution.',
    date: 'SEP 15, 2025',
    status: 'STABLE',
    metrics: 'LAYOUT_STABILITY: 1.0',
  },
  {
    id: '04',
    tag: 'API_11',
    title: 'GraphQL Subscriptions via Durable Objects',
    category: 'BACKEND',
    icon: Terminal,
    excerpt:
      'Leveraging stateful edge computing to maintain real-time omni-channel data sync across diverse retail signage APIs.',
    date: 'AUG 30, 2025',
    status: 'ARCHIVED',
    metrics: 'SYNC_PROTOCOL: DO_V2',
  },
]

export const BlogOverview: React.FC<any> = ({
  systemLabel = '// SYSTEM_LOG_INDEX',
  heading = 'Engineering Journal',
  description = 'Technical documentation and architectural blueprints from our core development team.',
}) => {
  const [activeIdx, setActiveIdx] = useState(0)
  const activePost = MOCK_POSTS[activeIdx]

  return (
    <section className="py-16 bg-zinc-950 text-white font-mono border-b border-zinc-900 selection:bg-indigo-500/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Slim Module Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-l-2 border-indigo-500 pl-6">
          <div>
            <span className="text-zinc-600 text-[10px] block tracking-[0.3em] uppercase font-bold">
              {systemLabel}
            </span>
            <h2 className="text-2xl font-bold tracking-tight uppercase italic text-zinc-100">
              {heading}
            </h2>
          </div>
          <p className="text-zinc-500 text-[10px] font-sans max-w-sm uppercase leading-tight">
            {description}
          </p>
        </div>

        {/* Balanced Split Interface */}
        <div className="flex flex-col border border-zinc-900 bg-zinc-950 relative shadow-2xl overflow-hidden">
          {/* Technical Corner Accents */}
          <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t border-l border-indigo-500 z-20" />
          <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b border-r border-indigo-500 z-20" />

          {/* Top: Technical Readout (Preview) */}
          <motion.div
            layout
            transition={{ layout: { duration: 0.4, ease: [0.23, 1, 0.32, 1] } }}
            className="p-8 md:p-12 bg-zinc-950 relative overflow-hidden flex flex-col
            min-h-[400px] scrollbar-thin scrollbar-thumb-indigo-500/50 scrollbar-track-transparent
            hover:[&::-webkit-scrollbar-thumb]:bg-indigo-600"
          >
            <div className="absolute top-0 right-0 p-3 opacity-20 z-20">
              <Activity className="w-4 h-4 text-indigo-500 animate-pulse" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="flex-1 flex flex-col justify-between gap-8"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1.5 text-[9px] font-bold">
                    <span className="text-zinc-500 border border-zinc-800 px-2 py-0.5 uppercase tracking-widest">
                      {activePost.category}
                    </span>
                    <span className="text-zinc-700">/</span>
                    <span className="text-zinc-500 uppercase tracking-widest">
                      {activePost.date}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase leading-tight text-zinc-100 italic max-w-4xl">
                    {activePost.title}
                  </h3>
                  <p className="text-zinc-400 font-sans leading-relaxed text-base max-w-2xl">
                    {activePost.excerpt}
                  </p>
                </div>

                <div className="space-y-6 max-w-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-zinc-900/20 border border-zinc-900/50 px-3 py-1 rounded-sm flex items-center justify-between">
                      <span className="text-[7px] text-zinc-600 uppercase font-bold tracking-tighter">
                        Vector_Analysis
                      </span>
                      <div className="text-[9px] text-indigo-400 font-bold font-mono">
                        {activePost.metrics}
                      </div>
                    </div>
                    <div className="bg-zinc-900/20 border border-zinc-900/50 px-3 py-1 rounded-sm flex items-center justify-between">
                      <span className="text-[7px] text-zinc-600 uppercase font-bold tracking-tighter">
                        Node_Status
                      </span>
                      <div className="text-[9px] text-emerald-500 font-bold uppercase flex items-center gap-1.5 font-mono">
                        <Circle className="w-1.5 h-1.5 fill-current" />
                        {activePost.status}
                      </div>
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-between text-[10px] font-bold bg-zinc-100 text-zinc-950 px-6 py-4 hover:bg-indigo-500 hover:text-white transition-all uppercase group/btn">
                    <span>Access Documentation</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Bottom: Sidebar Nodes (Registry) */}
          <div className="border-t border-zinc-900 bg-zinc-950 flex flex-col">
            <div className="p-3 border-b border-zinc-900 bg-zinc-900/20 text-[9px] text-zinc-500 font-bold flex justify-between uppercase shrink-0">
              <span>Registry_Entry</span>
              <span>ID_SEC_MONITOR</span>
            </div>
            <div className="divide-x divide-zinc-900/30 flex flex-row overflow-x-auto scrollbar-hide min-h-0">
              {MOCK_POSTS.map((post, idx) => {
                const isActive = activeIdx === idx
                return (
                  <button
                    key={post.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`min-w-[240px] group relative text-left p-6 transition-all duration-200 flex flex-col justify-center gap-2 flex-1 ${
                      isActive ? 'bg-indigo-500/[0.03]' : 'hover:bg-zinc-900/40'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-500"
                      />
                    )}

                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[8px] font-bold tracking-widest ${isActive ? 'text-indigo-400' : 'text-zinc-600'}`}
                      >
                        {post.tag} // {post.id}
                      </span>
                      <Fingerprint
                        className={`w-3 h-3 transition-colors ${isActive ? 'text-indigo-500/40' : 'text-zinc-800'}`}
                      />
                    </div>

                    <h4
                      className={`text-sm font-bold uppercase tracking-tight transition-colors ${isActive ? 'text-zinc-100' : 'text-zinc-500'}`}
                    >
                      {post.title}
                    </h4>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
