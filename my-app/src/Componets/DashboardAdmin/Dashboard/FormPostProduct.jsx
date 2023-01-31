import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postProduct } from "../../Redux/Actions";

const FormPostProduct = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    description: "",
    Category: "",
    image: "",
    price: 0,
    stock: 0,
  });

  const errors = {
    name: "",
    description: "",
    Category: "",
    image: "",
    price: 0,
    stock: 0,
  };

  function handlerChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value.trim(),
    });
    console.log("input", input);
    console.log("error", errors);
  }

  function handlerErrors(e) {
    e.preventDefaul();
    if (input.name === "") {
      errors.name = "Ingresá el nombre del producto.";
    }
    if (input.description === "") {
      errors.description = "¡Se debe agregar una descripcion del producto!";
    }
    if (input.Category === "") {
      errors.Category = "Falta elegir la categoría.";
    }
    if (input.image === "") {
      errors.image = "Selecciona una imagen.";
    }
    if (input.price < 100) {
      errors.price = "Selecciona una imagen.";
    }
    if (input.stock <= 0) {
      errors.stock = "Agregar por lo menos un stock del producto.";
    }
    if (
      !errors.name &&
      !errors.description &&
      !errors.Category &&
      !errors.image &&
      !errors.price &&
      !errors.stock
    ) {
      handlerSubmit(e);
    } else {
      alert("Falta rellenar algun campo");
    }
  }

  function handlerSubmit(e) {
    e.preventDefault();

    dispatch(postProduct(input));
    alert("Producto agregado a la tienda.");
  }

  return(
    <div>
        <form onSubmit={(e) => handlerErrors(e)}>
            <h1>Añadir un producto a la tienda</h1>
            <div>
                
            </div>
        </form>
    </div>
  )

};

export default FormPostProduct;
