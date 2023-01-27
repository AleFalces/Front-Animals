import {
  GET_ALL_PETS,
  GET_ADOPTION_PETS,
  GET_LOST_PETS,
  GET_PET_ID,
  POST_PET,
  POST_USER,
  FILTER_CATS_ADOPTION,
  FILTER_DOGS_ADOPTION,
  FILTER_SEX_FEMALE_ADOPTION,
  FILTER_SEX_MALE_ADOPTION,
  FILTER_AGE_PUPPY_ADOPTION,
  FILTER_AGE_YOUNG_ADOPTION,
  FILTER_AGE_ADULT_ADOPTION,
  FILTER_SIZE_SMALL_ADOPTION,
  FILTER_SIZE_MEDIUM_ADOPTION,
  FILTER_SIZE_BIG_ADOPTION,
  FILTER_BY_SEARCH_AREA_ADOPTION,
  FILTER_CATS_LOST,
  FILTER_DOGS_LOST,
  FILTER_LOST_SEX,
  FILTER_LOST_AGE,
  FILTER_LOST_SIZE,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETAIL,
  SET_SHOP_CHECKLIST,
  SHOP_FILTER_CHECKLIST,
  SHOP_SEARCH_INPUT_NAME,
} from "../ActionTypes";
import { HOST } from "../../utils";
import axios from "axios";

export function getAllPets() {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3001/pets");
      return dispatch({
        type: GET_ALL_PETS,
        payload: json.data,
      });
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

export function postPet(formInput) {
  return async function (dispatch) {
    try {
      const json = await axios.post(`${HOST}/pets`, formInput);
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

export function filterBySpecie(value) {
  return async function (dispatch) {
    try {
      if (value === "gato") {
        return dispatch({
          type: FILTER_CATS_ADOPTION,
          payload: value,
        });
      } else {
        return dispatch({
          type: FILTER_DOGS_ADOPTION,
          payload: value,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterBySex(value) {
  return async function (dispatch) {
    try {
      if (value === "hembra") {
        return dispatch({
          type: FILTER_SEX_FEMALE_ADOPTION,
          payload: value,
        });
      } else {
        return dispatch({
          type: FILTER_SEX_MALE_ADOPTION,
          payload: value,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterByAge(value) {
  return async function (dispatch) {
    try {
      if (value === "cachorro") {
        return dispatch({
          type: FILTER_AGE_PUPPY_ADOPTION,
          payload: value,
        });
      }
      if (value === "joven") {
        dispatch({
          type: FILTER_AGE_YOUNG_ADOPTION,
          payload: value,
        });
      } else {
        dispatch({
          type: FILTER_AGE_ADULT_ADOPTION,
          payload: value,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterBySize(value) {
  return async function (dispatch) {
    try {
      if (value === "pequeño") {
        return dispatch({
          type: FILTER_SIZE_SMALL_ADOPTION,
          payload: value,
        });
      }
      if (value === "mediano") {
        dispatch({
          type: FILTER_SIZE_MEDIUM_ADOPTION,
          payload: value,
        });
      }
      if (value === "grande") {
        dispatch({
          type: FILTER_SIZE_BIG_ADOPTION,
          payload: value,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterBySearchArea(inputValue) {
  return async function (dispatch) {
    try {
      dispatch({
        type: FILTER_BY_SEARCH_AREA_ADOPTION,
        payload: inputValue,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterLostSpecies(value) {
  return async function (dispatch) {
    try {
      if (value === "gato") {
        console.log("ACTION LOST SPECIE", value);
        return dispatch({
          type: FILTER_CATS_LOST,
          payload: value,
        });
      } else {
        console.log("ACTION LOST SPECIE", value);
        return dispatch({
          type: FILTER_DOGS_LOST,
          payload: value,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterLostSex(value) {
  return async function (dispatch) {
    try {
      return dispatch({
        type: FILTER_LOST_SEX,
        payload: value,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterLostAge(value) {
  return async function (dispatch) {
    try {
      return dispatch({
        type: FILTER_LOST_AGE,
        payload: value,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterLostSize(value) {
  return async function (dispatch) {
    try {
      return dispatch({
        type: FILTER_LOST_SIZE,
        payload: value,
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

export function getProductDetail(id) {
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
export function setChecklist(checklistValues) {
  return async function (dispatch) {
    try {
      return dispatch({
        type: SET_SHOP_CHECKLIST,
        payload: checklistValues,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function shopFilterChecklist(checklistValues) {
  return async function (dispatch) {
    try {
      console.log("CHECKLIST VALUES", checklistValues);
      return dispatch({
        type: SHOP_FILTER_CHECKLIST,
        payload: checklistValues, // tmb está en el estado global shopChecklist
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
