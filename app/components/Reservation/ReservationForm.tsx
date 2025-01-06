import { GrRestaurant } from "react-icons/gr";


const ReservationForm = () => {
    return (
        <div className="bg-green-700 p-6 rounded-lg">
            <GrRestaurant className="w-[5rem] h-[5rem] mt-[2rem] mx-auto text-white" />
            <h1 className="text-center uppercase font-bold text-white text-[30px] md:text-[40px] lg:text-[50px] mt-[5rem]">
                reservation
            </h1>
            <p className="uppercase font-semiboldbold text-white text-[20px] md:text-[25px] text-center">
                book your table</p>
            <div className="flex items-center w-[80%] mx-auto justify-between space-x-4 space-y-3 sm:space-y-0 flex-col sm:flex-row ">
                <select className="px-10 py-2.5 bg-transparent rounded-lg outline-none font-bold
                    text-[17px] text-white border-[2.2px] border-gray-100"
                    name="people" id="people">
                    <option value="1" className="text-black">1 people</option>
                    <option value="2" className="text-black">2 people</option>
                    <option value="3" className="text-black">3 people</option>
                    <option value="4" className="text-black">4 people</option>
                </select>
                <input type="date" className="px-10 py-2.5 bg-transparent rounded-lg outline-none font-bold
                    text-[17px] text-white border-[2.2px] border-gray-100" />
            </div>
            <input type="time" className="px-10 py-2.5 bg-transparent block w-[80%] rounded-lg 
            outline-none font-bold mx-auto mt-[1rem] text-[17px] text-white border-[2.2px] border-gray-100" />

            <div className="mt-[2rem] mx-auto w-[80%] text-center">
                <button className="px-8 py-3 mb-[3rem] rounded-lg text-[16px] w-full bg-blue-950
                    transition-all duration-200 hover:bg-red-600 text-white">
                    Book Now
                </button>
            </div>
        </div>
    )
}
export default ReservationForm;