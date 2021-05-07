import React, { useEffect, useState } from "react";
import { Pagination } from "./pagination";
import "./styles.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const MyProfile = () => {
  const history = useHistory();
  const [profileData, setProfileData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);

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

  // Search Functionality start
  useEffect(() => {
    setFilteredData(
      profileData.filter((data) => {
        return data.userName.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, profileData]);

  // Search Functionality end

  // To handle delete I need tto first check if that value is present in the array.
  // Then delete the slected entry

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/details/${id}`
      );
      getUsers();
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return <h1>Loading.........</h1>;
  }

  // Pagination Functionality start
  // To get current profile entries.
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexofFFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentPosts = profileData.slice(indexofFFirstEntry, indexOfLastEntry);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Pagination Functionality end

  // Edit functionality start

  const handleEdit = (data) => {
    //history.push("/enterdetails");
    history.push({
      pathname: "/enterdetails",
      state: data,
    });
  };

  // Edit functionality end

  return (
    <div className=" profile-form">
      <div className="common-flex search-box">
        <label>Search: </label>
        <input
          type="text"
          className="search-input-box"
          placeholder="Search for user names.."
          title="Type in a user name"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <table className="table">
        <thead className="thead-dark">
          <tr>
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
          {filteredData.map((data) => (
            <tr key={data.id}>
              <th scope="row">{data.userName}</th>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.country}</td>
              <td>{data.languages.join(", ")}</td>
              <td>{data.gender}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm add-btn"
                  onClick={() => handleEdit(data)}>
                  Edit
                </button>
                <button
                  className="btn btn-primary btn-sm delete-btn add-btn"
                  onClick={() => handleDelete(data.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        entriesPerPage={entriesPerPage}
        totalEntries={profileData.length}
        paginate={paginate}
      />
    </div>
  );
};
