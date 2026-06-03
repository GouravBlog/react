import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AddUser from "./Pages/AddUser";
import EditUser from "./Pages/EditUser";
import SingleUser from "./Pages/SingleUser";
import Header from "./Components/Navbar";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
        <Route path="/single-user/:id" element={<SingleUser />} />
      </Routes>
    </>
  );
}

export default App;
