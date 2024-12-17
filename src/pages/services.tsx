import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import Link from "next/link";
import App_layout from "@/component/home/layout/layout/App-layout";

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  const services = [
    { id: 1, title: "Home Relocation", description: "Efficient and secure home relocation services.", icon: "/image/Household Relocation.jpg" },
    { id: 2, title: "Office Shifting", description: "Professional office relocation with minimal downtime.", icon: "/image/Office Relocation.jpg" },
    { id: 3, title: "Packing Services", description: "Top-notch packing solutions for all your belongings.", icon: "/image/packing Services.jpg" },
    { id: 4, title: "Loading & Unloading", description: "Safe and hassle-free loading and unloading services.", icon: "/image/Loading & Unloading.jpg" },
    { id: 5, title: "Car Transport", description: "Seamless transportation of your vehicles.", icon: "/image/Car Transportation.jpg" },
    { id: 6, title: "Warehouse Storage", description: "Secure storage facilities for your items.", icon: "/image/Warehouse Storage.jpg" },
    { id: 7, title: "International Relocation", description: "Global relocation solutions tailored to your needs.", icon: "/image/International Moving.jpg" },
    { id: 8, title: "Bike Transportation", description: "Secure and timely transportation of bikes to any location.", icon: "/image/Bike.jpg" },
    { id: 9, title: "Pet Relocation", description: "Safe and comfortable relocation for your pets.", icon: "/image/Pet Relocation.jpg" },
  ];

  return (
    <div>
      <App_layout>
      <div className="relative bg-gray-100 mt-28">
        {/* Hero Section */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 py-20">
          {/* Text Section */}
          <div
            className="bg-white p-8 rounded-lg shadow-lg lg:max-w-md"
            data-aos="fade-right"
          >
            <h1 className="text-4xl font-bold text-blue-700 mb-4">
              Quick And Secure Move Is Our Promise
            </h1>
            <p className="text-gray-600 mb-6">
              Get your move where you need it. Use Velankanni Packers and Movers.
            </p>
            <Link href="/login">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition-transform transform hover:scale-105">
                ORDER MOVING ➡
              </button>
            </Link>
          </div>

          {/* Image Section */}
          <div
            className="mt-10 lg:mt-0 lg:ml-8"
            data-aos="fade-left"
          >
            <Image
              src="/image/packk1.jpg" // Replace with the correct image path
              alt="Packers and Movers"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Contact Information Section */}
        <div
          className="bg-blue-700 text-white flex flex-col lg:flex-row items-center justify-between py-4 px-4 lg:px-8"
          data-aos="fade-up"
        >
          <div className="mb-4 lg:mb-0">
            <p>
              Email Us Now:{" "}
              <a
                href="mailto:velankannipackersandmovers@gmail.com"
                className="underline"
              >
                velankannipackersandmovers@gmail.com
              </a>
            </p>
          </div>
          <div>
            <p>Open Hours: Monday-Saturday 10am to 6pm, Sunday Closed</p>
          </div>
        </div>

        {/* Services Section */}
        <div className="container mx-auto py-16 px-4 lg:px-8">
          <h2
            className="text-3xl font-bold text-center text-blue-700 mb-8"
            data-aos="fade-up"
          >
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
                data-aos="zoom-in"
              >
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={250}
                    height={250}
                    className="transform hover:scale-110 transition-all"
                  />
                </div>
                <h3 className="text-xl text-center font-semibold text-blue-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </App_layout>
    </div>
  );
};

export default ServicesSection;
