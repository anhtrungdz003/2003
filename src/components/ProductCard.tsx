// src/components/ProductCard.tsx
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price?: number; // banner không cần
  image: string;
  banner?: boolean; // true nếu dùng banner
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  banner,
}: Product) {
  if (banner) {
    // Hiển thị banner: chỉ ảnh + tên
    return (
      <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute bottom-4 left-4 bg-black/50 text-white p-2 rounded">
          <h3 className="font-bold text-lg md:text-2xl">{name}</h3>
        </div>
      </div>
    );
  }

  // Chế độ bình thường (grid/list)
  return (
    <div className="border rounded-xl bg-white shadow hover:shadow-lg hover:scale-105 transition-transform duration-300">
      <Link to={`/product/${id}`}>
        <img
          src={image}
          alt={name}
          className="w-full aspect-[4/3] object-cover rounded-t-xl"
        />
      </Link>
      <div className="p-4 text-center">
        <h3 className="font-semibold text-lg mb-2">{name}</h3>
        <p className="text-primary font-bold">
          {price?.toLocaleString("vi-VN")}đ
        </p>
        <button className="mt-3 bg-primary text-white px-4 py-2 rounded-lg hover:bg-amber-600 hover:shadow-md transition">
          Thêm vào giỏ
        </button>
      </div>
    </div>
  );
}
