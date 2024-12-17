import React, { useState } from "react";
import Image from "next/image";
import Header from "@/component/home/layout/header";

const ServiceCards = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const services = [
    {
      title: "Household Relocation",
      description: "Safe and secure packing and moving for all your household items.",
      image: "/image/Household Relocation.jpg",
    },
    {
      title: "Office Relocation",
      description: "Efficient and reliable office moving services tailored to your needs.",
      image: "/image/Office Relocation.jpg",
    },
    {
      title: "Car Transportation",
      description: "Hassle-free car transportation with utmost care and professionalism.",
      image: "/image/Car Transportation.jpg",
    },
    {
      title: "Warehouse Storage",
      description: "Spacious and secure storage solutions for your belongings.",
      image: "/image/Warehouse Storage.jpg",
    },
    {
      title: "International Moving",
      description: "Expert assistance for seamless international relocations.",
      image: "/image/International Moving.jpg",
    },
    {
      title: "Packing Services",
      description: "High-quality packing materials to ensure item safety.",
      image: "/image/packing Services.jpg",
    },
    {
      title: "Loading & Unloading",
      description: "Skilled professionals for safe loading and unloading services.",
      image: "/image/Loading & Unloading.jpg",
    },
    {
      title: "Pet Relocation",
      description: "Careful and compassionate relocation for your pets.",
      image: "/image/Pet Relocation.jpg",
    },
    {
      title: "Bike Transportation",
      description: "Secure and timely transportation of bikes to any location.",
      image: "/image/Bike.jpg",
    },
  ];

  const handleNext = () => {
    setCurrentCard((prev) => (prev + 1) % services.length);
  };

  const handlePrevious = () => {
    setCurrentCard((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <div className="bg-gray-100 py-20">
      <Header />
      <div className="max-w-7xl mx-auto px-4 lg:flex lg:items-center">
      

       
          {/* Right Side: Service Cards */}
        
        <div className="lg:w-1/2 flex flex-col items-center">
          <div className="flex-grow max-w-lg p-6 bg-white shadow-lg rounded-lg">
            <Image
              src={services[currentCard].image}
              alt={services[currentCard].title}
              width={400}
              height={300}
              className="mx-auto mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {services[currentCard].title}
            </h3>
            <p className="text-gray-600">{services[currentCard].description}</p>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-6 flex space-x-4">
            <button
              onClick={handlePrevious}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 shadow-lg"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 shadow-lg"
            >
              Next
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 bg-white shadow-lg rounded-lg p-8 mb-8 lg:mb-0 lg:mr-6">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Welcome to Velankanni Packers and Movers
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At Velankanni Packers and Movers, we are dedicated to providing seamless moving
            solutions for all your needs. With years of experience and a team of
            professionals, we ensure that your belongings are handled with care and
            transported securely.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether it&apos;s household relocation, office shifting, or car transportation,
            our comprehensive services cater to both local and international moves.
            Experience hassle-free moving with Velankanni Packers and Movers!
          </p>
        </div>

      </div>
      <div
              className="flex justify-center max-w-7xl mx-auto ml-[100px] mt-16 lg:justify-start"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <Image
                src="/gallery/visiting card.jpeg"
                height={400}
                width={300} // Add your path or image URL here
                alt="Visiting Card"
                className="w-[1075px] h-72 rounded-lg shadow-md"
              />
            </div>
    </div>
  );
};

export default ServiceCards;
