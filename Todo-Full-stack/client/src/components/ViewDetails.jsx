import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ViewDetails = () => {
  const params = useParams();
  const [todo, setTodo] = useState({});

  async function fetchTodo() {
    try {
      let data = await fetch(
        `http://localhost:5050/api/v1/get-singleTodo/${params.id}`,
      );
      data = await data.json();
      if (data.status) {
        setTodo(data.todo);
      } else {
        toast.error("Something Went Wrong");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTodo();
  }, []);
  return (
    <>
      <div>
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
      </div>
    </>
  );
};

export default ViewDetails;
