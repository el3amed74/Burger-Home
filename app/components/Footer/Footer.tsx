import FourthSection from "./FourthSection";
import FristSection from "./FristSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";


const Footer = () => {
    return (
        <div className="pt-[5rem] pb-[3rem] bg-gray-900">
            <div className="w-[80%] pb-[2rem] border-b-[2px] border-b-gray-500 border-opacity-50
            mx-auto grid items-center gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {/* 1st part */}
                <FristSection />
                <SecondSection />
                <ThirdSection />
                <FourthSection />
            </div>
                <p className="text-center text-white opacity-50 mt-[1.5rem]">
                    Copyright © 2025 <span className="text-yellow-300">Ahmed Salem </span>. All rights reserved
                </p>
        </div>
    )
}
export default Footer;