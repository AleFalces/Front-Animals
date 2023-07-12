import {
  GET_PETS,
  GET_PET_ID,
  GET_ALL_USERS,
  GET_USER_ID,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETAIL,
  GET_VETERINARIES,
  GET_DETAILS_VETERINARIES,
  POST_PET,
  POST_USER,
  POST_PRODUCT,
  POST_VET,
  FILTER_ADOPTION_VALUES,
  FILTER_BY_SEARCH_AREA,
  SHOP_SEARCH_INPUT_NAME,
  SHOP_FILTER_VALUE,
  UPDATE_PET,
  UPDATE_PRODUCT,
  UPDATE_USER,
  UPDATE_VET,
  DELETE_PET,
} from "../ActionTypes";
import { HOST, header } from "../../utils";
import axios from "axios";

export function getAllUsers() {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3001/users");
      return dispatch({
        type: GET_ALL_USERS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getPets(value) {
  return async function (dispatch) {
    try {
      if (value === undefined) {
        const json = await axios.get(`${HOST}/pets`);
        const payload = {
          allPets: json.data,
          value,
        };
        return dispatch({
          type: GET_PETS,
          payload,
        });
      }
      if (value === "lostPets") {
        const json = await axios.get(`${HOST}/pets`);
        const lostPets = json.data.filter((pet) => pet.status === "perdido");
        const payload = {
          lostPets,
          value,
        };
        return dispatch({
          type: GET_PETS,
          payload,
        });
      }
      if (value === "adoptions") {
        const json = await axios.get(`${HOST}/pets`);
        const adoptionPets = json.data.filter(
          (pet) => pet.status === "encontrado"
        );
        const payload = {
          adoptionPets,
          value,
        };
        return dispatch({
          type: GET_PETS,
          payload,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function getUserId(id) {
  return async function (dispatch) {
    try {
      const json = await axios.get(`http://localhost:3001/users/${id}`);
      return dispatch({ type: GET_USER_ID, payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export const getPetDetails = (id) => async (dispatch) => {
  try {
    const getID = await axios.get(`${HOST}/pets/${id}`);
    return dispatch({
      type: GET_PET_ID,
      payload: getID.data,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export function postPet(formInput, token) {
  return async function (dispatch) {
    try {
      const config = header(token);
      const json = await axios.post(`${HOST}/pets`, formInput, config);
      return dispatch({
        type: POST_PET,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postUser(formInput) {
  return async function (dispatch) {
    try {
      const newUser = await axios.post(`${HOST}/users`, formInput);
      return dispatch({
        type: POST_USER,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateUser(userID, formInput) {
  return async function (dispatch) {
    try {
      console.log("Action updateUSER", userID);
      await axios.put(`${HOST}/users/${userID}`, formInput);

      dispatch({
        type: UPDATE_USER,
      });
    } catch (error) {
      console.log("Action updateUSER", userID, formInput);
    }
  };
}

export function postOrUpdateProduct(formInput, value, id) {
  console.log("FORMINPUT", formInput);
  return async function (dispatch) {
    try {
      if (value === undefined) {
        const newProduct = await axios.post(`${HOST}/products`, formInput);
        return dispatch({
          type: POST_PRODUCT,
        });
      } else {
        // console.log("UPDATEPRODUCT INPUT", formInput);
        await axios.put(`${HOST}/products/${id}`, formInput);
        dispatch({
          type: UPDATE_PRODUCT,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function postOrUpdateVet(formInput, value, id) {
  console.log("VALUE", value);
  console.log("FORMINPUT", formInput);
  return async function (dispatch) {
    try {
      if (value === undefined) {
        const newVet = await axios.post(`${HOST}/veterinary`, formInput);
        return dispatch({
          type: POST_VET,
        });
      } else {
        await axios.put(`${HOST}/veterinary/${id}`, formInput);
        dispatch({
          type: UPDATE_VET,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterAdoptionPets(arrayFilterValues, value) {
  return async function (dispatch) {
    try {
      const payload = {
        arrayFilterValues,
        value,
      };
      dispatch({
        type: FILTER_ADOPTION_VALUES,
        payload: payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterBySearchArea(inputValue, value) {
  return async function (dispatch) {
    try {
      let payload = {
        inputValue,
        value,
      };
      return dispatch({
        type: FILTER_BY_SEARCH_AREA,
        payload: payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAllProducts() {
  return async function (dispatch) {
    try {
      const allProducts = await axios.get(`${HOST}/products`);
      return dispatch({
        type: GET_ALL_PRODUCTS,
        payload: allProducts.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getProductDetail(obj) {
  return async function (dispatch) {
    try {
      const productDetail = await axios.get(`${HOST}/products/${obj.id}`);
      productDetail.data[0].handlerSetCart = obj.handlerSetCart;
      productDetail.data[0].handleRemoveItemCart = obj.handleRemoveItemCart;
      return dispatch({
        type: GET_PRODUCT_DETAIL,
        payload: productDetail.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getProductDetailAdmin(id) {
  return async function (dispatch) {
    try {
      const productDetail = await axios.get(`${HOST}/products/${id}`);
      return dispatch({
        type: GET_PRODUCT_DETAIL,
        payload: productDetail.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function shopSearchInputName(input) {
  return async function (dispatch) {
    try {
      return dispatch({
        type: SHOP_SEARCH_INPUT_NAME,
        payload: input,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function shopFilterValue(value) {
  return async function (dispatch) {
    try {
      dispatch({
        type: SHOP_FILTER_VALUE,
        payload: value,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAllVeterinaries() {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3001/veterinary");
      return dispatch({
        type: GET_VETERINARIES,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const VeterinaryDetails = (id) => async (dispatch) => {
  try {
    const getID = await axios.get(`${HOST}/veterinary/${id}`);
    return dispatch({
      type: GET_DETAILS_VETERINARIES,
      payload: getID.data,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export function setStatusUser(id) {
  return async function (dispatch) {
    try {
      await axios.put(`${HOST}/users/setStatusUser/${id}`);
      const updatedUsers = await axios.get(`${HOST}/users`);
      dispatch({
        type: GET_ALL_USERS,
        payload: updatedUsers.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postOrUpdatePet(formInput, value, petId) {
  return async function (dispatch) {
    try {
      if (value === "update") {
        // console.log("ACTION CASO UPDATE");
        // console.log("FORM INPUT", formInput);
        // console.log("VALUE", value);
        // console.log("PETID", petId);
        // const userLocalstorage = JSON.parse(
        // 	localStorage.getItem("loggedUser")
        // )[0];
        // console.log("USERLOCALSTORAGE: ", userLocalstorage);

        let json = await axios.put(`${HOST}/pets/${petId}`, formInput);
        return dispatch({
          type: UPDATE_PET,
        });
      } else {
        const userId = JSON.parse(localStorage.getItem("loggedUser"))[0].id;
        formInput = { ...formInput, userId };
        let json = await axios.post(`${HOST}/pets`, formInput);
        return dispatch({
          type: POST_PET,
        });
        // console.log("USER ID ACTION CASO POST", userId);
        // console.log("LOG ACTION CASO POST", formInput, value, petId);
        // console.log(formInput, value, petId);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function deletePet(idPet, idUser) {
  return async function (dispatch) {
    try {
      const json = await axios.delete(`${HOST}/pets/${idPet}`);
      const json2 = await axios.get(`http://localhost:3001/users/${idUser}`);
      return dispatch({
        type: DELETE_PET,
        payload: json2.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function deletePetAdmin(id) {
  return async function (dispatch) {
    try {
      const json = await axios.delete(`${HOST}/pets/${id}`);
      const json2 = await axios.get(`http://localhost:3001/pets`);
      return dispatch({
        type: GET_PETS,
        payload: { allPets: json2.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteProductAdmin(id) {
  return async function (dispatch) {
    try {
      const json = await axios.delete(`${HOST}/products/${id}`);
      const json2 = await axios.get(`http://localhost:3001/products`);
      return dispatch({
        type: GET_ALL_PRODUCTS,
        payload: json2.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}
