export default function Icon({link, img}: props) {
  return (
    <div 
      className="flex md:ml-2 justify-center max-w-sm rounded-2xl 
      overflow-hidden ml-5 mr-5 md:mr-0 w-7 "
    >
      <a 
        href={link} 
        target="_blank" 
      >
        <img src={img} className="w-5 h-5" />
      </a>
    </div>
  );
}

type props = {
  link : string;
  img :string;
}