import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import  '../src/data/products.json'

function Card({ id,
  title,
  price,
  rating,
  description,
  discountPercentage,
  stock,
  category,
  brand,
  thumbnail,
  deleteProduct
}) {

  const handleDeleteClick = () => {
    deleteProduct(id)


  };


  return (
    <div className="Card">
      <p className="card-title"><b></b> {title}</p>
      <img src={thumbnail} alt="" width="100" height="100" />
      <p className="card-price"><b>Price:</b> {price}</p>
      <p className="card-rating"><b>Rating: {rating}</b></p>
      <Link to={`/item/${id}`}>
        <button className="details-button" >
          Details
        </button>
      </Link>
      <button className="delete-button" onClick={handleDeleteClick}>
        Delete
      </button>
      <Link to={`/update/${id}`}>
        <button className="update-button" >
          Update
        </button>
      </Link>
      <br />
    </div>
  )
}
export default Card;