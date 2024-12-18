
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import App_layout from "@/component/home/layout/layout/App-layout";

type PlanType = "Basic" | "Standard" | "Premium";
type GoalCardProps = {
  image: string; // URL or path to the image
  title: string; // Title text
  description: string; // Description text
  aosEffect?: string; // Optional prop for animation effect
  aosDelay?: string; // Optional prop for animation delay
};

type PlanCardProps = {
  title: string;
  description: string;
  features: string[]; // Assuming features is an array of strings
  onClick: () => void; // Assuming onClick is a function with no arguments and no return value
  selected: boolean; // Assuming selected is a boolean
  aosDelay?: string; // Optional prop
};


// Reusable Goal Card Component
const GoalCard: React.FC<GoalCardProps> = ({ image, title, description, aosEffect, aosDelay }) => (
  <div
    data-aos={aosEffect}
    data-aos-delay={aosDelay}
    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
  >
    <Image
      src={image}
      alt={title}
      width={200}
      height={200}
      className="w-full h-48 object-cover rounded-t-lg mb-4"
    />
    <h3 className="text-xl font-semibold mb-4 text-center text-blue-600">
      {title}
    </h3>
    <p className="text-gray-700 text-center">{description}</p>
  </div>
);

// Reusable Plan Card Component
const PlanCard: React.FC<PlanCardProps> = ({ title, description, features, onClick, selected, aosDelay }) => (
  <div
    onClick={onClick}
    data-aos="fade-up"
    data-aos-delay={aosDelay}
    className={`bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:cursor-pointer hover:bg-blue-50 ${selected ? 'bg-blue-50' : ''}`}
  >
    <h4 className={`text-xl font-semibold mb-4 ${selected ? 'hover:bg-blue-600 hover:text-white py-1 px-2 rounded' : ''}`}>
      {title}
    </h4>
    <p className="text-gray-700 mb-4  ">{description}</p>
    <ul className="list-disc pl-5 mb-4">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <button className="bg-blue-600 text-white py-2 px-4 rounded-full transform transition duration-300 hover:bg-blue-800 hover:scale-105">
      Select Plan
    </button>
  </div>
);

const OurPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState<PlanType | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-out-back", once: true });
  }, []);

  const handleCardClick = (plan: PlanType) => setSelectedPlan(plan);

  return (
    <div>
      <App_layout>
      <section className="bg-gray-100 py-12 mt-32">
        <div className="max-w-6xl mx-auto px-4">
          {/* Title */}
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl font-extrabold text-center text-blue-500 mb-10">
            Our Plan
          </h2>

          {/* Goal Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
  {
    image: "/about/Customer Satisfaction.jpg",
    title: "Customer Satisfaction",
    description: "We prioritize providing a seamless and stress-free moving experience for our clients, ensuring their satisfaction every step of the way.",
    aosEffect: "fade-up",
    aosDelay: 200,
  },
  {
    image: "/about/Affordable Services.jpg",
    title: "Affordable Services",
    description: "Our goal is to offer top-notch relocation services at competitive prices without compromising on quality.",
    aosEffect: "zoom-in",
    aosDelay: 300,
  },
  {
    image: "/about/Expanding Reach.jpg",
    title: "Expanding Reach",
    description: "We plan to extend our services to new locations, making moving easier for clients across India and beyond.",
    aosEffect: "fade-left",
    aosDelay: 400,
  },
  {
    image: "/about/On-Time Delivery.jpg",
    title: "On-Time Delivery",
    description: "Ensuring timely delivery is our top priority, providing our clients with reliability and peace of mind.",
    aosEffect: "flip-left",
    aosDelay: 500,
  },
  {
    image: "/about/Safe & Secure Transport.jpg",
    title: "Safe & Secure Transport",
    description: "We take extra care to ensure all items are transported safely, offering protection against any damages during the process.",
    aosEffect: "zoom-in-up",
    aosDelay: 600,
  },
  {
    image: "/about/Advanced Technology.jpg",
    title: "Advanced Technology",
    description: "We embrace modern technology to optimize logistics, making the relocation process faster and more efficient.",
    aosEffect: "fade-right",
    aosDelay: 700,
  },
].map((goal, index) => (
  <GoalCard key={index} {...{ ...goal, aosDelay: goal.aosDelay.toString() }} />
))}

          </div>
        </div>

        {/* Why Choose Section */}
        <div className="max-w-6xl bg-gray-100 mx-auto mt-16 mb-10 px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-5">Why Choose Velankanni Packers and Movers</h2>
          <p className="text-lg text-gray-600 mb-4">
            We offer top-notch services with key features that make us the best choice for your relocation needs.
          </p>

          <h3 className="text-3xl font-bold text-blue-500 mb-8">Choose Your Plan</h3>

          {/* Plan Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
  {
    title: "Basic Plan",
    description: "A simple, affordable solution for small moves. Ideal for those who need just the basics.",
    features: ["Basic Packing", "Local Moves", "Standard Transport"],
    aosDelay: 100,
  },
  {
    title: "Standard Plan",
    description: "A comprehensive option for mid-sized moves, including additional services for convenience.",
    features: ["Full Packing Service", "Long-Distance Moves", "On-Time Delivery"],
    aosDelay: 200,
  },
  {
    title: "Premium Plan",
    description: "For the ultimate relocation experience, with top-tier services and extra care for your belongings.",
    features: ["VIP Packing Service", "Global Moves", "Insurance Coverage"],
    aosDelay: 300,
  },
].map((plan, index) => (
  <PlanCard
    key={index}
    {...{ ...plan, aosDelay: plan.aosDelay.toString() }} // Convert aosDelay to string
    onClick={() => handleCardClick(plan.title as PlanType)}
    selected={selectedPlan === (plan.title as PlanType)}
  />
))}

          </div>
        </div>
      </section>
      </App_layout>
    </div>
  );
};

export default OurPlan;
