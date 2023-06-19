import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const dollDetails = useLoaderData();

  const { _id, price, available_quantity, sub_category, details_description } =
    dollDetails;

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const price = form.price.value;
    const available_quantity = form.available_quantity.value;
    const details_description = form.details_description.value;

    const updateDoll = {
      price,
      available_quantity,
      details_description,
    };
    console.log(updateDoll);

    fetch(
      `https://b7a11-toy-marketplace-server-side-fayeja.vercel.app/${dollDetails.sub_category}/${dollDetails._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateDoll),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "User Added successfully!!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <form onSubmit={handleUpdate}>
      {" "}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Price</span>
        </label>
        <input
          type="text"
          placeholder="price"
          name="price"
          defaultValue={price}
          className="input input-bordered"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Available_quantity</span>
        </label>
        <input
          type="text"
          placeholder="available_quantity"
          name="available_quantity"
          defaultValue={available_quantity}
          className="input input-bordered"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Details Description</span>
        </label>
        <input
          type="text"
          placeholder="details_description"
          name="details_description"
          defaultValue={details_description}
          className="input input-bordered"
        />
      </div>
      <input type="submit" value="Update" className="btn btn-block mt-5" />
    </form>
  );
};

export default Update;
