import Image from "next/image";
import i1 from '../Images/image 32.png'
import i2 from '../Images/sofa promotional header.png'
import i3 from '../Images/promotional page nav.png'
import Button from "./Button";
import Link from "next/link";


const Hero = () => {
  return (
    <section className="bg-[#F2F0FF] relative w-full h-auto flex justify-center items-center  px-4 md:px-8 lg:px-20 py-10">
      <div className="flex justify-between items-center flex-col lg:flex-row w-full lg:pt-10 gap-10 lg:gap-0">
        {/* Left Section */}
        <div className="flex-1">
          {/* Light Image */}
          <Image
            src={i1}
            alt="hero-side-img"
            width={300}
            height={300}
            className="absolute top-0 -left-10 lg:-left-14 w-[180px] md:w-[250px] lg:w-[300px] h-auto"
          />
          {/* Text Content */}
          <div className="relative mt-10 lg:mt-0 z-10 ml-6 sm:ml-16 lg:ml-24 lg:w-full w-[78%] place-self-end lg:place-self-auto">
            <p className="text-pink-500 font-bold lato">
              Best Furniture For Your Castle....
            </p>
            <h1 className="text-black text-[28px] sm:text-[36px] lg:text-[48px] font-bold mt-3 text-1">
              New Furniture Collection Trends in 2020
            </h1>
            <p className="text-gray-400 mt-4 text-sm sm:text-base max-w-md lato">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
           <Link href='/shop'>
            <Button text="Shop Now"/>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-end">
          <Image
            src={i2}
            alt="main-img"
            width={500}
            height={500}
            className="w-[300px] md:w-[400px] lg:w-[500px] h-auto"
          />
        </div>
      </div>
      <Image
        src={i3}
        alt="pagination-img"
        width={46}
        height={14}
        className="absolute md:bottom-10 bottom-2"
      />
    </section>
  );
};

export default Hero;
