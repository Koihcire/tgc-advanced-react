import './App.css';
import React, {useState} from 'react';
import ProductContext from './ProductContext';
import ProductListing from './ProductListing';
import AddProductForm from './AddProductForm';

function App() {

  const [products, setProducts] = useState([
    {
      'id': 1,
      'product_name': "Cookies",
      "cost": 9.99
    },
    {
      'id': 2,
      'product_name': "Milk",
      "cost": 3.99
    },
    {
      'id': 3,
      'product_name': "Cereal",
      "cost": 19.99
    },
  ])

  // this context object goes into product context
  const context = {
    getProducts: ()=>{
      //get all the products
      return products;
    },

    addProduct: (productName, cost) =>{
      const cloned = [...products, {
        id: Math.floor((Math.random() * 100000) + 10000),
        product_name: productName,
        cost: cost
      }]
      setProducts(cloned);
    }
  }

  return (
    <React.Fragment>
      {/* set the value of product context to be the context object that we just created */}
      <ProductContext.Provider value={context}>
        <h1>My Catalog</h1>
        {/* ProductsListing will have access to context */}
        <ProductListing/>
        <AddProductForm/>
      </ProductContext.Provider>

    </React.Fragment>
  );
}

export default App;
