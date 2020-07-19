import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";
import axios from "axios";

const languageNames = ["JavaScript", "Java", "Python"];
const genderNames = ["male", "female"];
const countryNames = ["Australia", "Canada", "India", "United States"];

export const FormContent = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [language, setLanguage] = useState([]);
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");

  const handleLanguage = (e) => {
    const { value } = e.target;
    if (language.includes(value)) {
      setLanguage(language.filter((lan) => lan !== value));
    } else {
      setLanguage(language.concat([value]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      id: uuidv4(),
      name,
      email,
      phone: phoneNumber,
      languages: language,
      gender,
      country,
    };
    try {
      const response = axios
        .post("http://localhost:4000/details", payload)
        .then((response) => console.log(response));
      setName("");
      setEmail("");
      setPhoneNumber("");
      setLanguage("");
      setGender("");
      setCountry("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className=" profile-form">
      <form className="was-validated">
        <div className="form-group row">
          <label for="inputName" className="col-sm-2 col-form-label">
            Full Name
          </label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              id="inputName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group row">
          <label for="colFormLabel" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-4">
            <input
              type="email"
              className="form-control"
              id="colFormLabel"
              value={email}
              placeholder="please enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group row">
          <label for="inputPhoneNumber" className="col-sm-2 col-form-label">
            Phone Number
          </label>
          <div className="col-sm-4">
            <input
              type="tel"
              className="form-control"
              id="inputPhoneNumber"
              value={phoneNumber}
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group row common-flex">
          <label for="inputCountry" className="col-sm-2 col-form-label">
            Country
          </label>
          <select
            id="inputCountry"
            value={country}
            className="form-control col-sm-4"
            onChange={(e) => setCountry(e.target.value)}
            required>
            {countryNames.map((countryName) => (
              <>
                <option>{countryName}</option>
              </>
            ))}
          </select>
        </div>

        <div className="form-group row">
          <div className="col-sm-3 ">
            <div className="form-check form-check-inline">
              {languageNames.map((languageName) => (
                <>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck1"
                    value={languageName}
                    onChange={handleLanguage}
                  />
                  <label className="form-check-label" for="gridCheck1">
                    {languageName}
                  </label>
                </>
              ))}
            </div>
          </div>
        </div>

        <div className="form-check form-check-inline">
          {genderNames.map((genderName) => (
            <>
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value={genderName}
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="form-check-label" for="inlineRadio1">
                {genderName}
              </label>
            </>
          ))}
        </div>

        <div className="form-group row submit-button">
          <div className="col-sm-10">
            <button
              type="submit"
              className="btn btn-primary button-styles"
              onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
