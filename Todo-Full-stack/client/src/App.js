import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateTodo from "./components/CreateTodo";
import UpdateTodo from "./components/UpdateTodo";
import ViewDetails from "./components/ViewDetails";
import Axos from "./components/Axos";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-todo" element={<CreateTodo />} />
        <Route path="/update-todo" element={<UpdateTodo />} />
        <Route path="/view-todo/:id" element={<ViewDetails />} />
      </Routes> */}
      <Axos />
    </>
  );
}

export default App;
