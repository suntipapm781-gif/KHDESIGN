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



function FullscreenSlider() {
  const images = ["/bg1.png", "/bg2.png", "/bg3.png", "/bg4.png", "/bg5.png"];
  const [index, setIndex] = useState(0);
  const startX = useRef(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, []);

  // Touch swipe
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (diff > 50) next();
    if (diff < -50) prev();
  };

  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-black"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Slide Track */}
      <div
        className="flex w-full h-full transition-transform duration-[700ms] ease-out"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {images.map((src, i) => (
          <div key={i} className="w-full h-full flex-shrink-0 flex justify-center items-center">
            <img
              src={src}
              className="w-full h-full object-contain select-none"
            />
          </div>
        ))}
      </div>

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

