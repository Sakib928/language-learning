import { Link } from "react-router-dom"; // Import Link for navigation

const AdminNavbar = () => {
  return (
    <nav className="bg-transparent shadow">
      {" "}
      {/* Transparent background without dark mode */}
      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize">
        <Link
          to="/"
          className="text-gray-800 transition-colors duration-300 transform border-b-2 border-blue-500 mx-1.5 sm:mx-6"
        >
          home
        </Link>

        <Link
          to="/dashboard/lessons"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default AdminNavbar;
