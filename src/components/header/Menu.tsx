import Logo from "@/public/image/logo.png";
import Image from "next/image";
import { Button } from "../ui/button";
import MenuMobile from "@/components/header/MenuMobile";

export default function Menu() {
  const nav = ["Về chúng tôi", "Tin tức", "Voucher", "Sản phẩm nổi bật"];

  return (
    <>
      <nav className="hidden md:flex md:w-full w-fit h-fit p-[30px] items-center md:justify-end">
        <div className="md:w-8/12 md:mx-14">
          <div className="md:flex items-center justify-between gap-10">
            <div className="">
              <div className="list-none md:flex">
                {nav.map((row, index) => (
                  <div className="h-full w-[144px] md:text-center">
                    <a
                      key={index}
                      className="font-medium text-lg text-li"
                      href="#"
                    >
                      {row}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className=" md:flex text-lg font-medium">
              <div className="md:flex gap-3 items-center ">
                <Button
                  className="text-emerald-500 text-lg hover:text-white font-medium hover:bg-emerald-500"
                  variant="ghost"
                >
                  Đăng nhập
                </Button>
                <Button
                  className="text-emerald-500 text-lg hover:text-white font-medium hover:bg-emerald-500"
                  variant="ghost"
                >
                  Đăng ký
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="block md:hidden">
        <MenuMobile navList={nav} />
      </div>
    </>
  );
}
