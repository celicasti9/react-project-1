// Dashboard.jsx
import React from 'react';
import List from '../../components/List';
import Card from '../../components/Card';
import products from '../data/products.json';

function Dashboard() {
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
    />
  ));

  return (
    <div>
      <List>{productsList}</List>
    </div>
  );
}

export default Dashboard;
