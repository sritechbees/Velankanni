import Footer from "@/component/home/layout/footer";
import Header from "@/component/home/layout/header";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
      <Header />
      <section className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 py-16 mt-28">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className="text-4xl font-bold text-center text-white mb-12"
            data-aos="fade-up"
          >
            Our Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg"
                data-aos="zoom-in"
                data-aos-delay={`${index * 100}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-full transition-transform transform group-hover:scale-110"
                />
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
      <Footer />
    </div>
  );
};

export default Gallery;
