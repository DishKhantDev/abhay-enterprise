import React from "react";
import Image from "next/image";

import CallIcon from "@/assests/icons/call.svg";
import EmailIcon from "@/assests/icons/email.svg";
import LocationIcon from "@/assests/icons/location.svg";
import ButtonMain from "./ui/ButtonMain";

const formFields = [
  {
    label: "First Name",
    name: "firstName",
    type: "text",
    placeholder: "Enter First Name",
    colSpan: 2,
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Enter E-Mail",
    colSpan: 1,
  },
  {
    label: "Phone Number",
    name: "phoneNumber",
    type: "tel",
    placeholder: "Enter Phone Number",
    colSpan: 1,
  },

  {
    label: "Message",
    name: "message",
    type: "textarea",
    placeholder: "Enter Your Message Here",
    colSpan: 2,
  },
];

const Contact = () => {
  return (
    <div className="pt-[30px] md:pt-[50] lg:pt-[80px] mx-[7%]">
      <div className="flex flex-col lg:flex-row lg:gap-[60px] xl:gap-[140px] 2xl:gap-[167px]">
        {/* LEFT SIDE */}
        <div className="lg:w-[532px]">
          <h1 className="text-[24px] sm:text-[25px] md:text-[28px] lg:text-[30px] xl:text-[32px] font-bold leading-[32px] md:leading-[38px] lg:leading-[45px] lato">
            We'd Love to Hear From You
          </h1>
          <h2 className="text-[#4B4B4B] redhat font-medium leading-[30px] text-[14px] md:text-[15px] lg:text-[16px] mt-[6px] md:mt-[10px] lg:mt-[13px]">
            Have a question, concern, or looking to collaborate? We're always
            here to help. Whether you need more information about our recovery
            services, want to schedule a consultation, or are exploring a
            partnership, our team is just a call or message away.
          </h2>
          <div className="h-[1px] my-[18px] md:my-[22px] lg:my-[40px] xl:my-[42px] w-full bg-[#DEDEDE]"></div>

          <div className="space-y-[25px] md:space-y-[30px] lg:spce-y-[35px] 2xl:space-y-[42px]">
            {/* Address Block */}
            <div className="flex items-start gap-4">
              <div className="bg-[#ED323A] p-2 flex items-center justify-center h-[30px] w-[30px] lg:min-w-[35px] lg:min-h-[38px] 2xl:min-w-[40px] 2xl:min-h-[40px]">
                <Image
                  src={LocationIcon}
                  alt="location icon"
                  className="w-[15px] h-[15px] lg:w-[20px] lg:h-[20px]"
                />
              </div>
              <div>
                <h3 className="font-black redhat leading-[30px] text-[18px] md:text-[19px] lg:text-[20px]">
                  Address
                </h3>
                <p className="text-[14px] md:text-[15px] lg:text-[16px] font-medium leading-[30px] text-[#363435] redhat">
                  Abhay Enterprise Lorem Tower, <br /> 2nd Floor, Ipsum Nagar,
                  Sector 45, Near Dolor <br /> Bank, Sit Amet Road, Consectetur
                  (West), Metropolis - 110011, Lorem Pradesh, India.
                </p>
              </div>
            </div>

            {/* Call Block */}
            <div className="flex items-start gap-4">
              <div className="bg-[#ED323A] p-2 flex items-center justify-center h-[30px] w-[30px] lg:min-w-[35px] lg:min-h-[38px] 2xl:min-w-[40px] 2xl:min-h-[40px]">
                <Image
                  src={CallIcon}
                  alt="call icon"
                  className="w-[20px] h-[20px]"
                />
              </div>
              <div>
                <h3 className="font-black redhat leading-[30px] text-[18px] md:text-[19px] lg:text-[20px]">
                  Call us on
                </h3>
                <p className="text-[14px] md:text-[15px] lg:text-[16px] font-medium leading-[30px] text-[#363435] redhat">
                  +91 87887 87887
                  <br />
                  +91 90900 90900
                </p>
              </div>
            </div>

            {/* Email Block */}
            <div className="flex items-start gap-4">
              <div className="bg-[#ED323A] p-2 flex items-center justify-center h-[30px] w-[30px] lg:min-w-[35px] lg:min-h-[38px] 2xl:min-w-[40px] 2xl:min-h-[40px]">
                <Image
                  src={EmailIcon}
                  alt="email icon"
                  className="w-[20px] h-[20px]"
                />
              </div>
              <div>
                <h3 className="font-black redhat leading-[30px] text-[18px] md:text-[19px] lg:text-[20px]">
                  Mail
                </h3>
                <p className="text-[14px] md:text-[15px] lg:text-[16px] font-medium leading-[30px] text-[#363435] redhat">
                  info@abhayenterprise.in
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-[#F3F3F3] border border-[#E0E0E0] rounded-[10px] p-[25px] md:p-[30px] lg:p-[43px] w-full lg:w-[952px] h-full mt-[40px] lg:mt-0">
          <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold lato leading-[24px]">
            Contact Us Form
          </h3>
          <div className="h-[1px] mt-[16px] md:mt-[22x] my-[30px] w-full bg-[#DEDEDE]"></div>

          <form className="grid grid-cols-1 lg:grid-cols-2   gap-y-[30px] gap-x-[20px] md:gap-x-[25px] 2xl:gap-x-[30px]">
            {formFields.map((field, index) => (
              <div
                key={index}
                className={`w-full ${
                  field.colSpan === 2 ? "md:col-span-2" : "md:col-span-1"
                }`}
              >
                <label className="lato font-semibold text-[16px] block mb-[5px] md:mb-[7px] lg:mb-[10px] capitalize">
                  {field.label}
                  <span className="text-[#ED323A]">*</span>
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    name={field.name}
                    placeholder={field.placeholder}
                    rows={8}
                    className="w-full l1 border border-[#D4D4D4] bg-white lato placeholder:redhat rounded-[5px] h-[140px] 2xl:h-[156px] py-[20px] md:py-[22px] px-[15px] md:px-[23px] lg:px-[30px] text-[14px] resize-none placeholder-[#575757] focus:outline-none"
                  />
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="w-full l1 border border-[#D4D4D4] bg-white rounded-[5px] lato placeholder:redhat h-[50px] md:h-[55px] lg:h-[60px] text-[14px] py-[20px] md:py-[22px] px-[15px] md:px-[23px] lg:px-[30px] placeholder-[#575757] focus:outline-none"
                  />
                )}
              </div>
            ))}

            <div className="lg:col-span-2 lg:mt-[18px] ">
              <button
                className="border px-[50px] text-[14px] 
        xl:px-[70px] lg:px-[70px] lg:py-[5px] xl:py-[5px] 
        lg:text-[16px] xl:text-[18px] font-medium cursor-pointer 
        rounded-tr-[20px] rounded-bl-[20px] leading-[40px] text-white bg-[#ED323A] hover:bg-white border-[#ED323A] hover:border-[#ED323A] hover:text-[#ED323A] transition-all duration-300 ease-in-out"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-[80px] h-[350px] md:h-[400px] lg:h-[500px] 2xl:h-[564px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.6101296400685!2d80.93936211462399!3d26.846693983158154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2a111111111%3A0xabcdef123456789!2sYour%20Company%20Location!5e0!3m2!1sen!2sin!4v1711111111111"
          width="100%"
          height="100%"
          allowFullScreen={true}
          loading="lazy"
          className="border-0 w-full h-full"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
