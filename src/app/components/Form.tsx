import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-[#F2F0FF] p-8 w-full lg:w-8/12 m-4">
      <h2 className="text-2xl font-bold ">Contact Information</h2>

      {/* Login Prompt */}
      <div className="text-sm mb-4 text-gray-500">
        <span>Already have an account? </span>
        <a href="/login" className="text-gray-500 hover:underline">
          Log in
        </a>
      </div>

      {/* Email or Mobile */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Email or mobile phone number"
          className="w-full bg-[#F2F0FF] p-2 border-b outline-none"
        />
      </div>

      {/* Newsletter Checkbox */}
      <div className="mb-4 flex items-center">
        <span className="w-3 h-3 bg-green-400 border-gray-300 rounded focus:ring-blue-500"></span>
        <label htmlFor="newsletter" className="ml-2 text-sm text-gray-700">
          Keep me up to date on news and exclusive offers
        </label>
      </div>

      <h3 className="text-xl font-bold my-10">Shipping Address</h3>

      {/* First Name */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="First name (optional)"
          className="w-full bg-[#F2F0FF] p-2 border-b outline-none"
        />
      </div>

      {/* Last Name */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Last name"
          className="w-full bg-[#F2F0FF] p-2 border-b outline-none"
        />
      </div>

      {/* Address */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Address"
          className="w-full bg-[#F2F0FF] p-2 border-b outline-none"
        />
      </div>

      {/* Apartment */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Apartment, suite, etc. (optional)"
          className="w-full bg-[#F2F0FF] p-2 border-b outline-none"
        />
      </div>

      {/* City */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="City"
          className="w-full bg-[#F2F0FF] p-2 border-b outline-none"
        />
      </div>

      {/* Country */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Bangladesh"
          className="w-full bg-[#F2F0FF] p-2 border-b outline-none"
        />
      </div>

      {/* Postal Code */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Postal Code"
          className="w-full bg-[#F2F0FF] p-2 border-b outline-none"
        />
      </div>

      {/* Submit Button */}
      <button className="w-1/3 bg-color text-white mt-24 mb-4 py-2 hover:opacity-90 transition">
        Submit
      </button>
    </div>
  );
};

export default ContactForm;
