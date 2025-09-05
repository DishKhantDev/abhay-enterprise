"use client";
import React, { useState, useEffect } from "react";
import Rectangle from "@/assests/icons/rectangle.png";
import Image from "next/image";
import LeftWhiteArrow from "@/assests/icons/left-white-arrow.svg";
import RightWhiteArrow from "@/assests/icons/right-white-arrow.svg";
import RedArrowLeft from "@/assests/icons/red-left-arrow.svg";
import RedArrowRight from "@/assests/icons/red-right-arrow.svg";
import Side1 from "@/assests/images/side1.png";
import Side2 from "@/assests/images/side2.png";
import Side3 from "@/assests/images/side3.png";
import Side4 from "@/assests/images/side4.png";
import Side5 from "@/assests/images/side5.png";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);

  const cardData = [
    {
      image: Side1,
      name: "Write Off",
    },
    {
      image: Side5,
      name: "Bad Debt Recovery",
    },
    {
      image: Side3,
      name: "NPA",
    },
    {
      image: Side4,
      name: "Buckets",
    },
  ];

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const nextSlide = () => {
    if (isMobile) {
      setCurrentIndex((prevIndex) =>
        prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevSlide = () => {
    if (isMobile) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
      );
    }
  };

  const TextContent = () => (
    <div className="flex flex-col gap-[16px] w-full">
      <div className="flex items-center gap-[10px]">
        <p className="text-[#ED323A] text-[12px] font-black uppercase lato tracking-[0.1em]">
          OUR SERVICES
        </p>
        <Image src={Rectangle} alt="Rectangle" />
      </div>
      <h1 className="text-[24px] sm:text-[25px] md:text-[28px] lg:text-[30px] xl:text-[32px] font-bold md:leading-[38px] lg:leading-[45px] leading-[32px] lato text-white">
        Debt Collection & Recovery Services Tailored to Your Business
      </h1>
      <h2 className="text-white redhat text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] font-medium leading-[30px] xl:w-[85%] w-full">
        We provide end-to-end debt recovery services, from soft follow-ups to
        legal recovery. Our expert team ensures quick, ethical, and effective
        resolution of outstanding payments.
      </h2>
    </div>
  );

  const ArrowControls = () => (
    <div className="flex gap-[16px] md:mt-[43px] mt-[24px]">
      {/* Left Arrow */}
      <div
        className="p-[13px] rounded-full border-white border cursor-pointer hover:bg-white transition-all duration-300"
        onClick={prevSlide}
        onMouseEnter={() => setHoverLeft(true)}
        onMouseLeave={() => setHoverLeft(false)}
      >
        <Image
          src={hoverLeft ? RedArrowLeft : LeftWhiteArrow}
          alt="Left Arrow"
          className="w-[22px] h-[22px]"
        />
      </div>

      {/* Right Arrow */}
      <div
        className="p-[13px] rounded-full border-white border cursor-pointer hover:bg-white transition-all duration-300"
        onClick={nextSlide}
        onMouseEnter={() => setHoverRight(true)}
        onMouseLeave={() => setHoverRight(false)}
      >
        <Image
          src={hoverRight ? RedArrowRight : RightWhiteArrow}
          alt="Right Arrow"
          className="w-[22px] h-[22px]"
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-[781px] mt-[60px] md:mt-[100px] lg:mt-[150px]  bg-[#363435] px-[7%] md:pl-[7%] gap-[35px] flex flex-col md:flex-row w-[100%]">
      {/* Desktop Layout */}
      <div className="hidden md:flex md:pt-[178px] flex-col gap-[8px] md:w-[35%] lg:w-[35%] xl:w-[35%] 2xl:w-[35%]">
        <TextContent />
        <ArrowControls />
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col pt-[40px] pb-[40px]">
        <TextContent />

        {/* Mobile Image Carousel */}
        <div className="mt-[36px] overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {cardData.map((item, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                <SingleImage image={item.image} name={item.name} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-[30px]">
          <ArrowControls />
        </div>
      </div>

      {/* Desktop Image Carousel */}
      <div className="hidden md:flex my-[132px] md:w-[55%] lg:w-[60%] xl:w-[100%] overflow-hidden relative">
        <div
          className="flex gap-[24px] transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (392 + 28)}px)` }}
        >
          {cardData.map((item, index) => (
            <SingleImage key={index} image={item.image} name={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

function SingleImage({ image, name }) {
  return (
    <div className="w-full md:w-[392px] h-full relative cursor-pointer group">
      <div className="relative">
        <Image
          src={image}
          alt="ImageError"
          className="rounded-[10px] object-cover h-[350px] sm:h-[400px] md:h-[500px] w-full md:w-[392px] transition-transform duration-300 group-hover:scale-100"
        />
        <div className="absolute bottom-[23px] left-[27px] right-[26px] h-[50px] md:h-[55px] lg:h-[60px]  2xl:h-[70px] bg-[#ED323A] rounded-[8px] flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-90">
          <h4 className="lato font-bold text-white text-[15px] sm:text-[17px] md:text-[19px] lg:text-[21px] xl:text-[24px] leading-[30px] xl:leading-[35px] 2xl:leading-[45px] capitalize text-center">
            {name}
          </h4>
        </div>
      </div>
    </div>
  );
}
