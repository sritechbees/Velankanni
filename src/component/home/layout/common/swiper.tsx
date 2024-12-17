import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";

function Swipper() {
  return (
    <div>
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
        className="mySwiper h-screen w-full max-md:h-64"
      >
        {/* Existing 6 Slides */}
        <SwiperSlide>
          {/* Slide Content */}
        </SwiperSlide>
        {/* ... Add the previous 6 slides here */}
        
        {/* Slide 7: Industrial Relocation */}
        <SwiperSlide>
          <div className="relative h-screen mt-32 w-full">
            <Image
              className="rounded-lg object-cover w-full h-full"
              src="/image/Industrial Relocation.jpg"
              width={1300}
              height={0}
              alt="Industrial Relocation"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white p-4">
              <h2 className="text-4xl font-bold mb-2">Industrial Relocation</h2>
              <p className="text-lg text-center max-w-xl">
                Specialized industrial relocation services for heavy equipment and machinery.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 8: Packing Services */}
        <SwiperSlide>
          <div className="relative h-screen mt-32 w-full">
            <Image
              className="rounded-lg object-cover w-full h-full"
              src="/image/Packing Services.jpg"
              width={1300}
              height={0}
              alt="Packing Services"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white p-4">
              <h2 className="text-4xl font-bold mb-2">Packing Services</h2>
              <p className="text-lg text-center max-w-xl">
                High-quality packing materials to ensure the safety of your belongings.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 9: Insurance Services */}
        <SwiperSlide>
          <div className="relative h-screen mt-32 w-full">
            <Image
              className="rounded-lg object-cover w-full h-full"
              src="/image/Insurance Services.jpg"
              width={1300}
              height={0}
              alt="Insurance Services"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white p-4">
              <h2 className="text-4xl font-bold mb-2">Insurance Services</h2>
              <p className="text-lg text-center max-w-xl">
                Comprehensive insurance options to safeguard your move.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 10: Domestic Moving */}
        <SwiperSlide>
          <div className="relative h-screen mt-32 w-full">
            <Image
              className="rounded-lg object-cover w-full h-full"
              src="/image/Domestic Moving.jpg"
              width={1300}
              height={0}
              alt="Domestic Moving"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white p-4">
              <h2 className="text-4xl font-bold mb-2">Domestic Moving</h2>
              <p className="text-lg text-center max-w-xl">
                Efficient and reliable services for domestic relocations.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 11: Pet Relocation */}
        <SwiperSlide>
          <div className="relative h-screen mt-32 w-full">
            <Image
              className="rounded-lg object-cover w-full h-full"
              src="/image/Pet Relocation.jpg"
              width={1300}
              height={0}
              alt="Pet Relocation"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white p-4">
              <h2 className="text-4xl font-bold mb-2">Pet Relocation</h2>
              <p className="text-lg text-center max-w-xl">
                Hassle-free and safe relocation services for your beloved pets.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 12: Furniture Installation */}
        <SwiperSlide>
          <div className="relative h-screen mt-32 w-full">
            <Image
              className="rounded-lg object-cover w-full h-full"
              src="/image/Furniture Installation.jpg"
              width={1300}
              height={0}
              alt="Furniture Installation"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white p-4">
              <h2 className="text-4xl font-bold mb-2">Furniture Installation</h2>
              <p className="text-lg text-center max-w-xl">
                Professional furniture assembly and installation services.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Swipper;
