import { Link } from "react-router-dom";
import img1 from "../../assests/images/img1.png";
import img2 from "../../assests/images/img2.png";
import img3 from "../../assests/images/img3.png";
import { FaArrowRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci"

const NewHero = () => {
  return (
    <section className="newhero min-h-screen bg-center bg-cover bg-no-repeat px-4 lg:px-10 py-10 lg:py-10">
      <div className="flex items-center lg:flex-row flex-col justify-between gap-4">
        <div className="hero-text relative z-50 flex flex-col gap-2">
          <h1 className="lg:text-6xl text-3xl font-semibold text-white ">
            Find your <br />
            Desired Services
          </h1>
          <p className="max-w-[35rem] text-base text-white md:text-xl">
            MyPromoSphere is here to revolutionize your service discovery
            experience.
          </p>
          <div className=" relative mb-4 w-11/12">
            <input type="text" name="" id="" className="w-full h-12 lg:h-16 pl-10 bg-[#D9D9D9] rounded-lg text-black outline-none" placeholder="Search for any service"/>
            <i className="absolute top-1/2 left-2 -translate-y-1/2 text-3xl text-black"><CiSearch /></i>
          </div>

          <Link to="/">
            <button className="bg-[#3D217A] rounded-md md:rounded-[10px] p-3 lg:p-5 text-white flex items-center  text-[1.2rem] gap-2 justify-center">
              Get Started <FaArrowRight className="" />
            </button>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <img src={img1} alt="" className="w-60 aspect-square object-cover object-center" />
          <div className="flex flex-col gap-4">
            <img src={img2} alt="" className="w-60 aspect-square object-cover object-center" />
            <img src={img3} alt="" className="w-60 aspect-square object-cover object-center" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
