import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Usetitle from "../../../Hooks/Usetitle";
import { AuthContext } from "../../../providers/AuthProvider";

const ViewDetails = () => {
  const dollDetails = useLoaderData();
  const { user } = useContext(AuthContext);
  Usetitle("View Details");

  const { name, picture, price, rating, available_quantity, view_details } =
    dollDetails;

  return (
    <div>
      <div className="flex text-yellow-700 items-center bg-pink-100 border-4 max-w-full m-10">
        <div className="w-1/2">
          <img className="w-1/2 ml-40 rounded-xl" src={picture} alt="" />
        </div>
        <div className="w-1/2  p-4 space-y-4">
          <h2 className="text-2xl font-serif">{name}</h2>
          <div className="flex justify-between font-semibold">
            <div>
              <h4>Price: {price}</h4>
              <h4>Rating: {rating}</h4>
              <h4>Available Quantity: {available_quantity}</h4>
            </div>
            <div>
              <h4>Seller Name: {user?.displayName}</h4>
              <h4>Seller Email: {user?.email}</h4>
            </div>
          </div>

          <p className="text-base text-justify">
            <span className="font-semibold"> Product Details:</span>
            {view_details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
