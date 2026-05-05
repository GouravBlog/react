import React, { useState } from "react";

function FormFunctionalComponent() {
  // const [firstname, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Firstname : </label> <br />
          <input
            type="text"
            placeholder="Enter First Name"
            name="firstname"
            value={formData.firstname}
            // onChange={(e) => setFirstname(e.target.value)}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="">Lastname : </label> <br />
          <input
            type="text"
            placeholder="Enter Last Name"
            name="lastname"
            value={formData.lastname}
            // onChange={(e) => setLastname(e.target.value)}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="">Email : </label> <br />
          <input
            type="email"
            name="email"
            placeholder="Enter Email Id"
            value={formData.email}
            // onChange={(e) => setEmail(e.target.value)}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="">Password : </label> <br />
          <input
            type="password"
            name="password"
            placeholder="**********8"
            value={formData.password}
            // onChange={(e) => setPassword(e.target.value)}
            onChange={handleChange}
          />
        </div>
        <br />
        <button type="submit">Submit Form</button>
      </form>
    </>
  );
}

export default FormFunctionalComponent;
