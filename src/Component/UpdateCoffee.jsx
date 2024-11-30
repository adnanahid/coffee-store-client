import React from "react";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffeeData = useLoaderData();
  
  const navigate = useNavigate()

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const chef = event.target.chef.value;
    const supplier = event.target.supplier.value;
    const taste = event.target.taste.value;
    const category = event.target.category.value;
    const details = event.target.details.value;
    const photo = event.target.photo.value;

    const updateCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updateCoffee);

    // Send data to the server
    fetch(`http://localhost:5000/updatecoffees/${coffeeData._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/")
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
        console.log(data);
      })
      .catch((error) => console.error("Error updating coffee:", error));
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-10">
      <form onSubmit={handleUpdateCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Side Fields */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter coffee name"
              defaultValue={coffeeData.name}
              className="input input-bordered w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Chef</label>
            <input
              type="text"
              name="chef"
              placeholder="Enter coffee chef"
              defaultValue={coffeeData.chef}
              className="input input-bordered w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Supplier
            </label>
            <input
              type="text"
              name="supplier"
              placeholder="Enter coffee supplier"
              defaultValue={coffeeData.supplier}
              className="input input-bordered w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Taste
            </label>
            <input
              type="text"
              name="taste"
              placeholder="Enter coffee taste"
              defaultValue={coffeeData.taste}
              className="input input-bordered w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Category
            </label>
            <input
              type="text"
              name="category"
              placeholder="Enter coffee category"
              defaultValue={coffeeData.category}
              className="input input-bordered w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Details
            </label>
            <input
              type="text"
              name="details"
              placeholder="Enter coffee details"
              defaultValue={coffeeData.details}
              className="input input-bordered w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">
              Photo
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              defaultValue={coffeeData.photo}
              className="input input-bordered w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="md:col-span-2 mt-6 text-center">
            <button
              type="submit"
              className="w-full bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900"
            >
              Update Coffee
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
