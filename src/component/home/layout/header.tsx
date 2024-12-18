import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";


function Header() {
  const router = useRouter();

  return (
    <div>
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-800 via-blue-700 to-gray-900 shadow-md z-50">
        {/* Logo Section */}
        <div className="flex items-center justify-between p-4">

          <div>
          <Link href="/home">
            <Image
              src="/image/logo222.png"
              alt="logo"
              height={200}
              width={200}
              className="h-24 w-32  ml-16 rounded-2xl bg-white hover:bg-blue-600"
            />
             </Link>
          </div>
         

          {/* Navigation Section */}
          <nav>
            <ul className="flex ml-[350px] text-white space-x-6 text-gray-700">
              {[
                { name: "Home", href: "/home" },
                { name: "About Us", href: "/about" },
                { name: "Our Plan", href: "/our-plan" },
                { name: "Services", href: "/services" },
                { name: "Gallery", href: "/gallery" },
                { name: "Clients", href: "/clients" },
                { name: "Contact Us", href: "/contactus" },
              ].map((item) => (
                <li
                  key={item.href}
                  className={`cursor-pointer ${
                    router.pathname === item.href
                      ? "text-blue-500 font-bold"
                      : "hover:text-blue-500"
                  }`}
                >
                  <Link href={item.href} scroll={false}>
                    {item.name}
                  </Link>
                </li>
                
              ))}
            </ul>
            
          </nav>

          {/* Login Button */}
          <Link href="/login">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-1">
              Login
            </button>
          </Link>
        </div>
      </div>
   
    </div>
  );
}

export default Header;
