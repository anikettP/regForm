import React, { useState } from "react";
import FormRenderer from "./FormRenderer";
import SubmittedDataTable from "./SubmittedDataTable";

const apiResponses = {
  "User Information": {
    fields: [
      { name: "firstName", type: "text", label: "First Name", required: true },
      { name: "lastName", type: "text", label: "Last Name", required: true },
      { name: "age", type: "number", label: "Age", required: false },
    ],
  },
  "Address Information": {
    fields: [
      { name: "street", type: "text", label: "Street", required: true },
      { name: "city", type: "text", label: "City", required: true },
      { name: "state", type: "dropdown", label: "State", required: true, options: ["California", "Texas", "New York"] },
      { name: "zipCode", type: "text", label: "Zip Code", required: false },
    ],
  },
  "Payment Information": {
    fields: [
      { name: "cardNumber", type: "text", label: "Card Number", required: true },
      { name: "expiryDate", type: "date", label: "Expiry Date", required: true },
      { name: "cvv", type: "password", label: "CVV", required: true },
      { name: "cardholderName", type: "text", label: "Cardholder Name", required: true },
    ],
  },
};

const DynamicForm = () => {
  const [selectedForm, setSelectedForm] = useState("");
  const [formData, setFormData] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormChange = (event) => {
    setSelectedForm(event.target.value);
    setFormData({});
    setSubmittedData(null);
  };

  const handleSubmit = (data) => {
    setSubmittedData(data);
    alert("Form submitted successfully!");
  };

  return (
    <div>
      <header>
        <h1>Dynamic Form</h1>
      </header>
      <div className="form-selector">
        <label htmlFor="formType">Select Form Type: </label>
        <select id="formType" value={selectedForm} onChange={handleFormChange}>
          <option value="">Select</option>
          <option value="User Information">User Information</option>
          <option value="Address Information">Address Information</option>
          <option value="Payment Information">Payment Information</option>
        </select>
      </div>
      {selectedForm && (
        <FormRenderer
          fields={apiResponses[selectedForm]?.fields || []}
          onSubmit={handleSubmit}
        />
      )}
      {submittedData && <SubmittedDataTable data={submittedData} />}
      <footer>
        <p>Dynamic Form ©copyright by Aniket Patel</p>
      </footer>
    </div>
  );
};

export default DynamicForm;
