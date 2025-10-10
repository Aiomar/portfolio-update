import { Github, Globe } from "lucide-react";

export default function Project({ title, img, details, link, status, repo }: props) {
  return (
    <div 
      className="flex flex-col justify-center md:p-4"
    >
      <div
        className="max-w-sm h-[450px] max-h-[500px]  p-3 bg-white
        dark:bg-gray-800 hover:bg-gray-100 border-2 dark:border-gray-500
        shadow-sm shadow-gray-300 dark:shadow-gray-600
        rounded-3xl dark:hover:bg-gray-700 hover:shadow-md"
      >
        <img 
          src={img}
          alt="" 
          className="rounded-2xl"
        />
        <a 
          href={link}
        >
          <h5 
            className="mt-2 mb-2 text-2xl font-bold tracking-tight dark:text-white"
          >
            {title}
          </h5>
        </a>
        <p 
          className="mb-3 font-normal dark:text-white"
        >
          {details}
        </p>
        <p 
          className="font-mono dark:text-white mt-2 mb-2 flex"
        >
          🚨Project Status &nbsp;
          <p
            className={
              status === "finished"
                ? "text-emerald-500 hover:underline underline-offset-2"
                : "text-orange-500 hover:underline underline-offset-2"
            }
          >
            {status === "finished" ? "finished✅" : "Not yet❗"}{" "}
          </p>
        </p>
        <div className="mb-2">
          <a
            href={repo}
            target="_blank"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center
            text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 
            focus:outline-none focus:ring-blue-300 "
          >
            <Github />
          </a>
          <a
            href={link}
            target="_blank"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center
            text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 
            focus:outline-none focus:ring-blue-300 ml-2"
          >
            <Globe />
          </a>
        </div>
      </div>
    </div>
  );
}

type props = {
  title: string;
  img : string; 
  details: string;
  link: string; 
  status:string; 
  repo:string;
}