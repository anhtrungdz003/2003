import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Checkout() {
  return (
    <div className="container py-8 max-w-lg">
      <h1 className="text-2xl font-bold mb-6 text-primary">Thanh toán</h1>
      <form className="space-y-4">
        <Input placeholder="Họ và tên" />
        <Input placeholder="Số điện thoại" />
        <Input placeholder="Địa chỉ giao hàng" />
        <select className="border px-3 py-2 rounded-lg w-full">
          <option>Phương thức thanh toán</option>
          <option>Thanh toán khi nhận hàng (COD)</option>
          <option>Chuyển khoản ngân hàng</option>
        </select>
        <Button type="submit" className="w-full">
          Xác nhận đặt hàng
        </Button>
      </form>
    </div>
  );
}
