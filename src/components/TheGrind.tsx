"use client";

import Image from "next/image";

const grindItems = [
  { type: "image" as const, src: "/images/details/tag.png", alt: "Hand-numbered tag 047/100" },
  { type: "text" as const, content: "Struggle is not the absence of God—it is the proof of His shaping." },
  { type: "image" as const, src: "/images/details/glyph.png", alt: "The Gibbor glyph" },
  { type: "text" as const, content: "Faith is not felt. It is forged." },
  { type: "image" as const, src: "/images/details/scripture.png", alt: "Dense scripture print" },
  { type: "text" as const, content: "Transcendence: When the war has ended, and the armor has become your skin." },
  { type: "image" as const, src: "/images/products/tshirt.png", alt: "Genesis Tee detail" },
  { type: "text" as const, content: "Hand-numbered. Scripture-dense. Built to carry weight." },
];

export default function TheGrind() {
  return (
    <section className="py-16 md:py-24 border-t border-b border-ash/20 overflow-hidden">
      <div className="mb-8 px-6">
        <p className="font-ui text-[10px] text-iron tracking-[0.4em] text-center">
          The Grind — Perpetual
        </p>
      </div>

      {/* Marquee Track */}
      <div className="relative overflow-hidden">
        <div className="grind-track">
          {/* Double the items for seamless loop */}
          {[...grindItems, ...grindItems].map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-6 md:mx-10 flex items-center"
            >
              {item.type === "image" ? (
                <div className="relative w-[200px] md:w-[280px] h-[200px] md:h-[280px] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    sizes="(max-width: 768px) 200px, 280px"
                  />
                </div>
              ) : (
                <p className="font-scripture text-base md:text-lg text-parchment/40 max-w-[300px] italic leading-relaxed">
                  {item.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
