import { useEffect, useState } from "react";
import { realDB } from "../firbase/firebaseConfig";
import { ref, set, push, get, update } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function UpdateUser() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
    age: "",
  });

  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  async function fetchSingleData() {
    try {
      let userRef = ref(realDB, "users/" + id);
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        setUser(snapshot.val());
      } else {
        alert("no such data found in id");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchSingleData();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let userRef = ref(realDB, "users/" + id);
      await update(userRef, user);
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
        <button type="Submit">Update</button>
      </form>
    </>
  );
}

export default UpdateUser;
