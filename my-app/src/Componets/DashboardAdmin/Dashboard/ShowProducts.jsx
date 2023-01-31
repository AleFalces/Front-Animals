import React from "react";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'

import {getAllProducts} from '../../../Redux/Actions/index'

const ListProducts = () => {
    const dispatch = useDispatch()
    

    const product = useSelector((state) => state.allProducts)
    // console.log("Productos", product)

    return(
            product.map(p => p.name)
    )
};

export default ListProducts;
