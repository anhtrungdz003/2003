export default function Orders() {
  const orders = [
    { id: "DH001", date: "05/10/2025", total: 126000, status: "Đang giao" },
    { id: "DH002", date: "03/10/2025", total: 45000, status: "Hoàn thành" },
  ];

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-6 text-primary">Đơn hàng của tôi</h1>
      <table className="w-full border">
        <thead className="bg-amber-100">
          <tr>
            <th className="p-3 border">Mã đơn</th>
            <th className="p-3 border">Ngày đặt</th>
            <th className="p-3 border">Tổng tiền</th>
            <th className="p-3 border">Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td className="p-3 border text-center">{o.id}</td>
              <td className="p-3 border text-center">{o.date}</td>
              <td className="p-3 border text-center">
                {o.total.toLocaleString()}đ
              </td>
              <td className="p-3 border text-center text-primary font-medium">
                {o.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
