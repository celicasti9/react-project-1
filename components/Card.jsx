

function Card (products) {
    const handleDeleteClick = () => {
        // 
        console.log(`Deleting ${products.title}`);
      };

    return (
      <div className="Card">
        <p className="card-title"><b></b> {products.title}</p>
        <p className="card-price"><b>Price:</b> {products.price}</p>
        <p className="card-rating"><b>Rating: {products.rating}</b></p>
        <button className="buy-button" onClick={handleDeleteClick}>
        Delete
      </button>
      <br />
      </div>
    )
  }
  
  export default Card;
  