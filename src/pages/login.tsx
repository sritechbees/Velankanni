
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import App_layout from "@/component/home/layout/layout/App-layout";
function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here (API integration or validation)
    console.log("Login Data:", formData);
  };

  return (
    <div>
      <App_layout>
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm mt-28">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 hover:shadow-md transition-all duration-200"
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don’t have an account?{" "}
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl"
      >
        {/* Left Side (Image and Registration Info) */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-gray-300 p-8 w-full md:w-1/2 flex flex-col items-center justify-center space-y-4"
        >
          <Image
            className="bg-white h-68 w-80 rounded-xl"
            src="/about/register design.svg"
            alt="Register"
            height={150}
            width={150}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-900 text-lg font-semibold"
          >
            Don&apos;t Have An Account?
          </motion.p>
          <motion.h5
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-gray-900 text-md"
          >
            Get Started By Creating Your New Account
          </motion.h5>
          <Link href="/contactus">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
            >
              Register
            </motion.button>
          </Link>
        </motion.div>

        {/* Right Side (Login Form) */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="p-8 w-full md:w-1/2 flex flex-col items-center justify-center space-y-4"
        >
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-700 text-2xl font-semibold"
          >
            Welcome Back!
          </motion.h3>
          <h5 className="text-gray-600 text-md">We Are Happy To Have You Back</h5>
          <motion.input
            type="text"
            placeholder="Email or Phone Number"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="password"
            placeholder="Password"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            whileFocus={{ scale: 1.02 }}
          />
          <h6 className="text-right text-gray-500 text-sm hover:text-blue-600 cursor-pointer">
            Forgot password?
          </h6>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </motion.button>

          <p className="text-center text-gray-500 text-sm mt-2">
            <span className="px-2">Or</span>
          </p>

          <div className="flex justify-center space-x-4 mt-4">
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex items-center justify-center p-2 bg-white border border-gray-300 rounded-full cursor-pointer"
            >
              <Image
                src="/about/icons8-google-logo.svg"
                alt="Google"
                height={30}
                width={30}
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex items-center justify-center p-2 bg-white border border-gray-300 rounded-full cursor-pointer"
            >
              <Image
                src="/about/icons8-apple-logo.svg"
                alt="Apple"
                height={30}
                width={30}
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex items-center justify-center p-2 bg-white border border-gray-300 rounded-full cursor-pointer"
            >
              <Image src="/about/fb.png" alt="Facebook" height={30} width={30} />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
    </App_layout>
    </div>
  );
}

export default LoginForm;
