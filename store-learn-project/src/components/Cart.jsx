import CartProduct from "./CartProduct";
function Cart({cart}) {
    return(
        <div className="cart">
        <h1>Cart</h1>
        {
            cart.map(cartItem => <CartProduct cartItem={cartItem}/>)
        }
        </div>
    )
};

export default Cart;