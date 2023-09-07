import { ArrowRightIcon } from "@heroicons/react/24/solid";
import HeroImage from "../../assests/images/heroImage.svg";
// import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className=" pt-16 bg-gradient-to-r from-pink to-purple2 bigLg:pt-28">
      <div className=" flex flex-col items-center gap-y-10 bigLg:flex-row bigLg:justify-between">
        <div className=" px-8 flex flex-col items-center bigLg:px-16 bigLg:items-start bigLg:basis-1/2">
          <h1 className=" font-['Poppins'] text-5xl font-bold leading-10 text-center bigLg:text-start bigLg:text-7xl bigLg:leading-[92px]">
            Find your desired services
          </h1>
          <p className=" font-['Poppins'] font-medium my-7 leading-5 text-center bigLg:text-start bigLg:text-[26px] bigLg:leading-10">
            <span className=" tracking-[-1.8px]">MyPromoSphere</span> is here to
            revolutionize your service discovery experience.
          </p>
          <button className=" bg-purple py-3 px-4 rounded-md text-white flex items-center gap-x-5">
            Get Started
            <ArrowRightIcon width={20} />
          </button>
        </div>
        <div className=" bigLg:basis-1/2">
          {/* this is where the image will be when it's ready */}
          <img src={HeroImage} alt="" className="" />
        </div>
      </div>
    </section>
  );
}
