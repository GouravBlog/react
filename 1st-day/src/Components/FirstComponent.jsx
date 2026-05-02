import React, { Fragment } from "react";

class FirstComponent extends React.Component {
  name = "Ram";
  render() {
    return (
      <>
        <div>
          <h1>
            My First Component {this.name} {2 + 2}
          </h1>
          <h2>Heading 2</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
          suscipit minus laborum doloribus! Placeat libero eum nemo dolore alias
          ipsum a accusantium? Nam harum natus praesentium blanditiis. Optio,
          facere vitae.
        </p>
        <input type="text" className="Abc" />
      </>
    );
  }
}

export default FirstComponent;
