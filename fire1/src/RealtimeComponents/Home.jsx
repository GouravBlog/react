import { ref, onValue, remove } from "firebase/database";
import { useState, useEffect } from "react";
import { realDB } from "../firbase/firebaseConfig";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  function getUser() {
    const userRef = ref(realDB, "users");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = Object.entries(data).map(([id, value]) => ({
        id,
        ...value,
      }));
      setUsers(userArray);
    });
  }

  useEffect(() => {
    getUser();
  }, []);

  function handleDelete(id) {
    try {
      const userRef = ref(realDB, "users/" + id);
      remove(userRef);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <button>
        <NavLink to="/create-user">Create User</NavLink>
      </button>
      <div>
        {users &&
          users.map((user) => {
            return (
              <div>
                <div>
                  <b>Fullname :</b>
                  {user.fullname}
                </div>
                <div>
                  <b>Email :</b>
                  {user.email}
                </div>
                <div>
                  <b>Age:</b>
                  {user.age}
                </div>
                <button>
                  <NavLink to={`/update-user/${user.id}`}>Edit </NavLink>
                </button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
                <hr></hr>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Home;
