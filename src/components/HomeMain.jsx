import React from "react";
import Image from "next/image";
import HomeMainImage from "@/assests/images/banner 1 1.svg";
import ButtonMain from "./ui/ButtonMain";
import Navbar from "./ui/Navbar";
import Link from "next/link";

export const HomeMain = () => {
  return (
    <div className="relative w-full h-[100vh]">
      {/* Background Image */}
      <Image
        src={HomeMainImage}
        alt="Hero Image"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/30 to-transparent" />
      <div className="z-30 absolute w-full">
        <Navbar />
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center px-[7%] mt-[170px] text-[#FFFFFF] 2xl:w-[1200px]">
        <h1 className="text-[45px] md:text-[50px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px] lato font-bold letter leading-[60px] md:leading-[75px] 2xl:leading-[90px] 2xl:w-[750px]">
          Results That Speak,<br/> Recovery That Matters
        </h1>
        <h2 className="mt-[18px] text-[16px] sm:text-[17px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-medium redhat leading-[23px] md:leading-[30px] 2xl:leading-[40px] 2xl:w-[634px]">
          we’re here to make every recovery count—because when it comes to  your
          bottom line, results matter.
        </h2>
        <div className="mt-[18px]">
         <Link href="#contact" className="hidden md:block group">
            <ButtonMain
              text="Get In Touch"
              className="text-white "
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
