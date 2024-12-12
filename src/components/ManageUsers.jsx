import { useQuery } from "react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  console.log(users);

  const changeRole = async (email, role) => {
    const res = await axiosSecure.patch(`/users/${email}/${role}`);
    // console.log(res.data);
    if (res.data.modifiedCount) {
      Swal.fire("Modified user role");
      refetch();
    }
  };

  return (
    <section className="container px-4 mx-auto">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800">All Users</h2>
        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">
          {users.length} users
        </span>
      </div>
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      <span>Name</span>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left text-gray-500"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left text-gray-500"
                    >
                      Email address
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* Single Row Example */}
                  {users.map((user, idx) => {
                    return (
                      <tr key={idx}>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 ">
                          <div className="flex items-center gap-x-2">
                            <img
                              className="object-cover w-10 h-10 rounded-full"
                              src={user?.image}
                              alt=""
                            />
                            <div>
                              <h2 className="font-medium text-gray-800 mr-4">
                                {user?.name}
                              </h2>
                            </div>
                          </div>
                        </td>
                        {/* Other Table Data */}
                        <td className="px-4 py-4 text-sm text-gray-500 ">
                          {user?.role}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 ">
                          {user?.email}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 ">
                          <details className="dropdown">
                            <summary className="btn m-1">update role</summary>
                            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                              <li
                                onClick={() =>
                                  changeRole(user?.email, "general")
                                }
                              >
                                <a>general</a>
                              </li>
                              <li
                                onClick={() => changeRole(user?.email, "admin")}
                              >
                                <a>admin</a>
                              </li>
                            </ul>
                          </details>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageUsers;
