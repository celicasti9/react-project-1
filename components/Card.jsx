import React from "react";
import { Link } from "react-router-dom";
import '../src/data/products.json'
function Card(products) {
  const handleDeleteClick = () => {
    // Assuming products is fetched from a state or props
    const updatedProducts = products.filter((product) => product.id !== products.id);
    // Assuming you have a state or props to store the products
    // Update the state or props with the updated product list
    // For example, if using state:
    setProducts(updatedProducts);
    console.log(`Successfully deleted ${products.title}`);
  };
  const showDetailsClick = () => {
    //
    console.log(`Showing details:\nID: ${products.id}\nTitle: ${products.title}\nDescription: ${products.description}\nPrice: ${products.price}\nDiscount: ${products.discountPercentage}\nStock: ${products.stock}\nBrand: ${products.brand}\nCategory: ${products.category}`);
  };
  const Pic = products.thumbnail;
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
      <button className="delete-button" onClick={handleDeleteClick}>
        Delete
      </button>
      <Link to={`/update/${products.id}`}>
        <button className="update-button" onClick={showDetailsClick}>
          Update
        </button></Link>
      <br />
    </div>
  )
}
export default Card;



