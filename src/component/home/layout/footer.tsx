import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-blue-700 to-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-wrap justify-between gap-8">
        {/* Logo Section */}
        <div className="flex-1 min-w-[220px]">
          <Link href="/home">
            <Image
              src="/image/logo22.png"
              alt="logo"
              height={200}
              width={200}
              className="h-24 w-32 rounded-full mt-10 ml-16 bg-white hover:bg-blue-600"
            />
          </Link>
        </div>

        {/* Quick Links Section */}
        <div className="flex-1 min-w-[220px]">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li>
              <Link href="/home" className="text-sm hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-sm hover:text-blue-500">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/our-plan" className="text-sm hover:text-blue-500">
                Our Plan
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-sm hover:text-blue-500">
                Services
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="text-sm hover:text-blue-500">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/clients" className="text-sm hover:text-blue-500">
                Clients
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm hover:text-blue-500">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex-1 min-w-[220px]">
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <ul>
            {/* Social Media Links */}
            <li>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-sm hover:text-blue-500"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-sm hover:text-blue-500"
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-sm hover:text-blue-500"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-sm hover:text-blue-500"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-sm hover:text-blue-500"
              >
                YouTube
              </Link>
            </li>
            <li>
              <Link
                href="https://snapchat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-sm hover:text-blue-500"
              >
                Snapchat
              </Link>
            </li>
            <li>
              <Link
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-sm hover:text-blue-500"
              >
                Pinterest
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="flex-1 min-w-[220px]">
  <h3 className="text-xl font-bold mb-4">Contact Us</h3>
  <ul className="">
    <li className="text-sm">Email: velankannipackersandmovers@gmail.com</li>
    <li className="text-sm">Phone: +91 88387 85354</li>
    <li className="text-sm">
      Address: No 1/103 Ramapuram (PO), Ramapuram (Vill), Krishnagiri, Pincode: 635115
    </li>
  </ul>
</div>

      </div>

      {/* Footer Bottom Section */}
      <div className="text-center text-sm mt-8">
        <hr className="border-t border-gray-300 mb-4" />
        <p>&copy; 2024 Velankanni Packers and Movers. All Rights Reserved.</p>
      </div>


      
    </div>
  );
}

export default Footer;
