"use client";

import { useEffect, useState, useRef } from "react";

export default function Home() {
  return (
    <main className="w-full bg-black text-white">

      {/* HERO IMAGE */}
      <section className="w-full overflow-hidden">
        <img
          src="/hero.png"
          alt="KHDESIGN Collection"
          className="w-full h-auto block select-none"
        />
      </section>

      {/* BG1 */}
      <section className="w-full overflow-hidden">
        <img
          src="/bg1.png"
          alt="bg1"
          className="w-full h-auto block select-none"
        />
      </section>

      {/* BG2 */}
      <section className="w-full overflow-hidden">
        <img
          src="/bg2.png"
          alt="bg2"
          className="w-full h-auto block select-none"
        />
      </section>

      {/* BG3 */}
      <section className="w-full overflow-hidden">
        <img
          src="/bg3.png"
          alt="bg3"
          className="w-full h-auto block select-none"
        />
      </section>

      {/* BG4 */}
      <section className="w-full overflow-hidden">
        <img
          src="/bg4.png"
          alt="bg4"
          className="w-full h-auto block select-none"
        />
      </section>

      {/* BG5 */}
      <section className="w-full overflow-hidden">
        <img
          src="/bg5.png"
          alt="bg5"
          className="w-full h-auto block select-none"
        />
      </section>

      {/* FULLSCREEN SLIDER */}
      <FullscreenSlider />

    </main>
  );
}



/* -----------------------------
   FULLSCREEN SLIDER COMPONENT
-------------------------------- */

function FullscreenSlider() {
  const images = ["/bg1.png", "/bg2.png", "/bg3.png", "/bg4.png", "/bg5.png"];
  const [index, setIndex] = useState(0);
  const startX = useRef(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Touch for mobile swipe
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (diff > 50) next();     // swipe left
    if (diff < -50) prev();    // swipe right
  };

  return (
    <section
      className="relative w-full h-screen bg-black overflow-hidden select-none"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* IMAGE */}
      <img
        key={index}
        src={images[index]}
        className="absolute inset-0 w-full h-full object-contain transition-opacity duration-700"
      />

      {/* LEFT BUTTON */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white px-4 py-2 rounded-full"
      >
        ←
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white px-4 py-2 rounded-full"
      >
        →
      </button>
    </section>
  );
}
