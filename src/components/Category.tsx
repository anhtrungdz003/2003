import React from "react";

interface CategoryProps {
  name: string;
  onClick: () => void;
}

const Category: React.FC<CategoryProps> = ({ name, onClick }) => {
  return (
    <button
      className="bg-amber-100 text-amber-800 px-4 py-2 rounded hover:bg-amber-200 transition whitespace-nowrap"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Category;
