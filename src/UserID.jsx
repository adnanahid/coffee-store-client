import React from "react";
import { useLoaderData } from "react-router-dom";

const UserID = () => {
  const userInfo = useLoaderData();
//   console.log(userInfo._id);

  const handleUpdate = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;

    const updateUser = { name, email };

    fetch(`http://localhost:5000/updateUsers/${userInfo.email}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <form onSubmit={handleUpdate} className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Full Name</span>
        </label>
        <input
          type="name"
          name="name"
          defaultValue={userInfo.name}
          placeholder="name"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          name="email"
          defaultValue={userInfo.email}
          placeholder="email"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control mt-6">
          <button className="btn btn-primary">Update</button>
        </div>
    </form>
  );
};

export default UserID;
