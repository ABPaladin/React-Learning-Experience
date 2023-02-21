export default function CartProduct({cartItem}){
    return (
        <div className="cart-product">
            <h3>{cartItem.name}</h3>
            <p>{cartItem.price}</p>
            <strong>{cartItem.qnt}</strong>
        </div>
    )
}