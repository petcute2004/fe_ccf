import Image from "next/image";
import Logo from "@/public/image/logo.png";
import { SearchDialog } from "./SearchDialog";
import { BellRing, ShoppingCart } from "lucide-react";
import SearchBar from "../child/SearchBar";
import Icon from "../child/Icon";

export default function Head_section1() {
  const cart = 23;
  const notifi = 8;

  return (
    <div className=" bg-emerald-50 pt-5">
      <div className="container m-auto flex items-center gap-6 w-11/12">
        <div className="md:w-2/12 w-7/12">
          <Image className="w-full object-cover" src={Logo} alt="Logo" />
        </div>

        <div className="w-1/12 md:hidden block">
          <SearchDialog />
        </div>

        <div className="w-8/12 hidden md:block">
          <SearchBar />
        </div>

        <div className="md:w-2/12 w-4/12 flex items-center">
          <div className="w-2/4 flex justify-center items-center">
            <div className="absolute">
              <Icon name="ShoppingCart" />
            </div>
            <div className="w-fit relative left-3 -top-2">
              <span className="rounded-3xl block h-4 w-4 text-xs font-medium text-white flex justify-center items-center  bg-red-600">
                {cart}
              </span>
            </div>
          </div>
          <div className="w-1/4 flex justify-center items-center">
            <div className="absolute">
              <Icon name="BellRing" />
            </div>
            <div className="w-fit  relative left-2 -top-2">
              {notifi > 0 && (
                <span className="rounded-3xl block h-2 w-2 bg-red-600"></span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
