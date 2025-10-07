import ProductCard from "@/components/ProductCard";
import FilterBar from "@/components/FilterBar";

const mockProducts = [
  { id: 5, name: "Cà phê đen đá", price: 35000, image: "/images/den.jpg" },
  {
    id: 6,
    name: "Trà chanh mật ong",
    price: 40000,
    image: "/images/trachanh.jpg",
  },
  {
    id: 7,
    name: "Nước ép dưa hấu",
    price: 48000,
    image: "/images/epduahau.jpg",
  },
];

export default function ProductList() {
  return (
    <div className="container py-6">
      <h1 className="text-2xl font-bold mb-4 text-primary">Tất cả sản phẩm</h1>
      <FilterBar />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {mockProducts.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}
