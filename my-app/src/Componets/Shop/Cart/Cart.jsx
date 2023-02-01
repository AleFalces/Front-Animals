import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import CartCards from "./CartCards";
import { getCart } from "../../../Redux/Actions";
export default function Cart () {
    const dispatch = useDispatch();
    const cart = JSON.parse(window.localStorage.getItem("cart"))
    const reduxCart = useSelector((state) => state.cart)
    const functions = useSelector((state) => state.handlerSetCart)


    useEffect(() => {
        dispatch(getCart(cart))
        console.log("COMPONENTE CART: REDUX CART",reduxCart);
    }, [dispatch])
    return (
        <div>
          <h1>Cart</h1>
          <div>
              {
              !cart
              ? <h1>Tu carrito esta vacio</h1>
              : <div>
                  {cart.map((pr) => <CartCards amount={pr.amount} id={pr.id} image={pr.image} name={pr.name} price={pr.price} total={pr.total} handlerSetCart={functions.handlerSetCart}/>)}
                </div> 
              }
          </div>
        </div>
    )
}