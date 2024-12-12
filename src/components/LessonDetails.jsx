import { useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "react-query";
import { useState } from "react";

const LessonDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { data: lessons = [] } = useQuery({
    queryKey: ["lessondetails"],
    queryFn: async () => {
      const res = await axiosSecure.get("lessons");
      return res.data;
    },
  });
  const singleLesson = lessons.filter((lesson) => lesson._id === id);
  console.log(singleLesson);
  const vocabs = singleLesson[0]?.words;
  console.log(vocabs);
  const [pageState, setPageState] = useState(0);
  console.log(pageState);

  return (
    <div>
      <div className="w-48 h-48 bg-gray-100 border border-gray-300 rounded-lg shadow-md flex flex-col justify-center mx-auto mt-12 items-center text-center hover:scale-105 transition-transform duration-300">
        <h2 className="text-lg font-semibold text-gray-800">
          {vocabs[pageState].word}
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          {vocabs[pageState].pronounciation}
        </p>
        <p className="text-sm text-gray-600 mt-2">
          {vocabs[pageState].meaning}
        </p>
        <p className="text-sm text-gray-600 mt-2">
          {vocabs[pageState].whentosay}
        </p>
      </div>

      <div className="flex mx-auto justify-center">
        <a
          onClick={() => {
            pageState > 0 && setPageState(pageState - 1);
          }}
          className="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md hover:bg-blue-600 hover:text-white"
        >
          Previous
        </a>
        <a
          onClick={() => {
            pageState < vocabs.length - 1 && setPageState(pageState + 1);
          }}
          className="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md hover:bg-blue-600 hover:text-white"
        >
          Next
        </a>
      </div>
    </div>
  );
};

export default LessonDetails;
