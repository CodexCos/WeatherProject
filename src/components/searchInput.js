import React, { useContext } from "react";
import { Context } from "./weatherApp";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
function SearchInput() {
  const { setName, onPress, onClick } = useContext(Context);
  return (
    <div className="pt-5 pb-5 flex gap-3">
      <input
        onKeyDown={onPress}
        onChange={(e) => setName(e.target.value)}
        className="p-2 rounded-full outline-none border-1 sm:w-80 md:w-96 "
        placeholder="Search..."
      />
      <MagnifyingGlassIcon
        onClick={onClick}
        className="text-white w-8 cursor-pointer" 
      />
    </div>
  );
}

export default SearchInput;
