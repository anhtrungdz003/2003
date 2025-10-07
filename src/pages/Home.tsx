// src/pages/HomePage.tsx
import Header from "@/components/Header";
import FeaturedProducts from "@/components/FeaturedProducts";
import RatingSection from "@/components/RatingSection";
import caphe from "@/assets/images/caphe.jpg";
import trasua from "@/assets/images/trasua.jpg";
import matcha from "@/assets/images/matcha.jpg";
import trachanh from "@/assets/images/trachanh.jpg";
import sinhto from "@/assets/images/sinhto.jpg";

export default function HomePage() {
  // Dữ liệu mẫu cho sản phẩm nổi bật
  const products = [
    {
      id: 1,
      name: "Cà phê sữa đá",
      image: caphe,
    },
    {
      id: 2,
      name: "Trà sữa truyền thống",
      image: trasua,
    },
    {
      id: 3,
      name: "Matcha Latte",
      image: matcha,
    },
    {
      id: 4,
      name: "Trà chanh mật ong",
      image: trachanh,
    },
    {
      id: 5,
      name: "Sinh tố bơ",
      image: sinhto,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-amber-50">
      {/* Header cố định trên cùng */}
      <Header />
      {/* Nội dung chính */}
      <main className="flex-1 mt-[72px]">
        {/* Banner sản phẩm nổi bật */}
        <FeaturedProducts products={products} />

        {/* Giới thiệu ngắn */}
        <section className="text-center px-4 max-w-3xl mx-auto my-16">
          <h2 className="text-3xl font-bold text-amber-700 mb-4">
            Hương vị tươi mới mỗi ngày
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Thưởng thức các loại đồ uống được pha chế từ nguyên liệu tự nhiên,
            mang đến trải nghiệm tuyệt vời và sảng khoái. Hãy đến với{" "}
            <span className="font-semibold text-amber-800">2003 Drinks</span>
            để cảm nhận hương vị khác biệt!
          </p>
        </section>
        <RatingSection />
      </main>
      {/* Footer duy nhất */}\
    </div>
  );
}
