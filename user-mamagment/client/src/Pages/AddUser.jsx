import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let data = await fetch("http://localhost:2000/api/create-user", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      data = await data.json();

      if (data.status) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Your Fullname"
          name="fullname"
          value={user.fullname}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="text"
          placeholder="************"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
      </Form.Group>
      <button type="submit" className="btn btn-dark">
        Submit
      </button>
    </Form>
  );
}

export default AddUser;
