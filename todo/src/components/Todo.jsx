import { useState } from "react";

function Todo() {
  const [newTodo, setNewTodo] = useState("");
  const [todolist, setTodoList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    try {
      setTodoList([
        ...todolist,
        { id: Date.now(), text: newTodo, completed: false, isDeleted: false },
      ]);
      setNewTodo("");
    } catch (error) {
      console.log(error);
    }
  }

  function handleTask(index) {
    let newTodoList = [...todolist];
    newTodoList[index].completed = !newTodoList[index].completed;
    setTodoList(newTodoList);
  }

  function handleDelete(id) {
    let newTodoList = [...todolist];
    // newTodoList[index].isDeleted = !newTodoList[index].isDeleted;
    // setTodoList(newTodoList);

    let filterData = newTodoList.filter((todo) => {
      return todo.id !== id;
    });

    setTodoList(filterData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">New todo:</label>
          <input
            type="text"
            placeholder="Enter new task"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button type="submit">Add</button>
        </div>
      </form>

      <ol>
        {todolist &&
          todolist.map((todo, i) => {
            return (
              <li
                key={i}
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text} &nbsp;&nbsp;
                <button onClick={() => handleTask(i)}>Task </button>{" "}
                &nbsp;&nbsp;
                <button onClick={() => handleDelete(todo.id)}>Delete </button>
              </li>
            );
          })}
      </ol>
    </>
  );
}

export default Todo;
