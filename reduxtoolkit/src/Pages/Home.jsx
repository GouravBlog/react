import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import { fetchProducts } from "../Redux/productSlice";
import { STATUSES } from "../Redux/productSlice";

function Home() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);
  //   const [products, setProducts] = useState([]);

  //   console.log("prd", data);

  //   async function fetchData() {
  //     try {
  //       let data = await fetch("https://fakestoreapi.com/products");
  //       data = await data.json();
  //       setProducts(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  useEffect(() => {
    // fetchData();
    dispatch(fetchProducts());
  }, []);

  function handleAdd(prd) {
    dispatch(addToCart(prd));
  }

  if (status == STATUSES.LOADING) {
    return <h1>Loading....</h1>;
  }

  if (status == STATUSES.ERROR) {
    return <h3>Something Went Wrong</h3>;
  }

  return (
    <>
      {products &&
        products.map((prd) => {
          return (
            <div>
              <img
                src={prd.image}
                alt=""
                style={{ width: "100px", margin: "20px" }}
              />
              <h4>{prd.title}</h4>
              <p>{prd.description}</p>
              <button onClick={() => handleAdd(prd)}>Add To Cart</button>
            </div>
          );
        })}
    </>
  );
}

export default Home;
