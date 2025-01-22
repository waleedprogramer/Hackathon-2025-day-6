import Image from "next/image";
import Heading from "./Heading";
import t1 from "../Images/img1.png";
import t2 from "../Images/img2.png";
import t3 from "../Images/img3.png";
import t4 from "../Images/img4.png";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";
import pan from "../Images/pani2.png";

const featuredProducts = [
  {
    url: t1,
    title: "Stylish Shoes",
    code: "SKU: 12345",
    price: "$120.00",
  },
  {
    url: t2,
    title: "Elegant Watch",
    code: "SKU: 67890",
    price: "$250.00",
  },
  {
    url: t3,
    title: "Classic Jacket",
    code: "SKU: 54321",
    price: "$320.00",
  },
  {
    url: t4,
    title: "Modern Backpack",
    code: "SKU: 98765",
    price: "$150.00",
  },
];

const Featured = () => {
  return (
    <section className="mt-20">
      <Heading text="Featured Products" />
      <div className="mt-6 flex justify-center items-center flex-wrap gap-6">
        {featuredProducts.map((item, index) => (
          <div
            key={index}
            className="group relative w-72 bg-white  shadow-sm hover:bg-indigo-600
             hover:text-white  transition-shadow duration-300 ease-in-out overflow-hidden"
          >
            {/* Product Image */}
            <div className="relative w-full h-72 bg-[#F2F0FF] flex justify-center items-center">
              <Image
                src={item.url}
                alt={item.title}
                width={314}
                height={218}
                className="w-auto h-auto hover:rounded-xl transition-all ease duration-300"
              />
              {/* Icons at the Top and View More at the Bottom */}
              <div className="absolute inset-0 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-30">
                {/* Icons at the Top */}
                <div className="flex  gap-4 p-2 mt-4">
                  <FaShoppingCart className="text-white text-xl cursor-pointer hover:text-gray-300" />
                  <FaHeart className="text-white text-xl cursor-pointer hover:text-gray-300" />
                  <FaSearch className="text-white text-xl cursor-pointer hover:text-gray-300" />
                </div>
                {/* View More Button at the Bottom */}
                <div className="flex justify-center mb-4">
                  <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-800 transition duration-300">
                    View More
                  </button>
                </div>
              </div>
            </div>
            {/* Product Details */}
            <div className="text-center p-4">
              <h3 className="text-lg font-semibold  ">{item.title}</h3>
              <p className="text-sm  mt-2">{item.code}</p>
              <p className="text-lg font-bold  mt-2">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-6">
        <Image src={pan} alt="pagination" width={60} height={10} />
      </div>
    </section>
  );
};

export default Featured;
