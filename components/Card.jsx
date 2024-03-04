import React from "react";
import { Link } from "react-router-dom";
import products from '../src/data/products.json'

function Card (products) {


    const handleDeleteClick = () => {
        // 
        console.log(`Deleting ${products.title}`);
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
        <button className="buy-button" onClick={handleDeleteClick}>
        Delete
      </button>
      <br />
      </div>
    )
  }
  
  export default Card;



  {/*




function Card({ id, title, price, rating, description, discountPercentage, stock, category, brand, thumbnail }) {
  const [productsList, setProductsList] = useState(products);

  const handleDeleteClick = () => {
    // Find the index of the product in the array
    const index = productsList.findIndex((product) => product.id === id);

    if (index !== -1) {
      // Create a new array without the deleted product
      const updatedProducts = [...productsList.slice(0, index), ...productsList.slice(index + 1)];
      
      // Update the state to trigger a re-render
      setProductsList(updatedProducts);
      
      console.log(`Deleting ${title}`);
    }
  };*/}
  
