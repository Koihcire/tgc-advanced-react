import React, {useContext} from 'react'
import ProductContext from './ProductContext'

export default function ProductListing(){
    // has access to context cos productlisting is rendered under productcontextprovider in app.js
    const context = useContext(ProductContext)
    return(
        <React.Fragment>
            <ul>
                {context.getProducts().map(p => {
                    return <li>{p.product_name}, ${p.cost}</li>
                })}
            </ul>
        </React.Fragment>
    )
}