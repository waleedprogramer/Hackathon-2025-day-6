"use client";

import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import toast from "react-hot-toast";
import { useCart } from "@/app/cartContext"; // Ensure this path matches your project structure

// Define the Product type inline
interface Product {
  _id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  currency?: string; 
}

interface AddToCartButtonProps {
  product: Product;
  className?: string;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product, className }) => {
  const { addToCart } = useCart(); 
  const handleAddToCart = () => {
    if (!addToCart) {
      console.error("addToCart function is not defined in the cart context.");
      return;
    }

    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });

    toast.success(`${product.name} added to cart!`, {
      icon: <FaShoppingCart />,
    });
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`bg-gray-900 w-full text-white px-6 py-3 rounded-full hover:opacity-90 transition ${className}`}
      disabled={!product?.price} // Disable button if product price is unavailable
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
