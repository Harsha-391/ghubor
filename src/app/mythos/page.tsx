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
      <main className="pt-32 md:pt-48 flex-grow">
        {/* ═══════════════════════════════════════════════════════
           OPENING — The Word
           ═══════════════════════════════════════════════════════ */}
        <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
          {/* Background glyph */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
            <Image
              src="/images/details/glyph.png"
              alt=""
              width={600}
              height={600}
              className="object-contain"
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
            className="relative z-10 max-w-3xl"
          >
            <div className="sacred-divider mb-10 mx-auto" />

            <motion.p
              className="font-ui text-[10px] text-oxblood tracking-[0.4em] mb-8"
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
        <section className="border-t border-ash/15 py-20 md:py-32">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
            <RevealBlock>
              <p className="font-ui text-[10px] text-oxblood tracking-[0.4em] mb-6">
                Origin
              </p>
              <div className="w-10 h-px bg-oxblood mb-10 mx-auto" />

              <h2 className="font-blackletter text-3xl md:text-5xl text-cream mb-8">
                The Word Before the Garment
              </h2>

              <p className="font-scripture text-lg md:text-xl text-cotton/70 leading-[2.2] mb-8 mx-auto">
                In the Hebrew scriptures, the word Gibbor appears over 150
                times. It describes David before Goliath. It describes the
                angels who guard the throne. It describes the God who fights
                on behalf of those who cannot fight for themselves. It does
                not mean invincible. It does not mean untouched. It means: one
                who carries the weight and does not break.
              </p>

              <p className="font-scripture text-lg md:text-xl text-cotton/70 leading-[2.2] mb-8 mx-auto">
                GHUBOR was born from this word — not as a brand, but as a
                language. A way of marking the body with the truths that the
                world cannot see. Every garment is a verse. Every thread is a
                declaration. Every number stamped in oxblood ink is a covenant
                between the maker and the bearer: you are not alone in the
                unseen war.
              </p>

              <p className="font-scripture text-lg md:text-xl text-cotton/70 leading-[2.2] mx-auto">
                We do not make clothing. We forge armor. And the armor is
                scripture — dense, weighted, unrelenting — pressed against
                your skin so that when the battle comes, and it will come, the
                Word is closer than your own heartbeat.
              </p>
            </RevealBlock>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
           THE GLYPH — Isolated on black
           ═══════════════════════════════════════════════════════ */}
        <section className="border-t border-ash/15 py-24 md:py-40">
          <RevealBlock>
            <div className="text-center mb-16">
              <p className="font-ui text-[10px] text-oxblood tracking-[0.4em] mb-4">
                The Seal
              </p>
              <h2 className="font-blackletter text-3xl md:text-5xl text-cream">
                The Gibbor Glyph
              </h2>
            </div>

            <div className="relative max-w-md mx-auto aspect-square">
              <Image
                src="/images/details/glyph.png"
                alt="The Gibbor glyph — the seal of GHUBOR"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 80vw, 400px"
              />
            </div>

            <div className="max-w-xl mx-auto mt-16 px-8 text-center">
              <p className="font-scripture text-base text-parchment/40 leading-[2] italic">
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
        <section className="border-t border-ash/15 py-20 md:py-32">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
            <RevealBlock>
              <p className="font-ui text-[10px] text-oxblood tracking-[0.4em] mb-6">
                The Foundation
              </p>
              <div className="w-10 h-px bg-oxblood mb-10 mx-auto" />
              <h2 className="font-blackletter text-3xl md:text-5xl text-cream mb-16">
                Three Tensions
              </h2>
            </RevealBlock>

            {/* Struggle */}
            <RevealBlock delay={0.1}>
              <div className="mb-16 pb-16 border-b border-ash/10">
                <span className="font-blackletter text-6xl md:text-8xl text-cream/[0.06] leading-none block mb-4">
                  I
                </span>
                <h3 className="font-blackletter text-2xl md:text-3xl text-cream mb-4">
                  Struggle
                </h3>
                <p className="font-scripture text-base text-cotton/60 leading-[2] italic max-w-2xl mx-auto">
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
              <div className="mb-16 pb-16 border-b border-ash/10">
                <span className="font-blackletter text-6xl md:text-8xl text-cream/[0.06] leading-none block mb-4">
                  II
                </span>
                <h3 className="font-blackletter text-2xl md:text-3xl text-cream mb-4">
                  Faith
                </h3>
                <p className="font-scripture text-base text-cotton/60 leading-[2] italic max-w-2xl mx-auto">
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
              <div>
                <span className="font-blackletter text-6xl md:text-8xl text-cream/[0.06] leading-none block mb-4">
                  III
                </span>
                <h3 className="font-blackletter text-2xl md:text-3xl text-cream mb-4">
                  Transcendence
                </h3>
                <p className="font-scripture text-base text-cotton/60 leading-[2] italic max-w-2xl mx-auto">
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
           THE CRAFT
           ═══════════════════════════════════════════════════════ */}
        <section className="border-t border-ash/15 py-20 md:py-32">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
            <RevealBlock>
              <p className="font-ui text-[10px] text-oxblood tracking-[0.4em] mb-6">
                The Making
              </p>
              <div className="w-10 h-px bg-oxblood mb-10 mx-auto" />
              <h2 className="font-blackletter text-3xl md:text-5xl text-cream mb-8">
                How an Artifact is Forged
              </h2>

              <p className="font-scripture text-lg text-cotton/70 leading-[2.2] mb-8 mx-auto">
                Each GHUBOR artifact is produced in limited runs — never more
                than 100 pieces per garment, with select pieces limited to 50.
                We do not restock. We do not reprint. When a run is complete,
                it enters the archive. The artifact exists in the hands of its
                bearers and nowhere else.
              </p>

              <p className="font-scripture text-lg text-cotton/70 leading-[2.2] mb-8 mx-auto">
                The scripture is set by hand in dense, cream-colored type —
                chosen not for aesthetics but for legibility against the void
                of the fabric. Each verse is selected for its relevance to the
                garment&apos;s name and its position within the three pillars.
                The oxblood ink used for the hand-numbered tags is mixed to a
                proprietary shade that sits between blood and earth — a color
                that carries weight without shouting.
              </p>

              <p className="font-scripture text-lg text-cotton/70 leading-[2.2] mx-auto">
                We do not use the language of commerce. We do not say
                &ldquo;shop&rdquo; or &ldquo;add to cart.&rdquo; You do not
                buy a GHUBOR garment. You claim it. You bear it. And in
                bearing it, you enter the myth — not as a customer, but as a
                Gibbor.
              </p>
            </RevealBlock>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
           CLOSING FRAGMENT
           ═══════════════════════════════════════════════════════ */}
        <section className="border-t border-ash/15 py-32 md:py-48">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <RevealBlock>
            <div className="sacred-divider mb-12 mx-auto" />
            <p className="font-blackletter text-3xl md:text-5xl lg:text-6xl text-cream max-w-3xl mx-auto leading-[1.1]">
              You are the artifact.
            </p>
            <div className="sacred-divider mt-12 mx-auto" />
          </RevealBlock>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
