import Image from "next/image";
import img1 from "../Images/delivey.png";
import img2 from "../Images/hand.png";
import img3 from "../Images/madel.png";
import img4 from "../Images/time.png";
import img5 from "../Images/banner.png";
import Heading from "./Heading";

const offer = [
  {
    name: "24/7 Support",
    img: img1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    name: "Fast Delivery",
    img: img2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    name: "Quality Products",
    img: img3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    name: "Timely Service",
    img: img4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
];

const Offer = () => {
  return (
    <section className="mt-20">
      <Heading text="What Shopex Offers! " />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto justify-items-center my-10">
        {offer.map((item, index) => (
          <div
            className="w-[270px] h-[320px] border rounded-lg flex justify-center items-center flex-col p-6 cursor-pointer hover:bg-gray-100 transition-all"
            key={index}
          >
            <Image src={item.img} alt={item.name} width={65} height={65} />
            <p className="text-1 font-semibold text-[22px] text-indigo-950 my-5">
              {item.name}
            </p>
            <p className="text-gray-400 font-bold text-center lato">
              {item.text}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-20 bg-[#F2F0FF] w-full h-auto flex justify-center items-center">
        <Image
          src={img5}
          alt="the-img"
          width={1050}
          height={550}
          className="w-auto h-auto"
        />
      </div>
    </section>
  );
};

export default Offer;
