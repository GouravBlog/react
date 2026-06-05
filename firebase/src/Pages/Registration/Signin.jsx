import { useState } from "react";
import { auth } from "../../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User Signin:", userCredential.user);
        navigate("/");
      })
      .catch((error) => {
        console.log("Error Code:", error.code);
        console.log("Error Message:", error.message);
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>User SignIn</h1>
        <div>
          <label htmlFor="">Email :</label>
          <input
            type="text"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Password :</label>
          <input
            type="text"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit Form</button>
      </form>
    </>
  );
}

export default SignIn;
