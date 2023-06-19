import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";

const PrincessDoll = () => {
  const [princesss, setPrincess] = useState([]);
  const { user } = useContext(AuthContext);

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    fetch(
      "https://b7a11-toy-marketplace-server-side-fayeja.vercel.app/princess"
    )
      .then((res) => res.json())
      .then((data) => setPrincess(data.slice(0, 3)));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {princesss.map((princess) => (
        <div>
          <div className="bg-pink-50 text-yellow-700 card w-60 lg:w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                className="mt-6 bg-pink-100 p-4 rounded w-40 lg:w-60 border-2 border-pink-600"
                src={princess.picture}
                alt="princess"
              />
            </figure>
            <div className="card-body space-y-3">
              <h2 className="card-title font-serif">{princess.name}</h2>
              <div className="flex justify-between">
                <div className="font-bold">
                  <h4>Price: {princess.price}</h4>
                  <h4>Rating: {princess.rating}</h4>
                </div>
                <div className="card-actions justify-end">
                  <Link
                    to={`/viewDetails/${princess.sub_category}/${princess._id}`}
                  >
                    <button className="text-white btn btn-outline bg-pink-500 rounded-3xl">
                      {" "}
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PrincessDoll;
