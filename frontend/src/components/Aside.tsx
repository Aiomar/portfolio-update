import Nav from "./Nav";

type props = {
  toggleNavBar: () => void;
  currentVisibleSection: string;
};

export default function Aside(props: props) {
  return (
    <aside
      className="fixed z-30 h-screen w-full bg-gray-100 shadow-lg shadow-gray-600 dark:bg-gray-900"
      onClick={props.toggleNavBar}
    >
      <div className="mt-32 lg:hidden">
        <Nav currentVisibleSection={props.currentVisibleSection} />
        <div className="flex h-96 flex-row items-center justify-center">
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
