import { GET_ALL_PETS, GET_PET_ID } from "../ActionTypes";
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
