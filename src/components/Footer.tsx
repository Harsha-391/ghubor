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
    <footer className="border-t border-ash/20 bg-void mt-20 md:mt-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Main Footer Grid */}
        <div className="py-20 md:py-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 border-b border-ash/10">
          
          {/* Column 1: Newsletter */}
          <div className="lg:col-span-12 text-center border-b border-ash/10 pb-16">
            <p className="font-ui text-[10px] text-iron tracking-[0.4em] mb-4">
              Newsletter
            </p>
            <h3 className="font-blackletter text-3xl md:text-5xl text-cream mb-4">
              Join the Myth
            </h3>
            <p className="font-scripture text-sm text-parchment/40 mb-10 italic max-w-sm mx-auto">
              Receive word of new artifacts, scripture drops, and the unfolding narrative of the Gibbor.
            </p>

            {subscribed ? (
              <p className="font-ui text-[11px] text-oxblood tracking-[0.2em]">
                You are now part of the myth.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 bg-transparent border border-ash/40 px-5 py-3 font-ui text-[11px] text-cream placeholder:text-iron/50 tracking-wider outline-none focus:border-oxblood transition-colors duration-500 text-center sm:text-left"
                />
                <button
                  type="submit"
                  className="cta-acquire px-8 py-3 text-[10px]"
                >
                  Enter
                </button>
              </form>
            )}
          </div>

          {/* Column 2: The Path (Navigation) */}
          <div className="lg:col-span-4 text-center">
            <p className="font-ui text-[10px] text-oxblood tracking-[0.3em] mb-8">
              The Path
            </p>
            <nav className="flex flex-col items-center gap-4">
              <Link href="/" className="font-ui text-[11px] text-iron hover:text-cream transition-colors duration-500 w-fit">
                Enter
              </Link>
              <Link href="/artifact" className="font-ui text-[11px] text-iron hover:text-cream transition-colors duration-500 w-fit">
                All Artifacts
              </Link>
              <Link href="/mythos" className="font-ui text-[11px] text-iron hover:text-cream transition-colors duration-500 w-fit">
                The Mythos
              </Link>
            </nav>
          </div>

          {/* Column 3: The Bureau (Support & Legal) */}
          <div className="lg:col-span-4 text-center">
            <p className="font-ui text-[10px] text-oxblood tracking-[0.3em] mb-8">
              The Bureau
            </p>
            <nav className="flex flex-col items-center gap-4">
              <Link href="#" className="font-ui text-[11px] text-iron hover:text-cream transition-colors duration-500 w-fit">
                Summon Us (Contact)
              </Link>
              <Link href="#" className="font-ui text-[11px] text-iron hover:text-cream transition-colors duration-500 w-fit">
                Dispatch (Shipping)
              </Link>
              <Link href="#" className="font-ui text-[11px] text-iron hover:text-cream transition-colors duration-500 w-fit">
                Relinquishment (Returns)
              </Link>
              <Link href="#" className="font-ui text-[11px] text-iron hover:text-cream transition-colors duration-500 w-fit">
                The Vow (Privacy)
              </Link>
              <Link href="#" className="font-ui text-[11px] text-iron hover:text-cream transition-colors duration-500 w-fit">
                The Covenant (Terms)
              </Link>
            </nav>
          </div>

          {/* Column 4: The Bearer (Account) */}
          <div className="lg:col-span-4 text-center">
            <p className="font-ui text-[10px] text-oxblood tracking-[0.3em] mb-8">
              The Bearer
            </p>
            <nav className="flex flex-col items-center gap-4">
              <Link href="#" className="font-ui text-[11px] text-iron hover:text-cream transition-colors duration-500 w-fit">
                My Covenants (Orders)
              </Link>
              <Link href="#" className="font-ui text-[11px] text-iron hover:text-cream transition-colors duration-500 w-fit">
                The Burden (Cart)
              </Link>
              <Link href="#" className="font-ui text-[11px] text-iron hover:text-cream transition-colors duration-500 w-fit">
                Visions (Wishlist)
              </Link>
              <Link href="#" className="font-ui text-[11px] text-iron hover:text-cream transition-colors duration-500 w-fit">
                Bearer Identity (Account)
              </Link>
            </nav>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="py-10 flex flex-col items-center justify-center gap-8">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="GHUBOR"
              width={180}
              height={60}
              className="h-12 md:h-[60px] w-auto brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-500"
            />
          </Link>

          <p className="font-ui text-[9px] text-iron/40 tracking-wider text-center">
            © {new Date().getFullYear()} GHUBOR. All scripture carries weight.<br />
            <span className="opacity-50">Forged in the unseen war.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
