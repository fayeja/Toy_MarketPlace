import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Update from "./Update";
import Usetitle from "../../Hooks/Usetitle";

const MyDoll = () => {
  const [mermaidData, setMermaid] = useState([]);
  const [frozenData, setFrozen] = useState([]);
  const [princessData, setPrincess] = useState([]);
  const [dolls, setDoll] = useState([]);
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState();
  Usetitle("My Dolls");
  console.log(dolls);

  // delete
  const handleDelete = (doll) => {
    // console.log(dolls.id);
    const proceed = confirm("Are You sure you want to delete");
    if (proceed) {
      fetch(
        `https://b7a11-toy-marketplace-server-side-fayeja.vercel.app/${doll.sub_category}/${doll._id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successful");
            window.location.reload(false);
            const remaining = items.filter((item) => item._id !== doll._id);
            setItems(remaining);
          }
        });
    }
  };

  // mydata show

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [mermaidData, frozenData, princessData] = await Promise.all([
          fetch(
            `https://b7a11-toy-marketplace-server-side-fayeja.vercel.app/frozen/mydoll/${user?.email}`
          ).then((res) => res.json()),
          fetch(
            `https://b7a11-toy-marketplace-server-side-fayeja.vercel.app/mermaid/mydoll/${user?.email}`
          ).then((res) => res.json()),
          fetch(
            `https://b7a11-toy-marketplace-server-side-fayeja.vercel.app/princess/mydoll/${user?.email}`
          ).then((res) => res.json()),
        ]);

        setMermaid(mermaidData);
        setFrozen(frozenData);
        setPrincess(princessData);

        const allDoll = mermaidData.concat(frozenData, princessData);
        setDoll(allDoll);
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

  // Sorting
  const handleAscending = (event) => {
    event.preventDefault();

    fetch(
      `https://b7a11-toy-marketplace-server-side-fayeja.vercel.app/sortAsc/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setDoll(data));
  };
  const handleDescending = (event) => {
    event.preventDefault();

    fetch(
      `https://b7a11-toy-marketplace-server-side-fayeja.vercel.app/sortDsc/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setDoll(data));
  };

  return (
    <div className="bg-pink-100">
      <div className="border-4">
        <div className="dropdown  m-5">
          <label tabIndex={0} className="btn m-1 bg-pink-500">
            Sort by Price
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-pink-300 rounded-box w-52"
          >
            <li>
              <button onClick={handleAscending}>Ascending order</button>
            </li>
            <li>
              <button onClick={handleDescending}>Descending order</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Available Quantity</th>
              <th>Details Description</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {dolls.map((doll) => (
              <tr>
                <td>
                  <div className="avatar">
                    <div className="rounded w-24 h-24">
                      {doll.photo_url && (
                        <img
                          src={doll.photo_url}
                          alt="Avatar Tailwind CSS Component"
                        />
                      )}
                    </div>
                  </div>
                </td>
                <td name="">{doll.name}</td>
                <td>{doll.sub_category}</td>
                <td>{doll.price}</td>
                <td>{doll.rating}</td>
                <td>{doll.available_quantity}</td>
                <td>{doll.details_description}</td>
                <td>
                  <label>
                    <button
                      onClick={() => handleDelete(doll)}
                      className="text-white btn btn-outline bg-pink-500 rounded-3xl"
                    >
                      Delete
                    </button>
                  </label>
                </td>
                <td>
                  <label>
                    <Link to={`/update/${doll.sub_category}/${doll._id}`}>
                      <button className="text-white btn btn-outline bg-pink-500 rounded-3xl">
                        Update
                      </button>
                    </Link>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyDoll;
