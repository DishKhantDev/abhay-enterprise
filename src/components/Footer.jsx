import React from "react";
import Image from "next/image";
import Logo from "@/assests/images/footer-logo.png";

const Footer = () => {
  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Clients", href: "#ourclients" },
    { name: "Why choose us", href: "#Whychooseus" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <div className="mx-[7%] mt-[40] md:mt-[70] lg:mt-[100px]">
      {/* Top Divider */}
      <div className="h-[1.5px] w-full bg-[#C8C8C8] mb-[64px] md:mb-[100px] lg:mb-[141px]" />

      {/* Logo */}
      <div className="flex justify-center mb-4 ">
        <Image src={Logo} alt="Website Logo " className="h-[150px] md:h-[250px]  lg:h-[305px] w-auto" />
      </div>

      {/* Company Description */}
      <h2 className=" mx-auto text-[#333] text-[16px]  font-medium leading-[30px] redhat text-center w-full sm:w-[70%] 2xl:w-[43%]">
        Abhay Enterprise is a trusted financial recovery agency dedicated to
        ethical, transparent, and result-driven solutions. With a strong
        on-ground network and deep industry expertise, we help banks, NBFCs, and
        financial institutions recover dues efficiently and legally.
      </h2>

      {/* Middle Divider */}
      <div className="h-[1px] bg-[#C8C8C8]  w-full lg:w-[70%] 2xl:w-[60%] mx-auto mt-[64px] md:mt-[80px] lg:mt-[100px] 2xl:mt-[155px] mb-[40px] " />

      {/* Nav Links */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] lato  font-bold uppercase  ">
        {navLinks.map((link, index) => (
          <a key={index} href={link.href} className="hover:underline">
            {link.name}
          </a>
        ))}
      </div>
      <div className="h-[1.5px] w-full bg-[#C8C8C8] mt-[40px] mb-[29px] " />

      <div className="flex flex-col lg:flex-row justify-between items-center w-full text-[14px] md:text-[15px] lg:text-[16px] lato font-normal leading-[30px] text-[#4E5566]">
        <h4>Privacy Policy  |  Terms & Conditions</h4>
        <h4>© 2025 Abhay Enterprise. All rights reserved.</h4>
        <h4>Made With ❤️ by Digieagle INC</h4>
      </div>
    </div>
  );
};

export default Footer;
