// src/components/FilterBar.tsx
import React, { useState } from "react";

interface FilterBarProps {
  onSearch: (keyword: string) => void;
  onCategoryChange: (category: string) => void;
  onSortChange: (sort: string) => void;
}

export default function FilterBar({
  onSearch,
  onCategoryChange,
  onSortChange,
}: FilterBarProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tất cả loại");
  const [sort, setSort] = useState("Sắp xếp");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCategory(value);
    onCategoryChange(value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSort(value);
    onSortChange(value);
  };

  return (
    <div className="flex flex-wrap items-center justify-between bg-white p-4 rounded shadow mb-6 gap-2">
      <input
        type="text"
        placeholder="Tìm kiếm đồ uống..."
        value={search}
        onChange={handleSearchChange}
        className="border p-2 rounded w-full md:w-1/3"
      />

      <select
        value={category}
        onChange={handleCategoryChange}
        className="border p-2 rounded"
      >
        <option>Tất cả loại</option>
        <option>Cà phê</option>
        <option>Trà</option>
        <option>Nước ép</option>
      </select>

      <select
        value={sort}
        onChange={handleSortChange}
        className="border p-2 rounded"
      >
        <option>Sắp xếp</option>
        <option>Giá tăng dần</option>
        <option>Giá giảm dần</option>
      </select>
    </div>
  );
}
