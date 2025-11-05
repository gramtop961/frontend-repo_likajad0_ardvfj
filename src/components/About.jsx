import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">About</h2>
            <p className="mt-4 text-white/80">
              I’m a graphic designer focused on brand identity, editorial design, and creative direction. My work is
              rooted in minimalism, clarity, and a love for technology-informed aesthetics. I approach each project as a
              collaborative process—aligning visuals with strategy and storytelling.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/80 sm:max-w-md">
              <div className="rounded-md border border-white/10 bg-white/[0.03] p-4">
                <p className="font-medium text-white">Expertise</p>
                <ul className="mt-2 list-disc pl-5">
                  <li>Brand Identity</li>
                  <li>Editorial & Print</li>
                  <li>Art Direction</li>
                </ul>
              </div>
              <div className="rounded-md border border-white/10 bg-white/[0.03] p-4">
                <p className="font-medium text-white">Tools</p>
                <ul className="mt-2 list-disc pl-5">
                  <li>Adobe CC</li>
                  <li>Figma</li>
                  <li>Lightroom</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/0">
              {/* Simple placeholder portrait block; can be replaced with a real image */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_50%)]" />
              <div className="absolute bottom-4 left-4 rounded-full bg-black/60 px-3 py-1 text-xs text-white/80 backdrop-blur">
                Available for freelance
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
