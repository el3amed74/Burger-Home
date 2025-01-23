"use client";
import Image, { StaticImageData } from "next/image";

interface props {
    name: string;
    image: StaticImageData;
    position: string
    key:Number
}
const TeamCard = ({ name, image, position }: props) => {
    return (
        <div className="">
            <Image src={image} alt={name} width={400} height={400} className="rounded-2xl mx-auto " />
            <h1 className="text-[40px] text-gray-800 mt-[1.5rem] text-center font-bold">{name}</h1>
            <p className="mt-[.4rem] mb-[.4rem] px-4 py-1 bg-green-600 text-white mx-auto w-fit font-medium">{position}</p>
            <p className="text-gray-500 mt-[1rem] md:w-[70%] text-center mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt facere aspernatur 
                commodi ex quisquam vitae labore itaque ea, 
            </p>
        </div>
    )
}
export default TeamCard;