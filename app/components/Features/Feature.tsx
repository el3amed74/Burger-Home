import FeatureImg1 from "@/public/images/f1.jpg";
import FeatureImg2 from "@/public/images/f2.jpg";
import FeatureImg3 from "@/public/images/f3.jpg";
import Card from "./Card";
const imgs = [FeatureImg1, FeatureImg2, FeatureImg3];
const Feature = () => {
    return (
        // container
        <div className="pt-[5rem] pb-[3rem]">
            <h1 className="heading">
                burgers made with <br /> love and
                <span className="text-red-600"> care</span>
            </h1>
            {/* cards container */}
            <div className="w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
                {imgs.map((img,index)=>(
                <Card img={img} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default Feature;