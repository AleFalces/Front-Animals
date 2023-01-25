import { GET_ALL_PETS, GET_PET_ID, POST_PET } from "../ActionTypes";
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

export const petDetails = (id) => async (dispatch) => {
  try {
    const getID = await axios.get(`http://localhost:3001/pets/${id}`);
    console.log("getid", getID);
    dispatch({
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
      console.log("ACTION ENTRE! input desde form", formInput);
      const json = await axios.post("http://localhost:3001/pets", formInput);
      console.log("ACTION!!! : JSON DATAAAAA!!!!", json.data);
      dispatch({
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
      console.log("ENTRÉ A LA ACTION POSTUSER");
      console.log("FORMINPUT DESDE ACTION POSTUSER!", formInput);
      const newUser = await axios.post(
        "http://localhost:3001/?????????????????",
        formInput
      );
      dispatch({
        type: POST_USER,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
