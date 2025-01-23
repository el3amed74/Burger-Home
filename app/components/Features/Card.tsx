import Image, { StaticImageData } from "next/image";
// import FeatureImg1 from "@/public/images/f1.jpg";
interface props{
    key:number;
    title:string;
    img: StaticImageData
}
const Card = ({img,title,key}:props) => {
    return (
        <div  className="p-6 hover:bg-white rounded-lg transition-all duration-200">
            <Image src={ img} alt="img1" className="rounded-3xl"/>
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
                {title}
            </h1>
            <p className="mt-[.2rem] text-black text-opacity-60 text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, consequuntur.
                Rerum recusandae neque tenetur sapiente vero explicabo mollitia voluptas delectus
                nesciunt quidem, aliquam, velit sunt.
            </p>
        </div>
    )
}
export default Card;