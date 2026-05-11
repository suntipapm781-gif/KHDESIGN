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

          {/* กล่องจัดวาง: โลโก้ / เมนูกลาง / ค้นหาขวา */}
          <div className="max-w-7xl mx-auto flex items-center justify-between">

            {/* โลโก้ด้านซ้าย */}
            <a href="/">
              <img
                src="/logo.png"
                alt="KHDESIGN Logo"
                className="h-10 w-auto"
              />
            </a>

            {/* เมนู — จัดไว้ตรงกลางจริง ๆ */}
            <nav className="flex-1 flex justify-center gap-8 text-lg">
              <a href="/" className="hover:opacity-70">หน้าแรก</a>
              <a href="/shirt-print" className="hover:opacity-70">เสื้อพิมพ์ลาย</a>
              <a href="/cotton" className="hover:opacity-70">เสื้อ Cotton</a>
              <a href="/sticker" className="hover:opacity-70">สติกเกอร์</a>
              <a href="/drawing" className="hover:opacity-70">งานวาด</a>
              <a href="/faq" className="hover:opacity-70">คำถามที่พบบ่อย</a>
              <a href="/contact" className="hover:opacity-70">ติดต่อเรา</a>
            </nav>

            {/* กล่องค้นหาขวาสุด */}
            <div className="flex items-center">
              <input
                type="text"
                placeholder="ค้นหา"
                className="px-4 py-2 rounded-full bg-white text-black w-48"
              />
            </div>

          </div>
        </header>

        {/* ระยะห่างให้เฮดเดอร์ลอย */}
        <div className="pt-24"></div>

        {/* เนื้อหาหน้าแต่ละหน้า */}
        {children}

      </body>
    </html>
  );
}
