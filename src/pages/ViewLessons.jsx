import { Link, NavLink } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "react-query";

const ViewLessons = () => {
  const axiosSecure = useAxiosSecure();
  const { data: lessons = [] } = useQuery({
    queryKey: ["allLessons"],
    queryFn: async () => {
      const res = await axiosSecure.get("lessons");
      return res.data;
    },
  });
  console.log(lessons);
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {lessons.map((lesson) => {
          return (
            <div
              key={lesson._id}
              className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg mt-4 "
            >
              <div className="py-5 text-center">
                <h1 className="block text-xl font-bold text-gray-800">
                  Lesson Number : {lesson?.lessonNumber}
                </h1>
                <span className="text-gray-700">{lesson?.lessonTitle}</span>
              </div>
              <div className="flex items-center justify-center mt-4">
                <Link to={`/view-lessons/lessondetails/${lesson._id}`}>
                  <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 mb-4">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewLessons;