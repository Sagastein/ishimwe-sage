import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  <Link smooth duration={500}></Link>;
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${
        isScrolled ? "bg-slate-900 text-white" : "bg-transparent"
      } sticky top-0 min-w-full  z-50 transition-all duration-500 ease-in-out`}
    >
      <div className="w-11/12 relative mx-auto  py-2 mb-4 flex items-center justify-between">
        <div className="flex font-medium">
          <img src="SagaProfile.png" alt="saga profile pic" />

          <p className="mx-2">
            <span className="block">Sage</span>
            <span className="block">Ishimwe</span>
          </p>
        </div>

        <div className="hidden md:block">
          <ul className="md:flex">
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="mx-4"
            >
              <Link
                to="home"
                smooth
                duration={500}
                className="font-Fira cursor-pointer hover:text-gray-300"
              >
                Home
              </Link>
            </motion.li>
            <li className="mx-4">
              <Link
                to="about"
                smooth
                duration={500}
                className="font-Fira cursor-pointer hover:text-gray-300"
              >
                About
              </Link>
            </li>
            <li className="mx-4">
              <Link
                to="services"
                smooth
                duration={500}
                className="font-Fira cursor-pointer hover:text-gray-300"
              >
                Services
              </Link>
            </li>
            <li className="mx-4">
              <Link
                to="experience"
                smooth
                duration={500}
                className="font-Fira cursor-pointer hover:text-gray-300"
              >
                Experience
              </Link>
            </li>
            <li className="mx-4">
              <Link
                to="contact"
                smooth
                duration={500}
                className="font-Fira cursor-pointer hover:text-gray-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <button
          onClick={toggleMobileMenu}
          className="block md:hidden focus:outline-none"
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
          </svg> */}
          {isMobileMenuOpen ? <FaTimes></FaTimes> : <FaBars />}
        </button>
        <ul
          className={`${
            isMobileMenuOpen ? "flex flex-col" : "hidden"
          } md:hidden absolute top-14 right-0  w-full py-2 shadow-md rounded-md transition-all duration-300 ease-in-out ${
            isScrolled ? "bg-slate-900 text-white" : "bg-white"
          }  z-50 transition-all duration-500 ease-in-out`}
        >
          <li className="mx-4">
            <Link
              onClick={() => setIsMobileMenuOpen(false)}
              to="home"
              smooth
              duration={500}
              className="block py-2 px-4 font-Fira hover:text-gray-300"
            >
              Home
            </Link>
          </li>
          <li className="mx-4">
            <Link
              onClick={() => setIsMobileMenuOpen(false)}
              activeClass="active"
              to="about"
              smooth
              duration={500}
              className="block py-2 px-4 font-Fira hover:text-gray-300"
            >
              About
            </Link>
          </li>
          <li className="mx-4">
            <Link
              onClick={() => setIsMobileMenuOpen(false)}
              to="services"
              smooth
              duration={500}
              className="block py-2 px-4 font-Fira hover:text-gray-300"
            >
              Services
            </Link>
          </li>
          <li className="mx-4">
            <Link
              onClick={() => setIsMobileMenuOpen(false)}
              to="experience"
              smooth
              duration={500}
              className="block py-2 px-4 font-Fira hover:text-gray-300"
            >
              Experience
            </Link>
          </li>
          <li className="mx-4">
            <Link
              onClick={() => setIsMobileMenuOpen(false)}
              to="contact"
              smooth
              duration={500}
              className="block py-2 px-4 font-Fira hover:text-gray-300"
            >
              Contact
            </Link>
          </li>
          {/* Other mobile menu items */}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
