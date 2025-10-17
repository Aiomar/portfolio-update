import Nav from "./Nav";

type props = {
  toggleNavBar : ()=>void;
  currentVisibleSection : string;
}

export default function Aside(props:props) {
  return (
    <aside
      className="bg-gray-100 dark:bg-gray-900 h-screen fixed  
      w-full shadow-lg shadow-gray-600 z-30"
      onClick={props.toggleNavBar}
    >
      <div 
        className="lg:hidden mt-32"
      >
        <Nav 
          currentVisibleSection={props.currentVisibleSection} 
        />
        <div 
          className="flex flex-row justify-center items-center h-96"
        >
          <img
            src="https://www.svgrepo.com/show/474372/code.svg"
            alt=""
            className="w-40 p-2"
          />
        </div>
      </div>
    </aside>
  );
}

