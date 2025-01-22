import React from "react";
import Image from "next/image";
import r1 from '../images2/recentpost1.png'
import r2 from '../images2/recentpost2.png'
import r3 from '../images2/recentpost3.png'
import r4 from '../images2/recentpost4.png'

const RecentPosts = () => {
  const posts = [
    {
      id: 1,
      title: "It is a long established fact",
      date: "Aug 09 2020",
      image: r1,
    },
    {
      id: 2,
      title: "It is a long established fact",
      date: "Aug 09 2020",
      image: r2,
    },
    {
      id: 3,
      title: "It is a long established fact",
      date: "Aug 09 2020",
      image: r3,
    },
    {
      id: 4,
      title: "It is a long established fact",
      date: "Aug 09 2020",
      image: r4,
    },
  ];

  return (
    <div className="p-4 ">
      <h2 className="text-lg font-semibold mb-4">Recent Posts</h2>
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
              <h3 className="text-sm ">{post.title}</h3>
              <p className="text-sm text-gray-500">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
