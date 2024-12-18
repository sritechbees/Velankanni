import Footer from "@/component/home/layout/footer";
import Header from "@/component/home/layout/header";
import HeroSection from "@/component/home/layout/layout/HeroSection";
import Packers from "@/component/home/layout/layout/packers";
import ServiceAreas from "@/component/home/layout/layout/ServiceAreas";
import ServicesSwiper from "@/component/home/layout/layout/ServicesSwiper";
import WhyChooseUs from "@/component/home/layout/layout/WhyChooseUs";
import React from "react";

export default function Home() {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <ServicesSwiper />
      <WhyChooseUs />
      <Packers />
      <ServiceAreas />
      <Footer />
    </div>
  );
}
