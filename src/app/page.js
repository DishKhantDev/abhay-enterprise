import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { HomeMain } from "@/components/HomeMain";
import OurClients from "@/components/OurClients";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonial";
import Navbar from "@/components/ui/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      
      <section id="home">
        <HomeMain />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="Whychooseus">
        <WhyChooseUs />
      </section>

      {/* <section id="service"> */}
        <Services />
      {/* </section> */}

      <section id="ourclients">
        <OurClients />
      </section>

   
        <Testimonials />


      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}
