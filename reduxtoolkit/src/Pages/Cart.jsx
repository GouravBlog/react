import { useDispatch, useSelector } from "react-redux";
import { removeTocart } from "../Redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  function handleRemove(id) {
    dispatch(removeTocart(id));
  }

  return (
    <>
      {cart &&
        cart.map((crt) => {
          return (
            <div>
              <img
                src={crt.image}
                alt=""
                style={{ width: "50px", margin: "20px" }}
              />
              <h4>{crt.title}</h4>
              <p>{crt.description}</p>
              <button onClick={() => handleRemove(crt.id)}>
                Remove To Cart
              </button>
            </div>
          );
        })}
    </>
  );
}

export default Cart;
