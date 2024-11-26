import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import Icon from "../child/Icon";

export default function MenuMobile({ navList }) {
  return (
    <>
      <Drawer direction="right">
        <DrawerTrigger>
          <div className="p-2">
            <Icon name="Menu" />
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerDescription>
              <nav className="md:w-full w-fit h-fit md:p-[30px] flex items-center md:justify-end">
                <div className="md:w-8/12 md:mx-14">
                  <div className="md:flex items-center justify-between gap-10">
                    <div className="">
                      <div className="list-none md:flex">
                        {navList.map((row, index) => (
                          <div className="h-full w-[144px] my-2 md:text-center flex justify-start">
                            <a
                              key={index}
                              className="font-medium text-lg "
                              href="#"
                            >
                              {row}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                    <hr className="p-1" />
                    <div className=" md:flex text-lg font-medium">
                      <div className="md:flex gap-3 items-center ">
                        <Button
                          className="text-emerald-500 w-full text-lg text-left hover:text-white font-medium hover:bg-emerald-500"
                          variant="ghost"
                        >
                          Đăng nhập
                        </Button>
                        <Button
                          className="text-emerald-500 w-full text-lg text-left hover:text-white font-medium hover:bg-emerald-500"
                          variant="ghost"
                        >
                          Đăng ký
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
