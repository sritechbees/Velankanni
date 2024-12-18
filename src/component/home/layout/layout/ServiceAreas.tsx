import { motion } from "framer-motion";

export default function ServiceAreas() {
  const locations = [
    "Tamil Nadu",
    "Kerala",
    "Karnataka",
    "Andhra Pradesh",
    "Telangana",
    "Puducherry",
    "Goa",
    "Maharashtra",
  ];

  return (
    <section className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Service Areas
        </h2>
        <p className="text-center text-gray-600 mb-8">
          We provide services in major cities across India to ensure a smooth
          relocation experience.
        </p>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {locations.map((location, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 p-4 shadow-md rounded-lg text-center group cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3 className="text-lg font-bold text-blue-600 group-hover:text-blue-800 transition-colors duration-300">
                {location}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
