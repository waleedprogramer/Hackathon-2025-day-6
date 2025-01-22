import React from "react";
import Image from "next/image";
import s1 from '../images2/saleproduct1.png'
import s2 from '../images2/saleproduct2.png'
import s3 from '../images2/saleproduct3.png'

const Sale = () => {
  const posts = [
    {
      id: 1,
      title: "Elit ornare in enim mauris.",
      date: "Aug 09 2020",
      image: s1,
    },
    {
      id: 2,
      title: "Viverra pulvinar et enim.",
      date: "Aug 09 2020",
      image: s2,
    },
    {
      id: 3,
      title: "Mattis varius donec fdsf",
      date: "Aug 09 2020",
      image: s3,
    },
    
  ];

  return (
    <div className="p-4 ">
      <h2 className="text-lg font-semibold mb-4">Sale Products</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex items-center bg-white  "
          >
            {/* Image */}
            <Image
              src={post.image}
              alt={post.title}
              className="w-20 h-20 object-cover rounded-md mr-4"
            />

            {/* Content */}
            <div>
              <h3 className="text-md ">{post.title}</h3>
              <p className="text-sm text-gray-500">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sale;
