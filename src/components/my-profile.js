import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

export const MyProfile = () => {
  const [profileData, setProfileData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/details")
      .then((response) => setProfileData(response.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(profileData);
  return (
    <div className=" profile-form">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Country</th>
            <th scope="col">Languages</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          {profileData.map((data) => (
            <tr key={data.id}>
              <th scope="row">{data.id}</th>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.country}</td>
              <td>{data.language}</td>
              <td>{data.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
