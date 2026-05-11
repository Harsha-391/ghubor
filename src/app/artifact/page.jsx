"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const products = [
  {
    id: "genesis-tee",
    name: "Genesis Tee",
    subtitle: "The first word spoken into the void.",
    price: "120",
    edition: "100 pieces",
    image: "/images/products/tshirt.png",
    category: "Tees",
  },
  {
    id: "mantle-hoodie",
    name: "The Mantle",
    subtitle: "Heavyweight refuge. Dense enough to carry the unseen.",
    price: "185",
    edition: "100 pieces",
    image: "/images/products/hoodie.png",
    category: "Outerwear",
  },
  {
    id: "scroll-longsleeve",
    name: "The Scroll",
    subtitle: "Scripture from shoulder to wrist.",
    price: "145",
    edition: "100 pieces",
    image: "/images/products/longsleeve.png",
    category: "Tees",
  },
  {
    id: "aegis-jacket",
    name: "The Aegis",
    subtitle: "The outer wall. Crimson within, void without.",
    price: "280",
    edition: "50 pieces",
    image: "/images/products/jacket.png",
    category: "Outerwear",
  },
  {
    id: "foundation-pants",
    name: "Foundation",
    subtitle: "Where the warrior stands.",
    price: "135",
    edition: "100 pieces",
    image: "/images/products/pants.png",
    category: "Bottoms",
  },
];

const categories = ["All", "Tees", "Outerwear", "Bottoms"];

function ProductCard({ product, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link href={`/artifact/${product.id}`} className="group block">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-charcoal/30 mb-4">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
          <div className="absolute inset-0 bg-void/0 group-hover:bg-void/20 transition-colors duration-500" />

          {/* Quick-view label */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
            <div className="bg-charcoal/90 backdrop-blur-sm py-3 text-center">
              <span className="font-ui text-[10px] text-cream tracking-[0.3em]">
                View Artifact
              </span>
            </div>
          </div>

          {/* Edition badge */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="font-ui text-[9px] text-oxblood tracking-[0.2em] bg-void/80 backdrop-blur-sm px-2 py-1">
              {product.edition}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-1">
          <h3 className="font-blackletter text-lg md:text-xl text-cream group-hover:text-oxblood transition-colors duration-500">
            {product.name}
          </h3>
          <p className="font-scripture text-xs text-parchment/40 italic line-clamp-1">
            {product.subtitle}
          </p>
          <p className="font-ui text-[11px] text-iron tracking-wider pt-1">
            ${product.price}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ArtifactsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <div className="h-24 md:h-32 w-full" />

        {/* HEADER */}
        <section className="w-full pb-10 px-6 md:px-12 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-ui text-[10px] text-oxblood tracking-[0.4em] mb-4">
              The Collection
            </p>
            <h1 className="font-blackletter text-4xl sm:text-5xl md:text-7xl text-cream mb-4">
              All Artifacts
            </h1>
            <p className="font-scripture text-base text-parchment/40 italic max-w-lg mx-auto">
              Each garment is forged in limited runs. When a run is complete, it
              enters the archive. Claim before it passes.
            </p>
          </motion.div>
        </section>

        {/* FILTER BAR */}
        <section className="w-full px-6 md:px-12 lg:px-20 pb-8 border-b border-ash/15">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="font-ui text-[10px] text-iron tracking-[0.3em] hidden sm:inline">
                Filter
              </span>
              <div className="flex gap-3 flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`font-ui text-[10px] tracking-[0.2em] px-4 py-2 border transition-all duration-500 ${
                      activeFilter === cat
                        ? "border-oxblood text-cream bg-oxblood/15"
                        : "border-ash/30 text-iron hover:text-cream hover:border-ash"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <span className="font-ui text-[10px] text-iron/50 tracking-wider flex-shrink-0 ml-4">
              {filtered.length} artifact{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </section>

        {/* PRODUCT GRID */}
        <section className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-8">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="font-blackletter text-2xl text-cream/30 mb-4">
                No artifacts in this category
              </p>
              <button
                onClick={() => setActiveFilter("All")}
                className="font-ui text-[10px] text-oxblood tracking-[0.2em] hover:text-cream transition-colors duration-500"
              >
                View All →
              </button>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
