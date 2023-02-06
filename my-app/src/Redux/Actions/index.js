import {
  GET_PETS,
  GET_ADOPTION_PETS,
  GET_LOST_PETS,
  GET_PET_ID,
  GET_ALL_USERS,
  GET_USER_ID,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETAIL,
  GET_VETERINARIES,
  GET_DETAILS_VETERINARIES,
  POST_PET,
  UPDATE_PET,
  POST_USER,
  POST_PRODUCT,
  POST_VET,
  FILTER_ADOPTION_VALUES,
  FILTER_BY_SEARCH_AREA,
  SHOP_SEARCH_INPUT_NAME,
  SHOP_FILTER_VALUE,
  NEXT_PAGE,
  PREV_PAGE,
  ACTUAL_PAGE,
  UPDATE_PRODUCT,
  MODIFY_PRODUCT,
  //OUT_OF_STOCK,
  // SET_STATUS_USER,
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

export function getAdoptionPets() {
  return async function (dispatch) {
    try {
      const allPets = await axios.get("http://localhost:3001/pets");
      return dispatch({
        type: GET_ADOPTION_PETS,
        payload: allPets.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getLostPets() {
  return async function (dispatch) {
    try {
      const allPets = await axios.get(`${HOST}/pets`);
      return dispatch({
        type: GET_LOST_PETS,
        payload: allPets.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const petDetails = (id) => async (dispatch) => {
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

export function postProduct(formInput) {
  return async function (dispatch) {
    try {
      const newProduct = await axios.post(`${HOST}/products`, formInput);
      return dispatch({
        type: POST_PRODUCT,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postVet(formInput) {
  return async function (dispatch) {
    try {
      const newVet = await axios.post(`${HOST}/veterinary`, formInput);
      return dispatch({
        type: POST_VET,
      });
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

export const Prev = (actualPage) => (dispatch) => {
  try {
    let next = actualPage - 1;
    dispatch({
      type: PREV_PAGE,
      payload: next,
    });
  } catch (error) {
    console.log(error);
  }
};
export const Next = (actualPage) => (dispatch) => {
  try {
    let next = actualPage + 1;
    dispatch({
      type: NEXT_PAGE,
      payload: next,
    });
  } catch (error) {
    console.log(error);
  }
};
export const ActualPage = (page) => (dispatch) => {
  try {
    dispatch({
      type: ACTUAL_PAGE,
      payload: page,
    });
  } catch (error) {
    console.log(error);
  }
};

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
  //preguntar si se manda en obj o array la data
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

export function updateProduct(id, formInput) {
  return async function (dispatch) {
    try {
      console.log("Action updateProduc", id);
      await axios.put(`${HOST}/products/${id}`, formInput);
      // const updatedProduct = await axios.get(`${HOST}/products`)
      dispatch({
        type: UPDATE_PRODUCT,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function modifyProduct(obj) {
  return async function (dispatch) {
    try {
      console.log("modifyProduct", obj);
      return dispatch({
        type: MODIFY_PRODUCT,
        payload: obj,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postOrUpdatePet(formInput, value, petId) {
  return async function (dispatch) {
    try {
      let payload = {
        formInput,
        value,
      };
      if (value === "update") {
        let json = await axios.put(`${HOST}/pets/${petId}`, formInput);
        return dispatch({
          type: UPDATE_PET,
          payload,
        });
      } else {
        let json = await axios.post(`${HOST}/pets`, formInput); // PUEDE ESTAR MAL (VER ACTION postPet (FALTA TOKEN))
        return dispatch({
          type: POST_PET,
          payload,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}
