import React from "react";
import FilterSection from "../filter/page";
import Image from "next/image";
import icon from '@/app/Images/icons.png'
import { client } from "@/sanity/lib/client";
import Link from "next/link";


interface Products {
  _id: number;
  name: string;
  subtext: string;
  price: number;
  image: string;
}

async function getData() {
  const res = await client.fetch<Products[]>(
    `*[_type == "product"]{
      _id,
      name,
      subtext,
      price,
      "image": image.asset->url
    }`
  );
  return res;
}



async function Features() {
  const data: Products[] = await getData();
  return (
    <div className="container mx-auto ">
      {/* Heading */}
      <div>
        <FilterSection
          textTitle="Shop Products"
          textNavigation="Home ."
          pageName="Shop Products"
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-6">
        {data.map((product, index) => (
          <div
            key={index}
            className="rounded-lg p-4  flex flex-col items-center justify-center"
          >
             <Link href={`/add/${product._id}`}>{/* Product Image */}
            <div className="relative w-full h-72 bg-[#F2F0FF] mb-4 flex justify-center items-center">
              <Image
                src={product.image}
                alt={product.name}
                width={314}
                height={218}
                className="w-auto h-auto hover:rounded-xl transition-all ease duration-300 custom-img"
              />
            </div> </Link>
            

            {/* Product Details */}
            <h3 className="text-lg font-semibold">{product.name}</h3>
             {/* Color Options */}

            {/* Prices */}
            <div className="flex items-center gap-2 mt-2">
              <span className="text-gray-400 ">
                {product.subtext}
              </span>

              <span className="text-green-500 font-semibold">
              Price: ${product.price}
              </span>
            </div>

           
          </div>
        ))}
      </div>
      <div>
        
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
    </div>
  );
}

export default Features;
