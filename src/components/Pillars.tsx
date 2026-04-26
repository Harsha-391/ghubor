"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface Pillar {
  id: string;
  number: string;
  title: string;
  verse: string;
  body: string;
  image: string;
}

const pillars: Pillar[] = [
  {
    id: "struggle",
    number: "I",
    title: "Struggle",
    verse: "Genesis 32:24 — So Jacob was left alone, and a man wrestled with him till daybreak.",
    body: "Every garment begins in the dark. The ink is pressure. The fabric is resistance. Before the glyph is stamped, before the number is written, there is the weight — the raw, unrelenting tension between who you are and who you were made to become. Struggle is not the absence of God. It is the proof of His shaping. This is where GHUBOR begins: in the refining fire, in the grip that refuses to let go until blessing breaks through.",
    image: "/images/pillars/struggle.png",
  },
  {
    id: "faith",
    number: "II",
    title: "Faith",
    verse: "Hebrews 11:1 — Now faith is the substance of things hoped for, the evidence of things not seen.",
    body: "Faith is not felt. It is forged. It is the decision to stand when every nerve screams to kneel. It is the ritual — the daily act of putting on armor that the world cannot see. Each GHUBOR garment carries scripture not as decoration, but as declaration. The words are dense because faith must be dense. It must have weight. It must press against your skin like a covenant you cannot remove. This is the altar. This is where the warrior is made.",
    image: "/images/pillars/faith.png",
  },
  {
    id: "transcendence",
    number: "III",
    title: "Transcendence",
    verse: "2 Corinthians 5:17 — Therefore, if anyone is in Christ, the new creation has come.",
    body: "When the war has ended — not because the enemy surrendered, but because you did — the armor becomes your skin. The struggle becomes your story. The faith becomes your nature. Transcendence is not escape. It is becoming. The Gibbor does not leave the battlefield; he is transformed by it. This is the final garment: not cloth, but identity. Not worn, but woven into who you are. You are the artifact.",
    image: "/images/pillars/transcendence.png",
  },
];

function PillarSection({ pillar, index }: { pillar: Pillar; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <div className="border-t border-ash/15">
      <motion.div
        ref={ref}
        className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 py-16 md:py-24 items-center"
      >
        {/* Image Side */}
        <div className={`relative overflow-hidden ${isEven ? "" : "lg:order-2"}`}>
          <motion.div
            initial={{ scale: 1.1 }}
            animate={isInView ? { scale: 1 } : { scale: 1.1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="relative w-full aspect-[4/5] overflow-hidden bg-charcoal/20"
          >
            <Image
              src={pillar.image}
              alt={pillar.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-void/20" />
          </motion.div>

          {/* Pillar Number Overlay */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.06 } : { opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="absolute bottom-4 right-4 font-blackletter text-[8rem] md:text-[12rem] text-cream leading-none pointer-events-none"
          >
            {pillar.number}
          </motion.span>
        </div>

        {/* Text Side */}
        <div className={`flex flex-col justify-center py-4 lg:py-8 ${isEven ? "" : "lg:order-1"}`}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
          >
            {/* Section marker */}
            <p className="font-ui text-[10px] text-oxblood tracking-[0.4em] mb-6">
              Pillar {pillar.number}
            </p>

            {/* Divider */}
            <div className="w-10 h-px bg-oxblood mb-8" />

            {/* Title */}
            <h2 className="font-blackletter text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
              {pillar.title}
            </h2>

            {/* Verse */}
            <blockquote className="font-scripture text-sm text-parchment/50 border-l-2 border-oxblood/40 pl-4 mb-10 italic">
              {pillar.verse}
            </blockquote>

            {/* Body */}
            <p className="font-scripture text-base md:text-lg text-cotton/70 leading-[2] max-w-lg">
              {pillar.body}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Pillars() {
  return (
    <section className="relative pb-32 md:pb-48">
      {/* Section Header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center py-20 md:py-32">
        <p className="font-ui text-[11px] text-oxblood tracking-[0.3em] mb-4">
          Philosophy
        </p>
        <h2 className="font-blackletter text-4xl md:text-6xl text-cream mb-6">
          The Three Pillars
        </h2>
        <p className="font-scripture text-base text-parchment/40 max-w-md mx-auto italic">
          Every GHUBOR garment is forged in the tension between these three truths.
        </p>
      </div>

      {/* Pillar Sections */}
      {pillars.map((pillar, i) => (
        <PillarSection key={pillar.id} pillar={pillar} index={i} />
      ))}
    </section>
  );
}
