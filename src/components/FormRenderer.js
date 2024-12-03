import React, { useState } from "react";

const FormRenderer = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState({});
  const [errorMessages, setErrorMessages] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};
    fields.forEach((field) => {
      if (field.required && !formData[field.name]) {
        errors[field.name] = `${field.label} is required`;
      }
    });
    setErrorMessages(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
      setFormData({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name} className="form-field">
          <label>
            {field.label} {field.required && "*"}:
            {field.type === "dropdown" ? (
              <select
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleInputChange}
              />
            )}
          </label>
          {errorMessages[field.name] && <p className="error">{errorMessages[field.name]}</p>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormRenderer;
