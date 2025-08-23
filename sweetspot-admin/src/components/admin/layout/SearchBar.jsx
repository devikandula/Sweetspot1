import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="border rounded-2xl px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-pink-300"
      />
      <Search className="absolute left-2 top-2.5 text-gray-500" size={18} />
    </div>
  );
};

export default SearchBar;
