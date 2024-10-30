import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} className="mx-2 w-10" alt="logo" />
      </div>

      {/* Social Icons */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaStackOverflow />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
