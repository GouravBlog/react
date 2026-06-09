import { useState } from "react";
import { db } from "../firbase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const productsRef = collection(db, "products");
  const [products, setProducts] = useState({
    name: "",
    description: "",
    price: 0,
  });

  // const handleAdd = async () => {
  //   await addDoc(productsRef, {
  //     name: "iPHONE",
  //     RS: 1000,
  //   });
  // };

  function handleChange(event) {
    setProducts({ ...products, [event.target.name]: event.target.value });
  }

  async function handleAdd() {
    try {
      await addDoc(productsRef, products);
      alert("Product Add Succesfully");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <form>
        <h2>Add Products</h2>
        <div>
          <label htmlFor="">Product Name</label>
          <input
            type="text"
            placeholder="Enter Product Name"
            name="name"
            value={products.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Product Description</label>
          <input
            type="text"
            placeholder="Enter Product Description"
            name="description"
            value={products.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Product Price</label>
          <input
            type="number"
            placeholder="Enter Product Price"
            name="price"
            value={products.price}
            onChange={handleChange}
          />
        </div>
      </form>
      <button onClick={handleAdd}>Add Products</button>
    </div>
  );
};

export default Home;
