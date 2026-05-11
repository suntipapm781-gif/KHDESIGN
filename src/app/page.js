export default function Home() {
  return (
    <main className="w-full bg-black text-white">

      {/* HERO IMAGE */}
      <section className="w-full h-screen flex justify-center items-center">
        <img
          src="/hero.png"
          alt="KHDESIGN Collection"
          className="max-w-[1200px] w-full h-auto select-none"
        />
      </section>

      {/* BG1 */}
      <section className="w-full h-screen flex justify-center items-center">
        <img
          src="/bg1.png"
          alt="bg1"
          className="w-auto h-full object-contain select-none"
        />
      </section>

      {/* BG2 */}
      <section className="w-full h-screen flex justify-center items-center">
        <img
          src="/bg2.png"
          alt="bg2"
          className="w-auto h-full object-contain select-none"
        />
      </section>

      {/* BG3 */}
      <section className="w-full h-screen flex justify-center items-center">
        <img
          src="/bg3.png"
          alt="bg3"
          className="w-auto h-full object-contain select-none"
        />
      </section>

      {/* BG4 */}
      <section className="w-full h-screen flex justify-center items-center">
        <img
          src="/bg4.png"
          alt="bg4"
          className="w-auto h-full object-contain select-none"
        />
      </section>

      {/* BG5 */}
      <section className="w-full h-screen flex justify-center items-center">
        <img
          src="/bg5.png"
          alt="bg5"
          className="w-auto h-full object-contain select-none"
        />
      </section>

    </main>
  );
}
