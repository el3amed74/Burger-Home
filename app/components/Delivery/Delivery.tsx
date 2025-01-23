import Image from "next/image";
import DeliveryImg from "@/public/images/delivery.svg";
import { RiEBike2Fill } from "react-icons/ri";
import { IoFastFood } from "react-icons/io5";
import { BsDoorOpen } from "react-icons/bs";

const Delivey = () => {
    return (
        <div className="pt-[8rem] pb-[3rem]">
            <div className="w-[80%] grid items-center grid-cols-1 lg:grid-cols-2 gap-[3rem] mx-auto">
                <div data-aos="fade-right"
                    data-aos-anchor-placement="top-center">
                    <Image src={DeliveryImg} alt="DeliveryImg" />
                </div>
                <div>
                    <h1 className="text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] uppercase 
                    font-bold leading-[3rem] md:leading-[4rem] ">
                        your <span className="text-red-600">favorite burger </span>on the way
                    </h1>
                    <p className="text-black text-opacity-70 mt-[2rem] text-[17px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt facere aspernatur commodi ex quisquam vitae labore itaque ea, error soluta molestias rerum odio hic reprehenderit, voluptates natus velit voluptatem!
                    </p>
                    {/* delivery features */}
                    <div>
                        <div className="flex items-center space-x-3 mt-[2rem]">
                            <RiEBike2Fill className="w-[2rem] h-[2rem] text-red-600" />
                            <h1 className="text-black font-medium text-[18px]">
                                Deivery in 30 minutes
                            </h1>
                        </div>
                        <div className="flex items-center space-x-3 mt-[1rem]">
                            <IoFastFood className="w-[2rem] h-[2rem] text-red-600" />
                            <h1 className="text-black font-medium text-[18px]">
                                Free shipping from 75$
                            </h1>
                        </div>
                        <div className="flex items-center space-x-3 mt-[1rem]">
                            <BsDoorOpen className="w-[2rem] h-[2rem] text-red-600" />
                            <h1 className="text-black font-medium text-[18px]">
                                Deivery on your Doorstep
                            </h1>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default Delivey;