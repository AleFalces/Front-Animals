import React from "react";
import CardProduct from "./CardProduct.jsx";

export default function CardsProduct ({products, handlerSetCart, handleRemoveItemCart}) {
    return (
            products.map(el => <CardProduct handlerSetCart={handlerSetCart} handleRemoveItemCart={handleRemoveItemCart} name={el.name} id={el.id} image={el.image} description={el.description} price={el.price}></CardProduct> )
    )
}