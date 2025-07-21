"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import RedArrowLeft from "@/assests/icons/red-left-arrow.svg";
import RedArrowRight from "@/assests/icons/red-right-arrow.svg";
import PersonImg from "@/assests/images/profile.jpg"; // Example image
import Rectangle from "@/assests/icons/rectangle.png";
import Symbol from "@/assests/images/review-symbol.png";
import LeftWhiteArrow from "@/assests/icons/left-white-arrow.svg";
import RightWhiteArrow from "@/assests/icons/right-white-arrow.svg";

const testimonials = [
  {
    message:
      "Abhay Enterprise has been an absolute game-changer for our business. Their ethical approach to financial recovery restored not just our overdue payments but also our confidence in how debt recovery should be done. Professional, respectful, and results-driven—exactly what we were looking for.",
    name: "Ankit Sharma",
    role: "Recovery Head, Unity Bank",
    image: PersonImg,
  },
  {
    message:
      "Abhay Enterprise has been an absolute game-changer for our business. Their ethical approach to financial recovery restored not just our overdue payments but also our confidence in how debt recovery should be done. Professional, respectful, and results-driven—exactly what we were looking for.",
    name: "Ankit Sharma",
    role: "Recovery Head, Unity Bank",
    image: PersonImg,
  },
  {
    message:
      "Abhay Enterprise has been an absolute game-changer for our business. Their ethical approach to financial recovery restored not just our overdue payments but also our confidence in how debt recovery should be done. Professional, respectful, and results-driven—exactly what we were looking for.",
    name: "Ankit Sharma",
    role: "Recovery Head, Unity Bank",
    image: PersonImg,
  },
  {
    message:
      "Abhay Enterprise has been an absolute game-changer for our business. Their ethical approach to financial recovery restored not just our overdue payments but also our confidence in how debt recovery should be done. Professional, respectful, and results-driven—exactly what we were looking for.",
    name: "Ankit Sharma",
    role: "Recovery Head, Unity Bank",
    image: PersonImg,
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevSlide = () => {
    if (isMobile) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }
  };

  const TextContent = () => (
    <div className="flex flex-col gap-[25px] lg:gap-[58px]  w-full">
      <div className="flex items-center gap-[10px]">
        <p className="text-[#ED323A] text-[12px] font-black uppercase lato tracking-[0.1em]">
          CLIENT TESTIMONIALS
        </p>
        <Image src={Rectangle} alt="Rectangle" className="" />
      </div>
      <div className="flex flex-col gap-[13px] ">
        <Image
          src={Symbol}
          alt="Symbol"
          className="h-[20px] w-[25px] lg:w-25 lg:h-14"
        />
        <h1 className=" text-[24px] sm:text-[25px] md:text-[28px] ml-6 md:ml-0 l1 text-[#000000] lg:text-[30px] xl:text-[32px]  font-bold leading-[32px] md:leading-[38px] lg:leading-[45px] redhat">
          Their Words Reflect Our Consistent{" "}
          <span className="hidden md:block">Value</span>
        </h1>
      </div>
    </div>
  );

  const ArrowControls = () => (
    <div className="flex gap-[12px] md:mt-[28px] mt-[24px]">
      <button
        className="p-3 border-[#ED323A] border rounded-full cursor-pointer hover:bg-opacity-10 transition-all duration-300"
        onClick={prevSlide}
      >
        <Image src={RedArrowLeft} alt="left" className="w-[22px] h-[22px]" />
      </button>
      <button
        className="p-3 border-[#ED323A] border rounded-full cursor-pointer hover:bg-opacity-10 transition-all duration-300"
        onClick={nextSlide}
      >
        <Image src={RedArrowRight} alt="right" className="w-[22px] h-[22px]" />
      </button>
    </div>
  );

  return (
    <div className="my-[100px] md:my-[120px] lg:my-[180px] mx-[7%]">
      {/* Desktop Layout */}
      <div className="hidden md:flex gap-[58px] w-full">
        <div className="w-[232px]">
          <TextContent />
          <ArrowControls />
        </div>

        {/* Desktop Testimonial Cards with Animation */}
        <div className="flex-1 overflow-hidden">
          <div
            className="flex gap-[25px] transition-transform duration-500 ease-in-out"
            style={{
              transform:
                typeof window !== "undefined" &&
                window.innerWidth >= 768 &&
                window.innerWidth < 1024
                  ? `translateX(-${currentIndex * (350 +25)}px)`
                  : `translateX(-${currentIndex * (536 + 25)}px)`,
            }}
          >
            {testimonials.map((item, i) => (
              <TestimonialCard key={i} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col">
        <TextContent />

        {/* Mobile Testimonial Carousel */}
        <div className="mt-[24px] overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((item, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2 gap-2">
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-[30px]">
          <ArrowControls />
        </div>
      </div>
    </div>
  );
};

// Separate TestimonialCard component for reusability
function TestimonialCard({ item }) {
  return (
    <div className="w-full md:min-w-[350px] lg:min-w-[536px] lg:mt-[80px] bg-[#F3F3F3] rounded-[5px] px-[30px] py-[20px] flex flex-col justify-between">
      <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[35px] md:leading-[40px] redhat text-[#363435] font-[500]">
        "{item.message}"
      </p>
      <div className="flex items-center gap-4 mt-8">
        <Image
          src={item.image}
          alt={item.name}
          className="w-[45px] h-[45px] rounded-full object-cover"
        />
        <div>
          <h4 className="text-[14px] font-semibold text-[#ED323A]">
            {item.name}
          </h4>
          <p className="text-[13px] text-[#363636]">{item.role}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
