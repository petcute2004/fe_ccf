"use client";

import Icon from "../child/Icon";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

export function SearchDialog() {
  const search = [
    "Cà phê sữa đá",
    "Cà phê đen",
    "Espresso",
    "Cappuccino",
    "Latte",
    "Americano",
    "Mocha",
    "Macchiato",
    "Cà phê trứng",
    "Cold Brew",
  ];
  const [searchContent, setSearchContent] = useState("");
  const [itemSearch, setItemSearch] = useState([]);

  useEffect(() => {
    setItemSearch(
      search.filter((item) =>
        item.toLowerCase().includes(searchContent.toLowerCase())
      )
    );
  }, [searchContent]);
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" className="hover:bg-inherit">
            <Icon name="Search" size="20" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Tìm kiếm</DialogTitle>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Input
                id="search"
                value={searchContent}
                onChange={(e) => setSearchContent(e.target.value)}
              />
              {searchContent.length > 0 && (
                <ul className="bg-white border border-gray-300 mt-1 rounded-md shadow-lg max-h-56 overflow-auto">
                  {itemSearch.map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => setSearchContent(item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <Button type="submit" size="sm" className="px-3">
              <span className="">Tìm kiếm</span>
            </Button>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild></DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
