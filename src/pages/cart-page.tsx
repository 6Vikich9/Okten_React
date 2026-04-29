import {getCart} from "../service/cart.api.service.ts";
import type {ICart} from "../models/cart-model.ts";
import {useEffect, useState} from "react";
import CartComponent from "../component/cart-component.tsx";
import {useLocation, useParams} from "react-router-dom";




const CartPage = () => {
    const [carts, setCarts] = useState<ICart[]>([]);
    const { id } = useParams();

    const location = useLocation();
    const user = location.state;

    useEffect(() => {
        if (id) {
            getCart(+id).then(data => {
                setCarts(data);
            });
        }
    }, [id]);

    return (
        <div>
            <h2>
                Carts of {user ? `${user.firstName} ${user.lastName}` : "Unknown user"}
            </h2>
            {carts.map(cart => (
                <CartComponent key={cart.id} cart={cart} />
            ))}
        </div>
    );
};

export default CartPage;