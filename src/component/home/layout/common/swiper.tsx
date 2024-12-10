import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import { BsArrowRightShort } from "react-icons/bs";

// import required modules
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
        // freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper h-screen w-full max-md:h-64"
      >

        <SwiperSlide>
          <Image className="rounded-lg flex justify-center mt-28" width={1300}  height={0} src="/image/Household Relocation.jpg" alt="Banner" />
        </SwiperSlide>

        <SwiperSlide>
          <Image className="rounded-lg flex justify-center mt-28" width={1300}  height={0} src="/image/International Moving.jpg" alt="Banner " />
        </SwiperSlide> 

        <SwiperSlide> 
          <Image className="rounded-lg flex justify-center mt-28" width={1300}  height={0} src="/image/Loading & Unloading.jpg" alt="Banner" />
        </SwiperSlide>
       
        </Swiper>

    </div>
  );
}

export default Swipper;
