import Header from "@/component/home/layout/header";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/component/home/layout/footer";

function Testimonials() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true, // Animation happens only once while scrolling
    });
  }, []);

  const testimonials = [
    {
      name: "Hariprasath",
      feedback:
        "Velankanni Packers and Movers made my relocation stress-free and seamless. Highly recommend their services",
      location: "Krishnagiri",
      image: "/about/hari.jpeg",
    },
    {
      name: "Mohan",
      feedback:
        "Professional and efficient service. They handled all my items with great care. Kudos to the team",
      location: "Vellore",
      image: "/about/mohan.png",
    },
    {
      name: "Jai Prakash",
      feedback:
        "Affordable rates and excellent service. Velankanni Packers and Movers are the best in the business.",
      location: "Chennai",
      image: "/about/jai.png",
    },
    {
      name: "Priyanka",
      feedback:
        "The team was punctual and very friendly. They made the moving process so much easier. Highly recommended",
      location: "Madurai",
      image: "/about/priyanka.png",
    },
    {
      name: "Arya",
      feedback:
        "They were incredibly professional and ensured all my items were delivered safely. Great job",
      location: "Trichy",
      image: "/about/Arya.png",
    },
    {
      name: "Suganthi",
      feedback:
        "Amazing service! They went above and beyond to make my move smooth and stress-free.",
      location: "Salem",
      image: "/about/suganthi.png",
    },
  ];

  return (
    <div>
      <Header />
      <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 py-16">
        <div className="max-w-6xl mx-auto px-4 mt-28">
          <h2
            className="text-center text-4xl font-extrabold text-white mb-12 tracking-wide"
            data-aos="fade-down"
          >
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 p-8 
                rounded-xl shadow-lg hover:bg-gradient-to-br hover:from-blue-400 hover:via-purple-500 hover:to-pink-500
                hover:shadow-2xl transition-all duration-300"
                data-aos="flip-left"
              >
                <div className="flex flex-col items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    height={100}
                    width={100}
                    className="w-24 h-24 rounded-full object-cover border-4 border-orange-500 mb-6"
                  />
                  <h3
                    className="text-2xl font-bold text-gray-800 mb-2"
                    data-aos="fade-right"
                  >
                    {testimonial.name}
                  </h3>
                  <p
                    className="text-sm font-medium text-gray-600 mb-4"
                    data-aos="fade-left"
                  >
                    {testimonial.location}
                  </p>
                </div>
                <p
                  className="text-gray-700 text-center italic text-lg leading-relaxed"
                  data-aos="zoom-in"
                >
                  &quot;{testimonial.feedback}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Testimonials;
