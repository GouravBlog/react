import { useState } from "react";
import { realDB } from "../firbase/firebaseConfig";
import { ref, set, push } from "firebase/database";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
    age: "",
  });

  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    try {
      let userRef = ref(realDB, "users");
      let newUserRef = push(userRef);
      set(newUserRef, user);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Fullname</label>
          <input
            type="text"
            name="fullname"
            value={user.fullname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">password</label>
          <input
            type="text"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Age :</label>
          <input
            type="number"
            name="age"
            value={user.age}
            onChange={handleChange}
          />
        </div>
        <button type="Submit">Submit</button>
      </form>
    </>
  );
}

export default CreateUser;
