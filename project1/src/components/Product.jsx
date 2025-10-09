function Product(){
    const{id,item,item_unit,item_price}=Product_detail

    return(
        <div className="container">
            <p>Product Id:{id}</p>
            <p>Product Name:{item}</p>
            <p>Product Unit:{item_unit}</p>
            <p>Product Price: ${item_price}</p>
            <p>Subtotal: ${item_price*item_unit}</p>
            <br />
        </div>
    )
}
export default Product