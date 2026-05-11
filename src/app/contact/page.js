export default function Contact() {
  return (
    <main className="p-8 max-w-3xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">ติดต่อเรา</h1>

      <p className="mb-6">
        สามารถกดปุ่มด้านล่างเพื่อพูดคุยกับร้าน KHDESIGN ได้ทันที
      </p>

      <div className="flex gap-4 justify-center">

        <a
          href="[line.me](https://line.me/R/ti/p/yourlineid)"
          className="px-6 py-3 bg-green-500 text-white rounded-lg"
        >
          LINE
        </a>

        <a
          href="[m.me](https://m.me/yourfacebook)"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg"
        >
          Messenger
        </a>
      </div>
    </main>
  );
}
