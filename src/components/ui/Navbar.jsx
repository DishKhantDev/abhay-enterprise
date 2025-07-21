"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/assests/images/white logo 1.svg";
import ThreeLines from "@/assests/images/three-line.png";
import ButtonMain from "@/components/ui/ButtonMain";
import FooterLogo from "@/assests/images/footer-logo.png";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  return (
    <header className="lato mx-[7%] border-b-1 border-[#FFFFFF]/60">
      {/* Main Navbar */}
      <nav className="flex justify-between  items-center h-[100px] md:h-[140px] xl:h-[165px] relative">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image
            src={Logo}
            alt="AbhayEnterprise"
            className="w-[95px] lg:w-[109px] xl:w-[110px] h-[70px] lg:h-[90px] xl:h-[117px]"
          />
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-4xl font-bold cursor-pointer"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Image src={ThreeLines} alt="IconError " className="" />
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-[20px] lg:gap-[35px] 2xl:gap-[90px] text-white font-normal uppercase md:text-[14px] lg:text-[16px] l1 xl:text-[18px] items-center inter ">
          {[
            ["Home", "#home"],
            ["AboutUs", "#about"],
            ["Our Clients", "#ourclients"],
            ["Why choose us", "#Whychooseus"],
          ].map(([label, href]) => (
            <li key={href} className="relative group">
              <Link
                href={href}
                className="font-bold lato cursor-pointer relative after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full"
              >
                {label}
              </Link>
            </li>
          ))}

          {/* Contact Button */}
          <Link href="#contact" className="hidden md:block group">
            <ButtonMain
              text="Contact Us"
              className="text-white bg-[#ED323A] hover:bg-white border-[#ED323A] hover:border-[#ED323A] hover:text-[#ED323A] transition-all duration-300 ease-in-out"
            />
          </Link>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          {/* Dimmed Background */}
          <div className="fixed inset- z-40" onClick={closeMenu} />

          {/* Slide-in Menu */}
          <div className="fixed top-0 left-0 w-full h-full bg-white z-50 py-8 px-4 animate-slide-in overflow-y-auto">
            <div className="flex justify-between items-center mb-6 px-[7%]">
              <div className="">
                <Image
                  src={FooterLogo}
                  alt="AbhayEnterprise"
                  className="h-[80px] w-[120px]"
                />
              </div>
              <button
                onClick={closeMenu}
                className="text-5xl cursor-pointer"
                aria-label="Close menu"
              >
                ×
              </button>
            </div>

            <nav className="flex flex-col text-[15px] font-bold divide-y uppercase divide-[#DADADA]">
              {[
                ["Home", "#home"],
                ["About Us", "#about"],
                ["Our Clients", "#ourclients"],
                ["Why choose us", "#Whychooseus"],
                ["Contact Us", "#contact"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="py-3 hover:underline"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}

      {/* Slide-in Animation */}
      <style jsx>{`
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
        @keyframes slide-in {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0%);
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
