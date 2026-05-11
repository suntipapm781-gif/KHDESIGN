export default function ShirtPrint() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">เสื้อพิมพ์ลาย</h1>

      <p className="mb-6">
        หน้านี้สำหรับโชว์ผลงานเสื้อพิมพ์ลาย สามารถเพิ่มรูปผลงานลงได้ภายหลัง
      </p>

      <div className="h-48 bg-gray-200 flex items-center justify-center rounded-lg">
        <span className="text-gray-500">ยังไม่มีรูปผลงาน</span>
      </div>
    </main>
  );
}
