import { GET_ALL_PETS } from "../ActionTypes";
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
