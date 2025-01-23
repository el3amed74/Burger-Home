"use client";
import TeamCard from "./TeamCard";
import Timage1 from "@/public/images/t1.jpg";
import Timage2 from "@/public/images/t2.jpg";
import Timage3 from "@/public/images/t3.jpg";

const TeamDetails = [
    { name: "Jon Deo", img: Timage1, position: "Kitchen porter" },
    { name: "sara jeen", img: Timage2, position: "Executive chef" },
    { name: "Hohn jan", img: Timage3, position: "Head chef" },
]

const Team = () => {
    return (
        <div className="pt-[5rem] pb-[3rem]">
            <h1 className="heading">
                meet our <span className="text-red-600">expert </span>chefs
            </h1>
            <div
                data-aos="zoom-in"
                data-aos-anchor-placement="top-center"
                data-aos-delay="200"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[3rem] mt-[5rem] w-[80%] mx-auto">
                {
                    TeamDetails.map((chef, index) => (
                        <TeamCard
                            name={chef.name}
                            position={chef.position}
                            image={chef.img}
                            key={index}
                        />
                    ))
                }
            </div>
        </div>
    )
}
export default Team;