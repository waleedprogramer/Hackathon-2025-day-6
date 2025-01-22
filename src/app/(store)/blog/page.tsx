import React from 'react';
import FilterSection from "../filter/page"; 
import BlogPage from '@/app/components/BlogPage';
import Catogaries from '@/app/components/Catogaries';
import RecentPosts from '@/app/components/Rescent';
import Sale from '@/app/components/Sale';
import BlogLast from '@/app/components/BlogLast';
import Image from 'next/image';
import icon from '@/app/Images/icons.png'



function Blogs() {
  return (
    <>
      <FilterSection
        textTitle="Blog Page"
        textNavigation="Home ."
        pageName="Blog Page"
        className="hidden"
      />
      <div className='flex flex-col lg:flex-row gap-5'>
        <BlogPage />
        <div className='lg:w-4/12 w-full'>
          <Catogaries />
          <RecentPosts />
          <Sale />
          <BlogLast />
        </div>
      </div>

      {/* Added Section */}
      <div className="flex justify-center items-center mt-14">
        <Image
          src={icon}
          alt="brands-img"
          width={904}
          height={93}
          className="cursor-pointer"
        />
      </div>
    </>
  );
}

export default Blogs;
