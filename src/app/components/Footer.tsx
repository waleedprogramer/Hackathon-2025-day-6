import { FaSearch } 
from "react-icons/fa";

const categories = [
  {
    title: "Categories",
    p1: "Laptops & Computers",
    p2: "Cameras & Photography",
    p3: "Smart Phones & Tablets",
    p4: "Video Games & Consoles",
    p5: "Waterproof Headphones",
  },
  {
    title: "Customer Care",
    p1: "My Account",
    p2: "Discount",
    p3: "Returns",
    p4: "Orders History",
    p5: "Order Tracking",
  },
  {
    title: "Pages",
    p1: "Blog",
    p2: "Browse the Shop",
    p3: "Category",
    p4: "Pre-Built Pages",
    p5: "Visual Composer Elements",
    p6: "WooCommerce Pages",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#F2F0FF] mt-20 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-self-start pt-20 gap-10 lg:gap-0 px-8">
        <div className="lg:w-full lg:ml-10">
          <h1 className="text-4xl text-1 font-bold text-indigo-950">Hekto</h1>
          <div className="flex py-6 items-center space-x-4">
   <div className="relative">
    <input
      type="text"
      placeholder="Search for yourself..."
      className="border border-gray-300 rounded-full bg-gray-100 px-4 py-2 pl-10 w-[300px]  focus:outline-none focus:border-color focus:bg-white transition duration-100 ease"
    />
    <span className="absolute right-0 top-1/2 rounded-r-full  transform -translate-y-1/2 bg-[#FB2E86] p-[12px] ">
      <FaSearch className="text-white" />
    </span>
  </div>
</div>
          <p className="text-gray-400 text-xs md:text-sm mt-6">Contact Info</p>
          <p className="text-gray-400 text-xs md:text-sm mt-3">
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>
        {categories.map((item, index) => (
          <div className="flex flex-col lg:ml-24" key={index}>
            <h1 className="text-1 text-3xl font-bold text-indigo-950">
              {item.title}
            </h1>
            <div className="text-gray-500 space-y-3 mt-8 cursor-pointer w-full">
              <p>{item.p1}</p>
              <p>{item.p2}</p>
              <p>{item.p3}</p>
              <p>{item.p4}</p>
              <p>{item.p5}</p>
              <p>{item.p6}</p>
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;