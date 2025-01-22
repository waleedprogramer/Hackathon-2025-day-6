'use client'

import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { CiMail, CiPhone } from "react-icons/ci";
import Link from "next/link";
import { useCart } from "../cartContext";


const Topbar = () => {
  const { cartItemCount } = useCart();
  return (
    <div className={`bg-black1 text-white max-w-[1438px] h-[58px] text-[14px] flex justify-between hidden items-center lg:block bg-color`}>
      <div className="flex justify-around items-center px-2 w-full h-full">
        {/* Left Section: Contact */}
        <div className="flex items-center space-x-4 w-[416px] h-full">
          <div className="flex items-center space-x-1">
            <CiMail className="text-xl" />
            <span className="font-bold">michelle.rivera@example.com</span>
          </div>
          <div className="flex items-center space-x-1">
            <CiPhone className="text-xl" />
            <span className="font-bold">(255) 555-0118</span>
          </div>
        </div>

        {/* Right Section: Language, Currency, Login, Wishlist, Cart */}
        <div className="flex items-center gap-6 w-[233px] h-full">
          {/* Language and Currency */}
          <div className="flex items-center gap-1 cursor-pointer hover:text-color">
            <span className="font-bold">English </span>
            <IoIosArrowDown className="text-lg" />
             <span className="font-bold"> USD</span>
            <IoIosArrowDown className="text-lg" />
          </div>

          {/* Login */}
         
          

          {/* Wishlist */}
          <Link href='/wishlist'> 
          <div className="flex items-center gap-1 cursor-pointer hover:text-color">
            
            <span className="font-bold">Wishlist</span>
            <FaHeart className="text-lg" />
          </div>
          </Link> 

          {/* Cart */}
          <button className="relative transition ease-in hover:text-color">
            <Link href="/cart">
              <FaShoppingCart className="text-xl  cursor-pointer lg:block hidden" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 text-xs text-white p-2 bg-green-500 rounded-full w-3 h-3 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Topbar;
