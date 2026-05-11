import "./globals.css";

export const metadata = {
  title: "KHDESIGN - ออกแบบเสื้อและสติกเกอร์",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className="bg-black text-white">

        {/* HEADER */}
        <header className="w-full py-4 px-6 flex items-center justify-between fixed top-0 left-0 bg-black/80 backdrop-blur-sm z-50">

          {/* โลโก้ */}
          <a href="/">
            <img
              src="/logo.png"
              alt="KHDESIGN Logo"
              className="h-10 w-auto"
            />
          </a>

          {/* เมนู + ค้นหา */}
          <div className="flex items-center gap-8">

            {/* เมนู */}
            <nav className="flex gap-6 text-lg">
              <a href="/" className="hover:opacity-70">หน้าแรก</a>
              <a href="/shirt-print" className="hover:opacity-70">เสื้อพิมพ์ลาย</a>
              <a href="/cotton" className="hover:opacity-70">เสื้อ Cotton</a>
              <a href="/sticker" className="hover:opacity-70">สติกเกอร์</a>
              <a href="/drawing" className="hover:opacity-70">งานวาด</a>
              <a href="/contact" className="hover:opacity-70">ติดต่อเรา</a>
            </nav>

            {/* ช่องค้นหา */}
            <input
              type="text"
              placeholder="ค้นหา"
              className="px-4 py-2 rounded-full bg-white text-black w-56"
            />
          </div>
        </header>

        {/* ระยะห่างเผื่อ header ลอยด้านบน */}
        <div className="pt-24"></div>

        {/* เนื้อหาแต่ละหน้า */}
        {children}
      </body>
    </html>
  );
}
