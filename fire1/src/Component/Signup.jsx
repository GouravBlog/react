import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userAuth } from "../Context/firebase";

function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signupUserWithEmailAndPassword } = userAuth();

  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    try {
      if (user.email == "" || user.password == "") {
        alert("all fileds are required");
        return;
      }
      signupUserWithEmailAndPassword(user.email, user.password);
      alert("User Signup Succesfully");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Email:</label>
          <input
            type="text"
            placeholder="Enter Your Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Password:</label>
          <input
            type="text"
            placeholder="Enter Your Password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Signup;
