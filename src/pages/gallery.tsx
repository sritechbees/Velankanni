import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Gallerysection from "@/component/home/layout/common/gallerysection";
import App_layout from "@/component/home/layout/layout/App-layout";


const galleryImages = [
  { src: "/gallery/g1.jpg", alt: "Gallery Image 1" },
  { src: "/gallery/g2.jpg", alt: "Gallery Image 2" },
  { src: "/gallery/g3.jpg", alt: "Gallery Image 3" },
  { src: "/gallery/g4.jpg", alt: "Gallery Image 4" },
  { src: "/gallery/g5.jpg", alt: "Gallery Image 5" },
  { src: "/gallery/g6.jpg", alt: "Gallery Image 6" },
  { src: "/gallery/g7.jpg", alt: "Gallery Image 7" },
  { src: "/gallery/g8.jpg", alt: "Gallery Image 8" },
  { src: "/gallery/g9.jpg", alt: "Gallery Image 9" },
  { src: "/gallery/g10.jpg", alt: "Gallery Image 10" },
  { src: "/gallery/g11.jpg", alt: "Gallery Image 11" },
  { src: "/gallery/g12.jpg", alt: "Gallery Image 12" },
];

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    

    <div>
  <App_layout>
      <section className="bg-gray-100 py-16 mt-28">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className="text-4xl font-bold text-center text-blue-500 mb-12"
            data-aos="fade-up"
          >
            Our Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg border-4 border-white"
                data-aos="zoom-in"
                data-aos-delay={`${index * 100}`}
              >
                {/* Image */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-full transition-transform transform group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="gallery" className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          className="text-3xl font-bold text-blue-600 mb-10"
          data-aos="fade-down"
          >
          Our Gallery
        </h2>
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Image 1 */}
          <div
            className="bg-gray-200 p-4 rounded-lg shadow-md"
            data-aos="fade-up"
          >
            <Image
              src="/gallery/g1.jpg"
              height={200}
              width={200}
              alt="Gallery Image 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Image 2 */}
          <div
            className="bg-gray-200 p-4 rounded-lg shadow-md"
            data-aos="zoom-in"
          >
            <Image
              src="/gallery/g1.jpg"
              height={200}
              width={200}
              alt="Gallery Image 2"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Image 3 */}
          <div
            className="bg-gray-200 p-4 rounded-lg shadow-md"
            data-aos="flip-left"
            >
            <Image
              src="/gallery/g1.jpg"
              height={200}
              width={200}
              alt="Gallery Image 3"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Image 4 */}
          <div
            className="bg-gray-200 p-4 rounded-lg shadow-md"
            data-aos="fade-right"
          >
            <Image
              src="/gallery/g1.jpg"
              height={200}
              width={200}
              alt="Gallery Image 4"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        {/* Include Gallerysection Component */}
        <div data-aos="fade-up">
          <Gallerysection />
        </div>
      </div>
    </section>
       
    </App_layout>
    </div>
          
  );
};

export default Gallery;
