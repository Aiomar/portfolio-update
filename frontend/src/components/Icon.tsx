export default function Icon({ link, img }: props) {
  return (
    <div className="mr-5 ml-5 flex w-7 max-w-sm justify-center overflow-hidden rounded-2xl md:mr-0 md:ml-2">
      <a href={link} target="_blank">
        <img src={img} className="h-5 w-5" />
      </a>
    </div>
  );
}

type props = {
  link: string;
  img: string;
};
