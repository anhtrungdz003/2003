import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Product {
  id: number;
  name: string;
  image: string;
}

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Tự động chuyển ảnh sau 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <div className="w-full bg-gradient-to-r from-amber-50 to-orange-50 py-6">
      <h2 className="text-3xl font-bold text-center mb-4 text-amber-700">
        🌟 Sản phẩm nổi bật 🌟
      </h2>

      <div className="relative w-full h-[350px] md:h-[400px] lg:h-[450px] mx-auto rounded-2xl overflow-hidden max-w-5xl">
        <AnimatePresence>
          <motion.div
            key={products[currentIndex].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <img
              src={products[currentIndex].image}
              alt={products[currentIndex].name}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white bg-black/30 px-4 py-2 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold">
                {products[currentIndex].name}
              </h3>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
