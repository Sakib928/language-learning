import { useQuery } from "react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageLessons = () => {
  const axiosSecure = useAxiosSecure();
  const { data: lessons = [], refetch } = useQuery({
    queryKey: ["lessons"],
    queryFn: async () => {
      const res = await axiosSecure.get("/lessons");
      return res.data;
    },
  });
  console.log(lessons);

  const handleUpdate = async (_id) => {
    const { value: formValues } = await Swal.fire({
      title: "Update Lesson",
      html: `
                <input id="swal-input1" class="swal2-input" placeholder="Lesson Number">
                <input id="swal-input2" class="swal2-input" placeholder="Lesson Title">
            `,
      focusConfirm: false,
      preConfirm: () => {
        const lessonNumber = document.getElementById("swal-input1").value;
        const lessonTitle = document.getElementById("swal-input2").value;

        if (!lessonNumber || !lessonTitle) {
          Swal.showValidationMessage(
            "Please enter both Lesson Number and title"
          );
        }
        return { lessonNumber, lessonTitle };
      },
    });

    if (formValues) {
      console.log("User added:", formValues);
      const res = await axiosSecure.patch(`/lessons/${_id}`, formValues);
      console.log(res.data);
      if (res.data.modifiedCount) {
        Swal.fire("Lesson Updated");
        refetch();
      }
    }
  };

  const handleDelete = async (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/lessons/${_id}`);
        console.log(res);
        if (res.data.deletedCount) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          refetch();
        }
      }
    });
  };

  return (
    <>
      {lessons.map((lesson, idx) => {
        return (
          <div
            key={idx}
            className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md mb-4"
          >
            <div>
              <h1 className="mt-2 text-lg font-semibold text-gray-800">
                Lesson {lesson?.lessonNumber}: {lesson?.lessonTitle}
              </h1>
            </div>

            <div>
              <div className="flex items-center mt-2 text-gray-700"></div>
              <div className="flex items-center justify-center mt-4">
                <a
                  onClick={() => handleUpdate(lesson._id)}
                  className="mr-2 cursor-pointer text-blue-500 hover:underline"
                  aria-label="twitter link"
                >
                  Update
                </a>

                <a
                  onClick={() => handleDelete(lesson._id)}
                  className="mr-2 cursor-pointer text-red-500 hover:underline"
                  aria-label="share link"
                >
                  Delete
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ManageLessons;
