import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold text-amber-700 mb-6">
        Bảng điều khiển Admin
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Link
          to="/admin/products"
          className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">Quản lý sản phẩm</h2>
          <p>Thêm, sửa, xóa sản phẩm, cập nhật tồn kho</p>
        </Link>
        <Link
          to="/admin/orders"
          className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">Quản lý đơn hàng</h2>
          <p>Xem trạng thái đơn hàng, cập nhật giao hàng</p>
        </Link>
        <Link
          to="/"
          className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">Trang chính</h2>
          <p>Quay về trang khách hàng</p>
        </Link>
      </div>
    </div>
  );
}
