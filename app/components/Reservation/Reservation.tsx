import { BiPhone } from "react-icons/bi";
import ReservationForm from "./ReservationForm";


const Reservation = () => {
    return (
        <div className="pt-[5rem] pb-[5rem] mt-[2rem] mb-[3rem] bg-center bg-cover relative 
        bg-[url('/images/bg-black.jpg')]">
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-[#000000a6]"></div>
            <div className="w-[80%] relative z-[20] grid grid-cols-1 lg:grid-cols-2 items-center gap-[3rem] mx-auto">
                <div>
                    <h1 className="text-[30px] md:text-[40px] lg:text-[50px] font-bold leading-[3rem] md:leading-[4rem] text-white">
                        DO YOU HAVE ANY DINNER PLAN TODAY? RESERVE YOUR TABLE
                    </h1>
                    <p className="text-[17px] text-white mt-[1rem] text-opacity-50">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam ea, dolore similique quam voluptates?
                    </p>
                    <div className="flex items-center space-x-4 mt-[2rem]">
                        <div className="w-[3rem] h-[3rem] rounded-full flex items-center justify-center flex-col bg-red-500">
                            <BiPhone className="w-[1.7rem] h-[1.7rem] text-white" />
                        </div>
                        <div>
                            <h1 className="text-[25px] text-white font-semibold">
                                Quick order 24/7
                            </h1>
                            <h1 className="text-[30px] text-yellow-300 font-bold">
                                +012# 456 789
                            </h1>
                        </div>
                    </div>
                </div>
                <ReservationForm/>
            
            </div>
        </div>
    )
}
export default Reservation;