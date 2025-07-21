import React from "react";
import Hdfce from "@/assests/images/hdfc-logo.png";
import OneCard from "@/assests/images/one-card.png";
import Tata from "@/assests/icons/tata-capital.svg";
import Rectangle from "@/assests/icons/rectangle.png";
import Image from "next/image";

const OurClients = () => {
  // Repeating logos to create an infinite scroll effect
  const logos = [Hdfce, OneCard, Tata, Hdfce, OneCard, Tata];

  return (
    <div className="pt-[60px] md:pt-[100px] lg:pt-[150px] ">
      {/* Heading */}
      <div className="flex items-center gap-[10px] justify-center">
        <Image src={Rectangle} alt="Rectangle" />
        <p className="text-[#ED323A] text-[12px] font-black uppercase lato tracking-[0.1em]">
          OUR CLIENTS
        </p>
        <Image src={Rectangle} alt="Rectangle" />
      </div>

      <h1 className="text-[24px] sm:text-[25px] md:text-[28px] lg:text-[30px] xl:text-[32px] leading-[32px] md:leading-[38px] lg:leading-[45px] font-bold lato text-center mt-[8px]">
        Trusted by Industry Leaders
      </h1>

      {/* Slider container */}
      <div className="mt-[50px] overflow-hidden relative w-full">
        <div className="flex w-max animate-scroll  gap-6">
          {logos.map((image, index) => (
            <div
              key={index}
              className="w-[calc(100vw/3rem)] md:w-[calc(100vw/3-4rem)] lg:w-[calc(100vw/3-5rem)]
              h-[80px] md:h-[100px] xl:h-[206px] flex justify-center items-center 
              bg-[#F3F3F3] border border-[#E0E0E0] rounded-[8px] p-4"
            >
              <Image
                src={image}
                alt={`ClientLogo-${index}`}
                className="object-contain h-[90px] xl:h-[140px] xl:w-[280px] w-[180px] "
                
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClients;
