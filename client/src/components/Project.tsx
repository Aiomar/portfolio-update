import { Github, Globe } from "lucide-react";

export type project = {
  title: string;
  img: string;
  details: string;
  link: string;
  status: string;
  repo: string;
};

export default function Project(props: project) {
  return (
    <div className="flex flex-col justify-center md:p-4 mt-4">
      <div className="h-[450px] max-h-[500px] max-w-sm rounded-3xl border-2 border-gray-300 bg-white p-3 shadow-sm shadow-gray-300 hover:bg-gray-100 hover:shadow-md dark:border-gray-500 dark:bg-gray-800 dark:shadow-gray-600 dark:hover:bg-gray-700">
        <img src={props.img} alt="" className="rounded-2xl" />
        <a href={props.link}>
          <h5 className="mt-2 mb-2 text-2xl font-bold tracking-tight dark:text-white">
            {props.title}
          </h5>
        </a>
        <p className="mb-3 font-normal dark:text-white">{props.details}</p>
        <span className="mt-2 mb-2 flex font-mono dark:text-white">
          🚨Project Status &nbsp;
          <p
            className={
              status === "finished"
                ? "text-emerald-500 underline-offset-2 hover:underline"
                : "text-orange-500 underline-offset-2 hover:underline"
            }
          >
            {status === "finished" ? "finished✅" : "Not yet❗"}{" "}
          </p>
        </span>
        <div className="mb-2">
          <a
            href={props.repo}
            target="_blank"
            className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
          >
            <Github />
          </a>
          <a
            href={props.link}
            target="_blank"
            className="ml-2 inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
          >
            <Globe />
          </a>
        </div>
      </div>
    </div>
  );
}
