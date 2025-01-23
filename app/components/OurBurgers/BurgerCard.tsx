"use client";
import Image, { StaticImageData } from "next/image";
import { BiShoppingBag } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";

interface props {
    key:Number;
    title: string;
    price: string;
    image: StaticImageData;
}

const BurgerCard = ({ title, image, price}: props) => {
    const GenerateStars = () => {
        return Array.from({ length: 6 }).map((_, index) => (
            <FaStar className="w-[1rem] h--[1rem] text-yellow-600" />
        ));
    };
    return (
        <div className="bg-white p-6 m-3 rounded-lg" >
            <div className="w-[200px] h-[200px] mx-auto">
                <Image src={image} width={200} height={200} alt={title} className="w-[100%] h-[100%] object-cover" />
            </div>
            {/* details */}
            <div >
                <h1 className="mt-[1.3rem] text-black text-[22px] font-semibold"> {title}</h1>
                <div className="flex items-center mt-[.5rem] space-x-3">
                    <div className="flex items-center">
                        {GenerateStars()}
                    </div>
                </div>
                <p className="mt-[.5rem] text-black text-opacity-70">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="flex items-center justify-between">
                    <h1 className="text-[25px] text-red-600 font-bold">{price}</h1>
                    <button className="px-4 py-2 bg-orange-600 transition-all
                    duration-200 hover:bg-green-700 rounded-md flex items-center text-white">
                        <BiShoppingBag className="w-[1.3rem] h-[1.3rem] " />
                    </button>
                </div>
            </div>

        </div>
    )

}
export default BurgerCard;