import Header from "@/component/home/layout/header";
import React from "react";
import Image from "next/image"; // Importing Next.js Image component for optimized image loading
import Footer from "@/component/home/layout/footer";

const OurPlan = () => {
  return (
    <div>
      <Header />
      <section className="bg-gradient-to-r from-blue-500 via-teal-400 to-blue-500 py-12 mt-32">
        <div className="container mx-auto px-4">
          <h2 data-aos="fade-up"
          data-aos-delay="100" className="text-3xl font-bold text-center text-white mb-8">
            Our Plan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {/* Goal Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
              <Image
                src="/about/Customer Satisfaction.jpg" // Replace with actual image path
                alt="Customer Satisfaction"
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-4 text-center text-blue-600">
                Customer Satisfaction
              </h3>
              <p className="text-gray-700 text-center">
                We prioritize providing a seamless and stress-free moving
                experience for our clients, ensuring their satisfaction every
                step of the way.
              </p>
            </div>
            {/* Goal Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
              <Image
                src="/about/Affordable Services.jpg" // Replace with actual image path
                alt="Affordable Services"
                width={100}
                height={200}
                className="w-full h-48   object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-4 text-center text-blue-600">
                Affordable Services
              </h3>
              <p className="text-gray-700 text-center">
                Our goal is to offer top-notch relocation services at competitive
                prices without compromising on quality.
              </p>
            </div>
            {/* Goal Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
              <Image
                src="/about/Expanding Reach.jpg" // Replace with actual image path
                alt="Expanding Reach"
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-4 text-center text-blue-600">
                Expanding Reach
              </h3>
              <p className="text-gray-700 text-center">
                We plan to extend our services to new locations, making moving
                easier for clients across India and beyond.
              </p>
            </div>
            {/* Goal Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
              <Image
                src="/about/On-Time Delivery.jpg" // Replace with actual image path
                alt="On-Time Delivery"
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-4 text-center text-blue-600">
                On-Time Delivery
              </h3>
              <p className="text-gray-700 text-center">
                Ensuring timely delivery is our top priority, providing our
                clients with reliability and peace of mind.
              </p>
            </div>
            {/* Goal Card 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
              <Image
                src="/about/Safe & Secure Transport.jpg" // Replace with actual image path
                alt="Safe & Secure Transport"
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-4 text-center text-blue-600">
                Safe & Secure Transport
              </h3>
              <p className="text-gray-700 text-center">
                We take extra care to ensure all items are transported safely,
                offering protection against any damages during the process.
              </p>
            </div>
            {/* Goal Card 6 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
              <Image
                src="/about/Advanced Technology.jpg" // Replace with actual image path
                alt="Advanced Technology"
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-4 text-center text-blue-600">
                Advanced Technology
              </h3>
              <p className="text-gray-700 text-center">
                We embrace modern technology to optimize logistics, making the
                relocation process faster and more efficient.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default OurPlan;
