"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // TODO: integrate with Firebase / newsletter service
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-void mt-32 md:mt-48 pb-20 pt-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Sacred Divider */}
        <div className="w-px h-16 bg-oxblood/30 mx-auto mb-16" />

        {/* Newsletter Section */}
        <div className="mb-24">
          <p className="font-ui text-[10px] text-iron tracking-[0.4em] mb-4 uppercase">
            Newsletter
          </p>
          <h3 className="font-blackletter text-4xl md:text-5xl text-cream mb-6">
            Join the Myth
          </h3>
          <p className="font-scripture text-sm text-parchment/40 mb-10 italic max-w-sm mx-auto">
            Receive word of new artifacts, scripture drops, and the unfolding narrative.
          </p>

          {subscribed ? (
            <p className="font-ui text-[11px] text-oxblood tracking-[0.2em] uppercase">
              You are now part of the myth.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full sm:w-64 bg-transparent border-b border-ash/40 px-2 py-3 font-ui text-[11px] text-center text-cream placeholder:text-iron/40 tracking-wider outline-none focus:border-oxblood transition-colors duration-500"
              />
              <button
                type="submit"
                className="font-ui text-[10px] text-oxblood tracking-[0.3em] uppercase hover:text-cream transition-colors duration-500"
              >
                Submit
              </button>
            </form>
          )}
        </div>

        {/* Minimal Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-24">
          <Link href="/artifact" className="font-ui text-[10px] text-iron tracking-[0.2em] uppercase hover:text-cream transition-colors duration-500">
            Artifacts
          </Link>
          <Link href="/mythos" className="font-ui text-[10px] text-iron tracking-[0.2em] uppercase hover:text-cream transition-colors duration-500">
            The Mythos
          </Link>
          <Link href="#" className="font-ui text-[10px] text-iron tracking-[0.2em] uppercase hover:text-cream transition-colors duration-500">
            Summon Us
          </Link>
          <Link href="#" className="font-ui text-[10px] text-iron tracking-[0.2em] uppercase hover:text-cream transition-colors duration-500">
            The Covenant
          </Link>
        </nav>

        {/* Logo & Copyright */}
        <div className="flex flex-col items-center justify-center">
          <Link href="/" className="mb-8">
            <Image
              src="/logo.png"
              alt="GHUBOR"
              width={160}
              height={50}
              className="h-10 md:h-12 w-auto brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-500"
            />
          </Link>
          <p className="font-ui text-[9px] text-iron/30 tracking-widest uppercase">
            © {new Date().getFullYear()} GHUBOR. All scripture carries weight.
          </p>
        </div>
      </div>
    </footer>
  );
}
