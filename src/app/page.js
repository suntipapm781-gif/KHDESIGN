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
      <section
        className="w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/bg1.png')" }}
      ></section>

      {/* BG2 */}
      <section
        className="w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/bg2.png')" }}
      ></section>

      {/* BG3 */}
      <section
        className="w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/bg3.png')" }}
      ></section>

      {/* BG4 */}
      <section
        className="w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/bg4.png')" }}
      ></section>

      {/* BG5 */}
      <section
        className="w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/bg5.png')" }}
      ></section>

    </main>
  );
}
