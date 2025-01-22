import FilterSection from "../filter/page";
import { FaHeart, FaShoppingCart, FaSearchPlus, FaStar } from "react-icons/fa";
import Image from "next/image";
import pag from '@/app/Images/pagination.png'
import icon from '@/app/Images/icons.png'
import p1 from '@/app/Images/p0.png'
import p2 from '@/app/Images/p2.png'
import p3 from '@/app/Images/p3.png'
import p4 from '@/app/Images/p4.png'
import p6 from '@/app/Images/p6.png'
import p7 from '@/app/Images/p7.png'

const products = [
  {
    img: p1,
    name: "Accumsan tincidunt",
    price: "$26.00",
    prevPrice: "$52.00",
    star: 4,
    emptyStar: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
  },
  {
    img: p2,
    name: "In nulla",
    price: "$26.00",
    prevPrice: "$52.00",
    star: 4,
    emptyStar: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
  },
  {
    img: p3,
    name: "Vel sem",
    price: "$26.00",
    prevPrice: "$52.00",
    star: 4,
    emptyStar: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
  },
  {
    img: p4,
    name: "Portitor cum",
    price: "$26.00",
    prevPrice: "$52.00",
    star: 4,
    emptyStar: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
  },
  {
    img: p1,
    name: "Nunc in",
    price: "$26.00",
    prevPrice: "$52.00",
    star: 4,
    emptyStar: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
  },
  {
    img: p6,
    name: "Vitae facilisis",
    price: "$26.00",
    prevPrice: "$52.00",
    star: 4,
    emptyStar: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
  },
  {
    img: p7,
    name: "Curabitur lectus",
    price: "$26.00",
    prevPrice: "$52.00",
    star: 4,
    emptyStar: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
  },
];

const Page = () => {
  return (
    <main className=" overflow-hidden">
      {/* Filter Section */}
      <FilterSection
        textTitle="Shop Products"
        textNavigation="Home ."
        pageName="Shop Products"
      />

      {/* Product List */}
      <div className="space-y-10 mt-20">
        {products.map((item, index) => (
          <div
            className="flex justify-start gap-y-14 gap-x-8 items-center lg:ml-24 cursor-pointer lg:flex-row flex-col"
            key={index}
          >
            {/* Product Image */}
            <div className="">
              <Image
                src={item.img}
                alt={item.name}
                width={314}
                height={218}
                className="w-auto h-auto hover:rounded-xl transition-all ease duration-300"
              />
            </div>

            {/* Product Details */}
            <div className="lg:w-[550px] w-full flex justify-center lg:block items-center flex-col">
              {/* Name and Pagination */}
              <div className="flex items-center gap-x-4">
                <h1 className="text-1 font-bold text-[19px] text-indigo-900">
                  {item.name}
                </h1>
                <Image
                  src={pag}
                  alt="pagination"
                  width={42}
                  height={10}
                  className="w-auto h-auto"
                />
              </div>

              {/* Price and Stars */}
              <div className="flex items-center gap-x-4">
                <p className="text-1 text-indigo-900">{item.price}</p>
                <p className="text-red-500 text-1 line-through">
                  {item.prevPrice}
                </p>
                <div className="flex gap-x-1 items-center mb-1">
                  {Array.from({ length: item.star }).map((_, i) => (
                    <FaStar
                      key={`star-${index}-${i}`}
                      size={12}
                      className="text-yellow-400"
                    />
                  ))}
                  {Array.from({ length: item.emptyStar }).map((_, i) => (
                    <FaStar
                      key={`emptyStar-${index}-${i}`}
                      size={12}
                      className="text-gray-400"
                    />
                  ))}
                </div>
              </div>

              {/* Product Description */}
              <p className="lato text-gray-400 text-center lg:text-start text-lg my-4">
                {item.text}
              </p>

              {/* Action Icons */}
              <div className="flex gap-x-16 mt-8">
                <FaShoppingCart size={20} className="text-gray-500 hover:text-color transition-all ease duration-300" />
                <FaHeart size={20} className="text-gray-500 hover:text-color transition-all ease duration-300" />
                <FaSearchPlus size={20} className="text-gray-500 hover:text-color transition-all ease duration-300" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Brands Section */}
      <div className="flex justify-center items-center mt-14">
        <Image
          src={icon}
          alt="brands-img"
          width={904}
          height={93}
          className="cursor-pointer"
        />
      </div>
    </main>
  );
};

export default Page;
