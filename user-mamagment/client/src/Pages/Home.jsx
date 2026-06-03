import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Table from "react-bootstrap/Table";

function Home() {
  const [users, setUsers] = useState([]);

  async function fetchdata() {
    try {
      let data = await fetch("http://localhost:2000/api/users");
      data = await data.json();
      setUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <button className="btn btn-primary mt-4 ml-auto">
        <NavLink to="/add-user" className="text-light">
          Add User
        </NavLink>
      </button>
      <Table striped bordered hover size="sm" className="m-5">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, i) => {
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>{user.fullname}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>
                    <button className="btn btn-primary me-2">View</button>
                    <button className="btn btn-outline-warning me-2">
                      Edit
                    </button>
                    <button className="btn btn-danger me-2">Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}

export default Home;
