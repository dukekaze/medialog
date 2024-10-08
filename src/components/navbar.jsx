import React, { useContext } from "react";
import Link from "next/link";
import { SearchContext } from "@/provider/search-provider";

const Navbar = () => {
  const { setSearchValue } = useContext(SearchContext);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div>
      <div className="flex justify-evenly h-[100px] items-center">
        <div className="">
          <img src="./images/header/Logo.svg" alt="" />
        </div>
        <div className="">
          <ul className="flex items-center gap-[40px] text-base font-normal text-slate-600">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            onChange={handleChange}
            className="p-1 border border-solid"
          />
          <img
            className="w-4 h-4"
            src="./images/header/search-outline.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
