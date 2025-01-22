import React from "react";
import Image from "next/image";
import o1 from '../images2/o1.png'
import o2 from '../images2/o2.png'
import o3 from '../images2/o3.png'
import o4 from '../images2/o4.png'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const BlogLast = () => {
  const products = [
    {
      id: 1,
      title: "Duis lectus est.",
      price: "$12.00 - $15.00",
      image:o1,
    },
    {
      id: 2,
      title: "Sed placerat.",
      price: "$12.00 - $15.00",
      image: o2,
    },
    {
      id: 3,
      title: "Netus proin.",
      price: "$12.00 - $15.00",
      image: o3,
    },
    {
      id: 4,
      title: "Platea in.",
      price: "$12.00 - $15.00",
      image: o4,
    },
  ];

  const tags = ["General", "Atsanil", "Insas.", "Bibsaas", "Nulla."];

  return (
    <div className="p-4 space-y-8  rounded-lg ">
      {/* Offer Product Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Offer Products</h2>
        <div className="grid grid-cols-2  gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center py-6 rounded-lg "
            >
              <Image
                src={product.image}
                alt={product.title}
                className=" h-32 object-contain rounded-md mb-2"
              />
              <h3 className="text-sm font-semibold text-gray-700">
                {product.title}
              </h3>
              <p className="text-sm text-gray-500">{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Follow Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
        <span className="flex items-center justify-center gap-4 bg-white shadow p-3">
          <FaFacebook className="text-blue-600 text-2xl cursor-pointer" 
          size={36}/>
          <FaInstagram className="text-pink-500 text-2xl cursor-pointer"
          size={36} />
          <FaTwitter className="text-blue-400 text-2xl cursor-pointer" 
          size={36}/>
        </span>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className=" text-gray-600 text-lg px-3 py-1   cursor-pointer underline hover:text-color"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogLast;
