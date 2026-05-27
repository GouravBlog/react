import Parent from "./Parent";

const B = (props) => {
  let { count, anldleclick, name } = props;

  return (
    <div>
      B Component {name}
      <button onMouseOver={anldleclick}>{count} MouseOver</button>
    </div>
  );
};

export default Parent(B, 2);
