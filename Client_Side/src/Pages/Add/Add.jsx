import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Usetitle from "../../Hooks/Usetitle";
import Swal from "sweetalert2";

const Add = () => {
  const { user } = useContext(AuthContext);
  const [sub_category, setSubCategory] = useState([]);
  Usetitle("Add Doll");

  const handleOptionChange = (event) => {
    setSubCategory(event.target.value);
    console.log(event.target.value);
  };

  //   add data
  const handleAdd = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo_url = form.photo_url.value;
    const name = form.name.value;
    const seller_name = user?.displayName;
    const seller_email = user?.email;
    // const sub_category = form.sub_category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const available_quantity = form.available_quantity.value;
    const details_description = form.details_description.value;
    const frozen = "frozen";
    const princess = "princess";
    let id = "mermaid";

    const category = {
      photo_url,
      name,
      seller_name,
      seller_email,
      sub_category,
      price,
      rating,
      available_quantity,
      details_description,
    };
    console.log(category);

    if (sub_category.localeCompare(frozen) === 0) {
      id = "frozen";
    } else if (sub_category.localeCompare(princess) === 0) {
      id = "princess";
    }

    fetch(`https://b7a11-toy-marketplace-server-side-fayeja.vercel.app/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(category),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset("");
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "service book successfully!!!",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div className="bg-pink-100 border-4 p-20">
      <form onSubmit={handleAdd}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo_url"
              placeholder="photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              name="seller_name"
              placeholder="Seller Name"
              defaultValue={user?.displayName}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
              type="text"
              name="seller_email"
              defaultValue={user?.email}
              placeholder="Seller Email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="Price"
              name="price"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              placeholder="Rating"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available quantity</span>
            </label>
            <input
              type="text"
              name="available_quantity"
              placeholder="Available quantity"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Detail description</span>
            </label>
            <textarea
              type="text"
              placeholder="Detail description"
              name="details_description"
              className="input input-bordered h-96"
              required
            />
          </div>
          <div className="m-10">
            <label className="mx-3">Select a doll's sub category:</label>
            <select
              id="dropdown"
              value={sub_category}
              className="p-5 rounded-lg"
              onChange={handleOptionChange}
            >
              <option value="">Sub Category</option>
              <option value="mermaid">Mermaid</option>
              <option value="princess">Princess</option>
              <option value="frozen">Frozen</option>
            </select>
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="text-white btn btn-outline bg-pink-500 rounded-3xl normal-case"
            type="submit"
            value="Add"
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
