import { Route, Routes } from "react-router-dom";
import Signup from "./Component/Signup";
import Home from "./Component/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Signup />
    </>
  );
}

export default App;
