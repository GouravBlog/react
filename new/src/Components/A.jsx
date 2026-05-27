import Parent from "./Parent";

function A(props) {
  let { count, anldleclick, name } = props;

  return (
    <div>
      A Component {name}
      <button onClick={anldleclick}>{count} click</button>
      <div>-------------------------------</div>
    </div>
  );
}

export default Parent(A, 5);
