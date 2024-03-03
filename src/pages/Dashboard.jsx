import List from '../../components/List';
import Card from '../../components/Card';
import products from '../data/products.json';

function Dashboard() {
  // Assuming 'products' is an array of product objects
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

export default Dashboard;
