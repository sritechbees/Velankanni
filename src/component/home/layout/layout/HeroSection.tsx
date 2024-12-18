import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-blue-800 text-white h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-opacity-60 bg-black"></div>
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Reliable Packing and Moving Services You Can Trust
        </h1>
        <p className="text-lg md:text-xl mb-6">
          From your doorstep to your destination, we ensure a hassle-free relocation experience.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-md shadow-lg hover:bg-yellow-600">
            Get a Free Quote
          </button>
          <Link href="/contactus">
          <button className="px-6 py-3 bg-transparent border-2 border-yellow-500 text-yellow-500 font-bold rounded-md hover:bg-yellow-500 hover:text-white">
            Contact Us Now
          </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
