"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import RedArrowLeft from "@/assests/icons/red-left-arrow.svg";
import RedArrowRight from "@/assests/icons/red-right-arrow.svg";
import Rectangle from "@/assests/icons/rectangle.png";
import Symbol from "@/assests/images/review-symbol.png";
import LeftWhiteArrow from "@/assests/icons/left-white-arrow.svg";
import RightWhiteArrow from "@/assests/icons/right-white-arrow.svg";
import Profile from "@/assests/images/profile.jpg"; // default profile image

// STATIC DATA FOR NOW
const staticTestimonials = [
  {
    name: "Rohit Mehta",
    message: "Abhay Enterprise has been an absolute game-changer for our business. Their ethical approach to financial recovery restored not just our overdue payments but also our confidence in how debt recovery should be done. Professional, respectful, and results-driven—exactly what we were looking for.",
    role: "CEO, Mehta Industries",
    image: Profile,
  },
  {
    name: "Anita Sharma",
    message: "Highly professional team and top-notch support. Recommended!",
    role: "Project Manager, BuildWell Corp",
    image: Profile,
  },
  {
    name: "Vikram Patel",
    message: "Reliable supplier with great attention to detail. Will work again.",
    role: "Procurement Head, SteelWays Ltd",
    image: Profile,
  },
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(staticTestimonials); // initially static
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // 🔄 Uncomment below to enable DYNAMIC fetch
  /*
  useEffect(() => {
     fetch("https://abhayenterprise.com/wp-json/wp/v2/testimonials-acf")
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data)) {
          console.error("Unexpected API response:", data);
          return;
        }

        const formatted = data.map((item) => ({
          message: item.content,
          name: item.name,
          role: `${item.designation}, ${item.company_name}`,
          image: item.image,
        }));

        setTestimonials(formatted);
      })
      .catch((err) => console.error("Failed to fetch testimonials:", err));
  }, []);
  */

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const TextContent = () => (
    <div className="flex flex-col gap-[25px] lg:gap-[58px] w-full">
      <div className="flex items-center gap-[10px]">
        <p className="text-[#ED323A] text-[12px] font-black uppercase lato tracking-[0.1em]">
          CLIENT TESTIMONIALS
        </p>
        <Image src={Rectangle} alt="Rectangle" />
      </div>
      <div className="flex flex-col gap-[13px]">
        <Image src={Symbol} alt="Symbol" className="h-[20px] w-[25px] lg:w-25 lg:h-14" />
        <h1 className="text-[24px] sm:text-[25px] md:text-[28px] ml-6 md:ml-0 l1 text-[#000000] lg:text-[30px] xl:text-[32px] font-bold leading-[32px] md:leading-[38px] lg:leading-[45px] redhat">
          Their Words Reflect Our Consistent{" "}
          <span className="hidden md:block">Value</span>
        </h1>
      </div>
    </div>
  );

  const ArrowControls = () => {
    const [hoverLeft, setHoverLeft] = useState(false);
    const [hoverRight, setHoverRight] = useState(false);

    return (
      <div className="flex gap-[12px] md:mt-[28px] mt-[24px]">
        <button
          className="p-3 border-[#ED323A] hover:bg-[#ED323A] border rounded-full cursor-pointer hover:bg-opacity-10 transition-all duration-300"
          onClick={prevSlide}
          onMouseEnter={() => setHoverLeft(true)}
          onMouseLeave={() => setHoverLeft(false)}
        >
          <Image
            src={hoverLeft ? LeftWhiteArrow : RedArrowLeft}
            alt="left"
            className="w-[22px] h-[22px]"
          />
        </button>

        <button
          className="p-3 border-[#ED323A] hover:bg-[#ED323A] border rounded-full cursor-pointer hover:bg-opacity-10 transition-all duration-300"
          onClick={nextSlide}
          onMouseEnter={() => setHoverRight(true)}
          onMouseLeave={() => setHoverRight(false)}
        >
          <Image
            src={hoverRight ? RightWhiteArrow : RedArrowRight}
            alt="right"
            className="w-[22px] h-[22px]"
          />
        </button>
      </div>
    );
  };

  return (
    <div className="my-[100px] md:my-[120px] lg:my-[180px] mx-[7%]">
      {testimonials.length === 0 ? (
        <p>Loading testimonials...</p>
      ) : (
        <>
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-[58px] w-full">
            <div className="w-[232px]">
              <TextContent />
              <ArrowControls />
            </div>

            <div className="flex-1 overflow-hidden">
              <div
                className="flex gap-[25px] transition-transform duration-500 ease-in-out"
                style={{
                  transform:
                    typeof window !== "undefined" &&
                    window.innerWidth >= 768 &&
                    window.innerWidth < 1024
                      ? `translateX(-${currentIndex * (350 + 25)}px)`
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
        </>
      )}
    </div>
  );
};

// 📦 TestimonialCard component
function TestimonialCard({ item }) {
  return (
    <div className="w-full md:min-w-[350px] lg:min-w-[536px] xl:max-w-[536px] lg:mt-[80px] bg-[#F3F3F3] rounded-[5px] px-[30px] py-[20px] flex flex-col justify-between h-full md:h-auto lg:h-[352px]">
      <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[35px] md:leading-[40px] redhat text-[#363435] font-[500]">
        "{item.message}"
      </p>
      <div className="flex items-center gap-4 mt-8">
        <div className="w-[45px] h-[45px] rounded-full overflow-hidden relative">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div>
          <h4 className="text-[14px] font-semibold text-[#ED323A]">{item.name}</h4>
          <p className="text-[13px] text-[#363636]">{item.role}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
