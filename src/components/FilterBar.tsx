export default function FilterBar() {
  return (
    <div className="flex flex-wrap items-center justify-between bg-white p-4 rounded shadow mb-6">
      <input
        type="text"
        placeholder="Tìm kiếm đồ uống..."
        className="border p-2 rounded w-full md:w-1/3"
      />
      <select className="border p-2 rounded">
        <option>Tất cả loại</option>
        <option>Cà phê</option>
        <option>Trà</option>
        <option>Nước ép</option>
      </select>
      <select className="border p-2 rounded">
        <option>Sắp xếp</option>
        <option>Giá tăng dần</option>
        <option>Giá giảm dần</option>
      </select>
    </div>
  );
}
