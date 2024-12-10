import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-blue-700 to-gray-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo Section */}
        <div>
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
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li>
              <Link href="/home" className="text-sm hover:text-blue-500">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-sm hover:text-blue-500">About Us</Link>
            </li>
            <li>
              <Link href="/services" className="text-sm hover:text-blue-500">Our Services</Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm hover:text-blue-500">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Our Services Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Our Services</h3>
          <ul>
            <li>
              <Link href="/services" className="text-sm hover:text-blue-500">Household Shifting</Link>
            </li>
            <li>
              <Link href="/services" className="text-sm hover:text-blue-500">Office Relocation</Link>
            </li>
            <li>
              <Link href="/services" className="text-sm hover:text-blue-500">Car Transport</Link>
            </li>
          </ul>
        </div>
        
        {/* Contact Us Section */}
        <div>
  <h3 className="text-xl font-bold mb-4">Contact Us</h3>
  <p className="text-sm">Email: velankannipackersandmovers@gmail.com</p>
  <p className="text-sm">Phone: +91 88387 85354</p>
  <p className="text-sm">Address: No 1/103 Ramapuram (PO), Ramapuram (Vill), Krishnagiri, Pincode: 635115</p>
</div>
      </div>
      
      <div className="text-center text-sm mt-8">
  <hr className="border-t border-gray-300 mb-4" />
  <p>&copy; 2024 Velankanni Packers and Movers. All Rights Reserved.</p>
</div>

    </div>
  );
}

export default Footer;
