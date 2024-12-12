import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "https://learn-japanese-backend-roan.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
