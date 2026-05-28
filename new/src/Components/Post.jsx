import { useEffect, useState } from "react";

const Post = () => {
  const [post, setPost] = useState([]);

  async function fetchData() {
    try {
      let data = await fetch("https://jsonplaceholder.typicode.com/posts");
      data = await data.json();
      setPost(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <ul>
        {post.map((post) => {
          return (
            <li>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Post;
