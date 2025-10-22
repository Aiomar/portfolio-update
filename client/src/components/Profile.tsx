import profile from "../assets/profile.jpg";
import { Download } from "lucide-react";

export default function Profile() {
  return (
    <div 
      className="mb-4 flex h-96 w-80 flex-col items-center rounded-xl border border-gray-200
    bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-md md:mb-0 xl:ml-20 md:h-96 md:mt-4 
      md:w-96 dark:bg-gray-800 dark:shadow-blue-200"
    >
      <img
        src={profile}
        className="hidden rounded-full md:float-left md:flex md:w-50"
        alt="Omar Aidi"
      />
      <div className="mb-3 flex flex-col items-center md:hidden">
        <img
          src={profile}
          className="w-36 rounded-full sm:w-44 md:float-right md:ml-6 md:w-52"
          alt="Omar Aidi"
        />
      </div>
      <p className="mt-2 text-xl font-semibold dark:text-gray-300">Omar Aidi</p>
      <p className="text-md mt-2 font-semibold text-gray-600 dark:text-gray-400">
        Full-Stack Developer & CS Student
      </p>
      <button className="mt-5 flex flex-row rounded-xl bg-blue-400 p-2 hover:dark:bg-blue-500">
        <Download className="mr-2" />
        Download Resume
      </button>
    </div>
  );
}
