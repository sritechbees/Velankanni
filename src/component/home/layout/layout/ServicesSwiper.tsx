import { Swiper, SwiperSlide } from 'swiper/react';
import {FreeMode, Pagination, Autoplay } from 'swiper/modules'; // Import Pagination and Autoplay modules
import 'swiper/css';
import 'swiper/css/pagination';

export default function ServicesSwiper() {
  const services = [
    { title: "Residential Moving", description: "Safe and secure home relocation services.", icon: "🏠" },
    { title: "Office Moving", description: "Efficient office moves with minimal downtime.", icon: "🏢" },
    { title: "Vehicle Transport", description: "Reliable car and bike transportation.", icon: "🚗" },
    { title: "Storage Services", description: "Short-term and long-term storage options.", icon: "📦" },  
    { title: "International Moving", description: "Effortless global relocation made easy.", icon: "🌍" },
    { title: "Local Moving", description: "Affordable local moving solutions.", icon: "🛋️" },
    { title: "Warehouse Storage", description: "Safe and Spacious Warehousing Solutions.", icon: "🏗️" },
    { title: "Packing & Unpacking", description: "Expert Packing and Unpacking Services.", icon: "📦" },
    { title: "Pet Relocation", description: "Safe and caring pet relocation services.", icon: "🐾" },
    { title: "Furniture Moving", description: "Expert Furniture Handling and Moving.", icon: "🪑" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Specialized Services</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={3} // Show 3 slides at a time
          loop={true} // Enable infinite loop
          autoplay={{
            delay: 3000, // Slide change interval (in milliseconds)
            disableOnInteraction: false, // Keep autoplay running after interactions
          }}
          pagination={{ clickable: true }} // Enable clickable pagination
          modules={[FreeMode,Pagination, Autoplay]} // Register Pagination and Autoplay modules
          className="w-[1200px]"
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
  );
}
