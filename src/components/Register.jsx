import { FaLanguage } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitRegister = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mt-10">
      <div className="px-6 py-4">
        <div className="flex justify-center mx-auto text-white">
          <FaLanguage className="w-auto h-22 sm:h-14" />
        </div>

        <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
          Welcome Back
        </h3>

        <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
          Login or create account
        </p>

        <form onSubmit={handleSubmit(submitRegister)}>
          <div className="w-full mt-4">
            <input
              {...register("name", { required: true })}
              className="block w-full px-4 py-2 mt-2 text-gray-200 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
              placeholder="Your Name"
              aria-label="Your Name"
            />
            {errors.name && (
              <p className="text-red-500">this field is required</p>
            )}
          </div>
          <div className="w-full mt-4">
            <input
              {...register("email", { required: true })}
              className="block w-full px-4 py-2 mt-2 text-gray-200 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
            />
            {errors.email && (
              <p className="text-red-500">this field is required</p>
            )}
          </div>

          <div className="w-full mt-4">
            <input
              {...register("password", { required: true })}
              className="block w-full px-4 py-2 mt-2 text-gray-200 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              placeholder="Password"
              aria-label="Password"
            />
            {errors.password && (
              <p className="text-red-500">this field is required</p>
            )}
          </div>

          <input
            {...register("image", { required: true })}
            type="file"
            placeholder="image"
            className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300"
          />
          {errors.image && (
            <p className="text-red-500">this field is required</p>
          )}

          <div className="flex items-center justify-center mt-4">
            <button
              type="submit"
              className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>

      <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-200">
          Already have an account?{" "}
        </span>

        <a
          href="#"
          className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default Login;
