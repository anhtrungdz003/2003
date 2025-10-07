// src/components/CustomerReviewsUI.tsx
import { Star, StarHalf } from "lucide-react";

export default function CustomerReviewsUI() {
  return (
    <section className="max-w-6xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold text-amber-700 text-center mb-8">
        Đánh giá từ khách hàng
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Review 1 */}
        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center gap-3 mb-3">
            <img
              src="https://i.pravatar.cc/50?img=1"
              alt="Nguyễn Văn A"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="font-semibold text-gray-800">Nguyễn Văn A</div>
          </div>

          <div className="flex items-center gap-1 mb-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <Star className="w-5 h-5 text-yellow-400" />
            <Star className="w-5 h-5 text-yellow-400" />
            <Star className="w-5 h-5 text-yellow-400" />
            <Star className="w-5 h-5 text-yellow-400" />
          </div>

          <p className="text-gray-700">
            Đồ uống rất ngon, phục vụ nhiệt tình, sẽ quay lại!
          </p>
        </div>

        {/* Review 2 */}
        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center gap-3 mb-3">
            <img
              src="https://i.pravatar.cc/50?img=2"
              alt="Trần Thị B"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="font-semibold text-gray-800">Trần Thị B</div>
          </div>

          <div className="flex items-center gap-1 mb-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <Star className="w-5 h-5 text-yellow-400" />
            <Star className="w-5 h-5 text-yellow-400" />
            <Star className="w-5 h-5 text-yellow-400" />
            <StarHalf className="w-5 h-5 text-yellow-400" />
          </div>

          <p className="text-gray-700">
            Trà sữa vừa miệng, không quá ngọt, không gian quán đẹp.
          </p>
        </div>

        {/* Review 3 */}
        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center gap-3 mb-3">
            <img
              src="https://i.pravatar.cc/50?img=3"
              alt="Lê Văn C"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="font-semibold text-gray-800">Lê Văn C</div>
          </div>

          <div className="flex items-center gap-1 mb-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <Star className="w-5 h-5 text-yellow-400" />
            <Star className="w-5 h-5 text-yellow-400" />
            <Star className="w-5 h-5 text-yellow-400" />
            <Star className="w-5 h-5 text-gray-300" />
          </div>

          <p className="text-gray-700">
            Sinh tố thơm ngon, nhân viên thân thiện, giá hợp lý.
          </p>
        </div>
      </div>
    </section>
  );
}
