import rImag from "@/public/hero/big-image.png";
import hcrcl from "@/public/hero/half-circle.png";
import rcon from "@/public/hero/headline-image.png";
import mobiled from "@/public/hero/mobile-down.png";
import rconsm from "@/public/hero/mobile-headling.png";
import mbup from "@/public/hero/mobile-up.png";
import lImag from "@/public/hero/small-image.png";
import star from "@/public/hero/star-image.png";
import arr from "@/public/hero/up-arrow.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex md:flex-row flex-col md:gap-5 gap-0 md:mt-40 mt-32 md:p-10 xl:px-64 p-4">
      <div className="left-hero flex-[2] relative">
        <Image
          src={rcon}
          className="md:block hidden absolute xl:scale-120 md:scale-150 top-0 right-0 md:-top-24 md:-right-72 bottom-32 -z-10"
          alt="react conference"
        />
        <Image
          src={rconsm}
          className=" absolute -top-32 -left-8 -z-10 md:hidden block"
          alt="react conference"
        />
        <div className="innerdiv flex gap-8 sm:mt-28 mt-[80px] xl:mt-72">
          <Image
            src={lImag}
            className="xl:w-4/6 w-56 md:block hidden"
            alt="react conference"
          />

          <div className="">
            <p className="mb-4 pr-2 md:block hidden">
              Lorem ipsum dolor sit amet, held consectetur adipisicing elit.
              Hello this is testing Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Amet ducimus exercitationem quia. Voluptates
              porro voluptatum soluta. Eaque incidunt quos ea delectus
              necessitatibus animi odio cumque ratione ipsum. Illo, cumque
              necessitatibus.
            </p>
            <p className="mb-4 pr-2 md:hidden block h-36">
              Lorem ipsum dolor sit amet, held consectetur adipisicing elit.
              Hello this is testing Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Amet ducimus exercitationem quia.
            </p>
            <button
              type="button"
              className="flex gap-2 items-center px-10 py-2 font-semibold rounded-full bg-yellow text-black"
            >
              Buy Tickets <Image src={arr} className="w-5" alt="arrow" />
            </button>
          </div>
        </div>
      </div>
      <div className="right-hero flex-1 relative md:mt-0 mt-5">
        <Image src={rImag} alt="rImage" className="hidden md:block" />
        <Image
          src={star}
          alt="star "
          className="absolute -bottom-28 -left-36 hidden md:block"
        />
        <Image src={mbup} className="md:hidden block" alt="mbup" />
      </div>
      <div className="relative md:hidden block">
        <Image
          src={mobiled}
          className="w-2/3 md:hidden block mt-4"
          alt="react conference"
        />

        <Image
          src={hcrcl}
          className=" absolute bottom-28 -right-4 md:hidden block mt-12"
          alt="react conference"
        />
      </div>
    </section>
  );
};

export default Hero;
