

import List from "../../components/List";
import Card from "../../components/Card"



function Dashboard () {
    
  
    return (
      <>
      
      
      <div>

        <List>
        {products.map((product) => (
          <Card
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
        ))}
        </List>
        

        </div>
        <Footer />
        
      </>
    )
  }
  
  export default Dashboard