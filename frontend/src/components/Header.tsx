import { Moon, Sun, XCircle } from "lucide-react";
import Nav from "./Nav";

export default function Header(
  {theme, updateTheme, toggleNavBar, isPhoneNavOpen, currentVisibleSection}:props
){
  return (
    <header
      className="flex md:flex-row md:justify-center fixed right-0 left-0 z-50 
      max-h-96 w-full bg-slate-100 dark:bg-gray-900"
    >
      <nav
        className="flex md:justify-center md:ml-0 w-full px-4 min-h-24
        bg-slate-100 dark:bg-gray-900 lg:px-6 py-2.5"
      >
        <div 
          className="flex items-center lg:order-2"
        >
          <button
            onClick={toggleNavBar}
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm 
            text-gray-500 rounded-lg lg:hidden"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {isPhoneNavOpen ? (
              <XCircle size={30} />
            ) : (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1
                  0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1
                  1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <div
          className="hidden justify-between items-center w-full 
          lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <Nav currentVisibleSection={currentVisibleSection} />
        </div>
      </nav>
      <div className="flex flex-col justify-center items-center mr-5">
        <div
          className="flex items-center justify-center"
        >
          <button 
            onClick={updateTheme}
          >
            {theme === 'dark' ? (
              <Sun color="white"size={25} />
            ) : (
              <Moon size={25} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

type props = {
  theme : string;
  updateTheme :()=>void;
  toggleNavBar : ()=> void;
  isPhoneNavOpen : boolean;
  currentVisibleSection : string;
}


