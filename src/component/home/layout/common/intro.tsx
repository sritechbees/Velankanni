import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Introduction = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-4 lg:px-12">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <motion.div
          className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl font-bold mb-6">
            Your Trusted Moving Partner
          </h1>
          <p className="text-lg mb-8">
            Experience a smooth, hassle-free move with Velankanni Packers and
            Movers. From packing to delivery, we ensure everything is handled
            with care and professionalism.
          </p>
          <Link href="/our-plan">
          <motion.button
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform"
            whileHover={{ scale: 1.1 }}
          >
            Learn More
          </motion.button>
          </Link>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="lg:w-1/2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/image/pack1.jpg" // Replace with the correct image path
            alt="Velankanni Packers and Movers"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Introduction;
