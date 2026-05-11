import "./globals.css";

export const metadata = {
  title: "KHDESIGN - เสื้อ & สติกเกอร์",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
