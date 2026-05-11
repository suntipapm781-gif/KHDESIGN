export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black text-white flex flex-col items-center">

      {/* HERO IMAGE */}
      <div className="w-full flex justify-center mt-10 select-none">
        <img
          src="/hero.png"
          alt="KHDESIGN Collection"
          className="max-w-[1200px] w-full h-auto"
        />
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#more"
        className="mt-10 text-gray-400 hover:text-white text-sm"
      >
        เลื่อนลง
      </a>

      {/* Bottom Section */}
      <div id="more" className="w-full h-[100vh] flex items-center justify-center text-gray-500">
        (พื้นที่สำหรับข้อมูลเพิ่มเติมหรือคอลเลกชันอื่น ๆ)
      </div>
    </main>
  );
}
