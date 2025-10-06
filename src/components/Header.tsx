import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-amber-50 shadow-md py-4 px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-amber-800 mb-2 sm:mb-0">
        2003-Mixiao
      </h1>
      <div className="flex w-full sm:w-auto">
        <input
          type="text"
          placeholder="Tìm sản phẩm..."
          className="flex-1 border rounded-l px-2 py-1 focus:outline-none"
        />
        <button className="bg-amber-500 text-white px-4 py-1 rounded-r hover:bg-amber-600 transition">
          Tìm
        </button>
      </div>
      <div className="mt-2 sm:mt-0">🛒</div>
    </header>
  );
};

export default Header;
