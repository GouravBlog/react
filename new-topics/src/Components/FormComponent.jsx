import React, { useState } from "react";

function FormComponent() {
  const [formData, setFormData] = useState({
    gender: "",
    country: "india",
    accept: false,
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("formData", formData);
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          <label htmlFor="male">Male :</label>

          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          <label htmlFor="female">Female :</label>
        </div>
        <div>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="india">India</option>
            <option value="usa">Usa</option>
            <option value="uk">Uk</option>
          </select>
        </div>
        <div>
          <input
            type="checkbox"
            name="accept"
            checked={formData.accept}
            onChange={handleChange}
          />
          all the accept all conditions
        </div>
        <button type="submit">Submit Form</button>
      </form>
    </>
  );
}
export default FormComponent;
