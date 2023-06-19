import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MermaidDoll = () => {
  const [mermaids, setMermaid] = useState([]);

  useEffect(() => {
    fetch("https://b7a11-toy-marketplace-server-side-fayeja.vercel.app/mermaid")
      .then((res) => res.json())
      .then((data) => setMermaid(data.slice(0, 3)));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {mermaids.map((mermaid) => (
        <div>
          <div className="bg-pink-50 text-yellow-700 card w-60 lg:w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                className="mt-6 bg-pink-100 p-4 rounded w-40 lg:w-60 border-2 border-pink-600"
                src={mermaid.picture}
                alt="mermaid"
              />
            </figure>
            <div className="card-body space-y-3">
              <h2 className="card-title font-serif">{mermaid.name}</h2>
              <div className="flex justify-between">
                <div className="font-bold">
                  <h4>Price: {mermaid.price}</h4>
                  <h4>Rating: {mermaid.rating}</h4>
                </div>
                <div className="card-actions justify-end">
                  <Link
                    to={`/viewDetails/${mermaid.sub_category}/${mermaid._id}`}
                  >
                    <button className="text-white btn btn-outline bg-pink-500 rounded-3xl">
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

export default MermaidDoll;
