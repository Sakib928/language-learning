import { FaLanguage } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { axiosPublic } from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const submitLogin = async (data) => {
    console.log(data);
    const user = {
      email: data.email,
      password: data.password,
    };
    await axiosPublic.post("/login", user).then((res) => {
      console.log(res.data);
      if (res.data.status === "success") {
        Swal.fire("Successfully logged in!");
      }
      localStorage.setItem("token", res.data.token);
    });
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

        <form onSubmit={handleSubmit(submitLogin)}>
          <div className="w-full mt-4">
            <input
              {...register("email", { required: true })}
              className="block w-full px-4 py-2 mt-2 text-gray-200 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
            />
          </div>

          <div className="w-full mt-4">
            <input
              {...register("password", { required: true })}
              className="block w-full px-4 py-2 mt-2 text-gray-200 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              placeholder="Password"
              aria-label="Password"
            />
          </div>

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
          Don&apos;t have an account?{" "}
        </span>

        <Link
          to={"/register"}
          className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
