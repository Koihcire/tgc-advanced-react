import { useState } from "react";
import ProductContext from "./ProductContext";

//must have props
export default function ProductProvider(props){
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

      const context = {
        getProducts: ()=>{
          //get all the products
          return products;
        },
    
        addProduct: (newProduct) =>{
          setProducts([...products, newProduct])
        },

        getProductById: (productId)=>{
           const p =  products.find(p => p.id === productId);
           return p;
        }
      }

      //use productProvider as a higher order component
      return <ProductContext.Provider value={context}>
        {props.children}
      </ProductContext.Provider>
}