import React, { useState } from "react";
import Image from "next/image";
import Header from "@/component/home/layout/header";

const ServiceCards = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const services = [
    {
      title: "Household Relocation",
      description: "Safe and secure packing and moving for all your household items.",
      image: "/image/Household Relocation.jpg", // Add appropriate image paths
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

  const handlePrev = () => {
    setCurrentCard((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <div className="bg-gray-100 mt-20">
      <Header/>
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h2>
        <div className="relative bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
          {/* Current Service Card */}
          <div>
            <Image
              src={services[currentCard].image}
              alt={services[currentCard].title}
              width={300}
              height={350}
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {services[currentCard].title}
            </h3>
            <p className="text-gray-600">{services[currentCard].description}</p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={handlePrev}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
