import { Route, Routes } from "react-router-dom";
// import Signup from "./Component/Signup";
// import Home from "./Component/Home";
// import GetProducts from "./Component/GetProducts";
// import EditProduct from "./Component/EditProduct";
import CreateUser from "./RealtimeComponents/CreateUser";
import Home from "./RealtimeComponents/Home";
import UpdateUser from "./RealtimeComponents/UpdateUser";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<GetProducts />} /> */}
        {/* <Route path="/add-product" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/update-doc/:id" element={<EditProduct />} /> */}

        {/* Realtime */}
        <Route path="/" element={<Home />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/update-user/:id" element={<UpdateUser />} />
      </Routes>
    </>
  );
}

export default App;
