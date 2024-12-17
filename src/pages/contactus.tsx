
import App_layout from "@/component/home/layout/layout/App-layout";
import Image from "next/image";
import { useState } from "react";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [categories, setCategories] = useState("");
  const [moveDate, setMoveDate] = useState("");
  const [moveFrom, setMoveFrom] = useState("");
  const [moveTo, setMoveTo] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    setName("");
    setPhone("");
    setEmail("");
    setCategories("");
    setMoveDate("");
    setMoveFrom("");
    setMoveTo("");
    setMessage("");
  };  

  return (
    <div>
     <App_layout>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-40">
  <div className="bg-white shadow-lg rounded-lg w-full max-w-6xl flex flex-wrap">
    {/* Left Side (Image Section) */}
    <div className="w-full md:w-1/2">
      <Image
        src="/about/contactt.png"
        height={200} 
        width={200}
        alt="Velankanni Packers and Movers"
        className="w-[490px] h-[889px] rounded-l-lg"
      />
    </div>

    {/* Right Side (Contact Form) */}
    <div className="w-full md:w-1/2 p-6 bg-blue-50 flex flex-col justify-center space-y-6">
      <h2 className="text-3xl font-semibold text-blue-600">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-lg text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-lg text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-lg text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Categories Field */}
        <div>
          <label
            htmlFor="categories"
            className="block text-lg text-gray-700"
          >
            Categories
          </label>
          <select
            id="categories"
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category</option>
            <option value="Household">Household</option>
            <option value="Office">Office</option>
            <option value="Vehicle">Vehicle</option>
          </select>
        </div>

        {/* Move Date Field */}
        <div>
          <label htmlFor="moveDate" className="block text-lg text-gray-700">
            Move Date
          </label>
          <input
            type="date"
            id="moveDate"
            value={moveDate}
            onChange={(e) => setMoveDate(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Move From and Move To Fields */}
        <div className="flex space-x-4">
          <div className="flex-1">
            <label htmlFor="moveFrom" className="block text-lg text-gray-700">
              Move From
            </label>
            <input
              type="text"
              id="moveFrom"
              value={moveFrom}
              onChange={(e) => setMoveFrom(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your current location"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="moveTo" className="block text-lg text-gray-700">
              Move To
            </label>
            <input
              type="text"
              id="moveTo"
              value={moveTo}
              onChange={(e) => setMoveTo(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your destination"
            />
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-lg text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your message"
            rows={4}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</div>








      <div className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <h2 className="text-4xl font-extrabold text-center tracking-wide mb-8 text-blue-600">
            Other Ways to Reach Us
          </h2>

          {/* Google Map */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31109.49018376191!2d78.19993853022461!3d12.519676384274428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bacdb58019a7f27%3A0x7f5cf983c75967a4!2sRamapuram%2C%20Krishnagiri%2C%20Tamil%20Nadu%20635115!5e0!3m2!1sen!2sin!4v1699171364728!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96"
            ></iframe>
          </div>

         <div
            className="bg-white mt-16 shadow-lg rounded-lg p-6 mt-6 text-center lg:text-left"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Image Section */}
            <div
              className="flex justify-center ml-[13px] lg:justify-start"
              data-aos="zoom-in"
              data-aos-duration="1200"
            >
              <Image
                src="/gallery/visiting card.jpeg"
                height={400}
                width={300} // Add your path or image URL here
                alt="Visiting Card"
                className="w-[1075px] h-72 rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      </App_layout>
    </div>
  );
}
