import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Neon Optics',
    tag: 'Brand Identity',
    color: 'from-fuchsia-500/30 to-blue-500/20',
  },
  {
    title: 'Monochrome Studio',
    tag: 'Editorial',
    color: 'from-zinc-200/20 to-zinc-900/10',
  },
  {
    title: 'Photon Labs',
    tag: 'Art Direction',
    color: 'from-emerald-400/25 to-cyan-400/10',
  },
  {
    title: 'Frame/Rate',
    tag: 'Motion + Title',
    color: 'from-indigo-400/25 to-violet-400/10',
  },
  {
    title: 'Analog to Digital',
    tag: 'Campaign',
    color: 'from-amber-300/25 to-rose-400/10',
  },
  {
    title: 'Light & Lines',
    tag: 'Poster Series',
    color: 'from-sky-400/25 to-cyan-400/10',
  },
];

export default function Projects() {
  return (
    <section id="work" className="w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Selected Work</h2>
            <p className="mt-2 text-white/70">A curated selection of branding, editorial, and motion projects.</p>
          </div>
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-md border border-white/15 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10 md:inline-flex"
          >
            Request portfolio PDF <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={i}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br p-5 transition duration-300 hover:border-white/20"
            >
              <div className={`pointer-events-none absolute inset-0 -z-0 bg-gradient-to-br ${p.color}`} />
              <div className="relative z-10 flex h-56 flex-col justify-between">
                <div>
                  <span className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/80 backdrop-blur">
                    {p.tag}
                  </span>
                  <h3 className="mt-3 text-xl font-medium">{p.title}</h3>
                </div>
                <div className="flex items-center justify-between text-sm text-white/70">
                  <p>Concept, design, art direction</p>
                  <button
                    className="inline-flex items-center gap-1 rounded-md bg-white/10 px-3 py-1.5 text-white transition hover:bg-white/20"
                    aria-label={`Open ${p.title}`}
                  >
                    View <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
