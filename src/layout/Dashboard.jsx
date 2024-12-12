import { useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const sidebarRef = useRef();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const adminName = localStorage.getItem("name");
  const adminEmail = localStorage.getItem("email");
  const image = localStorage.getItem("image");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <button
        className="p-2 text-gray-600 text-3xl bg-gray-200 rounded-lg md:hidden absolute"
        onClick={toggleSidebar}
      >
        {isOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
      </button>

      <div className="md:flex gap-4">
        {/* Sidebar */}
        {isOpen && (
          <aside
            ref={sidebarRef}
            className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r z-5 "
          >
            {/* <a href="#" className="mx-auto">
      <img
        className="w-auto h-6 sm:h-7"
        src="https://merakiui.com/images/full-logo.svg"
        alt="Logo"
      />
    </a> */}

            <div className="flex flex-col items-center mt-6 -mx-2">
              <img
                className="object-cover w-24 h-24 mx-2 rounded-full"
                src={image}
                alt="avatar"
              />
              <h4 className="mx-2 mt-2 font-medium text-gray-800">
                {adminName}
              </h4>
              <p className="mx-2 mt-1 text-sm font-medium text-gray-600">
                {adminEmail}
              </p>
            </div>

            <div className="flex flex-col justify-between flex-1 mt-6">
              <nav>
                <NavLink
                  onClick={isMobile ? toggleSidebar : ""}
                  to="/dashboard/lessons"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  <span className="mx-4 font-medium">Lessons</span>
                </NavLink>

                <NavLink
                  onClick={isMobile ? toggleSidebar : ""}
                  to="/dashboard/addlessons"
                  className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors  rounded-lg hover:bg-blue-400 hover:text-gray-700"
                >
                  <span className="mx-4 font-medium">Add Lessons</span>
                </NavLink>

                <NavLink
                  onClick={isMobile ? toggleSidebar : ""}
                  to="/dashboard/addvocabs"
                  className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors  rounded-lg hover:bg-blue-400 hover:text-gray-700"
                >
                  <span className="mx-4 font-medium">Add Vocabularies</span>
                </NavLink>

                <NavLink
                  onClick={isMobile ? toggleSidebar : ""}
                  to="/dashboard/manageusers"
                  className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors  rounded-lg hover:bg-blue-400 hover:text-gray-700"
                >
                  <span className="mx-4 font-medium">Manage Users</span>
                </NavLink>
                <NavLink
                  onClick={isMobile ? toggleSidebar : ""}
                  to="/dashboard/managelessons"
                  className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors  rounded-lg hover:bg-blue-400 hover:text-gray-700"
                >
                  <span className="mx-4 font-medium">Lesson Management</span>
                </NavLink>
                <NavLink
                  onClick={isMobile ? toggleSidebar : ""}
                  to="/dashboard/managevocabs"
                  className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors  rounded-lg hover:bg-blue-400 hover:text-gray-700"
                >
                  <span className="mx-4 font-medium">
                    Vocabulary Management
                  </span>
                </NavLink>
                <button
                  onClick={logout}
                  className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors  rounded-lg hover:bg-blue-400 hover:text-gray-700"
                >
                  <span className="mx-4 font-medium text-red-500">Log Out</span>
                </button>
              </nav>
            </div>
          </aside>
        )}
        <div className="relative top-12 md:flex-1">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
