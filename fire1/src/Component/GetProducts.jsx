import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firbase/firebaseConfig";
import { NavLink, useNavigate } from "react-router-dom";

function GetProducts() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  async function fetchdata() {
    const productsRef = collection(db, "products");
    try {
      const querySnapshot = await getDocs(productsRef);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(data);
    } catch (error) {
      console.log("err", error);
      alert("Something Went Wrong");
    }
  }

  useEffect(() => {
    fetchdata();
  }, []);

  async function handleDelete(id) {
    try {
      let productRef = doc(db, "products", id);

      await deleteDoc(productRef);

      alert("document Deleted");

      window.location.reload();
    } catch (error) {
      console.log("err", error);
      alert("Something Went Wrong");
    }
  }

  return (
    <>
      <button onClick={() => navigate("/add-product")}>Add Products</button>
      {data &&
        data.map((prd) => {
          return (
            <div key={prd.id}>
              <h3>{prd.name}</h3>
              <p>{prd.description}</p>
              <span>
                <b>Price{prd.price}</b>
              </span>{" "}
              &nbsp;&nbsp;
              <button>
                <NavLink to={`/update-doc/${prd.id}`}>Edit</NavLink>
              </button>
              <button onClick={() => handleDelete(prd.id)}>Delete</button>
              <button>View</button>
              <hr />
            </div>
          );
        })}
    </>
  );
}

export default GetProducts;
