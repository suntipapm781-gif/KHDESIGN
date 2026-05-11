import "./globals.css";

export const metadata = {
  title: "KHDESIGN - ออกแบบเสื้อและสติกเกอร์",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>

        <header className="p-4 border-b mb-8 bg-white">
          <nav className="max-w-5xl mx-auto flex gap-6 text-lg">
            <a href="/" className="hover:opacity-70">หน้าแรก</a>
            <a href="/shirt-print" className="hover:opacity-70">เสื้อพิมพ์ลาย</a>
            <a href="/cotton" className="hover:opacity-70">เสื้อ Cotton</a>
            <a href="/sticker" className="hover:opacity-70">สติกเกอร์</a>
            <a href="/drawing" className="hover:opacity-70">งานวาด</a>
            <a href="/contact" className="hover:opacity-70">ติดต่อเรา</a>
          </nav>
        </header>

        {children}

      </body>
    </html>
  );
}
