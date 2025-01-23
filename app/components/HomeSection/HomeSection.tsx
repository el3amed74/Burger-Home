"use client";
import BurgerImage1 from "@/public/images/b1.png";
import Image from "next/image";
import { BiCycling } from "react-icons/bi";
const HomeSection = () => {
    return (
        <div className="w-[100%] h-[88vh] bg-blue-950 flex flex-col items-center 
            justify-center md:clip-path">
            <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center
            items-center gap-[2rem] mx-auto">
                <div data-aos="zoom-in"
                    data-aos-anchor-placement="top-center">
                    <Image src={BurgerImage1} alt="burgerimage" className="hidden md:block" />
                </div>
                {/* discription */}
                <div>
                    <h1 className="text-[40px] font-semibold text-yellow-400">
                        Home Burger
                    </h1>
                    <h1 className="text-[90px] text-white font-bold uppercase leading-[5rem]">
                        best<br />burgers
                    </h1>
                    <p className="mt-[1rem] text-[18px] text-white text-opacity-70">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Culpa nobis, debitis recusandae in aliquid, quos fugiat minima laudantium
                        mollitia facere molestiae cupiditate corrupti nihil? Officiis!
                    </p>
                    <button className="mt-[2rem] px-8 py-3 text-[16px] bg-green-700 transition-all
                        duration-200 hover:bg-red-600 rounded-md flex items-center space-x-2 text-white">
                        <BiCycling className="w-[1.7rem] h-[1.7rem]" />
                        <span className="font-bold">Order Now</span>
                    </button>

                </div>
            </div>


        </div>

    );
}
export default HomeSection;