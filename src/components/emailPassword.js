import React, { useState, useEffect } from "react";
import ShowEmails from "./showEmails";
import { useForm } from "./useForm";
import Hello from "./hello";
import { useFetch } from "./useFetch";

const EmailPassword = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  const [count, setCount] = useState(0);

  const url = `http://numbersapi.com/${count}`;

  const { data, loading } = useFetch(url);
  //     useEffect(() => {
  //         const onMouseMove = (e) => {
  //             console.log(e);
  //           };

  //     window.addEventListener("mouse move", onMouseMove);

  //     return () => {
  //       window.removeEventListener("mouse removed", onMouseMove);
  //     };
  //   }, [onMouseMove]);

  return (
    <>
      <div>{loading ? "loading ...." : data}</div>
      <br />
      <div
        style={{
          display: "flex",
          marginBottom: "10px",
        }}>
        <span style={{ padding: "0 38px 0 10px" }}>Email: </span>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </div>
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <span style={{ padding: "0 10px 0 10px" }}>Password: </span>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </div>
      <div
        style={{
          display: "flex",
          marginBottom: "10px",
          padding: "0 10px 0 10px",
        }}>
        <button
          type="button"
          name="Submit"
          onClick={() => setCount((count) => count + 1)}>
          Submit
        </button>
      </div>
    </>
  );
};

export default EmailPassword;
