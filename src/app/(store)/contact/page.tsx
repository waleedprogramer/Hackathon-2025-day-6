import React from "react";
import FilterSection from "../filter/page";
import Image from "next/image";
import ways from '@/app/Images/ways.png'
import contact from '@/app/Images/contact.png'

function Contact() {
  return (
    <>
      <div>
        <FilterSection
          textTitle="Contact Us"
          textNavigation="Home . Pages"
          pageName="Contact Us"
          className="hidden"
        />
      </div>
      
      {/* Section with information and image */}
      <div className="flex lg:flex-row flex-col gap-10 items-center p-10">
        <div className="space-y-4 max-w-lg">
          <h1 className="text-4xl font-bold">Information About Us</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eum nobis consequuntur et exercitationem. Maxime quos itaque quae neque nihil.
          </p>
          <div className="flex space-x-2 mt-10">
            <button className="p-4 bg-indigo-700 rounded-full"></button>
            <button className="p-4 bg-color rounded-full"></button>
            <button className="p-4 bg-blue-500 rounded-full"></button>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-10">Contact Ways</h1>
          <Image src={ways} alt="Ways to Contact" />
        </div>
      </div>

      {/* Form Section */}
      <div className="p-10">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-5xl font-bold pb-6">Get In Touch</h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eum nobis consequuntur et exercitationem. Maxime quos itaque quae neque nihil.
            </p>

            <section className="text-gray-600 body-font relative">
              <div className="container px-5 py-24 mx-auto">
               
                <div className="w-full mx-auto">
                  <div className="flex flex-wrap -m-2">
                    {/* Name Input */}
                    <div className="p-2 w-full lg:w-1/2">
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Name"
                          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className="p-2 w-full lg:w-1/2">
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Email"
                          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>

                    {/* Subject Input */}
                    <div className="p-2 w-full">
                      <div className="relative">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          placeholder="Subject"
                          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>

                    {/* Message Input */}
                    <div className="p-2 w-full">
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          placeholder="Message"
                          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="p-2 w-full">
                      <button className="flex text-white bg-color border-0 py-2 px-8 focus:outline-none hover:opacity-90 rounded text-lg">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2">
            <Image src={contact} alt="Contact Image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
