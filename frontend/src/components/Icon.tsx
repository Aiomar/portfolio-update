export default function Icon({link, img}: props) {
  return (
    <div 
      className="flex justify-center mt-5"
    >
      <a 
        href={link} 
        target="_blank" 
        className="w-24 hover:scale-105"
      >
        <div
          className="flex md:ml-10 justify-center max-w-sm rounded-2xl 
          overflow-hidden shadow-md shadow-gray-400 dark:shadow-gray-950
          bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700
          dark:text-white ml-5 mr-5 md:mr-0"
        >
          <img src={img} className="w-10 m-2 " />
        </div>
      </a>
    </div>
  );
}

type props = {
  link : string;
  img :string;
}