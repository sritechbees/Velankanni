import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

const services = [
  {
    title: "Residential Moving",
    description: "Safe and secure home relocation services.",
    icon: "🏠",
  },
  {
    title: "Office Moving",
    description: "Efficient office moves with minimal downtime.",
    icon: "🏢",
  },
  {
    title: "Vehicle Transport",
    description: "Reliable car and bike transportation.",
    icon: "🚗",
  },
  {
    title: "Storage Services",
    description: "Short-term and long-term storage options.",
    icon: "📦",
  },
];

function Swipper() {
  return (
    <div>

           <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Specialized Services</h2>
       
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper mt-32 w-full max-md:h-64"
      >
      
       
      {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-lg p-8 text-center">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </SwiperSlide>
          ))}
       
      </Swiper>
      </div>
      </section>

    </div>
  );
}

export default Swipper;
