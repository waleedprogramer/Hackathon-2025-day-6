'use client';

import Link from 'next/link';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoSearchOutline } from 'react-icons/io5';
import { FaAngleDown } from 'react-icons/fa6';
import { useCart } from "../cartContext";

import { useState } from 'react';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';  
import SearchBar from './searchbar';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn } = useUser();
  const { cartItemCount } = useCart();
  const { user } = useUser(); 

  // Check if the user is an admin
  const isAdmin = user?.publicMetadata?.role === 'admin';

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between lg:justify-around items-center border-b">
        <div className="flex gap-6 items-center text-3xl font-black text-color">
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <GiHamburgerMenu />
          </button>
          <Link href="/"> Hekto</Link>
        </div>

        <ul className="hidden md:flex gap-6">
          <li>
            <Link
              href="/"
              className="scroll text-lg text-gray-700 flex items-center gap-1 transition ease-in hover:text-color duration-300"
            >
              Home <FaAngleDown />
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className="text-lg text-gray-700 transition ease-in hover:text-color duration-300"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/pages"
              className="scroll flex items-center gap-1 text-lg text-gray-700 transition ease-in hover:text-color duration-300"
            >
              Pages
            </Link>
          </li>

          <li>
            <Link
              href="/product"
              className="text-lg flex items-center gap-1 text-gray-700 transition ease-in hover:text-color duration-300"
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              href="/blog"
              className="text-lg text-gray-700 transition ease-in hover:text-color duration-300"
            >
              Blog
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="text-lg text-gray-700 transition ease-in hover:text-color duration-300"
            >
              Contact
            </Link>
          </li>

          {/* Admin Panel Link */}
          {isAdmin && (
            <li>
              <Link
                href="/admin"
                className="text-lg text-red-500 font-bold transition ease-in hover:text-red-700 duration-300"
              >
                Admin
              </Link>
            </li>
          )}
        </ul>

        <div className="hidden lg:flex items-center space-x-4">
          <SearchBar/>
          <div className="flex items-center gap-2">
            {!isSignedIn && (
              <>
                <FaUser size={24} /> <SignInButton />
              </>
            )}
            {isSignedIn && <UserButton />}
          </div>
        </div>

        <div className="flex space-x-4 items-center lg:hidden">
          <button className="lg:hidden transition ease-in hover:text-color">
            <IoSearchOutline size={28} />
          </button>
          {/* Cart */}
          <button className="relative transition ease-in hover:text-color">
            <Link href="/cart">
              <FaShoppingCart
                className="text-xl cursor-pointer lg:hidden block text-black"
                size={24}
              />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 text-xs text-white p-2 bg-color rounded-full w-3 h-3 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </button>

          {!isSignedIn && (
            <>
              <SignInButton />
            </>
          )}
          {isSignedIn && <UserButton />}
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-72 bg-gray-100 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          className="absolute top-4 right-4 text-black font-bold text-xl"
          onClick={() => setIsMenuOpen(false)}
        >
          ✕
        </button>
        <ul className="flex flex-col items-center mt-52 space-y-6">
          <li>
            <Link
              href="/"
              className="scroll text-lg text-gray-700 flex items-center gap-1 transition ease-in hover:text-color duration-300"
            >
              Home <FaAngleDown />
            </Link>
          </li>

          <li>
            <Link
              href="/shop"
              className="text-lg text-gray-700 transition ease-in hover:text-color duration-300"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/pages"
              className="scroll flex items-center gap-1 text-lg text-gray-700 transition ease-in hover:text-color duration-300"
            >
              Pages
            </Link>
          </li>

          <li>
            <Link
              href="/product"
              className="text-lg flex items-center gap-1 text-gray-700 transition ease-in hover:text-color duration-300"
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              href="/blog"
              className="text-lg text-gray-700 transition ease-in hover:text-color duration-300"
            >
              Blog
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="text-lg text-gray-700 transition ease-in hover:text-color duration-300"
            >
              Contact
            </Link>
          </li>

          {/* Admin Panel Link */}
          {isAdmin && (
            <li>
              <Link
                href="/admin"
                className="text-lg text-red-500 font-bold transition ease-in hover:text-red-700 duration-300"
              >
                Admin
              </Link>
            </li>
          )}
        </ul>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
