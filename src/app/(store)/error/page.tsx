import Link from "next/link";
import FilterSection from "../filter/page";
import Image from "next/image";
import not from "@/app/images2/notfound.png";
import Button from "@/app/components/Button";
import icon from "@/app/Images/icons.png";

export default function NotFound() {
  return (
    <>
      <div>
        <FilterSection
          textTitle="404 Not Found"
          textNavigation="Home . Pages ."
          pageName="404 Not Found"
          className="hidden"
        />
      </div>
      <div className="h-vh flex jusify-center flex-col items-center p-10">
        <Image src={not} alt=""></Image>
        <Link href="/">
          <Button text="Return Home" />
        </Link>
      </div>

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
