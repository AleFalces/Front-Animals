import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetail } from "../../../Redux/Actions";
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import axios from "axios";

import {
  Box,
  useColorModeValue,
  Image,
  Heading,
  Text,
  Center,
  HStack,
  Button,
} from "@chakra-ui/react";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.productDetail);

  useEffect(() => {}, [dispatch]);

  const payMp = async () => {
    axios
      .post(`http://localhost:3001/donation`, {
        unit_price: detail[0].price,
        title: detail[0].name,
      })
      .then((response) => {
        window.open(response.data, "_blank");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  console.log("DETAIL PRODUCT STOCK :", detail[0].stock);

  return (
    <>
      return (
      <div className="detailProductContainerAll">
        <Navbar />
        <div className="detailProductNavbarDivBottom"></div>
        <div className="detailProductContainer">
          <div className="divDetailProductDescription">
            <div className="detailProductDescription">
              <h1>{detail[0].name}</h1>
              {/* <h1>Puntuacion </h1> */}
              {/* <h4>★★★</h4> */}
              <div className="detailDescription">
                <div>
                  <h2>Categoria</h2> <h3>{detail[0].Category}</h3>
                </div>
                <div className="detailProductDescription2">
                  <h2>Descripcion:</h2> <h3>{detail[0].description}</h3>
                </div>
                <div>
                  <h2>Precio</h2> <h3>${detail[0].price}</h3>{" "}
                </div>
                <div>
                  <h2>Stock</h2> <h3>{detail[0].stock}u</h3>
                </div>
              </div>
            </div>
            <div className="imgxbutton">
              <img src={detail[0].image} alt="" />
              <div>
                <button onClick={() => payMp()}>Comprar</button>

                <button
                  onClick={(e) =>
                    detail[0].handlerSetCart(
                      e,
                      detail[0].id,
                      detail[0].price,
                      detail[0].image,
                      detail[0].name,
                      detail[0].stock
                    )
                  }
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="divTopReview"></div>
        <div className="reviewsContainer">Reseñas</div>
        <div className="footerProductDetail">
          <Footer />
        </div>
      </div>
      );
    </>
  );
}

/* //		<button onClick={(e)=>detail[0].handlerSetCart(e, detail[0].id, detail[0].price, detail[0].image, detail[0].name, detail[0].stock )}>Agregar</button> */
/* 
						<button onClick={()=>payMp()}>Comprar</button>

					<button onClick={(e)=>detail[0].handlerSetCart(e, detail[0].id, detail[0].price, detail[0].image, detail[0].name )}>Agregar</button>

			</div>
          </div>
        </div>
// 		</div>
// 		<div className="divTopReview"></div>
// 		<div className="reviewsContainer">
// 			Reseñas
// 			<h1>
// 				Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
// 				consectetur quos sequi maiores id, cum voluptate saepe sint deleniti
// 				dolorum nam necessitatibus velit optio earum. Rem quas fuga autem cum.
// 			</h1>
// 			<h1>
// 				Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
// 				consectetur quos sequi maiores id, cum voluptate saepe sint deleniti
// 				dolorum nam necessitatibus velit optio earum. Rem quas fuga autem cum.
// 			</h1>
// 			<h1>
// 				Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
// 				consectetur quos sequi maiores id, cum voluptate saepe sint deleniti
// 				dolorum nam necessitatibus velit optio earum. Rem quas fuga autem cum.
// 			</h1>
// 			<h1>
// 				Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
// 				consectetur quos sequi maiores id, cum voluptate saepe sint deleniti
// 				dolorum nam necessitatibus velit optio earum. Rem quas fuga autem cum.
// 			</h1>
// 		</div>
// 		<div className="footerProductDetail">
// 			<Footer />
// 		</div> */

// <div className="detailProductContainerAll">
// 			<Navbar />
// 			<div className="detailProductNavbarDivBottom"></div>
// 			<div className="detailProductContainer">
// 				<div className="divDetailProductDescription">
// 					<div className="detailProductDescription">
// 						<h1>{detail[0].name}</h1>
// 						<div className="detailDescription">
// 							<div>
// 								<h2>Categoria</h2> <h3>{detail[0].Category}</h3>
// 							</div>
// 							<div className="detailProductDescription2">
// 								<h2>Descripcion:</h2> <h3>{detail[0].description}</h3>
// 							</div>
// 							<div>
// 								<h2>Precio</h2> <h3>${detail[0].price}</h3>{" "}
// 							</div>
// 							<div><h2>Stock</h2> <h3>{detail[0].stock}u</h3></div>
// 						</div>
// 					</div>
// 					<div className="imgxbutton">
// 						<img src={detail[0].image} alt="" />
// 						<div>
//               		<div className="footerProductDetail">
// 			         <Footer />
//               </div>
//               </div></div>
