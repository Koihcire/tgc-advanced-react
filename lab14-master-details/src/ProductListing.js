import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import ProductContext from './ProductContext'

export default function ProductListing(){
    // has access to context cos productlisting is rendered under productcontextprovider in app.js
    const context = useContext(ProductContext)
    return(
        <React.Fragment>
            <h1>Product Listings</h1>
            <ul>
                {context.getProducts().map(p => {
                    return <li>
                        <Link to={'/product/' + p.id}> {p.product_name} </Link>
                        </li>
                })}
            </ul>
        </React.Fragment>
    )
}