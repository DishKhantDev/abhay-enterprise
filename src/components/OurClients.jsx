import React from "react";
import Hdfce from "@/assests/images/hdfc-logo.png";
import OneCard from "@/assests/images/one-card.png";
import Tata from "@/assests/icons/tata-capital.svg";
import Rectangle from "@/assests/icons/rectangle.png";
import Image from "next/image";

const OurClients = () => {
  const logos = [Hdfce, OneCard, Tata];
  return (
    <div className=" pt-[60px] md:pt-[100px] lg:pt-[150px] mx-[7%]">
      <div className="flex items-center gap-[10px] justify-center ">
        <Image src={Rectangle} alt="Rectangle" />
        <p className="text-[#ED323A] text-[12px] font-black uppercase lato tracking-[0.1em] ">
          OUR CLIENTS
        </p>
        <Image src={Rectangle} alt="Rectangle" />
      </div>
      <h1 className="text-[24px] sm:text-[25px] md:text-[28px] lg:text-[30px] xl:text-[32px]  md:leading-[38px] lg:leading-[45px] leading-[32px] lato  font-bold  lato text-center mt-[8px]">
        Trusted by Industry Leaders
      </h1>
      <div className="mt-[50px]">
        <div className="flex gap-7 w-full">
          {logos.map((image, index) => (
            <div
              key={index}
              className="border-[#E0E0E0] border bg-[#F3F3F3] flex justify-center items-center w-auto h-[40px] md:h-[80px] lg:h-[100px] xl:h-[203px] p-[6px] md:p-[9px] lg:p-[10px] xl:p-[20px] rounded-[8px]"
            >
              <Image
                src={image}
                alt="LogoError"
                className="h-[60px]  max-h-[180px] w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClients;

