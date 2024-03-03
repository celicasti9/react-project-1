import List from '../../components/List';
import Card from '../../components/Card';
import products from '../data/products.json';
import { Link } from "react-router-dom";

function ItemDetails() {

  {/*SHould show the details of the item clicked

import { Link } from "react-router-dom";

 const showDetailsClick = (id) => {
    // Use the Link component to navigate to the item details page
    return <Link to={`/item/${id}`} />;
  };

*/}
const showDetailsClick = (id) => {
  // Use the Link component to navigate to the item details page
  return <Link to={`/item/${id}`} />;
};
 
  const productsList = products.map(({ id, title, price, rating, description, discountPercentage, stock, category, brand, thumbnail }) => (
    <Card
      key={id}
      id={id}
      title={title}
      price={price}
      rating={rating}
      description={description}
      discountPercentage={discountPercentage}
      stock={stock}
      category={category}
      brand={brand}
      thumbnail={thumbnail}
    />
  ));

  return (
    <div>
      <List>{productsList}</List>
    </div>
  );
}

export default ItemDetails;


{/*const showDetailsClick = () => {
        // 
        console.log(`Showing details:\nID: ${products.id}\nTitle: ${products.title}\nDescription: ${products.description}\nPrice: ${products.price}\nDiscount: ${products.discountPercentage}\nStock: ${products.stock}\nBrand: ${products.brand}\nCategory: ${products.category}`);
      }; */}