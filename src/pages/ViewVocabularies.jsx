import { NavLink } from "react-router-dom";

const ViewVocabularies = () => {
  return (
    <div>
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
            to="/view-vocabularies"
            className="text-gray-800 transition-colors duration-300 transform border-b-2 border-blue-500 mx-1.5 sm:mx-6 p-2 rounded-lg"
          >
            Vocabularies
          </NavLink>
        </div>
      </nav>
      this is vocab page
    </div>
  );
};

export default ViewVocabularies;
