import { useState, useEffect } from "react";
import axios from "axios";

function Axos() {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      let { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
      );
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function handlePost() {
    try {
      const data = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: "New Title",
          body: "New Body",
          userId: 231,
        },
      );
      console.log("post data", data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleUpdate() {
    try {
      let id = 99;
      let data = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          title: "Update 99 Title",
          body: "Updated Body",
        },
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handlePatch() {
    try {
      let id = 98;
      let data = await axios.patch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          title: "Update 98 Title",
        },
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  //   async function handleDelete() {
  //     try {
  //       let id = 65;

  //       const response = await axios.delete(
  //         `https://jsonplaceholder.typicode.com/posts/${id}`,
  //       );

  //       console.log("Response:", response);
  //       console.log("Response Data:", response.data);
  //       console.log("Status:", response.status);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  async function handleDelete() {
    try {
      const response = await axios.delete(
        "https://jsonplaceholder.typicode.com/posts/65",
      );

      if (response.status === 200) {
        console.log("Deleted Successfully");
      }

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      Axios Component <button onClick={handlePost}>Post Data</button>{" "}
      <button onClick={handleUpdate}>Update Data</button>
      <button onClick={handlePatch}>Update Patch Method</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Axos;
