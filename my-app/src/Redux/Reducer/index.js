import { GET_ALL_PETS, GET_PET_ID } from "../ActionTypes";

const initialState = {
	allPets: [],
	pets: [],
	Detail: {},
};

const RootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_PETS:
			return {
				...state,
				allPets: action.payload.pets,
				pets: action.payload.pets,
			};
		case GET_PET_ID:
			return {
				...state,
				Detail: action.payload,
			};

		default:
			return state;
	}
};

export default RootReducer;
