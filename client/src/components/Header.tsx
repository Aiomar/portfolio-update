import { Moon, Sun, XCircle } from "lucide-react";
import Nav from "./Nav";
type props = {
  theme: string;
  updateTheme: () => void;
  toggleNavBar: () => void;
  isPhoneNavOpen: boolean;
  currentVisibleSection: string;
};

export default function Header(props: props) {
  return (
    <header className="fixed right-0 left-0 z-50 flex max-h-96 w-full bg-gray-50 md:flex-row md:justify-center dark:bg-gray-900">
      <div className="flex min-h-24 w-full px-4 py-2.5 lg:ml-0 lg:justify-center lg:px-6 order-03">
        <div className="flex items-center ">
          <button
            onClick={props.toggleNavBar}
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="ml-1 flex items-center rounded-lg p-2 text-sm text-gray-500 lg:hidden"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {props.isPhoneNavOpen ? (
              <XCircle size={30} />
            ) : (
              <svg
                className="h-6 w-6"
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
          className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
          id="mobile-menu-2"
        >
          <Nav currentVisibleSection={props.currentVisibleSection} />
        </div>
      </div>
      
      <div className="mr-5 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <button onClick={props.updateTheme}>
            {props.theme === "dark" ? (
              <Sun color="white" size={25} />
            ) : (
              <Moon size={25} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
