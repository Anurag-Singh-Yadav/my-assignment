import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import Image from "next/image";
const Footer = () => {
  return (
    <section className="relative overflow-hidden bg-white py-8">
      <div className="container relative z-10 mx-auto px-4">
        <div className="-m-8 flex flex-wrap items-center justify-center md:justify-between">
          <div className="w-auto ml-4 md:ml-0 p-4 lg:p-8">
            <a href="#">
              <div className="inline-flex items-center">
                <Image
                width={30}
                height={30}
                  src="https://groww.in/groww-logo-270.png"
                  alt="groww image"
                  className="w-8 h-8"
                />
                <span className="ml-4 text-lg font-bold">Groww Cart.</span>
              </div>
            </a>
          </div>
          <div className="w-auto ml-4 md:ml-0 p-4 md:p-8">
            
            <span className="ml-2 text-md font-medium">
              Built with{" "}
              <span role="img" aria-label="heart">
                ❤️
              </span>{" "}
              by Anurag
            </span>
          </div>
          <div className="w-auto ml-4 md:ml-0 p-4 lg:p-8">
            <div className="-m-1.5 flex flex-wrap">
              <div className="w-auto p-1.5">
              <IoLogoInstagram size={25}/>
              </div>
              <div className="w-auto p-1.5">
              <CiFacebook size={25}/>
              </div>

              <div className="w-auto p-1.5">
              <CiLinkedin size={25}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
