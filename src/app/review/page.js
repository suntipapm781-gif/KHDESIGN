export default function Review() {
  return (
    <main className="p-8 max-w-3xl mx-auto text-white">

      <h1 className="text-3xl font-bold mb-6">รีวิวจากลูกค้า</h1>

      <div className="space-y-6 text-gray-300">

        <div className="border-b border-gray-700 pb-4">
          <p className="text-lg font-semibold">คุณเอ – เสื้อพิมพ์ลาย</p>
          <p>งานสวย คมชัดมาก ส่งงานไว เดี๋ยวจะกลับมาสั่งอีกค่ะ</p>
        </div>

        <div className="border-b border-gray-700 pb-4">
          <p className="text-lg font-semibold">คุณบี – สติกเกอร์</p>
          <p>คุณภาพดี ติดทน สีสดมาก ถูกใจครับ</p>
        </div>

        <div>
          <p className="text-lg font-semibold">คุณซี – งานวาด</p>
          <p>ลายมือสวย งานละเอียด ประทับใจมากครับ</p>
        </div>

      </div>

    </main>
  );
}
