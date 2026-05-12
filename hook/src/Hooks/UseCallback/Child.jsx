import React, { useEffect } from "react";

const Child = ({ handleCounter2 }) => {
  useEffect(() => {
    console.log("*******");
  }, [handleCounter2]);

  return <div>Child</div>;
};

export default Child;
