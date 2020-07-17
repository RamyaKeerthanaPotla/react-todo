import React, { useEffect } from "react";

const Hello = () => {
  useEffect(() => {
    console.log("rendered");

    return () => {
      console.log("un mounted");
    };
  });
  return <p>Hello</p>;
};

export default Hello;
