import { Search } from "lucide-react";
import Icon from "./Icon";

export default function SearchBar() {
  return (
    <div className="px-5 py-1 rounded-3xl flex items-center bg-white border border-emerald-400">
      <input
        className="border-none w-full px-3 py-2 focus-visible:outline-none"
        type="text"
        placeholder="Tìm kiếm sản phẩm tại đây"
      />
      <Icon name="Search" />
    </div>
  );
}
