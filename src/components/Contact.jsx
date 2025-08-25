"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CallIcon from "@/assests/icons/call.svg";
import EmailIcon from "@/assests/icons/email.svg";
import LocationIcon from "@/assests/icons/location.svg";

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
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phoneNumber") {
      const digitsOnly = value.replace(/\D/g, "");
      if (digitsOnly.length <= 10) {
        setFormData({ ...formData, [name]: digitsOnly });
        setErrors({ ...errors, [name]: "" });
      }
    } else {
      setFormData({ ...formData, [name]: value });
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (
      !formData.email ||
      !/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,10}$/.test(formData.email)
    ) {
      newErrors.email = "Valid email is required";
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be exactly 10 digits";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    try {
      const response = await axios.post(`${apiBaseUrl}contact_submission`, {
        name: formData.firstName,
        email: formData.email,
        phone: formData.phoneNumber,
        message: formData.message,
      });

      const res = response.data;

      if (res.success) {
        toast.success(
          `Thank you ${formData.firstName}, your inquiry has been submitted!`
        );
        setFormData({
          firstName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
        setErrors({});
      } else {
        toast.error(res.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(error?.response?.data?.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-[30px] md:pt-[50px] lg:pt-[80px] mx-[7%]">
      <div className="flex flex-col lg:flex-row lg:gap-[60px] xl:gap-[140px] 2xl:gap-[167px]">
        {/* LEFT SIDE */}
        <div className="lg:w-[532px]">
          <h1 className="text-[24px] sm:text-[25px] md:text-[28px] lg:text-[30px] xl:text-[32px] font-bold leading-[32px] md:leading-[38px] lg:leading-[45px] lato text-[#363435]">
            We'd Love to Hear From You
          </h1>
          <h2 className="text-[#363435] redhat font-medium leading-[30px] text-[14px] md:text-[15px] lg:text-[16px] mt-[6px] md:mt-[10px] lg:mt-[13px]">
            Have a question, concern, or looking to collaborate? We're always
            here to help. Whether you need more information about our recovery
            services, want to schedule a consultation, or are exploring a
            partnership, our team is just a call or message away.
          </h2>
          <div className="h-[1px] my-[18px] md:my-[22px] lg:my-[40px] xl:my-[42px] w-full bg-[#DEDEDE]"></div>

          <div className="space-y-[25px] md:space-y-[30px] lg:space-y-[35px] 2xl:space-y-[42px]">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="bg-[#ED323A] p-2 flex items-center justify-center h-[30px] w-[30px] lg:min-w-[35px] lg:min-h-[38px] 2xl:min-w-[40px] 2xl:min-h-[40px]">
                <Image
                  src={LocationIcon}
                  alt="location icon"
                  className="w-[15px] h-[15px] lg:w-[20px] lg:h-[20px]"
                />
              </div>
              <div>
                <h3 className="font-black redhat text-[18px] md:text-[19px] lg:text-[20px]">
                  Address
                </h3>
                <p className="text-[14px] md:text-[15px] lg:text-[16px] font-medium leading-[30px] text-[#363435] redhat">
                  442/443 4th floor,
                  <br />
                  Jimmy tower Opp. Swaminarayan gurukul,
                  <br />
                  Near Makkam chock Gondal Road Rajkot.
                </p>
              </div>
            </div>

            {/* Call */}
            <div className="flex items-start gap-4">
              <div className="bg-[#ED323A] p-2 flex items-center justify-center h-[30px] w-[30px] lg:min-w-[35px] lg:min-h-[38px] 2xl:min-w-[40px] 2xl:min-h-[40px]">
                <Image
                  src={CallIcon}
                  alt="call icon"
                  className="w-[20px] h-[20px]"
                />
              </div>
              <div>
                <h3 className="font-black redhat text-[18px] md:text-[19px] lg:text-[20px]">
                  Call us on
                </h3>
                <a
                  href="tel:+918140800009"
                  className="text-[14px] md:text-[15px] lg:text-[16px] font-medium text-[#363435] redhat hover:text-[#ED323A] transition"
                >
                  +91 81408 00009
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="bg-[#ED323A] p-2 flex items-center justify-center h-[30px] w-[30px] lg:min-w-[35px] lg:min-h-[38px] 2xl:min-w-[40px] 2xl:min-h-[40px]">
                <Image
                  src={EmailIcon}
                  alt="email icon"
                  className="w-[20px] h-[20px]"
                />
              </div>
              <div>
                <h3 className="font-black redhat text-[18px] md:text-[19px] lg:text-[20px]">
                  Mail
                </h3>
                <a
                  href="mailto:abhayraj.enterprises@gmail.com"
                  className="text-[14px] md:text-[15px] lg:text-[16px] font-medium text-[#363435] redhat hover:text-[#ED323A] transition"
                >
                  abhayraj.enterprises@gmail.com
                </a> <br/>
                <a
                  href="mailto:Pushprajsinh@abhayenterprise.com"
                  className="text-[14px] md:text-[15px] lg:text-[16px] font-medium text-[#363435] redhat hover:text-[#ED323A] transition"
                >
                  Pushprajsinh@abhayenterprise.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-[#F3F3F3] border border-[#E0E0E0] rounded-[10px] p-[25px] md:p-[30px] lg:p-[43px] w-full lg:w-[952px] h-full mt-[40px] lg:mt-0">
          <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold lato leading-[24px] text-[#363435]">
            Contact Us Form
          </h3>
          <div className="h-[1px] mt-[16px] my-[30px] w-full bg-[#DEDEDE]"></div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 lg:grid-cols-2 gap-y-[30px] gap-x-[20px] md:gap-x-[25px] 2xl:gap-x-[30px]"
          >
            {formFields.map((field, index) => (
              <div
                key={index}
                className={`w-full ${
                  field.colSpan === 2 ? "md:col-span-2" : "md:col-span-1"
                }`}
              >
                <label className="lato font-semibold text-[16px] block mb-[5px] capitalize">
                  {field.label}
                  <span className="text-[#ED323A]">*</span>
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    name={field.name}
                    placeholder={field.placeholder}
                    rows={8}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="w-full border border-[#D4D4D4] bg-white rounded-[5px] py-[20px] px-[15px] placeholder-[#575757] focus:outline-none"
                  />
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="w-full border border-[#D4D4D4] bg-white rounded-[5px] h-[50px] py-[20px] px-[15px] placeholder-[#575757] focus:outline-none"
                  />
                )}
                {errors[field.name] && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors[field.name]}
                  </p>
                )}
              </div>
            ))}
            <div className="lg:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#ED323A] text-white hover:bg-white hover:text-[#ED323A] border border-[#ED323A] transition-all duration-300 rounded-tr-[20px] rounded-bl-[20px] px-[50px] py-[10px] flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="relative mt-[80px] h-[350px] md:h-[400px] lg:h-[500px] 2xl:h-[564px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.8300551180055!2d70.81992357504685!3d22.285000000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbf2f2f6f027%3A0x847d53f96733656e!2sJimmy%20Tower%204th%20Floor%2C%20442%2F443%2C%20Opp.%20Swaminarayan%20Gurukul%2C%20Makkam%20Chowk%2C%20Gondal%20Road%2C%20Rajkot%2C%20Gujarat%20360002%2C%20India!5e0!3m2!1sen!2sin!4v1722330483980"
          className="border-0 w-full h-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-30 flex flex-col items-center text-center">
          <svg width="33" height="47" viewBox="0 0 33 47" fill="none">
            <path
              d="M32.0367 16.657C32.0367 14.5691 31.6255 12.5016 30.8265 10.5727C30.0275 8.64368 28.8563 6.89097 27.38 5.41459C25.9036 3.93821 24.1509 2.76708 22.2219 1.96807C20.2929 1.16906 18.2254 0.757813 16.1375 0.757812C14.0496 0.757813 11.9821 1.16906 10.0531 1.96807C8.12415 2.76708 6.37144 3.93821 4.89506 5.41459C3.41868 6.89097 2.24755 8.64368 1.44854 10.5727C0.649526 12.5016 0.238281 14.5691 0.238281 16.657C0.238281 19.8074 1.16725 22.7374 2.74809 25.2085H2.72992L16.1375 46.1842L29.5451 25.2085H29.5292C31.1666 22.657 32.037 19.6888 32.0367 16.657ZM16.1375 23.471C14.3303 23.471 12.5972 22.7531 11.3193 21.4752C10.0414 20.1974 9.32355 18.4642 9.32355 16.657C9.32355 14.8499 10.0414 13.1167 11.3193 11.8388C12.5972 10.561 14.3303 9.84308 16.1375 9.84308C17.9447 9.84308 19.6778 10.561 20.9557 11.8388C22.2336 13.1167 22.9515 14.8499 22.9515 16.657C22.9515 18.4642 22.2336 20.1974 20.9557 21.4752C19.6778 22.7531 17.9447 23.471 16.1375 23.471Z"
              fill="#FF0D0D"
            />
          </svg>
          <h2 className="mt-1 text-[#2F3034] redhat text-[12px] font-bold bg-white">
            ABHAY ENTERPRISE
          </h2>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
};

export default Contact;
