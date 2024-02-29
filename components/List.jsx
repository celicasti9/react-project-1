function List (props) {
  return (
    <div>
      <h2>Products List</h2>
      {props.children} 
    </div>
  );
}

export default List;