"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BurgerCard from "./BurgerCard";
import BurgerImg1 from "@/public/images/b1.png";
import BurgerImg2 from "@/public/images/b2.png";
import BurgerImg3 from "@/public/images/b3.png";
import BurgerImg4 from "@/public/images/b4.png";
import BurgerImg5 from "@/public/images/b5.png";
import BurgerImg6 from "@/public/images/b6.png";
import BurgerImg7 from "@/public/images/b7.png";
import BurgerImg8 from "@/public/images/b8.png";

const BurgerDetails = [
    { id: 0, title: "Beef Burger", img: BurgerImg1, price: "10 $" },
    { id: 1, title: "Cheese Burger", img: BurgerImg2, price: "15 $" },
    { id: 2, title: "Spicy Burger", img: BurgerImg3, price: "12 $" },
    { id: 3, title: "Buffalo Burger", img: BurgerImg4, price: "8 $" },
    { id: 4, title: "Chicken Burger", img: BurgerImg5, price: "20 $" },
    { id: 5, title: "Crispy Burger", img: BurgerImg6, price: "25 $" },
    { id: 6, title: "Onion Burger", img: BurgerImg7, price: "9.5 $" },
    { id: 7, title: "Fork Burger", img: BurgerImg8, price: "15 $" },
]
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1324 },
        items: 4,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1324, min: 764 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
const Burgers = () => {
    return (
        <div className="pt-[3rem] pb-[3rem]">
            <h1 className="heading">
                our delicious<span className="text-red-600"> burgers</span>
            </h1>
            <div className="w-[80%] mx-auto">
                <Carousel
                    additionalTransfrom={0}
                    arrows={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                    centerMode={false}
                    infinite
                    showDots={false}
                    responsive={responsive}
                    itemClass="item">
                        {
                            BurgerDetails.map((burger, index) => (
                                <BurgerCard
                                    title={burger.title}
                                    price={burger.price}
                                    image={burger.img}
                                    key={index}
                                />
                            ))
                        }
                </Carousel>
            </div>
        </div>
    )
}
export default Burgers;