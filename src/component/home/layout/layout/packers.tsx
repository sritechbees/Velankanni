import Head from 'next/head';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Packers() {
  // Initialize AOS only on the client-side
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Head>
        <title>Velankanni | Packers and Movers</title>
        <meta name="description" content="Step-by-step guide to how our packing and moving services work." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-50 py-16 sm:px-6 lg:px-8">
        <section className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-bold text-center text-gray-900 mb-8"
            data-aos="fade-down"
          >
            Our Moving Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-8">
  {[
    {
      step: 1,
      title: "Book a Move",
      description:
        "Contact us online or call our customer service team to schedule your move. Provide us with all the details about the date, destination, and size of your move.",
      animation: "fade-up",
      delay: 100,
    },
    {
      step: 2,
      title: "Packing & Preparation",
      description:
        "Our team arrives at your location to pack your belongings securely. We use high-quality materials and professional techniques to ensure everything is well-protected.",
      animation: "fade-up",
      delay: 200,
    },
    {
      step: 3,
      title: "Safe Transport",
      description:
        "Your items are carefully loaded into our well-equipped trucks and transported to your new destination. Our drivers ensure the safest and fastest route.",
      animation: "zoom-in",
      delay: 300,
    },
    {
      step: 4,
      title: "Unpacking & Setup",
      description:
        "Once at the destination, we carefully unload your items and help unpack them. We can also assist with setting up furniture and organizing your new space.",
      animation: "fade-down",
      delay: 400,
    },
    {
      step: 5,
      title: "Final Check & Customer Satisfaction",
      description:
        "After everything is set up, we conduct a final walk-through to ensure everything is in place and that you're satisfied with the service.",
      animation: "slide-right",
      delay: 500,
    },
    {
      step: 6,
      title: "Ongoing Support",
      description:
        "We provide ongoing support even after the move. Should you need any further assistance or adjustments, our team is always here to help.",
      animation: "slide-left",
      delay: 600,
    },
  ].map(({ step, title, description, animation, delay }) => (
    <div
      key={step}
      className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-2"
      data-aos={animation}
      data-aos-delay={delay}
    >
      <div className="flex items-center justify-center mb-4">
        <div className="h-16 w-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-semibold">
          {step}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-center text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-4 text-center">{description}</p>
    </div>
  ))}
</div>
 </section>



 <div className="p-10 mt-16 max-w-6xl mx-auto rounded-lg flex flex-col lg:flex-row text-justify justify-between items-center bg-gray-100">
  {/* Image Section */}
  <div
    data-aos="fade-left"
    data-aos-offset="100"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    className="w-full lg:w-1/2 max-w-full px-4 mt-10 lg:mt-0 flex justify-center"
  >
    <Image
      className="rounded-2xl"
      src="/packers step.svg"
      width={500}
      height={500}
      alt="Step-by-Step Process"
    />
  </div>

  {/* Text Section */}
  <div
    data-aos="fade-right"
    data-aos-offset="100"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    className="w-full lg:w-1/2 max-w-full lg:max-w-[545px] px-4"
  >
    <h5 className="text-2xl font-semibold pb-1">Step-by-Step Process</h5>
    <h2 className="text-base font-playfair lg:text-lg">
      At Velankanni Packers and Movers, we prioritize seamless relocation experiences. 
      Here’s how we ensure your move is handled professionally and efficiently:
    </h2>
    <ul className="list-disc mt-4 pl-5 space-y-3 text-gray-700">
      <li>
        <strong>Step 1: Schedule Your Move</strong> – Contact us to book your move. Share your moving details, and we’ll handle the rest.
      </li>
      <li>
        <strong>Step 2: Packing</strong> – Our team carefully packs all your items using high-quality materials to ensure maximum safety.
      </li>
      <li>
        <strong>Step 3: Transportation</strong> – Your belongings are loaded into secure trucks for safe transport to the destination.
      </li>
      <li>
        <strong>Step 4: Unpacking</strong> – We unload and unpack your items at your new location, ensuring everything is in place.
      </li>
      <li>
        <strong>Step 5: Post-Move Support</strong> – Need assistance after the move? We’re here to help with any additional requirements.
      </li>
    </ul>
    <p className="mt-4 text-gray-700">
      With Velankanni Packers and Movers, you can trust us to make your relocation stress-free, efficient, and tailored to your needs.
    </p>
  </div>
</div>









        <div 
  className="flex flex-col md:flex-row justify-between items-center gap-10 p-6 md:px-20 border shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 hover:bg-gradient-to-l hover:from-blue-200 hover:to-blue-300 transition-all duration-500 ease-in-out transform hover:scale-105 mt-16"
  data-aos="fade-up"
  data-aos-duration="1000"
>
  <div>
    <p className="font-semibold text-2xl lg:text-3xl text-gray-800">
      Reliable Packers & Movers @ <span className="text-blue-600">Affordable Rates</span>
    </p>
    <p className="mt-4 lg:text-lg text-gray-700">
      Need professional, customer-focused packing and moving services? Call us now!
    </p>
    <div className="flex items-center gap-2 mt-4">
      <Image 
        className="h-10 w-10 lg:h-12 lg:w-12" 
        src={"/about/WhatsApp1.png"} 
        alt="WhatsApp" 
        height={50} 
        width={50} 
      />
      <p className="underline text-blue-600 text-xl lg:text-2xl font-semibold">
        +91 88387 85354
      </p>
    </div>
  </div>
  <Link href="/login">
    <p className="bg-blue-600 hover:bg-blue-700 rounded-full text-center font-semibold text-white p-3 lg:p-5 w-32 lg:w-48 shadow-md hover:shadow-lg transition duration-300">
      BOOK NOW
    </p>
  </Link>
</div>



      </main>
    </>
  );
}
