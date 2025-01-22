'use client'

import { client } from "../../../../sanity/lib/client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaStar, FaHeart, FaShoppingCart, FaEye } from 'react-icons/fa';
import Image from "next/image";
import { useCart } from "../../../cartContext";
import CartSkeleton from "@/app/components/CartSkeleton";
import Link from "next/link";




interface Product {
  _id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  currency: string;
}

async function getProductById(productId: string) {
  const res = await client.fetch(
    `*[_type == "product" && _id == "${productId}"]{
      _id,
      name,
      price,
      "image": image.asset->url,
      description,
      currency
    }`
  );
  return res[0];  
}

const ProductDetails = () => {
  const { productId }: any = useParams(); 
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState(false); 
  const { addToCart } = useCart(); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (productId) {
          const data = await getProductById(productId);
          setProduct(data);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setError(true);
      }
    };

    fetchProduct();
  }, [productId]);

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[80vh] text-2xl font-semibold text-red-500">
        Something went wrong. Please try again later.
      </div>
    );
  }


  if (!product) {
    return (
      <CartSkeleton/>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
    alert(`${product.name} added to cart`);
  };

  return (
    <>
    
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {/* Image Section */}
            <div className="lg:w-1/2 w-full flex flex-col items-center relative">
              <Image
                alt="ecommerce"
                className="rounded-lg object-fit border p-5 cursor-pointer shadow-lg"
                src={product.image}
                width={500}
                height={500}
              />
              {/* Small Top-Left Image */}
              <div className="absolute top-4 left-4 md:block hidden">
                <Image
                  alt="small-thumbnail"
                  src={product.image}
                  width={80}
                  height={80}
                  className="rounded-lg border shadow-md"
                />
              </div>
              
              <div className="md:hidden mt-4">
                <Image
                  alt="small-thumbnail"
                  src={product.image}
                  width={100}
                  height={100}
                  className="rounded-lg border shadow-md"
                />
              </div>
            </div>

            {/* Details Section */}
            <div className="lg:w-1/2 w-full text-center lg:text-left lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
              <h1 className="text-gray-900 text-4xl title-font font-bold my-4">{product.name}</h1>
              
              <div className="flex mb-4 items-center justify-center lg:justify-start">
                <span className="flex items-center">
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <FaStar className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
              </div>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.description}</h1>
              <div className="py-4">
                <span className="font-bold text-2xl">${product.price}</span>
                <div className="font-bold mt-5 text-xl">
                  Availability: <span className="text-indigo-900">In Stock</span>
                </div>
              </div>
              
              <div className="flex justify-center items-center mt-6">
                <button 
                  onClick={handleAddToCart}
                  className="bg-gray-900 w-full text-white px-6 py-3 rounded-full hover:opacity-90 transition">
                  Add to Cart
                </button>
               
              </div>
              <Link href="/shop">
              <div className="flex justify-center items-center mt-6">
                <button 
                  className="bg-gray-900 w-full text-white px-6 py-3 rounded-full hover:opacity-90 transition">
                 Continue Shopping
                </button>
               
              </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
