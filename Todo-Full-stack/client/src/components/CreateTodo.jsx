import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CreateTodo() {
  const navigate = useNavigate();
  const [todo, setTodo] = useState({
    title: "",
    description: " ",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let createTodo = await fetch("http://localhost:5050/api/v1/create-todo", {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          "Content-Type": "application/json",
        },
      });
      createTodo = await createTodo.json();
      if (createTodo.status) {
        toast.success(createTodo.message);
        navigate("/");
      } else {
        toast.error("Something Went Wrong");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="">Todo:</label>
          <input
            type="text"
            placeholder="Enter Your Todo Title"
            name="title"
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          />
        </div>
        <div className="form-control">
          <label htmlFor="">Description:</label>
          <input
            type="text"
            placeholder="Enter Your Todo Description"
            name="description"
            value={todo.description}
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          />
        </div>
        <button type="submit">Create Todo</button>
      </form>
    </>
  );
}

export default CreateTodo;
