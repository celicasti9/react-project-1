import React from "react";
import { Link } from "react-router-dom";


function Card (products) {


    const handleDeleteClick = () => {
        // 
        console.log(`Deleting ${products.title}`);
      };

      const showDetailsClick = () => {
        // 
        console.log(`Showing details:\nID: ${products.id}\nTitle: ${products.title}\nDescription: ${products.description}\nPrice: ${products.price}\nDiscount: ${products.discountPercentage}\nStock: ${products.stock}\nBrand: ${products.brand}\nCategory: ${products.category}`);
      };



      let Pic = products.thumbnail;
    return (
      <div className="Card">
        <p className="card-title"><b></b> {products.title}</p>
        <img src={Pic} alt="" width="100" height="100" />
        <p className="card-price"><b>Price:</b> {products.price}</p>
        <p className="card-rating"><b>Rating: {products.rating}</b></p>
        <Link to={`/item/${products.id}`}>
      <button className="details-button" onClick={showDetailsClick}>
        Details
      </button></Link>
        <button className="buy-button" onClick={handleDeleteClick}>
        Delete
      </button>
      <br />
      </div>
    )
  }
  
  export default Card;
  

  {/* <Link to="/about"> About </Link> */}