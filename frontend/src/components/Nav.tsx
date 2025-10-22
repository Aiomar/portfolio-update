import { Github } from "lucide-react";
import logo from "../assets/logo.svg";

type props = {
  currentVisibleSection: string;
};

export default function Nav(props: props) {
  return (
    <div className="flex flex-col md:flex-row">
      <img
        src={logo}
        alt=""
        className="mr-10 ml-10 hidden w-10 md:ml-0 md:flex"
      />
      <ul className="mt-4 flex flex-col font-medium lg:mt-2 lg:flex-row lg:space-x-8">
        <li className="ml-5 md:ml-0">
          <a
            href="#about"
            className={
              props.currentVisibleSection === "about"
                ? "block py-2 pr-4 pl-3 text-sky-400 lg:border-0 lg:p-0 lg:hover:bg-transparent"
                : "block py-2 pr-4 pl-3 hover:text-sky-400 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:text-white dark:hover:text-sky-300"
            }
            aria-current="page"
            title="about me and social accounts"
          >
            <div className="flex items-center md:justify-center">
              <p className="poppins-semibold ml-1 text-3xl md:text-base">
                About
              </p>
            </div>
          </a>
        </li>

        <li className="ml-5 md:ml-0">
          <a
            href="#resume"
            className={
              props.currentVisibleSection === "resume"
                ? "block py-2 pr-4 pl-3 text-sky-400 lg:border-0 lg:p-0 lg:hover:bg-transparent"
                : "block py-2 pr-4 pl-3 hover:text-sky-400 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:text-white dark:hover:text-sky-300"
            }
            title="more about my carear"
          >
            <div className="flex items-center md:justify-center">
              <p className="poppins-semibold ml-1 text-3xl md:text-base">
                Resume
              </p>
            </div>
          </a>
        </li>
        <li className="ml-5 md:ml-0">
          <a
            href="#projects"
            className={
              props.currentVisibleSection === "projects"
                ? "block py-2 pr-4 pl-3 text-sky-400 lg:border-0 lg:p-0 lg:hover:bg-transparent"
                : "block py-2 pr-4 pl-3 hover:text-sky-400 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:text-white dark:hover:text-sky-300"
            }
            title="checkout some of my work"
          >
            <div className="flex items-center md:justify-center">
              <p className="poppins-semibold ml-1 text-3xl md:text-base">
                Projects
              </p>
            </div>
          </a>
        </li>
        <li className="ml-5 md:ml-0">
          <a
            href="#contact"
            className={
              props.currentVisibleSection === "contact"
                ? "block py-2 pr-4 pl-3 text-sky-400 lg:border-0 lg:p-0 lg:hover:bg-transparent"
                : "block py-2 pr-4 pl-3 hover:text-sky-400 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:text-white dark:hover:text-sky-300"
            }
          >
            <div className="flex items-center md:justify-center">
              <p className="poppins-semibold ml-1 text-3xl md:text-base">
                Contact
              </p>
            </div>
          </a>
        </li>
        <li className="ml-8 md:ml-0">
          <a
            href="https://github.com/Aiomar"
            target="_blank"
            className="scale-110 md:scale-100"
          >
            <div
              className="flex items-center md:justify-center"
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
