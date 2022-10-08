function Todo(props) {
  function deleteHandle() {
    console.log("Clicked!");
    console.log(props.text);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <span>A Span</span>
        <button className="btn" onClick={deleteHandle}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
