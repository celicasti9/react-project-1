import List from  '../componentsList';
import Card from '../components/Card';

function Dashboard() {
  return (
    
      <div>

        <List>
        {products.map((product) => (
          <Card>
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
          </Card>
        ))}
        </List>
      </div>     
      
  );
}

export default Dashboard;