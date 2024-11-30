import React, { useState } from "react";
import Banner from "./Component/Banner";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const coffeesData = useLoaderData();
  const [coffees, setCoffees] = useState(coffeesData);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remain = coffees.filter(coffee => coffee._id !== _id)
              setCoffees(remain)
            }
          });
      }
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <Banner></Banner>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {coffees.map((coffee) => (
          <div key={coffee._id} className="bg-gray-100 rounded-lg shadow-md flex items-center p-4">
            {/* Image */}
            <div className="w-36 h-36 rounded-full overflow-hidden flex-shrink-0">
              <img
                src={coffee.image}
                alt={coffee.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Coffee Info */}
            <div className="ml-4 flex-grow">
              <p className="text-lg font-semibold text-gray-800">
                Name: {coffee.name}
              </p>
              <p className="text-gray-600">Chef: {coffee.chef}</p>
              <p className="text-gray-600">Price: {coffee.price} Taka</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col space-y-2">
              {/* View Button */}
              <button className="bg-gray-800 p-2 rounded-lg hover:bg-gray-400">
                <i className="fa-solid fa-eye"></i>
              </button>

              {/* Edit Button */}
              <Link to={`/updatecoffees/${coffee._id}`} className="bg-gray-800 p-2 rounded-lg hover:bg-gray-400">
                <i className="fa-solid fa-pen-to-square"></i>
              </Link>

              {/* Delete Button */}
              <button
                onClick={() => handleDelete(coffee._id)}
                className="bg-red-500 p-2 rounded-lg hover:bg-red-600"
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
