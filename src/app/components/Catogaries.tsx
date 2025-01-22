import React from "react";

const Categories = () => {
  const categories = [
    { name: "Hobbies", count: 14 },
    { name: "Women", count: 21 },
    { name: "Women", count: 21 },
    { name: "Women", count: 21 },
    { name: "Women", count: 21 },
  ];

  return (
    <div className="p-4 ">
      <h2 className="text-lg font-semibold mb-4">Search</h2>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border rounded-lg outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Categories Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <div className="space-y-4 grid grid-cols-2 gap-2">
          {categories.map((category, index) => (
            <button
              key={index}
              className="w-full flex justify-between items-center px-4 py-2 bg-white border rounded-lg hover:bg-pink-500 transition"
            >
              <span>{category.name}</span>
              <span className="text-sm text-gray-500">({category.count})</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
