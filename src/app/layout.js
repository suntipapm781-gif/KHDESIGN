<header className="w-full py-3 px-4 fixed top-0 left-0 bg-black/80 backdrop-blur-sm z-50">

  {/* แถว 1: โลโก้ + ช่องค้นหา */}
  <div className="flex items-center justify-between md:max-w-7xl md:mx-auto">

    {/* โลโก้ */}
    <a href="/" className="flex-shrink-0">
      <img
        src="/logo.png"
        alt="KHDESIGN Logo"
        className="h-9 w-auto md:h-10"
      />
    </a>

    {/* ช่องค้นหา – มือถือทำให้สั้นลง */}
    <div className="flex-shrink md:flex-shrink-0">
      <input
        type="text"
        placeholder="ค้นหา"
        className="
          px-3 py-1.5 rounded-full bg-white text-black
          w-28 text-sm
          md:w-48 md:px-4 md:py-2 md:text-base
        "
      />
    </div>
  </div>

  {/* แถว 2: เมนู */}
  <nav
    className="
      mt-3 flex gap-6 text-sm 
      overflow-x-auto whitespace-nowrap scrollbar-hide
      md:mt-0 md:flex md:justify-center md:gap-8 md:text-lg md:overflow-visible md:whitespace-normal
    "
  >
    <a href="/" className="hover:opacity-70">หน้าแรก</a>
    <a href="/shirt-print" className="hover:opacity-70">เสื้อพิมพ์ลาย</a>
    <a href="/cotton" className="hover:opacity-70">เสื้อ Cotton</a>
    <a href="/sticker" className="hover:opacity-70">สติกเกอร์</a>
    <a href="/drawing" className="hover:opacity-70">งานวาด</a>
    <a href="/faq" className="hover:opacity-70">คำถามที่พบบ่อย</a>
    <a href="/review" className="hover:opacity-70">รีวิว</a>
    <a href="/contact" className="hover:opacity-70">ติดต่อเรา</a>
  </nav>

</header>
