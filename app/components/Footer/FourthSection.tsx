import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const FourthSection = () => {
    return (
        <div>
            <h1 className="text-[25px] text-white font-semibold mb-[2rem]">
                Opening Hours
            </h1>
            <p className="text-white text-[18px]">
                Monday - Friday <span className="text-yellow-300">8 am - 4 pm</span>
            </p>
            <p className="text-white text-[18px]">
                Saturday <span className="text-yellow-300">8 am - 12 am</span>
            </p>
            <div className="flex items-center space-x-6 mt-[2rem]">
                <FaFacebook className="w-[1.5rem] h-[1.5rem] text-blue-400"/>
                <FaInstagram className="w-[1.5rem] h-[1.5rem] text-red-400"/>
                <FaTwitter className="w-[1.5rem] h-[1.5rem] text-blue-300"/>
            </div>
            
        </div>
    )
}
export default FourthSection;