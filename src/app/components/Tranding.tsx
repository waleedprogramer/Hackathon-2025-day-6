import Image from "next/image";
import c1 from '../Images/c1.png'
import c2 from '../Images/c2.png'
import c3 from '../Images/c3.png'
import c4 from '../Images/c4.png'
import Heading from "./Heading";

const chairData = [
  {
    name: "Cantilever chair",
    price: "$26.00 ",
    prevPrice: "$42.00",
    img: c1,
  },
  {
    name: "Cantilever chair",
    price: "$26.00 ",
    prevPrice: "$42.00",
    img: c2,
  },
  {
    name: "Cantilever chair",
    price: "$26.00 ",
    prevPrice: "$42.00",
    img: c3,
  },
  {
    name: "Cantilever chair",
    price: "$26.00 ",
    prevPrice: "$42.00",
    img: c4,
  },
];



const Trending = () => {
  return (
    <section className="mt-20">
      <Heading text=" Trending Products"/>
      <div className="flex justify-center items-center gap-10 flex-col md:flex-row">
        {chairData.map((item, index) => (
          <div
            key={index}
            className="shadow w-[270px] h-[350px] flex justify-center items-center flex-col mt-10 cursor-pointer 
             scale-95 hover:scale-100 transition-all ease-in duration-300"
          >
            <Image src={item.img} alt={item.name} width={247} height={244} />
            <p className="lato font-bold text-indigo-950 my-4">{item.name}</p>
            <div className="flex justify-center items-center gap-x-2 text-1">
              <p className="text-indigo-950 text-sm">{item.price}</p>
              <p className="text-slate-300 text-[12px] line-through">
                {item.prevPrice}
              </p>
            </div>
          </div>
        ))}
      </div>
    
    </section> 
  );
};

export default Trending;