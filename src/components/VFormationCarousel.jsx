"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import "./VFormationCarousel.css";

const products = [
  {
    id: "genesis-tee",
    name: "Genesis Tee",
    subtitle: "Psalm 144:1 — Dense scripture chest panel",
    image: "/images/products/tshirt.png",
    price: "120",
  },
  {
    id: "mantle-hoodie",
    name: "The Mantle",
    subtitle: "Heavyweight hoodie — Gibbor glyph embroidered",
    image: "/images/products/hoodie.png",
    price: "185",
  },
  {
    id: "scroll-longsleeve",
    name: "The Scroll",
    subtitle: "Long sleeve — Full back scripture",
    image: "/images/products/longsleeve.png",
    price: "145",
  },
  {
    id: "aegis-jacket",
    name: "The Aegis",
    subtitle: "Bomber jacket — Crimson lining",
    image: "/images/products/jacket.png",
    price: "280",
  },
  {
    id: "foundation-pants",
    name: "Foundation",
    subtitle: "Sweatpant — Glyph embroidery",
    image: "/images/products/pants.png",
    price: "135",
  },
];

export default function VFormationCarousel() {
  const [activeIndex, setActiveIndex] = useState(Math.floor(products.length / 2));
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) > 50) {
      if (delta > 0) handleNext();
      else handlePrev();
    }
  };

  const getPosition = (index) => {
    const diff = index - activeIndex;
    const total = products.length;
    // Handle wrapping
    let normalizedDiff = diff;
    if (Math.abs(diff) > total / 2) {
      normalizedDiff = diff > 0 ? diff - total : diff + total;
    }
    return normalizedDiff;
  };

  return (
    <section className="carousel-section relative overflow-hidden">
      {/* Section Header */}
      <div className="carousel-header text-center px-6">
        <p className="font-ui text-[11px] text-oxblood tracking-[0.3em] mb-4">
          Current Drop
        </p>
        <h2 className="font-blackletter text-4xl md:text-6xl text-cream">
          The Spotlight
        </h2>
      </div>

      {/* Carousel Container */}
      <div
        className="carousel-track relative flex items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {products.map((product, index) => {
          const position = getPosition(index);
          const isActive = position === 0;
          const isVisible = Math.abs(position) <= 2;

          if (!isVisible) return null;

          return (
            <motion.div
              key={product.id}
              className="carousel-item absolute cursor-pointer"
              onClick={() => setActiveIndex(index)}
              initial={false}
              animate={{
                x: `calc(-50% + ${position * 280}px)`,
                y: "-50%",
                scale: isActive ? 1 : 0.75 - Math.abs(position) * 0.06,
                zIndex: isActive ? 10 : 5 - Math.abs(position),
                opacity: isActive ? 1 : 0.65 - Math.abs(position) * 0.1,
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                top: "50%",
                left: "50%",
                filter: isActive ? "none" : "brightness(0.6)",
              }}
            >
              <div className="carousel-image-container relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 260px, 360px"
                />

                {/* Subtle overlay for non-active */}
                {!isActive && (
                  <div className="absolute inset-0 bg-void/15" />
                )}
              </div>

              {/* Product Info — only for active */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    className="carousel-text-container text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <h3 className="font-blackletter text-2xl md:text-3xl text-cream mb-2">
                      {product.name}
                    </h3>
                    <p className="font-scripture text-sm text-parchment/90 mb-4 max-w-[300px] mx-auto">
                      {product.subtitle}
                    </p>
                    <Link
                      href={`/artifact/${product.id}`}
                      className="cta-acquire inline-block text-[10px] px-8 py-3"
                    >
                      Claim Artifact — ${product.price}
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Dots */}
      <div className="carousel-dots flex justify-center gap-3">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              i === activeIndex
                ? "bg-oxblood w-8"
                : "bg-ash hover:bg-smoke"
            }`}
            aria-label={`View product ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
