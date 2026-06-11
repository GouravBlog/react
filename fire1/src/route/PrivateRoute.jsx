import { Navigate } from "react-router-dom";
import { userAuth } from "../Context/firebase";

function PrivateRoute({ children }) {
  const { user, loading } = userAuth();

  if (loading) return <h3>Loading....</h3>;

  return user ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
