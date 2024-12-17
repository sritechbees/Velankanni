import Introduction from "@/component/home/layout/common/intro";
import Image from "next/image";
import { motion } from "framer-motion";
import ServiceCards from "@/component/home/layout/common/servicescards";
import Link from "next/link";
import App_layout from "@/component/home/layout/layout/App-layout";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 via-blue-400 to-blue-500">
 <App_layout>

      <div className="bg-[url('/about/about(1).png')] bg-cover bg-center text-gray-800 flex items-center justify-center px-6 py-32 mt-36 ">
        <div className="bg-white bg-opacity-15 rounded-lg shadow-lg p-5 text-center flex flex-col items-center justify-center">
          <Image
            src="/about/about(1).png"
            alt="Valankanni Packers and Movers"
            height={500}
            width={500}
            className="w-48 h-48 rounded-full mb-6 shadow-md"
          />
          <p className="font-bold text-3xl">
            Welcome to Valankanni Packers and Movers!
          </p>
        </div>
      </div>
      <div>
        <Introduction />
      </div>

      <div className="bg-gray-100 py-16 mx-auto max-w-7xl">
      <div className="container mx-auto max-w-7xl px-20">
        {/* Our Mission Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          {/* Left Section: Text Content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-blue-600 mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
            At Velankanni Packers and Movers, our mission is to make every relocation a seamless experience.
            We are dedicated to ensuring the safety, security, and timely delivery of your belongings.
            With a customer-first approach, we provide reliable and efficient moving solutions tailored
            to your needs. Our team of professionals strives for excellence in every move,
            ensuring stress-free transitions. Trust us to handle your possessions with care,
            offering peace of mind throughout the journey.
            </p>
            <Link href="/gallery">
              <motion.button
                className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-transform"
                whileHover={{ scale: 1.05 }}
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Section: Image */}
          <motion.div
            className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/gallery/Our Mission.jpg" // Replace with the correct image path
              alt="Our Mission"
              width={350}
              height={300}
              className="rounded-l-full w-[550px] h-[330px] shadow-lg"
            />
          </motion.div>
        </div>

        {/* Why Choose Us Section */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Side: Image */}
          <div
           data-aos="fade-right"
           data-aos-duration="1000" className="lg:w-1/2">
            <Image
              src="/gallery/Why Choose Us.jpg" // Replace with your image path
              alt="Why Choose Us"
              width={350}
              height={300}
              className="rounded-r-full w-[550px] h-[330px] shadow-lg "
            />
          </div>

          {/* Right Side: Description */}
          <div data-aos="fade-left"
          data-aos-duration="1000"
          className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0 text-center lg:text-left">
        
            <h2 className="text-4xl font-bold text-blue-700 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
            At Velankanni Packers and Movers, we prioritize customer satisfaction with top-notch,
            reliable services. Our experienced team ensures the safe handling and timely delivery
            of your belongings. We offer affordable pricing without compromising on quality.
            Equipped with advanced tools and techniques, we make your relocation smooth and hassle-free.
            Choose us for a trusted, professional moving experience tailored to your needs.
            </p>
            <Link
              href="/services" // Replace with your link path
              className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-shadow shadow-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>



      

      <div className="py-16 bg-gray-100 max-w-7xl mx-auto">
        <div className=" px-4 flex justify-center">
          <div
            className="w-full max-w-auto lg:w-3/4 bg-white shadow-lg rounded-lg p-8 border-0 
                 hover:border-4 hover:border-blue-600 transition duration-300 transform 
                 hover:scale-105 hover:shadow-xl flex flex-col lg:flex-row items-center 
                 lg:items-start"
          >
            {/* Rectangle Shape Container */}
            <div className="relative w-full lg:w-1/2">
              {/* Background Rectangle */}
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className="absolute inset-0 bg-blue-100 rounded-lg -rotate-3 scale-110 shadow-md"
              ></div>

              {/* Image Section */}
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className="relative z-10 w-full h-full"
              >
                <Image
                  src="/about/pack (2).jpg"
                  alt="Experience"
                  height={300}
                  width={300}
                  className="w-full h-auto rounded-lg shadow-md border-4 border-white"
                />
              </div>
            </div>

            {/* Description Section */}
            <div
              data-aos="fade-left"
              data-aos-duration="1200"
              className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0 lg:pl-8"
            >
              <h2 className="text-4xl font-bold mb-4 mt-10 text-gray-800">
                Our Experience
              </h2>
              <p className="text-lg text-gray-700 mb-6 ">
                With over 10 years of experience, Velankanni Packers and Movers
                have perfected the art of safe and efficient moving. Our team is
                dedicated to ensuring your belongings reach their destination on
                time and in perfect condition.
              </p>
              <div className="text-center lg:text-left">
                <Link href="/gallery">
                <button
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg 
                       hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 
                       transition duration-300"
                >
                  Learn More
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceCards />

      </App_layout>
    </div>
  );
};

export default AboutUs;
