import React from "react";
import Image from "next/image";

import Icon1 from "@/assests/icons/icon1.svg";
import Icon2 from "@/assests/icons/icon2.svg";
import Icon3 from "@/assests/icons/icon3.svg";
import Icon4 from "@/assests/icons/icon4.svg";
import Rectangle from "@/assests/icons/rectangle.png";

const cardData = [
  {
    icon: Icon1,
    title: "Proven Track Record",
    description:
      "We deliver consistent recovery results across industries, helping clients recover outstanding debts quickly and efficiently.",
  },
  {
    icon: Icon2,
    title: "Customized Solutions",
    description:
      "No two cases are the same. We tailor our services to your unique business needs, offering flexible strategies for maximum recovery.",
  },
  {
    icon: Icon3,
    title: "Expert Team",
    description:
      "Our experienced professionals bring deep industry knowledge and negotiation skills to handle even the most complex recovery cases.",
  },
  {
    icon: Icon4,
    title: "End-to-End Support",
    description:
      "From initial contact to final settlement, we manage the entire recovery process so you can focus on growing your business.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="mx-[7%] pt-[60px] md:pt-[100px] lg:pt-[150px] ">
      {/* Section Title */}
      <div className="flex flex-col gap-[16px] md:gap-[0px]  md:flex-row">
        <div className="flex-1/2">
          <div className="flex items-center gap-[10px] ">
            <p className="text-[#ED323A] text-[12px] font-black uppercase lato tracking-[0.1em] ">
              Why Choose Us
            </p>
            <Image src={Rectangle} alt="Rectangle" />
          </div>
          <h1 className="text-[24px] sm:text-[25px] md:text-[28px] lg:text-[30px] xl:text-[32px] font-bold md:leading-[38px] lg:leading-[45px] leading-[32px] lato text-black md:flex-1/2 mt-[8px] w-[80%]">
            Trusted Financial Solutions Backed by Experience, Integrity &
            Results
          </h1>
        </div>

        <div className="md:flex-1/2">
          <h2 className="text-[14px] md:text-[15px] lg:text-[16px] text-[#363435] font-medium  leading-[30px] ">
            At Abhay Enterprise, we specialize in turning unpaid dues into
            recovered revenue—ethically and efficiently. With a strong
            foundation built on trust, transparency, and a proven track record,
            we provide tailored debt recovery strategies that safeguard
            relationships while delivering real financial impact. Whether you're
            a small business or a large corporation, we're here to protect your
            interests and help you move forward with confidence.
          </h2>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[28px] mt-[24px] md:mt-[40px] lg:mt-[55px] 2xl:mt-[68px] 2xl:mb-[100px]">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`bg-[#F3F3F3] border border-[#E0E0E0] rounded-[5px] flex flex-row md:flex-col  justify-center  gap-[24px] md:gap-[20px] lg:gap-[0px]  items-center md:items-start transition px-[21px] md:py-[23px]  2xl:px-[41px] 2xl:py-[41px]  h-full ${
              index === 1 || index === 3 ? "2xl:mt-[65px]" : ""
            }`}
          >
            <div className="lg:mb-[15px] xl:mb-[21px]">
              <Image
                src={card.icon}
                alt={card.title}
                className=" h-[200px] w-[200px] md:h-[84px] md:w-[84px] "
              />
            </div>

            <div className="md:hidden">
              <h3 className="text-[20px] sm:text-[20px] lg:text-[16px] xl:text-[22px] font-bold leading-[30px]">
                {card.title}
              </h3>
              <p className="text-[14px] md:text-[15px]  lg:text-[16px] text-[#363435] font-medium  leading-[30px] mt-[6px] lg:mt-[21px]  2xl:mt-[31px] redhat 2xl:w-[72%]">
                {card.description}
              </p>
            </div>

            <h3 className="hidden md:block text-[20px] sm:text-[20px] lg:text-[18px] xl:text-[22px] font-bold leading-[30px]">
              {card.title}
            </h3>
            <p className="hidden md:block text-[14px] md:text-[15px]  lg:text-[16px] text-[#363435] font-medium  leading-[30px]  mt-[6px] lg:mt-[21px]  2xl:mt-[31px] redhat 2xl:w-[72%]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
