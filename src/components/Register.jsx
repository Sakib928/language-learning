import { FaEye, FaLanguage } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { axiosPublic } from "../hooks/useAxiosPublic";
import axios from "axios";
import Swal from "sweetalert2";
import { BiSolidHide } from "react-icons/bi";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const imgbb_api = import.meta.env.VITE_IMAGE_KEY;

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [passState, setPassState] = useState(false);
  const handleShowPass = () => {
    setPassState(!passState);
  };

  const submitRegister = async (data) => {
    // console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    await axios
      .post(`https://api.imgbb.com/1/upload?key=${imgbb_api}`, formData)
      .then((res) => {
        const image = res.data?.data.url;
        const user = {
          name: data.name,
          email: data.email,
          password: data.password,
          image: image,
          role: "general",
        };
        axiosPublic.post("/users", user).then((res) => {
          // console.log(res.data);
          if (res.data?.status === "duplicate") {
            Swal.fire("There is already an account");
            return;
          }
          if (res.data.insertedId) {
            Swal.fire("Successfully registered!");
            navigate("/login");
          }
        });
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

        <form onSubmit={handleSubmit(submitRegister)}>
          <div className="w-full mt-4">
            <input
              {...register("name", { required: true })}
              className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-5 pr-11 rtl:pr-5 rtl:pl-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
              className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-5 pr-11 rtl:pr-5 rtl:pl-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
            />
            {errors.email && (
              <p className="text-red-500">this field is required</p>
            )}
          </div>

          <div className="w-full mt-4">
            <div className="relative flex items-center mt-2">
              <button
                onClick={handleShowPass}
                className="absolute right-3 focus:outline-none rtl:left-0 rtl:right-auto text-white"
              >
                {!passState ? <FaEye /> : <BiSolidHide />}
              </button>

              <input
                {...register("password", { required: true })}
                type={passState ? "text" : "password"}
                placeholder="********"
                className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-5 pr-11 rtl:pr-5 rtl:pl-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
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
              Register
            </button>
          </div>
        </form>
      </div>

      <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-200">
          Already have an account?{" "}
        </span>

        <Link
          to={"/login"}
          className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Login;
