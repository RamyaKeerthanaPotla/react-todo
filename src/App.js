import React from "react";
import { NavBar } from "./components/navBar";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { FormContent } from "./components/formContent";

function App() {
  return (
    <div>
      <NavBar />
      <FormContent />
    </div>
  );
}

export default App;
