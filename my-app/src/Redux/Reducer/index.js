import { GET_ALL_PETS, GET_PET_ID, POST_PET, POST_USER } from "../ActionTypes";

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
        allPets: action.payload,
        pets: action.payload,
      };
    case GET_PET_ID:
      return {
        ...state,
        Detail: action.payload,
      };
    case POST_PET:
      return {
        ...state,
      };
    case POST_USER:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default RootReducer;
