import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

const mockProducts: Product[] = [
  { id: 1, name: "Cà phê sữa đá", price: 38000, stock: 20 },
  { id: 2, name: "Trà đào cam sả", price: 45000, stock: 15 },
];

export default function ProductManager() {
  const [products, setProducts] = useState(mockProducts);
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [newStock, setNewStock] = useState(0);

  const addProduct = () => {
    const id = products.length + 1;
    setProducts([
      ...products,
      { id, name: newName, price: newPrice, stock: newStock },
    ]);
    setNewName("");
    setNewPrice(0);
    setNewStock(0);
  };

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-6 text-amber-700">
        Quản lý sản phẩm
      </h1>

      <div className="mb-6 flex flex-wrap gap-2">
        <Input
          placeholder="Tên sản phẩm"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Giá"
          value={newPrice}
          onChange={(e) => setNewPrice(Number(e.target.value))}
        />
        <Input
          type="number"
          placeholder="Tồn kho"
          value={newStock}
          onChange={(e) => setNewStock(Number(e.target.value))}
        />
        <Button onClick={addProduct}>Thêm sản phẩm</Button>
      </div>

      <table className="w-full border">
        <thead className="bg-amber-100">
          <tr>
            <th className="p-3 border">ID</th>
            <th className="p-3 border">Tên sản phẩm</th>
            <th className="p-3 border">Giá</th>
            <th className="p-3 border">Tồn kho</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td className="p-3 border text-center">{p.id}</td>
              <td className="p-3 border">{p.name}</td>
              <td className="p-3 border text-center">
                {p.price.toLocaleString()}đ
              </td>
              <td className="p-3 border text-center">{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
