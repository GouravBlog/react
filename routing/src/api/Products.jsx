import React from "react";
import { useLoaderData } from "react-router-dom";

const Products = () => {
  const data = useLoaderData();
  console.log("data", data);
  return (
    <>
      <div>
        {data &&
          data.map((prd) => (
            <div style={{ borderBottom: "1px solid black" }}>
              <div>{prd.title}</div>
              <div>{prd.description}</div>
            </div>
          ))}
      </div>
    </>
  );
};

export const getProductsData = async (req, res) => {
  try {
    let data = await fetch("https://fakestoreapi.com/products");
    data = await data.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default Products;
