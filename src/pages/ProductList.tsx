// src/pages/ProductList.tsx
import { useState } from "react";
import Header from "@/components/Header";
import FilterBar from "@/components/FilterBar";
import ProductCard from "@/components/ProductCard";
import caphe from "@/assets/images/caphe.jpg";
import trasua from "@/assets/images/trasua.jpg";
import matcha from "@/assets/images/matcha.jpg";
import trachanh from "@/assets/images/trachanh.jpg";
import sinhto from "@/assets/images/sinhto.jpg";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

// Dữ liệu mock
const allProducts: Product[] = [
  {
    id: 1,
    name: "Cà phê sữa đá",
    category: "Cà phê",
    price: 38000,
    image: caphe,
  },
  {
    id: 2,
    name: "Trà sữa truyền thống",
    category: "Trà",
    price: 32000,
    image: trasua,
  },
  {
    id: 3,
    name: "Matcha Latte",
    category: "Trà",
    price: 42000,
    image: matcha,
  },
  {
    id: 4,
    name: "Nước ép cam",
    category: "Nước ép",
    price: 35000,
    image: "/images/orange.jpg",
  },
  {
    id: 5,
    name: "Sinh tố bơ",
    category: "Sinh tố",
    price: 40000,
    image: sinhto,
  },
  {
    id: 6,
    name: "Trà chanh mật ong",
    category: "Trà",
    price: 40000,
    image: trachanh,
  },
  {
    id: 7,
    name: "Nước ép dưa hấu",
    category: "Nước ép",
    price: 48000,
    image: "/images/epduahau.jpg",
  },
];

export default function ProductList() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tất cả loại");
  const [sort, setSort] = useState("Mặc định");

  const filteredProducts = allProducts
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => category === "Tất cả loại" || p.category === category)
    .sort((a, b) => {
      if (sort === "Giá tăng dần") return a.price - b.price;
      if (sort === "Giá giảm dần") return b.price - a.price;
      return 0;
    });

  return (
    <div className="flex flex-col min-h-screen bg-amber-50">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6 text-amber-700 text-center">
          Tất cả sản phẩm
        </h1>

        {/* FilterBar */}
        <FilterBar
          onSearch={setSearch}
          onCategoryChange={setCategory}
          onSortChange={setSort}
        />

        {/* Grid sản phẩm */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p) => <ProductCard key={p.id} {...p} />)
          ) : (
            <p className="col-span-full text-center text-gray-500">
              Không tìm thấy sản phẩm nào
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
