import { Button } from "@/components/ui/button";

export default function Cart() {
  const cartItems = [
    { id: 1, name: "Cà phê sữa đá", price: 38000, qty: 2 },
    { id: 2, name: "Trà đào cam sả", price: 45000, qty: 1 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-6 text-primary">Giỏ hàng của bạn</h1>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-3"
          >
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">x{item.qty}</p>
            </div>
            <p className="font-semibold">
              {(item.price * item.qty).toLocaleString()}đ
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-between items-center">
        <p className="text-lg font-bold">Tổng: {total.toLocaleString()}đ</p>
        <Button>Thanh toán</Button>
      </div>
    </div>
  );
}
