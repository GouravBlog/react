import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);

  async function fetchTodos() {
    try {
      let data = await fetch("http://localhost:5050/api/v1/get-allTodos");
      data = await data.json();
      if (data.status) {
        setTodos(data.todos);
      } else {
        toast.error("Something Went Wrong");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <button
        onClick={() => navigate("/create-todo")}
        style={{ cursor: "pointer" }}
      >
        Add todo
      </button>
      <table
        border={1}
        cellPadding={10}
        cellSpacing={10}
        style={{
          width: "100%",
          textAlign: "center",
          borderCollapse: "collapse",
          marginTop: "20px",
          borderColor: "blue",
        }}
      >
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos &&
            todos.map((todo, i) => {
              console.log(todo);
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>{todo.title}</td>
                  <td>{todo.description}</td>
                  <td>
                    <button
                      style={{
                        padding: "10px",
                        borderRadius: "2px",
                        backgroundColor: "blue",
                        color: "#fff",
                        margin: "0px 10px",
                        cursor: "pointer",
                      }}
                    >
                      <NavLink to={`/view-todo/${todo._id}`}> View</NavLink>
                    </button>
                    <button
                      style={{
                        padding: "10px",
                        borderRadius: "2px",
                        backgroundColor: "orange",
                        color: "#fff",
                        margin: "0px 10px",
                        cursor: "pointer",
                      }}
                    >
                      Edit
                    </button>
                    <button
                      style={{
                        padding: "10px",
                        borderRadius: "2px",
                        backgroundColor: "red",
                        color: "#fff",
                        margin: "0px 10px",
                        cursor: "pointer",
                      }}
                    >
                      Delte
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Home;
