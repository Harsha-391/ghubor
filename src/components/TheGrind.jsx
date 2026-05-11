"use client";

import Image from "next/image";
import "./TheGrind.css";

const grindItems = [
  { type: "image", src: "/images/products/tshirt.png", alt: "Genesis Tee" },
  { type: "image", src: "/images/products/hoodie.png", alt: "The Mantle" },
  { type: "image", src: "/images/products/longsleeve.png", alt: "The Scroll" },
  { type: "image", src: "/images/products/jacket.png", alt: "The Aegis" },
  { type: "image", src: "/images/products/pants.png", alt: "Foundation" },
  { type: "image", src: "/images/details/tag.png", alt: "Detail Tag" },
  { type: "image", src: "/images/details/glyph.png", alt: "Glyph Detail" },
  { type: "image", src: "/images/details/scripture.png", alt: "Scripture Detail" },
];

export default function TheGrind() {
  return (
    <section className="grind-section border-t border-b border-ash/20 overflow-hidden">
      <div className="grind-header px-6">
        <p className="font-ui text-[10px] text-iron tracking-[0.4em] text-center uppercase">
          The Grind — Perpetual
        </p>
      </div>

      {/* Marquee Track (Images Only) */}
      <div className="grind-image-section relative overflow-hidden">
        <div className="marquee-track">
          {/* Double the items for seamless loop */}
          {[...grindItems, ...grindItems].map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-4 md:mx-6 flex items-center"
            >
              <div className="relative w-[240px] md:w-[320px] h-[300px] md:h-[400px] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  sizes="(max-width: 768px) 240px, 320px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Description below Marquee */}
      <div className="grind-text-section px-6 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
        <h2 className="font-blackletter text-4xl md:text-5xl text-cream mb-6 text-center">
          Armor for the Modern Gibbor
        </h2>
        <div className="w-16 h-px bg-oxblood mx-auto mb-8" />
        <p className="font-scripture text-lg md:text-xl text-parchment/80 italic leading-relaxed text-center">
          Struggle is not the absence of God—it is the proof of His shaping. Faith is not felt. It is forged. When the war has ended, and the armor has become your skin, you realize that every garment begins in the dark. Hand-numbered. Scripture-dense. Built to carry weight.
        </p>
      </div>
    </section>
  );
}
