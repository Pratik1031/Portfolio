import logo from "../assets/logo.png";
import { FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} className="mx-2 w-30 h-20" alt="logo" />
      </div>

      {/* Social Icons */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/pratikdahekar7/">
          {" "}
          <FaLinkedin />
        </a>
        <a href="https://github.com/Pratik1031">
          <FaGithub />
        </a>
        <a href="https://stackoverflow.com/users/23652397/pratik-dahekar">
          <FaStackOverflow />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
