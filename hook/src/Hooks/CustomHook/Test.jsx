import useFetch from "./UseFetch";

const Test = () => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products",
  );

  if (loading) {
    return <h1>Loading.............</h1>;
  }

  if (error) {
    return <p>Someting went wrong</p>;
  }

  return (
    <>
      {data &&
        data.map((prd) => (
          <div>
            <span>
              <b>Title</b>
              {prd.title}
            </span>
          </div>
        ))}
    </>
  );
};

export default Test;
