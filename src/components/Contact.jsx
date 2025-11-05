import React from 'react';
import { Mail, Instagram, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-8 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset]">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Let’s create something beautiful</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/75">
            I’m available for brand identities, editorial systems, campaign art direction and portfolio collaborations.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:hello@yourstudio.com"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              <Mail className="h-4 w-4" />
              hello@yourstudio.com
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-black/20 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-black/20 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
