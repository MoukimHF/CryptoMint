import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import { BsDiscord } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav id="navbar" className="py-5">
        <div className="mx-5 lg:mx-12 xl:mx-16 2xl:mx-24">
          <div className="flex items-center justify-between h-16">
            <div>
              <h1 className="text-[#e13c33] text-2xl md:text-[40px] font-semibold">
                Crypto Clones
              </h1>
            </div>
            <div>
              <div className="hidden lg:block">
                <div className="flex items-center">
                  <Link to="navbar" smooth={true} duration={1000}>
                    <h1 className="text-[#e13c33] font-light text-lg mr-10 cursor-pointer border-b-2 border-[#e13c33]">
                      Home
                    </h1>
                  </Link>
                  <Link to="roadmap" smooth={true} duration={1000}>
                    <h1 className="text-[#e13c33] font-light text-lg mr-20 cursor-pointer hover:border-b-2 border-[#e13c33]">
                      Roadmap
                    </h1>
                  </Link>
                  <a href="#">
                    <BsDiscord className="text-white text-[2.5rem] mr-10" />
                  </a>
                  <a href="#">
                    <BsTwitter className="text-[#e13c33] text-[2.5rem]" />
                  </a>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="lg:hidden items-center justify-center p-2 rounded-md hover:text-white hover:bg-gray-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#e13c33]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-8 w-8 text-[#e13c33]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="" id="mobile-menu">
              <div className="pt-2 pb-3 space-y-1 text-center">
                <Link
                  to="navbar"
                  smooth={true}
                  duration={1000}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <p className="text-[#e13c33] text-lg md:text-2xl mt-8">
                    Home
                  </p>
                </Link>
                <Link
                  to="roadmap"
                  offset={-250}
                  smooth={true}
                  duration={1000}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <p className="text-[#e13c33] text-lg md:text-2xl my-8">
                    Roadmap
                  </p>
                </Link>
                <div className="flex justify-center items-center pb-10 border-b-2 border-[#e13c33]">
                  <a href="#">
                    <BsDiscord className="text-white text-3xl mr-10" />
                  </a>
                  <a href="#">
                    <BsTwitter className="text-[#e13c33] text-3xl" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </>
  );
};

export default Navbar;
