import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleAuthProvider } from "../firbase/firebaseConfig";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

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
      signInWithEmailAndPassword(auth, user.email, user.password);
      alert("User Login Succesfully");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  async function googleLogin() {
    try {
      await signInWithPopup(auth, googleAuthProvider);
      navigate("/");
    } catch (error) {
      console.log(error.message);
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
        <button onClick={googleLogin}>Google Login</button>
      </form>
    </>
  );
}

export default Login;
