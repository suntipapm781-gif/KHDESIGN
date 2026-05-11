export default function Home() {
  return (
    <main className="p-8 max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">
        KHDESIGN – ร้านออกแบบเสื้อและสติกเกอร์
      </h1>

      <p className="text-lg mb-6">
        รับออกแบบเสื้อ สติกเกอร์ และงานกราฟิกทุกชนิด  
        สร้างงานใหม่ตามความต้องการลูกค้า
      </p>

      <div className="flex gap-4 justify-center">
        <a
          href="/gallery"
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
        >
          ดูผลงาน
        </a>

        <a
          href="/contact"
          className="px-6 py-3 border border-black rounded-lg hover:bg-gray-100"
        >
          ติดต่อร้าน
        </a>
      </div>
    </main>
  );
}
