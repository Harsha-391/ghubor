"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function RevealBlock({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
    >
      {children}
    </motion.div>
  );
}

const tensions = [
  {
    number: "I",
    title: "Struggle",
    verse: "Genesis 32:24",
    body: "The raw material. The darkness before the dawn. Struggle is not punishment — it is the forge. Every Gibbor was shaped in the crucible of a fight they did not choose. Jacob wrestled through the night and walked away with a limp and a new name. David carried stones before he carried a crown. The garment begins here: in the tension, the resistance, the refusal to be broken by what was meant to break you.",
  },
  {
    number: "II",
    title: "Faith",
    verse: "Hebrews 11:1",
    body: "The decision made in the dark. Faith is not certainty — it is the act of standing when you cannot see the ground beneath you. It is the ritual of putting on armor that the world calls invisible. Every GHUBOR garment is dense with scripture because faith must be dense. It must have texture. It must be felt against the skin — not as comfort, but as commitment. A daily covenant, renewed with every wearing.",
  },
  {
    number: "III",
    title: "Transcendence",
    verse: "2 Corinthians 5:17",
    body: "The becoming. Transcendence is not escape from the battlefield — it is transformation within it. The moment when the armor is no longer separate from the body. When the scripture is no longer read but lived. The Gibbor does not overcome the war. The Gibbor becomes the war — and emerges as something the darkness cannot name.",
  },
];

export default function MythosPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <div className="h-24 md:h-32 w-full" />

        {/* ── OPENING ──────────────────────────────────────────── */}
        <section className="w-full text-center px-6 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <div className="sacred-divider mb-10 mx-auto" />

            <motion.p
              className="font-ui text-[10px] text-oxblood tracking-[0.4em] mb-8 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              The Mythos
            </motion.p>

            <motion.h1
              className="font-blackletter text-5xl sm:text-6xl md:text-8xl text-cream leading-[0.95] mb-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.8,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
            >
              Gibbor
            </motion.h1>

            <motion.p
              className="font-scripture text-xl md:text-2xl text-parchment/50 italic leading-relaxed max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.3 }}
            >
              /ɡib·bôr/ — Hebrew. Mighty warrior. Hero. One who prevails
              through divine strength, not human power.
            </motion.p>
          </motion.div>
        </section>

        {/* ── ORIGIN ───────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-32 border-t border-ash/15 px-6 md:px-12 lg:px-20">
          <RevealBlock>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 items-start">

              {/* Sticky label + heading */}
              <div className="lg:sticky lg:top-32">
                <p className="font-ui text-[10px] text-oxblood tracking-[0.4em] mb-6 uppercase">
                  Origin
                </p>
                <div className="w-8 h-px bg-oxblood mb-8" />
                <h2 className="font-blackletter text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.05]">
                  The Word Before the Garment
                </h2>
              </div>

              {/* Body */}
              <div className="space-y-8 pt-2 lg:pt-6">
                <p className="font-scripture text-lg md:text-xl text-cotton/80 leading-[2.2]">
                  In the Hebrew scriptures, the word Gibbor appears over 150
                  times. It describes David before Goliath. It describes the
                  angels who guard the throne. It describes the God who fights
                  on behalf of those who cannot fight for themselves. It does
                  not mean invincible. It does not mean untouched. It means:
                  one who carries the weight and does not break.
                </p>
                <p className="font-scripture text-lg md:text-xl text-cotton/80 leading-[2.2]">
                  GHUBOR was born from this word — not as a brand, but as a
                  language. A way of marking the body with the truths that the
                  world cannot see. Every garment is a verse. Every thread is
                  a declaration. Every number stamped in oxblood ink is a
                  covenant between the maker and the bearer: you are not alone
                  in the unseen war.
                </p>
                <p className="font-scripture text-lg md:text-xl text-cotton/80 leading-[2.2]">
                  We do not make clothing. We forge armor. And the armor is
                  scripture — dense, weighted, unrelenting — pressed against
                  your skin so that when the battle comes, and it will come,
                  the Word is closer than your own heartbeat.
                </p>
              </div>
            </div>
          </RevealBlock>
        </section>

        {/* ── THE GLYPH ────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-32 bg-charcoal/20 border-t border-ash/15 px-6 md:px-12 lg:px-20">
          <RevealBlock>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

              {/* Image */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-60 h-60 md:w-80 md:h-80 opacity-80">
                  <Image
                    src="/images/details/glyph.png"
                    alt="The Gibbor glyph — the seal of GHUBOR"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 240px, 320px"
                  />
                </div>
              </div>

              {/* Text */}
              <div>
                <p className="font-ui text-[10px] text-oxblood tracking-[0.4em] mb-6 uppercase">
                  The Seal
                </p>
                <div className="w-8 h-px bg-oxblood mb-8" />
                <h2 className="font-blackletter text-3xl md:text-5xl text-cream mb-8">
                  The Gibbor Glyph
                </h2>
                <p className="font-scripture text-base md:text-lg text-parchment/60 leading-[2] italic">
                  The Gibbor glyph is not a logo. It is a seal — an abstracted
                  mark drawn from the Hebrew warrior tradition, representing
                  the intersection of struggle and transcendence. It is found
                  on every GHUBOR artifact, placed where it cannot be
                  displayed but only felt. Not a badge. A covenant.
                </p>
              </div>
            </div>
          </RevealBlock>
        </section>

        {/* ── THREE TENSIONS ───────────────────────────────────── */}
        <section className="w-full py-20 md:py-32 border-t border-ash/15">

          {/* Section header */}
          <div className="px-6 md:px-12 lg:px-20 text-center mb-16 md:mb-20">
            <RevealBlock>
              <p className="font-ui text-[10px] text-oxblood tracking-[0.4em] mb-6 uppercase">
                The Foundation
              </p>
              <div className="w-px h-12 bg-oxblood/40 mx-auto mb-8" />
              <h2 className="font-blackletter text-4xl md:text-5xl text-cream">
                Three Tensions
              </h2>
            </RevealBlock>
          </div>

          {/* 3-column horizontal grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-ash/15 border-t border-ash/15">
            {tensions.map((t, i) => (
              <RevealBlock key={t.number} delay={i * 0.12}>
                <div className="flex flex-col items-center text-center px-8 md:px-10 lg:px-14 py-14 md:py-16">
                  <span className="font-blackletter text-[7rem] text-cream/[0.05] leading-none mb-2 select-none">
                    {t.number}
                  </span>
                  <h3 className="font-blackletter text-3xl md:text-4xl text-cream mb-3">
                    {t.title}
                  </h3>
                  <p className="font-ui text-[9px] text-oxblood tracking-[0.3em] mb-8 uppercase">
                    {t.verse}
                  </p>
                  <p className="font-scripture text-base text-cotton/65 leading-[2] italic">
                    {t.body}
                  </p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </section>

        {/* ── CLOSING ──────────────────────────────────────────── */}
        <section className="w-full py-32 md:py-48 bg-charcoal/10 border-t border-ash/15 text-center px-6">
          <RevealBlock>
            <div className="max-w-3xl mx-auto">
              <div className="w-px h-16 bg-oxblood/30 mx-auto mb-12" />
              <p className="font-blackletter text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.1] mb-16">
                You are the artifact.
              </p>
              <Link href="/artifact" className="cta-acquire inline-block">
                Enter the Collection
                <span className="inline-block ml-3 text-oxblood">→</span>
              </Link>
            </div>
          </RevealBlock>
        </section>
      </main>
      <Footer />
    </>
  );
}
