function Card (props) {
    return (
      <div className="Card">
        <p className="card-title"><b>Title:</b> {props.title}</p>
        <p className="card-price"><b>Price:</b> {props.price}</p>
        <p className="card-rating"><b>Rating: {props.rating}</b></p>
        <br />
      </div>
    )
  }
  
  export default Card;
  