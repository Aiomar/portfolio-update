import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href=""
            className="mb-4 flex items-center space-x-3 sm:mb-0 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt="Flowbite Logo" />
          </a>
          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-600 sm:mb-0 dark:text-gray-300">
            <li>
              <a href="#about" className="me-4 hover:underline md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="me-4 hover:underline md:me-6">
                Projects
              </a>
            </li>
            <li>
              <a href="#resume" className="me-4 hover:underline md:me-6">
                Resume
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
        <span className="felx w-fit flex-row items-center justify-center text-sm text-gray-500 sm:text-center dark:text-white">
          {String(Date()).substring(11, 16)}
          Developed By{" "}
          <a href="" className="hover:underline">
            Omar Aidi
          </a>
        </span>
      </div>
    </footer>
  );
}
