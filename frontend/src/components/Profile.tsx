import profile from '../assets/profile.jpg'
import { Download } from "lucide-react";

export default function Profile() {
  return(
  <div 
    className="flex flex-col items-center bg-white dark:bg-gray-800 border 
    border-gray-200 rounded-xl shadow-sm hover:shadow-md p-4 h-96 md:h-96
    transition-shadow dark:shadow-blue-200 duration-300 mb-4 md:mb-0 w-80  md:w-96 md:ml-20"
  >
    <img
      src={profile}
      className="hidden md:w-50 rounded-full md:float-left  md:flex "
      alt="Omar Aidi"
    />
    <div 
      className="md:hidden flex flex-col items-center mb-3"
    >
      <img
        src={profile}
        className="rounded-full w-36 sm:w-44 md:w-52
        md:float-right md:ml-6"
        alt="Omar Aidi"
      />
    </div>
    <p 
      className="mt-2 dark:text-gray-300 font-semibold text-xl"
    >
      Omar Aidi
    </p>            
    <p 
      className="mt-2 text-gray-600 dark:text-gray-400 font-semibold text-md"
    >
      Full-Stack Developer & CS Student
    </p>
    <button
      className="flex flex-row mt-5 bg-blue-400 
      hover:dark:bg-blue-500 p-2 rounded-xl"
    >
      <Download className="mr-2"/>
      Download Resume
    </button>
  </div>)
}