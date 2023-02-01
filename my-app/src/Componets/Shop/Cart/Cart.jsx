import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Cart () {
    const dispatch = useDispatch();


    return (
        <div>
          <h1>Cart</h1>
          <div>
              Productos
          </div>
        </div>
    )
}