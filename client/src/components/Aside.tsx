import Nav from "./Nav";

type props = {
  toggleNavBar: () => void;
  currentVisibleSection: string;
};

export default function Aside(props: props) {
  return (
    <aside
      className="fixed z-50 h-screen w-full bg-white shadow-lg shadow-gray-600 dark:bg-neutral-900"
      onClick={props.toggleNavBar}
    >
      <div className="mt-32 lg:hidden">
        <Nav currentVisibleSection={props.currentVisibleSection} />
      </div>
    </aside>
  );
}
