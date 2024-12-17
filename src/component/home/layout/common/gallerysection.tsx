import Image from "next/image";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

// Reusable GalleryCategory Component
interface GalleryCategoryProps {
  title: string;
  description: string;
  images: {
    src: string;
    alt: string;
    buttonText: string;
  }[];
}

const GalleryCategory: React.FC<GalleryCategoryProps> = ({ title, description, images }) => {
  return (
    <div className="py-8" data-aos="fade-up">
      <h2 className="text-2xl font-bold text-blue-600 mb-4" data-aos="fade-right">{title}</h2>
      <p className="text-gray-600 mb-6" data-aos="fade-left">{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="text-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-4"
            data-aos="zoom-in"
          >
            <div className="relative w-full h-64 overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <button
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              data-aos="flip-up"
            >
              {image.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Gallerysection Component
const Gallerysection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  const planSelectionImages = [
    { src: "/gallery/Plan Selection.jpg", alt: "Plan Selection Image 1", buttonText: "Learn More" },
    { src: "/gallery/Plan Selection-2.jpg", alt: "Plan Selection Image 2", buttonText: "View Details" },
    { src: "/gallery/Plan Selection-3.jpg", alt: "Plan Selection Image 3", buttonText: "Get Started" },
    { src: "/gallery/Plan Selection-4.jpg", alt: "Plan Selection Image 4", buttonText: "Explore Plans" },
  ];

  const packingProcessImages = [
    { src: "/gallery/Packing Process.jpg", alt: "Packing Process Image 1", buttonText: "View Process" },
    { src: "/gallery/Packing Process-2.jpg", alt: "Packing Process Image 2", buttonText: "See How" },
    { src: "/gallery/Packing Process-3.jpg", alt: "Packing Process Image 3", buttonText: "Our Packing" },
    { src: "/gallery/Packing Process-4.jpg", alt: "Packing Process Image 4", buttonText: "Get More Info" },
  ];

  const transportServicesImages = [
    { src: "/gallery/Transport Services.jpg", alt: "Transport Services Image 1", buttonText: "Learn More" },
    { src: "/gallery/Transport Services-2.jpg", alt: "Transport Services Image 2", buttonText: "Explore Services" },
    { src: "/gallery/Transport Services-3.jpg", alt: "Transport Services Image 3", buttonText: "Check Details" },
    { src: "/gallery/Transport Services-4.jpg", alt: "Transport Services Image 4", buttonText: "Get a Quote" },
  ];

  const unpackingSetupImages = [
    { src: "/gallery/Unpacking & Setup.jpg", alt: "Unpacking Setup Image 1", buttonText: "See Process" },
    { src: "/gallery/Unpacking & Setup-2.jpg", alt: "Unpacking Setup Image 2", buttonText: "How We Set Up" },
    { src: "/gallery/Unpacking & Setup-3.jpg", alt: "Unpacking Setup Image 3", buttonText: "Unpacking Details" },
    { src: "/gallery/Unpacking & Setup-4.jpg", alt: "Unpacking Setup Image 4", buttonText: "Learn More" },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <GalleryCategory
        title="Plan Selection"
        description="View images of our different relocation plans and services offered to our clients."
        images={planSelectionImages}
      />
      <GalleryCategory
        title="Packing Process"
        description="Explore the process of how we pack and protect your belongings with care and professionalism."
        images={packingProcessImages}
      />
      <GalleryCategory
        title="Transport Services"
        description="Discover the reliable and secure transport services we offer for long-distance and local moves."
        images={transportServicesImages}
      />
      <GalleryCategory
        title="Unpacking & Setup"
        description="Check out how we assist with unpacking and setting up your new home or office."
        images={unpackingSetupImages}
      />
    </div>
  );
};

export default Gallerysection;
