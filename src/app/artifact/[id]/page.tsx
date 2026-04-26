"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ArtifactData {
  name: string;
  subtitle: string;
  price: string;
  edition: string;
  images: string[];
  scripture: string;
  description: string;
  details: string[];
  tagInfo: string;
  glyphInfo: string;
}

const artifacts: Record<string, ArtifactData> = {
  "genesis-tee": {
    name: "Genesis Tee",
    subtitle: "The first word spoken into the void.",
    price: "120",
    edition: "100 hand-numbered pieces",
    images: ["/images/products/tshirt.png", "/images/details/scripture.png", "/images/details/tag.png"],
    scripture: "Psalm 144:1 — Blessed be the Lord, my rock, who trains my hands for war, and my fingers for battle.",
    description:
      "The Genesis Tee is the foundational artifact of the GHUBOR collection. Cut from 280gsm organic cotton in a deep, void-black, the chest panel carries the full text of Psalm 144:1 in dense, cream-colored type that reads like scripture carved into stone. This is not a t-shirt. It is the first layer of armor — the opening verse of a garment language built to carry the weight of the unseen war. Each piece is hand-numbered in oxblood ink at the hem. Each number is a covenant: you are not wearing this garment. You are bearing it.",
    details: [
      "280gsm organic cotton — heavyweight, structured",
      "Dense scripture chest panel in cream ink",
      "Relaxed, oversized fit",
      "Hand-numbered hem tag (oxblood ink)",
      "Signature Gibbor glyph at rear neckline",
      "Made in limited runs of 100",
    ],
    tagInfo:
      "Every GHUBOR garment is hand-numbered in oxblood ink — a mark of the sacred, the personal, and the finite. Your number is your covenant. It cannot be replicated. Each tag is individually stamped by hand before the garment is sealed and shipped. The numbering sequence follows the order of creation, not purchase.",
    glyphInfo:
      "The Gibbor glyph is the signature mark of GHUBOR — an abstracted symbol drawn from the Hebrew warrior tradition. It represents the intersection of struggle and transcendence, the moment when armor becomes skin. Found at the rear neckline of every garment, it serves as a silent declaration of identity. Not a logo. A seal.",
  },
  "mantle-hoodie": {
    name: "The Mantle",
    subtitle: "Heavyweight refuge. Dense enough to carry the unseen.",
    price: "185",
    edition: "100 hand-numbered pieces",
    images: ["/images/products/hoodie.png", "/images/details/glyph.png", "/images/details/tag.png"],
    scripture: "1 Kings 19:19 — So Elijah went and found Elisha, and threw his mantle upon him.",
    description:
      "The Mantle is a heavyweight hoodie built for the Gibbor who knows that refuge is not retreat. Cut from 400gsm brushed cotton, it carries the Gibbor glyph embroidered in oxblood thread on the chest — a seal visible only to those close enough to see it. The hood is oversized, deep, and structured. It is not decorative. It is shelter. The rear panel is left intentionally bare: a void of black fabric that speaks louder than any graphic could. This is the garment you reach for when the world demands more than you were prepared to give.",
    details: [
      "400gsm brushed cotton — dense, shelter-weight",
      "Gibbor glyph embroidered in oxblood thread",
      "Oversized, structured hood",
      "Kangaroo pocket with reinforced seams",
      "Hand-numbered hem tag (oxblood ink)",
      "Made in limited runs of 100",
    ],
    tagInfo:
      "Every GHUBOR garment is hand-numbered in oxblood ink — a mark of the sacred, the personal, and the finite. Your number is your covenant.",
    glyphInfo:
      "The Gibbor glyph is embroidered in oxblood thread on the chest of The Mantle — positioned over the heart as a seal of identity and a silent declaration of the warrior within.",
  },
  "scroll-longsleeve": {
    name: "The Scroll",
    subtitle: "Scripture from shoulder to wrist. Dense text made wearable.",
    price: "145",
    edition: "100 hand-numbered pieces",
    images: ["/images/products/longsleeve.png", "/images/details/scripture.png", "/images/details/tag.png"],
    scripture: "Jeremiah 31:33 — I will put my law within them, and I will write it on their hearts.",
    description:
      "The Scroll is a long-sleeve garment where the scripture does not rest on the chest — it travels. Dense cream-colored text covers the full back panel and extends down both sleeves, creating a continuous scroll of sacred text that moves with the body. It is the most text-dense artifact in the GHUBOR collection, designed for the Gibbor who understands that the Word must be felt in every gesture, every reach, every embrace.",
    details: [
      "280gsm organic cotton — structured, long-sleeve",
      "Full back panel scripture in cream ink",
      "Sleeve scripture extending to the wrist",
      "Relaxed, slightly elongated fit",
      "Hand-numbered hem tag (oxblood ink)",
      "Made in limited runs of 100",
    ],
    tagInfo:
      "Every GHUBOR garment is hand-numbered in oxblood ink — your number is your covenant.",
    glyphInfo:
      "The Gibbor glyph is positioned at the base of the neck, where the scroll begins — the origin point of the scripture that flows down the back and across the arms.",
  },
  "aegis-jacket": {
    name: "The Aegis",
    subtitle: "The outer wall. Crimson within, void without.",
    price: "280",
    edition: "50 hand-numbered pieces",
    images: ["/images/products/jacket.png", "/images/details/glyph.png", "/images/details/tag.png"],
    scripture: "Ephesians 6:11 — Put on the whole armor of God, that you may be able to stand against the wiles of the devil.",
    description:
      "The Aegis is the outermost layer of GHUBOR armor — a bomber jacket built to serve as the final barrier between the Gibbor and the world. The exterior is void-black, spare, and unadorned save for the subtle embroidered text on the chest. But open it, and the crimson lining bleeds through — a hidden declaration visible only when the armor is removed. This is the garment for the warrior who carries the sacred inward, invisible to all but themselves.",
    details: [
      "Heavy nylon shell, satin crimson lining",
      "Subtle chest scripture in cream thread",
      "Ribbed collar, cuffs, and hem",
      "Interior Gibbor glyph seal",
      "Hand-numbered interior tag (oxblood ink)",
      "Made in limited runs of 50",
    ],
    tagInfo:
      "The Aegis is numbered in runs of 50 — the rarest GHUBOR artifact.",
    glyphInfo:
      "The glyph is hidden inside The Aegis, sealed within the crimson lining — a private covenant between the garment and its bearer.",
  },
  "foundation-pants": {
    name: "Foundation",
    subtitle: "Where the warrior stands. The base layer of armor.",
    price: "135",
    edition: "100 hand-numbered pieces",
    images: ["/images/products/pants.png", "/images/details/glyph.png", "/images/details/tag.png"],
    scripture: "Psalm 40:2 — He set my feet upon a rock and established my steps.",
    description:
      "Foundation is exactly what the name declares: the base upon which the Gibbor stands. These sweatpants are cut from 380gsm cotton, heavyweight and grounded, with a single Gibbor glyph embroidered on the left thigh in cream thread. The oxblood drawstring is the only accent of color — a thin red thread running through the darkness, a reminder that even at the foundation, the sacred is present.",
    details: [
      "380gsm heavyweight cotton",
      "Gibbor glyph on left thigh (cream thread)",
      "Oxblood drawstring detail",
      "Tapered, structured fit",
      "Hand-numbered interior waistband tag",
      "Made in limited runs of 100",
    ],
    tagInfo:
      "The hand-numbered tag is located on the interior waistband — hidden, personal, foundational.",
    glyphInfo:
      "A single glyph on the left thigh — minimal, grounded, and positioned where the hand naturally rests.",
  },
};

export default function ArtifactPage() {
  const params = useParams();
  const id = params.id as string;
  const artifact = artifacts[id];

  const detailsRef = useRef(null);
  const detailsInView = useInView(detailsRef, { once: true, margin: "-80px" });

  const tagRef = useRef(null);
  const tagInView = useInView(tagRef, { once: true, margin: "-80px" });

  const glyphRef = useRef(null);
  const glyphInView = useInView(glyphRef, { once: true, margin: "-80px" });

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");

  if (!artifact) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-blackletter text-4xl text-cream mb-4">Artifact Not Found</h1>
            <p className="font-scripture text-parchment/50 italic mb-8">This artifact has not yet been forged.</p>
            <Link href="/" className="cta-acquire inline-block">
              Return
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow flex flex-col">
        {/* Concrete spacer to guarantee clearing the fixed Navbar */}
        <div className="h-32 md:h-48 w-full flex-shrink-0" />

        {/* ═══════════════════════════════════════════════════════
           HERO — Asymmetric Editorial Layout
           ═══════════════════════════════════════════════════════ */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-12 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Image Gallery */}
            <div className="relative">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[3/4] w-full bg-charcoal/30 overflow-hidden"
              >
                <Image
                  src={artifact.images[selectedImage]}
                  alt={artifact.name}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>

              {/* Thumbnail Rail */}
              <div className="flex gap-3 mt-4">
                {artifact.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative w-16 h-16 md:w-20 md:h-20 overflow-hidden border transition-all duration-500 flex-shrink-0 ${
                      i === selectedImage
                        ? "border-oxblood"
                        : "border-ash/30 hover:border-ash"
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" sizes="80px" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center py-4 lg:py-12 lg:sticky lg:top-28">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
              >
                <p className="font-ui text-[10px] text-oxblood tracking-[0.4em] mb-6">
                  Artifact
                </p>

                <h1 className="font-blackletter text-4xl md:text-5xl lg:text-6xl text-cream mb-3">
                  {artifact.name}
                </h1>

                <p className="font-scripture text-base text-parchment/50 italic mb-8">
                  {artifact.subtitle}
                </p>

                <div className="w-10 h-px bg-oxblood mb-8" />

                {/* Scripture */}
                <blockquote className="font-scripture text-sm text-parchment/40 border-l-2 border-oxblood/30 pl-4 mb-10 italic leading-relaxed">
                  {artifact.scripture}
                </blockquote>

                {/* Price & Edition */}
                <div className="flex items-baseline gap-6 mb-10">
                  <span className="font-ui text-2xl text-cream tracking-wider">
                    ${artifact.price}
                  </span>
                  <span className="font-ui text-[10px] text-iron tracking-[0.2em]">
                    {artifact.edition}
                  </span>
                </div>

                {/* Size Selection */}
                <div className="mb-10">
                  <p className="font-ui text-[10px] text-iron tracking-[0.3em] mb-4">
                    Select Size
                  </p>
                  <div className="flex gap-3">
                    {["S", "M", "L", "XL", "XXL"].map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-12 h-12 flex items-center justify-center font-ui text-[11px] transition-all duration-500 border ${
                          selectedSize === size
                            ? "border-oxblood text-cream bg-oxblood/20"
                            : "border-ash/30 text-iron hover:border-ash hover:text-cream"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button className="cta-acquire w-full text-center py-4">
                  Claim Artifact — ${artifact.price}
                  <span className="inline-block ml-3 text-oxblood">→</span>
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
           DESCRIPTION — Dense Scripture Block
           ═══════════════════════════════════════════════════════ */}
        <section className="border-t border-ash/15 py-20 md:py-32">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
              <motion.div
                ref={detailsRef}
                initial={{ opacity: 0, y: 40 }}
                animate={detailsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
              >
                <p className="font-ui text-[10px] text-oxblood tracking-[0.4em] mb-6">
                  The Artifact&apos;s History
                </p>
                <div className="w-10 h-px bg-oxblood mb-10" />

                <p className="font-scripture text-lg md:text-xl text-cotton/70 leading-[2.2] mb-16">
                  {artifact.description}
                </p>

                {/* Details List */}
                <div className="border-t border-ash/15 pt-10">
                  <p className="font-ui text-[10px] text-iron tracking-[0.3em] mb-6">
                    Specifications
                  </p>
                  <ul className="space-y-4">
                    {artifact.details.map((detail, i) => (
                      <li
                        key={i}
                        className="font-ui text-[12px] text-parchment/50 tracking-wide flex items-start gap-3"
                      >
                        <span className="w-1 h-1 bg-oxblood rounded-full mt-1.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
           MICRO-SECTIONS — Tag & Glyph
           ═══════════════════════════════════════════════════════ */}
        <section className="border-t border-ash/15">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 py-16 md:py-24">
              {/* The Tag */}
              <motion.div
                ref={tagRef}
                initial={{ opacity: 0, y: 30 }}
                animate={tagInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              >
                <div className="relative w-full aspect-[4/3] mb-8 overflow-hidden bg-charcoal/20">
                  <Image
                    src="/images/details/tag.png"
                    alt="Hand-numbered tag"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <p className="font-ui text-[10px] text-oxblood tracking-[0.4em] mb-4">
                  The Hand-Numbered Tag
                </p>
                <p className="font-scripture text-sm text-cotton/50 leading-[2] italic">
                  {artifact.tagInfo}
                </p>
              </motion.div>

              {/* The Glyph */}
              <motion.div
                ref={glyphRef}
                initial={{ opacity: 0, y: 30 }}
                animate={glyphInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
              >
                <div className="relative w-full aspect-[4/3] mb-8 overflow-hidden bg-charcoal/20">
                  <Image
                    src="/images/details/glyph.png"
                    alt="The Gibbor glyph"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <p className="font-ui text-[10px] text-oxblood tracking-[0.4em] mb-4">
                  The Signature Glyph
                </p>
                <p className="font-scripture text-sm text-cotton/50 leading-[2] italic">
                  {artifact.glyphInfo}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
           OTHER ARTIFACTS
           ═══════════════════════════════════════════════════════ */}
        <section className="border-t border-ash/15 py-20 md:py-32">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <p className="font-ui text-[10px] text-iron tracking-[0.4em] mb-4">
                Continue
              </p>
              <h2 className="font-blackletter text-3xl md:text-4xl text-cream">
                Other Artifacts
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(artifacts)
                .filter(([key]) => key !== id)
                .slice(0, 4)
                .map(([key, item]) => (
                  <Link
                    key={key}
                    href={`/artifact/${key}`}
                    className="group block"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-charcoal/20">
                      <Image
                        src={item.images[0]}
                        alt={item.name}
                        fill
                        className="object-contain transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-void/20 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                    <h3 className="font-blackletter text-lg text-cream group-hover:text-oxblood transition-colors duration-500">
                      {item.name}
                    </h3>
                    <p className="font-ui text-[10px] text-iron tracking-wider">
                      ${item.price}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
