import { GET_ALL_PETS, GET_PET_ID } from "../ActionTypes";
import axios from "axios";

export const getAllPets = () => async (dispatch) => {
	try {
		const getPets = await axios.get("https://restcountries.com/v3/all");
		dispatch({
			type: GET_ALL_PETS,
			payload: {
				allPets: getPets.data.pets,
			},
		});
	} catch (err) {
		console.log(err.message);
	}
};

export const petDetails = (id) => async (dispatch) => {
	try {
		const getID = await axios.get(`http://localhost:3001/pet/${id}`);
		console.log("getid", getID);
		dispatch({
			type: GET_PET_ID,
			payload: getID.data,
		});
	} catch (err) {
		console.log(err.message);
	}
};
