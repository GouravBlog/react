import React from "react";
import "./Css.css";
import abc from "./Css.module.css";

function Css() {
  const paraStyle = {
    color: "red",
    backgroundColor: "yellow",
    fontSize: "15px",
    padding: "10px",
  };

  return (
    <div>
      <h1 style={{ backgroundColor: "red", fontSize: "50px" }}>Heading</h1>
      <p style={paraStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        reiciendis!Lorem100
      </p>
      <ul>
        <li>one</li>
        <li>Two</li>
        <li>Three</li>
      </ul>

      <div className="new">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
        blanditiis vero saepe tenetur nihil consequuntur voluptatum nisi,
        perspiciatis vel explicabo!
      </div>

      <p className={abc.new}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
        doloribus deserunt placeat asperiores cum, incidunt corporis assumenda
        ea quae culpa distinctio aperiam, odit earum, perferendis illo voluptate
        necessitatibus veniam in!
      </p>
    </div>
  );
}

export default Css;
