"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
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

export default function MythosPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow flex flex-col">
        {/* Concrete spacer to guarantee clearing the fixed Navbar */}
        <div className="h-32 md:h-48 w-full flex-shrink-0" />

        {/* ═══════════════════════════════════════════════════════
           OPENING — The Word
           ═══════════════════════════════════════════════════════ */}
        <section className="flex flex-col items-center justify-center text-center px-6 relative overflow-hidden pb-32">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
            className="relative z-10 max-w-3xl"
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
              className="font-scripture text-xl md:text-2xl text-parchment/50 italic leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.3 }}
            >
              /ɡib·bôr/ — Hebrew. Mighty warrior. Hero. One who prevails
              through divine strength, not human power.
            </motion.p>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════════════
           THE ORIGIN
           ═══════════════════════════════════════════════════════ */}
        <section className="py-24 md:py-40">
          <div className="max-w-2xl mx-auto px-6 md:px-0">
            <RevealBlock>
              <div className="text-center mb-16">
                <p className="font-ui text-[10px] text-oxblood tracking-[0.4em] mb-6 uppercase">
                  Origin
                </p>
                <div className="w-px h-12 bg-oxblood/40 mx-auto mb-10" />
                <h2 className="font-blackletter text-4xl md:text-5xl text-cream">
                  The Word Before the Garment
                </h2>
              </div>

              <div className="space-y-10">
                <p className="font-scripture text-lg md:text-xl text-cotton/80 leading-[2.2]">
                  In the Hebrew scriptures, the word Gibbor appears over 150
                  times. It describes David before Goliath. It describes the
                  angels who guard the throne. It describes the God who fights
                  on behalf of those who cannot fight for themselves. It does
                  not mean invincible. It does not mean untouched. It means: one
                  who carries the weight and does not break.
                </p>

                <p className="font-scripture text-lg md:text-xl text-cotton/80 leading-[2.2]">
                  GHUBOR was born from this word — not as a brand, but as a
                  language. A way of marking the body with the truths that the
                  world cannot see. Every garment is a verse. Every thread is a
                  declaration. Every number stamped in oxblood ink is a covenant
                  between the maker and the bearer: you are not alone in the
                  unseen war.
                </p>

                <p className="font-scripture text-lg md:text-xl text-cotton/80 leading-[2.2]">
                  We do not make clothing. We forge armor. And the armor is
                  scripture — dense, weighted, unrelenting — pressed against
                  your skin so that when the battle comes, and it will come, the
                  Word is closer than your own heartbeat.
                </p>
              </div>
            </RevealBlock>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
           THE GLYPH — Isolated on black
           ═══════════════════════════════════════════════════════ */}
        <section className="py-24 md:py-40 bg-void/50">
          <RevealBlock>
            <div className="text-center mb-16">
              <p className="font-ui text-[10px] text-oxblood tracking-[0.4em] mb-4 uppercase">
                The Seal
              </p>
              <h2 className="font-blackletter text-3xl md:text-5xl text-cream">
                The Gibbor Glyph
              </h2>
            </div>

            <div className="relative max-w-sm mx-auto aspect-square opacity-80">
              <Image
                src="/images/details/glyph.png"
                alt="The Gibbor glyph — the seal of GHUBOR"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 80vw, 400px"
              />
            </div>

            <div className="max-w-xl mx-auto mt-16 px-6 text-center">
              <p className="font-scripture text-base md:text-lg text-parchment/50 leading-[2] italic">
                The Gibbor glyph is not a logo. It is a seal — an abstracted
                mark drawn from the Hebrew warrior tradition, representing the
                intersection of struggle and transcendence. It is found on
                every GHUBOR artifact, placed where it cannot be displayed but
                only felt. Not a badge. A covenant.
              </p>
            </div>
          </RevealBlock>
        </section>

        {/* ═══════════════════════════════════════════════════════
           THE THREE TENSIONS
           ═══════════════════════════════════════════════════════ */}
        <section className="py-24 md:py-40">
          <div className="max-w-2xl mx-auto px-6 md:px-0">
            <RevealBlock>
              <div className="text-center mb-24">
                <p className="font-ui text-[10px] text-oxblood tracking-[0.4em] mb-6 uppercase">
                  The Foundation
                </p>
                <div className="w-px h-12 bg-oxblood/40 mx-auto mb-10" />
                <h2 className="font-blackletter text-4xl md:text-5xl text-cream">
                  Three Tensions
                </h2>
              </div>
            </RevealBlock>

            <div className="space-y-32">
              {/* Struggle */}
              <RevealBlock delay={0.1}>
                <div className="flex flex-col items-center text-center">
                  <span className="font-blackletter text-7xl text-cream/[0.04] leading-none mb-6">
                    I
                  </span>
                  <h3 className="font-blackletter text-3xl text-cream mb-6">
                    Struggle
                  </h3>
                  <p className="font-scripture text-lg text-cotton/70 leading-[2.2] italic max-w-xl">
                    The raw material. The darkness before the dawn. Struggle is
                    not punishment — it is the forge. Every Gibbor was shaped in
                    the crucible of a fight they did not choose. Jacob wrestled
                    through the night and walked away with a limp and a new
                    name. David carried stones before he carried a crown. The
                    garment begins here: in the tension, the resistance, the
                    refusal to be broken by what was meant to break you.
                  </p>
                </div>
              </RevealBlock>

              {/* Faith */}
              <RevealBlock delay={0.1}>
                <div className="flex flex-col items-center text-center">
                  <span className="font-blackletter text-7xl text-cream/[0.04] leading-none mb-6">
                    II
                  </span>
                  <h3 className="font-blackletter text-3xl text-cream mb-6">
                    Faith
                  </h3>
                  <p className="font-scripture text-lg text-cotton/70 leading-[2.2] italic max-w-xl">
                    The decision made in the dark. Faith is not certainty — it
                    is the act of standing when you cannot see the ground
                    beneath you. It is the ritual of putting on armor that the
                    world calls invisible. Every GHUBOR garment is dense with
                    scripture because faith must be dense. It must have texture.
                    It must be felt against the skin — not as comfort, but as
                    commitment. A daily covenant, renewed with every wearing.
                  </p>
                </div>
              </RevealBlock>

              {/* Transcendence */}
              <RevealBlock delay={0.1}>
                <div className="flex flex-col items-center text-center">
                  <span className="font-blackletter text-7xl text-cream/[0.04] leading-none mb-6">
                    III
                  </span>
                  <h3 className="font-blackletter text-3xl text-cream mb-6">
                    Transcendence
                  </h3>
                  <p className="font-scripture text-lg text-cotton/70 leading-[2.2] italic max-w-xl">
                    The becoming. Transcendence is not escape from the
                    battlefield — it is transformation within it. The moment
                    when the armor is no longer separate from the body. When the
                    scripture is no longer read but lived. When the struggle has
                    been absorbed into the marrow and faith has calcified into
                    identity. The Gibbor does not overcome the war. The Gibbor
                    becomes the war — and emerges as something the darkness
                    cannot name.
                  </p>
                </div>
              </RevealBlock>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
           CLOSING FRAGMENT
           ═══════════════════════════════════════════════════════ */}
        <section className="py-32 md:py-48 bg-void/50">
          <div className="max-w-[1400px] mx-auto px-6 text-center">
            <RevealBlock>
              <div className="w-px h-16 bg-oxblood/30 mx-auto mb-12" />
              <p className="font-blackletter text-4xl md:text-6xl text-cream max-w-3xl mx-auto leading-[1.1]">
                You are the artifact.
              </p>
            </RevealBlock>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
