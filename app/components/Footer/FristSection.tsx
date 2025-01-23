import { FaBurger } from "react-icons/fa6";

const FristSection = () => {
    return (
        <div>
            {/* logo */}
            <div className="flex items-center text-white space-x-2">
                <FaBurger className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-500" />
                <h1 className="text-[20px] sm:text-[30px] font-semibold ">BurgerHome</h1>
            </div>
            <p className="text-white text-opacity-60 mt-[.4rem]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, laborum.
            </p>
            <p className="text-white mt-[1rem]">
                support@exmple.com
            </p>
            <p className="text-red-300 text-[19px] font-bold">
                +012# 456 789
            </p>
        </div>
    )
}
export default FristSection;