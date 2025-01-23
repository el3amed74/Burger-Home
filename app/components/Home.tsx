"use client";
import { useEffect } from "react";
import Delivey from "./Delivery/Delivery";
import Feature from "./Features/Feature";
import HomeSection from "./HomeSection/HomeSection";
import Burgers from './OurBurgers/Burgers';
import Reservation from "./Reservation/Reservation";
import Team from "./Team/Team";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Home = () => {
    useEffect(() => {
        const initAos = async () => {
            await import("aos");
            AOS.init({
                duration:1000,
                easing:"ease",
                once:true,
                anchorPlacement:"top-center"
            });
        };
        initAos();
    
    }, [])

    return (
        <div className="overflow-hidden">
            <HomeSection />
            <Feature />
            <Burgers />
            <Delivey />
            <Team />
            <Reservation />
        </div>)
}
export default Home;