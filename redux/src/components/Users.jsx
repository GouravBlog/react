import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/action/CounterAction";

const Users = () => {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  if (error) {
    return <h2>Something Went Wrong</h2>;
  }

  return (
    <>
      {users &&
        users.map((user) => {
          return (
            <div>
              <h3>{user.title}</h3>
              <h4>{user.body}</h4>
            </div>
          );
        })}
    </>
  );
};

export default Users;
