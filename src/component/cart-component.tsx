import type {ICart} from "../models/cart-model.ts";

interface Props
{
    cart: ICart;
}

const CartComponent = ({ cart }: Props) =>
{
    return (
        <div>
            <p><b>Total:</b> {cart.total}</p>
            <p><b>Discounted total:</b> {cart.discountedTotal}</p>
            <p><b>Total products:</b> {cart.totalProducts}</p>
            <p><b>Total quantity:</b> {cart.totalQuantity}</p>

            <h4>Products:</h4>
            {cart.products.map(product => (
                <div key={product.id} style={{marginLeft: '10px'}}>
                    <p>{product.title}</p>
                    <p>Price: {product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                </div>
            ))}
        </div>
    );
};

export default CartComponent;
