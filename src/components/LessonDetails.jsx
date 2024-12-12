import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";
import Swal from "sweetalert2";

const LessonDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { data: lessons = [] } = useQuery({
    queryKey: ["lessondetails"],
    queryFn: async () => {
      const res = await axiosSecure.get("lessons");
      return res.data;
    },
  });

  const singleLesson = lessons?.find((lesson) => lesson?._id === id) || null;

  const vocabs = singleLesson?.words || [];

  const [pageState, setPageState] = useState(0);
  const [celebrate, setCelebrate] = useState(false);

  useEffect(() => {
    if (pageState === vocabs.length - 1) {
      Swal.fire("Congratulations!You have finished the lesson");
      setCelebrate(true);
      setTimeout(() => setCelebrate(false), 3000);
      setTimeout(() => navigate("/view-lessons"), 4000);
    }
  }, [pageState, vocabs.length]);

  const pronounceJapaneseWord = (word) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = "ja-JP";
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div>
      {vocabs.length > 0 ? (
        <>
          <div
            onClick={() => pronounceJapaneseWord(vocabs[pageState]?.word)}
            className="w-48 h-48 bg-gray-100 border border-gray-300 rounded-lg shadow-md flex flex-col justify-center mx-auto mt-12 items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-lg font-semibold text-gray-800">
              {vocabs[pageState]?.word}
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              {vocabs[pageState]?.pronounciation}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              {vocabs[pageState]?.meaning}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              {vocabs[pageState]?.whentosay}
            </p>
          </div>

          <div className="flex mx-auto justify-center mt-4">
            <button
              onClick={() => {
                pageState > 0 && setPageState(pageState - 1);
              }}
              className="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md hover:bg-blue-600 hover:text-white"
            >
              Previous
            </button>
            <button
              onClick={() => {
                pageState < vocabs.length - 1 && setPageState(pageState + 1);
              }}
              className="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md hover:bg-blue-600 hover:text-white"
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <div className="text-center mt-12">
          <p className="text-gray-600">
            No vocabularies found for this lesson.
          </p>
        </div>
      )}
      {celebrate && (
        <ReactConfetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={200}
        />
      )}
    </div>
  );
};

export default LessonDetails;
