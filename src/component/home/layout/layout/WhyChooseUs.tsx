import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Experienced Professionals",
      description: "We have skilled movers to handle your belongings.",
      image: "/about/Experienced Professionals.png", // Replace with the correct image path
    },
    {
      title: "Cost-Effective Solutions",
      description: "Transparent pricing with no hidden charges.",
      image: "/about/download.png", // Replace with the correct image path
    },
    {
      title: "Fast & Secure Services",
      description: "Quick delivery with utmost safety measures.",
      image: "/about/Fast & Secure Services.png", // Replace with the correct image path
    },
    {
      title: "24/7 Customer Support",
      description: "Round-the-clock assistance for your needs.",
      image: "/about/247 Customer Support.jpg", // Replace with the correct image path
    },
  ];

  return (
    <section className="py- bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Velankanni Packers and Movers?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Image
                src={feature.image} height={200} width={200}
                alt={feature.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
