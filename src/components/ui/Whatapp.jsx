"use client";
import { useState } from "react";
// import WhatappIcon from "@/assets/images/whatsapp-icon.png"
// @ts-ignore
import WhatappIcon2 from "@/assests/images/whatsapp.png"
import Image from "next/image";

export default function WhatsAppButton() {
  const [visible] = useState(true); // always visible, can add scroll logic if needed

  const whatsappNumber = "918788787887"; // your WhatsApp number without + sign
  const message = "Hello, I would like to know more!"; // default message

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  if (!visible) return null;

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 lg:bottom-10 right-6 md:right-17 2xl:right-12 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg z-50 transition"
      aria-label="Chat on WhatsApp"
    >
      {/* Official WhatsApp Logo (SVG) */}
      <Image src={WhatappIcon2} alt="WhatsApp" className="w-7 h-7 lg:w-8 lg:h-8" />
    </button>
  );
}
