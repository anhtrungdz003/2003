

interface Order {
  id: string;
  customer: string;
  total: number;
  status: string;
}

const mockOrders: Order[] = [
  { id: "DH001", customer: "Nguyễn Văn A", total: 126000, status: "Đang giao" },
  { id: "DH002", customer: "Trần Thị B", total: 45000, status: "Hoàn thành" },
];

export default function OrderManager() {
  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-6 text-amber-700">
        Quản lý đơn hàng
      </h1>
      <table className="w-full border">
        <thead className="bg-amber-100">
          <tr>
            <th className="p-3 border">Mã đơn</th>
            <th className="p-3 border">Khách hàng</th>
            <th className="p-3 border">Tổng tiền</th>
            <th className="p-3 border">Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {mockOrders.map((o) => (
            <tr key={o.id}>
              <td className="p-3 border text-center">{o.id}</td>
              <td className="p-3 border">{o.customer}</td>
              <td className="p-3 border text-center">
                {o.total.toLocaleString()}đ
              </td>
              <td className="p-3 border text-center">{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
