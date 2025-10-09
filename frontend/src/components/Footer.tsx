import logo from '../assets/logo.svg'

export default function Footer() {
  return (
    <footer 
      className="bg-slate-100 shadow-sm dark:bg-gray-900 "
    >
      <div 
        className="w-full max-w-screen-xl mx-auto p-4 md:py-8"
      >
        <div 
          className="sm:flex sm:items-center sm:justify-between">
          <a
            href=""
            className="flex items-center mb-4 sm:mb-0 space-x-3 
            rtl:space-x-reverse"
          >
            <img 
              src={logo} 
              className="h-8" alt="Flowbite Logo" 
            />
          </a>
          <ul 
            className="flex flex-wrap items-center mb-6 text-sm 
            text-gray-500 sm:mb-0 dark:text-gray-400 font-medium">
            <li>
              <a 
                href="#about" 
                className="hover:underline me-4 md:me-6"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className="hover:underline me-4 md:me-6"
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#resume" 
                className="hover:underline me-4 md:me-6"
              >
                Resume
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr 
          className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" 
        />
        <span 
          className="felx flex-row items-center justify-center 
          text-sm text-gray-500 sm:text-center dark:text-white w-fit"
        >
          {String(Date()).substring(11, 16)}
          Developed By {" "}
          <a href="" className="hover:underline">
            Omar Aidi
          </a>
        </span>
      </div>
    </footer>
  );
}
