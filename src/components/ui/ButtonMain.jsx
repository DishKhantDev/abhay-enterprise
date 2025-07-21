import React from "react";

const ButtonMain = ({ text, className = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`border px-[30px] text-[14px] 
        xl:px-[45px] lg:px-[30px] lg:py-[5px] xl:py-[5px] 
        lg:text-[16px] xl:text-[18px] font-medium cursor-pointer 
        rounded-tr-[20px] rounded-bl-[20px] leading-[40px] text-white bg-[#ED323A] hover:bg-white border-[#ED323A] hover:border-[#ED323A] hover:text-[#ED323A] transition-all duration-300 ease-in-out ${className}`}
    >
      {text}
    </button>
  );
};

export default ButtonMain;
