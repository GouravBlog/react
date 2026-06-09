import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firbase/firebaseConfig";
import { useNavigate } from "react-router-dom";

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({});

  async function fetchSingledata() {
    try {
      const docRef = doc(db, "products", id);
      let docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUser(docSnap.data());
      } else {
        console.log("No such data");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchSingledata();
  }, []);

  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  async function handleUpdate() {
    try {
      let produtRef = doc(db, "products", id);
      await updateDoc(produtRef, user);
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("something went wrong");
    }
  }
  return (
    <>
      <h1>Hello</h1>
      <form>
        <h2>Edit Product</h2>
        <div>
          <label htmlFor="">Product Name</label>
          <input
            type="text"
            placeholder="Enter Product Name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Product Description</label>
          <input
            type="text"
            placeholder="Enter Product Description"
            name="description"
            value={user.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Product Price</label>
          <input
            type="number"
            placeholder="Enter Product Price"
            name="price"
            value={user.price}
            onChange={handleChange}
          />
        </div>
      </form>
      <button onClick={handleUpdate}>Update Product</button>
    </>
  );
};

export default EditProduct;
