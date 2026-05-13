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
      <section className="w-full">
        <img
          src="/bg1.png"
          alt="bg1"
          className="w-full h-auto block select-none"
        />
      </section>

      {/* BG2 */}
      <section className="w-full">
        <img
          src="/bg2.png"
          alt="bg2"
          className="w-full h-auto block select-none"
        />
      </section>

      {/* BG3 */}
      <section className="w-full">
        <img
          src="/bg3.png"
          alt="bg3"
          className="w-full h-auto block select-none"
        />
      </section>

      {/* BG4 */}
      <section className="w-full">
        <img
          src="/bg4.png"
          alt="bg4"
          className="w-full h-auto block select-none"
        />
      </section>

      {/* BG5 */}
      <section className="w-full">
        <img
          src="/bg5.png"
          alt="bg5"
          className="w-full h-auto block select-none"
        />
      </section>

            {/* AUTO SLIDE SECTION */}
<section className="w-full bg-black py-10">
  <div className="w-full flex justify-center">
    <img
      id="autoSlideImage"
      src="/bg1.png"
      alt="slide"
      className="w-full max-w-[1200px] h-auto object-contain select-none transition-opacity duration-700"
    />
  </div>
</section>

<script
  dangerouslySetInnerHTML={{
    __html: `
      let index = 1;
      const images = [
        "/bg1.png",
        "/bg2.png",
        "/bg3.png",
        "/bg4.png",
        "/bg5.png"
      ];
      const imgEl = document.getElementById("autoSlideImage");

      setInterval(() => {
        index = (index + 1) % images.length;
        imgEl.style.opacity = 0;
        setTimeout(() => {
          imgEl.src = images[index];
          imgEl.style.opacity = 1;
        }, 400);
      }, 3500);
    `,
  }}
/>


    </main>
  );
}
