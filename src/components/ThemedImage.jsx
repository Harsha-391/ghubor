"use client";

import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

/**
 * Renders lightSrc in light mode and darkSrc in dark mode.
 * Falls back to whichever source is provided if the other is missing.
 *
 * Usage:
 *   <ThemedImage lightSrc="/img-light.png" darkSrc="/img-dark.png" alt="…" width={400} height={300} />
 *   <ThemedImage lightSrc="/img-light.png" darkSrc="/img-dark.png" alt="…" fill className="object-cover" />
 */
export default function ThemedImage({ lightSrc, darkSrc, alt, className = "", ...props }) {
  const { theme } = useTheme();
  const src = theme === "light" ? (lightSrc ?? darkSrc) : (darkSrc ?? lightSrc);

  if (!src) return null;

  return (
    <Image
      src={src}
      alt={alt}
      className={`themed-image ${className}`}
      {...props}
    />
  );
}
