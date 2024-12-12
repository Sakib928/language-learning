import { Link } from "react-router-dom"; // Import Link for navigation

const UserNavbar = () => {
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
          to="/features"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          features
        </Link>

        <Link
          to="/pricing"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          pricing
        </Link>

        <Link
          to="/blog"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          blog
        </Link>

        <a
          href="#"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          {/* Placeholder for icon or additional content */}
        </a>

        <a
          href="#"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          {/* Placeholder for icon or additional content */}
        </a>
      </div>
    </nav>
  );
};

export default UserNavbar;
