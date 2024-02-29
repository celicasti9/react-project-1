//import "../styles/list.css"

function List (props) {
  return (
    <div className="list">
      <div>
      {props.children} 
      </div>
    </div>
  );
}

export default List;