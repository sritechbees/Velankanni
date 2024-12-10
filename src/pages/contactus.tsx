import Footer from "@/component/home/layout/footer";
import Header from "@/component/home/layout/header";
import Image from "next/image";
import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission status

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission (you can integrate an API or email service here)
    console.log(formData);
    setIsSubmitted(true); // Show success message after submission
    setTimeout(() => setIsSubmitted(false), 5000); // Hide message after 5 seconds
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d]/g, ""); // Allow only digits
    if (value.length <= 14) {
      setFormData({ ...formData, phone: value });
    }
  };

  return (
    <div>
      <Header />
      <div>
        <Image
          src="/image/contact.png"
          alt="Velankanni Packers and Movers"
          width={500}
          height={400}
          quality={100}
          objectFit="cover"
          className="mt-32 w-full h-80"
        />
      </div>

      <div className="container mx-auto px-4 mt-36 relative">
        {/* Success Message */}
        {isSubmitted && (
          <div className="absolute top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg">
            <p>Your message has been sent successfully!</p>
          </div>
        )}

        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Left Side - Image Section */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <Image
              src="/image/contact-us-image.jpg" // Replace with the path to your relevant image
              alt="Velankanni Packers and Movers"
              width={500}
              height={400}
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side - Form Section */}
          <div className="w-full lg:w-1/2 bg-white shadow-lg p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>
            <p className="text-center text-sm text-gray-500 mb-4">
              Reach out to Velankanni Packers and Movers for a smooth and hassle-free experience in moving your goods. We&apos;re here to help!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                  maxLength={14}
                  placeholder="Enter 14-digit phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
