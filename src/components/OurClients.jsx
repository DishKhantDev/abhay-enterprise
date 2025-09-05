"use client";
import React from "react";
import Hdfce from "@/assests/images/hdfc-logo.png";
import OneCard from "@/assests/images/one-card.png";
import Tata from "@/assests/icons/tata-capital.svg";
import Chola from "@/assests/images/chola-logo.png";
import Fullerton from "@/assests/images/fullerton-logo.png";
import Rectangle from "@/assests/icons/rectangle.png";
import Image from "next/image";

const OurClients = () => {
  // Logos with experience text
  const clients = [
    { logo: Hdfce, exp: "10 Years of Experience" },
    { logo: OneCard, exp: "3 Years of Experience" },
    { logo: Tata, exp: "2 Years of Experience" },
    { logo: Chola, exp: "1 Years of Experience" },
    { logo: Fullerton, exp: "14 Years of Experience" },
  ];

  // Repeat logos for infinite scroll effect
  const logos = [...clients, ...clients, ...clients,...clients,...clients];

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

      <h1 className="text-[24px] sm:text-[25px] md:text-[28px] lg:text-[30px] xl:text-[32px] leading-[32px] md:leading-[38px] lg:leading-[45px] font-bold lato text-center">
        Trusted by Industry Leaders
      </h1>

      {/* Slider container */}
      <div className="mt-[50px] overflow-hidden relative w-full">
        <div className="flex w-max animate-scroll gap-6">
          {logos.map((item, index) => (
            <div
              key={index}
              className="w-[calc(100vw/3rem)] md:w-[calc(120vw/3-4rem)] lg:w-[calc(100vw/3-5rem)]
              h-auto flex flex-col justify-center items-center 
              bg-[#F3F3F3] border border-[#E0E0E0] rounded-[8px] px-[40px] lg:px-[0px] py-3 lg:p-3"
            >
              <Image
                src={item.logo}
                alt={`ClientLogo-${index}`}
                className="object-contain h-[60px] w-[140px] md:h-[70px] xl:h-[120px] xl:w-[250px] md:w-[150px]"
              />
              <h6 className="red hat text-[16px] font-[400] lg:font-[500] leading-[150%] text-[#363435] mt-2">
                {item.exp}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClients;
