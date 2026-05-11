export default function Drawing() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">งานวาด</h1>

      <p className="mb-6">
        หน้านี้สำหรับโชว์ผลงานงานวาด สามารถเพิ่มรูปตัวอย่างได้ในภายหลัง
      </p>

      <div className="h-48 bg-gray-200 flex items-center justify-center rounded-lg">
        <span className="text-gray-500">ยังไม่มีรูปผลงาน</span>
      </div>
    </main>
  );
}
