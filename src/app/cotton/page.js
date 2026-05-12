export default function Cotton() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">เสื้อ Cotton</h1>

      <p className="mb-6">
        หน้านี้สำหรับโชว์ผลงานเสื้อ Cotton สามารถเพิ่มรูปผลงานลงได้ภายหลัง
      </p>

    <main className="w-full bg-black text-white">

      {/* HERO IMAGE */}
      <section className="w-full overflow-hidden">
        <img
          src="/hero.png"
          alt="KHDESIGN Collection"
          className="w-full h-auto block select-none"
        />

      <div className="h-48 bg-gray-200 flex items-center justify-center rounded-lg">
        <span className="text-gray-500">ยังไม่มีรูปผลงาน</span>
      </div>
    </main>
  );
}
