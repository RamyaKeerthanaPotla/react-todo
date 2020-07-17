import React from "react";
import { DetailsForm } from "./components/detailsForm";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { FormContent } from "./components/formContent";

function App() {
  return (
    <div>
      <DetailsForm />
      <FormContent />
    </div>
  );
}

export default App;
