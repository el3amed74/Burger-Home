"use client";

import { ImCross } from "react-icons/im";
import Link from "next/link";
interface props {
    close: ()=> void;
    shownav: boolean;
}
const MobileNavbar = ({shownav,close}:props) => {
    const navStyle = shownav ? "tranlate-x-0": "tranlate-x-[-100%]" ;
    return (
        <div className={`fixed ${navStyle} right-0 left-0 top-0 bottom-0 transition-all duration-500 
        bg-[#000000e0] z-[1002]`}>
            <ImCross onClick={close} className="absolute top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-white" />
            {/* div links */}
            <div className={` ${navStyle} bg-emerald-700 flex flex-col items-center justify-center 
            transition-all duration-500 delay-200 w-[70%] h-[100%]`}>
                <ul className="space-y-10">
                    <li className="text-[35px] font-medium hover:text-yellow-400 text-white ">
                        <Link href="">Home</Link>
                    </li>
                    <li className="text-[35px] font-medium hover:text-yellow-400 text-white ">
                        <Link href="">Shop</Link>
                    </li>
                    <li className="text-[35px] font-medium hover:text-yellow-400 text-white ">
                        <Link href="">Memu</Link>
                    </li>
                    <li className="text-[35px] font-medium hover:text-yellow-400 text-white ">
                        <Link href="">Blog</Link>
                    </li>
                    <li className="text-[35px] font-medium hover:text-yellow-400 text-white ">
                        <Link href="">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default MobileNavbar;