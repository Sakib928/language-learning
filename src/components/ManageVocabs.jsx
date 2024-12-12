import { useState } from "react";
import { useQuery } from "react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
import Swal from "sweetalert2";

const ManageVocabs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const axiosSecure = useAxiosSecure();
  const [vocabs, setVocabs] = useState([]);
  const { refetch } = useQuery({
    queryKey: "vocabs",
    queryFn: async () => {
      const res = await axiosSecure.get("/vocabularies");
      setVocabs(res.data);
    },
  });

  const filteredVocabs = vocabs.filter((word) =>
    word.lessonNumber.includes(searchTerm)
  );

  const handleUpdate = async (_id) => {
    const { value: formValues } = await Swal.fire({
      title: "Update Vocabulary",
      html: `
                <input id="swal-input1" class="swal2-input" placeholder="Word">
                <input id="swal-input2" class="swal2-input" placeholder="Pronounciation">
                <input id="swal-input3" class="swal2-input" placeholder="Meaning">
                <input id="swal-input4" class="swal2-input" placeholder="When To Say">
                <input id="swal-input5" class="swal2-input" placeholder="Lesson No.">
            `,
      focusConfirm: false,
      preConfirm: () => {
        const word = document.getElementById("swal-input1").value;
        const pronounciation = document.getElementById("swal-input2").value;
        const meaning = document.getElementById("swal-input3").value;
        const whentosay = document.getElementById("swal-input4").value;
        const lessonNumber = document.getElementById("swal-input5").value;

        if (
          !word ||
          !pronounciation ||
          !meaning ||
          !whentosay ||
          !lessonNumber
        ) {
          Swal.showValidationMessage("Please enter all the fields");
        }
        return { word, pronounciation, meaning, whentosay, lessonNumber };
      },
    });

    if (formValues) {
      console.log("User added:", formValues);
      const res = await axiosSecure.patch(`/vocabularies/${_id}`, formValues);
      console.log(res.data);
      if (res.data.modifiedCount) {
        Swal.fire("Updated the vocabularies");
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
        const res = await axiosSecure.delete(`/vocabularies/${_id}`);
        // console.log(res);
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

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  return (
    <div>
      <div className="flex items-center justify-center p-4">
        <input
          type="text"
          placeholder="Search by lesson number"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 text-white bg-blue-600 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
        >
          Search
        </button>
      </div>
      <div className="container p-2 mx-auto sm:p-4">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">
          Vocabularies
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="bg-gray-50">
              <tr className="text-left">
                <th className="p-3">Word</th>
                <th className="p-3">Meaning</th>
                <th className="p-3">Pronunciation</th>
                <th className="p-3">When to say</th>
                <th className="p-3 text-right">Lesson No.</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Example Row */}
              {filteredVocabs.map((vocab) => {
                return (
                  <tr key={vocab._id} className="border-b border-opacity-20">
                    <td className="p-3">
                      <p>{vocab?.word}</p>
                    </td>
                    <td className="p-3">
                      <p>{vocab?.meaning}</p>
                    </td>
                    <td className="p-3">
                      <p>{vocab?.pronounciation}</p>
                    </td>
                    <td className="p-3">
                      <p>{vocab?.whentosay}</p>
                    </td>
                    <td className="p-3 text-right">
                      <p>{vocab?.lessonNumber}</p>
                    </td>
                    <td className="p-3 flex">
                      <span className="px-3 py-1 font-semibold rounded-md  text-yellow-800">
                        <FiEdit onClick={() => handleUpdate(vocab._id)} />
                      </span>
                      <span className="px-3 py-1 font-semibold rounded-md text-yellow-800">
                        <RiDeleteBin7Line
                          onClick={() => handleDelete(vocab._id)}
                        />
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageVocabs;
