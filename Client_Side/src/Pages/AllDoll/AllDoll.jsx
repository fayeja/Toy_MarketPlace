import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import Usetitle from "../../Hooks/Usetitle";

const AllDoll = () => {
  const [mermaidData, setMermaid] = useState([]);
  const [frozenData, setFrozen] = useState([]);
  const [princessData, setPrincess] = useState([]);
  const [data, setData] = useState([]);
  const { user } = useContext(AuthContext);
  Usetitle("All Doll");

  const serial = 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [mermaidData, frozenData, princessData] = await Promise.all([
          fetch(
            `https://b7a11-toy-marketplace-server-side-fayeja.vercel.app/mermaid`
          ).then((res) => res.json()),
          fetch(
            `https://b7a11-toy-marketplace-server-side-fayeja.vercel.app/frozen`
          ).then((res) => res.json()),
          fetch(
            `https://b7a11-toy-marketplace-server-side-fayeja.vercel.app/princess`
          ).then((res) => res.json()),
        ]);

        setMermaid(mermaidData);
        setFrozen(frozenData);
        setPrincess(princessData);

        const allDoll = mermaidData.concat(frozenData, princessData);
        setData(allDoll);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Cleanup function if needed
    return () => {
      // Cleanup logic
    };
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    console.log(name);

    fetch(
      `https://b7a11-toy-marketplace-server-side-fayeja.vercel.app/search/${name}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  const dolls = data.slice(0, 20);

  return (
    <div className="bg-pink-100">
      <div className="overflow-x-auto w-full">
        {/* Search field */}
        <form onSubmit={handleSearch} className="w-1/2 mx-auto m-4">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              name="name"
              id="default-search"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Dolls Name"
              required
            />
            <button class="text-white absolute right-2.5 bottom-2.5 bg-pink-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Search
            </button>
          </div>
        </form>

        {/* All toys table */}

        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Seller</th>
              <th>Doll Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {dolls.map((doll) => (
              <tr>
                <td>{"->"}</td>
                <td>{doll.seller_name}</td>
                <td>{doll.name}</td>
                <td>{doll.sub_category}</td>
                <td>{doll.price}</td>
                <td>{doll.available_quantity}</td>
                <td>
                  <Link to={`/viewDetails/${doll.sub_category}/${doll._id}`}>
                    <button className="text-white btn btn-outline bg-pink-500 rounded-3xl">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllDoll;
