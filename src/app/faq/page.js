export default function FAQ() {
  return (
    <main className="p-8 max-w-3xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-6">คำถามที่พบบ่อย</h1>

      <div className="space-y-6 text-gray-300">

        <div>
          <h2 className="font-semibold text-xl mb-2">1. ใช้เวลาผลิตงานกี่วัน?</h2>
          <p>ปกติ 1–3 วันทำการ ขึ้นกับความยากของงาน</p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">2. สามารถแก้แบบได้ไหม?</h2>
          <p>แก้ได้ฟรี 2 ครั้ง หากแก้มากกว่า 2 ครั้งจะมีค่าใช้จ่ายเพิ่มตามความยาก</p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">3. ต้องโอนมัดจำหรือไม่?</h2>
          <p>มัดจำ 50% ก่อนเริ่มงาน ที่เหลือชำระเมื่อส่งงานครบถ้วน</p>
        </div>

      </div>
    </main>
  );
}
