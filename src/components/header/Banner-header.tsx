import Banner from "@/public/image/banner.png";
import Image from "next/image";

export default function Banner_header() {
  return (
    <div className="w-full h-fit md:block hidden ">
      <Image className="w-full h-24 object-cover " src={Banner} alt="" />
    </div>
  );
}
