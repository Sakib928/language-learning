const AdminLessonCard = ({ lesson, lessons }) => {
  const { lessonNumber, lessonTitle } = lesson;
  console.log(lessons);

  return (
    <div className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md mb-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-800">
          Lesson Number : {lessonNumber}
        </span>
        <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full">
          Words Count:{lessons.vocabulariesFound}
        </span>
      </div>

      <div>
        <h1 className="mt-2 text-lg font-semibold text-gray-800">
          {lessonTitle}
        </h1>
      </div>

      <div></div>
    </div>
  );
};

export default AdminLessonCard;
