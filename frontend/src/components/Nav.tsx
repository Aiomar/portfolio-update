import { Github } from "lucide-react";
import logo from '../assets/logo.svg'

export default function Nav({ currentVisibleSection }:props) {
  return (
    <div className="flex flex-col md:flex-row">
      <img
        src={logo}
        alt=""
        className="w-10 mr-10 ml-10 md:ml-0 hidden md:flex"
      />
      <ul 
        className="flex flex-col  mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-2"
      >
        <li 
          className="ml-5 md:ml-0"
        >
          <a
            href="#about"
            className={
              currentVisibleSection === "about"
                ? "block py-2 pr-4 pl-3 text-sky-400 lg:hover:bg-transparent lg:border-0 lg:p-0"
                : "block py-2 pr-4 pl-3 hover:text-sky-400 dark:text-white  dark:hover:text-sky-300 lg:hover:bg-transparent lg:border-0 lg:p-0"
            }
            aria-current="page"
            title="about me and social accounts"
          >
            <div 
              className="flex md:justify-center items-center"
            >
              <p 
                className="ml-1 poppins-semibold text-3xl md:text-base"
              >
                About
              </p>
            </div>
          </a>
        </li>
       
        <li className="ml-5 md:ml-0">
          <a
            href="#resume"
            className={
              currentVisibleSection === "resume"
                 ? "block py-2 pr-4 pl-3 text-sky-400 lg:hover:bg-transparent lg:border-0 lg:p-0"
                : "block py-2 pr-4 pl-3 hover:text-sky-400 dark:text-white  dark:hover:text-sky-300 lg:hover:bg-transparent lg:border-0 lg:p-0"
            }
            title="more about my carear"
          >
            <div className="flex md:justify-center items-center">
              <p className="ml-1 poppins-semibold text-3xl md:text-base">
                Resume
              </p>
            </div>
          </a>
        </li>
         <li className="ml-5 md:ml-0">
          <a
            href="#projects"
            className={
              currentVisibleSection === "projects"
                ? "block py-2 pr-4 pl-3 text-sky-400 lg:hover:bg-transparent lg:border-0 lg:p-0"
                : "block py-2 pr-4 pl-3 hover:text-sky-400 dark:text-white  dark:hover:text-sky-300 lg:hover:bg-transparent lg:border-0 lg:p-0"
            }
            title="checkout some of my work"
          >
            <div className="flex md:justify-center items-center">
              <p className=" ml-1 poppins-semibold text-3xl md:text-base">
                Projects
              </p>
            </div>
          </a>
        </li>
        <li className="ml-5 md:ml-0">
          <a
            href="#contact"
            className={
              currentVisibleSection === "contact"
                ? "block py-2 pr-4 pl-3 text-sky-400 lg:hover:bg-transparent lg:border-0 lg:p-0"
                : "block py-2 pr-4 pl-3 hover:text-sky-400 dark:text-white  dark:hover:text-sky-300 lg:hover:bg-transparent lg:border-0 lg:p-0"
            }
          >
            <div className="flex md:justify-center items-center">
              <p className="ml-1 poppins-semibold text-3xl md:text-base">
                Contact
              </p>
            </div>
          </a>
        </li>
        <li className="ml-8 md:ml-0">
          <a
            href="https://github.com/Aiomar/portfolio"
            target="_blank"
            className="scale-110 md:scale-100"
          >
            <div
              className="flex md:justify-center items-center "
              title="check portfolio on github"
            >
              <Github size={25} className="text-black dark:text-white" />
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

type props = {
  currentVisibleSection: string;
}