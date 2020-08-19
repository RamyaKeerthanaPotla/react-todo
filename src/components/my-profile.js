import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

export const MyProfile = () => {
  const [profileData, setProfileData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4000/details");
      setProfileData(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    alert("hello");
  };

  // To handle delete I need tto first check if that value is present in the array.
  // Then delete the slected entry

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/details/${id}`
      );
      getUsers();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return <h1>Loading.........</h1>;
  }

  return (
    <div className=" profile-form">
      <div className="common-flex search-box">
        <label>Search:h</label>
        <input
          type="text"
          className="search-input-box"
          placeholder="Search for user names.."
          title="Type in a user name"
        />
        <button
          type="submit"
          className="btn btn-primary button-styles add-btn"
          onClick={handleSearch}>
          Search
        </button>
      </div>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">User Name</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Country</th>
            <th scope="col">Languages</th>
            <th scope="col">Gender</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {profileData.map((data) => (
            <tr key={data.id}>
              <th scope="row">{data.id}</th>
              <td>{data.userName}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.country}</td>
              <td>{data.languages.join(", ")}</td>
              <td>{data.gender}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm button-styles add-btn"
                  onClick={() => handleDelete(data.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
