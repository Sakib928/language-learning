import { useQuery } from "react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Lessons = () => {
  const axiosSecure = useAxiosSecure();
  const { data: lessons = [] } = useQuery({
    queryKey: "lessons",
    queryFn: async () => {
      const res = await axiosSecure.get("/lessons");
      return res.data;
    },
  });
  console.log(lessons);
  return (
    <>
      {lessons.map((lesson) => {
        return (
          <div
            key={lesson._id}
            className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md mb-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-light text-gray-800">
                Lesson Number : {lesson?.lessonNumber}
              </span>
              <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full">
                Words Count:{lesson.vocabulariesFound}
              </span>
            </div>

            <div>
              <h1 className="mt-2 text-lg font-semibold text-gray-800">
                {lesson?.lessonTitle}
              </h1>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Lessons;
