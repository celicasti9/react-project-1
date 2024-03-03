import List from '../../components/List';
import Card from '../../components/Card';
import '../App.jsx'





function Dashboard(products) {
  return (
    <div>
      <List><Card />
     </List>
         
      <h1>About Us</h1>
      {/* <img src={imgURL} alt="the office gif" className="page-img" /> */}

      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;

{/*id={product.id}
            title={product.title}
            price={product.price}
            rating={product.rating}
            description={product.description}
            discountPercentage={product.discountPercentage}
            stock={product.stock}
            category={product.category}
            brand={product.brand}
            thumbnail={product.thumbnail}*/}