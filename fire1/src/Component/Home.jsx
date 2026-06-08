import { db } from "../firbase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const Home = () => {
  const productsRef = collection(db, "products");

  const handleAdd = async () => {
    await addDoc(productsRef, {
      name: "iPHONE",
      RS: 1000,
    });
  };
  return (
    <div>
      Home Component <button onClick={handleAdd}>Add Doc</button>
    </div>
  );
};

export default Home;
