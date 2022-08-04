import React from "react";
import ProductContext from "./ProductContext";

export default class AddProductForm extends React.Component {
    //allows us to use this.context later
    static contextType = ProductContext; //only for class based components

    state = {
        product_name: "",
        cost: ""
    }


    updateFormField = (e)=>{
        this.setState({
            [e.target.name]: e.target.value  
        })
    }

    addProduct = ()=>{
        this.context.addProduct(this.state.product_name, this.state.cost) 
    }

    render(){
        return(
            <React.Fragment>
                <div>
                    <label>Product Name</label>
                    <input type="text" name="product_name" value={this.state.product_name} onChange={this.updateFormField}/>
                </div>
                <div>
                    <label>Cost</label>
                    <input type="text" name="cost" value={this.state.cost} onChange={this.updateFormField}/>
                </div>
                <button onClick={this.addProduct}>Add</button>
            </React.Fragment>
        )
    }

}