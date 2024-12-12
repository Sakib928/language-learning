import { useForm } from "react-hook-form";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddVocabs = () => {
  const adminEmail = localStorage.getItem("email");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    // console.log(data);
    await axiosSecure.post("/addvocabulary", data).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire("added vocabulary");
      }
    });
  };
  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
      <h2 className="text-lg font-semibold text-gray-700 capitalize">
        Add New Vocabularies
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label className="text-gray-700" htmlFor="word">
              Word
            </label>
            <input
              {...register("word", { required: true })}
              id="word"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
            {errors.word && (
              <p className="text-red-500">This field is required</p>
            )}
          </div>

          <div>
            <label className="text-gray-700" htmlFor="pronounciation">
              Pronounciation
            </label>
            <input
              {...register("pronounciation", { required: true })}
              id="pronounciation"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
            {errors.word && (
              <p className="text-red-500">This field is required</p>
            )}
          </div>

          <div>
            <label className="text-gray-700" htmlFor="Whentosay">
              When To Say
            </label>
            <input
              {...register("whentosay", { required: true })}
              id="Whentosay"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
            {errors.whentosay && (
              <p className="text-red-500">This field is required</p>
            )}
          </div>

          <div>
            <label className="text-gray-700" htmlFor="lessonNo">
              Lesson No
            </label>
            <input
              {...register("lessonNumber", {
                pattern: { value: /^[1-9][0-9]*$/ },
                required: true,
              })}
              id="lessonNo"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
            {errors.lessonNumber && (
              <p className="text-red-500">Must be a number</p>
            )}
          </div>
          <div>
            <label className="text-gray-700" htmlFor="adminEmail">
              Admin Email
            </label>
            <input
              id="adminEmail"
              value={adminEmail}
              type="email"
              readOnly
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Add
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddVocabs;
