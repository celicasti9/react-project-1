//import "../styles/list.css"

function List (props) {
  return (
    <div className="list">
      <h2 className="list-title">Products List</h2>
      {props.children} 
    </div>
  );
}

export default List;