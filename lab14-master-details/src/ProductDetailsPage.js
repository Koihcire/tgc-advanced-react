import {Fragment, useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import ProductContext from './ProductContext';

export default function ProductDetailsPage(props){
    // eg:/products/:productId
    // useparams will return an object with all the parameters and their values just like req.params in express
    const {productId} = useParams();
    const [product, setProduct] = useState({});
    const context = useContext(ProductContext);

    useEffect(()=>{
        const product = context.getProductById(parseInt(productId));
        setProduct(product)
    },[productId]);


return(
    <Fragment>
        <h1>{product.product_name}</h1>
        <ul>
            <li>Product ID: {product.id}</li>
            <li>Cost: ${product.cost}</li>
        </ul>
    </Fragment>

)
}