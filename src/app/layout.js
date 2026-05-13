import "./globals.css";

export const metadata = {
  title: "KHDESIGN - ออกแบบเสื้อและสติกเกอร์",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className="bg-black text-white">

        {/* HEADER */}
        <header className="w-full py-4 px-6 fixed top-0 left-0 bg-black/80 backdrop-blur-sm z-50">

          {/* แถวบน: โลโก้ + ช่องค้นหา (มือถือซ่อนช่องค้นหา) */}
          <div className="flex items-center justify-between md:max-w-7xl md:mx-auto">
            {/* โลโก้ */}
            <a href="/">
              <img
                src="/logo.png"
                alt="KHDESIGN Logo"
                className="h-10 w-auto"
              />
            </a>

            {/* ช่องค้นหาเฉพาะ Desktop */}
            <div className="hidden md:block">
              <input
                type="text"
                placeholder="ค้นหา"
                className="px-4 py-2 rounded-full bg-white text-black w-48"
              />
            </div>
          </div>

          {/* แถบเมนู – มือถือเลื่อนซ้ายขวา / Desktop อยู่ตรงกลาง */}
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

        {/* เว้นที่ให้ Header ลอย */}
        <div className="pt-24"></div>

        {children}
      </body>
    </html>
  );
}
