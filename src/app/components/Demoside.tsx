import React from "react";

import Image from "next/image";
import o1 from "../Images/Rectangle 34.png";
import o2 from "../Images/Rectangle 35.png";
import o3 from "../Images/Rectangle 36.png";
import o4 from "../Images/Rectangle 37.png";
import cart from "../Images/cart.png";

const Demoside = () => {
  const products = [
    {
      id: 1,
      title: "Ut Diam consequat",
      color: "Brown",
      size: "XL",
      price: "$32.00",
      image: o1,
    },
    {
      id: 2,
      title: "Ut Diam consequat",
      color: "Brown",
      size: "XL",
      price: "$32.00",
      image: o2,
    },
    {
      id: 3,
      title: "Ut Diam consequat",
      color: "Brown",
      size: "XL",
      price: "$32.00",
      image: o3,
    },
    {
      id: 4,
      title: "Ut Diam consequat",
      color: "Brown",
      size: "XL",
      price: "$32.00",
      image: o4,
    },
  ];

  return (
    <div className="p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex items-center justify-between bg-white p-6 mb-4   border-b"
        >
          {/* Image */}
          <div className="flex-shrink-0">
            <Image
              src={product.image}
              alt={product.title}
              width={100}
              height={100}
              className="w-24 h-24 object-cover rounded-md"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 ml-4">
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-sm text-gray-600">Color: {product.color}</p>
            <p className="text-sm text-gray-600">Size: {product.size}</p>
          </div>

          {/* Price */}
          <div className="text-xl font-bold text-right text-gray-800">
            {product.price}
          </div>
        </div>
      ))}
      <div className="mt-5 flex justify-center">
        <Image src={cart} alt="img" width={371} height={284} />
      </div>
    </div>
  );
};

export default Demoside;
