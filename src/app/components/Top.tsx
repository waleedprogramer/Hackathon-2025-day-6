import Image from "next/image";
import Heading from "./Heading";
import t1 from '../Images/Top catagories.png'
import t2 from '../Images/Top catagories (1).png'
import t3 from '../Images/Top catagories (2).png'
import t4 from '../Images/Top catagories (3).png'
import t5 from '../Images/promotional page nav (1).png'
import t6 from'../Images/banner2.png'
import t7 from'../Images/icons.png'
const topProducts = [
  {
    url: t1
  },
  {
    url: t2,
  },
  {
    url: t3,
  },
  {
    url: t4,
  },
];

const Top = () => {
  return (
    <section className="mt-20">
      <Heading text="Top Catogaries"/>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-10">
        {topProducts.map((item, index) => (
          <Image
            key={index}
            src={item.url}
            alt="top-categories-img"
            width={269}
            height={345}
            className="cursor-pointer"
          />
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <Image
          src={t5}
          alt="pagination"
          width={46}
          height={12}
        />
      </div>
      <Image
        src={t6}
        alt="subscribe-img"
        width={1980}
        height={462}
        className="mt-20 w-full h-auto"
      />
      <div className="flex justify-center items-center mt-14">
        <Image
          src={t7}
          alt="brands-img"
          width={904}
          height={93}
          className="cursor-pointer"
        />
      </div>
    </section>
  );
};

export default Top;