import { NavLink } from "react-router-dom";

const CommonNav = () => {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <nav className="bg-transparent shadow">
      {" "}
      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize">
        <NavLink
          to="/view-lessons"
          className="text-gray-800 transition-colors duration-300 transform border-b-2 border-blue-500 mx-1.5 sm:mx-6 p-2 rounded-lg"
        >
          Lessons
        </NavLink>

        <NavLink
          to="/tutorials"
          className="text-gray-800 transition-colors duration-300 transform border-b-2 border-blue-500 mx-1.5 sm:mx-6 p-2 rounded-lg"
        >
          Tutorials
        </NavLink>

        <button
          onClick={logout}
          className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default CommonNav;
