import React from "react";

import Image from "next/image";
import b1 from '../image3/blog1.png'
import b2 from '../image3/blog2.png'
import b3 from '../image3/blog3.png'
import { FaPenNib } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: "Surf Auxion",
      date: "Aug 09 2020",
      name:"Aenean vitae in aliquam ultrices lectus. Etiam.",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim.",
      image: b1 ,
    },
    {
      id: 2,
      title: "Surf Auxion",
      date: "Aug 09 2020",
      name:"Aenean vitae in aliquam ultrices lectus. Etiam.",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim.",
      image: b2,
    },
    {
      id: 3,
      title: "Surf Auxion",
      date: "Aug 09 2020",
      name:"Sit nam congue feugiat nisl, mauris amet nisi.",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim.",
      image: b3,
    },
  ];

  return (
    <>
     
      <div className="p-8 ">
        <div className="grid gap-6 grid-cols-1 w-full lg:8/12">
          {posts.map((post) => (
            <div key={post.id} className="rounded-lg  overflow-hidden">
              {/* Image */}
              <Image
                src={post.image}
                alt={post.title}
   
                className="w-full h-96 object-fit"
              />

              {/* Content */}
              <div className="py-6">
                <div className="flex gap-5 items-center">
                <FaPenNib className="text-pink-500"/> 
                  <h2 className="text-xl font-bold mb-2 bg-pink-300 font-light px-1"> {post.title}</h2>
                  <SlCalender className="text-yellow-500"/>
                  <p className="text-xl font-light mb-4 bg-yellow-500 px-1">{post.date}</p>
                </div>
                 <div className="leading-relaxed">
                  <h1 className="text-4xl font-black cursor-pointer hover:text-color transition ease duration-300">
                    {post.name}</h1>
                
                <p className="text-gray-700 my-4">
                  {post.description}
                </p>
                <button className="text-pink-500 hover:underline">
                  Read More
                </button>
                </div> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
