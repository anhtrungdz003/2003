import React from "react";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  image,
  onAddToCart,
}) => {
  return (
    <div className="border rounded p-4 flex flex-col items-center shadow hover:shadow-lg transition">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover mb-2 rounded"
      />
      <h3 className="font-bold text-center">{name}</h3>
      <span className="text-amber-800 font-semibold">
        {price.toLocaleString()}₫
      </span>
      <button
        className="bg-amber-500 text-white px-4 py-2 mt-2 rounded hover:bg-amber-600 transition"
        onClick={onAddToCart}
      >
        Thêm vào giỏ
      </button>
    </div>
  );
};

export default ProductCard;
