import FeatureImg1 from "@/public/images/f1.jpg";
import FeatureImg2 from "@/public/images/f2.jpg";
import FeatureImg3 from "@/public/images/f3.jpg";
import Card from "./Card";
const FeatureDetails = [
    {img: FeatureImg1 , title:"Our Burger"}, 
    {img: FeatureImg2, title:"Your Opinion is Important"}, 
    {img:FeatureImg3, title:"Chicken Burgers"}
];
const Feature = () => {
    return (
        // container
        <div className="pt-[5rem] pb-[3rem]">
            <h1 className="heading">
                burgers made with <br /> love and
                <span className="text-red-600"> care</span>
            </h1>
            {/* cards container */}
            <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
                {FeatureDetails.map((feature,index)=>(
                <Card 
                img={feature.img} 
                title={feature.title}
                key={index} />
                ))}
            </div>
        </div>
    )
}

export default Feature;