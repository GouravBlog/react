import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const prd = useLoaderData();
  console.log(prd);
  return <div>Home Component</div>;
};

export default Home;
