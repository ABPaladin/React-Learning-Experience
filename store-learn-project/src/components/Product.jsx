export default function Product({product, add2Cart}) {
    return (
        <div className="product">
            <h2>{product.name}</h2>
            <p><em>{product.price}</em></p>
            <p>{product.description}</p>
            <button onClick={() => add2Cart(product)}>Add 2 Cart</button>

        </div>
    )
}