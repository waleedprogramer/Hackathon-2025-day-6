'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';
import { useCart } from '@/app/cartContext';
import FilterSection from '../filter/page';
import { useRouter } from 'next/navigation';
import { getProductById } from '@/app/utils/api';
import Link from 'next/link';


const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  

  const handleIncrement = (id: number) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      updateQuantity(id, item.quantity + 1);
    }
  };

  const handleDecrement = (id: number) => {
    const item = cartItems.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      updateQuantity(id, item.quantity - 1);
    }
  };

  const handleDelete = (id: number) => {
    removeFromCart(id);
  };

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const products = await Promise.all(
        cartItems.map(async (item) => {
          const product = await getProductById(item.id.toString());
          return {
            name: product.name,
            amount: product.price * 100,
            currency: product.currency || 'usd',
            quantity: item.quantity,
          };
        })
      );

      const response = await fetch('/api/checkout_sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ products }),
      });

      if (response.ok) {
        const { url } = await response.json();
        router.push(url);
      } else {
        const error = await response.json();
        console.error('Checkout Error:', error.message);
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <FilterSection
        textTitle="Shopping Cart"
        textNavigation="Home . Pages ."
        pageName="Shopping Cart"
        className="hidden"
      />
      <div className="p-6 sm:p-10  text-gray-800 min-h-screen">
        {cartItems.length === 0 ? (
          <div className="flex justify-center items-center h-full">
            <p className="text-2xl text-gray-500 font-medium">
              Your cart is empty.
            </p>
          </div>
        ) : (
          <>
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.id} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h3 className="text-lg w-56 font-semibold text-gray-700">{item.name}</h3>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleDecrement(item.id)}
                      className="p-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-full"
                    >
                      <FaMinus />
                    </button>
                    <span className="text-lg font-medium">{item.quantity}</span>
                    <button
                      onClick={() => handleIncrement(item.id)}
                      className="p-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-full"
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-lg font-medium text-gray-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <AiOutlineDelete size={20} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium">
                  Total: <span className="text-blue-600">${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
                </p>
                <div className="flex space-x-4">
                <Link href='/shop'
                >
                   <button
                    
                    className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Go to shop
                  </button>
                </Link>
                 
                  <button
                    onClick={handleCheckout}
                    disabled={loading}
                    className={`py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 ${
                      loading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {loading ? 'Processing...' : 'Checkout'}
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
