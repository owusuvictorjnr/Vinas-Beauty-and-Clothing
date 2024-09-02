import Link from "next/link";
import React from "react";
import { FaFacebookF, FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="min-h-52 bg-neutral-200 pb-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 container mx-auto pt-32 capitalize">
          <div className="space-y-5">
            <h1 className="font-bold text-xl text-center">about us</h1>

            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              vel voluptatum quibusdam animi itaque repellat quaerat nesciunt
              quis doloribus voluptatem.
            </p>

            {/* socios */}
            <div className="flex space-x-5 justify-center gap-10">
              <p className="">
                <FaFacebookF size={25} />
              </p>
              <p className="">
                <FaYoutube size={25} />
              </p>

              <p className="">
                <FaTiktok size={25} />
              </p>

              <p className="">
                <FaInstagram size={25} />
              </p>
            </div>
          </div>

          <div className="text-center space-y-5">
            <h1 className="font-bold text-xl text-center">quick link</h1>
          </div>

          <div className="text-center space-y-5">
            <h1 className="font-bold text-xl text-center">information</h1>

            <div className="flex flex-col space-y-5 w-full">
              <div className="">
                <h1 className="">
                  <Link href="#" className="hover:text-blue-400 w-full ">
                    contact us
                  </Link>
                </h1>
              </div>

              <div className="">
                <h1 className="">
                  <Link
                    href="#"
                    className=" transition-colors hover:text-blue-400"
                  >
                    about us
                  </Link>
                </h1>
              </div>

              <div className="">
                <h1 className="">
                  <Link
                    href="#"
                    className="transition-colors hover:text-blue-400"
                  >
                    service
                  </Link>
                </h1>
              </div>

              <div className="">
                <h1 className="">
                  <Link
                    href="#"
                    className="transition-colors hover:text-blue-400"
                  >
                    faq
                  </Link>
                </h1>
              </div>
            </div>
          </div>

          <div className="">
            <h1 className="font-bold text-xl text-center">policies</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
