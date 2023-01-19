import { GET_ALL_PETS } from "../ActionTypes";

const initialState = {
	allPets: [],
	pets: [],
	details: {},
	allUsers: [],
};

const RootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_PETS:
			return {
				...state,
				allPets: action.payload.pets,
				pets: action.payload.pets,
			};

		default:
			return state;
	}

};

export default RootReducer;
