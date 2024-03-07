// Dashboard.jsx
import React from 'react';
import List from '../components/List';
import Card from '../components/Card';


function Dashboard({ products, setProducts }) {

  const deleteProduct = (id) => {
    let newProducts = products.filter((product) => product.id != id)
    setProducts(newProducts)
  }

  const productsList = products.map((product) => (
    <Card
      key={product.id}
      id={product.id}
      title={product.title}
      price={product.price}
      rating={product.rating}
      description={product.description}
      discountPercentage={product.discountPercentage}
      stock={product.stock}
      category={product.category}
      brand={product.brand}
      thumbnail={product.thumbnail}
      deleteProduct={deleteProduct}
    />
  ));

  return (
    <div>
      <List>{productsList}</List>
    </div>
  );
}

export default Dashboard;
