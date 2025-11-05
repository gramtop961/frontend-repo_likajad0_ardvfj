import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Camera } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay to improve text contrast; pointer-events-none so Spline remains interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-6 py-28 sm:px-8 md:py-36">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
          <Camera className="h-4 w-4 text-white/80" />
          <span className="text-xs uppercase tracking-widest text-white/70">Graphic Designer & Art Director</span>
        </div>
        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.02em] sm:text-6xl md:text-7xl">
          Crafting modern visuals
          <br />
          for brands that want to stand out.
        </h1>
        <p className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
          I blend photography, typography, and motion to design minimalist, technology-inspired brand stories.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            View selected work
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-black/20 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
