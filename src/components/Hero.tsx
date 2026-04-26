"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="GHUBOR atmospheric hero"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark overlay to deepen the void */}
        <div className="absolute inset-0 bg-void/60" />
        {/* Oxblood vignette edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(10,10,10,0.95)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          {/* Sacred accent line */}
          <div className="sacred-divider mb-10 mx-auto" />

          {/* Blackletter headline */}
          <motion.h1
            className="font-blackletter text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-cream leading-[0.95] mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            The weight of<br />being human.
          </motion.h1>

          {/* Sub-fragment */}
          <motion.p
            className="font-scripture text-lg md:text-xl text-parchment/70 max-w-xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
          >
            Armor becomes skin. Scripture becomes sinew.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <Link href="/artifact" className="cta-acquire inline-block">
              Enter
              <span className="inline-block ml-3 text-oxblood">↓</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void to-transparent z-10" />
    </section>
  );
}
