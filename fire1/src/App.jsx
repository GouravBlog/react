import { Route, Routes } from "react-router-dom";
import Signup from "./Component/Signup";
import Home from "./Component/Home";
import GetProducts from "./Component/GetProducts";
import EditProduct from "./Component/EditProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GetProducts />} />
        <Route path="/add-product" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/update-doc/:id" element={<EditProduct />} />
      </Routes>
    </>
  );
}

export default App;
