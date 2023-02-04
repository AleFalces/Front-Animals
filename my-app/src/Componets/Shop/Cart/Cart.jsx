import React, {useState, useEffect} from "react";
import CartCards from "./CartCards";
import "./CartCards.css";

export default function Cart () {
    const [cartFlag, setCartFlag] = useState(false)
    const cart = JSON.parse(window.localStorage.getItem("cart"))
    
    function handleStateChange() {
    if (cartFlag === true) {
        setCartFlag(false)
    } else {
        setCartFlag(true)
    }
    }

function handleRemoveItemCart  (e, id) {
    e.preventDefault();
    try {
        let currentCart = JSON.parse(window.localStorage.getItem("cart"));
        let index;
        let saveProduct = currentCart.find((pr, i) => {
            if(pr.id === id) {
                index = i; return true
            }
        });
        if(saveProduct.amount !== 1) {
            saveProduct.amount -= 1
            saveProduct.total = saveProduct.price * saveProduct.amount
            window.localStorage.setItem("cart", JSON.stringify(currentCart))
            handleStateChange()
            return alert("Eliminaste 1 unidad de este producto de tu carrito")
        }
        if(saveProduct.amount === 1 && currentCart.length === 1) {
            let emptyArray = []
            window.localStorage.setItem("cart", JSON.stringify(emptyArray))
            handleStateChange()
            return alert("Eliminaste este producto de tu carrito")
        }
        if(saveProduct.amount === 1 && currentCart.length === 2) {
            if(index === 0) {
                let arrayResult = [currentCart[1]]
                window.localStorage.setItem("cart", JSON.stringify(arrayResult))
                handleStateChange()
                return alert("Eliminaste este producto de tu carrito")
            } else {
                let array = [currentCart[0]]
                window.localStorage.setItem("cart", JSON.stringify(array))
                handleStateChange()
                return alert("Eliminaste este producto de tu carrito") 
            }
        }
        if(saveProduct.amount === 1 && currentCart.length > 2) {
            if(index === 0) {
                let arrayResult = currentCart.slice(1);
                window.localStorage.setItem("cart", JSON.stringify(arrayResult))
                handleStateChange()
                return alert("Eliminaste este producto de tu carrito") 
            } else if(index === currentCart.length-1) {
                let arrayResult = currentCart.slice(0, -1);
                window.localStorage.setItem("cart", JSON.stringify(arrayResult))
                handleStateChange()
                return alert("Eliminaste este producto de tu carrito")                 
            } else {
                let first = currentCart.slice(0, index)
                let second = currentCart.slice(index+1)
                let arrayResult = [...first, ...second]
                window.localStorage.setItem("cart", JSON.stringify(arrayResult))
                handleStateChange()
                return alert("Eliminaste este producto de tu carrito")                 
            }
        }
    } catch (error) {
      console.log(error);
    }
  }

const handlerSetCart = (e, id, price, image, name) => {
    e.preventDefault()
    try {
      let product = {
        name,
        image,
        price,
        id,
        amount: 1,
      }
      let oldCart = JSON.parse(window.localStorage.getItem("cart"))
      if(oldCart) {
        let index = false;
        oldCart.forEach((pr, i) => {
          if (pr.id === product.id) {
            index = i
          }
        });
        if (index !== false) {
          oldCart[index].amount += 1;
          oldCart[index].total = oldCart[index].price * oldCart[index].amount
          window.localStorage.setItem("cart", JSON.stringify([...oldCart]))
        alert(`Agregaste de nuevo el producto ${name}`)
      } else {
        product.total = product.price
        window.localStorage.setItem("cart", JSON.stringify([...oldCart, product]))
        alert(`Agregaste el producto ${name}`)
      }
    } else {
      product.total = product.price
      window.localStorage.setItem("cart", JSON.stringify([product]))
      alert(`Agregaste el producto ${name}`)
    }

    handleStateChange()
    } catch (error) {
      console.log(error);
    }
  }

  // function accRecursion(array, index) {
  //   if (index === 0) {
  //     return array[index].total
  //   } else {
  //     return accRecursion(array, --index)
  //   }
  // }
    useEffect(() => {
    }, [cartFlag])
    return (
        <div>
          <h1>Cart</h1>
          <div>
            {
            !cart
            ? <h1>NO CART</h1>
            : <h1 className="total">Total: {cart.reduce((acc, el) => acc + el.total ,0)}</h1>
            }
          </div>
          <div>
              {
              !cart
              ? <h1>Tu carrito esta vacio</h1>
              : <div>
                  {cart.map((pr) => <CartCards amount={pr.amount} id={pr.id} image={pr.image} name={pr.name} price={pr.price} total={pr.total} handlerSetCart={handlerSetCart} handleRemoveItemCart={handleRemoveItemCart}/>)}
                </div> 
              }
          </div>
        </div>
    )
}