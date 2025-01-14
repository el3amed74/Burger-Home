import Delivey from "./Delivery/Delivery";
import Feature from "./Features/Feature";
import HomeSection from "./HomeSection/HomeSection";
import Burgers from './OurBurgers/Burgers';
import Reservation from "./Reservation/Reservation";
import Team from "./Team/Team";

const Home = () => {
    return (
    <div className="overflow-hidden">
        <HomeSection/>
        <Feature/>
        <Burgers/>
        <Delivey/>
        <Team />
        <Reservation/>
    </div>)
}
export default Home ;