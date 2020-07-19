import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

export const MyProfile = () => {
  const [profileData, setProfileData] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:4000/details")
      .then((response) => setProfileData(response.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(profileData);
  return (
    <div className=" profile-form">
      <form className="was-validated">
        <div className="form-group row">
          <label for="inputName" className="col-sm-2 col-form-label">
            Full Name
          </label>
          <div className="col-sm-4"></div>
        </div>

        <div className="form-group row">
          <label for="colFormLabel" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-4"></div>
        </div>

        <div className="form-group row">
          <label for="inputPhoneNumber" className="col-sm-2 col-form-label">
            Phone Number
          </label>
          <div className="col-sm-4"></div>
        </div>

        <div className="form-group row common-flex">
          <label for="inputCountry" className="col-sm-2 col-form-label">
            Country
          </label>
        </div>

        <div className="form-group row">
          <div className="col-sm-3 ">
            <div className="form-check form-check-inline">
              <label className="form-check-label" for="gridCheck1">
                Languages
              </label>
            </div>
            <div className="form-check form-check-inline female-checkbox"></div>
          </div>
        </div>

        <div className="form-check form-check-inline">
          <label className="form-check-label" for="inlineRadio1">
            Gender
          </label>
        </div>
        <div className="form-check form-check-inline"></div>
      </form>
    </div>
  );
};
