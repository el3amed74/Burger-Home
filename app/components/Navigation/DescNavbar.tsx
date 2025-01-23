"use client";

import Link from "next/link";
import { BiCycling, BiShoppingBag } from "react-icons/bi";
import { FaBurger } from "react-icons/fa6";
import { HiBars3BottomRight } from "react-icons/hi2";
interface props {
    open: () => void;
}
const DescNavbar = ({open}:props) => {
    return (
        <div className="h-[12vh] bg-white">
            <div className="sm:w-[90%] w-[95%] mx-auto flex h-[100%] items-center justify-between ">
                {/* logo */}
                <div className="flex items-center space-x-2">
                    <FaBurger className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-500" />
                    <h1 className="text-[20px] sm:text-[30px] font-semibold ">BurgerHome</h1>
                </div>
                {/* nav links */}
                <ul className="hidden lg:flex items-center space-x-10">
                    <li className="text-[20px] font-medium hover:text-red-600 ">
                        <Link href="">Home</Link>
                    </li>
                    <li className="text-[20px] font-medium hover:text-red-600 ">
                        <Link href="">Shop</Link>
                    </li>
                    <li className="text-[20px] font-medium hover:text-red-600 ">
                        <Link href="">Memu</Link>
                    </li>
                    <li className="text-[20px] font-medium hover:text-red-600 ">
                        <Link href="">Blog</Link>
                    </li>
                    <li className="text-[20px] font-medium hover:text-red-600 ">
                        <Link href="">Contact</Link>
                    </li>
                </ul>
                {/* buttons */}
                <div className="flex items-center space-x-4">
                    <button className="px-6 py-2 sm:px-8 py-3 text-[14px] sm:text-[16px] bg-blue-950 transition-all
                    duration-200 hover:bg-red-600 rounded-md flex items-center space-x-2 text-white">
                        <BiCycling className="w-[1.3rem] h-[1.3rem] sm:w-[1.7rem] sm:h-[1.7rem]" />
                        <span className="font-bold">Order Now</span>
                    </button>
                    <button className="px-4 py-2 sm:px-3 py-3 bg-orange-600 transition-all
                    duration-200 hover:bg-green-700 rounded-md flex items-center space-x-2 text-white">
                        <BiShoppingBag className="w-[1.3rem] h-[1.3rem] sm:w-[1.7rem] sm:h-[1.7rem]" />
                    </button>
                    <HiBars3BottomRight
                        onClick={open}
                        className="lg:hidden w-[2rem] h-[2rem] text-black" />
                </div>
            </div>
        </div>
    )
}
export default DescNavbar;