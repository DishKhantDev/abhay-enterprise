import React from "react";
import SideImage from "@/assests/images/side2.png";
import Image from "next/image";
import Point from "@/assests/icons/point.svg";
import ButtonMain from "./ui/ButtonMain";

const AboutUs = () => {
  const featureList = [
    "Ethical & Compliant Approach",
    "Fast & Result-Oriented Execution",
    "Experienced & Skilled Team",
    "End-to-End Recovery Support",
    "Customized Recovery Strategies",
    "Trusted by Leading Institutions",
    "Tech-Driven Monitoring & Reporting",
  ];

  return (
    <div className="mx-[7%] pt-[60px] md:pt-[100px] lg:pt-[150px] flex flex-col xl:flex-row relative">
      {/* IMAGE SECTION */}
      <div className="relative xl:absolute xl:top-[197px] xl:w-auto w-full">
        <Image
          src={SideImage}
          alt="SideImageError"
          className="w-full h-[262px] sm:h-[340px] md:h-[430px] lg:h-[500px] md:w-screen xl:w-[50%] xl:h-[890px] 2xl:h-[712px] 2xl:w-[697px] object-cover object-center rounded-[10px]"
        />
      </div>

      {/* TEXT SECTION */}
      <div className="w-full bg-[#F3F3F3] border border-[#E0E0E0] 2xl:w-full rounded-[10px] pl-custom px-[20px] md:px-[30px] py-[25px] xl:pb-[41px] xl:pt-[99px] xl:pr-[57px] xl:pl-[100px] 2xl:pl-[222px] xl:ml-[540px] 2xl:ml-[540px] mt-[30px] xl:mt-0 xl:min-h-[712px] 2xl:min-h-[712px]">
        <h1 className="text-[24px] sm:text-[25px] md:text-[28px] lg:text-[30px] xl:text-[32px] font-bold lato mb-[30px]">
          Empowering Financial Recovery with Integrity
        </h1>
        <div className="flex flex-col gap-[20px] text-[#363435] text-[14px] md:text-[15px] lg:text-[16px] leading-[30px] redhat">
          <h4 className="font-medium text-[#363435]">
            At Abhay Enterprise, we specialize in delivering reliable, ethical,
            and result-driven financial recovery solutions. With a deep
            understanding of the lending ecosystem and years of hands-on
            experience, we help financial institutions, NBFCs, and corporates
            recover outstanding dues efficiently—while maintaining client
            relationships and ensuring full legal compliance.
          </h4>
          <h4 className="font-medium">
            Our approach is built on transparency, discipline, and
            professionalism. From soft collections to legal escalations, we
            provide end-to-end support that aligns with your goals. At Abhay
            Enterprise, we don’t just collect—we create confidence, restore
            financial balance, and empower our clients to move forward stronger.
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-y-[8px] sm:gap-y-[10px] md:gap-y-[15px] 2xl:gap-y-[35px]">
            {featureList.map((item, index) => (
              <li key={index} className="flex items-start gap-[6px]">
                <Image
                  src={Point}
                  alt="point"
                  className="w-[16px] h-[16px] mt-[6px]"
                />
                <h3 className="font-black redhat text-[14px] md:text-[15px] lg:text-[16px] leading-[30px] ">
                  {item}
                </h3>
              </li>
            ))}
          </ul>
        </div>

        <ButtonMain text="Get In Touch" className="mt-[48px]" />
      </div>
    </div>
  );
};

export default AboutUs;
