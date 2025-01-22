import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import dicount from '../Images/discount.png'
import Button from "./Button";


const checktext = [
  {
    text: "Material expose like metals",
    icon: <FaCheck />,
  },
  {
    text: "Clear lines and geomatric figures",
    icon: <FaCheck />,
  },
  {
    text: "Simple neutral colours.",
    icon: <FaCheck />,
  },
  {
    text: "Material expose like metals",
    icon: <FaCheck />,
  },
];

const Discount = () => {
  return (
    <section className="mt-20">
      <h1 className="text-4xl text-center text-1 font-bold text-indigo-950">
        Discount Items
      </h1>
      <div className="mt-10 lato flex justify-center items-center gap-8 text-lg lg:text-xl flex-row ">
        <p className="hover:text-red-500 transition-all hover:underline">
          Wood Chair
        </p>
        <p className="hover:text-red-500 transition-all hover:underline">
          Plastic Chair
        </p>
        <p className="hover:text-red-500 transition-all hover:underline">
          Sofa Collection
        </p>
      </div>
      <div className="flex justify-center items-center mt-10 lg:pl-32 lg:flex-row flex-col text-center lg:text-start">
        <div>
          <h1 className="text-indigo-950 lg:text-4xl text-3xl font-bold text-1">
            20% Discount Of All Products
          </h1>
          <h2 className="text-xl text-pink-400 text-1 mt-4">
            Eams Sofa Compact
          </h2>
          <p className="text-gray-300 lato text-lg mt-4 text-wrap">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 place-self-center lg:place-self-start gap-y-5 mt-4">
            {checktext.map((item, index) => (
              <div
                key={index}
                className="text-slate-300 flex gap-x-2 items-center text-xs lg:text-base"
              >
                <p className="text-gray-400 lg:w-auto text-lg w-6">{item.icon}</p>
               <span className="text-lg "> {item.text}</span>
              </div>
            ))}
          </div>
          <p className="flex justify-center items-center  mx-auto lg:mx-0">
           <Button text="Shop Now"/>
          </p>
        </div>
        <div>
          <Image
            src={dicount}
            alt="sofa-img"
            width={680}
            height={580}
          />
        </div>
      </div>
    </section>
  );
};

export default Discount;