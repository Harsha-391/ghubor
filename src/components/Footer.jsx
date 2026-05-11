"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full border-t border-ash/20 mt-16 md:mt-24">

      {/* Main grid */}
      <div className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-10 lg:gap-16">

          {/* ── Brand ── */}
          <div>
            <Link href="/" className="inline-block mb-7">
              <Image
                src="/logo.png"
                alt="GHUBOR"
                width={160}
                height={50}
                className="h-9 w-auto brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-500"
              />
            </Link>
            <p className="font-scripture text-sm text-parchment/80 italic leading-relaxed mb-8 max-w-[260px]">
              Wearable scripture for unseen battles. Armor for the Modern Gibbor.
            </p>
            <div className="w-8 h-px bg-oxblood/50" />
          </div>

          {/* ── Navigation ── */}
          <div>
            <p className="font-ui text-[10px] text-iron tracking-[0.4em] uppercase mb-8">
              Navigate
            </p>
            <nav className="flex flex-col gap-5">
              {[
                { label: "The Artifacts", href: "/artifact" },
                { label: "The Mythos", href: "/mythos" },
                { label: "Summon Us", href: "#" },
                { label: "The Covenant", href: "#" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-ui text-[11px] text-iron tracking-[0.2em] uppercase hover:text-cream transition-colors duration-500 w-fit relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-oxblood group-hover:w-full transition-all duration-500" />
                </Link>
              ))}
            </nav>
          </div>

          {/* ── Newsletter ── */}
          <div>
            <p className="font-ui text-[10px] text-iron tracking-[0.4em] uppercase mb-8">
              Join the Myth
            </p>
            <p className="font-scripture text-sm text-parchment/80 italic leading-relaxed mb-8">
              Receive word of new artifacts, scripture drops, and the unfolding narrative.
            </p>

            {subscribed ? (
              <p className="font-ui text-[11px] text-oxblood tracking-[0.2em] uppercase">
                You are now part of the myth.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="w-full bg-transparent border-b border-ash/40 py-2 font-ui text-[11px] text-cream placeholder:text-iron/70 tracking-wider outline-none focus:border-oxblood transition-colors duration-500"
                />
                <button
                  type="submit"
                  className="font-ui text-[10px] text-oxblood tracking-[0.3em] uppercase hover:text-cream transition-colors duration-500"
                >
                  Submit →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ash/10 px-6 md:px-12 lg:px-20 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="font-ui text-[9px] text-iron/60 tracking-widest uppercase">
          © {new Date().getFullYear()} GHUBOR — All scripture carries weight.
        </p>
        <div className="flex items-center gap-8">
          <Link href="#" className="font-ui text-[9px] text-iron/60 tracking-widest uppercase hover:text-iron transition-colors duration-500">
            Privacy
          </Link>
          <Link href="#" className="font-ui text-[9px] text-iron/60 tracking-widest uppercase hover:text-iron transition-colors duration-500">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
