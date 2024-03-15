import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white p-4 border-b">
      <div className="flex items-center">
        <Image
          width={50}
          height={50}
          src="https://groww.in/groww-logo-270.png"
          alt="groww image"
          className="w-8 h-8"
        />
        <div className="ml-4">
          <h1 className="hidden sm:block md:text-xl font-bold text-black">
            Ecommerce Cart - Groww
          </h1>
        </div>
      </div>
      <div>

      </div>
    </header>
  );
};

export default Navbar;
