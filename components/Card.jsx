function Card (props) {
    return (
      <div className="Card">
        <p><b>Title:</b> {props.title}</p>
        <p><b>Price:</b> {props.price}</p>
        <p><b>Rating: {props.rating}</b></p>
        <br />
      </div>
    )
  }
  
  export default Card;
  