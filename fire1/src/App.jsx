import { Route, Routes } from "react-router-dom";
import Signup from "./Component/Signup";
import Home from "./Component/Home";
import GetProducts from "./Component/GetProducts";
import EditProduct from "./Component/EditProduct";
import Login from "./Component/Login";
import PrivateRoute from "./route/PrivateRoute";
// import CreateUser from "./RealtimeComponents/CreateUser";
// import Home from "./RealtimeComponents/Home";
// import UpdateUser from "./RealtimeComponents/UpdateUser";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <GetProducts />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-product"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/update-doc/:id"
          element={
            <PrivateRoute>
              <EditProduct />
            </PrivateRoute>
          }
        />

        {/* Realtime */}
        {/* <Route path="/" element={<Home />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/update-user/:id" element={<UpdateUser />} /> */}
      </Routes>
    </>
  );
}

export default App;
