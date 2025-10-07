import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function ProductDetail() {
  const { id } = useParams();

  const product = {
    id,
    name: "Cà phê sữa đá",
    price: 38000,
    desc: "Cà phê sữa đá đậm vị Việt Nam, pha chế từ hạt robusta rang xay nguyên chất.",
    image: "/images/caphe.jpg",
  };

  return (
    <div className="container py-8 flex flex-col md:flex-row gap-8">
      <img
        src={product.image}
        alt={product.name}
        className="w-full md:w-1/3 rounded-xl shadow"
      />
      <div>
        <h1 className="text-3xl font-bold text-primary mb-3">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.desc}</p>
        <p className="text-xl font-semibold mb-6">
          {product.price.toLocaleString()}đ
        </p>
        <Button>Thêm vào giỏ hàng</Button>
      </div>
    </div>
  );
}
